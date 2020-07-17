(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-basic\">\n    <div class=\"container\">\n      <h3 class=\"title\">Basic Elements</h3>\n      <div id=\"buttons\">\n          <h4>Buttons</h4>\n          <p class=\"category\">Pick your style</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\n                  </button>\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  </button>\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your size</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\n                  <button class=\"btn btn-primary\">Regular</button>\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your color</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn\">Default</button>\n                  <button class=\"btn btn-primary\">Primary</button>\n                  <button class=\"btn btn-info\">Info</button>\n                  <button class=\"btn btn-success\">Success</button>\n                  <button class=\"btn btn-warning\">Warning</button>\n                  <button class=\"btn btn-danger\">Danger</button>\n                  <button class=\"btn btn-neutral\">Neutral</button>\n              </div>\n          </div>\n          <h4>Links</h4>\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <button class=\"btn btn-link\">Default</button>\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\n                  <button class=\"btn btn-link btn-info\">Info</button>\n                  <button class=\"btn btn-link btn-success\">Success</button>\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\n              </div>\n          </div>\n      </div>\n      <div id=\"inputs\">\n          <h4>Inputs</h4>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-success\">\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-danger\">\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"fa fa-user-circle\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row\" id=\"checkRadios\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\">\n                    <span class=\"form-check-sign\"></span>\n                    Unchecked\n                </label>\n            </div>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Checked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Unchecked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Checked\n                </label>\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n                    <span class=\"form-check-sign\"></span>\n                    Radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Radio is on\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is on\n                </label>\n            </div>\n        </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Toggle Buttons</p>\n              <bSwitch\n                  [(ngModel)]=\"state\">\n              </bSwitch>\n              <bSwitch> Toggle is off\n              </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Sliders</p>\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n              <br>\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n          </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\n\n    </div>\n      <div class=\"container\">\n          <div class=\"content-center brand\">\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\n          </div>\n          <h6 class=\"category category-absolute\">Designed by\n              <a href=\"https://invisionapp.com/\" target=\"_blank\">\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\n              </a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\n              </a>.</h6>\n      </div>\n  </div>\n\n  <div class=\"main\">\n    <div class=\"section section-images\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hero-images-container\">\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-1\">\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-2\">\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section section-tabs\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Icons on Card</p>\n                      <!-- Nav tabs -->\n\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Background on Card</p>\n                      <!-- Tabs with Background on Card -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\n                                    <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                      <!-- End Tabs on plain Card -->\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pagination\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4>Progress Bars</h4>\n                      <div class=\"progress-container\">\n                        <span class=\"progress-badge\">Default</span>\n\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">Primary</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <br />\n                      <h4>Navigation Pills</h4>\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"far fa-gem\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"fa fa-thermometer-full\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-suitcase\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab [disabled]=\"true\">\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-exclamation\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Pagination</h4>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br>\n                      <h4>Labels</h4>\n                      <span class=\"badge badge-default\">Default</span>\n                      <span class=\"badge badge-primary\">Primary</span>\n                      <span class=\"badge badge-success\">Success</span>\n                      <span class=\"badge badge-info\">Info</span>\n                      <span class=\"badge badge-warning\">Warning</span>\n                      <span class=\"badge badge-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"notifications\">\n          <div class=\"container\">\n            <h4>Notifications</h4>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\n          <div class=\"container\">\n              <h3 class=\"title\">Angular Native Components</h3>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <h4>Modal</h4>\n                      <ngbd-modal-component></ngbd-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Popovers</h4>\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\n                          On right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          On top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          On left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          On bottom\n                      </button>\n                  </div>\n                  <br />\n                  <br />\n                  <div class=\"col-md-6\">\n                      <h4>Datetimepicker</h4>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"datepicker-container\">\n                                  <div class=\"form-group\">\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\n                \t\t\t            </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 end collapse -->\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Tooltips</h4>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         On right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                       On left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         On top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                          On bottom\n                      </button>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <br>\n                  </div>\n              <!-- </div>\n            </div> -->\n          </div>\n\n          <div class=\"section\" id=\"carousel\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>Carousel</h4>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                      <div class=\"col-8\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Nature, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Somewhere Beyond, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Yellowstone National Park, United States</h5>\n                              </div>\n                            </ng-template>\n                        </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section section-nucleo-icons\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12\">\n                      <h2 class=\"title\">Nucleo Icons</h2>\n                      <h5 class=\"description\">\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\n                      </h5>\n                      <!-- <div class=\"nucleo-container\">\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\n      </div> -->\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                      <div class=\"icons-container\">\n                          <i class=\"now-ui-icons ui-1_send\"></i>\n                          <i class=\"now-ui-icons ui-2_like\"></i>\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                          <i class=\"now-ui-icons text_bold\"></i>\n                          <i class=\"now-ui-icons tech_headphones\"></i>\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                          <i class=\"now-ui-icons design_palette\"></i>\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                          <i class=\"now-ui-icons location_pin\"></i>\n                          <i class=\"now-ui-icons objects_key-25\"></i>\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"section\">\n          <div class=\"container text-center\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"col-md-12 col-lg-8\">\n                      <h2 class=\"title\">Completed with examples</h2>\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\n          <div class=\"container login-page\">\n            <div class=\"row\">\n              <div class=\"col-md-4 content-center ml-auto mr-auto\">\n                  <div class=\"card card-login card-plain\">\n                      <form class=\"form\" method=\"\" action=\"\">\n                          <div class=\"header header-primary text-center\">\n                              <div class=\"logo-container\">\n                                  <img src=\"assets/img/now-logo.png\" alt=\"\">\n                              </div>\n                          </div>\n                          <div class=\"content\">\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                              </div>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                            </div>\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                              </div>\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                            </div>\n                          </div>\n                          <div class=\"footer text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Create Account</a>\n                              </h6>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                              </h6>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n            </div>\n              <div class=\"col text-center\">\n                  <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-examples\" data-background-color=\"black\">\n          <div class=\"space-50\"></div>\n          <div class=\"container text-center\">\n              <div class=\"row\">\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/landing']\">\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\n                  </div>\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/profile']\">\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\n          <div class=\"container\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\n                  </div>\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\n                          Download Angular\n                      </a>\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\n                          Download PSD/Sketch\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <br>\n              <div class=\"row text-center mt-5\">\n                  <div class=\"col-md-8 ml-auto mr-auto\">\n                      <h2>Want more?</h2>\n                      <h5 class=\"description\">We've just launched\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\n                  </div>\n                  <div class=\"col-md-12\">\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <div class=\"row justify-content-md-center sharing-area text-center\">\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <h3>Thank you for supporting us!</h3>\n                </div>\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-linkedin\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\n                    <i class=\"fab fa-github\"></i>\n                  </a>\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer\" data-background-color=\"black\">\n      <div class=\"container\">\n          <nav>\n              <ul>\n                  <li>\n                      <a href=\"https://www.creative-tim.com\">\n                          Creative Tim\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://www.creative-tim.com/about-us\">\n                          About Us\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"http://blog.creative-tim.com\">\n                          Blog\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                          MIT License\n                      </a>\n                  </li>\n              </ul>\n          </nav>\n          <div class=\"copyright\">\n              &copy;\n            {{data | date: 'yyyy'}}, Designed by\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n          </div>\n      </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\n Launch Modal\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n   Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>Menu</h4>\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <div ngbDropdown class=\"dropdown\">\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                        <p>\n                                            Dropdown\n                                        </p>\n                                      </a>\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                      </div>\n                                  </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Menu with Icons</h4>\n                <nav class=\"navbar navbar-expand-lg bg-info\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                        </a>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <h4>Navigation</h4>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\n            <!-- Navbar Primary  -->\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Primary -->\n            <!-- Navbar Info -->\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Info -->\n            <!-- Navbar Success -->\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Success -->\n            <!-- Navbar Warning -->\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Warning -->\n            <!-- Navbar Danger -->\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Share</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Tweet</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                    <p>Pin</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Danger -->\n            <!-- Navbar Transparent -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Facebook</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Twitter</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                    <p>Instagram</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Transparent-->\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nucleo-icons-style\">\n  <header>\n      <h1>Nucleo Outline Web Font v2.9</h1>\n      <p>\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\n      </p>\n  </header>\n  <div id=\"cd-nav\">\n      <nav>\n          <ul id=\"cd-main-nav\">\n              <li>\n                  <a href=\"#arrows\">Arrows</a>\n              </li>\n              <li>\n                  <a href=\"#business\">Business &amp; Finance</a>\n              </li>\n              <li>\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\n              </li>\n              <li>\n                  <a href=\"#design\">Design &amp; Development</a>\n              </li>\n              <li>\n                  <a href=\"#emoticons\">Emoticons</a>\n              </li>\n              <li>\n                  <a href=\"#files\">Files &amp; Folders</a>\n              </li>\n              <li>\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\n              </li>\n              <li>\n                  <a href=\"#loaders\">Loaders</a>\n              </li>\n              <li>\n                  <a href=\"#maps\">Maps &amp; Location</a>\n              </li>\n              <li>\n                  <a href=\"#media\">Media</a>\n              </li>\n              <li>\n                  <a href=\"#objects\">Objects</a>\n              </li>\n              <li>\n                  <a href=\"#school\">School &amp; Education</a>\n              </li>\n              <li>\n                  <a href=\"#shopping\">Shopping</a>\n              </li>\n              <li>\n                  <a href=\"#sport\">Sport</a>\n              </li>\n              <li>\n                  <a href=\"#technology\">Technology</a>\n              </li>\n              <li>\n                  <a href=\"#text\">Text Editing</a>\n              </li>\n              <li>\n                  <a href=\"#gestures\">Touch Gestures</a>\n              </li>\n              <li>\n                  <a href=\"#transportation\">Transportation</a>\n              </li>\n              <li>\n                  <a href=\"#travel\">Travel</a>\n              </li>\n              <li>\n                  <a href=\"#interface\">User Interface</a>\n              </li>\n              <li>\n                  <a href=\"#users\">Users</a>\n              </li>\n          </ul>\n      </nav>\n  </div>\n  <div id=\"icons-wrapper\">\n      <section id=\"arrows\">\n          <h2>Arrows</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                  <p>arrows-1_cloud-download-93</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                  <p>arrows-1_cloud-upload-94</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                  <p>arrows-1_minimal-down</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                  <p>arrows-1_minimal-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                  <p>arrows-1_minimal-right</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                  <p>arrows-1_minimal-up</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                  <p>arrows-1_refresh-69</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n                  <p>arrows-1_share-66</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"business\">\n          <h2>Business &amp; Finance</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons business_badge\"></i>\n                  <p>business_badge</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bank\"></i>\n                  <p>business_bank</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\n                  <p>business_briefcase-24</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\n                  <p>business_bulb-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                  <p>business_chart-bar-32</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                  <p>business_chart-pie-36</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_globe\"></i>\n                  <p>business_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_money-coins\"></i>\n                  <p>business_money-coins</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"clothes\">\n          <h2>Clothes &amp; Accessories</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                  <p>clothes_tie-bow</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"design\">\n          <h2>Design &amp; Development</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons design_app\"></i>\n                  <p>design_app</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                  <p>design_bullet-list-67</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_image\"></i>\n                  <p>design_image</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_palette\"></i>\n                  <p>design_palette</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_scissors\"></i>\n                  <p>design_scissors</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_vector\"></i>\n                  <p>design_vector</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_html5\"></i>\n                  <p>design-2_html5</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                  <p>design-2_ruler-pencil</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"emoticons\">\n          <h2>Emoticons</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                  <p>emoticons_satisfied</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"files\">\n          <h2>Files &amp; Folders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons files_box\"></i>\n                  <p>files_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_paper\"></i>\n                  <p>files_paper</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\n                  <p>files_single-copy-04</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"medical\">\n          <h2>Healthcare &amp; Medical</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons health_ambulance\"></i>\n                  <p>health_ambulance</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"loaders\">\n          <h2>Loaders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\n                  <p>loader_gear</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\n                  <p>loader_refresh</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"maps\">\n          <h2>Maps &amp; Location</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons location_bookmark\"></i>\n                  <p>location_bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_compass-05\"></i>\n                  <p>location_compass-05</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_map-big\"></i>\n                  <p>location_map-big</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_pin\"></i>\n                  <p>location_pin</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_world\"></i>\n                  <p>location_world</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"media\">\n          <h2>Media</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons media-1_album\"></i>\n                  <p>media-1_album</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\n                  <p>media-1_button-pause</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\n                  <p>media-1_button-play</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\n                  <p>media-1_button-power</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                  <p>media-1_camera-compact</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\n                  <p>media-2_note-03</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                  <p>media-2_sound-wave</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"objects\">\n          <h2>Objects</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons objects_diamond\"></i>\n                  <p>objects_diamond</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_globe\"></i>\n                  <p>objects_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_key-25\"></i>\n                  <p>objects_key-25</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_planet\"></i>\n                  <p>objects_planet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\n                  <p>objects_spaceship</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_support-17\"></i>\n                  <p>objects_support-17</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                  <p>objects_umbrella-13</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"school\">\n          <h2>School &amp; Education</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                  <p>education_agenda-bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_atom\"></i>\n                  <p>education_atom</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_glasses\"></i>\n                  <p>education_glasses</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_hat\"></i>\n                  <p>education_hat</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_paper\"></i>\n                  <p>education_paper</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"shopping\">\n          <h2>Shopping</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\n                  <p>shopping_bag-16</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_basket\"></i>\n                  <p>shopping_basket</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_box\"></i>\n                  <p>shopping_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                  <p>shopping_cart-simple</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\n                  <p>shopping_credit-card</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                  <p>shopping_delivery-fast</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_shop\"></i>\n                  <p>shopping_shop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\n                  <p>shopping_tag-content</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"sport\">\n          <h2>Sport</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons sport_trophy\"></i>\n                  <p>sport_trophy</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                  <p>sport_user-run</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"technology\">\n          <h2>Technology</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\n                  <p>tech_controller-modern</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_headphones\"></i>\n                  <p>tech_headphones</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_laptop\"></i>\n                  <p>tech_laptop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_mobile\"></i>\n                  <p>tech_mobile</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tablet\"></i>\n                  <p>tech_tablet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tv\"></i>\n                  <p>tech_tv</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\n                  <p>tech_watch-time</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"text\">\n          <h2>Text Editing</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons text_align-center\"></i>\n                  <p>text_align-center</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_align-left\"></i>\n                  <p>text_align-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_bold\"></i>\n                  <p>text_bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_caps-small\"></i>\n                  <p>text_caps-small</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"gestures\">\n          <h2>Touch Gestures</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\n                  <p>gestures_tap-01</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"transportation\">\n          <h2>Transportation</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                  <p>transportation_air-baloon</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                  <p>transportation_bus-front-12</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"travel\">\n          <h2>Travel</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons travel_info\"></i>\n                  <p>travel_info</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\n                  <p>travel_istanbul</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"interface\">\n          <h2>User Interface</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                  <p>ui-1_bell-53</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                  <p>ui-1_calendar-60</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_check\"></i>\n                  <p>ui-1_check</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                  <p>ui-1_lock-circle-open</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_send\"></i>\n                  <p>ui-1_send</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                  <p>ui-1_settings-gear-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                  <p>ui-1_simple-add</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                  <p>ui-1_simple-delete</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  <p>ui-1_simple-remove</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                  <p>ui-1_zoom-bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  <p>ui-2_chat-round</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  <p>ui-2_favourite-28</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_like\"></i>\n                  <p>ui-2_like</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                  <p>ui-2_settings-90</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                  <p>ui-2_time-alarm</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\n                  <p>ui-1_email-85</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"users\">\n          <h2>Users</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons users_circle-08\"></i>\n                  <p>users_circle-08</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons users_single-02\"></i>\n                  <p>users_single-02</p>\n              </li>\n          </ul>\n      </section>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  examples works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\n            style=\"background-image: url('assets/img/group.jpg');\">\n            <!-- https://coolors.co/07406b-c48218-407261-648c7f-aaadc4-d6eeff-010000 -->\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <h1 class=\"title\">Somos Zéntrico</h1>\n                <div class=\"text-center\">\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                        <i class=\"fab fa-facebook-square\"></i>\n                    </a>\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                        <i class=\"fab fa-twitter\"></i>\n                    </a>\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                        <i class=\"fab fa-google-plus\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-about-us\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">¿Quénes somos?</h2>\n                    <h5 class=\"description\">Curabitur purus nulla, volutpat sed lacinia ut, finibus non ex. Integer\n                        tempus euismod eros, vel pellentesque mi posuere id. Etiam et posuere sapien. Cras nibh nisl,\n                        ultricies eget sem vitae, varius posuere tortor.\n                    </h5>\n                </div>\n            </div>\n            <div class=\"separator separator-primary\"></div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\n                            <!-- First image on the left side -->\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea\n                                ice has been declining significantly, while sea ice in the Antarctichas increased very\n                                slightly\"\n                                <br>\n                                <br>\n                                <small>-NOAA</small>\n                            </p>\n                        </div>\n                        <!-- Second image on the left side of the article -->\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\">\n                        </div>\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and\n                            that process will continue whatever happens with climate change. Even if the Arctic\n                            continues to be one of the fastest-warming regions of the world, it will always be plunged\n                            into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural\n                            reasons, there’s huge variety of the state of the ice.\n                        </p>\n                        <p>\n                            For a start, it does not automatically follow that a record amount of ice will melt this\n                            summer. More important for determining the size of the annual thaw is the state of the\n                            weather as the midnight sun approaches and temperatures rise. But over the more than 30\n                            years of satellite records, scientists have observed a clear pattern of decline,\n                            decade-by-decade.\n                        </p>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and\n                            that process will continue whatever happens with climate change. Even if the Arctic\n                            continues to be one of the fastest-warming regions of the world, it will always be plunged\n                            into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural\n                            reasons, there’s huge variety of the state of the ice.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-team text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Conozca a nuestro equipo</h2>\n            <div class=\"team\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\"\n                                class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Jorge Gutiérrez</h4>\n                            <p class=\"category text-primary\">Gerente General</p>\n                            <p class=\"description\">Phasellus ultrices neque magna, vitae rhoncus felis rutrum in.\n                                Phasellus iaculis pellentesque ligula, ut egestas felis ultricies vel. Donec sit amet\n                                quam sit amet metus molestie consequat ac congue quam.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-instagram\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-facebook-square\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\"\n                                class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Ryan Tompson</h4>\n                            <p class=\"category text-primary\">Designer</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can\n                                give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\"\n                                class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Eva Jenner</h4>\n                            <p class=\"category text-primary\">Fashion</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can\n                                give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-google-plus\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-youtube\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i\n                                    class=\"fab fa-twitter\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-contact-us text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Trabaje con nosotros</h2>\n            <p class=\"description\">Su proyecto es prioritario</p>\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\n                    <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                                <i class=\"now-ui-icons users_circle-08\"></i>\n                            </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre Completo\" (focus)=\"focus=true\"\n                            (blur)=\"focus=false\">\n                    </div>\n                    <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                                <i class=\"now-ui-icons ui-1_email-85\"></i>\n                            </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"correo@direccion.com\" (focus)=\"focus1=true\"\n                            (blur)=\"focus1=false\">\n                    </div>\n                    <div class=\"textarea-container\">\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\"\n                            placeholder=\"Su consulta...\"></textarea>\n                    </div>\n                    <div class=\"send-button\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Enviar</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"page-header\" filter-color=\"orange\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-4 content-center\">\n            <div class=\"card card-login card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header header-primary text-center\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"content\">\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                        </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                      </div>\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                        </div>\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                      </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                    </div>\n                    <div class=\"pull-left\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\n                        </h6>\n                    </div>\n                    <div class=\"pull-right\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                        </h6>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n              {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <div class=\"photo-container\">\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\n                </div>\n                <h3 class=\"title\">Ryan Scheinder</h3>\n                <p class=\"category\">Photographer</p>\n                <div class=\"content\">\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>48</h2>\n                        <p>Bookmarks</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                <i class=\"fab fa-twitter\"></i>\n              </a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                <i class=\"fab fa-instagram\"></i>\n              </a>\n          </div>\n          <h3 class=\"title\">About me</h3>\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h4 class=\"title text-center\">My Portfolio</h4>\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons design_image\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons location_world\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons sport_user-run\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\n  <div class=\"container\">\n\n    <div class=\"dropdown button-dropdown\">\n      <div ngbDropdown>\n        <a class=\"dropdown-toggle\" ngbDropdownToggle>\n          <span class=\"button-bar\"></span>\n          <span class=\"button-bar\"></span>\n          <span class=\"button-bar\"></span>\n        </a>\n        <div ngbDropdownMenu>\n          <a class=\"dropdown-header\">Dropdown header</a>\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">One more separated link</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\" ngbTooltip=\"Zéntrico Solutions S.A.\">\n        <img class=\"logo-shadow\" width=\"100\" src=\"assets/img/z3c.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n        aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        (click)=\"sidebarToggle()\">\n        <span class=\"navbar-toggler-bar bar1\"></span>\n        <span class=\"navbar-toggler-bar bar2\"></span>\n        <span class=\"navbar-toggler-bar bar3\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n      <ul class=\"navbar-nav ml-auto\">\n        <!--\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" target=\"_blank\">\n            <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n            <p>Download</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://creativetimofficial.github.io/now-ui-kit-angular/documentation/tutorial\"\n            target=\"_blank\">\n            <i class=\"now-ui-icons files_paper\"></i>\n            <p>Documentation</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn btn-neutral\" href=\"https://www.creative-tim.com/product/now-ui-kit-pro-angular\"\n            target=\"_blank\">\n            <i class=\"now-ui-icons arrows-1_share-66\"></i>\n            <p>Upgrade to PRO</p>\n          </a>\n        </li>\n        -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\"\n            href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n            <i class=\"fab fa-twitter\"></i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\"\n            href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n            <i class=\"fab fa-facebook-square\"></i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");

 // this is needed!









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");









var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__["NucleoiconsComponent"] },
    { path: 'examples/landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'examples/login', component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'examples/profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicelements',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basicelements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"] }
    ]; };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");



