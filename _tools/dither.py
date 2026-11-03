"""Turn a painting into an 8-bit backdrop: NES palette, Bayer ordered dither.

Needs numpy and ffmpeg (ffmpeg does decode/resize/encode).
usage: python3 -I _tools/dither.py SRC OUT.png [--width 256] [--colors 14] [--spread 28] [--crop x0,y0,x1,y1]
"""
import argparse
import json
import subprocess

import numpy as np

# Common NES (2C02) palette, the 54 distinct usable colours.
NES = """7C7C7C 0000FC 0000BC 4428BC 940084 A80020 A81000 881400 503000 007800 006800 005800 004058 000000
BCBCBC 0078F8 0058F8 6844FC D800CC E40058 F83800 E45C10 AC7C00 00B800 00A800 00A844 008888
F8F8F8 3CBCFC 6888FC 9878F8 F878F8 F85898 F87858 FCA044 F8B800 B8F818 58D854 58F898 00E8D8 787878
FCFCFC A4E4FC B8B8F8 D8B8F8 F8B8F8 F8A4C0 F0D0B0 FCE0A8 F8D878 D8F878 B8F8B8 B8F8D8 00FCFC F8D8F8"""
PALETTE = np.array([[int(h[i:i + 2], 16) for i in (0, 2, 4)] for h in NES.split()], dtype=float)

BAYER4 = np.array([[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]) / 16 - 0.5


def load(src, width, crop):
    vf = []
    if crop:
        x0, y0, x1, y1 = (int(v) for v in crop.split(","))
        vf.append(f"crop={x1 - x0}:{y1 - y0}:{x0}:{y0}")
    vf.append(f"scale={width}:-2:flags=lanczos,eq=contrast=1.25:saturation=1.35")  # silhouettes over mud
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", src, "-vf", ",".join(vf),
                          "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], capture_output=True, check=True).stdout
    h = len(raw) // (width * 3)
    return np.frombuffer(raw, np.uint8).reshape(h, width, 3).astype(float)


def save(px, out):
    h, w, _ = px.shape
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{w}x{h}",
                    "-i", "-", "-pix_fmt", "rgb24", out], input=px.astype(np.uint8).tobytes(), check=True)


def nearest(pixels, palette):
    return ((pixels[:, :, None, :] - palette[None, None, :, :]) ** 2).sum(-1).argmin(-1)


def dither(px, colors, spread):
    h, w, _ = px.shape
    # Keep the N palette colours the painting uses most: real NES art works from a small set.
    counts = np.bincount(nearest(px, PALETTE).ravel(), minlength=len(PALETTE))
    pal = []
    for i in np.argsort(counts)[::-1]:  # skip near-duplicates like 787878 vs 7C7C7C
        if counts[i] and all(((PALETTE[i] - q) ** 2).sum() > 40 ** 2 for q in pal):
            pal.append(PALETTE[i])
    pal = np.array(pal[:colors])
    th = np.tile(BAYER4, (h // 4 + 1, w // 4 + 1))[:h, :w, None] * spread
    return pal[nearest(px + th, pal)]


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("out")
    ap.add_argument("--width", type=int, default=256)
    ap.add_argument("--colors", type=int, default=14)
    ap.add_argument("--spread", type=float, default=28, help="dither strength, 0 = none")
    ap.add_argument("--crop", help="x0,y0,x1,y1 in source pixels")
    a = ap.parse_args()
    out = dither(load(a.src, a.width, a.crop), a.colors, a.spread)
    used = {tuple(c) for c in out.reshape(-1, 3).astype(int)}
    assert used <= {tuple(c) for c in PALETTE.astype(int)}, "non-NES colour in output"
    assert len(used) <= a.colors
    save(out, a.out)
    print(a.out, out.shape[1::-1], f"{len(used)} colours:", " ".join("#%02X%02X%02X" % c for c in sorted(used)))