var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalBasic = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\n.nucleo-icons-style {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.nucleo-icons-style {\n  font-size: 62.5%;\n}\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef;\n}\n\na {\n  color: #766acf;\n  text-decoration: none;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n}\n\nheader p {\n  font-size: 0.9rem;\n  margin-top: 0.6em;\n}\n\nheader a:hover {\n  text-decoration: underline;\n}\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto;\n}\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em 0.2em;\n  margin-bottom: 1em;\n  font-size: 1rem;\n}\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 0.25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\nul li:hover {\n  background: #dbdbdb;\n}\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\nul p {\n  padding: 10px;\n  margin-top: 10px;\n}\n\nul p::-moz-selection, ul em::-moz-selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul em {\n  margin-bottom: 8px;\n}\n\nul em::before {\n  content: \"[\";\n}\n\nul em::after {\n  content: \"]\";\n}\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0;\n  }\n}\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s;\n}\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left;\n}\n\n#cd-nav ul li:hover {\n  background-color: #FFF;\n}\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s;\n}\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6;\n}\n\n#cd-nav li a:hover {\n  color: #333333;\n}\n\n#cd-nav li:last-child a {\n  border-bottom: none;\n}\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2;\n}\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s;\n}\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s;\n}\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none;\n}\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0);\n}\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333;\n}\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg);\n}\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 \"Nucleo Outline\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNlbGxvL0RvY3VtZW50cy9vc291cmNlL21hcmF2ZmUuZ2l0aHViLmlvL3plbjNjby52Mi9zcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUEsK0RBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztFQVlJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTs7RUFFSSxnQkFBQTtBQ0FKOztBREdBOztFQUVJLFlBQUE7QUNBSjs7QURHQTs7OztFQUlJLFdBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FES0E7Ozs7OztrQ0FBQTs7QUFRQTs7OztrQ0FBQTs7QUFNQTs7O0VBR0ksc0JBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURPQTs7OztrQ0FBQTs7QUFNQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSwwQkFBQTtBQ0xKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURRQTs7O0VBR0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0xKOztBREVBOztFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDTE47QUFDRjs7QURRQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDTk47QUFDRjs7QURTQTs7OztrQ0FBQTs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0lBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUtBLG1CQUFBO0VBS0EsMkJBQUE7RUFHQSw4Q0FBQTtBQ1JKOztBRFdBO0VBQ0ksMENBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXQTtFQUNJLHNCQUFBO0FDUko7O0FEV0E7RUFDSSxtQkFBQTtFQUtBLG1CQUFBO0VBR0EsNENBQUE7QUNSSjs7QURXQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ1JKOztBRFdBO0VBQ0ksY0FBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7QUNSSjs7QURXQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDUko7O0FEV0E7RUFDSSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFHQSwyQkFBQTtBQ1JKOztBRFdBOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFLQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFHQSx5Q0FBQTtBQ1JKOztBRFdBO0VBQ0ksU0FBQTtFQUtBLG9CQUFBO0FDUko7O0FEV0E7RUFDSSxZQUFBO0VBS0Esb0JBQUE7QUNSSjs7QURXQTtFQUNJLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxpQ0FBQTtBQ1JKOztBRFdBOztFQUVJLG1CQUFBO0FDUko7O0FEV0E7RUFDSSxNQUFBO0VBS0EseUJBQUE7QUNSSjs7QURXQTtFQUNJLFNBQUE7RUFLQSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0kscUJBQUE7RUFDQSxrREFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVjbGVvLWljb25zLXN0eWxlLFxuLm51Y2xlby1pY29ucy1zdHlsZSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIC5udWNsZW8taWNvbnMtc3R5bGU1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbm1haW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICAgIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk51Y2xlbyBPdXRsaW5lIFdlYiBGb250IC0gbnVjbGVvYXBwLmNvbS9cbkxpY2Vuc2UgLSBudWNsZW9hcHAuY29tL2xpY2Vuc2UvXG5DcmVhdGVkIHVzaW5nIEljb01vb24gLSBpY29tb29uLmlvXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByaW1hcnkgc3R5bGVcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzc2NmFjZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1haW4gY29tcG9uZW50c1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMjBweCAwIDA7XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIG1hcmdpbi10b3A6IC42ZW07XG59XG5cbmhlYWRlciBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuc2VjdGlvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuc2VjdGlvbiBoMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgcGFkZGluZzogMCAwIDFlbSAuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbnVsOjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxudWwgbGkge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG51bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2RiZGJkYjtcbn1cblxudWwgcCxcbnVsIGVtLFxudWwgaW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XG4gICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIHVzZXItc2VsZWN0OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnVsIHAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxudWwgcDo6c2VsZWN0aW9uLFxudWwgZW06OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogIzc2NmFjZjtcbiAgICBjb2xvcjogI2VmZWZlZjtcbn1cblxudWwgZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxudWwgZW06OmJlZm9yZSB7XG4gICAgY29udGVudDogJ1snO1xufVxuXG51bCBlbTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICddJztcbn1cblxudWwgaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgdWwgbGkge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgdWwgbGkge1xuICAgICAgICB3aWR0aDogMTIuNSU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzMnB4IDA7XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5TbWFydCBmaXhlZCBuYXZpZ2F0aW9uXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjZC1uYXYgdWwge1xuICAgIC8qIG1vYmlsZSBmaXJzdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWF4LWhlaWdodDogOTAlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBib3R0b206IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC8qIHJlbW92ZSBvdmVyZmxvdzpoaWRkZW4gaWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgZHJvcC1kb3duIG1lbnUgLSBidXQgdGhlbiByZW1lbWJlciB0byBmaXgvZWxpbWluYXRlIHRoZSBsaXN0IGl0ZW1zIGFuaW1hdGlvbiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG59XG5cbiNjZC1uYXYgdWwgbGkge1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY2QtbmF2IHVsIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4jY2QtbmF2IHVsLmlzLXZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbn1cblxuI2NkLW5hdiBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7XG59XG5cbiNjZC1uYXYgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG5cbiNjZC1uYXYgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDUlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAvKiBpbWFnZSByZXBsYWNlbWVudCAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3BhbiB7XG4gICAgLyogdGhlIHNwYW4gZWxlbWVudCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgbWVudSBpY29uICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSxcbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSB7XG4gICAgdG9wOiAtNnB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XG4gICAgYm90dG9tOiAtNnB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3BhbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDc0LCAxMDAsIDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSxcbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbn1cblxuLm5vdy11aS1pY29ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDMycHgvMSAnTnVjbGVvIE91dGxpbmUnO1xuICAgIHNwZWFrOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4iLCIubnVjbGVvLWljb25zLXN0eWxlLFxuLm51Y2xlby1pY29ucy1zdHlsZSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIC5udWNsZW8taWNvbnMtc3R5bGU1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5OdWNsZW8gT3V0bGluZSBXZWIgRm9udCAtIG51Y2xlb2FwcC5jb20vXG5MaWNlbnNlIC0gbnVjbGVvYXBwLmNvbS9saWNlbnNlL1xuQ3JlYXRlZCB1c2luZyBJY29Nb29uIC0gaWNvbW9vbi5pb1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuUHJpbWFyeSBzdHlsZVxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG5hIHtcbiAgY29sb3I6ICM3NjZhY2Y7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTWFpbiBjb21wb25lbnRzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEyMHB4IDAgMDtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi10b3A6IDAuNmVtO1xufVxuXG5oZWFkZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG5zZWN0aW9uIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gIHBhZGRpbmc6IDAgMCAxZW0gMC4yZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG51bDo6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbnVsIGxpIHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG51bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGI7XG59XG5cbnVsIHAsXG51bCBlbSxcbnVsIGlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XG4gIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XG4gIC1tcy11c2VyLXNlbGVjdDogYXV0bztcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCBwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxudWwgcDo6c2VsZWN0aW9uLFxudWwgZW06OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM3NjZhY2Y7XG4gIGNvbG9yOiAjZWZlZmVmO1xufVxuXG51bCBlbSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxudWwgZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiW1wiO1xufVxuXG51bCBlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIl1cIjtcbn1cblxudWwgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgdWwgbGkge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIHVsIGxpIHtcbiAgICB3aWR0aDogMTIuNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMzJweCAwO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5TbWFydCBmaXhlZCBuYXZpZ2F0aW9uXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4jY2QtbmF2IHVsIHtcbiAgLyogbW9iaWxlIGZpcnN0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogOTAlO1xuICByaWdodDogNSU7XG4gIGJvdHRvbTogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgei1pbmRleDogMTtcbiAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbn1cblxuI2NkLW5hdiB1bCBsaSB7XG4gIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY2QtbmF2IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG59XG5cbiNjZC1uYXYgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjJmNjtcbn1cblxuI2NkLW5hdiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbiNjZC1uYXYgbGk6bGFzdC1jaGlsZCBhIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUlO1xuICByaWdodDogNSU7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLyogaW1hZ2UgcmVwbGFjZW1lbnQgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuIHtcbiAgLyogdGhlIHNwYW4gZWxlbWVudCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgbWVudSBpY29uICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSxcbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUge1xuICB0b3A6IC02cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICBib3R0b206IC02cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDc0LCAxMDAsIDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSxcbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbi5ub3ctdWktaWNvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDMycHgvMSBcIk51Y2xlbyBPdXRsaW5lXCI7XG4gIHNwZWFrOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NucleoiconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nucleoicons',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.component.scss":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./examples.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./examples.component.scss */ "./src/app/examples/examples.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples.component */ "./src/app/examples/examples.component.ts");












var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/landing/landing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/landing/landing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing.component.scss */ "./src/app/examples/landing/landing.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/examples/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/examples/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/examples/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/examples/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/examples/profile/profile.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-shadow {\n  box-shadow: inset 5px 5px 100px #eee;\n  border-radius: 70px/30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNlbGxvL0RvY3VtZW50cy9vc291cmNlL21hcmF2ZmUuZ2l0aHViLmlvL3plbjNjby52Mi9zcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLG9DQUFBO0VBR0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tc2hhZG93IHtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTAwcHggI2VlZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTAwcHggI2VlZTtcbiAgICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDEwMHB4ICNlZWU7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3MHB4LzMwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3MHB4LzMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNzBweC8zMHB4O1xufSIsIi5sb2dvLXNoYWRvdyB7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxMDBweCAjZWVlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTAwcHggI2VlZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxMDBweCAjZWVlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDcwcHgvMzBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3MHB4LzMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDcwcHgvMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

/*!

=========================================================
* Now UI Kit Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marcello/Documents/osource/maravfe.github.io/zen3co.v2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map