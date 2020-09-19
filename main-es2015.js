(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<!-- <html *ngIf=\"display\">\n    <head>\n        <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n    </head>\n<body > -->\n    <!-- <h1>{{title}}</h1>\n    <button mat-button (click)=\"increment()\">click me</button>\n    <p>score: {{count}}</p>\n    <div>\n        <input type=\"text\" [(ngModel)]=\"name\" >\n        <p>welcome: {{name}}</p>\n    </div>\n    <div>\n        <input type=\"text\" [(ngModel)]=\"username\" (ngModelChange)=\"greet($event)\">\n        <p>welcome: {{username}}</p>\n    </div> -->\n    <!-- <script>\n        console.log(\"reload\");\n        window.location.reload();\n    </script> -->\n   \n\n   <!-- <div id=\"navbar\" *ngIf=\"display1\">\n   \n   </div>\n     -->\n<!-- </body>\n</html> -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createwebinar/createwebinar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createwebinar/createwebinar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css\">\n<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\" type=\"text/javascript\"></script>\n<style>\n.item {\nwidth: 100%;\nmargin-top:4%\n}\n\n.container {\ndisplay: flex;\nflex-wrap: wrap;\n}\n\n.container>div {\nflex: 0 100%;\n/*demo*/\nbox-sizing:border-box;\nbox-sizing:border-box;\nword-wrap: break-word;\n\n}\n\n.example-card {\n  max-width: 500px;\n  background: -webkit-linear-gradient(70deg, white 40%, #ffed4b 40%);\nbackground: -o-linear-gradient(70deg, white 40%, #ffed4b 40%);\nbackground: -moz-linear-gradient(70deg, white 40%, #ffed4b 40%);\nbackground: linear-gradient(70deg, white 40%, #ffed4b 40%);    margin-left: 5%;\n  color:black;\n\n}\n.example-card:hover { \n  color:black;\n  border-style: groove;\n}\n\n.cards {\n   display: flex;\n   justify-content: space-between;\n   \n}\n</style>\n\n<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">E-Learning Portal</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                         <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                      [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                           <mat-nav-list >\n                             <br><br>\n                             \n                             <a mat-list-item [routerLink]=\"['/editteacher']\" routerLinkActive=\"router-link-active\"  >Edit Student Course List</a>\n                             <a mat-list-item [routerLink]=\"['/labbook']\" routerLinkActive=\"router-link-active\"  >Lab Book</a>\n                             <a mat-list-item [routerLink]=\"['/editquiz']\" routerLinkActive=\"router-link-active\"  >Quiz Book</a>\n                             <a mat-list-item [routerLink]=\"['/webinar1']\" routerLinkActive=\"router-link-active\"  >Create webinar</a>\n                             <a mat-list-item (click)=\"openDialog100()\" routerLinkActive=\"router-link-active\"  >Learning Meet [Video Call]</a>\n\n                             <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n\n                     \n                     \n                     \n                     \n                           </mat-nav-list>\n                         </mat-sidenav>\n\n    <mat-sidenav-content style=\"background-color: white;\">\n\n        \n  <div style=\"width: 100%; height: 100%;background-color: white;\" >\n    <as-split direction=\"horizontal\">\n                      <as-split-area size=\"40\">\n                          <as-split direction=\"vertical\">\n                              <as-split-area>\n\n                                <mat-card class=\"example-card\" style=\"margin-top:10%\">\n                                 \n                                  <img mat-card-image  src=\"assets/video.jpg\" alt=\"Photo of a Shiba Inu\">\n                                  <mat-card-content>\n                                    <mat-vertical-stepper style=\"background-color: #059BE5;color: white\" color=\"accent\" [linear]=\"isLinear\" #stepper>\n                                       <mat-step [stepControl]=\"eighthFormGroup\">\n                                        <form [formGroup]=\"eighthFormGroup\">\n                                          <ng-template matStepLabel>Upload a Photo</ng-template>\n                                         \n                                          <input  type=\"file\" formControlName=\"eighthCtrl\" (ngModelChange)=\"uploadFile()\" id=\"files\" name=\"files[]\" multiple />\n\n\n                                          <div>\n                                            <button mat-button matStepperPrevious>Back</button>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                      </mat-step>\n\n                                   \n                                      <mat-step  [stepControl]=\"firstFormGroup\">\n                                        <form [formGroup]=\"firstFormGroup\">\n                                          <ng-template   matStepLabel>Topic</ng-template>\n                                          <mat-form-field >\n                                            <mat-label>Topic</mat-label>\n                                            <input matInput placeholder=\"abc@\" formControlName=\"firstCtrl\" required>\n                                          </mat-form-field>\n                                          <div>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                       </mat-step>\n                                      <mat-step [stepControl]=\"secondFormGroup\">\n                                        <form [formGroup]=\"secondFormGroup\">\n                                          <ng-template matStepLabel>Description</ng-template>\n                                          <mat-form-field>\n                                            <mat-label>Description</mat-label>\n                                            <input matInput formControlName=\"secondCtrl\" placeholder=\"xyz@\"\n                                                   required>\n                                          </mat-form-field>\n                                          <div>\n                                            <button mat-button matStepperPrevious>Back</button>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                      </mat-step>\n\n                                      <mat-step [stepControl]=\"thirdFormGroup\">\n                                        <form [formGroup]=\"thirdFormGroup\">\n                                          <ng-template matStepLabel>Start Date</ng-template>\n                                          <mat-form-field>\n                                            <mat-label>Start Date</mat-label>\n                                            <input matInput formControlName=\"thirdCtrl\" placeholder=\"xyz@\"\n                                                   required>\n                                          </mat-form-field>\n                                          <div>\n                                            <button mat-button matStepperPrevious>Back</button>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                      </mat-step>\n\n                                      <mat-step [stepControl]=\"forthFormGroup\">\n                                        <form [formGroup]=\"forthFormGroup\">\n                                          <ng-template matStepLabel>End Date</ng-template>\n                                          <mat-form-field>\n                                            <mat-label>End Date</mat-label>\n                                            <input matInput formControlName=\"forthCtrl\" placeholder=\"xyz@\"\n                                                   required>\n                                          </mat-form-field>\n                                          <div>\n                                            <button mat-button matStepperPrevious>Back</button>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                      </mat-step>\n\n\n                                      <mat-step [stepControl]=\"fifthFormGroup\">\n                                        <form [formGroup]=\"fifthFormGroup\">\n                                          <ng-template matStepLabel>Platform</ng-template>\n                                          <mat-form-field>\n                                            <mat-label>Platform</mat-label>\n                                            <input matInput formControlName=\"fifthCtrl\" placeholder=\"zoom,google meet\"\n                                                   required>\n                                          </mat-form-field>\n                                          <div>\n                                            <button mat-button matStepperPrevious>Back</button>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                      </mat-step>\n\n\n                                      <mat-step [stepControl]=\"sixthFormGroup\">\n                                        <form [formGroup]=\"sixthFormGroup\">\n                                          <ng-template matStepLabel>Url To Connect</ng-template>\n                                          <mat-form-field>\n                                            <mat-label>Url To Connect</mat-label>\n                                            <input matInput formControlName=\"sixthCtrl\" placeholder=\"zoom,google meet url so that people can connect\"\n                                                   required>\n                                          </mat-form-field>\n                                          <div>\n                                            <button mat-button matStepperPrevious>Back</button>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                      </mat-step>\n\n\n                                      <mat-step [stepControl]=\"seventhFormGroup\">\n                                        <form [formGroup]=\"seventhFormGroup\">\n                                          <ng-template matStepLabel>More Details</ng-template>\n                                          <mat-form-field>\n                                            <mat-label>Link your website/document</mat-label>\n                                            <input matInput formControlName=\"seventhCtrl\" placeholder=\"website/document url\"\n                                                   required>\n                                          </mat-form-field>\n                                          <div>\n                                            <button mat-button matStepperPrevious>Back</button>\n                                            <button mat-button matStepperNext>Next</button>\n                                          </div>\n                                        </form>\n                                      </mat-step>\n\n                                                                           <mat-step>\n                                        <ng-template matStepLabel>Done</ng-template>\n                                        <p>You are now done.</p>\n                                        <div>\n                                          <button mat-button matStepperPrevious (click)=\"submit()\">Submit Request</button>\n                                          <button mat-button (click)=\"stepper.reset()\">Reset</button>\n                                        </div>\n                                      </mat-step>\n                                    </mat-vertical-stepper>\n                                               \n                                    \n                                  </mat-card-content>\n                               \n                                </mat-card>\n                                \n                               \n\n                               \n\n\n                                  \n                                  \n\n                                  \n                            </as-split-area>\n                             \n                          </as-split>\n                      </as-split-area>\n                      <as-split-area size=\"60\">\n                          <as-split direction=\"vertical\">\n                              <as-split-area size=\"25\">\n                               \n                                <div class=\"container\">\n                                  \n                                  <div class=\"item\"  *ngFor=\"let member of members[0]\">\n                                    \n      \n                                      <mat-card class=\"example-card1\">\n                                 \n                                  <img mat-card-image height=200 src=\"{{member.purl}}\" alt=\"Photo of a Shiba Inu\">\n                                  <mat-card-content style=\" font-size: 1.5rem;\">\n                                    <h2  >{{member.topic}}</h2>\n                                    <p style=\"margin-top:2%\">{{member.description}}</p>\n                                    <h3 style=\"color:rgb(166, 169, 171);margin-top:2%\">Start Date:{{member.startdate}}</h3>\n                                    <h3 style=\"color:rgb(166, 169, 171);margin-top:2%\">End Date:{{member.enddate}}</h3>\n                                    <h3 style=\"margin-top:2%\">Platform : {{member.platform}}</h3>\n                                \n                                \n                                  </mat-card-content>\n                                  <mat-card-actions>\n                                    <button style=\"width:80%;margin-left: 10%;\"mat-raised-button color=\"warn\"  (click)=\"click(member.moredetails)\">More Details</button>\n                                \n                                  </mat-card-actions>\n                                </mat-card>\n                                \n                                \n                                  </div>\n                               \n                                  \n                                </div>\n                                \n                               \n                                \n                              </as-split-area>\n                            \n                            \n                          </as-split>\n                      </as-split-area>\n                  </as-split>\n  </div>\n\n\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n    <head>\n        <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n    </head>\n    <body>\n       \n        <div id=\"topbar\"> \n            <p id=\"ctitle\">LAB WORK</p> \n           \n            <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n            \n        </div>\n        <div id=\"com_body\" style=\"width:100%;height: 106%;\">\n             <img id=\"bgimg\" style=\"opacity: 0.7;\" width=\"700px\" height=\"750px\" src=\"/assets/test2.png\" />\n                   <!-- Data structure -->\n                        \n                        <mat-card id=\"card1\" class=\"card card-3\">\n                            <tr>\n                                <td>\n                                    <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card1_1.png\" />\n                                </td>\n                                <td>\n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;\">Java Programming</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\"> Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"20\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\"></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button style=\"height: 40px;\" mat-raised-button class=\"alternate-theme\" color=\"warn\" (click)=\"labmanual('dsprogramming','https://kubelearning10-c3dx5fi32q-uc.a.run.app/compilers/java.php')\">Continue</button>\n                                    </div>\n                                </td>\n                            </tr>\n                            \n                            \n                        </mat-card>\n               \n                    <!-- python -->\n                  \n                        <mat-card id=\"card2\" class=\"card card-3\">\n                            <tr>\n                                <td>\n                                    <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card2.png\" />\n                                </td>\n                                <td>\n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;\">Python Programming</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\" > Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"20\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\" ></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button style=\"height: 40px;\" mat-raised-button class=\"alternate-theme\" color=\"warn\" (click)=\"labmanual('pythonprogramming','https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/python27.php')\">Continue</button>\n                                    </div>\n                                </td>\n                            </tr>\n                            \n                            \n                        </mat-card>\n             \n\n                    <!-- cpp -->\n                    <br>\n                    \n                        <mat-card id=\"card3\" class=\"card card-3\">\n                            <tr>\n                                <td>\n                                    <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card3.png\" />\n                                </td>\n                                <td>\n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;\">C++ Programming</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\" class=\"alternate-theme\" color=\"primary\"> Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"20\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\"></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button style=\"height: 40px;\" mat-raised-button class=\"alternate-theme\" color=\"warn\" (click)=\"labmanual('cppprogramming','https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/cpp.php')\">Continue</button>\n                                    </div>\n                                </td>\n                            </tr>\n                            \n                            \n                        </mat-card>\n \n                    <!-- c Programming -->\n                   \n                        <mat-card id=\"card4\" class=\"card card-3\">\n                            <tr>\n                                <td>\n                                    <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card4_1.png\" />\n                                </td>\n                                <td>\n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;\">C Programming</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\" class=\"alternate-theme\" color=\"primary\"> Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"20\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\"></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button style=\"height: 40px;\" mat-raised-button class=\"alternate-theme\" color=\"warn\" (click)=\"labmanual('cprogramming','https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/c.php')\">Continue</button>\n                                    </div>\n                                </td>\n                            </tr>\n                            \n                            \n                        </mat-card>\n        \n        </div>\n   \n    </body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/del-program/del-program.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/del-program/del-program.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>You are about to DELETE Program No {{eno}}.{{pno}}</h2>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" style=\"color: white;\" (click)=\"close()\">Close</button>\n    <button class=\"mat-raised-button mat-warn\" style=\"margin-left: 50px;\" (click)=\"delete()\">Delete</button>\n   \n</mat-dialog-actions>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-body/dialog-body.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-body/dialog-body.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>You are about to DELETE Experment No: {{eno}}</h2>\n<p>If you delete Experiment: {{eno}} then all programs inside it will be Deleted as well.</p>\n<mat-dialog-content [formGroup]=\"form\">\n  \n    <mat-form-field style=\"width: 400px;\">\n        <mat-label >Please type <strong>{{ename}}</strong> to confirm. </mat-label>\n        <input matInput\n                placeholder={{ename}}\n               formControlName=\"name\">\n    </mat-form-field>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" style=\"color: white;\" (click)=\"close()\">Close</button>\n    <button class=\"mat-raised-button mat-warn\" style=\"margin-left: 50px;\" (click)=\"delete()\">Delete</button>\n   \n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editlabmanual/editlabmanual.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editlabmanual/editlabmanual.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">E-Learning Portal</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                         <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                      [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                           <mat-nav-list >\n                             <br><br>\n                             <a mat-list-item [routerLink]=\"['/editteacher']\" routerLinkActive=\"router-link-active\"  >Edit Student Course List</a>\n                             <a mat-list-item [routerLink]=\"['/labbook']\" routerLinkActive=\"router-link-active\"  >Lab Book</a>\n                             <a mat-list-item [routerLink]=\"['/editquiz']\" routerLinkActive=\"router-link-active\"  >Quiz Book</a>\n                             <a mat-list-item [routerLink]=\"['/webinar1']\" routerLinkActive=\"router-link-active\"  >Create webinar</a>\n                             <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n                     \n                     \n                     \n                           </mat-nav-list>\n                         </mat-sidenav>\n\n    <mat-sidenav-content style=\"background-color: white;\">\n   \n<div class=\"chote\">\n  <div id=\"topbar\"> \n    <p id=\"ctitle\" style=\"text-align: center\">LAB MANUAL</p><br>\n    <!-- <img style=\"display: inline-block;margin-top: 5px;\" width=\"400px\" src=\"/assets/lab1.png\" /> -->\n    <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n    \n</div>\n\n<div id=\"com_body\">\n<section>\n  <mat-card id=\"card1\" class=\"card \">\n\n        <!-- <mat-list>\n          <mat-list-item> Program 1.1: Implementation of Stack using Array <button (click)=\"program()\" style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item> Program 1.2: Implementation of two stacks in an array <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n          \n         </mat-list> -->\n     \n      <div class = \"addprog\" [hidden]=\"addprogtog\">\n        <h2>Add Program</h2>\n\n      \n        <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]>\n           \n            <ng-template matStepLabel >Experiment No:</ng-template>\n            \n              <mat-label>EXP NO: {{expnum1}}</mat-label>\n            \n            <div>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          \n          </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_pno\">\n           <form [formGroup]=\"addprogFormGroup_pno\">\n             <ng-template matStepLabel>Program No: </ng-template>\n             <mat-form-field>\n               <mat-label>Program No</mat-label>\n               <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_t\">\n          <form [formGroup]=\"addprogFormGroup_t\">\n            <ng-template matStepLabel>Title </ng-template>\n            <mat-form-field>\n              <mat-label>Tiltle</mat-label>\n              <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n         </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_d\">\n          <form [formGroup]=\"addprogFormGroup_d\">\n            <ng-template matStepLabel>Description </ng-template>\n            <mat-form-field>\n              <mat-label>Description</mat-label>\n              <input matInput formControlName=\"progdesc\" placeholder=\"Program Description\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n          <form [formGroup]=\"addprogFormGroup_ipf\">\n            <ng-template matStepLabel>Input Format </ng-template>\n            <mat-form-field>\n              <mat-label>Input Format</mat-label>\n              <input matInput formControlName=\"progip_format\" placeholder=\"Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_c\">\n          <form [formGroup]=\"addprogFormGroup_c\">\n            <ng-template matStepLabel>Constraints </ng-template>\n            <mat-form-field>\n              <mat-label>Constraints</mat-label>\n              <input matInput formControlName=\"progcons\" placeholder=\"Program Constraints\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_opf\">\n          <form [formGroup]=\"addprogFormGroup_opf\">\n            <ng-template matStepLabel>Output Format </ng-template>\n            <mat-form-field>\n              <mat-label>Program No</mat-label>\n              <input matInput formControlName=\"progop_format\" placeholder=\"Output Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sip\">\n          <form [formGroup]=\"addprogFormGroup_sip\">\n            <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Input </mat-label>\n              <input matInput formControlName=\"progtc_ip\" placeholder=\"Testcase Input\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sop\">\n          <form [formGroup]=\"addprogFormGroup_sop\">\n            <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Output </mat-label>\n              <input matInput formControlName=\"progtc_op\" placeholder=\"Testcase Output\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_exp\">\n          <form [formGroup]=\"addprogFormGroup_exp\">\n            <ng-template matStepLabel>Explanation </ng-template>\n            <mat-form-field>\n              <mat-label>Explanation</mat-label>\n              <input matInput formControlName=\"progexpl\" placeholder=\"Testcase Explanation\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_tc\">\n          <form [formGroup]=\"addprogFormGroup_tc\">\n            <ng-template matStepLabel>Test Cases</ng-template>\n            <mat-form-field>\n              <mat-label>Input</mat-label>\n              <input matInput formControlName=\"progtcip\">\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Expected Output</mat-label>\n              <input matInput formControlName=\"progtcop\">\n            </mat-form-field>\n            <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc1()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n            <table>\n              <th>Input</th>\n              <th style=\"margin-left: 100%;\">Output</th>\n              <tr>\n                <td>\n                  \n                  <mat-list *ngFor=\"let i of tcip\">\n                    <p>{{i}}</p>\n                  </mat-list>\n                </td>\n                <td>\n                  \n                  <mat-list *ngFor=\"let j of tcop\">\n                    <p style=\"margin-left: 50%;\">{{j}}</p>\n                    \n                  </mat-list>\n                </td>\n                <td>\n                  <mat-list *ngFor=\"let j of tcop, let ind = index\">\n        \n                    <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 15px ;margin-bottom: 15px;\" matSuffix>cancel</mat-icon>\n                  </mat-list>\n                </td>\n              </tr>\n            </table>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button (click)=\"addprog()\" matStepperNext>Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n    </mat-vertical-stepper>\n    <pre>Refresh to update the manual</pre>\n  </div>\n     <div class = \"uename\" [hidden]=\"uename\">\n        <h2>Update Experiment Name </h2>\n        <mat-vertical-stepper linear=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n         <mat-step [stepControl] >\n           \n             <ng-template matStepLabel >Experiment No:</ng-template>\n             \n               <mat-label>EXP NO: {{expnum}}</mat-label>\n             \n             <div>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           \n         </mat-step>\n         <mat-step [stepControl]=\"uenameFormGroup\">\n           <form [formGroup]=\"uenameFormGroup\">\n             <ng-template matStepLabel>Subtitle</ng-template>\n             <mat-form-field>\n               <mat-label>Aim</mat-label>\n               <input matInput formControlName=\"uexpname\" placeholder=\"Stack using Array\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button matStepperNext (click)=\"upexname();uenameFormGroup.reset()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n       </mat-vertical-stepper>\n       <pre>Refresh to update the manual</pre>\n      </div>\n     <div class = \"upname\" [hidden]=\"upprog1\">\n      <h2>Update Program</h2>\n      <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n        <mat-step [stepControl]>\n         \n          <ng-template matStepLabel >Program No:</ng-template>\n          \n            <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n          \n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        \n        </mat-step>\n    \n       <mat-step [stepControl]=\"upFormGroup_title\">\n        <form [formGroup]=\"upFormGroup_title\">\n          <ng-template matStepLabel>Title </ng-template>\n          <mat-form-field>\n            <mat-label>Tiltle</mat-label>\n            <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_desc\">\n        <form [formGroup]=\"upFormGroup_desc\">\n          <ng-template matStepLabel>Description </ng-template>\n          <mat-form-field>\n            <mat-label>Description</mat-label>\n            <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_ipf\">\n        <form [formGroup]=\"upFormGroup_ipf\">\n          <ng-template matStepLabel>Input Format </ng-template>\n          <mat-form-field>\n            <mat-label>Input Format</mat-label>\n            <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_cons\">\n        <form [formGroup]=\"upFormGroup_cons\">\n          <ng-template matStepLabel>Constraints </ng-template>\n          <mat-form-field>\n            <mat-label>Constraints</mat-label>\n            <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_opf\">\n        <form [formGroup]=\"upFormGroup_opf\">\n          <ng-template matStepLabel>Output Format </ng-template>\n          <mat-form-field>\n            <mat-label>Program No</mat-label>\n            <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sip\">\n        <form [formGroup]=\"upFormGroup_sip\">\n          <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Input </mat-label>\n            <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sop\">\n        <form [formGroup]=\"upFormGroup_sop\">\n          <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Output </mat-label>\n            <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext >Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_exp\">\n        <form [formGroup]=\"upFormGroup_exp\">\n          <ng-template matStepLabel>Explanation </ng-template>\n          <mat-form-field>\n            <mat-label>Explanation</mat-label>\n            <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_tc\">\n        <form [formGroup]=\"upFormGroup_tc\">\n          <ng-template matStepLabel>Test Cases</ng-template>\n          <mat-form-field>\n            <mat-label>Input</mat-label>\n            <input matInput formControlName=\"uprogtcip\">\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Expected Output</mat-label>\n            <input matInput formControlName=\"uprogtcop\">\n          </mat-form-field>\n          <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n          <table>\n            <th>Input</th>\n            <th style=\"margin-left: 100%;\">Output</th>\n            <tr>\n              <td>\n                \n                <mat-list *ngFor=\"let i of tcip\">\n                  <p>{{i}}</p>\n                </mat-list>\n              </td>\n              <td>\n                \n                <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                  <section style=\"display: flex;\">\n                  <p style=\"margin-left: 50%;\">{{j}}</p>\n                  <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                </section>\n                </mat-list>\n              </td>\n\n            </tr>\n          </table>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      \n       <mat-step>\n         <ng-template matStepLabel>Done</ng-template>\n         <p>You are now done.</p>\n         <div>\n           <button mat-button matStepperPrevious>Back</button>\n           <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n     </mat-vertical-stepper>\n     <pre>Refresh to update the manual</pre>\n    </div>\n   <div class = \"addexp\" [hidden]=\"addexp\">\n      <h2>Add Experiment</h2>\n        <mat-vertical-stepper [linear]=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]=\"firstFormGroup\" >\n            <form [formGroup]=\"firstFormGroup\" >\n              <ng-template matStepLabel >Experiment No:</ng-template>\n              <mat-form-field>\n                <mat-label>EXP NO</mat-label>\n                <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"expno\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button  matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"secondFormGroup\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel>Subtitle</ng-template>\n              <mat-form-field>\n                <mat-label>Aim</mat-label>\n                <input matInput formControlName=\"expname\" placeholder=\"Stack using Array\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext >Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n            </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Complete</ng-template>\n            <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n            \n          </mat-step>\n        </mat-vertical-stepper>\n        <pre>Refresh to update the manual</pre>\n      </div>\n    \n    \n  </mat-card>\n\n  <mat-card id=\"card1\" class=\"card card-3\">\n    <div>\n    <section class=\"example-section-man\">\n    <h2 >Manual Preview</h2>\n    <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Manual<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n    </section>\n    <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n    <mat-accordion>\n\n      <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Experiment: {{item.no}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{item.name}} \n            <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Add Program\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Delete Experiment\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-list>\n          <mat-list-item *ngFor=\"let subitem of item.prog, let j = index\">\n            Program {{subitem.eno}}.{{subitem.pno}}:      {{subitem.title}}\n            <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </mat-expansion-panel>\n      \n    </mat-accordion> \n    \n    \n  </div>\n</mat-card>\n</section>\n</div>\n</div>\n\n<div class=\"medium\">\n  <div id=\"topbar\"> \n    <p id=\"ctitle\" style=\"text-align: center\">LAB MANUAL</p><br>\n    <!-- <img style=\"display: inline-block;margin-top: 5px;\" width=\"400px\" src=\"/assets/lab1.png\" /> -->\n    <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n    \n</div>\n\n<div id=\"com_body\">\n<section>\n  <mat-card id=\"card1\" class=\"card \">\n\n        <!-- <mat-list>\n          <mat-list-item> Program 1.1: Implementation of Stack using Array <button (click)=\"program()\" style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item> Program 1.2: Implementation of two stacks in an array <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n          \n         </mat-list> -->\n     \n      <div class = \"addprog\" [hidden]=\"addprogtog\">\n        <h2>Add Program</h2>\n\n      \n        <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]>\n           \n            <ng-template matStepLabel >Experiment No:</ng-template>\n            \n              <mat-label>EXP NO: {{expnum1}}</mat-label>\n            \n            <div>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          \n          </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_pno\">\n           <form [formGroup]=\"addprogFormGroup_pno\">\n             <ng-template matStepLabel>Program No: </ng-template>\n             <mat-form-field>\n               <mat-label>Program No</mat-label>\n               <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_t\">\n          <form [formGroup]=\"addprogFormGroup_t\">\n            <ng-template matStepLabel>Title </ng-template>\n            <mat-form-field>\n              <mat-label>Tiltle</mat-label>\n              <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n         </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_d\">\n          <form [formGroup]=\"addprogFormGroup_d\">\n            <ng-template matStepLabel>Description </ng-template>\n            <mat-form-field>\n              <mat-label>Description</mat-label>\n              <input matInput formControlName=\"progdesc\" placeholder=\"Program Description\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n          <form [formGroup]=\"addprogFormGroup_ipf\">\n            <ng-template matStepLabel>Input Format </ng-template>\n            <mat-form-field>\n              <mat-label>Input Format</mat-label>\n              <input matInput formControlName=\"progip_format\" placeholder=\"Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_c\">\n          <form [formGroup]=\"addprogFormGroup_c\">\n            <ng-template matStepLabel>Constraints </ng-template>\n            <mat-form-field>\n              <mat-label>Constraints</mat-label>\n              <input matInput formControlName=\"progcons\" placeholder=\"Program Constraints\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_opf\">\n          <form [formGroup]=\"addprogFormGroup_opf\">\n            <ng-template matStepLabel>Output Format </ng-template>\n            <mat-form-field>\n              <mat-label>Program No</mat-label>\n              <input matInput formControlName=\"progop_format\" placeholder=\"Output Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sip\">\n          <form [formGroup]=\"addprogFormGroup_sip\">\n            <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Input </mat-label>\n              <input matInput formControlName=\"progtc_ip\" placeholder=\"Testcase Input\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sop\">\n          <form [formGroup]=\"addprogFormGroup_sop\">\n            <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Output </mat-label>\n              <input matInput formControlName=\"progtc_op\" placeholder=\"Testcase Output\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_exp\">\n          <form [formGroup]=\"addprogFormGroup_exp\">\n            <ng-template matStepLabel>Explanation </ng-template>\n            <mat-form-field>\n              <mat-label>Explanation</mat-label>\n              <input matInput formControlName=\"progexpl\" placeholder=\"Testcase Explanation\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_tc\">\n          <form [formGroup]=\"addprogFormGroup_tc\">\n            <ng-template matStepLabel>Test Cases</ng-template>\n            <mat-form-field>\n              <mat-label>Input</mat-label>\n              <input matInput formControlName=\"progtcip\">\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Expected Output</mat-label>\n              <input matInput formControlName=\"progtcop\">\n            </mat-form-field>\n            <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc1()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n            <table>\n              <th>Input</th>\n              <th style=\"margin-left: 100%;\">Output</th>\n              <tr>\n                <td>\n                  \n                  <mat-list *ngFor=\"let i of tcip\">\n                    <p>{{i}}</p>\n                  </mat-list>\n                </td>\n                <td>\n                  \n                  <mat-list *ngFor=\"let j of tcop\">\n                    <p style=\"margin-left: 50%;\">{{j}}</p>\n                    \n                  </mat-list>\n                </td>\n                <td>\n                  <mat-list *ngFor=\"let j of tcop, let ind = index\">\n        \n                    <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 15px ;margin-bottom: 15px;\" matSuffix>cancel</mat-icon>\n                  </mat-list>\n                </td>\n              </tr>\n            </table>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button (click)=\"addprog()\" matStepperNext>Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n    </mat-vertical-stepper>\n    <pre>Refresh to update the manual</pre>\n  </div>\n     <div class = \"uename\" [hidden]=\"uename\">\n        <h2>Update Experiment Name </h2>\n        <mat-vertical-stepper linear=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n         <mat-step [stepControl] >\n           \n             <ng-template matStepLabel >Experiment No:</ng-template>\n             \n               <mat-label>EXP NO: {{expnum}}</mat-label>\n             \n             <div>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           \n         </mat-step>\n         <mat-step [stepControl]=\"uenameFormGroup\">\n           <form [formGroup]=\"uenameFormGroup\">\n             <ng-template matStepLabel>Subtitle</ng-template>\n             <mat-form-field>\n               <mat-label>Aim</mat-label>\n               <input matInput formControlName=\"uexpname\" placeholder=\"Stack using Array\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button matStepperNext (click)=\"upexname();uenameFormGroup.reset()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n       </mat-vertical-stepper>\n       <pre>Refresh to update the manual</pre>\n      </div>\n     <div class = \"upname\" [hidden]=\"upprog1\">\n      <h2>Update Program</h2>\n      <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n        <mat-step [stepControl]>\n         \n          <ng-template matStepLabel >Program No:</ng-template>\n          \n            <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n          \n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        \n        </mat-step>\n    \n       <mat-step [stepControl]=\"upFormGroup_title\">\n        <form [formGroup]=\"upFormGroup_title\">\n          <ng-template matStepLabel>Title </ng-template>\n          <mat-form-field>\n            <mat-label>Tiltle</mat-label>\n            <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_desc\">\n        <form [formGroup]=\"upFormGroup_desc\">\n          <ng-template matStepLabel>Description </ng-template>\n          <mat-form-field>\n            <mat-label>Description</mat-label>\n            <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_ipf\">\n        <form [formGroup]=\"upFormGroup_ipf\">\n          <ng-template matStepLabel>Input Format </ng-template>\n          <mat-form-field>\n            <mat-label>Input Format</mat-label>\n            <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_cons\">\n        <form [formGroup]=\"upFormGroup_cons\">\n          <ng-template matStepLabel>Constraints </ng-template>\n          <mat-form-field>\n            <mat-label>Constraints</mat-label>\n            <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_opf\">\n        <form [formGroup]=\"upFormGroup_opf\">\n          <ng-template matStepLabel>Output Format </ng-template>\n          <mat-form-field>\n            <mat-label>Program No</mat-label>\n            <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sip\">\n        <form [formGroup]=\"upFormGroup_sip\">\n          <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Input </mat-label>\n            <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sop\">\n        <form [formGroup]=\"upFormGroup_sop\">\n          <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Output </mat-label>\n            <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext >Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_exp\">\n        <form [formGroup]=\"upFormGroup_exp\">\n          <ng-template matStepLabel>Explanation </ng-template>\n          <mat-form-field>\n            <mat-label>Explanation</mat-label>\n            <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_tc\">\n        <form [formGroup]=\"upFormGroup_tc\">\n          <ng-template matStepLabel>Test Cases</ng-template>\n          <mat-form-field>\n            <mat-label>Input</mat-label>\n            <input matInput formControlName=\"uprogtcip\">\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Expected Output</mat-label>\n            <input matInput formControlName=\"uprogtcop\">\n          </mat-form-field>\n          <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n          <table>\n            <th>Input</th>\n            <th style=\"margin-left: 100%;\">Output</th>\n            <tr>\n              <td>\n                \n                <mat-list *ngFor=\"let i of tcip\">\n                  <p>{{i}}</p>\n                </mat-list>\n              </td>\n              <td>\n                \n                <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                  <section style=\"display: flex;\">\n                  <p style=\"margin-left: 50%;\">{{j}}</p>\n                  <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                </section>\n                </mat-list>\n              </td>\n\n            </tr>\n          </table>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      \n       <mat-step>\n         <ng-template matStepLabel>Done</ng-template>\n         <p>You are now done.</p>\n         <div>\n           <button mat-button matStepperPrevious>Back</button>\n           <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n     </mat-vertical-stepper>\n     <pre>Refresh to update the manual</pre>\n    </div>\n   <div class = \"addexp\" [hidden]=\"addexp\">\n      <h2>Add Experiment</h2>\n        <mat-vertical-stepper [linear]=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]=\"firstFormGroup\" >\n            <form [formGroup]=\"firstFormGroup\" >\n              <ng-template matStepLabel >Experiment No:</ng-template>\n              <mat-form-field>\n                <mat-label>EXP NO</mat-label>\n                <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"expno\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button  matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"secondFormGroup\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel>Subtitle</ng-template>\n              <mat-form-field>\n                <mat-label>Aim</mat-label>\n                <input matInput formControlName=\"expname\" placeholder=\"Stack using Array\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext >Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n            </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Complete</ng-template>\n            <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n            \n          </mat-step>\n        </mat-vertical-stepper>\n        <pre>Refresh to update the manual</pre>\n      </div>\n    \n    \n  </mat-card>\n\n  <mat-card id=\"card1\" class=\"card card-3\">\n    <div>\n    <section class=\"example-section-man\">\n    <h2 >Manual Preview</h2>\n    <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Manual<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n    </section>\n    <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n    <mat-accordion>\n\n      <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Experiment: {{item.no}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{item.name}} \n            <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Add Program\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Delete Experiment\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-list>\n          <mat-list-item *ngFor=\"let subitem of item.prog, let j = index\">\n            Program {{subitem.eno}}.{{subitem.pno}}:      {{subitem.title}}\n            <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </mat-expansion-panel>\n      \n    </mat-accordion> \n    \n    \n  </div>\n</mat-card>\n</section>\n</div>\n</div>\n\n<div class=\"large\">\n  <div id=\"topbar\"> \n    <p id=\"ctitle\" style=\"text-align: center\">LAB MANUAL</p><br>\n    <!-- <img style=\"display: inline-block;margin-top: 5px;\" width=\"400px\" src=\"/assets/lab1.png\" /> -->\n    <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n    \n</div>\n\n<div id=\"com_body\">\n<section>\n  <mat-card id=\"card1\" class=\"card \">\n\n        <!-- <mat-list>\n          <mat-list-item> Program 1.1: Implementation of Stack using Array <button (click)=\"program()\" style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item> Program 1.2: Implementation of two stacks in an array <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n          \n         </mat-list> -->\n     \n      <div class = \"addprog\" [hidden]=\"addprogtog\">\n        <h2>Add Program</h2>\n\n      \n        <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]>\n           \n            <ng-template matStepLabel >Experiment No:</ng-template>\n            \n              <mat-label>EXP NO: {{expnum1}}</mat-label>\n            \n            <div>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          \n          </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_pno\">\n           <form [formGroup]=\"addprogFormGroup_pno\">\n             <ng-template matStepLabel>Program No: </ng-template>\n             <mat-form-field>\n               <mat-label>Program No</mat-label>\n               <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_t\">\n          <form [formGroup]=\"addprogFormGroup_t\">\n            <ng-template matStepLabel>Title </ng-template>\n            <mat-form-field>\n              <mat-label>Tiltle</mat-label>\n              <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n         </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_d\">\n          <form [formGroup]=\"addprogFormGroup_d\">\n            <ng-template matStepLabel>Description </ng-template>\n            <mat-form-field>\n              <mat-label>Description</mat-label>\n              <input matInput formControlName=\"progdesc\" placeholder=\"Program Description\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n          <form [formGroup]=\"addprogFormGroup_ipf\">\n            <ng-template matStepLabel>Input Format </ng-template>\n            <mat-form-field>\n              <mat-label>Input Format</mat-label>\n              <input matInput formControlName=\"progip_format\" placeholder=\"Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_c\">\n          <form [formGroup]=\"addprogFormGroup_c\">\n            <ng-template matStepLabel>Constraints </ng-template>\n            <mat-form-field>\n              <mat-label>Constraints</mat-label>\n              <input matInput formControlName=\"progcons\" placeholder=\"Program Constraints\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_opf\">\n          <form [formGroup]=\"addprogFormGroup_opf\">\n            <ng-template matStepLabel>Output Format </ng-template>\n            <mat-form-field>\n              <mat-label>Program No</mat-label>\n              <input matInput formControlName=\"progop_format\" placeholder=\"Output Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sip\">\n          <form [formGroup]=\"addprogFormGroup_sip\">\n            <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Input </mat-label>\n              <input matInput formControlName=\"progtc_ip\" placeholder=\"Testcase Input\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sop\">\n          <form [formGroup]=\"addprogFormGroup_sop\">\n            <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Output </mat-label>\n              <input matInput formControlName=\"progtc_op\" placeholder=\"Testcase Output\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_exp\">\n          <form [formGroup]=\"addprogFormGroup_exp\">\n            <ng-template matStepLabel>Explanation </ng-template>\n            <mat-form-field>\n              <mat-label>Explanation</mat-label>\n              <input matInput formControlName=\"progexpl\" placeholder=\"Testcase Explanation\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_tc\">\n          <form [formGroup]=\"addprogFormGroup_tc\">\n            <ng-template matStepLabel>Test Cases</ng-template>\n            <mat-form-field>\n              <mat-label>Input</mat-label>\n              <input matInput formControlName=\"progtcip\">\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Expected Output</mat-label>\n              <input matInput formControlName=\"progtcop\">\n            </mat-form-field>\n            <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc1()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n            <table>\n              <th>Input</th>\n              <th style=\"margin-left: 100%;\">Output</th>\n              <tr>\n                <td>\n                  \n                  <mat-list *ngFor=\"let i of tcip\">\n                    <p>{{i}}</p>\n                  </mat-list>\n                </td>\n                <td>\n                  \n                  <mat-list *ngFor=\"let j of tcop\">\n                    <p style=\"margin-left: 50%;\">{{j}}</p>\n                    \n                  </mat-list>\n                </td>\n                <td>\n                  <mat-list *ngFor=\"let j of tcop, let ind = index\">\n        \n                    <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 15px ;margin-bottom: 15px;\" matSuffix>cancel</mat-icon>\n                  </mat-list>\n                </td>\n              </tr>\n            </table>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button (click)=\"addprog()\" matStepperNext>Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n    </mat-vertical-stepper>\n    <pre>Refresh to update the manual</pre>\n  </div>\n     <div class = \"uename\" [hidden]=\"uename\">\n        <h2>Update Experiment Name </h2>\n        <mat-vertical-stepper linear=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n         <mat-step [stepControl] >\n           \n             <ng-template matStepLabel >Experiment No:</ng-template>\n             \n               <mat-label>EXP NO: {{expnum}}</mat-label>\n             \n             <div>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           \n         </mat-step>\n         <mat-step [stepControl]=\"uenameFormGroup\">\n           <form [formGroup]=\"uenameFormGroup\">\n             <ng-template matStepLabel>Subtitle</ng-template>\n             <mat-form-field>\n               <mat-label>Aim</mat-label>\n               <input matInput formControlName=\"uexpname\" placeholder=\"Stack using Array\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button matStepperNext (click)=\"upexname();uenameFormGroup.reset()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n       </mat-vertical-stepper>\n       <pre>Refresh to update the manual</pre>\n      </div>\n     <div class = \"upname\" [hidden]=\"upprog1\">\n      <h2>Update Program</h2>\n      <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n        <mat-step [stepControl]>\n         \n          <ng-template matStepLabel >Program No:</ng-template>\n          \n            <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n          \n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        \n        </mat-step>\n    \n       <mat-step [stepControl]=\"upFormGroup_title\">\n        <form [formGroup]=\"upFormGroup_title\">\n          <ng-template matStepLabel>Title </ng-template>\n          <mat-form-field>\n            <mat-label>Tiltle</mat-label>\n            <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_desc\">\n        <form [formGroup]=\"upFormGroup_desc\">\n          <ng-template matStepLabel>Description </ng-template>\n          <mat-form-field>\n            <mat-label>Description</mat-label>\n            <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_ipf\">\n        <form [formGroup]=\"upFormGroup_ipf\">\n          <ng-template matStepLabel>Input Format </ng-template>\n          <mat-form-field>\n            <mat-label>Input Format</mat-label>\n            <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_cons\">\n        <form [formGroup]=\"upFormGroup_cons\">\n          <ng-template matStepLabel>Constraints </ng-template>\n          <mat-form-field>\n            <mat-label>Constraints</mat-label>\n            <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_opf\">\n        <form [formGroup]=\"upFormGroup_opf\">\n          <ng-template matStepLabel>Output Format </ng-template>\n          <mat-form-field>\n            <mat-label>Program No</mat-label>\n            <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sip\">\n        <form [formGroup]=\"upFormGroup_sip\">\n          <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Input </mat-label>\n            <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sop\">\n        <form [formGroup]=\"upFormGroup_sop\">\n          <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Output </mat-label>\n            <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext >Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_exp\">\n        <form [formGroup]=\"upFormGroup_exp\">\n          <ng-template matStepLabel>Explanation </ng-template>\n          <mat-form-field>\n            <mat-label>Explanation</mat-label>\n            <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_tc\">\n        <form [formGroup]=\"upFormGroup_tc\">\n          <ng-template matStepLabel>Test Cases</ng-template>\n          <mat-form-field>\n            <mat-label>Input</mat-label>\n            <input matInput formControlName=\"uprogtcip\">\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Expected Output</mat-label>\n            <input matInput formControlName=\"uprogtcop\">\n          </mat-form-field>\n          <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n          <table>\n            <th>Input</th>\n            <th style=\"margin-left: 100%;\">Output</th>\n            <tr>\n              <td>\n                \n                <mat-list *ngFor=\"let i of tcip\">\n                  <p>{{i}}</p>\n                </mat-list>\n              </td>\n              <td>\n                \n                <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                  <section style=\"display: flex;\">\n                  <p style=\"margin-left: 50%;\">{{j}}</p>\n                  <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                </section>\n                </mat-list>\n              </td>\n\n            </tr>\n          </table>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      \n       <mat-step>\n         <ng-template matStepLabel>Done</ng-template>\n         <p>You are now done.</p>\n         <div>\n           <button mat-button matStepperPrevious>Back</button>\n           <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n     </mat-vertical-stepper>\n     <pre>Refresh to update the manual</pre>\n    </div>\n   <div class = \"addexp\" [hidden]=\"addexp\">\n      <h2>Add Experiment</h2>\n        <mat-vertical-stepper [linear]=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]=\"firstFormGroup\" >\n            <form [formGroup]=\"firstFormGroup\" >\n              <ng-template matStepLabel >Experiment No:</ng-template>\n              <mat-form-field>\n                <mat-label>EXP NO</mat-label>\n                <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"expno\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button  matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"secondFormGroup\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel>Subtitle</ng-template>\n              <mat-form-field>\n                <mat-label>Aim</mat-label>\n                <input matInput formControlName=\"expname\" placeholder=\"Stack using Array\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext >Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n            </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Complete</ng-template>\n            <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n            \n          </mat-step>\n        </mat-vertical-stepper>\n        <pre>Refresh to update the manual</pre>\n      </div>\n    \n    \n  </mat-card>\n\n  <mat-card id=\"card1\" class=\"card card-3\">\n    <div>\n    <section class=\"example-section-man\">\n    <h2 >Manual Preview</h2>\n    <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Manual<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n    </section>\n    <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n    <mat-accordion>\n\n      <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Experiment: {{item.no}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{item.name}} \n            <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Add Program\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Delete Experiment\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-list>\n          <mat-list-item *ngFor=\"let subitem of item.prog, let j = index\">\n            Program {{subitem.eno}}.{{subitem.pno}}:      {{subitem.title}}\n            <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </mat-expansion-panel>\n      \n    </mat-accordion> \n    \n    \n  </div>\n</mat-card>\n</section>\n</div>\n</div>\n\n\n<div class=\"desktop\">\n  \n  <div id=\"topbar\"> \n    <p id=\"ctitle\" style=\"margin-left: 180px;\">LAB MANUAL</p><br>\n    <!-- <img style=\"display: inline-block;margin-top: 5px;\" width=\"400px\" src=\"/assets/lab1.png\" /> -->\n    <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n    \n</div>\n\n<div id=\"com_body\">\n<section class=\"example-section\">\n  <mat-card id=\"card1\" class=\"card \">\n\n        <!-- <mat-list>\n          <mat-list-item> Program 1.1: Implementation of Stack using Array <button (click)=\"program()\" style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item> Program 1.2: Implementation of two stacks in an array <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n          \n         </mat-list> -->\n     \n      <div class = \"addprog\" [hidden]=\"addprogtog\">\n        <h2>Add Program</h2>\n\n      \n        <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]>\n           \n            <ng-template matStepLabel >Experiment No:</ng-template>\n            \n              <mat-label>EXP NO: {{expnum1}}</mat-label>\n            \n            <div>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          \n          </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_pno\">\n           <form [formGroup]=\"addprogFormGroup_pno\">\n             <ng-template matStepLabel>Program No: </ng-template>\n             <mat-form-field>\n               <mat-label>Program No</mat-label>\n               <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step [stepControl]=\"addprogFormGroup_t\">\n          <form [formGroup]=\"addprogFormGroup_t\">\n            <ng-template matStepLabel>Title </ng-template>\n            <mat-form-field>\n              <mat-label>Tiltle</mat-label>\n              <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n         </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_d\">\n          <form [formGroup]=\"addprogFormGroup_d\">\n            <ng-template matStepLabel>Description </ng-template>\n            <mat-form-field>\n              <mat-label>Description</mat-label>\n              <input matInput formControlName=\"progdesc\" placeholder=\"Program Description\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n          <form [formGroup]=\"addprogFormGroup_ipf\">\n            <ng-template matStepLabel>Input Format </ng-template>\n            <mat-form-field>\n              <mat-label>Input Format</mat-label>\n              <input matInput formControlName=\"progip_format\" placeholder=\"Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_c\">\n          <form [formGroup]=\"addprogFormGroup_c\">\n            <ng-template matStepLabel>Constraints </ng-template>\n            <mat-form-field>\n              <mat-label>Constraints</mat-label>\n              <input matInput formControlName=\"progcons\" placeholder=\"Program Constraints\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_opf\">\n          <form [formGroup]=\"addprogFormGroup_opf\">\n            <ng-template matStepLabel>Output Format </ng-template>\n            <mat-form-field>\n              <mat-label>Program No</mat-label>\n              <input matInput formControlName=\"progop_format\" placeholder=\"Output Format\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sip\">\n          <form [formGroup]=\"addprogFormGroup_sip\">\n            <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Input </mat-label>\n              <input matInput formControlName=\"progtc_ip\" placeholder=\"Testcase Input\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_sop\">\n          <form [formGroup]=\"addprogFormGroup_sop\">\n            <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n            <mat-form-field>\n              <mat-label>Sample Testcase 1: Output </mat-label>\n              <input matInput formControlName=\"progtc_op\" placeholder=\"Testcase Output\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_exp\">\n          <form [formGroup]=\"addprogFormGroup_exp\">\n            <ng-template matStepLabel>Explanation </ng-template>\n            <mat-form-field>\n              <mat-label>Explanation</mat-label>\n              <input matInput formControlName=\"progexpl\" placeholder=\"Testcase Explanation\" required>\n            </mat-form-field>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext type=\"submit\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"addprogFormGroup_tc\">\n          <form [formGroup]=\"addprogFormGroup_tc\">\n            <ng-template matStepLabel>Test Cases</ng-template>\n            <mat-form-field>\n              <mat-label>Input</mat-label>\n              <input matInput formControlName=\"progtcip\">\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Expected Output</mat-label>\n              <input matInput formControlName=\"progtcop\">\n            </mat-form-field>\n            <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc1()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n            <table>\n              <th>Input</th>\n              <th style=\"margin-left: 100%;\">Output</th>\n              <tr>\n                <td>\n                  \n                  <mat-list *ngFor=\"let i of tcip\">\n                    <p>{{i}}</p>\n                  </mat-list>\n                </td>\n                <td>\n                  \n                  <mat-list *ngFor=\"let j of tcop\">\n                    <p style=\"margin-left: 50%;\">{{j}}</p>\n                    \n                  </mat-list>\n                </td>\n                <td>\n                  <mat-list *ngFor=\"let j of tcop, let ind = index\">\n        \n                    <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 15px ;margin-bottom: 15px;\" matSuffix>cancel</mat-icon>\n                  </mat-list>\n                </td>\n              </tr>\n            </table>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button (click)=\"addprog()\" matStepperNext>Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n    </mat-vertical-stepper>\n    <pre>To add an Experiment Refresh the page so manual is updated</pre>\n    </div>\n     <div class = \"uename\" [hidden]=\"uename\">\n        <h2>Update Experiment Name </h2>\n        <mat-vertical-stepper linear=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n         <mat-step [stepControl] >\n           \n             <ng-template matStepLabel >Experiment No:</ng-template>\n             \n               <mat-label>EXP NO: {{expnum}}</mat-label>\n             \n             <div>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           \n         </mat-step>\n         <mat-step [stepControl]=\"uenameFormGroup\">\n           <form [formGroup]=\"uenameFormGroup\">\n             <ng-template matStepLabel>Subtitle</ng-template>\n             <mat-form-field>\n               <mat-label>Aim</mat-label>\n               <input matInput formControlName=\"uexpname\" placeholder=\"Stack using Array\" required>\n             </mat-form-field>\n             <div>\n               <button mat-button matStepperPrevious>Back</button>\n               <button mat-button matStepperNext>Next</button>\n             </div>\n           </form>\n         </mat-step>\n         <mat-step>\n           <ng-template matStepLabel>Done</ng-template>\n           <p>You are now done.</p>\n           <div>\n             <button mat-button matStepperPrevious>Back</button>\n             <button mat-button matStepperNext (click)=\"upexname();uenameFormGroup.reset()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n       </mat-vertical-stepper>\n       <pre>To add an Experiment Refresh the page so manual is updated</pre>\n     </div>\n     <div class = \"upname\" [hidden]=\"upprog1\">\n      <h2>Update Program</h2>\n      <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n        <mat-step [stepControl]>\n         \n          <ng-template matStepLabel >Program No:</ng-template>\n          \n            <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n          \n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        \n        </mat-step>\n    \n       <mat-step [stepControl]=\"upFormGroup_title\">\n        <form [formGroup]=\"upFormGroup_title\">\n          <ng-template matStepLabel>Title </ng-template>\n          <mat-form-field>\n            <mat-label>Tiltle</mat-label>\n            <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_desc\">\n        <form [formGroup]=\"upFormGroup_desc\">\n          <ng-template matStepLabel>Description </ng-template>\n          <mat-form-field>\n            <mat-label>Description</mat-label>\n            <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_ipf\">\n        <form [formGroup]=\"upFormGroup_ipf\">\n          <ng-template matStepLabel>Input Format </ng-template>\n          <mat-form-field>\n            <mat-label>Input Format</mat-label>\n            <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_cons\">\n        <form [formGroup]=\"upFormGroup_cons\">\n          <ng-template matStepLabel>Constraints </ng-template>\n          <mat-form-field>\n            <mat-label>Constraints</mat-label>\n            <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_opf\">\n        <form [formGroup]=\"upFormGroup_opf\">\n          <ng-template matStepLabel>Output Format </ng-template>\n          <mat-form-field>\n            <mat-label>Program No</mat-label>\n            <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sip\">\n        <form [formGroup]=\"upFormGroup_sip\">\n          <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Input </mat-label>\n            <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext type=\"submit\">Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_sop\">\n        <form [formGroup]=\"upFormGroup_sop\">\n          <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n          <mat-form-field>\n            <mat-label>Sample Testcase 1: Output </mat-label>\n            <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext >Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_exp\">\n        <form [formGroup]=\"upFormGroup_exp\">\n          <ng-template matStepLabel>Explanation </ng-template>\n          <mat-form-field>\n            <mat-label>Explanation</mat-label>\n            <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"upFormGroup_tc\">\n        <form [formGroup]=\"upFormGroup_tc\">\n          <ng-template matStepLabel>Test Cases</ng-template>\n          <mat-form-field>\n            <mat-label>Input</mat-label>\n            <input matInput formControlName=\"uprogtcip\">\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Expected Output</mat-label>\n            <input matInput formControlName=\"uprogtcop\">\n          </mat-form-field>\n          <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n          <table>\n            <th>Input</th>\n            <th style=\"margin-left: 100%;\">Output</th>\n            <tr>\n              <td>\n                \n                <mat-list *ngFor=\"let i of tcip\">\n                  <p>{{i}}</p>\n                </mat-list>\n              </td>\n              <td>\n                \n                <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                  <section style=\"display: flex;\">\n                  <p style=\"margin-left: 50%;\">{{j}}</p>\n                  <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                </section>\n                </mat-list>\n              </td>\n\n            </tr>\n          </table>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      \n       <mat-step>\n         <ng-template matStepLabel>Done</ng-template>\n         <p>You are now done.</p>\n         <div>\n           <button mat-button matStepperPrevious>Back</button>\n           <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n           </div>\n         </mat-step>\n         <mat-step>\n          <ng-template matStepLabel>Complete</ng-template>\n          <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n          \n        </mat-step>\n     </mat-vertical-stepper>\n     <pre>To add an Experiment Refresh the page so manual is updated</pre>\n   </div>\n   <div class = \"addexp\" [hidden]=\"addexp\">\n      <h2>Add Experiment</h2>\n        <mat-vertical-stepper [linear]=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n          <mat-step [stepControl]=\"firstFormGroup\" >\n            <form [formGroup]=\"firstFormGroup\" >\n              <ng-template matStepLabel >Experiment No:</ng-template>\n              <mat-form-field>\n                <mat-label>EXP NO</mat-label>\n                <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"expno\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button  matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"secondFormGroup\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel>Subtitle</ng-template>\n              <mat-form-field>\n                <mat-label>Aim</mat-label>\n                <input matInput formControlName=\"expname\" placeholder=\"Stack using Array\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext >Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n            </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Complete</ng-template>\n            <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n            \n          </mat-step>\n        </mat-vertical-stepper>\n        <pre>To add an Experiment Refresh the page so manual is updated</pre>\n      </div>\n    \n    \n  </mat-card>\n\n  <mat-card id=\"card1\" class=\"card card-3\">\n    <div>\n    <section class=\"example-section-man\">\n    <h2 >Manual Preview</h2>\n    <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Manual<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n    </section>\n    <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n    <mat-accordion>\n\n      <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Experiment: {{item.no}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{item.name}} \n            <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Add Program\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n            <mat-icon class=\"edit\" matTooltip=\"Delete Experiment\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-list>\n          <mat-list-item *ngFor=\"let subitem of item.prog, let j = index\">\n            Program {{subitem.eno}}.{{subitem.pno}}:      {{subitem.title}}\n            <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n            <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n            <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </mat-expansion-panel>\n      \n    </mat-accordion> \n    \n    \n  </div>\n</mat-card>\n</section>\n</div>\n</div>\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html> \n<html lang=\"en\"> \n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n</head>\n<body>\n  \n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">E-Learning Portal</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                           <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'over'\"\n                                        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                             <mat-nav-list >\n                               <br><br>\n                               <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                               <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                               <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                               <a mat-list-item [routerLink]=\"['/editor1']\" routerLinkActive=\"router-link-active\"  >Realtime Code Share </a>\n\n                               <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n\n  \n                       \n                       \n                       \n                       \n                             </mat-nav-list>\n                           </mat-sidenav>\n  \n      <mat-sidenav-content style=\"background-color: white;\">\n        <mat-form-field color=\"warn\"  class=\"example-full-width\">\n          <mat-label>Start Writing your code</mat-label>\n          <textarea style=\"margin-left: 3%;\" input=\"text\" matInput rows=\"30\" cols=\"0\" [(ngModel)]=\"code1\" (ngModelChange)=\"valuechange($event)\"></textarea>\n        </mat-form-field>\n      \n        \n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Enter your input here</mat-label>\n        <textarea style=\"margin-left: 3%;\" matInput rows=\"10\" cols=\"0\" matInput placeholder=\"@input\"  [(ngModel)]=\"code2\"></textarea>\n        </mat-form-field>\n      \n        <!-- <button mat-fab color=\"primary\"  (click)=\"extractcode1()\"> \n          <mat-icon style=\"color:red\" matSuffix>arrow_forward</mat-icon>\n        </button> -->\n      \n        <br><br>\n        <button style=\"margin-left:3%;width:10%\" (click)=\"extractcode1()\" mat-raised-button color=\"warn\">Run Code</button>\n      \n        <button ngxClipboard [cbContent]=\"'http://localhost:4200/#/editor'\" style=\"margin-left:3%\" mat-fab color=\"warn\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>content_copy\n          </mat-icon>\n        </button>\n        <mat-form-field style=\"background-color:#B23121;margin-left:3%\" appearance=\"fill\">\n          <mat-label>Select an option</mat-label>\n          <mat-select [(ngModel)]=\"selectedValue\" (ngModelChange)=\"selected(selectedValue)\">\n            <mat-option>None</mat-option>\n            <mat-option value=\"C\">C Compiler</mat-option>\n            <mat-option value=\"C++\">C++ Compiler</mat-option>\n            <mat-option value=\"java\">Java11 Compiler</mat-option>\n            <mat-option value=\"python\">Python3.X Compiler</mat-option>\n      \n          </mat-select>\n        </mat-form-field>\n      \n      \n       \n      \n      \n        <br><br>\n        <h3 style=\"margin-left:3%;\">Your output:{{outputfinal}}</h3>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n\n</body>\n</html>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor1/editor1.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor1/editor1.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html> \n<html lang=\"en\"> \n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n</head>\n<body>\n  \n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">E-Learning Portal</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                           <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'over'\"\n                                        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                             <mat-nav-list >\n                               <br><br>\n                               <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                               <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                               <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                               <a mat-list-item [routerLink]=\"['/editor1']\" routerLinkActive=\"router-link-active\"  >Realtime Code Share </a>\n\n                               <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n\n  \n                       \n                       \n                       \n                       \n                             </mat-nav-list>\n                           </mat-sidenav>\n  \n      <mat-sidenav-content style=\"background-color: white;\">\n        <mat-form-field color=\"warn\"  class=\"example-full-width\">\n          <mat-label>Start Writing your code</mat-label>\n          <textarea style=\"margin-left: 3%;\" input=\"text\" matInput rows=\"30\" cols=\"0\" [(ngModel)]=\"code1\" (ngModelChange)=\"valuechange($event)\"></textarea>\n        </mat-form-field>\n      \n        \n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Enter your input here</mat-label>\n        <textarea style=\"margin-left: 3%;\" matInput rows=\"10\" cols=\"0\" matInput placeholder=\"@input\"  [(ngModel)]=\"code2\"></textarea>\n        </mat-form-field>\n      \n        <!-- <button mat-fab color=\"primary\"  (click)=\"extractcode1()\"> \n          <mat-icon style=\"color:red\" matSuffix>arrow_forward</mat-icon>\n        </button> -->\n      \n        <br><br>\n        <button style=\"margin-left:3%;width:10%\" (click)=\"extractcode1()\" mat-raised-button color=\"warn\">Run Code</button>\n      \n        <button ngxClipboard [cbContent]=\"'http://localhost:4200/#/editor'\" style=\"margin-left:3%\" mat-fab color=\"warn\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>content_copy\n          </mat-icon>\n        </button>\n        <mat-form-field style=\"background-color:#B23121;margin-left:3%\" appearance=\"fill\">\n          <mat-label>Select an option</mat-label>\n          <mat-select [(ngModel)]=\"selectedValue\" (ngModelChange)=\"selected(selectedValue)\">\n            <mat-option>None</mat-option>\n            <mat-option value=\"C\">C Compiler</mat-option>\n            <mat-option value=\"C++\">C++ Compiler</mat-option>\n            <mat-option value=\"java\">Java11 Compiler</mat-option>\n            <mat-option value=\"python\">Python3.X Compiler</mat-option>\n      \n          </mat-select>\n        </mat-form-field>\n      \n      \n       \n      \n      \n        <br><br>\n        <h3 style=\"margin-left:3%;\">Your output:{{outputfinal}}</h3>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n\n</body>\n</html>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editquiz/editquiz.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editquiz/editquiz.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n    <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n      <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n        <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n        <h1 class=\"example-app-name\">E-Learning Portal</h1>\n      </mat-toolbar>\n    \n      <mat-sidenav-container class=\"example-sidenav-container\"\n                             [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                             <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                             background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                             background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                             background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                          [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                               <mat-nav-list >\n                                 <br><br>\n                                 <a mat-list-item [routerLink]=\"['/editteacher']\" routerLinkActive=\"router-link-active\"  >Edit Student Course List</a>\n                                 <a mat-list-item [routerLink]=\"['/labbook']\" routerLinkActive=\"router-link-active\"  >Lab Book</a>\n                                 <a mat-list-item [routerLink]=\"['/editquiz']\" routerLinkActive=\"router-link-active\"  >Quiz Book</a>\n                                 <a mat-list-item [routerLink]=\"['/webinar1']\" routerLinkActive=\"router-link-active\"  >Create webinar</a>\n                                 <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n                         \n                         \n                         \n                         \n                               </mat-nav-list>\n                             </mat-sidenav>\n    \n        <mat-sidenav-content style=\"background-color: white;\">\n       \n          <div class=\"chote\">\n            <div id=\"topbar\"> \n              <p id=\"ctitle\">QUIZ BOOK</p><br>\n             <!-- <button (click)=\"heelo()\">heelo</button> -->\n          </div>\n          \n          \n          <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All\n                  <br>\n                  Enter Score for each question, range (1-5)\n                  <ng-container *ngFor=\"let i of u1,let k = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                        \n                        <input style=\"width: 20px;margin-left: 5px;\" value={{i.score}} (change)=\"scoreInd(k,$event.target.value)\">\n                          <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button>\n                  <!-- <button mat-raised-button color=\"accent\" (click)=\"addcqD()\"  style=\"margin-left: 20px;\">Add Custom Question</button> -->\n              </mat-list>\n              <div>\n                      <section class=\"display-card\">\n                                  <mat-card id=\"card2\" class=\"card card-3\" style=\"background-color: #0080ff;color: white;\">\n                                      <pre style=\"font-weight: bold;font-size: large;\">Custom Question\n                                      </pre>\n                                      <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                          <mat-label color=\"accent\">Question</mat-label>\n                                          <input matInput name=\"email\" [(ngModel)]=\"ques\"  placeholder=\"Add Question\" ngModel>\n                                      </mat-form-field>\n                                      \n                                      <div class=\"radio-toolbar\">\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">A:</span>\n                                          \n                                              <input type=\"radio\" id=\"A\" name=\"A\" value=\"A\" [(ngModel)]=\"opselect\">\n                                              <label for=\"A\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opa\"  placeholder=\"Add Option\" ngModel>\n                                              <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                                  <mat-label color=\"accent\">Option 1</mat-label>\n                                                  <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                              </mat-form-field> -->\n                                              </label>\n                                              <!-- <p class=\"example-margin\"></p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">B:</span>\n                                          \n                                          <input type=\"radio\" id=\"B\" name=\"A\" value=\"B\" [(ngModel)]=\"opselect\">\n                                          <label for=\"B\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opb\"  placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 2</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              <!-- <p class=\"example-margin\">Prints all nodes of linked list in reverse order</p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">C:</span>\n                                          \n                                          <input type=\"radio\" id=\"C\" name=\"A\" value=\"C\" [(ngModel)]=\"opselect\">\n                                          <label for=\"C\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opc\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">D:</span>\n                                          \n                                          <input type=\"radio\" id=\"D\" name=\"A\" value=\"D\" [(ngModel)]=\"opselect\">\n                                          <label for=\"D\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opd\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                             \n                                         \n                                      </section>\n                                  </div>\n                                      <section class=\"example-section\">\n                                          <div style=\"text-align: center;margin-left: 150px;\">\n                                              <button style=\"height: 40px;\" (click)=\"addcq()\" type=\"submit\" mat-raised-button class=\"alternate-theme\" color=\"warn\">Add</button>\n                                          </div>\n                                      </section>\n                      \n                                  </mat-card>\n                                  <mat-list >\n                                      <pre style=\"font-weight: bold;font-size: large;margin-left: 20px;\">Custom Question List\n                                      </pre>\n                                      <!-- <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All -->\n                                      <ng-container *ngFor=\"let i of customArray,let k = index\">\n                                          <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                                              {{i.id + 1}} .: {{i.question}}</mat-list-item>\n                                              <!-- <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item> -->\n                                          <mat-list>\n                                              <div >\n                                                  \n                                                  <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                                              </div>\n                                          </mat-list>\n                                          <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                                      </ng-container>\n                                      <!-- <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button> -->\n                                      <button mat-raised-button color=\"accent\" (click)=\"saveall()\"  style=\"margin-left: 20px;\">Save All Questions</button>\n                                      <button mat-raised-button color=\"accent\" (click)=\"addprog()\"  style=\"margin-left: 20px;\">Done</button>\n                                  </mat-list>            \n                                  \n                  </section>\n              </div>\n              \n          </div>\n          <!-- <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <ng-container *ngFor=\"let i of manual,let j = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\"><mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"checked[j]\">Hello</mat-checkbox></mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button (click)=\"check1()\">submiit</button>\n              </mat-list>\n          </div> -->\n          \n          <div id=\"com_body\">\n          <div [hidden]=\"main\">\n          <section>\n            <mat-card id=\"card1\" class=\"card card-3\">\n                <div class = \"addprog\" [hidden]=\"addprogtog\">\n                  <h2>Add Quiz Topic</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]>\n                     \n                      <ng-template matStepLabel >Quiz No:</ng-template>\n                      \n                        <mat-label>Quiz NO: {{quiznum}}</mat-label>\n                      \n                      <div>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    \n                    </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_pno\">\n                     <form [formGroup]=\"addprogFormGroup_pno\">\n                       <ng-template matStepLabel>Topic No: </ng-template>\n                       <mat-form-field>\n                         <mat-label>Topic No</mat-label>\n                         <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_t\">\n                    <form [formGroup]=\"addprogFormGroup_t\">\n                      <ng-template matStepLabel>Title </ng-template>\n                      <mat-form-field>\n                        <mat-label>Tiltle</mat-label>\n                        <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    </form>\n                   </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_d\">\n                    <form [formGroup]=\"addprogFormGroup_d\">\n                      <ng-template matStepLabel>URL 1 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL1</mat-label>\n                        <input matInput formControlName=\"progurl1\" placeholder=\"URL 1\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n                    <form [formGroup]=\"addprogFormGroup_ipf\">\n                      <ng-template matStepLabel>URL 2 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL 2</mat-label>\n                        <input matInput formControlName=\"progurl2\" placeholder=\"URL 2\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  \n                  \n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button (click)=\"addques()\" matStepperNext>Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n              </mat-vertical-stepper>\n              <pre>Refresh the page to update</pre>\n              </div>\n              <div class = \"uename\" [hidden]=\"uename\">\n                  <h2>Update Quiz Name </h2>\n                  <mat-vertical-stepper linear=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                   <mat-step [stepControl] >\n                     \n                       <ng-template matStepLabel >Quiz No:</ng-template>\n                       \n                         <mat-label>EXP NO: {{quiznum}}</mat-label>\n                       \n                       <div>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     \n                   </mat-step>\n                   <mat-step [stepControl]=\"uenameFormGroup\">\n                     <form [formGroup]=\"uenameFormGroup\">\n                       <ng-template matStepLabel>Quiz Name</ng-template>\n                       <mat-form-field>\n                         <mat-label>Name</mat-label>\n                         <input matInput formControlName=\"uexpname\" placeholder=\"Stack\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button matStepperNext (click)=\"upqname();uenameFormGroup.reset()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n                 </mat-vertical-stepper>\n                 <pre>Refresh to update quizbook</pre>\n               </div>\n               <!--<div class = \"upname\" [hidden]=\"upprog1\">\n                <h2>Update Program</h2>\n                <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n                  <mat-step [stepControl]>\n                   \n                    <ng-template matStepLabel >Program No:</ng-template>\n                    \n                      <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n                    \n                    <div>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  \n                  </mat-step>\n              \n                 <mat-step [stepControl]=\"upFormGroup_title\">\n                  <form [formGroup]=\"upFormGroup_title\">\n                    <ng-template matStepLabel>Title </ng-template>\n                    <mat-form-field>\n                      <mat-label>Tiltle</mat-label>\n                      <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_desc\">\n                  <form [formGroup]=\"upFormGroup_desc\">\n                    <ng-template matStepLabel>Description </ng-template>\n                    <mat-form-field>\n                      <mat-label>Description</mat-label>\n                      <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_ipf\">\n                  <form [formGroup]=\"upFormGroup_ipf\">\n                    <ng-template matStepLabel>Input Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Input Format</mat-label>\n                      <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_cons\">\n                  <form [formGroup]=\"upFormGroup_cons\">\n                    <ng-template matStepLabel>Constraints </ng-template>\n                    <mat-form-field>\n                      <mat-label>Constraints</mat-label>\n                      <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_opf\">\n                  <form [formGroup]=\"upFormGroup_opf\">\n                    <ng-template matStepLabel>Output Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Program No</mat-label>\n                      <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sip\">\n                  <form [formGroup]=\"upFormGroup_sip\">\n                    <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Input </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sop\">\n                  <form [formGroup]=\"upFormGroup_sop\">\n                    <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Output </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext >Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_exp\">\n                  <form [formGroup]=\"upFormGroup_exp\">\n                    <ng-template matStepLabel>Explanation </ng-template>\n                    <mat-form-field>\n                      <mat-label>Explanation</mat-label>\n                      <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_tc\">\n                  <form [formGroup]=\"upFormGroup_tc\">\n                    <ng-template matStepLabel>Test Cases</ng-template>\n                    <mat-form-field>\n                      <mat-label>Input</mat-label>\n                      <input matInput formControlName=\"uprogtcip\">\n                    </mat-form-field>\n                    <mat-form-field>\n                      <mat-label>Expected Output</mat-label>\n                      <input matInput formControlName=\"uprogtcop\">\n                    </mat-form-field>\n                    <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n                    <table>\n                      <th>Input</th>\n                      <th style=\"margin-left: 100%;\">Output</th>\n                      <tr>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let i of tcip\">\n                            <p>{{i}}</p>\n                          </mat-list>\n                        </td>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                            <section style=\"display: flex;\">\n                            <p style=\"margin-left: 50%;\">{{j}}</p>\n                            <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                          </section>\n                          </mat-list>\n                        </td>\n      \n                      </tr>\n                    </table>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                \n                 <mat-step>\n                   <ng-template matStepLabel>Done</ng-template>\n                   <p>You are now done.</p>\n                   <div>\n                     <button mat-button matStepperPrevious>Back</button>\n                     <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n                    \n                  </mat-step>\n               </mat-vertical-stepper>\n               <pre>To add an Experiment Refresh the page so manual is updated</pre>\n             </div> -->\n             <div class = \"addexp\" [hidden]=\"addquiz\">\n                <h2>Add New Quiz</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]=\"firstFormGroup\" >\n                      <form [formGroup]=\"firstFormGroup\" >\n                        <ng-template matStepLabel >Quiz No:</ng-template>\n                        <mat-form-field>\n                          <mat-label>Sr. No</mat-label>\n                          <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"quizno\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button  matStepperNext>Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step [stepControl]=\"secondFormGroup\">\n                      <form [formGroup]=\"secondFormGroup\">\n                        <ng-template matStepLabel>Name</ng-template>\n                        <mat-form-field>\n                          <mat-label>Quiz Name</mat-label>\n                          <input matInput formControlName=\"quizname\" placeholder=\"Stack\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button matStepperPrevious>Back</button>\n                          <button mat-button matStepperNext >Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Done</ng-template>\n                      <p>You are now done.</p>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n                      </div>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Complete</ng-template>\n                      <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                      \n                    </mat-step>\n                  </mat-vertical-stepper>\n                  <pre>Refresh to update quizbook</pre>\n                </div>\n              \n              \n            </mat-card>\n          \n            <mat-card id=\"card1\" class=\"card card-3\">\n              <div>\n              <section class=\"example-section-man\">\n              <h2 >Quiz Book Preview</h2>\n              <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Book<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n              </section>\n              <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n              <mat-accordion>\n      \n                <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Quiz: {{i+1}}\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      {{item.name}} \n                      <!-- <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" matTooltip=\"Edit Quiz Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Add Quiz\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Delete Quiz\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let subitem of item.topic, let j = index\">\n                      Title {{item.ind +1}}.{{subitem.tind+1}}:      {{subitem.title}}\n                      <!-- <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n                      <mat-divider></mat-divider>\n                    </mat-list-item>\n                  </mat-list>\n                </mat-expansion-panel>\n                \n              </mat-accordion> \n              \n              \n            </div>\n          </mat-card>\n          </section>\n          </div>\n          </div>      \n        \n        \n        </div>\n          \n          <div class=\"medium\">\n            <div id=\"topbar\"> \n              <p id=\"ctitle\">QUIZ BOOK</p><br>\n             <!-- <button (click)=\"heelo()\">heelo</button> -->\n          </div>\n          \n          \n          <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All\n                  <br>\n                  Enter Score for each question, range (1-5)\n                  <ng-container *ngFor=\"let i of u1,let k = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                        <input style=\"width: 20px;margin-left: 5px;\" value={{i.score}} (change)=\"scoreInd(k,$event.target.value)\">\n                          <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button>\n                  <!-- <button mat-raised-button color=\"accent\" (click)=\"addcqD()\"  style=\"margin-left: 20px;\">Add Custom Question</button> -->\n              </mat-list>\n              <div>\n                      <section class=\"display-card\">\n                                  <mat-card id=\"card2\" class=\"card card-3\" style=\"background-color: #0080ff;color: white;\">\n                                      <pre style=\"font-weight: bold;font-size: large;\">Custom Question\n                                      </pre>\n                                      <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                          <mat-label color=\"accent\">Question</mat-label>\n                                          <input matInput name=\"email\" [(ngModel)]=\"ques\"  placeholder=\"Add Question\" ngModel>\n                                      </mat-form-field>\n                                      \n                                      <div class=\"radio-toolbar\">\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">A:</span>\n                                          \n                                              <input type=\"radio\" id=\"A\" name=\"A\" value=\"A\" [(ngModel)]=\"opselect\">\n                                              <label for=\"A\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opa\"  placeholder=\"Add Option\" ngModel>\n                                              <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                                  <mat-label color=\"accent\">Option 1</mat-label>\n                                                  <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                              </mat-form-field> -->\n                                              </label>\n                                              <!-- <p class=\"example-margin\"></p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">B:</span>\n                                          \n                                          <input type=\"radio\" id=\"B\" name=\"B\" value=\"B\" [(ngModel)]=\"opselect\">\n                                          <label for=\"B\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opb\"  placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 2</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              <!-- <p class=\"example-margin\">Prints all nodes of linked list in reverse order</p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">C:</span>\n                                          \n                                          <input type=\"radio\" id=\"C\" name=\"C\" value=\"C\" [(ngModel)]=\"opselect\">\n                                          <label for=\"C\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opc\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">D:</span>\n                                          \n                                          <input type=\"radio\" id=\"D\" name=\"D\" value=\"D\" [(ngModel)]=\"opselect\">\n                                          <label for=\"D\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opd\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                             \n                                         \n                                      </section>\n                                  </div>\n                                      <section class=\"example-section\">\n                                          <div style=\"text-align: center;margin-left: 150px;\">\n                                              <button style=\"height: 40px;\" (click)=\"addcq()\" type=\"submit\" mat-raised-button class=\"alternate-theme\" color=\"warn\">Add</button>\n                                          </div>\n                                      </section>\n                      \n                                  </mat-card>\n                                  <mat-list >\n                                      <pre style=\"font-weight: bold;font-size: large;margin-left: 20px;\">Custom Question List\n                                      </pre>\n                                      <!-- <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All -->\n                                      <ng-container *ngFor=\"let i of customArray,let k = index\">\n                                          <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                                              {{i.id + 1}} .: {{i.question}}</mat-list-item>\n                                              <!-- <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item> -->\n                                          <mat-list>\n                                              <div >\n                                                  \n                                                  <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                                              </div>\n                                          </mat-list>\n                                          <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                                      </ng-container>\n                                      <!-- <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button> -->\n                                      <button mat-raised-button color=\"accent\" (click)=\"saveall()\"  style=\"margin-left: 20px;\">Save All Questions</button>\n                                      <button mat-raised-button color=\"accent\" (click)=\"addprog()\"  style=\"margin-left: 20px;\">Done</button>\n                                  </mat-list>            \n                                  \n                  </section>\n              </div>\n              \n          </div>\n          <!-- <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <ng-container *ngFor=\"let i of manual,let j = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\"><mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"checked[j]\">Hello</mat-checkbox></mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button (click)=\"check1()\">submiit</button>\n              </mat-list>\n          </div> -->\n          \n          <div id=\"com_body\">\n          <div [hidden]=\"main\">\n          <section>\n            <mat-card id=\"card1\" class=\"card card-3\">\n                <div class = \"addprog\" [hidden]=\"addprogtog\">\n                  <h2>Add Quiz Topic</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]>\n                     \n                      <ng-template matStepLabel >Quiz No:</ng-template>\n                      \n                        <mat-label>Quiz NO: {{quiznum}}</mat-label>\n                      \n                      <div>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    \n                    </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_pno\">\n                     <form [formGroup]=\"addprogFormGroup_pno\">\n                       <ng-template matStepLabel>Topic No: </ng-template>\n                       <mat-form-field>\n                         <mat-label>Topic No</mat-label>\n                         <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_t\">\n                    <form [formGroup]=\"addprogFormGroup_t\">\n                      <ng-template matStepLabel>Title </ng-template>\n                      <mat-form-field>\n                        <mat-label>Tiltle</mat-label>\n                        <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    </form>\n                   </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_d\">\n                    <form [formGroup]=\"addprogFormGroup_d\">\n                      <ng-template matStepLabel>URL 1 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL1</mat-label>\n                        <input matInput formControlName=\"progurl1\" placeholder=\"URL 1\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n                    <form [formGroup]=\"addprogFormGroup_ipf\">\n                      <ng-template matStepLabel>URL 2 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL 2</mat-label>\n                        <input matInput formControlName=\"progurl2\" placeholder=\"URL 2\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  \n                  \n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button (click)=\"addques()\" matStepperNext>Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n              </mat-vertical-stepper>\n              <pre>Refresh the page to update</pre>\n              </div>\n              <div class = \"uename\" [hidden]=\"uename\">\n                  <h2>Update Quiz Name </h2>\n                  <mat-vertical-stepper linear=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                   <mat-step [stepControl] >\n                     \n                       <ng-template matStepLabel >Quiz No:</ng-template>\n                       \n                         <mat-label>EXP NO: {{quiznum}}</mat-label>\n                       \n                       <div>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     \n                   </mat-step>\n                   <mat-step [stepControl]=\"uenameFormGroup\">\n                     <form [formGroup]=\"uenameFormGroup\">\n                       <ng-template matStepLabel>Quiz Name</ng-template>\n                       <mat-form-field>\n                         <mat-label>Name</mat-label>\n                         <input matInput formControlName=\"uexpname\" placeholder=\"Stack\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button matStepperNext (click)=\"upqname();uenameFormGroup.reset()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n                 </mat-vertical-stepper>\n                 <pre>Refresh to update quizbook</pre>\n               </div>\n               <!--<div class = \"upname\" [hidden]=\"upprog1\">\n                <h2>Update Program</h2>\n                <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n                  <mat-step [stepControl]>\n                   \n                    <ng-template matStepLabel >Program No:</ng-template>\n                    \n                      <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n                    \n                    <div>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  \n                  </mat-step>\n              \n                 <mat-step [stepControl]=\"upFormGroup_title\">\n                  <form [formGroup]=\"upFormGroup_title\">\n                    <ng-template matStepLabel>Title </ng-template>\n                    <mat-form-field>\n                      <mat-label>Tiltle</mat-label>\n                      <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_desc\">\n                  <form [formGroup]=\"upFormGroup_desc\">\n                    <ng-template matStepLabel>Description </ng-template>\n                    <mat-form-field>\n                      <mat-label>Description</mat-label>\n                      <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_ipf\">\n                  <form [formGroup]=\"upFormGroup_ipf\">\n                    <ng-template matStepLabel>Input Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Input Format</mat-label>\n                      <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_cons\">\n                  <form [formGroup]=\"upFormGroup_cons\">\n                    <ng-template matStepLabel>Constraints </ng-template>\n                    <mat-form-field>\n                      <mat-label>Constraints</mat-label>\n                      <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_opf\">\n                  <form [formGroup]=\"upFormGroup_opf\">\n                    <ng-template matStepLabel>Output Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Program No</mat-label>\n                      <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sip\">\n                  <form [formGroup]=\"upFormGroup_sip\">\n                    <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Input </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sop\">\n                  <form [formGroup]=\"upFormGroup_sop\">\n                    <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Output </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext >Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_exp\">\n                  <form [formGroup]=\"upFormGroup_exp\">\n                    <ng-template matStepLabel>Explanation </ng-template>\n                    <mat-form-field>\n                      <mat-label>Explanation</mat-label>\n                      <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_tc\">\n                  <form [formGroup]=\"upFormGroup_tc\">\n                    <ng-template matStepLabel>Test Cases</ng-template>\n                    <mat-form-field>\n                      <mat-label>Input</mat-label>\n                      <input matInput formControlName=\"uprogtcip\">\n                    </mat-form-field>\n                    <mat-form-field>\n                      <mat-label>Expected Output</mat-label>\n                      <input matInput formControlName=\"uprogtcop\">\n                    </mat-form-field>\n                    <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n                    <table>\n                      <th>Input</th>\n                      <th style=\"margin-left: 100%;\">Output</th>\n                      <tr>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let i of tcip\">\n                            <p>{{i}}</p>\n                          </mat-list>\n                        </td>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                            <section style=\"display: flex;\">\n                            <p style=\"margin-left: 50%;\">{{j}}</p>\n                            <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                          </section>\n                          </mat-list>\n                        </td>\n      \n                      </tr>\n                    </table>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                \n                 <mat-step>\n                   <ng-template matStepLabel>Done</ng-template>\n                   <p>You are now done.</p>\n                   <div>\n                     <button mat-button matStepperPrevious>Back</button>\n                     <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n                    \n                  </mat-step>\n               </mat-vertical-stepper>\n               <pre>To add an Experiment Refresh the page so manual is updated</pre>\n             </div> -->\n             <div class = \"addexp\" [hidden]=\"addquiz\">\n                <h2>Add New Quiz</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]=\"firstFormGroup\" >\n                      <form [formGroup]=\"firstFormGroup\" >\n                        <ng-template matStepLabel >Quiz No:</ng-template>\n                        <mat-form-field>\n                          <mat-label>Sr. No</mat-label>\n                          <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"quizno\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button  matStepperNext>Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step [stepControl]=\"secondFormGroup\">\n                      <form [formGroup]=\"secondFormGroup\">\n                        <ng-template matStepLabel>Name</ng-template>\n                        <mat-form-field>\n                          <mat-label>Quiz Name</mat-label>\n                          <input matInput formControlName=\"quizname\" placeholder=\"Stack\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button matStepperPrevious>Back</button>\n                          <button mat-button matStepperNext >Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Done</ng-template>\n                      <p>You are now done.</p>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n                      </div>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Complete</ng-template>\n                      <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                      \n                    </mat-step>\n                  </mat-vertical-stepper>\n                  <pre>Refresh to update quizbook</pre>\n                </div>\n              \n              \n            </mat-card>\n          \n            <mat-card id=\"card1\" class=\"card card-3\">\n              <div>\n              <section class=\"example-section-man\">\n              <h2 >Quiz Book Preview</h2>\n              <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Book<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n              </section>\n              <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n              <mat-accordion>\n      \n                <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Quiz: {{i+1}}\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      {{item.name}} \n                      <!-- <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" matTooltip=\"Edit Quiz Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Add Quiz\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Delete Quiz\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let subitem of item.topic, let j = index\">\n                      Title {{item.ind +1}}.{{subitem.tind+1}}:      {{subitem.title}}\n                      <!-- <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n                      <mat-divider></mat-divider>\n                    </mat-list-item>\n                  </mat-list>\n                </mat-expansion-panel>\n                \n              </mat-accordion> \n              \n              \n            </div>\n          </mat-card>\n          </section>\n          </div>\n          </div>      \n        \n            </div> \n          \n          <div class=\"large\">\n            <div id=\"topbar\"> \n              <p id=\"ctitle\">QUIZ BOOK</p><br>\n             <!-- <button (click)=\"heelo()\">heelo</button> -->\n          </div>\n          \n          \n          <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All\n                  <br>\n                  Enter Score for each question, range (1-5)\n                  <ng-container *ngFor=\"let i of u1,let k = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                        <input style=\"width: 20px;margin-left: 5px;\" value={{i.score}} (change)=\"scoreInd(k,$event.target.value)\">\n                          <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button>\n                  <!-- <button mat-raised-button color=\"accent\" (click)=\"addcqD()\"  style=\"margin-left: 20px;\">Add Custom Question</button> -->\n              </mat-list>\n              <div>\n                      <section class=\"display-card\">\n                                  <mat-card id=\"card2\" class=\"card card-3\" style=\"background-color: #0080ff;color: white;\">\n                                      <pre style=\"font-weight: bold;font-size: large;\">Custom Question\n                                      </pre>\n                                      <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                          <mat-label color=\"accent\">Question</mat-label>\n                                          <input matInput name=\"email\" [(ngModel)]=\"ques\"  placeholder=\"Add Question\" ngModel>\n                                      </mat-form-field>\n                                      \n                                      <div class=\"radio-toolbar\">\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">A:</span>\n                                          \n                                              <input type=\"radio\" id=\"A\" name=\"A\" value=\"A\" [(ngModel)]=\"opselect\">\n                                              <label for=\"A\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opa\"  placeholder=\"Add Option\" ngModel>\n                                              <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                                  <mat-label color=\"accent\">Option 1</mat-label>\n                                                  <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                              </mat-form-field> -->\n                                              </label>\n                                              <!-- <p class=\"example-margin\"></p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">B:</span>\n                                          \n                                          <input type=\"radio\" id=\"B\" name=\"B\" value=\"B\" [(ngModel)]=\"opselect\">\n                                          <label for=\"B\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opb\"  placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 2</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              <!-- <p class=\"example-margin\">Prints all nodes of linked list in reverse order</p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">C:</span>\n                                          \n                                          <input type=\"radio\" id=\"C\" name=\"C\" value=\"C\" [(ngModel)]=\"opselect\">\n                                          <label for=\"C\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opc\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">D:</span>\n                                          \n                                          <input type=\"radio\" id=\"D\" name=\"D\" value=\"D\" [(ngModel)]=\"opselect\">\n                                          <label for=\"D\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opd\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                             \n                                         \n                                      </section>\n                                  </div>\n                                      <section class=\"example-section\">\n                                          <div style=\"text-align: center;margin-left: 150px;\">\n                                              <button style=\"height: 40px;\" (click)=\"addcq()\" type=\"submit\" mat-raised-button class=\"alternate-theme\" color=\"warn\">Add</button>\n                                          </div>\n                                      </section>\n                      \n                                  </mat-card>\n                                  <mat-list >\n                                      <pre style=\"font-weight: bold;font-size: large;margin-left: 20px;\">Custom Question List\n                                      </pre>\n                                      <!-- <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All -->\n                                      <ng-container *ngFor=\"let i of customArray,let k = index\">\n                                          <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                                              {{i.id + 1}} .: {{i.question}}</mat-list-item>\n                                              <!-- <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item> -->\n                                          <mat-list>\n                                              <div >\n                                                  \n                                                  <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                                              </div>\n                                          </mat-list>\n                                          <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                                      </ng-container>\n                                      <!-- <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button> -->\n                                      <button mat-raised-button color=\"accent\" (click)=\"saveall()\"  style=\"margin-left: 20px;\">Save All Questions</button>\n                                      <button mat-raised-button color=\"accent\" (click)=\"addprog()\"  style=\"margin-left: 20px;\">Done</button>\n                                  </mat-list>            \n                                  \n                  </section>\n              </div>\n              \n          </div>\n          <!-- <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <ng-container *ngFor=\"let i of manual,let j = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\"><mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"checked[j]\">Hello</mat-checkbox></mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button (click)=\"check1()\">submiit</button>\n              </mat-list>\n          </div> -->\n          \n          <div id=\"com_body\">\n          <div [hidden]=\"main\">\n          <section>\n            <mat-card id=\"card1\" class=\"card card-3\">\n                <div class = \"addprog\" [hidden]=\"addprogtog\">\n                  <h2>Add Quiz Topic</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]>\n                     \n                      <ng-template matStepLabel >Quiz No:</ng-template>\n                      \n                        <mat-label>Quiz NO: {{quiznum}}</mat-label>\n                      \n                      <div>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    \n                    </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_pno\">\n                     <form [formGroup]=\"addprogFormGroup_pno\">\n                       <ng-template matStepLabel>Topic No: </ng-template>\n                       <mat-form-field>\n                         <mat-label>Topic No</mat-label>\n                         <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_t\">\n                    <form [formGroup]=\"addprogFormGroup_t\">\n                      <ng-template matStepLabel>Title </ng-template>\n                      <mat-form-field>\n                        <mat-label>Tiltle</mat-label>\n                        <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    </form>\n                   </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_d\">\n                    <form [formGroup]=\"addprogFormGroup_d\">\n                      <ng-template matStepLabel>URL 1 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL1</mat-label>\n                        <input matInput formControlName=\"progurl1\" placeholder=\"URL 1\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n                    <form [formGroup]=\"addprogFormGroup_ipf\">\n                      <ng-template matStepLabel>URL 2 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL 2</mat-label>\n                        <input matInput formControlName=\"progurl2\" placeholder=\"URL 2\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  \n                  \n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button (click)=\"addques()\" matStepperNext>Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n              </mat-vertical-stepper>\n              <pre>Refresh the page to update</pre>\n              </div>\n              <div class = \"uename\" [hidden]=\"uename\">\n                  <h2>Update Quiz Name </h2>\n                  <mat-vertical-stepper linear=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                   <mat-step [stepControl] >\n                     \n                       <ng-template matStepLabel >Quiz No:</ng-template>\n                       \n                         <mat-label>EXP NO: {{quiznum}}</mat-label>\n                       \n                       <div>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     \n                   </mat-step>\n                   <mat-step [stepControl]=\"uenameFormGroup\">\n                     <form [formGroup]=\"uenameFormGroup\">\n                       <ng-template matStepLabel>Quiz Name</ng-template>\n                       <mat-form-field>\n                         <mat-label>Name</mat-label>\n                         <input matInput formControlName=\"uexpname\" placeholder=\"Stack\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button matStepperNext (click)=\"upqname();uenameFormGroup.reset()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n                 </mat-vertical-stepper>\n                 <pre>Refresh to update quizbook</pre>\n               </div>\n               <!--<div class = \"upname\" [hidden]=\"upprog1\">\n                <h2>Update Program</h2>\n                <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n                  <mat-step [stepControl]>\n                   \n                    <ng-template matStepLabel >Program No:</ng-template>\n                    \n                      <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n                    \n                    <div>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  \n                  </mat-step>\n              \n                 <mat-step [stepControl]=\"upFormGroup_title\">\n                  <form [formGroup]=\"upFormGroup_title\">\n                    <ng-template matStepLabel>Title </ng-template>\n                    <mat-form-field>\n                      <mat-label>Tiltle</mat-label>\n                      <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_desc\">\n                  <form [formGroup]=\"upFormGroup_desc\">\n                    <ng-template matStepLabel>Description </ng-template>\n                    <mat-form-field>\n                      <mat-label>Description</mat-label>\n                      <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_ipf\">\n                  <form [formGroup]=\"upFormGroup_ipf\">\n                    <ng-template matStepLabel>Input Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Input Format</mat-label>\n                      <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_cons\">\n                  <form [formGroup]=\"upFormGroup_cons\">\n                    <ng-template matStepLabel>Constraints </ng-template>\n                    <mat-form-field>\n                      <mat-label>Constraints</mat-label>\n                      <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_opf\">\n                  <form [formGroup]=\"upFormGroup_opf\">\n                    <ng-template matStepLabel>Output Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Program No</mat-label>\n                      <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sip\">\n                  <form [formGroup]=\"upFormGroup_sip\">\n                    <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Input </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sop\">\n                  <form [formGroup]=\"upFormGroup_sop\">\n                    <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Output </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext >Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_exp\">\n                  <form [formGroup]=\"upFormGroup_exp\">\n                    <ng-template matStepLabel>Explanation </ng-template>\n                    <mat-form-field>\n                      <mat-label>Explanation</mat-label>\n                      <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_tc\">\n                  <form [formGroup]=\"upFormGroup_tc\">\n                    <ng-template matStepLabel>Test Cases</ng-template>\n                    <mat-form-field>\n                      <mat-label>Input</mat-label>\n                      <input matInput formControlName=\"uprogtcip\">\n                    </mat-form-field>\n                    <mat-form-field>\n                      <mat-label>Expected Output</mat-label>\n                      <input matInput formControlName=\"uprogtcop\">\n                    </mat-form-field>\n                    <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n                    <table>\n                      <th>Input</th>\n                      <th style=\"margin-left: 100%;\">Output</th>\n                      <tr>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let i of tcip\">\n                            <p>{{i}}</p>\n                          </mat-list>\n                        </td>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                            <section style=\"display: flex;\">\n                            <p style=\"margin-left: 50%;\">{{j}}</p>\n                            <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                          </section>\n                          </mat-list>\n                        </td>\n      \n                      </tr>\n                    </table>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                \n                 <mat-step>\n                   <ng-template matStepLabel>Done</ng-template>\n                   <p>You are now done.</p>\n                   <div>\n                     <button mat-button matStepperPrevious>Back</button>\n                     <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n                    \n                  </mat-step>\n               </mat-vertical-stepper>\n               <pre>To add an Experiment Refresh the page so manual is updated</pre>\n             </div> -->\n             <div class = \"addexp\" [hidden]=\"addquiz\">\n                <h2>Add New Quiz</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]=\"firstFormGroup\" >\n                      <form [formGroup]=\"firstFormGroup\" >\n                        <ng-template matStepLabel >Quiz No:</ng-template>\n                        <mat-form-field>\n                          <mat-label>Sr. No</mat-label>\n                          <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"quizno\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button  matStepperNext>Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step [stepControl]=\"secondFormGroup\">\n                      <form [formGroup]=\"secondFormGroup\">\n                        <ng-template matStepLabel>Name</ng-template>\n                        <mat-form-field>\n                          <mat-label>Quiz Name</mat-label>\n                          <input matInput formControlName=\"quizname\" placeholder=\"Stack\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button matStepperPrevious>Back</button>\n                          <button mat-button matStepperNext >Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Done</ng-template>\n                      <p>You are now done.</p>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n                      </div>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Complete</ng-template>\n                      <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                      \n                    </mat-step>\n                  </mat-vertical-stepper>\n                  <pre>Refresh to update quizbook</pre>\n                </div>\n              \n              \n            </mat-card>\n          \n            <mat-card id=\"card1\" class=\"card card-3\">\n              <div>\n              <section class=\"example-section-man\">\n              <h2 >Quiz Book Preview</h2>\n              <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Book<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n              </section>\n              <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n              <mat-accordion>\n      \n                <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Quiz: {{i+1}}\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      {{item.name}} \n                      <!-- <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" matTooltip=\"Edit Quiz Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Add Quiz\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Delete Quiz\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let subitem of item.topic, let j = index\">\n                      Title {{item.ind +1}}.{{subitem.tind+1}}:      {{subitem.title}}\n                      <!-- <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n                      <mat-divider></mat-divider>\n                    </mat-list-item>\n                  </mat-list>\n                </mat-expansion-panel>\n                \n              </mat-accordion> \n              \n              \n            </div>\n          </mat-card>\n          </section>\n          </div>\n          </div>      \n        \n                \n          </div>\n          <div class=\"desktop\">\n            <div id=\"topbar\"> \n              <p id=\"ctitle\" style=\"margin-left: 180px;\">QUIZ BOOK</p><br>\n             <!-- <button (click)=\"heelo()\">heelo</button> -->\n          </div>\n          \n          \n          <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All\n                  <br>\n                  Enter Score for each question, range (1-5)\n                  <ng-container *ngFor=\"let i of u1,let k = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                        <input style=\"width: 20px;margin-left: 5px;\" value={{i.score}} (change)=\"scoreInd(k,$event.target.value)\">\n                          <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button>\n                  <!-- <button mat-raised-button color=\"accent\" (click)=\"addcqD()\"  style=\"margin-left: 20px;\">Add Custom Question</button> -->\n              </mat-list>\n              <div>\n                      <section class=\"display-card\">\n                                  <mat-card id=\"card2\" class=\"card card-3\" style=\"background-color: #0080ff;color: white;\">\n                                      <pre style=\"font-weight: bold;font-size: large;\">Custom Question\n                                      </pre>\n                                      <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                          <mat-label color=\"accent\">Question</mat-label>\n                                          <input matInput name=\"email\" [(ngModel)]=\"ques\"  placeholder=\"Add Question\" ngModel>\n                                      </mat-form-field>\n                                      \n                                      <div class=\"radio-toolbar\">\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">A:</span>\n                                          \n                                              <input type=\"radio\" id=\"A\" name=\"A\" value=\"A\" [(ngModel)]=\"opselect\">\n                                              <label for=\"A\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opa\"  placeholder=\"Add Option\" ngModel>\n                                              <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                                  <mat-label color=\"accent\">Option 1</mat-label>\n                                                  <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                              </mat-form-field> -->\n                                              </label>\n                                              <!-- <p class=\"example-margin\"></p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">B:</span>\n                                          \n                                          <input type=\"radio\" id=\"B\" name=\"B\" value=\"B\" [(ngModel)]=\"opselect\">\n                                          <label for=\"B\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opb\"  placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 2</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              <!-- <p class=\"example-margin\">Prints all nodes of linked list in reverse order</p> -->\n                                          \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">C:</span>\n                                          \n                                          <input type=\"radio\" id=\"C\" name=\"C\" value=\"C\" [(ngModel)]=\"opselect\">\n                                          <label for=\"C\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opc\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                              \n                                      </section>\n                                      <section class=\"example-section\">\n                                          <span style=\"font-weight: bold;\">D:</span>\n                                          \n                                          <input type=\"radio\" id=\"D\" name=\"D\" value=\"D\" [(ngModel)]=\"opselect\">\n                                          <label for=\"D\"><input style=\"width: 300px;\" matInput name=\"email\" [(ngModel)]=\"opd\" placeholder=\"Add Option\" ngModel>\n                                          <!-- <mat-form-field appearance=\"outline\"  class=\"input\"  style=\"width: 500px;\">\n                                              <mat-label color=\"accent\">Option 3</mat-label>\n                                              <input matInput name=\"email\"  placeholder=\"Add Option\" ngModel>\n                                          </mat-form-field> -->\n                                          </label>\n                                             \n                                         \n                                      </section>\n                                  </div>\n                                      <section class=\"example-section\">\n                                          <div style=\"text-align: center;margin-left: 150px;\">\n                                              <button style=\"height: 40px;\" (click)=\"addcq()\" type=\"submit\" mat-raised-button class=\"alternate-theme\" color=\"warn\">Add</button>\n                                          </div>\n                                      </section>\n                      \n                                  </mat-card>\n                                  <mat-list >\n                                      <pre style=\"font-weight: bold;font-size: large;margin-left: 20px;\">Custom Question List\n                                      </pre>\n                                      <!-- <input type=\"checkbox\" [(ngModel)]=\"checked1\" (click)=\"checkAll()\" style=\"margin-left: 20px;\">Select All -->\n                                      <ng-container *ngFor=\"let i of customArray,let k = index\">\n                                          <mat-list-item  style=\"color: black;margin-top: 10px;\">\n                                              {{i.id + 1}} .: {{i.question}}</mat-list-item>\n                                              <!-- <mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"i.select\">{{i.id + 1}} . </mat-checkbox> : {{i.question}}</mat-list-item> -->\n                                          <mat-list>\n                                              <div >\n                                                  \n                                                  <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                                              </div>\n                                          </mat-list>\n                                          <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                                      </ng-container>\n                                      <!-- <button mat-raised-button color=\"accent\" (click)=\"check1()\"  style=\"margin-left: 20px;\">Select</button> -->\n                                      <button mat-raised-button color=\"accent\" (click)=\"saveall()\"  style=\"margin-left: 20px;\">Save All Questions</button>\n                                      <button mat-raised-button color=\"accent\" (click)=\"addprog()\"  style=\"margin-left: 20px;\">Done</button>\n                                  </mat-list>            \n                                  \n                  </section>\n              </div>\n              \n          </div>\n          <!-- <div [hidden]=\"scrapping\" style=\"color: black;\">\n              <mat-list >\n                  <ng-container *ngFor=\"let i of manual,let j = index\">\n                      <mat-list-item  style=\"color: black;margin-top: 10px;\"><mat-checkbox style=\"background-color: black;color: white;\" [(ngModel)]=\"checked[j]\">Hello</mat-checkbox></mat-list-item>\n                      <mat-list>\n                          <div >\n                              \n                              <ol style=\"color: black;\" type=\"A\"><li *ngFor=\"let j of i.option\"><mat-list-item style=\"color: black;\">{{j}}</mat-list-item></li></ol>\n                          </div>\n                      </mat-list>\n                      <mat-list-item style=\"color: green;\"><strong>{{i.answer}}</strong></mat-list-item>\n                  </ng-container>\n                  <button (click)=\"check1()\">submiit</button>\n              </mat-list>\n          </div> -->\n          \n          <div id=\"com_body\">\n          <div [hidden]=\"main\">\n          <section class=\"example-section\">\n            <mat-card id=\"card1\" class=\"card card-3\">\n                <div class = \"addprog\" [hidden]=\"addprogtog\">\n                  <h2>Add Quiz Topic</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]>\n                     \n                      <ng-template matStepLabel >Quiz No:</ng-template>\n                      \n                        <mat-label>Quiz NO: {{quiznum}}</mat-label>\n                      \n                      <div>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    \n                    </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_pno\">\n                     <form [formGroup]=\"addprogFormGroup_pno\">\n                       <ng-template matStepLabel>Topic No: </ng-template>\n                       <mat-form-field>\n                         <mat-label>Topic No</mat-label>\n                         <input type=\"number\" matInput formControlName=\"progno\" placeholder=\"Program number\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step [stepControl]=\"addprogFormGroup_t\">\n                    <form [formGroup]=\"addprogFormGroup_t\">\n                      <ng-template matStepLabel>Title </ng-template>\n                      <mat-form-field>\n                        <mat-label>Tiltle</mat-label>\n                        <input  matInput formControlName=\"progtitle\" placeholder=\"Program Title\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext>Next</button>\n                      </div>\n                    </form>\n                   </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_d\">\n                    <form [formGroup]=\"addprogFormGroup_d\">\n                      <ng-template matStepLabel>URL 1 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL1</mat-label>\n                        <input matInput formControlName=\"progurl1\" placeholder=\"URL 1\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  <mat-step [stepControl]=\"addprogFormGroup_ipf\">\n                    <form [formGroup]=\"addprogFormGroup_ipf\">\n                      <ng-template matStepLabel>URL 2 </ng-template>\n                      <mat-form-field>\n                        <mat-label>URL 2</mat-label>\n                        <input matInput formControlName=\"progurl2\" placeholder=\"URL 2\" required>\n                      </mat-form-field>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext type=\"submit\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  \n                  \n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button (click)=\"addques()\" matStepperNext>Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n              </mat-vertical-stepper>\n              <pre>To add an Experiment Refresh the page </pre>\n              </div>\n              <div class = \"uename\" [hidden]=\"uename\">\n                  <h2>Update Quiz Name </h2>\n                  <mat-vertical-stepper linear=\"true\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                   <mat-step [stepControl] >\n                     \n                       <ng-template matStepLabel >Quiz No:</ng-template>\n                       \n                         <mat-label>EXP NO: {{quiznum}}</mat-label>\n                       \n                       <div>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     \n                   </mat-step>\n                   <mat-step [stepControl]=\"uenameFormGroup\">\n                     <form [formGroup]=\"uenameFormGroup\">\n                       <ng-template matStepLabel>Quiz Name</ng-template>\n                       <mat-form-field>\n                         <mat-label>Name</mat-label>\n                         <input matInput formControlName=\"uexpname\" placeholder=\"Stack\" required>\n                       </mat-form-field>\n                       <div>\n                         <button mat-button matStepperPrevious>Back</button>\n                         <button mat-button matStepperNext>Next</button>\n                       </div>\n                     </form>\n                   </mat-step>\n                   <mat-step>\n                     <ng-template matStepLabel>Done</ng-template>\n                     <p>You are now done.</p>\n                     <div>\n                       <button mat-button matStepperPrevious>Back</button>\n                       <button mat-button matStepperNext (click)=\"upqname();uenameFormGroup.reset()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                    \n                  </mat-step>\n                 </mat-vertical-stepper>\n                 <pre>Refresh the page to update</pre>\n               </div>\n               <!--<div class = \"upname\" [hidden]=\"upprog1\">\n                <h2>Update Program</h2>\n                <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\">\n                  <mat-step [stepControl]>\n                   \n                    <ng-template matStepLabel >Program No:</ng-template>\n                    \n                      <mat-label>Program {{up_eno}}:{{up_pno}}</mat-label>\n                    \n                    <div>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  \n                  </mat-step>\n              \n                 <mat-step [stepControl]=\"upFormGroup_title\">\n                  <form [formGroup]=\"upFormGroup_title\">\n                    <ng-template matStepLabel>Title </ng-template>\n                    <mat-form-field>\n                      <mat-label>Tiltle</mat-label>\n                      <input  matInput formControlName=\"uprogtitle\" [(ngModel)]=\"up_title\" placeholder=\"Program Title\" required>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_desc\">\n                  <form [formGroup]=\"upFormGroup_desc\">\n                    <ng-template matStepLabel>Description </ng-template>\n                    <mat-form-field>\n                      <mat-label>Description</mat-label>\n                      <textarea matInput formControlName=\"uprogdesc\" [(ngModel)]=\"up_desc\" placeholder=\"Program Description\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_ipf\">\n                  <form [formGroup]=\"upFormGroup_ipf\">\n                    <ng-template matStepLabel>Input Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Input Format</mat-label>\n                      <textarea matInput formControlName=\"uprogip_format\" [(ngModel)]=\"up_ipf\" placeholder=\"Input Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_cons\">\n                  <form [formGroup]=\"upFormGroup_cons\">\n                    <ng-template matStepLabel>Constraints </ng-template>\n                    <mat-form-field>\n                      <mat-label>Constraints</mat-label>\n                      <textarea matInput formControlName=\"uprogcons\" [(ngModel)]=\"up_cons\" placeholder=\"Program Constraints\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_opf\">\n                  <form [formGroup]=\"upFormGroup_opf\">\n                    <ng-template matStepLabel>Output Format </ng-template>\n                    <mat-form-field>\n                      <mat-label>Program No</mat-label>\n                      <textarea matInput formControlName=\"uprogop_format\" [(ngModel)]=\"up_opf\" placeholder=\"Output Format\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sip\">\n                  <form [formGroup]=\"upFormGroup_sip\">\n                    <ng-template matStepLabel>Sample Testcase 1: Input </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Input </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_ip\" [(ngModel)]=\"up_tcip\" placeholder=\"Testcase Input\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext type=\"submit\">Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_sop\">\n                  <form [formGroup]=\"upFormGroup_sop\">\n                    <ng-template matStepLabel>Sample Testcase 1: Output </ng-template>\n                    <mat-form-field>\n                      <mat-label>Sample Testcase 1: Output </mat-label>\n                      <textarea matInput formControlName=\"uprogtc_op\" [(ngModel)]=\"up_tcop\" placeholder=\"Testcase Output\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext >Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_exp\">\n                  <form [formGroup]=\"upFormGroup_exp\">\n                    <ng-template matStepLabel>Explanation </ng-template>\n                    <mat-form-field>\n                      <mat-label>Explanation</mat-label>\n                      <textarea matInput formControlName=\"uprogexpl\" [(ngModel)]=\"up_expl\" placeholder=\"Testcase Explanation\" required></textarea>\n                    </mat-form-field>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                <mat-step [stepControl]=\"upFormGroup_tc\">\n                  <form [formGroup]=\"upFormGroup_tc\">\n                    <ng-template matStepLabel>Test Cases</ng-template>\n                    <mat-form-field>\n                      <mat-label>Input</mat-label>\n                      <input matInput formControlName=\"uprogtcip\">\n                    </mat-form-field>\n                    <mat-form-field>\n                      <mat-label>Expected Output</mat-label>\n                      <input matInput formControlName=\"uprogtcop\">\n                    </mat-form-field>\n                    <mat-icon matTooltip=\"Add Testcase\" class=\"addtc\" (click)=\"addtc()\" style=\"font-size: larger;margin-left: 5px ;\" matSuffix>add_circle_outline</mat-icon>\n                    <table>\n                      <th>Input</th>\n                      <th style=\"margin-left: 100%;\">Output</th>\n                      <tr>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let i of tcip\">\n                            <p>{{i}}</p>\n                          </mat-list>\n                        </td>\n                        <td>\n                          \n                          <mat-list *ngFor=\"let j of tcop, let ind = index\">\n                            <section style=\"display: flex;\">\n                            <p style=\"margin-left: 50%;\">{{j}}</p>\n                            <mat-icon class=\"addtc\" matTooltip=\"Remove Testcase\" (click)=deltc(ind) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>cancel</mat-icon>\n                          </section>\n                          </mat-list>\n                        </td>\n      \n                      </tr>\n                    </table>\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div>\n                  </form>\n                </mat-step>\n                \n                 <mat-step>\n                   <ng-template matStepLabel>Done</ng-template>\n                   <p>You are now done.</p>\n                   <div>\n                     <button mat-button matStepperPrevious>Back</button>\n                     <button mat-button matStepperNext (click)=\"upprog()\">Done</button>\n                     </div>\n                   </mat-step>\n                   <mat-step>\n                    <ng-template matStepLabel>Complete</ng-template>\n                    <p>Manual has been Modified it will be reflected in Preview Manual in 5000ms if not please refresh the page.</p>\n                    \n                  </mat-step>\n               </mat-vertical-stepper>\n               <pre>To add an Experiment Refresh the page so manual is updated</pre>\n             </div> -->\n             <div class = \"addexp\" [hidden]=\"addquiz\">\n                <h2>Add New Quiz</h2>\n                  <mat-vertical-stepper [linear]=\"false\" style=\"border-radius: 5px;background-color: #191919;color: orange;\" #stepper>\n                    <mat-step [stepControl]=\"firstFormGroup\" >\n                      <form [formGroup]=\"firstFormGroup\" >\n                        <ng-template matStepLabel >Quiz No:</ng-template>\n                        <mat-form-field>\n                          <mat-label>Sr. No</mat-label>\n                          <input matInput placeholder=\"Sr. No\" type=\"number\" formControlName=\"quizno\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button  matStepperNext>Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step [stepControl]=\"secondFormGroup\">\n                      <form [formGroup]=\"secondFormGroup\">\n                        <ng-template matStepLabel>Name</ng-template>\n                        <mat-form-field>\n                          <mat-label>Quiz Name</mat-label>\n                          <input matInput formControlName=\"quizname\" placeholder=\"Stack\" required>\n                        </mat-form-field>\n                        <div>\n                          <button mat-button matStepperPrevious>Back</button>\n                          <button mat-button matStepperNext >Next</button>\n                        </div>\n                      </form>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Done</ng-template>\n                      <p>You are now done.</p>\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button (click)=\"done()\" matStepperNext>Done</button>\n                      </div>\n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Complete</ng-template>\n                      <p>Quiz Book has been Modified it will be reflected in Preview.</p>\n                      \n                    </mat-step>\n                  </mat-vertical-stepper>\n                  <pre>Refresh to update quizbook</pre>\n                </div>\n              \n              \n            </mat-card>\n          \n            <mat-card id=\"card1\" class=\"card card-3\">\n              <div>\n              <section class=\"example-section-man\">\n              <h2 >Quiz Book Preview</h2>\n              <button style=\"margin-left: 20px; \" (click)=\"publishman()\" [disabled]=\"pubmanstatus\" mat-button color=\"accent\">Publish Book<mat-icon class=\"edit\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>publish</mat-icon></button>\n              </section>\n              <div [hidden]=\"load\" style=\"margin-left: 25%;margin-top: 20%;\"><mat-spinner color=\"accent\" id=\"load\"></mat-spinner></div>\n              <mat-accordion>\n      \n                <mat-expansion-panel *ngFor=\"let item of manual, let i = index\">\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Quiz: {{i+1}}\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      {{item.name}} \n                      <!-- <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" matTooltip=\"Edit Quiz Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Add Quiz\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n                      <mat-icon class=\"edit\" matTooltip=\"Delete Quiz\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <mat-list>\n                    <mat-list-item *ngFor=\"let subitem of item.topic, let j = index\">\n                      Title {{item.ind +1}}.{{subitem.tind+1}}:      {{subitem.title}}\n                      <!-- <mat-icon class=\"edit\" (click)=\"ind_upname(i,j)\" style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon> -->\n                      <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon>\n                      <mat-divider></mat-divider>\n                    </mat-list-item>\n                  </mat-list>\n                </mat-expansion-panel>\n                \n              </mat-accordion> \n              \n              \n            </div>\n          </mat-card>\n          </section>\n          </div>\n          </div>     \n            </div>\n      \n            \n          \n          \n              </mat-sidenav-content>\n            </mat-sidenav-container>\n          </div>\n          ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editteacher/editteacher.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editteacher/editteacher.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n  \n   \n            <div id=\"topbar\"> \n                <p id=\"ctitle\">Edit</p><br>\n                <!-- <div [hidden]=\"img1\"> -->\n\n                    <div id=\"disp\">\n                        <img  style=\"display: inline-block;opacity: 0.7;\" width=\"1150px\" height=\"650px\" src=\"/assets/t2.png\" />\n\n                    </div>\n                <!-- </div> -->\n                <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n                \n            </div>\n            \n            <div id=\"com_body\" style=\"margin-top: 10%;\">\n                <mat-card id=\"card1\" class=\"card card-3\">\n                    <img style=\"margin-top:1px ;opacity: 1;\" width=\"200px\" height=\"180px\" src=\"/assets/tacrd2.png\" />\n                    <button (click)=\"edlabs()\" style=\"height: 100px;width:200px;margin-top: -100px;\" mat-stroked-button class=\"alternate-theme\" color=\"warn\">\n                        <mat-icon>edit</mat-icon>\n                        Edit Labs</button>\n                    \n                    \n                    \n                </mat-card>\n            \n            <!-- python -->\n            \n                <mat-card id=\"card2\"  class=\"card card-3\">\n                    <img style=\"margin-top:1px ;opacity: 1;\" width=\"200px\" height=\"180px\" src=\"/assets/tcard3.png\" />\n                    <button (click)=\"edquiz()\" style=\"height: 100px;width:200px;margin-top: -100px;\" mat-stroked-button class=\"alternate-theme\" color=\"warn\">\n                        <mat-icon>edit</mat-icon>\n                        Edit Quiz</button>\n                </mat-card>\n            \n            \n            </div>\n            \n      \n    \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br><br><br><br><br><br><br>\n\n\n<mat-card \nclass=\"example-card\">\n<mat-progress-bar *ngIf=\"display\"  mode=\"indeterminate\"  color=\"warn\"></mat-progress-bar>\n<form name=\"myform\" class=\"my-form\" #myform=\"ngForm\" (ngSubmit)=\"password(myform)\">\n\n<h3 style = color:white>Enter your New Password </h3>\n    <mat-card-header>\n    </mat-card-header>\n    <mat-card-content>\n\n      <p >\n        <mat-form-field style=\"margin-left: 20%;\" appearance=\"outline\">\n            <mat-label>Enter Password</mat-label>\n            <input  matInput placeholder=\"@$$%\" name=\"password\" type=\"password\" ngModel required>\n            <mat-icon matSuffix>lock</mat-icon>\n          </mat-form-field>\n            <mat-form-field style=\"margin-left: 20%;\" appearance=\"outline\">\n                <mat-label>Reenter Password</mat-label>\n                <input  matInput placeholder=\"@$$%\" name=\"rpassword\" type=\"password\" ngModel required>\n                <mat-icon matSuffix>lock</mat-icon>\n              </mat-form-field>\n      </p>\n      \n    </mat-card-content>\n    <mat-card-actions>\n      <button style=\"margin-left: 80%;\" mat-fab color=\"primary\" class=\"buttonui\"  > \n        <mat-icon matSuffix>arrow_forward</mat-icon>\n    </button>\n    </mat-card-actions>\n</form>\n  </mat-card>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/labbook/labbook.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/labbook/labbook.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">E-Learning Portal</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                           <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                             <mat-nav-list >\n                               <br><br>\n                               <a mat-list-item [routerLink]=\"['/editteacher']\" routerLinkActive=\"router-link-active\"  >Edit Student Course List</a>\n                               <a mat-list-item [routerLink]=\"['/labbook']\" routerLinkActive=\"router-link-active\"  >Lab Book</a>\n                               <a mat-list-item [routerLink]=\"['/editquiz']\" routerLinkActive=\"router-link-active\"  >Quiz Book</a>\n                               <a mat-list-item [routerLink]=\"['/webinar1']\" routerLinkActive=\"router-link-active\"  >Create webinar</a>\n                       \n                               <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n                       \n                       \n                             </mat-nav-list>\n                           </mat-sidenav>\n  \n      <mat-sidenav-content style=\"background-color: white;\">\n \n          \n     <div id=\"topbar\"> \n            <p id=\"ctitle\">LAB BOOK</p>\n\n            <div id=\"disp\">\n                <img style=\"display: inline-block;opacity: 0.7;\" width=\"700px\" height=\"750px\" src=\"/assets/test2.png\" />\n\n            </div>\n            <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n            \n        </div>\n        <div id=\"com_body\" style=\"width:100%;height: 106%;\">\n\n                   <!-- Data structure -->\n                        \n                        <mat-card id=\"card1\" class=\"card card-3\">\n                          \n                                    <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card1_1.png\" />\n                                \n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;color: black\">Data Structures</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\"> Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"40\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\"></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button (click)=\"edlabmanual('dsprogramming')\" style=\"height: 40px;\" mat-raised-button  color=\"warn\">\n                                            <mat-icon style=\"font-size: large;\">edit</mat-icon>\n                                            Edit </button>\n                                    </div> \n                               \n                            \n                            \n                        </mat-card>\n               \n                    <!-- python -->\n                  \n                        <mat-card id=\"card2\" class=\"card card-3\">\n                            \n                                    <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card2.png\" />\n                                \n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;color: black\">Python Programming</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\" > Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"20\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\" ></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button (click)=\"edlabmanual('pythonprogramming')\" style=\"height: 40px;\" mat-raised-button  color=\"warn\">\n                                            <mat-icon style=\"font-size: large;\">edit</mat-icon>\n                                            Edit </button>\n                                    </div>\n                               \n                            \n                            \n                        </mat-card>\n             \n\n                    <!-- cpp -->\n                    \n                        <mat-card id=\"card3\" class=\"card card-3\">\n                           \n                                    <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card3.png\" />\n                                \n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;color: black\">C++ Programming</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\" class=\"alternate-theme\" color=\"primary\"> Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"60\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\"></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button (click)=\"edlabmanual('cppprogramming')\" style=\"height: 40px;\" mat-raised-button  color=\"warn\">\n                                            <mat-icon style=\"font-size: large;\">edit</mat-icon>\n                                            Edit </button>\n                                    </div>\n                                \n                            \n                            \n                        </mat-card>\n \n                    <!-- c Programming -->\n                   \n                        <mat-card id=\"card4\" class=\"card card-3\">\n                                                               \n                            <img style=\"margin-top:1px ;\" width=\"170px\" height=\"120px\" src=\"/assets/card4_1.png\" />\n                               \n                                    <div style=\"display: inline-block;margin-left: 10px;\">\n                                        <mat-card-title style=\"margin-top: 1px;color: black\">C Programming</mat-card-title>\n                                \n                                            <br>\n                                            <mat-label style=\"color: black;font-style: italic;\" class=\"alternate-theme\" color=\"primary\"> Progress</mat-label>\n                                        <br>\n                                            <mat-progress-bar mode=\"determinate\" value=\"80\" style=\"position: absolute; width: 50%;\" class=\"alternate-theme\" color=\"primary\"></mat-progress-bar>\n                                        <br>\n                                        \n                                        <button (click)=\"edlabmanual('cprogramming')\" style=\"height: 40px;\" mat-raised-button  color=\"warn\">\n                                            <mat-icon style=\"font-size: large;\">edit</mat-icon>\n                                            Edit </button>\n                                    </div>\n                               \n                            \n                            \n                        </mat-card>\n \n        </div>\n  \n  \n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/labmanual/labmanual.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/labmanual/labmanual.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n</head>\n<body> -->\n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">E-Learning Portal</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                           <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'over'\"\n                                        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                             <mat-nav-list >\n                               <br><br>\n                               <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                               <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                               <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                               <a mat-list-item [routerLink]=\"['/editor1']\" routerLinkActive=\"router-link-active\"  >Realtime Code Share </a>\n\n                               <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n\n  \n                       \n                       \n                       \n                       \n                             </mat-nav-list>\n                           </mat-sidenav>\n  \n      <mat-sidenav-content style=\"background-color: white;\">\n    <div id=\"topbar\"> \n        <p id=\"ctitle\">LAB MANUAL</p><br>\n        <!-- <div [hidden]=\"img1\"> -->\n          \n        <!-- </div> -->\n        <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n        \n    </div>\n    <div id=\"com_body\">\n      <img id=\"bgimg\" style=\"opacity: 0.6;\" width=\"500px\" src=\"/assets/test1.png\" />\n      <div [hidden]=\"load\" style=\"position: absolute;\n      left: 42%;\n      top: 40%;\">\n        <div><mat-spinner color=\"accent\" ></mat-spinner></div>\n        \n      </div>\n      <div id=\"manual\" >\n        <mat-accordion >\n\n          <mat-expansion-panel *ngFor=\"let item of manual, let i = index\" >\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Experiment: {{item.no}}\n              </mat-panel-title>\n              <mat-panel-description>\n                {{item.name}} \n                <!-- <mat-icon class=\"edit\" matTooltip=\"Edit Experiment Name\" (click)=ind_uename(i) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n                <mat-icon class=\"edit\" matTooltip=\"Add Program\" (click)=ind_addprog(i) style=\"font-size: medium;margin-left: 5px;\" matSuffix>note_add</mat-icon>\n                <mat-icon class=\"edit\" matTooltip=\"Delete Experiment\" (click)=\"openDialog(i)\" style=\"font-size: medium;margin-left: 5px;\" matSuffix>delete</mat-icon> -->\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-list>\n              <mat-list-item *ngFor=\"let subitem of item.prog, let j = index\">\n                Program {{subitem.eno}}.{{subitem.pno}}:      {{subitem.title}}\n                <button (click)=\"program(i,j)\" id=\"manbutton\" mat-raised-button color=\"warn\">Start</button>\n                <!-- <mat-icon class=\"edit\" (click)=ind_upname(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n                <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon> -->\n                <mat-divider></mat-divider>\n              </mat-list-item>\n            </mat-list>\n          </mat-expansion-panel>\n          \n        </mat-accordion> \n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n    <!-- <mat-accordion >\n        <mat-expansion-panel style=\"width: 70%;margin-left: 14%;margin-top: 3%;\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Experiment: 1\n            </mat-panel-title>\n            <mat-panel-description>\n              Stack using Array\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <mat-list>\n            <mat-list-item> Program 1.1: Implementation of Stack using Array <button (click)=\"program()\" style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n            <mat-divider></mat-divider>\n            <mat-list-item> Program 1.2: Implementation of two stacks in an array <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n            \n           </mat-list>\n      \n          \n        </mat-expansion-panel>\n        <mat-expansion-panel style=\"width: 70%;margin-left: 14%;\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Experiment: 2\n              </mat-panel-title>\n              <mat-panel-description>\n                C Expressions\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n        \n            <mat-list>\n                <mat-list-item> Program 2.1: Evaluation of postfix expression <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item><mat-divider></mat-divider>\n                <mat-list-item> Program 2.2: Conversion of an expression from Infix to Postfix (reverse polish notation) <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item><mat-divider></mat-divider>\n                <mat-list-item> Program 2.3: Conversion of an expression from Infix to Prefix (Polish notation) <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n               </mat-list>\n        </mat-expansion-panel>\n      </mat-accordion> -->\n<!--     \n</body>\n</html> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<html>\n    <head>\n        <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n    </head>\n<body >\n    <!-- <h1>yo</h1> -->\n    <!--<button mat-button (click)=\"increment()\">click me</button>\n    <p>score: {{count}}</p>\n    <div>\n        <input type=\"text\" [(ngModel)]=\"name\" >\n        <p>welcome: {{name}}</p>\n    </div>\n    <div>\n        <input type=\"text\" [(ngModel)]=\"username\" (ngModelChange)=\"greet($event)\">\n        <p>welcome: {{username}}</p>\n    </div> -->\n   \n\n    <mat-progress-bar mode=\"indeterminate\" color=\"warn\" *ngIf=\"ppdisp\"></mat-progress-bar>\n\n\n    \n   \n    \n\n\n        <div  id=\"ex\" >\n            <br>\n            <br>\n            <br>\n            <br>\n            <mat-card-content>\n                \n            <tr>\n                <td>\n                    \n                    <div class=\"row\" id=\"outside\">\n                        \n                        <mat-card class=\"example-card\">\n                            <img width=\"450px\" src=\"/assets/login1.gif\" />\n                        </mat-card>\n                    </div>\n                </td>\n                <td>\n                    <!-- <img src=\"image1.gif\"> -->\n                    <form class=\"my-form\" #myform=\"ngForm\" (ngSubmit)=\"login(myform)\">\n                    <div class=\"row\" id=\"inside\">\n                    <mat-card class=\"login\">\n                        <mat-card-title id=\"hellotop\">Login</mat-card-title>\n                        <pre id=\"cen\"><h2>Hello! Let's get started.</h2></pre>\n                    \n                        <p>\n                            <mat-form-field appearance=\"outline\" class=\"input\">\n                            <mat-label>Email</mat-label>\n                            <input matInput name=\"email\" placeholder=\"xyz@gmail.com\" ngModel>\n                            <mat-icon matSuffix>email</mat-icon>\n                            \n                            \n                            </mat-form-field>\n                            <br>\n                            <mat-form-field appearance=\"outline\" class=\"input\">\n                                \n                                <mat-label>Password</mat-label>\n                                <input type=\"password\" matInput name=\"password\" placeholder=\"$#@!\" ngModel>\n                                <mat-icon matSuffix>lock</mat-icon>\n                            </mat-form-field>\n                        </p>\n                        <button id=\"bajume\" mat-fab color=\"primary\" class=\"buttonui\" type=\"submit\"> \n                            <mat-icon matSuffix>arrow_forward</mat-icon>\n                        </button>\n                        <br>\n                        <br>\n                        <br><br><br>\n                        <pre id=\"cen\"><mat-hint>Forgot Password?<a style=\"color: white;\" (click)=\"hello()\"><u>Click here</u></a></mat-hint></pre>                \n                        <pre id=\"cen\"><mat-hint>Don't have an account?<a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" >Register</a></mat-hint></pre>\n                    \n                    </mat-card>\n                </div>\n            </form>\n            </td>\n        </tr>\n    \n    </mat-card-content>\n                <!-- <mat-card-header>\n                \n                \n                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                </mat-card-header>\n                \n                <mat-card-content>\n                <p>\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                    \n                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                    bred for hunting.\n                </p>\n                </mat-card-content>\n                <mat-card-actions>\n                    \n                <button mat-button>LIKE</button>\n                <button mat-button>SHARE</button>\n                </mat-card-actions> -->\n                <br>\n                <br>\n                <br><br><br><br>\n           \n        \n        </div>\n\n    \n</body>\n</html>\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\" *ngIf=\"display1\">\n   \n    <img mat-card-image src=\"assets/logout.png\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        Are you sure you want to Log Out?\n        This will result in exiting the application session\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button (click)=\"yes()\">Yes</button>\n    </mat-card-actions>\n  </mat-card> \n\n\n\n  <mat-card class=\"example-card\" *ngIf=\"display\">\n   \n    <img mat-card-image src=\"assets/logout.png\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        Sucessfully Logged Out\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n    </mat-card-actions>\n  </mat-card> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/program.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n<head>\n   \n    <meta charset=\"utf-8\"/>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js\"></script>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css\">\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js\"></script>\n    \n   \n</head>\n<body >\n\n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">E-Learning Portal</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                           <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                             <mat-nav-list >\n                               <br><br>\n                               <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                               <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                               <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                               <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n\n  \n                       \n                       \n                       \n                       \n                             </mat-nav-list>\n                           </mat-sidenav>\n  \n      <mat-sidenav-content style=\"background-color: white;\">\n     <div class=\"wrap\">\n        <div class=\"resizable resizable1\" id=\"ps\">\n          <div class=\"inner\">\n            <div>\n              <mat-tab-group id=\"mattab\" color=\"warn\" >\n                  <mat-tab label=\"Problem\">\n                    <div id=\"prob\" style=\"color: aliceblue;font-weight: lighter;\" >\n                      <div id=\"title\" style=\"font-size: 140%;\">\n                        <br>\n                        <span>Program {{prog.eno}}.{{prog.pno}}: {{prog.title}}</span>\n                      </div>\n                      <div id=\"desc\" >\n                        <br>\n                        <span>{{prog.desc}}\n                          </span>\n                      </div>\n                      <div id=\"input\" >\n                        <br>\n                        <pre style=\"font-size: 150%;\">Input Format</pre>\n                        <pre style=\"font-size: 120%;white-space: pre-wrap;\">{{prog.ip_format}} </pre>\n                      </div>\n                      <div id=\"constraint\">\n                        <br>\n                        <pre style=\"font-size: 150%;\">Constraints</pre>\n                        <pre style=\"font-size: 120%;white-space: pre-wrap;\">{{prog.cons}} </pre>\n                      </div>\n                      <div id=\"output\">\n                        <br>\n                        <pre style=\"font-size: 150%;\">Output Format</pre>\n                        <pre style=\"font-size: 120%;white-space: pre-wrap;\">{{prog.op_format}}  </pre>\n                      </div>\n                      <div id=\"samplet1\" >\n                        <br>\n                        <pre style=\"font-size: 150%;\">Sample TestCase 1: Input</pre>\n                        <div id=\"box\" >\n                          <br>\n                          <pre style=\"margin-left: 20px;font-size: 130%;white-space: pre-wrap;\">{{prog.tc_ip}}</pre>\n                          <br>\n                        </div>\n                      </div>\n                      <div id=\"samplet1o\" >\n                        <br>\n                        <pre style=\"font-size: 150%;\">Sample TestCase 1: Output</pre>\n                        <div id=\"box\">\n                          <br>\n                          <pre style=\"margin-left: 20px;font-size: 130%;white-space: pre-wrap;\">{{prog.tc_op}}</pre>\n                          <br>\n                        </div>\n                      </div>\n                      <div id=\"note\" >\n                        <br>\n                        <pre style=\"font-size: 150%;\">Explanation</pre>\n                        <pre style=\"font-size: 120%;white-space: pre-wrap;\">{{prog.expl}} </pre>\n                      </div>\n                    </div> </mat-tab>\n                  <mat-tab label=\"Discussions\" id=\"disc\">  \n\n                    <br><br>              \n\n                    <div class=\"container\" *ngIf=\"disp1\">\n                                    \n                      <mat-card class=\"example-card1\">\n                       \n                        <img mat-card-image src=\"assets/comm2.png\" alt=\"Photo of a Shiba Inu\">\n                        <mat-card-content>\n                          <p>\n                           We want to build an online community where you can share your ideas,thoughts and different skills in order to create a better solution.We dont encourage bullying or offensive words used in our community.Such users strict action will be taken\n                          </p>\n  \n                          <h3>You can either browse through existing topics or create a new one.</h3>\n                        </mat-card-content>\n                        <mat-card-actions>\n  \n                          <button mat-raised-button color=\"warn\" (click)=\"browse()\">Browse Discussions</button>\n                          <button mat-raised-button color=\"warn\" (click)=\"create()\">Create New Discussion</button>\n  \n                        </mat-card-actions>\n                      </mat-card>\n                      \n                      \n                    </div> \n                    <mat-progress-bar  *ngIf=\"disp4\" mode=\"indeterminate\" color=\"warn\"></mat-progress-bar>\n      \n  \n                    <button  *ngIf=\"disp2\" mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\" (click)=\"back()\">\n                      <mat-icon>keyboard_backspace</mat-icon>\n                    </button>\n                    <mat-card class=\"example-card2\" *ngIf=\"disp2\">\n                      <img mat-card-image src=\"assets/chat.jpg\" alt=\"Photo of a Shiba Inu\">\n                      <mat-card-content>\n                        <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                          <mat-step [stepControl]=\"firstFormGroup\">\n                            <form [formGroup]=\"firstFormGroup\">\n                              <ng-template matStepLabel>Enter Topic</ng-template>\n                              <mat-form-field>\n                                <mat-label>Topic</mat-label>\n                                <input matInput placeholder=\"i need help in....\" formControlName=\"firstCtrl\" required>\n                              </mat-form-field>\n                              <div>\n                                <button mat-button matStepperNext>Next</button>\n                              </div>\n                            </form>\n                          </mat-step>\n                          <mat-step [stepControl]=\"secondFormGroup\">\n                            <form [formGroup]=\"secondFormGroup\">\n                              <ng-template matStepLabel>Enter Description</ng-template>\n                              <mat-form-field>\n                                <mat-label>description</mat-label>\n                                <input matInput formControlName=\"secondCtrl\" placeholder=\"i got stuck in ......\"\n                                       required>\n                              </mat-form-field>\n                              <div>\n                                <button mat-button matStepperPrevious>Back</button>\n                                <button mat-button matStepperNext>Next</button>\n                              </div>\n                            </form>\n                          </mat-step>\n                          <mat-step>\n                            <ng-template matStepLabel>Done</ng-template>\n                            <p>You are now done.</p>\n                            <div>\n                              <button mat-button matStepperPrevious (click)=\"issue()\">Submit</button>\n                              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n                            </div>\n                          </mat-step>\n                        </mat-vertical-stepper>\n                        \n                      </mat-card-content>\n                    \n                    </mat-card>\n  \n                    <button  *ngIf=\"disp3\" mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\" (click)=\"back()\">\n                      <mat-icon>keyboard_backspace</mat-icon>\n                    </button>\n                    <div class=\"container\" *ngIf=\"disp3\">\n                                    \n                      <div class=\"item\"  *ngFor=\"let member of members\" >\n                        \n                        <mat-card class=\"example-card\" style=\"color: black;background-color:white \">\n  \n                          <br><br>\n                          <img src=\"https://img.icons8.com/color/48/000000/c-programming.png\"/>                  \n                          <br><br>\n                    \n                    \n                          <mat-card-header >\n                    \n                            <mat-card-title >Topic:{{member.title}}</mat-card-title>\n                          </mat-card-header>\n                          <mat-card-content>\n                            <b><h3 style=\"margin-left: 5%;\" >Description:{{member.subtitle}}</h3></b>\n  \n                          </mat-card-content>\n                          <mat-card-actions>\n                            <button style=\"width:80%\" id=\"submit\" mat-raised-button color=\"warn\" (click)=start(member.title,member.subtitle,member.email)>Start Converstaion</button>\n  \n                          </mat-card-actions>\n                        </mat-card>\n                      </div>\n                   \n                      \n                    </div> \n  \n  \n  \n                    <!--  -->\n                    <button  *ngIf=\"disp5\" mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\" (click)=\"back()\">\n                      <mat-icon>keyboard_backspace</mat-icon>\n                    </button>\n                    <div id=\"container\"  *ngIf=\"disp5\">\n                      \n                      <main>\n                        <header>\n                          <img src=\"https://img.icons8.com/color/48/000000/c-programming.png\"/>                  \n                          <div>\n                            <h2 style=\"color: white;\">{{title}}</h2>\n                            <h2 style=\"color: white;\">{{subtitle}}</h2>\n  \n                          </div> \n                          </header>\n                        <ul class=\"chat\" id=\"chat\">\n                          <div id='bottom'></div>\n  \n                          \n                        </ul>\n  \n                        <footer>\n                          <textarea class=\"textarea\" type=\"text\" placeholder=\"Type here!\" id=\"textarea\"></textarea>\n                        </footer>\n                      </main>\n                    </div>\n                                    \n\n\n\n\n\n\n                  </mat-tab>\n\n\n                  <mat-tab label=\"My Submissions\">  \n<br><br><br>\n                    <mat-accordion>\n                \n                      <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                           (closed)=\"panelOpenState = false\">\n                        <mat-expansion-panel-header>\n                          <mat-panel-title>\n                            {{prog.title}}\n                          </mat-panel-title>\n                          <mat-panel-description>\n                            Submited on {{submissiontime}}\n                          </mat-panel-description>\n                        </mat-expansion-panel-header>\n\n                        <p  #p></p>\n                        <button mat-raised-button color=\"warn\" (click)=\"download()\">Download Code</button>\n\n                      </mat-expansion-panel>\n                    </mat-accordion>\n                  </mat-tab>\n\n\n\n\n\n\n                \n                </mat-tab-group>\n            </div>\n            <!-- <div>\n            <mat-tab-group style=\"float: left\" color=\"warn\" >\n                <mat-tab label=\"Problem\">\n                  <div id=\"prob\" style=\"color: aliceblue;font-weight: lighter;\" >\n                    <div id=\"title\" style=\"font-size: 140%;\">\n                      <br>\n                      <span>Program {{prog.eno}}}.{{prog.pno}}: {{prog.title}}</span>\n                    </div>\n                    <div id=\"desc\" >\n                      <br>\n                      <span>• A stack is a container of objects that are inserted and removed according to the last-in-firstout ( LIFO ) principle.<br>\n                        • Objects can be inserted at any time, but only the last (the most-recently inserted) object can\n                        be removed.<br>\n                        • Inserting an item is known as “pushing” onto the stack. “Popping” off the stack is synonymous\n                        with removing an item<br>\n                        </span>\n                    </div>\n                    <div id=\"input\" >\n                      <br>\n                      <pre style=\"font-size: 150%;\">Input Format</pre>\n                      <pre style=\"font-size: 120%;white-space: pre-wrap;\">A single line to be taken as input and save it into a variable of your choice. </pre>\n                    </div>\n                    <div id=\"constraint\">\n                      <br>\n                      <pre style=\"font-size: 150%;\">Constraints</pre>\n                      <pre style=\"font-size: 120%;white-space: pre-wrap;\">1 <  |s| < 10000 </pre>\n                    </div>\n                    <div id=\"output\">\n                      <br>\n                      <pre style=\"font-size: 150%;\">Output Format</pre>\n                      <pre style=\"font-size: 120%;white-space: pre-wrap;\">Print 'Hello Techgig' and then content of the variable on another line.  </pre>\n                    </div>\n                    <div id=\"samplet1\" >\n                      <br>\n                      <pre style=\"font-size: 150%;\">Sample TestCase 1: Input</pre>\n                      <div id=\"box\" style=\"background-color: #323232; \">\n                        <br>\n                        <pre style=\"margin-left: 20px;font-size: 130%;white-space: pre-wrap;\">I am coming back to the race.</pre>\n                        <br>\n                      </div>\n                    </div>\n                    <div id=\"samplet1o\" >\n                      <br>\n                      <pre style=\"font-size: 150%;\">Sample TestCase 1: Output</pre>\n                      <div id=\"box\" style=\"background-color: #323232; \">\n                        <br>\n                        <pre style=\"margin-left: 20px;font-size: 130%;white-space: pre-wrap;\">Hello Techgig<br>I am coming back to the race.</pre>\n                        <br>\n                      </div>\n                    </div>\n                    <div id=\"note\" >\n                      <br>\n                      <pre style=\"font-size: 150%;\">Explanation</pre>\n                      <pre style=\"font-size: 120%;white-space: pre-wrap;\">For the first Line, we are printing the string literal 'Hello Techgig'. On another line, we are printing the content of the variable. To pass all the test cases, you need to print all the content of the variable to stdout. </pre>\n                    </div>\n                  </div> </mat-tab>\n                <mat-tab label=\"Discussions\">  </mat-tab>\n                <mat-tab label=\"My Submissions\">  </mat-tab>\n                <mat-tab label=\"Leaderboard\">  </mat-tab>\n              </mat-tab-group>\n          </div>   -->\n        </div>\n      </div>\n      <div class=\"resizable resizable2\" id=\"ps1\">\n        <div class=\"inner\">\n          <div class=\"pro\">\n            <p style=\"margin-top: 2px;\">\n              <mat-button-toggle-group style=\"background-color: black;color: white;\" appearance=\"legacy\" name=\"fontStyle\" value=\"dark\" aria-label=\"Font Style\">\n                <mat-button-toggle value=\"light\" (click)=\"theme('myCustomTheme')\">Light</mat-button-toggle>\n                <mat-button-toggle value=\"dark\" (click)=\"theme('vs-dark')\">Dark</mat-button-toggle>\n                <mat-button-toggle value=\"hc\" (click)=\"theme('hc-black')\">High Contrast</mat-button-toggle>\n                \n              </mat-button-toggle-group>\n              <button mat-stroked-button color=\"warn\" style=\"float:right;\" (click)=\"ipcase1()\" id=\"runcode\">Submit  Code</button>\n\n              <button mat-stroked-button color=\"primary\" style=\"float:right;\" (click)=\"ipcase()\" id=\"runcode\">Run Code</button>\n\n              \n            </p>\n            \n            <br>\n            <ngx-monaco-editor style=\"height: 500px;\" class=\"my-code-editor\" [options]=\"editorOptions\" [(ngModel)]=\"code1\" (onInit)=\"onInit($event)\"></ngx-monaco-editor>\n            \n                    <mat-expansion-panel id=\"cusin\">\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          Custom Input\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n                  \n                      <mat-form-field style=\"width: 135px;\">\n                        \n                        <textarea matInput rows=\"5\" [(ngModel)]=\"code2\"></textarea>\n                      </mat-form-field>\n                      <button mat-raised-button color=\"primary\" style=\"color: #323232;\" (click)=\"hello()\">Run Code</button>\n                \n                    </mat-expansion-panel>\n                    <mat-card id=\"output1\" >\n                      Output\n                      <mat-card-content>\n                        <p>\n                          {{outputfinal}}\n                        </p>\n                      </mat-card-content>\n                    </mat-card>\n              \n            \n         \n         \n          \n            <!-- <mat-form-field >\n              <mat-label style=\"color: red\" >Custom Input</mat-label>\n              <textarea style=\"color:black\" matInput placeholder=\"Ex. It makes me feel...\"  [(ngModel)]=\"code2\"></textarea>\n            </mat-form-field> -->\n\n            <!-- <button mat-fab color=\"accent\" class=\"buttonui1\" (click)=\"ipcase()\"  > \n              <mat-icon matSuffix>arrow_forward</mat-icon>\n            </button>\n            <h1>Your output:{{outputfinal}}</h1>\n            <p>\n              <span style=\"color: red;\" matBadgeSize=\"large\" matBadgeOverlap=\"false\">Text with a badge</span>\n            </p> -->\n            <!-- <form #myform=\"ngForm\">\n              <ul>\n                <li *ngFor=\"let tc of testcase\" style=\"color: aliceblue;\" ng-model=\"result\">\n                  <span [style.color]=\"tc.color\" >{{tc.id}} {{tc.status}}</span>\n                    \n                </li>\n              </ul>\n            </form> -->\n            <!-- <mat-list *ngFor=\"let tc of testcase\" style=\"color: aliceblue;\">\n              <mat-list-item *ngIf=\"show\" [style.color]=\"tc.color\">{{tc.id}} {{tc.status}}</mat-list-item>\n            </mat-list> -->\n            \n            <div class=\"test\">\n              <div class=\"another-test\" #div></div>\n            </div>\n            <span style=\"color: transparent;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n          </div>\n          \n        </div>\n      </div>\n\n\n    </div>\n    <ngx-bottom-nav [items]=\"items\" (click)=\"mychange()\" id=\"botnav\"></ngx-bottom-nav>\n    <!-- <mat-button-toggle-group name=\"fontStyle\" id=\"botnav\" aria-label=\"Font Style\">\n      <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n      <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n      <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n    </mat-button-toggle-group> -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n \n\n    \n\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/qtopicdialog/qtopicdialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qtopicdialog/qtopicdialog.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>qtopicdialog works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n</head>\n<body>\n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">E-Learning Portal</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                           <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                             <mat-nav-list >\n                               <br><br>\n                               <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                               <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                               <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                               <a mat-list-item [routerLink]=\"['/editor1']\" routerLinkActive=\"router-link-active\"  >Realtime Code Share </a>\n\n                               <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n                       \n                       \n                       \n                       \n                             </mat-nav-list>\n                           </mat-sidenav>\n  \n      <mat-sidenav-content style=\"background-color: white;\">\n    <div id=\"topbar\"> \n        <p id=\"ctitle\">QUIZ</p><br>\n        \n        <!-- <img style=\"display: inline-block;margin-top: 5px;\" width=\"400px\" src=\"/assets/lab1.png\" /> -->\n        <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n        \n    </div>\n    <div id=\"com_body\">\n      <div [hidden]=\"img1\">\n        <img id=\"bgimg\" style=\"opacity: 0.7;\" width=\"500px\" src=\"/assets/test3.png\" />\n      </div>\n      <div [hidden]=\"load\" style=\"position: absolute;\n      left: 42%;\n      top: 40%;\">\n        <div><mat-spinner color=\"accent\" ></mat-spinner></div>\n        \n      </div>\n      <div id=\"manual\" >\n    \n        <mat-accordion >\n            <mat-expansion-panel *ngFor=\"let item of quiz, let i = index\">\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                {{item.name}}\n                </mat-panel-title>\n                <mat-panel-description>\n                    <br>\n                    <mat-progress-bar mode=\"determinate\" value=\"10\" class=\"alternate-theme\" style=\"width: 250px;\" color=\"primary\"></mat-progress-bar>\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <mat-list>\n                <mat-list-item *ngFor=\"let subitem of item.topic, let j = index\">\n                  Topic {{item.ind+1}}.{{subitem.tind+1}}:      {{subitem.title}}\n                  <button (click)=\"topic(i,j)\" id=\"manbutton\" mat-raised-button color=\"warn\">Start</button>\n                  <!-- <mat-icon class=\"edit\" (click)=ind_upname(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>edit</mat-icon>\n                  <mat-icon class=\"edit\" (click)=delProg(i,j) style=\"font-size: medium;margin-left: 5px ;\" matSuffix>delete</mat-icon> -->\n                  <mat-divider></mat-divider>\n                </mat-list-item>\n              </mat-list>\n              <!-- <mat-list>\n                <mat-list-item> Linked List <button (click)=\"quizpage()\" style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item> Stack & Queue <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item> Heap <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>  Trees (Binary, Binary Search Tree, Balanced Binary Search Tree, B & B++) <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item>  Graph <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item>\n            </mat-list> -->\n          \n              \n            </mat-expansion-panel>\n            <!-- <mat-expansion-panel style=\"width: 70%;margin-left: 14%;\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Experiment: 2\n                  </mat-panel-title>\n                  <mat-panel-description>\n                    C Expressions\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n            \n                <mat-list>\n                    <mat-list-item> Program 2.1: Evaluation of postfix expression <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item><mat-divider></mat-divider>\n                    <mat-list-item> Program 2.2: Conversion of an expression from Infix to Postfix (reverse polish notation) <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button> </mat-list-item><mat-divider></mat-divider>\n                    <mat-list-item> Program 2.3: Conversion of an expression from Infix to Prefix (Polish notation) <button style=\"margin-left:85%; position: absolute;\" mat-raised-button color=\"warn\">Start</button></mat-list-item>\n                  </mat-list>\n            </mat-expansion-panel> -->\n          </mat-accordion>\n        </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n</body>\n</html>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quizdialog/quizdialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quizdialog/quizdialog.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>quizdialog works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quizpage/quizpage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quizpage/quizpage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n    <head>\n        <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n    </head>\n    <body>\n        <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n            <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n              <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n              <h1 class=\"example-app-name\">E-Learning Portal</h1>\n            </mat-toolbar>\n          \n            <mat-sidenav-container class=\"example-sidenav-container\"\n                                   [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                                   <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                                   background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                                   background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                                   background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                                [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                                     <mat-nav-list >\n                                       <br><br>\n                                       <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                                       <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                                       <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                                       <a mat-list-item [routerLink]=\"['/editor1']\" routerLinkActive=\"router-link-active\"  >Realtime Code Share </a>\n\n                                       <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n          \n                               \n                               \n                               \n                               \n                                     </mat-nav-list>\n                                   </mat-sidenav>\n          \n              <mat-sidenav-content style=\"background-color: white;\">\n        <div id=\"topbar\"> \n            <p id=\"ctitle\">QUIZ PAGE</p>\n        </div>\n        <div id=\"com_body\">\n            <section class=\"display-card\">\n                        <mat-card id=\"card1\" class=\"card card-3\">\n\n                            <mat-card-subtitle style=\"color: black;\">Question: {{count}}</mat-card-subtitle>\n                                <div>\n                                    <pre style=\"font-weight: bold;font-size: large;\">{{question}}\n                                    </pre>\n                                </div>\n                            \n                            \n                            \n                            <section class=\"example-section\">\n                                <button style=\"height: 40px;\" mat-stroked-button class=\"alternate-theme\" color=\"warn\" (click)=\"prev()\">Prev</button>\n                                <button style=\"float: right;\" mat-stroked-button class=\"alternate-theme\" color=\"warn\" (click)=\"next()\">Next</button>\n                            </section>\n            \n                        </mat-card>\n                        \n                        <mat-card id=\"card2\" class=\"card card-3\">\n                            <div class=\"radio-toolbar\">\n                            <section class=\"example-section\">\n                                <span style=\"font-weight: bold;\">A:</span>\n                                \n                                    <input type=\"radio\" id=\"A\" name=\"A\" value=\"A\" [(ngModel)]=\"opselect\">\n                                    <label for=\"A\" id=\"optionA\">{{opa}}</label>\n                                    <!-- <p class=\"example-margin\"></p> -->\n                                \n                            </section>\n                            <section class=\"example-section\">\n                                <span style=\"font-weight: bold;\">B:</span>\n                                \n                                    <input type=\"radio\" id=\"B\" name=\"B\" value=\"B\" [(ngModel)]=\"opselect\">\n                                    <label for=\"B\" id=\"optionB\">{{opb}}</label>\n                                    <!-- <p class=\"example-margin\">Prints all nodes of linked list in reverse order</p> -->\n                                \n                            </section>\n                            <section class=\"example-section\">\n                                <span style=\"font-weight: bold;\">C:</span>\n                                \n                                    <input type=\"radio\"id=\"C\" name=\"C\" value=\"C\" [(ngModel)]=\"opselect\">\n                                    <label for=\"C\" id=\"optionC\">{{opc}}</label> \n                                    \n                            </section>\n                            <section class=\"example-section\">\n                                <span style=\"font-weight: bold;\">D:</span>\n                                \n                                    <input type=\"radio\"id=\"D\" name=\"D\" value=\"D\"  [(ngModel)]=\"opselect\">\n                                    <label for=\"D\" id=\"optionD\">{{opd}}</label> \n                                   \n                               \n                            </section>\n                        </div>\n                            <section class=\"example-section\">\n                                <div style=\"text-align: center\">\n                                    <button style=\"height: 40px;\" mat-raised-button class=\"alternate-theme\" (click)=\"subans()\" color=\"warn\">Submit</button>\n                                </div>\n                            </section>\n                            <!-- <h4>Attempt: {{attempt}}, Selected: {{yselect}}</h4> -->\n            \n                        </mat-card>\n                        <mat-card id=\"card3\" class=\"card card-3\">\n\n                            <mat-card-title style=\"color: black;\">Result</mat-card-title>\n                                <div>\n                                    <pre style=\"font-weight: bold;font-size: large;\" id=\"result\">Attempt: {{attempt}}\n                                    </pre>\n                                    <pre style=\"font-weight: bold;font-size: large;\" id=\"result\">Selected: {{yselect}}\n                                    </pre>\n                                    <pre style=\"font-weight: bold;font-size: large;\" id=\"result\">Total Questions: {{totalques}}\n                                    </pre>\n                                    <pre style=\"font-weight: bold;font-size: large;\" id=\"result\">Completed Questions: {{compques}}\n                                    </pre>\n                                    <pre style=\"font-weight: bold;font-size: large;\" id=\"result\">Total Score: {{totalscore}}\n                                    </pre>\n                                    <!-- <pre style=\"font-weight: bold;font-size: large;\" id=\"result\">Your Score: {{yourscore}}\n                                    </pre> -->\n                                    \n                                </div>\n                            \n                                <div style=\"text-align: center\">\n                                    <button style=\"height: 40px;\" mat-raised-button class=\"alternate-theme\" (click)=\"subquiz()\" color=\"warn\">Submit Quiz</button>\n                                </div>\n                            \n                            <!-- <section class=\"example-section\">\n                                <button style=\"height: 40px;\" mat-stroked-button class=\"alternate-theme\" color=\"warn\">Prev</button>\n                                <button style=\"height: 40px;margin-left: 260px;\" mat-stroked-button class=\"alternate-theme\" color=\"warn\">Next</button>\n                            </section> -->\n            \n                        </mat-card>\n        </section>\n        \n        <!-- <mat-card id=\"card1\" class=\"card card-3\">\n            <mat-card-content>\n            <section id=\"score\">\n              <h2>Completed Questions: </h2>\n              <mat-progress-bar mode=\"determinate\" value=\"10\" class=\"alternate-theme\" id=\"progress\" ></mat-progress-bar>\n              <span style=\"color: black;margin-top: 40px;margin-left: -40px;\"></span>\n              <h2 style=\"margin-left: 30px;color: green;\">Right Score:</h2>\n              <mat-progress-bar mode=\"determinate\" value=\"10\" class=\"alternate-theme\" id=\"right\" ></mat-progress-bar>\n              <h2 style=\"margin-left: 30px;color: red;\">Wrong Score:</h2>\n              <mat-progress-bar mode=\"determinate\" value=\"10\" class=\"alternate-theme\" color=\"warn\" id=\"progress\" ></mat-progress-bar>\n              <mat-progress-spinner\n                class=\"example-margin\"\n                color=\"accent\"\n                value=\"100\" style=\"margin-left: 30px;\" id=\"totalscore\">\n            </mat-progress-spinner>\n            <span  style=\"color: black;margin-left: -85px;\">Total Score</span>\n            </section>\n            </mat-card-content>\n        </mat-card> -->\n        <!-- <mat-card id=\"card1\" class=\"card card-3\">\n            <mat-card-content>\n            <section id=\"score\">\n            <h2 style=\"margin-right: 30px;\">Total Questions: {{totalques}}</h2>\n              <h2>Completed Questions: {{compques}}</h2>\n              <h2 style=\"margin-right: 30px;\">Total Score: {{totalscore}}</h2>\n              <h2 style=\"margin-right: 30px;\">Your Score: {{yourscore}}</h2>\n              <mat-progress-bar mode=\"determinate\" value=\"10\" class=\"alternate-theme\" id=\"progress\" ></mat-progress-bar>\n              <span style=\"color: black;margin-top: 40px;margin-left: -40px;\"></span>\n              <h2 style=\"margin-left: 30px;color: green;\">Right Score:</h2>\n              <mat-progress-bar mode=\"determinate\" value=\"10\" class=\"alternate-theme\" id=\"right\" ></mat-progress-bar>\n              <h2 style=\"margin-left: 30px;color: red;\">Wrong Score:</h2>\n              <mat-progress-bar mode=\"determinate\" value=\"10\" class=\"alternate-theme\" color=\"warn\" id=\"progress\" ></mat-progress-bar>\n              <mat-progress-spinner\n                class=\"example-margin\"\n                color=\"accent\"\n                value=\"100\" style=\"margin-left: 30px;\" id=\"totalscore\">\n            </mat-progress-spinner>\n            <span  style=\"color: black;margin-left: -85px;\">Total Score</span> \n            </section>\n            </mat-card-content>\n        </mat-card> -->\n    \n    </div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n    </body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html  *ngIf=\"display\">\n    <head>\n        <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n    </head>\n<body>\n\n    <mat-progress-bar *ngIf=\"display1\" mode=\"indeterminate\" color=\"warn\" ></mat-progress-bar>\n\n    \n\n    <div id=\"ex\"> \n        <br>\n        <tr>\n     \n            <td>\n                \n                <div class=\"row\" id=\"outside\">\n                    <br><br><br>\n                    <mat-card class=\"example-card\">\n                        <img style=\" -moz-box-shadow:    3px 3px 5px 6px #ccc;\n                        -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n                        box-shadow:         3px 3px 5px 6px #ccc;\" width=\"550px\" src=\"/assets/login1.gif\" />\n                    </mat-card>\n                </div>\n            </td> \n            <td>\n                <!-- <img src=\"image1.gif\"> -->\n                <form name=\"myform\" class=\"my-form\" #myform=\"ngForm\" (ngSubmit)=\"register(myform)\">\n    \n                <div class=\"row\" id=\"inside\">\n                <mat-card class=\"login\" >\n                    <mat-card-title id=\"neeche\">Register</mat-card-title>\n                    <pre id=\"cen\"><h2>Hello! Let's get started.</h2></pre>\n                \n                    <p>\n                        <mat-form-field appearance=\"outline\" class=\"input\">\n                            <mat-label>First Name</mat-label>\n                            <input matInput placeholder=\"John\" name=\"name\"  ngModel  required>\n    \n                            <mat-icon matSuffix>perm_identity</mat-icon>\n                            \n                            </mat-form-field><br>\n                            <mat-form-field appearance=\"outline\" class=\"input\">\n                                <mat-label>Last Name</mat-label>\n                                <input matInput placeholder=\"Doe\" name=\"lname\" ngModel required>\n                                <mat-icon matSuffix>perm_identity</mat-icon>\n                                \n                                \n                                </mat-form-field><br>\n                        <mat-form-field appearance=\"outline\" class=\"input\">\n                        <mat-label>Email</mat-label>\n                         <input matInput name=\"email\" placeholder=\"xyz@gmail.com\" ngModel required>\n                        <mat-icon matSuffix>email</mat-icon>\n                        \n                        \n                        </mat-form-field>  \n                        <br>\n                        <mat-form-field appearance=\"outline\" class=\"input\">\n                            \n                            <mat-label>Password</mat-label>\n                            <input type=\"password\" name=\"password\" matInput placeholder=\"$#@!\" ngModel required>\n                            <mat-icon matSuffix>lock</mat-icon>\n                            \n                        </mat-form-field>\n                    </p>\n    \n                    <pre id=\"cen\"><mat-hint>Already have an account?<a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" (click)=\"display=!display\">Login</a></mat-hint></pre> \n\n                    <button id=\"bajume\" mat-fab color=\"primary\" class=\"buttonui\"  > \n                        <mat-icon matSuffix>arrow_forward</mat-icon>\n                    </button>\n\n                    <br>\n                    <br>\n                    \n                \n                </mat-card>\n            </div>\n        </form>\n        \n        </td>\n    </tr>\n       \n            <br>\n            <br>\n            <br><br><br><br>\n       \n    \n    </div>\n\n\n    \n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/score/score.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/score/score.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div [hidden]=\"confirm\">\n        <h2 mat-dialog-title>You are about to Submit Quiz</h2>\n        <p>If you Submit Quiz then all Quiz Questions attempted and their Final Selected answers will be Submitted</p>\n        <!-- <mat-dialog-content [formGroup]=\"form\">\n        \n            <mat-form-field style=\"width: 400px;\">\n                <mat-label >Please type <strong>{{ename}}</strong> to confirm. </mat-label>\n                <input matInput\n                        placeholder={{ename}}\n                    formControlName=\"name\">\n            </mat-form-field>\n    \n        </mat-dialog-content> -->\n    \n        <mat-dialog-actions>\n            <button class=\"mat-raised-button\" style=\"color: white;\" (click)=\"close()\">Close</button>\n            <button class=\"mat-raised-button mat-warn\" style=\"margin-left: 50px;\" (click)=\"submit()\">Submit</button>\n        \n        </mat-dialog-actions>\n    </div>\n    <div [hidden]=\"congrats\">\n        <h2 mat-dialog-title>Congrats!! Submitted Successfully. </h2>\n        <h1>You Scored {{yourscore}} out of {{totalscore}}</h1>\n        <!-- <mat-dialog-content [formGroup]=\"form\">\n        \n            <mat-form-field style=\"width: 400px;\">\n                <mat-label >Please type <strong>{{ename}}</strong> to confirm. </mat-label>\n                <input matInput\n                        placeholder={{ename}}\n                    formControlName=\"name\">\n            </mat-form-field>\n    \n        </mat-dialog-content> -->\n    \n        <mat-dialog-actions>\n            <button class=\"mat-raised-button\" style=\"color: white;\" (click)=\"exit()\">Exit</button>\n            <!-- <button class=\"mat-raised-button mat-warn\" style=\"margin-left: 50px;\" (click)=\"submit()\">Submit</button> -->\n        \n        </mat-dialog-actions>\n    </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/submission/submission.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/submission/submission.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n</head>\n<body>\n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"example-app-name\">E-Learning Portal</h1>\n    </mat-toolbar>\n  \n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                           <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                           background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'over'\"\n                                        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                             <mat-nav-list >\n                               <br><br>\n                               <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                               <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                               <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                               <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n                       \n                       \n                       \n                       \n                             </mat-nav-list>\n                           </mat-sidenav>\n  \n      <mat-sidenav-content style=\"background-color: white;\">\n    <div id=\"topbar\"> \n        <p id=\"ctitle\">SUBMISSIONS\n        \n            \n          </p>\n          <br>\n        <!-- <img style=\"display: inline-block;margin-top: 5px;\" width=\"400px\" src=\"/assets/lab1.png\" /> -->\n        <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n        \n    </div>\n    <div style=\"float: right;margin-right: 10%;\">\n        <p >\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n            <mat-button-toggle value=\"quiz\" (click)=\"tableVal('quiz')\">Quiz</mat-button-toggle>\n            <mat-button-toggle value=\"program\" (click)=\"tableVal('program')\">Program</mat-button-toggle>\n            <!-- <mat-button-toggle value=\"underline\">Underline</mat-button-toggle> -->\n          </mat-button-toggle-group>\n        </p>\n    </div>\n    <div id=\"quiz\">\n    <form style=\"margin-left: 10%;margin-top:1%\">\n        <input id=\"filterForm\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </form>\n<div style=\"text-align:center;margin-top: 2%;\">\n    <div class=\"mat-elevation-z8\" id=\"tablemid\">\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n    \n        <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n        <!-- Position Column -->\n        <ng-container matColumnDef=\"time\">\n            <th mat-header-cell *matHeaderCellDef> Time </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n        </ng-container>\n        \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> Title </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n        </ng-container>\n        \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"tscore\">\n            <th mat-header-cell *matHeaderCellDef> Total Score </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.tscore}} </td>\n        </ng-container>\n        \n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"yscore\">\n            <th mat-header-cell *matHeaderCellDef> Your Score </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.yscore}} </td>\n        </ng-container>\n        \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    \n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n    </div>\n</div>\n    <div id=\"prog\">\n        <form style=\"margin-left: 10%;;margin-top:1%\">\n            <input id=\"filterForm\" (keyup)=\"applyFilter1($event.target.value)\" placeholder=\"Filter\">\n        </form>\n    <div style=\"text-align:center;margin-top: 2%;\">\n        <div class=\"mat-elevation-z8\" style=\"margin-left: 10%;margin-right: 10%;\">\n            <table mat-table [dataSource]=\"dataSource1\" matSort>\n        \n            <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n        \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"date\">\n                <th mat-header-cell *matHeaderCellDef> Date </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n            </ng-container>\n            \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"title\">\n                <th mat-header-cell *matHeaderCellDef> Title </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n            </ng-container>\n            \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"result\">\n                <th mat-header-cell *matHeaderCellDef> Result </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.result}} </td>\n            </ng-container>\n            \n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"language\">\n                <th mat-header-cell *matHeaderCellDef> Language </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.language}} </td>\n            </ng-container>\n            \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\n            </table>\n        \n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n        </div>\n    </div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n</body>\n</html>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    <mat-progress-bar mode=\"query\" color=\"accent\"></mat-progress-bar>\n\n    <h3 style=\"text-align: center\">{{wait}}</h3>\n    <h3 style=\"text-align: center\">{{timer}}</h3>\n\n\n</body>\n</html> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n   \n    <img mat-card-image src=\"assets/video.png\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p style=\"color:black\">\n        Check Out Our Learning Meet.A video call with peer to peer screen sharing plus a timeline feature specially designed for teachers and students\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"warn\" (click)=\"yes()\">Explore</button>\n    </mat-card-actions>\n  </mat-card> \n\n\n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/webinars/webinars.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/webinars/webinars.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"warn\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">E-Learning Portal</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                         <mat-sidenav style=\"background: -webkit-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: -o-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: -moz-linear-gradient(70deg, white 40%, #059BE5 40%);\n                         background: linear-gradient(40deg, white 40%, #059BE5 40%);  \" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                      [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                           <mat-nav-list >\n                             <br><br>\n                             <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\"  >Lab</a>\n                             <a mat-list-item [routerLink]=\"['/quiz']\" routerLinkActive=\"router-link-active\"  >Quiz</a>\n                             <a mat-list-item [routerLink]=\"['/webinar']\" routerLinkActive=\"router-link-active\"  >Webinar</a>\n                             <a mat-list-item [routerLink]=\"['/editor1']\" routerLinkActive=\"router-link-active\"  >Realtime Code Share </a>\n\n                             <a mat-list-item (click)=\"openDialog999()\" routerLinkActive=\"router-link-active\"  >Logout</a>\n                     \n                     \n                     \n                     \n                           </mat-nav-list>\n                         </mat-sidenav>\n\n    <mat-sidenav-content style=\"background-color: white;\">\n<link href=\"https://fonts.googleapis.com/css2?family=Anton&family=Nunito:wght@900&display=swap\" rel=\"stylesheet\"><div class=\"centered\">\n    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css'><link rel=\"stylesheet\">\n<style>\n\n.cards1 {\n   display: flex;\n   justify-content: space-between;\n}\n</style>\n<div id=\"topbar\"> \n  <p id=\"ctitle\">Webinar</p>\n  \n  <!-- <img style=\"display: inline-block;margin-top: 5px;\" width=\"400px\" src=\"/assets/lab1.png\" /> -->\n  <!-- <h1 id=\"ctitle\" style=\"margin-top: 10px;margin-left: 25%;\">LAB WORK</h1> -->\n  \n</div>\n  <section class=\"cards\">\n       \n      <article class=\"card\" id=\"typed\">\n        <h1  class=\"main__heading\" >Find your next  \n          <ngx-typed-js [strings]=\"['AI', 'Machine Leaning','Block Chain and  Many More']\" [shuffle]=\"\" [typeSpeed]=\"140\">\n          <span  class=\"typing\"></span>\n         </ngx-typed-js> Webinars from leading industry experts\n         \n        </h1>\n       \n        \n        \n\n      \n\n\n      </article><!-- /card-one -->\n\n<article class=\"card\" id=\"bgimg\">\n\n  <img class=\"img1\" style=\"margin-top:10%\" height=\"400\" src=\"assets/devfolio.png\" />\n</article><!-- /card-two -->\n\n\n\n\n\n\n\n\n\n</section>\n\n</div>\n\n\n\n<div class=\"marquee\" id=\"bgimg\">\n    \n    <ul class=\"marquee-content\">\n        \n      <li style=\" font-size: 4rem;margin-left: 5%;\"><i class=\"fab fa-github\"></i></li>\n      <li style=\" font-size: 4rem; margin-left: 3%;\"><i class=\"fab fa-codepen\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\" ><i class=\"fab fa-free-code-camp\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-dev\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-react\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-vuejs\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-angular\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-node\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-wordpress\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-aws\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-docker\"></i></li>\n      <li style=\" font-size: 4rem;margin-left: 3%;\"><i class=\"fab fa-android\"></i></li>\n    </ul>\n</div> \n\n\n<div class=\"wrapper\">\n    <div class=\"label\">search webinars</div>\n    <div class=\"searchBar\">\n      <input id=\"searchQueryInput\" class=\"hello23\" type=\"text\" name=\"searchQueryInput\" placeholder=\"Search\" value=\"\" [(ngModel)]=\"yo\" />\n      <button id=\"searchQuerySubmit\" type=\"submit\" name=\"searchQuerySubmit\" (click)=\"search()\">\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\"><path fill=\"#666666\" d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" />\n        </svg>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"container\" >\n                                  \n    <div class=\"item\"  *ngFor=\"let member of members[0]\">\n                                    \n      \n      <mat-card class=\"example-card\">\n \n  <img mat-card-image height=200 src=\"{{member.purl}}\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content >\n    <div class=\"centered\">\n \n      <section class=\"cards1\">\n           \n          <article class=\"card\">\n            <h2  >{{member.topic}}</h2>\n          </article><!-- /card-one -->\n\n<article class=\"card\">\n  <button mat-icon-button  aria-label=\"Example icon button with a open in new tab icon\" (click)=\"click1(member.moredetails)\">\n    <mat-icon>open_in_new</mat-icon>\n  </button>\n      </article><!-- /card-two -->\n\n\n\n</section>\n</div>\n    <p style=\"margin-top:2%\">{{member.description}}</p>\n    <h3 style=\"color:rgb(166, 169, 171);margin-top:2%\">Start Date:{{member.startdate}}</h3>\n    <h3 style=\"color:rgb(166, 169, 171);margin-top:2%\">End Date:{{member.enddate}}</h3>\n    <h3 style=\"margin-top:2%\">Platform : {{member.platform}}</h3>\n\n\n  </mat-card-content>\n  <mat-card-actions>\n    \n    <button style=\"width:80%;margin-left: 10%;\"mat-raised-button color=\"warn\"  (click)=\"click(member.urlconnect)\">Join Now</button>\n\n  </mat-card-actions>\n</mat-card>\n\n\n  </div>\n\n\n\n    \n  </div> \n</mat-sidenav-content>\n</mat-sidenav-container>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#navbar{\r\n  background-color: #252A41;\r\n  width: 100%;\r\n  height: 7%;\r\n}\r\n\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzBGQUN3RjtFQUN4RixtQkFBTztVQUFQLE9BQU87QUFDVDs7QUFFQTtFQUNFOytEQUM2RDtFQUM3RCxtQkFBYztVQUFkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MkE0MTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDclO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enrollment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enrollment.service */ "./src/app/enrollment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





let AppComponent = class AppComponent {
    constructor(_enrolllmentService, router) {
        this._enrolllmentService = _enrolllmentService;
        this.router = router;
        this.display = true;
        this.display1 = false;
        this.count = 0;
        this.pdisp = true;
    }
    dashboard() {
        console.log("dashboard");
        this.router.navigate(['/dashboard']);
    }
    edit() {
        console.log("edit");
        this.router.navigate(['/editteacher']);
    }
    ngOnInit() {
        this.location = window.location.href;
        console.log(this.location);
        //logic
        if (this.location.includes("verified") || this.location.includes("register") || this.location.includes("fpassword") || this.location.includes("editor") || this.location.includes("login") || this.location.includes("webinar")) {
            this.display = false;
            console.log("hello");
        }
        else {
            this.display = true;
            console.log("bello");
        }
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                var docRef = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection("users").doc(user.email);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data().status);
                        if (doc.data().status == "student") {
                            console.log("student");
                            this.router.navigate(['/dashboard']);
                        }
                        else {
                            console.log("teacher");
                            this.router.navigate(['/editteacher']);
                        }
                    }
                    else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch(function (error) {
                    console.log("Error getting document:", error);
                });
            }
            else {
                // No user is signed in.
                console.log("no");
                this.router.navigate(['/login']);
            }
        });
    }
    signout() {
        this._enrolllmentService.signout().subscribe();
        this.display = false;
        this.display1 = false;
        this.router.navigate(['/login']);
    }
    quiz() {
        this.router.navigate(['/quiz']);
    }
    web() {
        this.router.navigate(['/webinar']);
    }
    quiz1() {
        this.router.navigate(['/webinar1']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _enrollment_service__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _labmanual_labmanual_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./labmanual/labmanual.component */ "./src/app/labmanual/labmanual.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./program/program.component */ "./src/app/program/program.component.ts");
/* harmony import */ var jqwidgets_ng_jqxsplitter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! jqwidgets-ng/jqxsplitter */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxsplitter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _verified_verified_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./verified/verified.component */ "./src/app/verified/verified.component.ts");
/* harmony import */ var _quizpage_quizpage_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./quizpage/quizpage.component */ "./src/app/quizpage/quizpage.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _editlabmanual_editlabmanual_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./editlabmanual/editlabmanual.component */ "./src/app/editlabmanual/editlabmanual.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dialog-body/dialog-body.component */ "./src/app/dialog-body/dialog-body.component.ts");
/* harmony import */ var _del_program_del_program_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./del-program/del-program.component */ "./src/app/del-program/del-program.component.ts");
/* harmony import */ var _editquiz_editquiz_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./editquiz/editquiz.component */ "./src/app/editquiz/editquiz.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _quizdialog_quizdialog_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./quizdialog/quizdialog.component */ "./src/app/quizdialog/quizdialog.component.ts");
/* harmony import */ var _qtopicdialog_qtopicdialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./qtopicdialog/qtopicdialog.component */ "./src/app/qtopicdialog/qtopicdialog.component.ts");
/* harmony import */ var _editteacher_editteacher_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./editteacher/editteacher.component */ "./src/app/editteacher/editteacher.component.ts");
/* harmony import */ var _labbook_labbook_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./labbook/labbook.component */ "./src/app/labbook/labbook.component.ts");
/* harmony import */ var _webinars_webinars_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./webinars/webinars.component */ "./src/app/webinars/webinars.component.ts");
/* harmony import */ var ngx_bottom_nav__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-bottom-nav */ "./node_modules/ngx-bottom-nav/fesm2015/ngx-bottom-nav.js");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-typed-js */ "./node_modules/ngx-typed-js/fesm2015/ngx-typed-js.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm2015/angular-split.js");
/* harmony import */ var _createwebinar_createwebinar_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./createwebinar/createwebinar.component */ "./src/app/createwebinar/createwebinar.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./score/score.component */ "./src/app/score/score.component.ts");
/* harmony import */ var _submission_submission_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./submission/submission.component */ "./src/app/submission/submission.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _editor1_editor1_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./editor1/editor1.component */ "./src/app/editor1/editor1.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");



































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _labmanual_labmanual_component__WEBPACK_IMPORTED_MODULE_23__["LabmanualComponent"],
            _program_program_component__WEBPACK_IMPORTED_MODULE_26__["ProgramComponent"],
            _editor_editor_component__WEBPACK_IMPORTED_MODULE_31__["EditorComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_33__["ForgotpasswordComponent"],
            _verified_verified_component__WEBPACK_IMPORTED_MODULE_34__["VerifiedComponent"],
            _quizpage_quizpage_component__WEBPACK_IMPORTED_MODULE_35__["QuizpageComponent"],
            _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_36__["QuizComponent"],
            _editlabmanual_editlabmanual_component__WEBPACK_IMPORTED_MODULE_38__["EditlabmanualComponent"],
            _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_42__["DialogBodyComponent"],
            _del_program_del_program_component__WEBPACK_IMPORTED_MODULE_43__["DelProgramComponent"],
            _editquiz_editquiz_component__WEBPACK_IMPORTED_MODULE_44__["EditquizComponent"],
            _quizdialog_quizdialog_component__WEBPACK_IMPORTED_MODULE_46__["QuizdialogComponent"],
            _qtopicdialog_qtopicdialog_component__WEBPACK_IMPORTED_MODULE_47__["QtopicdialogComponent"],
            _editteacher_editteacher_component__WEBPACK_IMPORTED_MODULE_48__["EditteacherComponent"],
            _labbook_labbook_component__WEBPACK_IMPORTED_MODULE_49__["LabbookComponent"],
            _webinars_webinars_component__WEBPACK_IMPORTED_MODULE_50__["WebinarsComponent"],
            _createwebinar_createwebinar_component__WEBPACK_IMPORTED_MODULE_54__["CreatewebinarComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_56__["LogoutComponent"],
            _video_video_component__WEBPACK_IMPORTED_MODULE_57__["VideoComponent"],
            _score_score_component__WEBPACK_IMPORTED_MODULE_58__["ScoreComponent"],
            _submission_submission_component__WEBPACK_IMPORTED_MODULE_59__["SubmissionComponent"],
            _editor1_editor1_component__WEBPACK_IMPORTED_MODULE_63__["Editor1Component"]
        ],
        imports: [
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__["MatStepperModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__["MatDialogModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_28__["CommonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"],
            jqwidgets_ng_jqxsplitter__WEBPACK_IMPORTED_MODULE_27__["jqxSplitterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_52__["NgxTypedJsModule"],
            angular_split__WEBPACK_IMPORTED_MODULE_53__["AngularSplitModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_55__["MatToolbarModule"],
            ngx_bottom_nav__WEBPACK_IMPORTED_MODULE_51__["BottomNavModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_60__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_61__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_62__["MatSortModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_65__["MatSelectModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_64__["ClipboardModule"],
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_30__["MonacoEditorModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] },
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
                { path: 'labmanual', component: _labmanual_labmanual_component__WEBPACK_IMPORTED_MODULE_23__["LabmanualComponent"] },
                { path: 'program', component: _program_program_component__WEBPACK_IMPORTED_MODULE_26__["ProgramComponent"] },
                { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_31__["EditorComponent"] },
                { path: 'verified', component: _verified_verified_component__WEBPACK_IMPORTED_MODULE_34__["VerifiedComponent"] },
                { path: 'fpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_33__["ForgotpasswordComponent"] },
                { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_36__["QuizComponent"] },
                { path: 'quizpage', component: _quizpage_quizpage_component__WEBPACK_IMPORTED_MODULE_35__["QuizpageComponent"] },
                { path: 'editlabmanual', component: _editlabmanual_editlabmanual_component__WEBPACK_IMPORTED_MODULE_38__["EditlabmanualComponent"] },
                { path: 'editquiz', component: _editquiz_editquiz_component__WEBPACK_IMPORTED_MODULE_44__["EditquizComponent"] },
                { path: 'editteacher', component: _editteacher_editteacher_component__WEBPACK_IMPORTED_MODULE_48__["EditteacherComponent"] },
                { path: 'labbook', component: _labbook_labbook_component__WEBPACK_IMPORTED_MODULE_49__["LabbookComponent"] },
                { path: 'webinar', component: _webinars_webinars_component__WEBPACK_IMPORTED_MODULE_50__["WebinarsComponent"] },
                { path: 'webinar1', component: _createwebinar_createwebinar_component__WEBPACK_IMPORTED_MODULE_54__["CreatewebinarComponent"] },
                { path: 'program/:id', component: _program_program_component__WEBPACK_IMPORTED_MODULE_26__["ProgramComponent"] },
                { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_56__["LogoutComponent"] },
                { path: 'video call', component: _video_video_component__WEBPACK_IMPORTED_MODULE_57__["VideoComponent"] },
                { path: 'submission', component: _submission_submission_component__WEBPACK_IMPORTED_MODULE_59__["SubmissionComponent"] },
                { path: 'editor1', component: _editor1_editor1_component__WEBPACK_IMPORTED_MODULE_63__["Editor1Component"] },
                { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_31__["EditorComponent"] },
            ]),
        ],
        exports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_28__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_28__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_42__["DialogBodyComponent"], _del_program_del_program_component__WEBPACK_IMPORTED_MODULE_43__["DelProgramComponent"], _score_score_component__WEBPACK_IMPORTED_MODULE_58__["ScoreComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/createwebinar/createwebinar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createwebinar/createwebinar.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n.one{\r\n    background-color: #013A6B;\r\n    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%);\r\n    min-height: 500px;\r\n  }\r\n\r\n.mat-stepper-vertical {\r\n    margin-top: 8px;\r\n  }\r\n\r\n.mat-form-field {\r\n    margin-top: 16px;\r\n  }\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px; \r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.example-card1 {\r\n    max-width: 400px;\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n.item {\r\n  width: 100%;\r\n  margin-top:4%\r\n}\r\n\r\n.container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.container>div {\r\n \r\n  box-sizing:border-box;\r\n  box-sizing:border-box;\r\n  word-wrap: break-word;\r\n\r\n}\r\n\r\n#split{\r\n  display:none\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRld2ViaW5hci9jcmVhdGV3ZWJpbmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4RUFBOEU7RUFDOUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7MEZBQ3dGO0VBQ3hGLG1CQUFPO1VBQVAsT0FBTztBQUNUOztBQUVBO0VBQ0U7K0RBQzZEO0VBQzdELG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFRTtJQUNFLHlCQUF5QjtJQUN6QiwwRUFBMEU7SUFDMUUsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFHQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCOztBQUdBO0VBQ0EsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCOztBQUV2Qjs7QUFHQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGV3ZWJpbmFyL2NyZWF0ZXdlYmluYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbiAgLm9uZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTNBNkI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMGRlZywgIzAxM0E2QiA1MCUsICMwMDRFOTUgNTAlKTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNhcmQxIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG5cclxuICAuaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDo0JVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbnRhaW5lcj5kaXYge1xyXG4gXHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG59XHJcblxyXG5cclxuI3NwbGl0e1xyXG4gIGRpc3BsYXk6bm9uZVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/createwebinar/createwebinar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createwebinar/createwebinar.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatewebinarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatewebinarComponent", function() { return CreatewebinarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/app/createwebinar/service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../video/video.component */ "./src/app/video/video.component.ts");










let CreatewebinarComponent = class CreatewebinarComponent {
    constructor(dialog, changeDetectorRef, media, _formBuilder, _enrolllmentService) {
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this._enrolllmentService = _enrolllmentService;
        this.isLinear = false;
        this.items = [
            { icon: 'home', label: 'Upload Webinar', routerLink: '' },
            { icon: 'search', label: 'Your Webinars', routerLink: '/#hello' },
        ];
        this.download123 = this;
        this.members = [];
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        const dialogRef = this.dialog.open(_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
        this._enrolllmentService.enroll3().subscribe(data => {
            console.log("success dash", data);
            this.data1 = data.email1;
            console.log("sdsdd", this.data1);
            // this.router.navigate(['/dashboard']);
        }, 
        // else if(data.user == true && this.count>=1){
        //   console.log("s",this.count);
        //   this.display = true;
        // }
        error => console.error("error", error));
        this._enrolllmentService.enroll2().subscribe(data => {
            console.log("success", data);
            console.log("success", data);
            //         var text = data['message'];
            // var obj = JSON.parse(text);
            console.log(data['message'][0]);
            var j = 0;
            this.members = [];
            for (var i in data['message']) {
                var newarr = [];
                console.log("fdfdf", data['message'].length);
                var id = data['message'][i];
                newarr.push(id);
                console.log("length", newarr.length);
                for (var k = 0; k < newarr.length; k++) {
                    this.members.push(newarr[k]);
                    console.log("cxxcxc", this.members);
                }
            }
        }, error => console.error("error", error));
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.forthFormGroup = this._formBuilder.group({
            forthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.fifthFormGroup = this._formBuilder.group({
            fifthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.sixthFormGroup = this._formBuilder.group({
            sixthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.seventhFormGroup = this._formBuilder.group({
            seventhCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.eighthFormGroup = this._formBuilder.group({
            eighthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        console.log(this.firstFormGroup['value']['firstCtrl'], this.secondFormGroup['value']['secondCtrl'], this.thirdFormGroup['value']['thirdCtrl'], this.forthFormGroup['value']['forthCtrl'], this.fifthFormGroup['value']['fifthCtrl'], this.sixthFormGroup['value']['sixthCtrl'], this.seventhFormGroup['value']['seventhCtrl']);
    }
    click(url) {
        window.open(url);
    }
    submit() {
        console.log(this.firstFormGroup['value']['firstCtrl'], this.secondFormGroup['value']['secondCtrl'], this.thirdFormGroup['value']['thirdCtrl'], this.forthFormGroup['value']['forthCtrl'], this.fifthFormGroup['value']['fifthCtrl'], this.sixthFormGroup['value']['sixthCtrl'], this.seventhFormGroup['value']['seventhCtrl']);
        console.log("xxxxaaaaaaa123456", this.download123);
        var obj = JSON.parse('{ "topic":"' + this.firstFormGroup['value']['firstCtrl'] + '","description":"' + this.secondFormGroup['value']['secondCtrl'] + '","startdate":"' + this.thirdFormGroup['value']['thirdCtrl'] + '","enddate":"' + this.forthFormGroup['value']['forthCtrl'] + '","platform":"' + this.fifthFormGroup['value']['fifthCtrl'] + '","urlconnect":"' + this.sixthFormGroup['value']['sixthCtrl'] + '","moredetails":"' + this.seventhFormGroup['value']['seventhCtrl'] + '","prurl":"' + this.download123 + '"}');
        console.log("bom", obj);
        this._enrolllmentService.enroll(obj).subscribe(data => {
            console.log("success", data);
            this._enrolllmentService.enroll2().subscribe(data => {
                console.log("success", data);
                console.log("success", data);
                //         var text = data['message'];
                // var obj = JSON.parse(text);
                console.log(data['message'][0]);
                var j = 0;
                this.members = [];
                for (var i in data['message']) {
                    var newarr = [];
                    console.log("fdfdf", data['message'].length);
                    var id = data['message'][i];
                    console.log("dddd", obj);
                    newarr.push(id);
                    console.log("length", newarr.length);
                    for (var k = 0; k < newarr.length; k++) {
                        this.members.push(newarr[k]);
                        console.log("cxxcxc", this.members);
                        alert("Refresh Page to see your webinar");
                    }
                }
            }, error => console.error("error", error));
        }, error => console.error("error", error));
    }
    uploadFile() {
        var one, two, three, four, five, six, seven;
        this.firstFormGroup['value']['firstCtrl'] = one;
        this.secondFormGroup['value']['secondCtrl'] = two;
        this.thirdFormGroup['value']['thirdCtrl'] = three;
        this.forthFormGroup['value']['forthCtrl'] = four;
        this.fifthFormGroup['value']['fifthCtrl'] = five;
        this.sixthFormGroup['value']['sixthCtrl'] = six;
        this.seventhFormGroup['value']['seventhCtrl'] = seven;
        var count = 0;
        var hello;
        console.log("hello");
        // Created a Storage Reference with root dir
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
        // Get the file from DOM
        var file = document.getElementById('files').files[0];
        console.log(file);
        //dynamically set reference to the file name
        var thisRef = storageRef.child(this.data1 + file.name);
        //put request upload file to firebase storage
        thisRef.put(file).then((snapshot) => {
            alert("File Uploaded");
            console.log('Uploaded a blob or file!');
            snapshot.ref.getDownloadURL().then((response) => {
                console.log("xxxxx", response);
                this.download123 = response;
                console.log("xxxxaaaaaaa", this.download123);
            });
        });
        console.log("count", count);
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    openDialog100() {
        const dialogRef = this.dialog.open(_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    viewResult(hello) {
        console.log(hello);
    }
};
CreatewebinarComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service__WEBPACK_IMPORTED_MODULE_4__["cwebinarService"] }
];
CreatewebinarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createwebinar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createwebinar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createwebinar/createwebinar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createwebinar.component.css */ "./src/app/createwebinar/createwebinar.component.css")).default]
    })
], CreatewebinarComponent);



/***/ }),

/***/ "./src/app/createwebinar/service.ts":
/*!******************************************!*\
  !*** ./src/app/createwebinar/service.ts ***!
  \******************************************/
/*! exports provided: cwebinarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cwebinarService", function() { return cwebinarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let cwebinarService = class cwebinarService {
    constructor(_http) {
        this._http = _http;
        this._url3 = 'http://localhost:3000/dashboard';
        this._url1 = 'http://localhost:3000/webinar';
        this._url2 = 'http://localhost:3000/getwebinardata';
    }
    enroll3() {
        return this._http.get(this._url3, { withCredentials: true });
    }
    enroll2() {
        return this._http.get(this._url2, { withCredentials: true });
    }
    enroll(user) {
        return this._http.post(this._url1, user);
    }
};
cwebinarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
cwebinarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], cwebinarService);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 320px) and (max-width: 767px) {\r\n    \r\n    #bgimg {\r\n      display: none;\r\n      \r\n     }\r\n     .example-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n    .example-is-mobile .example-toolbar {\r\n      position: fixed;\r\n      /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n      z-index: 2;\r\n    }\r\n    h1.example-app-name {\r\n      margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n      /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n         causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n         `<body>` to be our scrolling element for mobile layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1 0 auto;\r\n    }\r\n    \r\n    .card {\r\n        background: #fff;\r\n        border-radius: 2%;\r\n        margin-bottom: 2%;\r\n        background-color: white;\r\n        color: #1b1b1b;\r\n      }\r\n      .card-3 {\r\n        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n      }\r\n      #card1{\r\n        margin-bottom: 3%;\r\n    }\r\n    #card2{\r\n      margin-bottom: 0%;\r\n    }\r\n    #card3{\r\n      margin-bottom: 3%;\r\n    }\r\n    #card4{\r\n      margin-bottom: 3%;\r\n    }\r\n    #topbar{\r\n      background-color: white;\r\n    \r\n  }\r\n  #ctitle{\r\n      color: #1b1b1b;\r\n      font-weight: bold;\r\n      font-family:  monospace;\r\n      margin-top: 1%;\r\n      font-size: 300%;\r\n      text-shadow: 1.5px 1.5px #252A41;\r\n      \r\n  }\r\n}\r\n@media (min-width: 1025px){\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n   }\r\n   \r\n   .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n   }\r\n   \r\n   h1.example-app-name {\r\n    margin-left: 8px;\r\n   }\r\n   \r\n   .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n   }\r\n   \r\n   .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n   }\r\n   \r\n   #bgimg {\r\n    display: inline-block;\r\n    \r\n   }\r\n  .card {\r\n      background: #fff;\r\n      border-radius: 2px;\r\n      display: inline-block;\r\n      height: 150px;\r\n      margin: 1rem;\r\n      position: absolute;\r\n      width: 450px;\r\n    }\r\n    .card-3 {\r\n      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    }\r\n  #topbar{\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 8%; \r\n  }\r\n  #ctitle{\r\n      color: #1b1b1b;\r\n      font-weight: bold;\r\n      font-family:  monospace;\r\n      margin-top: 1%;\r\n      font-size: 300%;\r\n      text-shadow: 1.5px 1.5px #252A41;\r\n      margin-left: 80px;\r\n  }\r\n  #card1{\r\n      \r\n      margin-top: 40px;\r\n      margin-left: -20%;\r\n      background-color: white;\r\n      color: #1b1b1b;\r\n      \r\n  }\r\n  #card2{\r\n      \r\n      margin-top: 40px;\r\n      margin-left: 15%;\r\n      background-color: white;\r\n      color: #1b1b1b;\r\n  }\r\n  #card3{\r\n      \r\n      margin-top: -32%;\r\n      margin-left: 26%;\r\n      background-color: white;\r\n      color: #1b1b1b;\r\n  }\r\n  #card4{\r\n      \r\n      margin-top: -32%;\r\n      margin-left: 61%;\r\n      background-color: white;\r\n      color: #1b1b1b;\r\n  }\r\n  \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO01BQ0UsYUFBYTs7S0FFZDtLQUNBO01BQ0Msb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLE1BQU07TUFDTixTQUFTO01BQ1QsT0FBTztNQUNQLFFBQVE7SUFDVjtJQUNBO01BQ0UsZUFBZTtNQUNmLDhFQUE4RTtNQUM5RSxVQUFVO0lBQ1o7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFOzhGQUN3RjtNQUN4RixtQkFBTztjQUFQLE9BQU87SUFDVDs7SUFFQTtNQUNFO21FQUM2RDtNQUM3RCxtQkFBYztjQUFkLGNBQWM7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsY0FBYztNQUNoQjtNQUNBO1FBQ0Usb0VBQW9FO01BQ3RFO01BQ0E7UUFDRSxpQkFBaUI7SUFDckI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLHVCQUF1Qjs7RUFFM0I7RUFDQTtNQUNJLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0NBQWdDOztFQUVwQztBQUNGO0FBQ0E7RUFDRTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0dBQ1Q7O0dBRUE7SUFDQyxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7R0FDWDs7R0FFQTtJQUNDLGdCQUFnQjtHQUNqQjs7R0FFQTtJQUNDOzRGQUN3RjtJQUN4RixtQkFBTztZQUFQLE9BQU87R0FDUjs7R0FFQTtJQUNDO2lFQUM2RDtJQUM3RCxtQkFBYztZQUFkLGNBQWM7R0FDZjs7R0FFQTtJQUNDLHFCQUFxQjs7R0FFdEI7RUFDRDtNQUNJLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDtJQUNBO01BQ0Usb0VBQW9FO0lBQ3RFO0VBQ0Y7TUFDSSx1QkFBdUI7TUFDdkIsV0FBVztNQUNYLFVBQVU7RUFDZDtFQUNBO01BQ0ksY0FBYztNQUNkLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLGVBQWU7TUFDZixnQ0FBZ0M7TUFDaEMsaUJBQWlCO0VBQ3JCO0VBQ0E7O01BRUksZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsY0FBYzs7RUFFbEI7RUFDQTs7TUFFSSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixjQUFjO0VBQ2xCO0VBQ0E7O01BRUksZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsY0FBYztFQUNsQjtFQUNBOztNQUVJLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLGNBQWM7RUFDbEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgXHJcbiAgICAjYmdpbWcge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBcclxuICAgICB9XHJcbiAgICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtMyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICAgIH1cclxuICAgICAgI2NhcmQxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgfVxyXG4gICAgI2NhcmQye1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIH1cclxuICAgICNjYXJkM3tcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICB9XHJcbiAgICAjY2FyZDR7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgfVxyXG4gICAgI3RvcGJhcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICB9XHJcbiAgI2N0aXRsZXtcclxuICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgICAgIFxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KXtcclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgIH1cclxuICAgXHJcbiAgIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgfVxyXG4gICBcclxuICAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDE7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICB9XHJcbiAgIFxyXG4gICAjYmdpbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbiAgIH1cclxuICAuY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtMyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgfVxyXG4gICN0b3BiYXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA4JTsgXHJcbiAgfVxyXG4gICNjdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICB9XHJcbiAgI2NhcmQxe1xyXG4gICAgICBcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0yMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgXHJcbiAgfVxyXG4gICNjYXJkMntcclxuICAgICAgXHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogIzFiMWIxYjtcclxuICB9XHJcbiAgI2NhcmQze1xyXG4gICAgICBcclxuICAgICAgbWFyZ2luLXRvcDogLTMyJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gIH1cclxuICAjY2FyZDR7XHJcbiAgICAgIFxyXG4gICAgICBtYXJnaW4tdG9wOiAtMzIlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNjElO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enrollment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enrollment.service */ "./src/app/dashboard/enrollment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");






let DashboardComponent = class DashboardComponent {
    constructor(_enrolllmentService, router, changeDetectorRef, media) {
        this._enrolllmentService = _enrolllmentService;
        this.router = router;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        this._enrolllmentService.enroll().subscribe(data => {
            console.log("success dash", data);
            this.userin = data.email1;
        }, error => console.error("error", error));
    }
    labmanual(key, comp) {
        localStorage.setItem('key', key);
        console.log("compiler", comp);
        localStorage.setItem("compiler", comp);
        this.router.navigate(['labmanual']).then(() => {
            console.log("labmanual");
            // window.location.reload();
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _enrollment_service__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/enrollment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/enrollment.service.ts ***!
  \*************************************************/
/*! exports provided: EnrollmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentService", function() { return EnrollmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EnrollmentService = class EnrollmentService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/dashboard';
    }
    enroll() {
        console.log();
        return this._http.get(this._url, { withCredentials: true });
    }
};
EnrollmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnrollmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnrollmentService);



/***/ }),

/***/ "./src/app/del-program/del-program.component.css":
/*!*******************************************************!*\
  !*** ./src/app/del-program/del-program.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbC1wcm9ncmFtL2RlbC1wcm9ncmFtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/del-program/del-program.component.ts":
/*!******************************************************!*\
  !*** ./src/app/del-program/del-program.component.ts ***!
  \******************************************************/
/*! exports provided: DelProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelProgramComponent", function() { return DelProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let DelProgramComponent = class DelProgramComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.delProgram = false;
        this.eno = data.eno;
        this.pno = data.pno;
    }
    ngOnInit() {
    }
    delete() {
        this.delProgram = true;
        this.dialogRef.close(this.delProgram);
    }
    close() {
        this.dialogRef.close();
    }
};
DelProgramComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DelProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-del-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./del-program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/del-program/del-program.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./del-program.component.css */ "./src/app/del-program/del-program.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DelProgramComponent);



/***/ }),

/***/ "./src/app/dialog-body/dialog-body.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dialog-body/dialog-body.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog{\r\n    background-color: white;\r\n    color: black;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLWJvZHkvZGlhbG9nLWJvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2ctYm9keS9kaWFsb2ctYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dialog-body/dialog-body.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dialog-body/dialog-body.component.ts ***!
  \******************************************************/
/*! exports provided: DialogBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBodyComponent", function() { return DialogBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let DialogBodyComponent = class DialogBodyComponent {
    constructor(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.eno = data.num;
        this.ename = data.title;
    }
    ngOnInit() {
        this.form = this.fb.group({
            name: ['']
        });
    }
    delete() {
        this.dialogRef.close(this.form.value);
    }
    close() {
        this.dialogRef.close();
    }
};
DialogBodyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-body',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-body/dialog-body.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-body.component.css */ "./src/app/dialog-body/dialog-body.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogBodyComponent);



/***/ }),

/***/ "./src/app/editlabmanual/editlabmanual.component.css":
/*!***********************************************************!*\
  !*** ./src/app/editlabmanual/editlabmanual.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  } */\r\n  /* body{\r\n    background-color: #F3F7F7; \r\n} */\r\n  @media (min-width: 320px) and (max-width: 767px) {\r\n      \r\n      #com_body {\r\n        background: #F3F7F7;\r\n      }\r\n      .mat-form-field + .mat-form-field {\r\n        margin-left: 8px;\r\n      }\r\n      #topbar{\r\n          background-color: white;\r\n          width: 100%;\r\n          height: 4%;\r\n          \r\n          \r\n      }\r\n      .example-section {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .example-section-man {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .card {\r\n          background: #fff;\r\n          border-radius: 2px;\r\n          margin: 1rem;\r\n      \r\n        }\r\n        .example-margin {\r\n          color: black;\r\n          font-size: medium;\r\n          \r\n        }\r\n        .card-3 {\r\n          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n        }\r\n        #card1{\r\n          \r\n          margin-top: 10px;\r\n          margin-left: 2%;\r\n          color: #1b1b1b;\r\n          min-height: 580px;\r\n      \r\n          \r\n      }\r\n      #ctitle{\r\n          color: #1b1b1b;\r\n          font-weight: bold;\r\n          font-family:  monospace;\r\n          margin-top: 0.5%;\r\n          font-size: 300%;\r\n          text-shadow: 1.5px 1.5px #252A41;\r\n          \r\n      }\r\n      .edit:hover {\r\n        color: #1b1b1b;\r\n      }\r\n      .addtc:hover {\r\n        color: white;\r\n      }\r\n      .mat-stepper-horizontal {\r\n          margin-top: 8px;\r\n        }\r\n        \r\n        .mat-form-field {\r\n          margin-top: 16px;\r\n        }\r\n\r\n     .example-container {\r\n       display: -webkit-box;\r\n       display: flex;\r\n       -webkit-box-orient: vertical;\r\n       -webkit-box-direction: normal;\r\n               flex-direction: column;\r\n       position: absolute;\r\n       top: 0;\r\n       bottom: 0;\r\n       left: 0;\r\n       right: 0;\r\n     }\r\n     \r\n     .example-is-mobile .example-toolbar {\r\n       position: fixed;\r\n       /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n       z-index: 2;\r\n     }\r\n     \r\n     h1.example-app-name {\r\n       margin-left: 8px;\r\n     }\r\n     \r\n     .example-sidenav-container {\r\n       /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n          causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n       -webkit-box-flex: 1;\r\n               flex: 1;\r\n     }\r\n     \r\n     .example-is-mobile .example-sidenav-container {\r\n       /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n          `<body>` to be our scrolling element for mobile layouts. */\r\n       -webkit-box-flex: 1;\r\n               flex: 1 0 auto;\r\n     }\r\n     \r\n     \r\n     .medium{\r\n       display:none\r\n     }\r\n     .large{\r\n       display:none\r\n     }\r\n     \r\n     .chote{\r\n       display:block\r\n       \r\n     }\r\n     .desktop{\r\n      display:none\r\n      \r\n    }\r\n   \r\n     }\r\n  @media (min-width: 700px) and (max-width: 900px) {\r\n\r\n\r\n       \r\n      #com_body {\r\n        background: #F3F7F7;\r\n      }\r\n      .mat-form-field + .mat-form-field {\r\n        margin-left: 8px;\r\n      }\r\n      #topbar{\r\n          background-color: white;\r\n          width: 100%;\r\n          height: 4%;\r\n          \r\n          \r\n      }\r\n      .example-section {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .example-section-man {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .card {\r\n          background: #fff;\r\n          border-radius: 2px;\r\n          margin: 1rem;\r\n      \r\n        }\r\n        .example-margin {\r\n          color: black;\r\n          font-size: medium;\r\n          \r\n        }\r\n        .card-3 {\r\n          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n        }\r\n        #card1{\r\n          \r\n          margin-top: 10px;\r\n          margin-left: 2%;\r\n          color: #1b1b1b;\r\n          min-height: 580px;\r\n      \r\n          \r\n      }\r\n      #ctitle{\r\n          color: #1b1b1b;\r\n          font-weight: bold;\r\n          font-family:  monospace;\r\n          margin-top: 0.5%;\r\n          font-size: 300%;\r\n          text-shadow: 1.5px 1.5px #252A41;\r\n          \r\n      }\r\n      .edit:hover {\r\n        color: #1b1b1b;\r\n      }\r\n      .addtc:hover {\r\n        color: white;\r\n      }\r\n      .mat-stepper-horizontal {\r\n          margin-top: 8px;\r\n        }\r\n        \r\n        .mat-form-field {\r\n          margin-top: 16px;\r\n        }\r\n\r\n   \r\n    .example-container {\r\n     display: -webkit-box;\r\n     display: flex;\r\n     -webkit-box-orient: vertical;\r\n     -webkit-box-direction: normal;\r\n             flex-direction: column;\r\n     position: absolute;\r\n     top: 0;\r\n     bottom: 0;\r\n     left: 0;\r\n     right: 0;\r\n    }\r\n    \r\n    .example-is-mobile .example-toolbar {\r\n     position: fixed;\r\n     /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n     z-index: 2;\r\n    }\r\n    \r\n    h1.example-app-name {\r\n     margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n     /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n        causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n     -webkit-box-flex: 1;\r\n             flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n     /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n        `<body>` to be our scrolling element for mobile layouts. */\r\n     -webkit-box-flex: 1;\r\n             flex: 1 0 auto;\r\n    }\r\n    \r\n    \r\n    .medium{\r\n     display:block\r\n    }\r\n    .large{\r\n     display:none\r\n    }\r\n    \r\n    .chote{\r\n     display:none\r\n     \r\n    }\r\n    \r\n    .desktop{\r\n     display:none\r\n     \r\n    }\r\n    }\r\n  /* tabs */\r\n  @media (min-width: 901px) and (max-width: 1024px) {\r\n    \r\n       \r\n      #com_body {\r\n        background: #F3F7F7;\r\n      }\r\n      .mat-form-field + .mat-form-field {\r\n        margin-left: 8px;\r\n      }\r\n      #topbar{\r\n          background-color: white;\r\n          width: 100%;\r\n          height: 4%;\r\n          \r\n          \r\n      }\r\n      .example-section {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .example-section-man {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .card {\r\n          background: #fff;\r\n          border-radius: 2px;\r\n          margin: 1rem;\r\n      \r\n        }\r\n        .example-margin {\r\n          color: black;\r\n          font-size: medium;\r\n          \r\n        }\r\n        .card-3 {\r\n          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n        }\r\n        #card1{\r\n          \r\n          margin-top: 10px;\r\n          margin-left: 2%;\r\n          color: #1b1b1b;\r\n          min-height: 580px;\r\n      \r\n          \r\n      }\r\n      #ctitle{\r\n          color: #1b1b1b;\r\n          font-weight: bold;\r\n          font-family:  monospace;\r\n          margin-top: 0.5%;\r\n          font-size: 300%;\r\n          text-shadow: 1.5px 1.5px #252A41;\r\n          \r\n      }\r\n      .edit:hover {\r\n        color: #1b1b1b;\r\n      }\r\n      .addtc:hover {\r\n        color: white;\r\n      }\r\n      .mat-stepper-horizontal {\r\n          margin-top: 8px;\r\n        }\r\n        \r\n        .mat-form-field {\r\n          margin-top: 16px;\r\n        }\r\n\r\n      .example-container {\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: column;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n       }\r\n     .example-is-mobile .example-toolbar {\r\n       position: fixed;\r\n       /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n       z-index: 2;\r\n     }\r\n     \r\n     h1.example-app-name {\r\n       margin-left: 8px;\r\n     }\r\n     \r\n     .example-sidenav-container {\r\n       /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n          causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n       -webkit-box-flex: 1;\r\n               flex: 1;\r\n     }\r\n     \r\n     .example-is-mobile .example-sidenav-container {\r\n       /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n          `<body>` to be our scrolling element for mobile layouts. */\r\n       -webkit-box-flex: 1;\r\n               flex: 1 0 auto;\r\n     }\r\n    /* Container holding the image and the text */\r\n  \r\n    .medium{\r\n      display:none\r\n    }\r\n    .large{\r\n      display:block\r\n    }\r\n    \r\n    .chote{\r\n      display:none\r\n      \r\n    }\r\n    .desktop{\r\n     display:none\r\n     \r\n    }\r\n     }\r\n  @media (min-width: 1025px) {\r\n\r\n\r\n      /* bade */\r\n      \r\n      #com_body {\r\n        background: #F3F7F7;\r\n      }\r\n      .mat-form-field + .mat-form-field {\r\n        margin-left: 8px;\r\n      }\r\n      #topbar{\r\n          background-color: white;\r\n          width: 100%;\r\n          height: 4%;\r\n          \r\n          \r\n      }\r\n      .example-section {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .example-section-man {\r\n          display: -webkit-box;\r\n          display: flex;\r\n          align-content: center;\r\n          -webkit-box-align: center;\r\n                  align-items: center;\r\n      \r\n        }\r\n        .card {\r\n          background: #fff;\r\n          border-radius: 2px;\r\n          margin: 1rem;\r\n      \r\n        }\r\n        .example-margin {\r\n          color: black;\r\n          font-size: medium;\r\n          \r\n        }\r\n        .card-3 {\r\n          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n        }\r\n        #card1{\r\n          \r\n          margin-top: 10px;\r\n          margin-left: 2%;\r\n          color: #1b1b1b;\r\n          width: 680px;\r\n          min-height: 580px;\r\n      \r\n          \r\n      }\r\n      #ctitle{\r\n          color: #1b1b1b;\r\n          font-weight: bold;\r\n          font-family:  monospace;\r\n          margin-top: 0.5%;\r\n          font-size: 300%;\r\n          text-shadow: 1.5px 1.5px #252A41;\r\n          \r\n      }\r\n      .edit:hover {\r\n        color: #1b1b1b;\r\n      }\r\n      .addtc:hover {\r\n        color: white;\r\n      }\r\n      .mat-stepper-horizontal {\r\n          margin-top: 8px;\r\n        }\r\n        \r\n        .mat-form-field {\r\n          margin-top: 16px;\r\n        }\r\n      .example-container {\r\n       display: -webkit-box;\r\n       display: flex;\r\n       -webkit-box-orient: vertical;\r\n       -webkit-box-direction: normal;\r\n               flex-direction: column;\r\n       position: absolute;\r\n       top: 0;\r\n       bottom: 0;\r\n       left: 0;\r\n       right: 0;\r\n     }\r\n     \r\n  \r\n     .example-is-mobile .example-toolbar {\r\n       position: fixed;\r\n       /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n       z-index: 2;\r\n     }\r\n     \r\n     h1.example-app-name {\r\n       margin-left: 8px;\r\n     }\r\n     \r\n     .example-sidenav-container {\r\n       /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n          causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n       -webkit-box-flex: 1;\r\n               flex: 1;\r\n     }\r\n     \r\n     .example-is-mobile .example-sidenav-container {\r\n       /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n          `<body>` to be our scrolling element for mobile layouts. */\r\n       -webkit-box-flex: 1;\r\n               flex: 1 0 auto;\r\n     }\r\n    /* Container holding the image and the text */\r\n    \r\n      .medium{\r\n        display:none\r\n      }\r\n      .large{\r\n        display:none\r\n      }\r\n      \r\n      .chote{\r\n        display:none\r\n        \r\n      }\r\n      .desktop{\r\n       display:block\r\n       \r\n     }\r\n    \r\n    \r\n    \r\n     }\r\n      \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGxhYm1hbnVhbC9lZGl0bGFibWFudWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUs7RUFDSDs7R0FFQztFQUtDOztNQUVFO1FBQ0UsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxnQkFBZ0I7TUFDbEI7TUFDQTtVQUNJLHVCQUF1QjtVQUN2QixXQUFXO1VBQ1gsVUFBVTs7O01BR2Q7TUFDQTtVQUNJLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHFCQUFxQjtVQUNyQix5QkFBbUI7a0JBQW5CLG1CQUFtQjs7UUFFckI7UUFDQTtVQUNFLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHFCQUFxQjtVQUNyQix5QkFBbUI7a0JBQW5CLG1CQUFtQjs7UUFFckI7UUFDQTtVQUNFLGdCQUFnQjtVQUNoQixrQkFBa0I7VUFDbEIsWUFBWTs7UUFFZDtRQUNBO1VBQ0UsWUFBWTtVQUNaLGlCQUFpQjs7UUFFbkI7UUFDQTtVQUNFLG9FQUFvRTtRQUN0RTtRQUNBOztVQUVFLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsY0FBYztVQUNkLGlCQUFpQjs7O01BR3JCO01BQ0E7VUFDSSxjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLHVCQUF1QjtVQUN2QixnQkFBZ0I7VUFDaEIsZUFBZTtVQUNmLGdDQUFnQzs7TUFFcEM7TUFDQTtRQUNFLGNBQWM7TUFDaEI7TUFDQTtRQUNFLFlBQVk7TUFDZDtNQUNBO1VBQ0ksZUFBZTtRQUNqQjs7UUFFQTtVQUNFLGdCQUFnQjtRQUNsQjs7S0FFSDtPQUNFLG9CQUFhO09BQWIsYUFBYTtPQUNiLDRCQUFzQjtPQUF0Qiw2QkFBc0I7ZUFBdEIsc0JBQXNCO09BQ3RCLGtCQUFrQjtPQUNsQixNQUFNO09BQ04sU0FBUztPQUNULE9BQU87T0FDUCxRQUFRO0tBQ1Y7O0tBRUE7T0FDRSxlQUFlO09BQ2YsOEVBQThFO09BQzlFLFVBQVU7S0FDWjs7S0FFQTtPQUNFLGdCQUFnQjtLQUNsQjs7S0FFQTtPQUNFOytGQUN3RjtPQUN4RixtQkFBTztlQUFQLE9BQU87S0FDVDs7S0FFQTtPQUNFO29FQUM2RDtPQUM3RCxtQkFBYztlQUFkLGNBQWM7S0FDaEI7OztLQUdBO09BQ0U7S0FDRjtLQUNBO09BQ0U7S0FDRjs7S0FFQTtPQUNFOztLQUVGO0tBQ0E7TUFDQzs7SUFFRjs7S0FFQztFQUdBOzs7O01BSUM7UUFDRSxtQkFBbUI7TUFDckI7TUFDQTtRQUNFLGdCQUFnQjtNQUNsQjtNQUNBO1VBQ0ksdUJBQXVCO1VBQ3ZCLFdBQVc7VUFDWCxVQUFVOzs7TUFHZDtNQUNBO1VBQ0ksb0JBQWE7VUFBYixhQUFhO1VBQ2IscUJBQXFCO1VBQ3JCLHlCQUFtQjtrQkFBbkIsbUJBQW1COztRQUVyQjtRQUNBO1VBQ0Usb0JBQWE7VUFBYixhQUFhO1VBQ2IscUJBQXFCO1VBQ3JCLHlCQUFtQjtrQkFBbkIsbUJBQW1COztRQUVyQjtRQUNBO1VBQ0UsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNsQixZQUFZOztRQUVkO1FBQ0E7VUFDRSxZQUFZO1VBQ1osaUJBQWlCOztRQUVuQjtRQUNBO1VBQ0Usb0VBQW9FO1FBQ3RFO1FBQ0E7O1VBRUUsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixjQUFjO1VBQ2QsaUJBQWlCOzs7TUFHckI7TUFDQTtVQUNJLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsdUJBQXVCO1VBQ3ZCLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsZ0NBQWdDOztNQUVwQztNQUNBO1FBQ0UsY0FBYztNQUNoQjtNQUNBO1FBQ0UsWUFBWTtNQUNkO01BQ0E7VUFDSSxlQUFlO1FBQ2pCOztRQUVBO1VBQ0UsZ0JBQWdCO1FBQ2xCOzs7SUFHSjtLQUNDLG9CQUFhO0tBQWIsYUFBYTtLQUNiLDRCQUFzQjtLQUF0Qiw2QkFBc0I7YUFBdEIsc0JBQXNCO0tBQ3RCLGtCQUFrQjtLQUNsQixNQUFNO0tBQ04sU0FBUztLQUNULE9BQU87S0FDUCxRQUFRO0lBQ1Q7O0lBRUE7S0FDQyxlQUFlO0tBQ2YsOEVBQThFO0tBQzlFLFVBQVU7SUFDWDs7SUFFQTtLQUNDLGdCQUFnQjtJQUNqQjs7SUFFQTtLQUNDOzZGQUN3RjtLQUN4RixtQkFBTzthQUFQLE9BQU87SUFDUjs7SUFFQTtLQUNDO2tFQUM2RDtLQUM3RCxtQkFBYzthQUFkLGNBQWM7SUFDZjs7O0lBR0E7S0FDQztJQUNEO0lBQ0E7S0FDQztJQUNEOztJQUVBO0tBQ0M7O0lBRUQ7O0lBRUE7S0FDQzs7SUFFRDtJQUNBO0VBS0MsU0FBUztFQUNUOzs7TUFHQztRQUNFLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsZ0JBQWdCO01BQ2xCO01BQ0E7VUFDSSx1QkFBdUI7VUFDdkIsV0FBVztVQUNYLFVBQVU7OztNQUdkO01BQ0E7VUFDSSxvQkFBYTtVQUFiLGFBQWE7VUFDYixxQkFBcUI7VUFDckIseUJBQW1CO2tCQUFuQixtQkFBbUI7O1FBRXJCO1FBQ0E7VUFDRSxvQkFBYTtVQUFiLGFBQWE7VUFDYixxQkFBcUI7VUFDckIseUJBQW1CO2tCQUFuQixtQkFBbUI7O1FBRXJCO1FBQ0E7VUFDRSxnQkFBZ0I7VUFDaEIsa0JBQWtCO1VBQ2xCLFlBQVk7O1FBRWQ7UUFDQTtVQUNFLFlBQVk7VUFDWixpQkFBaUI7O1FBRW5CO1FBQ0E7VUFDRSxvRUFBb0U7UUFDdEU7UUFDQTs7VUFFRSxnQkFBZ0I7VUFDaEIsZUFBZTtVQUNmLGNBQWM7VUFDZCxpQkFBaUI7OztNQUdyQjtNQUNBO1VBQ0ksY0FBYztVQUNkLGlCQUFpQjtVQUNqQix1QkFBdUI7VUFDdkIsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixnQ0FBZ0M7O01BRXBDO01BQ0E7UUFDRSxjQUFjO01BQ2hCO01BQ0E7UUFDRSxZQUFZO01BQ2Q7TUFDQTtVQUNJLGVBQWU7UUFDakI7O1FBRUE7VUFDRSxnQkFBZ0I7UUFDbEI7O01BRUY7UUFDRSxvQkFBYTtRQUFiLGFBQWE7UUFDYiw0QkFBc0I7UUFBdEIsNkJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTO1FBQ1QsT0FBTztRQUNQLFFBQVE7T0FDVDtLQUNGO09BQ0UsZUFBZTtPQUNmLDhFQUE4RTtPQUM5RSxVQUFVO0tBQ1o7O0tBRUE7T0FDRSxnQkFBZ0I7S0FDbEI7O0tBRUE7T0FDRTsrRkFDd0Y7T0FDeEYsbUJBQU87ZUFBUCxPQUFPO0tBQ1Q7O0tBRUE7T0FDRTtvRUFDNkQ7T0FDN0QsbUJBQWM7ZUFBZCxjQUFjO0tBQ2hCO0lBQ0QsNkNBQTZDOztJQUU3QztNQUNFO0lBQ0Y7SUFDQTtNQUNFO0lBQ0Y7O0lBRUE7TUFDRTs7SUFFRjtJQUNBO0tBQ0M7O0lBRUQ7S0FDQztFQUdBOzs7TUFHQyxTQUFTOztNQUVUO1FBQ0UsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxnQkFBZ0I7TUFDbEI7TUFDQTtVQUNJLHVCQUF1QjtVQUN2QixXQUFXO1VBQ1gsVUFBVTs7O01BR2Q7TUFDQTtVQUNJLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHFCQUFxQjtVQUNyQix5QkFBbUI7a0JBQW5CLG1CQUFtQjs7UUFFckI7UUFDQTtVQUNFLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHFCQUFxQjtVQUNyQix5QkFBbUI7a0JBQW5CLG1CQUFtQjs7UUFFckI7UUFDQTtVQUNFLGdCQUFnQjtVQUNoQixrQkFBa0I7VUFDbEIsWUFBWTs7UUFFZDtRQUNBO1VBQ0UsWUFBWTtVQUNaLGlCQUFpQjs7UUFFbkI7UUFDQTtVQUNFLG9FQUFvRTtRQUN0RTtRQUNBOztVQUVFLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsY0FBYztVQUNkLFlBQVk7VUFDWixpQkFBaUI7OztNQUdyQjtNQUNBO1VBQ0ksY0FBYztVQUNkLGlCQUFpQjtVQUNqQix1QkFBdUI7VUFDdkIsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixnQ0FBZ0M7O01BRXBDO01BQ0E7UUFDRSxjQUFjO01BQ2hCO01BQ0E7UUFDRSxZQUFZO01BQ2Q7TUFDQTtVQUNJLGVBQWU7UUFDakI7O1FBRUE7VUFDRSxnQkFBZ0I7UUFDbEI7TUFDRjtPQUNDLG9CQUFhO09BQWIsYUFBYTtPQUNiLDRCQUFzQjtPQUF0Qiw2QkFBc0I7ZUFBdEIsc0JBQXNCO09BQ3RCLGtCQUFrQjtPQUNsQixNQUFNO09BQ04sU0FBUztPQUNULE9BQU87T0FDUCxRQUFRO0tBQ1Y7OztLQUdBO09BQ0UsZUFBZTtPQUNmLDhFQUE4RTtPQUM5RSxVQUFVO0tBQ1o7O0tBRUE7T0FDRSxnQkFBZ0I7S0FDbEI7O0tBRUE7T0FDRTsrRkFDd0Y7T0FDeEYsbUJBQU87ZUFBUCxPQUFPO0tBQ1Q7O0tBRUE7T0FDRTtvRUFDNkQ7T0FDN0QsbUJBQWM7ZUFBZCxjQUFjO0tBQ2hCO0lBQ0QsNkNBQTZDOztNQUUzQztRQUNFO01BQ0Y7TUFDQTtRQUNFO01BQ0Y7O01BRUE7UUFDRTs7TUFFRjtNQUNBO09BQ0M7O0tBRUY7Ozs7S0FJQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRsYWJtYW51YWwvZWRpdGxhYm1hbnVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfSAqL1xyXG4gIC8qIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0Y3OyBcclxufSAqL1xyXG5cclxuICBcclxuXHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgXHJcbiAgICAgICNjb21fYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0YzRjdGNztcclxuICAgICAgfVxyXG4gICAgICAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgI3RvcGJhcntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuZXhhbXBsZS1zZWN0aW9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4YW1wbGUtc2VjdGlvbi1tYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4YW1wbGUtbWFyZ2luIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLTMge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjYXJkMXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNTgwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgI2N0aXRsZXtcclxuICAgICAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNSU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5lZGl0OmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgfVxyXG4gICAgICAuYWRkdGM6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgdG9wOiAwO1xyXG4gICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgbGVmdDogMDtcclxuICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICAgICBmbGV4OiAxO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgLm1lZGl1bXtcclxuICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgIH1cclxuICAgICAubGFyZ2V7XHJcbiAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgLmNob3Rle1xyXG4gICAgICAgZGlzcGxheTpibG9ja1xyXG4gICAgICAgXHJcbiAgICAgfVxyXG4gICAgIC5kZXNrdG9we1xyXG4gICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgIFxyXG4gICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAjY29tX2JvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGM0Y3Rjc7XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgICN0b3BiYXJ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0JTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5leGFtcGxlLXNlY3Rpb24tbWFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5leGFtcGxlLW1hcmdpbiB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC0zIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjY2FyZDF7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDU4MHB4O1xyXG4gICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICNjdGl0bGV7XHJcbiAgICAgICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjUlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuZWRpdDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgIH1cclxuICAgICAgLmFkZHRjOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICBcclxuICAgIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDA7XHJcbiAgICAgYm90dG9tOiAwO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAubWVkaXVte1xyXG4gICAgIGRpc3BsYXk6YmxvY2tcclxuICAgIH1cclxuICAgIC5sYXJnZXtcclxuICAgICBkaXNwbGF5Om5vbmVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNob3Rle1xyXG4gICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGVza3RvcHtcclxuICAgICBkaXNwbGF5Om5vbmVcclxuICAgICBcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIC8qIHRhYnMgKi9cclxuICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIFxyXG4gICAgICAgXHJcbiAgICAgICNjb21fYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0YzRjdGNztcclxuICAgICAgfVxyXG4gICAgICAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgI3RvcGJhcntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuZXhhbXBsZS1zZWN0aW9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4YW1wbGUtc2VjdGlvbi1tYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4YW1wbGUtbWFyZ2luIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLTMge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjYXJkMXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNTgwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgI2N0aXRsZXtcclxuICAgICAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNSU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5lZGl0OmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgfVxyXG4gICAgICAuYWRkdGM6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICB9XHJcbiAgICAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgICAgei1pbmRleDogMjtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgICAgZmxleDogMTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgfVxyXG4gICAgLyogQ29udGFpbmVyIGhvbGRpbmcgdGhlIGltYWdlIGFuZCB0aGUgdGV4dCAqL1xyXG4gIFxyXG4gICAgLm1lZGl1bXtcclxuICAgICAgZGlzcGxheTpub25lXHJcbiAgICB9XHJcbiAgICAubGFyZ2V7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2tcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNob3Rle1xyXG4gICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuZGVza3RvcHtcclxuICAgICBkaXNwbGF5Om5vbmVcclxuICAgICBcclxuICAgIH1cclxuICAgICB9XHJcbiAgICBcclxuICAgICBcclxuICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcblxyXG5cclxuICAgICAgLyogYmFkZSAqL1xyXG4gICAgICBcclxuICAgICAgI2NvbV9ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjNGN0Y3O1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgICAjdG9wYmFye1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNCU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5leGFtcGxlLXNlY3Rpb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhhbXBsZS1zZWN0aW9uLW1hbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZXhhbXBsZS1tYXJnaW4ge1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtMyB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NhcmQxe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1ODBweDtcclxuICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAjY3RpdGxle1xyXG4gICAgICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41JTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmVkaXQ6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgICB9XHJcbiAgICAgIC5hZGR0Yzpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICB0b3A6IDA7XHJcbiAgICAgICBib3R0b206IDA7XHJcbiAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gIFxyXG4gICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgICAgIGZsZXg6IDE7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgIH1cclxuICAgIC8qIENvbnRhaW5lciBob2xkaW5nIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQgKi9cclxuICAgIFxyXG4gICAgICAubWVkaXVte1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICB9XHJcbiAgICAgIC5sYXJnZXtcclxuICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNob3Rle1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5kZXNrdG9we1xyXG4gICAgICAgZGlzcGxheTpibG9ja1xyXG4gICAgICAgXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgIH1cclxuICAgICAgIl19 */");

/***/ }),

/***/ "./src/app/editlabmanual/editlabmanual.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/editlabmanual/editlabmanual.component.ts ***!
  \**********************************************************/
/*! exports provided: EditlabmanualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditlabmanualComponent", function() { return EditlabmanualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _editlabmanual_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editlabmanual.service */ "./src/app/editlabmanual/editlabmanual.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog-body/dialog-body.component */ "./src/app/dialog-body/dialog-body.component.ts");
/* harmony import */ var src_app_del_program_del_program_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/del-program/del-program.component */ "./src/app/del-program/del-program.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");












let EditlabmanualComponent = class EditlabmanualComponent {
    constructor(dialog, changeDetectorRef, media, _snackBar, router, _formBuilder, _editlabmanualService, matDialog) {
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.router = router;
        this._formBuilder = _formBuilder;
        this._editlabmanualService = _editlabmanualService;
        this.matDialog = matDialog;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.title = "Example Angular 8 Material Dialog";
        this.load = false;
        this.tcip = [];
        this.tcop = [];
        this.panelOpenState = false;
        this.manual = [];
        this.pubmanstatus = true;
        this.addprogtog = true;
        this.addprogram = {
            "pkey": "",
            "eno": "",
            "pno": "",
            "title": "",
            "desc": "",
            "ip_format": "",
            "cons": "",
            "op_format": "",
            "tc_ip": "",
            "tc_op": "",
            "expl": "",
            "tcip": [],
            "tcop": [],
            "programming": ""
        };
        this.addexp = false;
        this.uename = true;
        this.updexp = {
            "eno": "",
            "updname": "",
            "programming": ""
        };
        this.exp = {
            "no": "",
            "name": "",
            "key": "",
            "programming": ""
        };
        this.delProgram = {
            "eno": "",
            "pkey": "",
            "programming": ""
        };
        this.delExp = {
            "key": "",
            "programming": ""
        };
        this.delExp_status = true;
        this.upprog1 = true;
        this.uptcip = [];
        this.uptcop = [];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    addtc() {
        if (this.upFormGroup_tc.value.uprogtcip == '' || this.upFormGroup_tc.value.uprogtcop == '') {
            this._snackBar.open("Please insert both input and output to add a testcase", "OK", {
                duration: 9000,
            });
        }
        else {
            this.tcip.push(this.upFormGroup_tc.value.uprogtcip);
            this.tcop.push(this.upFormGroup_tc.value.uprogtcop);
        }
        console.log("tc", this.tcip, this.tcop);
    }
    addtc1() {
        if (this.addprogFormGroup_tc.value.progtcip == '' || this.addprogFormGroup_tc.value.progtcop == '') {
            this._snackBar.open("Please insert both input and output to add a testcase", "OK", {
                duration: 9000,
            });
        }
        else {
            this.tcip.push(this.addprogFormGroup_tc.value.progtcip);
            this.tcop.push(this.addprogFormGroup_tc.value.progtcop);
        }
        console.log("tc", this.tcip, this.tcop);
    }
    publishman() {
        this._editlabmanualService.enroll7(this.manual, this.key).subscribe(data => {
            console.log("success dash", data);
            this._snackBar.open("Manual Published", "OK", {
                duration: 10000,
            });
        }, error => console.error("error", error));
    }
    delProg(i, j) {
        this.delPkey = this.manual[i].prog[j].pkey;
        this.delPpno = this.manual[i].prog[j].pno;
        this.delPeno = this.manual[i].prog[j].eno;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = {
            eno: this.delPeno,
            pno: this.delPpno,
        };
        this.matDialog.open(src_app_del_program_del_program_component__WEBPACK_IMPORTED_MODULE_8__["DelProgramComponent"], dialogConfig);
        const dialogRef = this.matDialog.open(src_app_del_program_del_program_component__WEBPACK_IMPORTED_MODULE_8__["DelProgramComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            console.log("Dialog output:", data);
            this.deleteProgram(data);
        });
    }
    deleteProgram(delP) {
        if (delP == true) {
            this.delProgram.eno = this.delPeno;
            this.delProgram.pkey = this.delPkey;
            this.delProgram.programming = this.key;
            this._editlabmanualService.enroll6(this.delProgram).subscribe(data => {
                console.log("success dash", data);
                this._snackBar.open("Program Deleted, manual will be updated in 5000ms if not please refresh the page", "OK", {
                    duration: 90000,
                });
                this.updateman();
            }, error => console.error("error", error));
        }
        else {
            this._snackBar.open("Program not Deleted", "OK", {
                duration: 90000,
            });
        }
    }
    openDialog(i) {
        this.delExkey = this.manual[i].key;
        this.delExname = this.manual[i].name;
        this.delExno = this.manual[i].no;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = {
            num: this.delExno,
            title: this.delExname
        };
        this.matDialog.open(src_app_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_7__["DialogBodyComponent"], dialogConfig);
        const dialogRef = this.matDialog.open(src_app_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_7__["DialogBodyComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            console.log("Dialog output:", data);
            this.deleteExp(data.name);
        });
    }
    deleteExp(name) {
        if (name == this.delExname) {
            console.log("Delete");
            this.delExp.key = this.delExkey;
            this.delExp.programming = this.key;
            this._editlabmanualService.enroll5(this.delExp).subscribe(data => {
                console.log("success dash", data);
                this._snackBar.open("Experiment Deleted, manual will be updated in 5000ms if not please refresh the page", "OK", {
                    duration: 90000,
                });
                this.updateman();
            }, error => console.error("error", error));
        }
        else {
            this._snackBar.open("Experiment not Deleted", "OK", {
                duration: 90000,
            });
        }
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            expno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            expname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.uenameFormGroup = this._formBuilder.group({
            uexpname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.addprogFormGroup_pno = this._formBuilder.group({
            progno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_t = this._formBuilder.group({
            progtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_d = this._formBuilder.group({
            progdesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_ipf = this._formBuilder.group({
            progip_format: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_c = this._formBuilder.group({
            progcons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_opf = this._formBuilder.group({
            progop_format: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_sip = this._formBuilder.group({
            progtc_ip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_sop = this._formBuilder.group({
            progtc_op: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_exp = this._formBuilder.group({
            progexpl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.addprogFormGroup_tc = this._formBuilder.group({
            progtcip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            progtcop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_title = this._formBuilder.group({
            uprogtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_desc = this._formBuilder.group({
            uprogdesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_ipf = this._formBuilder.group({
            uprogip_format: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_cons = this._formBuilder.group({
            uprogcons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_opf = this._formBuilder.group({
            uprogop_format: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_sip = this._formBuilder.group({
            uprogtc_ip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_sop = this._formBuilder.group({
            uprogtc_op: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_exp = this._formBuilder.group({
            uprogexpl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.upFormGroup_tc = this._formBuilder.group({
            uprogtcip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            uprogtcop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.key = localStorage.getItem('key');
        console.log("xzxzx", this.key);
        // uprogno: ['', Validators.required],
        this._editlabmanualService.enroll1(this.key).subscribe(data => {
            console.log("success dash", data.manual);
            this.manual = data.manual;
            this.pubmanstatus = false;
            this.load = true;
            this.tcip = [];
            this.tcop = [];
        }, error => console.error("error", error));
        setTimeout(() => {
        }, 100);
    }
    upprog() {
        console.log(this.upFormGroup_sop.value.uprogtc_op);
        this.addprogram.eno = this.up_eno;
        this.addprogram.pno = this.up_pno;
        this.addprogram.title = this.upFormGroup_title.value.uprogtitle;
        this.addprogram.desc = this.upFormGroup_desc.value.uprogdesc;
        this.addprogram.ip_format = this.upFormGroup_ipf.value.uprogip_format;
        this.addprogram.cons = this.upFormGroup_cons.value.uprogcons;
        this.addprogram.op_format = this.upFormGroup_opf.value.uprogop_format;
        this.addprogram.tc_ip = this.upFormGroup_sip.value.uprogtc_ip;
        this.addprogram.tc_op = this.upFormGroup_sop.value.uprogtc_op;
        this.addprogram.expl = this.upFormGroup_exp.value.uprogexpl;
        this.addprogram.tcip = this.tcip;
        this.addprogram.tcop = this.tcop;
        this.addprogram.programming = this.key;
        console.log(this.tcip);
        console.log(this.addprogram);
        this._editlabmanualService.enroll4(this.addprogram).subscribe(data => {
            console.log("success dash", data);
            this.updateman();
        }, error => console.error("error", error));
    }
    upexname() {
        this.updexp.eno = this.expnum;
        this.updexp.updname = this.uenameFormGroup.value.uexpname;
        this.updexp.programming = this.key;
        console.log(this.updexp);
        this._editlabmanualService.enroll2(this.updexp).subscribe(data => {
            console.log("success dash", data);
            this.updateman();
        }, error => console.error("error", error));
    }
    ind_uename(eno) {
        console.log("gy");
        this.expnum = this.manual[eno].no;
        this.uename = false;
        this.addexp = true;
        this.addprogtog = true;
        this.upprog1 = true;
        // if(this.addexp == true ){
        //   this.addexp = false;
        //   this.uename = true;
        // }
        // else {
        //   this.addexp = true;
        //   this.uename = false;
        // }
        console.log(this.addexp);
    }
    ind_addprog(eno) {
        console.log("gyss", eno);
        this.expnum1 = this.manual[eno].no;
        this.uename = true;
        this.addexp = true;
        this.upprog1 = true;
        this.addprogtog = false;
        this.tcip = [];
        this.tcop = [];
    }
    addprog() {
        var pkey = "Program_" + new Date().toString();
        this.addprogram.pkey = pkey;
        this.addprogram.eno = this.expnum1;
        this.addprogram.pno = this.addprogFormGroup_pno.value.progno;
        this.addprogram.title = this.addprogFormGroup_t.value.progtitle;
        this.addprogram.desc = this.addprogFormGroup_d.value.progdesc;
        this.addprogram.ip_format = this.addprogFormGroup_ipf.value.progip_format;
        this.addprogram.cons = this.addprogFormGroup_c.value.progcons;
        this.addprogram.op_format = this.addprogFormGroup_opf.value.progop_format;
        this.addprogram.tc_ip = this.addprogFormGroup_sip.value.progtc_ip;
        this.addprogram.tc_op = this.addprogFormGroup_sop.value.progtc_op;
        this.addprogram.expl = this.addprogFormGroup_exp.value.progexpl;
        this.addprogram.tcip = this.tcip;
        this.addprogram.tcop = this.tcop;
        this.addprogram.programming = this.key;
        console.log(this.addprogram);
        this._editlabmanualService.enroll3(this.addprogram).subscribe(data => {
            console.log("success dash", data);
            this.updateman();
        }, error => console.error("error", error));
    }
    //  deltc_body = {
    //     "eno" : "",
    //     "pno" : "",
    //     "ind" : ""
    //  }
    deltc(ind) {
        // this.deltc_body.ind = ind;
        // this.deltc_body.eno = this.up_eno;
        // this.deltc_body.pno = this.up_pno;
        // this._editlabmanualService.enroll8(this.deltc_body).subscribe(
        //   data=>{ console.log("success dash",data);
        //   this.updateman();
        // },
        //   error=>console.error("error",error))
        console.log(ind);
        this.tcip.splice(ind, 1);
        this.tcop.splice(ind, 1);
        console.log(this.tcip);
    }
    ind_upname(i, j) {
        console.log("S", i, j);
        this.uename = true;
        this.addexp = true;
        this.addprogtog = true;
        this.upprog1 = false;
        this.up_eno = this.manual[i].no;
        this.up_pno = this.manual[i].prog[j].pno;
        this.up_title = this.manual[i].prog[j].title;
        this.up_desc = this.manual[i].prog[j].desc;
        this.up_ipf = this.manual[i].prog[j].ip_format;
        this.up_cons = this.manual[i].prog[j].cons;
        this.up_opf = this.manual[i].prog[j].op_format;
        this.up_tcip = this.manual[i].prog[j].tc_ip;
        this.up_tcop = this.manual[i].prog[j].tc_op;
        this.up_expl = this.manual[i].prog[j].expl;
        //  console.log(this.manual[i].prog[j].tcip);
        this.tcip = this.manual[i].prog[j].tcip;
        this.tcop = this.manual[i].prog[j].tcop;
        console.log("dd", this.tcip);
    }
    expno() {
        console.log(this.firstFormGroup.value.expno);
        // console.log(form.value)
        // console.log(form.value.expno);
    }
    expname() {
        // console.log(form.value)
        // console.log(form.value.expname);
        console.log(this.secondFormGroup.value.expname);
    }
    updateman() {
        this._editlabmanualService.enroll1(this.key).subscribe(data => {
            console.log("success dash", data.manual);
            this.manual = data.manual;
            this.pubmanstatus = false;
            this.tcip = [];
            this.tcop = [];
        }, error => console.error("error", error));
    }
    done() {
        console.log("yoyo");
        var key = "ToBePulled_" + new Date().toString();
        console.log(key);
        this.exp.no = this.firstFormGroup.value.expno;
        this.exp.name = this.secondFormGroup.value.expname;
        this.exp.key = key;
        this.exp.programming = this.key;
        this._editlabmanualService.enroll(this.exp).subscribe(data => {
            console.log("success", data);
            this.updateman();
        }, error => console.error("error", error));
    }
    program() {
        this.router.navigate(['program']).then(() => {
            console.log("program go");
            // window.location.reload();
        });
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
EditlabmanualComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["MediaMatcher"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _editlabmanual_service__WEBPACK_IMPORTED_MODULE_4__["EditlabmanualService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
EditlabmanualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editlabmanual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editlabmanual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editlabmanual/editlabmanual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editlabmanual.component.css */ "./src/app/editlabmanual/editlabmanual.component.css")).default]
    })
], EditlabmanualComponent);



/***/ }),

/***/ "./src/app/editlabmanual/editlabmanual.service.ts":
/*!********************************************************!*\
  !*** ./src/app/editlabmanual/editlabmanual.service.ts ***!
  \********************************************************/
/*! exports provided: EditlabmanualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditlabmanualService", function() { return EditlabmanualService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EditlabmanualService = class EditlabmanualService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/putexp';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getmanual';
        this._url2 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/updateexp';
        this._url3 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/putprog';
        this._url4 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/updateprog';
        this._url5 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/delete_exp';
        this._url6 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/delete_prog';
        this._url7 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/publish_man';
        this._url8 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/delete_tc';
    }
    enroll(exp) {
        console.log(exp);
        return this._http.post(this._url, exp, { withCredentials: true });
    }
    enroll1(key) {
        var data = {
            "key": key
        };
        return this._http.post(this._url1, data, { withCredentials: true });
    }
    enroll2(uexp) {
        console.log(uexp);
        return this._http.post(this._url2, uexp, { withCredentials: true });
    }
    enroll3(prog) {
        console.log(prog);
        return this._http.post(this._url3, prog, { withCredentials: true });
    }
    enroll4(uprog) {
        console.log(uprog);
        return this._http.post(this._url4, uprog, { withCredentials: true });
    }
    enroll5(uprog) {
        console.log(uprog);
        return this._http.post(this._url5, uprog, { withCredentials: true });
    }
    enroll6(uprog) {
        console.log(uprog);
        return this._http.post(this._url6, uprog, { withCredentials: true });
    }
    enroll7(uprog, key) {
        console.log(uprog);
        uprog.push(key);
        // console.log(uprog.pop());
        return this._http.post(this._url7, uprog, { withCredentials: true });
    }
    enroll8(uprog) {
        console.log(uprog);
        return this._http.post(this._url8, uprog, { withCredentials: true });
    }
};
EditlabmanualService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditlabmanualService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditlabmanualService);



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n\r\n    background-color:#1b262c;\r\n    color: white;\r\n\r\n  }\r\n\r\n  .cards {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n }\r\n\r\n  .example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n  #bgimg {\r\n  display: none;\r\n  \r\n }\r\n\r\n  .example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\n  h1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n  .example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n  .example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxXQUFXOztJQUVYLHdCQUF3QjtJQUN4QixZQUFZOztFQUVkOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQTZCO1lBQTdCLDZCQUE2QjtDQUNoQzs7RUFDQTtFQUNDLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0VBRUE7RUFDRSxhQUFhOztDQUVkOztFQUNEO0VBQ0UsZUFBZTtFQUNmLDhFQUE4RTtFQUM5RSxVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRTswRkFDd0Y7RUFDeEYsbUJBQU87VUFBUCxPQUFPO0FBQ1Q7O0VBRUE7RUFDRTsrREFDNkQ7RUFDN0QsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxYjI2MmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuIH1cclxuIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiNiZ2ltZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBcclxuIH1cclxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgei1pbmRleDogMjtcclxufVxyXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");








let EditorComponent = class EditorComponent {
    constructor(_interactionService, changeDetectorRef, media, dialog, _enrolllmentService) {
        this._interactionService = _interactionService;
        this.dialog = dialog;
        this._enrolllmentService = _enrolllmentService;
        this.editorOptions = { theme: 'vs-dark', language: 'c' };
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    onInit(editor) {
        this.ed = editor;
        this.line = this.ed.getPosition();
        console.log(this.line);
    }
    ngOnInit() {
        // switch (this.selected) {
        //   case "c++":
        //     alert( 'Too small' );
        //     break;
        //   case "java":
        //     alert( 'Exactly!' );
        //     break;
        //   case "python":
        //     alert( 'Too large' );
        //     break;
        //   default:
        //     alert( "I don't know such values" );
        // }
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("share").where("email", "==", "lobopranayk9@gmail.com")
            .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                var count = 0;
                if (change.type === "modified") {
                    console.log("Modified city: ", change.doc.data().code);
                    this.code1 = decodeURIComponent(change.doc.data().code);
                    // count =count+1;
                    // console.log("count",count)
                    // var line =  this.ed.getPosition();
                    // var range = new monaco.Range(line.lineNumber, 1, line.lineNumber, 1);
                    // var id = { major: 1, minor: 1 };             
                    // var text ="hello1";
                    // var op = {identifier: id, range: range, text: text, forceMoveMarkers: true};
                    // this.ed.executeEdits("my-source", [op]);
                }
            });
        });
    }
    selected(newValue) {
        console.log("hello", this.selectedValue);
        console.log("option", newValue);
        switch (newValue) {
            case "python":
                console.log('python');
                this.compiler = "https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/python27.php";
                break;
            case "C++":
                console.log('c++');
                this.compiler = "https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/cpp.php";
                break;
            case "java":
                console.log('java');
                this.compiler = "https://kubelearning10-c3dx5fi32q-uc.a.run.app/compilers/java.php";
                break;
            default:
                console.log("C");
                this.compiler = "https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/c.php";
        }
    }
    valuechange(newValue) {
        this.mymodel = newValue;
        console.log("xx", encodeURIComponent(newValue));
        console.log();
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("share").doc("lobopranayk9@gmail.com").set({
            code: encodeURIComponent(newValue),
            line: (encodeURIComponent(newValue).match(/%0A/g) || []).length + 1,
            email: "lobopranayk9@gmail.com"
        });
    }
    extractcode() {
        console.log(this.code1);
        var result = JSON.stringify(this.code1);
        console.log("hello", result);
        var obj = JSON.parse('{ "email":' + result + '}');
        console.log("bom", obj);
        this._enrolllmentService.enroll(obj).subscribe(data => console.log("success", data), error => console.error("error", error));
    }
    extractcode1() {
        console.log("hck", this.compiler);
        console.log(this.code1);
        console.log("hola", this.code2);
        var b = encodeURIComponent(this.code1);
        var c = encodeURIComponent(this.code2);
        console.log("code", b);
        console.log(c);
        // var c = JSON.parse('{"email":"'+b+'"}')
        this._enrolllmentService.enroll1(this.compiler, b, c).subscribe(data => {
            console.log("success", data);
            this.outputfinal = data['name'];
        }, error => console.error("error", error));
    }
    output() {
        this._enrolllmentService.enroll2().subscribe(data => {
            console.log("success", data);
            this.outputfinal = data['name'];
        }, error => console.error("error", error));
    }
};
EditorComponent.ctorParameters = () => [
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"] }
];
EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")).default]
    })
], EditorComponent);



/***/ }),

/***/ "./src/app/editor/editor.service.ts":
/*!******************************************!*\
  !*** ./src/app/editor/editor.service.ts ***!
  \******************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EditorService = class EditorService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/setcode';
        this._url1 = 'https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/c.php';
        this._url2 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/output';
    }
    enroll(user) {
        console.log("chapak", user);
        return this._http.post(this._url, user);
    }
    enroll1(code, user, c) {
        var user1 = {
            email: user,
            input: c
        };
        console.log("chapak", c);
        console.log("chapak", user1, code);
        return this._http.post(code, user1, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    }
    enroll2() {
        return this._http.get(this._url2);
    }
};
EditorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditorService);



/***/ }),

/***/ "./src/app/editor1/editor.service.ts":
/*!*******************************************!*\
  !*** ./src/app/editor1/editor.service.ts ***!
  \*******************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EditorService = class EditorService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/setcode';
        this._url1 = 'https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/c.php';
        this._url2 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/output';
    }
    enroll(user) {
        console.log("chapak", user);
        return this._http.post(this._url, user);
    }
    enroll1(code, user, c) {
        var user1 = {
            email: user,
            input: c
        };
        console.log("chapak", c);
        console.log("chapak", user1, code);
        return this._http.post(code, user1, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    }
    enroll2() {
        return this._http.get(this._url2);
    }
};
EditorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditorService);



/***/ }),

/***/ "./src/app/editor1/editor1.component.css":
/*!***********************************************!*\
  !*** ./src/app/editor1/editor1.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n\r\n    background-color:#1b262c;\r\n    color: white;\r\n\r\n  }\r\n\r\n  .cards {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n }\r\n\r\n  .example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n  #bgimg {\r\n  display: none;\r\n  \r\n }\r\n\r\n  .example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\n  h1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n  .example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n  .example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yMS9lZGl0b3IxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7RUFFRTtJQUNFLFdBQVc7O0lBRVgsd0JBQXdCO0lBQ3hCLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBNkI7WUFBN0IsNkJBQTZCO0NBQ2hDOztFQUNBO0VBQ0Msb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7RUFFQTtFQUNFLGFBQWE7O0NBRWQ7O0VBQ0Q7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLFVBQVU7QUFDWjs7RUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFOzBGQUN3RjtFQUN4RixtQkFBTztVQUFQLE9BQU87QUFDVDs7RUFFQTtFQUNFOytEQUM2RDtFQUM3RCxtQkFBYztVQUFkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IxL2VkaXRvcjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWIyNjJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICB9XHJcblxyXG4gIC5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiB9XHJcbiAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jYmdpbWcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgXHJcbiB9XHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/editor1/editor1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/editor1/editor1.component.ts ***!
  \**********************************************/
/*! exports provided: Editor1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor1Component", function() { return Editor1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor1/editor.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");








let Editor1Component = class Editor1Component {
    constructor(_interactionService, changeDetectorRef, media, dialog, _enrolllmentService) {
        this._interactionService = _interactionService;
        this.dialog = dialog;
        this._enrolllmentService = _enrolllmentService;
        this.editorOptions = { theme: 'vs-dark', language: 'c' };
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    onInit(editor) {
        this.ed = editor;
        this.line = this.ed.getPosition();
        console.log(this.line);
    }
    ngOnInit() {
        // switch (this.selected) {
        //   case "c++":
        //     alert( 'Too small' );
        //     break;
        //   case "java":
        //     alert( 'Exactly!' );
        //     break;
        //   case "python":
        //     alert( 'Too large' );
        //     break;
        //   default:
        //     alert( "I don't know such values" );
        // }
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("share").where("email", "==", "lobopranayk9@gmail.com")
            .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                var count = 0;
                if (change.type === "modified") {
                    console.log("Modified city: ", change.doc.data().code);
                    this.code1 = decodeURIComponent(change.doc.data().code);
                    // count =count+1;
                    // console.log("count",count)
                    // var line =  this.ed.getPosition();
                    // var range = new monaco.Range(line.lineNumber, 1, line.lineNumber, 1);
                    // var id = { major: 1, minor: 1 };             
                    // var text ="hello1";
                    // var op = {identifier: id, range: range, text: text, forceMoveMarkers: true};
                    // this.ed.executeEdits("my-source", [op]);
                }
            });
        });
    }
    selected(newValue) {
        console.log("hello", this.selectedValue);
        console.log("option", newValue);
        switch (newValue) {
            case "python":
                console.log('python');
                this.compiler = "https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/python27.php";
                break;
            case "C++":
                console.log('c++');
                this.compiler = "https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/cpp.php";
                break;
            case "java":
                console.log('java');
                this.compiler = "https://kubelearning10-c3dx5fi32q-uc.a.run.app/compilers/java.php";
                break;
            default:
                console.log("C");
                this.compiler = "https://compiler-git-kubectl-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/c.php";
        }
    }
    valuechange(newValue) {
        this.mymodel = newValue;
        console.log("xx", encodeURIComponent(newValue));
        console.log();
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("share").doc("lobopranayk9@gmail.com").set({
            code: encodeURIComponent(newValue),
            line: (encodeURIComponent(newValue).match(/%0A/g) || []).length + 1,
            email: "lobopranayk9@gmail.com"
        });
    }
    extractcode() {
        console.log(this.code1);
        var result = JSON.stringify(this.code1);
        console.log("hello", result);
        var obj = JSON.parse('{ "email":' + result + '}');
        console.log("bom", obj);
        this._enrolllmentService.enroll(obj).subscribe(data => console.log("success", data), error => console.error("error", error));
    }
    extractcode1() {
        console.log("hck", this.compiler);
        console.log(this.code1);
        console.log("hola", this.code2);
        var b = encodeURIComponent(this.code1);
        var c = encodeURIComponent(this.code2);
        console.log("code", b);
        console.log(c);
        // var c = JSON.parse('{"email":"'+b+'"}')
        this._enrolllmentService.enroll1(this.compiler, b, c).subscribe(data => {
            console.log("success", data);
            this.outputfinal = data['name'];
        }, error => console.error("error", error));
    }
    output() {
        this._enrolllmentService.enroll2().subscribe(data => {
            console.log("success", data);
            this.outputfinal = data['name'];
        }, error => console.error("error", error));
    }
};
Editor1Component.ctorParameters = () => [
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"] }
];
Editor1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editor1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor1/editor1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor1.component.css */ "./src/app/editor1/editor1.component.css")).default]
    })
], Editor1Component);



/***/ }),

/***/ "./src/app/editquiz/editquiz.component.css":
/*!*************************************************!*\
  !*** ./src/app/editquiz/editquiz.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n   /*  */\r\n\r\n   /* .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  } */\r\n\r\n   /* body{\r\n    background-color: #F3F7F7; \r\n} */\r\n\r\n   @media (min-width: 320px) and (max-width: 767px) {\r\n  .radio-toolbar input[type=\"radio\"]:focus + label {\r\n    border: 2px dashed #444;\r\n  }\r\n  \r\n  /* .radio-toolbar input[type=\"radio\"]:focus + label {\r\n    background-color: #dfd;\r\n    border-color: #468284;\r\n  } */\r\n  .radio-toolbar input[type=\"radio\"] {\r\n  opacity: 0;\r\n  position: fixed;\r\n  width: 0;\r\n  }\r\n  .radio-toolbar {\r\n  margin: 0 10px;\r\n  }\r\n  .radio-toolbar label {\r\n    background-color: #95c8d8;\r\n    color: darkblue;\r\n    padding: 10px 20px;\r\n    font-family: sans-serif, Arial;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .radio-toolbar label:hover {\r\n  background-color: #dfd;\r\n  }\r\n  \r\n  #com_body {\r\n    background: #F3F7F7;\r\n  }\r\n  .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  }\r\n  #topbar{\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 4%;\r\n      \r\n      \r\n  }\r\n  .example-section {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .example-section-man {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .card {\r\n      background: #fff;\r\n      border-radius: 2px;\r\n      margin: 1rem;\r\n  \r\n    }\r\n    .example-margin {\r\n      color: black;\r\n      font-size: medium;\r\n      \r\n    }\r\n    .card-3 {\r\n      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    }\r\n    #card1{\r\n      \r\n      margin-top: 10px;\r\n      margin-left: 2%;\r\n      color: #1b1b1b;\r\n      min-height: 580px;\r\n  \r\n      \r\n  }\r\n  #ctitle{\r\n      color: #1b1b1b;\r\n      font-weight: bold;\r\n      font-family:  monospace;\r\n      margin-top: 0.5%;\r\n      font-size: 300%;\r\n      text-shadow: 1.5px 1.5px #252A41;\r\n      \r\n  }\r\n  .edit:hover {\r\n    color: #1b1b1b;\r\n  }\r\n  .addtc:hover {\r\n    color: white;\r\n  }\r\n  .mat-stepper-horizontal {\r\n      margin-top: 8px;\r\n    }\r\n    \r\n    .mat-form-field {\r\n      margin-top: 16px;\r\n    }\r\n \r\n\r\n .example-container {\r\n   display: -webkit-box;\r\n   display: flex;\r\n   -webkit-box-orient: vertical;\r\n   -webkit-box-direction: normal;\r\n           flex-direction: column;\r\n   position: absolute;\r\n   top: 0;\r\n   bottom: 0;\r\n   left: 0;\r\n   right: 0;\r\n }\r\n \r\n .example-is-mobile .example-toolbar {\r\n   position: fixed;\r\n   /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n   z-index: 2;\r\n }\r\n \r\n h1.example-app-name {\r\n   margin-left: 8px;\r\n }\r\n \r\n .example-sidenav-container {\r\n   /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n      causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n   -webkit-box-flex: 1;\r\n           flex: 1;\r\n }\r\n \r\n .example-is-mobile .example-sidenav-container {\r\n   /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n      `<body>` to be our scrolling element for mobile layouts. */\r\n   -webkit-box-flex: 1;\r\n           flex: 1 0 auto;\r\n }\r\n \r\n \r\n .medium{\r\n   display:none\r\n }\r\n .large{\r\n   display:none\r\n }\r\n \r\n .chote{\r\n   display:block\r\n   \r\n }\r\n .desktop{\r\n  display:none\r\n  \r\n}\r\n\r\n }\r\n\r\n   @media (min-width: 700px) and (max-width: 900px) {\r\n  .radio-toolbar input[type=\"radio\"]:focus + label {\r\n    border: 2px dashed #444;\r\n  }\r\n  \r\n  /* .radio-toolbar input[type=\"radio\"]:focus + label {\r\n    background-color: #dfd;\r\n    border-color: #468284;\r\n  } */\r\n  .radio-toolbar input[type=\"radio\"] {\r\n  opacity: 0;\r\n  position: fixed;\r\n  width: 0;\r\n  }\r\n  .radio-toolbar {\r\n  margin: 0 10px;\r\n  }\r\n  .radio-toolbar label {\r\n    background-color: #95c8d8;\r\n    color: darkblue;\r\n    padding: 10px 20px;\r\n    font-family: sans-serif, Arial;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .radio-toolbar label:hover {\r\n  background-color: #dfd;\r\n  }\r\n \r\n  #com_body {\r\n    background: #F3F7F7;\r\n  }\r\n  .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  }\r\n  #topbar{\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 4%;\r\n      \r\n      \r\n  }\r\n  .example-section {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .example-section-man {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .card {\r\n      background: #fff;\r\n      border-radius: 2px;\r\n      margin: 1rem;\r\n  \r\n    }\r\n    .example-margin {\r\n      color: black;\r\n      font-size: medium;\r\n      \r\n    }\r\n    .card-3 {\r\n      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    }\r\n    #card1{\r\n      \r\n      margin-top: 10px;\r\n      margin-left: 2%;\r\n      color: #1b1b1b;\r\n      min-height: 580px;\r\n  \r\n      \r\n  }\r\n  #ctitle{\r\n      color: #1b1b1b;\r\n      font-weight: bold;\r\n      font-family:  monospace;\r\n      margin-top: 0.5%;\r\n      font-size: 300%;\r\n      text-shadow: 1.5px 1.5px #252A41;\r\n      \r\n  }\r\n  .edit:hover {\r\n    color: #1b1b1b;\r\n  }\r\n  .addtc:hover {\r\n    color: white;\r\n  }\r\n  .mat-stepper-horizontal {\r\n      margin-top: 8px;\r\n    }\r\n    \r\n    .mat-form-field {\r\n      margin-top: 16px;\r\n    }\r\n \r\n\r\n.example-container {\r\n display: -webkit-box;\r\n display: flex;\r\n -webkit-box-orient: vertical;\r\n -webkit-box-direction: normal;\r\n         flex-direction: column;\r\n position: absolute;\r\n top: 0;\r\n bottom: 0;\r\n left: 0;\r\n right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n position: fixed;\r\n /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n    causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n -webkit-box-flex: 1;\r\n         flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n    `<body>` to be our scrolling element for mobile layouts. */\r\n -webkit-box-flex: 1;\r\n         flex: 1 0 auto;\r\n}\r\n\r\n\r\n.medium{\r\n display:block\r\n} \r\n.large{\r\n display:none\r\n}\r\n\r\n.chote{\r\n display:none\r\n \r\n}\r\n\r\n.desktop{\r\n display:none\r\n \r\n}\r\n}\r\n\r\n   /* tabs */\r\n\r\n   @media (min-width: 901px) and (max-width: 1024px) {\r\n  .radio-toolbar input[type=\"radio\"]:focus + label {\r\n    border: 2px dashed #444;\r\n  }\r\n  \r\n  /* .radio-toolbar input[type=\"radio\"]:focus + label {\r\n    background-color: #dfd;\r\n    border-color: #468284;\r\n  } */\r\n  .radio-toolbar input[type=\"radio\"] {\r\n  opacity: 0;\r\n  position: fixed;\r\n  width: 0;\r\n  }\r\n  .radio-toolbar {\r\n  margin: 0 10px;\r\n  }\r\n  .radio-toolbar label {\r\n    background-color: #95c8d8;\r\n    color: darkblue;\r\n    padding: 10px 20px;\r\n    font-family: sans-serif, Arial;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .radio-toolbar label:hover {\r\n  background-color: #dfd;\r\n  }\r\n  #com_body {\r\n    background: #F3F7F7;\r\n  }\r\n  .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  }\r\n  #topbar{\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 4%;\r\n      \r\n      \r\n  }\r\n  .example-section {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .example-section-man {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .card {\r\n      background: #fff;\r\n      border-radius: 2px;\r\n      margin: 1rem;\r\n  \r\n    }\r\n    .example-margin {\r\n      color: black;\r\n      font-size: medium;\r\n      \r\n    }\r\n    .card-3 {\r\n      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    }\r\n    #card1{\r\n      \r\n      margin-top: 10px;\r\n      margin-left: 2%;\r\n      color: #1b1b1b;\r\n      min-height: 580px;\r\n  \r\n      \r\n  }\r\n  #ctitle{\r\n      color: #1b1b1b;\r\n      font-weight: bold;\r\n      font-family:  monospace;\r\n      margin-top: 0.5%;\r\n      font-size: 300%;\r\n      text-shadow: 1.5px 1.5px #252A41;\r\n      \r\n  }\r\n  .edit:hover {\r\n    color: #1b1b1b;\r\n  }\r\n  .addtc:hover {\r\n    color: white;\r\n  }\r\n  .mat-stepper-horizontal {\r\n      margin-top: 8px;\r\n    }\r\n    \r\n    .mat-form-field {\r\n      margin-top: 16px;\r\n    }\r\n \r\n  \r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n   }\r\n .example-is-mobile .example-toolbar {\r\n   position: fixed;\r\n   /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n   z-index: 2;\r\n }\r\n \r\n h1.example-app-name {\r\n   margin-left: 8px;\r\n }\r\n \r\n .example-sidenav-container {\r\n   /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n      causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n   -webkit-box-flex: 1;\r\n           flex: 1;\r\n }\r\n \r\n .example-is-mobile .example-sidenav-container {\r\n   /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n      `<body>` to be our scrolling element for mobile layouts. */\r\n   -webkit-box-flex: 1;\r\n           flex: 1 0 auto;\r\n }\r\n/* Container holding the image and the text */\r\n\r\n.medium{\r\n  display:none\r\n}\r\n.large{\r\n  display:block\r\n}\r\n\r\n.chote{\r\n  display:none\r\n  \r\n}\r\n.desktop{\r\n display:none\r\n \r\n}\r\n }\r\n\r\n   @media (min-width: 1025px) {\r\n\r\n\r\n  /* bade */\r\n  \r\n  #com_body {\r\n    background: #F3F7F7;\r\n  }\r\n  .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  }\r\n  #topbar{\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 4%;\r\n      \r\n      \r\n  }\r\n  .example-section {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .example-section-man {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      align-content: center;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n  \r\n    }\r\n    .card {\r\n      background: #fff;\r\n      border-radius: 2px;\r\n      margin: 1rem;\r\n  \r\n    }\r\n    .example-margin {\r\n      color: black;\r\n      font-size: medium;\r\n      \r\n    }\r\n    .card-3 {\r\n      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    }\r\n    #card1{\r\n      \r\n      margin-top: 10px;\r\n      margin-left: 2%;\r\n      color: #1b1b1b;\r\n      width: 680px;\r\n      min-height: 580px;\r\n  \r\n      \r\n  }\r\n  #ctitle{\r\n      color: #1b1b1b;\r\n      font-weight: bold;\r\n      font-family:  monospace;\r\n      margin-top: 0.5%;\r\n      font-size: 300%;\r\n      text-shadow: 1.5px 1.5px #252A41;\r\n      \r\n  }\r\n  .edit:hover {\r\n    color: #1b1b1b;\r\n  }\r\n  .addtc:hover {\r\n    color: white;\r\n  }\r\n  .mat-stepper-horizontal {\r\n      margin-top: 8px;\r\n    }\r\n    \r\n    .mat-form-field {\r\n      margin-top: 16px;\r\n    }\r\n  .example-container {\r\n   display: -webkit-box;\r\n   display: flex;\r\n   -webkit-box-orient: vertical;\r\n   -webkit-box-direction: normal;\r\n           flex-direction: column;\r\n   position: absolute;\r\n   top: 0;\r\n   bottom: 0;\r\n   left: 0;\r\n   right: 0;\r\n }\r\n \r\n\r\n .example-is-mobile .example-toolbar {\r\n   position: fixed;\r\n   /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n   z-index: 2;\r\n }\r\n \r\n h1.example-app-name {\r\n   margin-left: 8px;\r\n }\r\n \r\n .example-sidenav-container {\r\n   /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n      causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n   -webkit-box-flex: 1;\r\n           flex: 1;\r\n }\r\n \r\n .example-is-mobile .example-sidenav-container {\r\n   /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n      `<body>` to be our scrolling element for mobile layouts. */\r\n   -webkit-box-flex: 1;\r\n           flex: 1 0 auto;\r\n }\r\n/* Container holding the image and the text */\r\n\r\n  .medium{\r\n    display:none\r\n  }\r\n  .large{\r\n    display:none\r\n  }\r\n  \r\n  .chote{\r\n    display:none\r\n    \r\n  }\r\n  .desktop{\r\n   display:block\r\n   \r\n }\r\n .radio-toolbar input[type=\"radio\"]:focus + label {\r\n  border: 2px dashed #444;\r\n}\r\n\r\n/* .radio-toolbar input[type=\"radio\"]:focus + label {\r\n  background-color: #dfd;\r\n  border-color: #468284;\r\n} */\r\n.radio-toolbar input[type=\"radio\"] {\r\nopacity: 0;\r\nposition: fixed;\r\nwidth: 0;\r\nborder: 2px dashed #444;\r\n}\r\n.radio-toolbar {\r\nmargin: 0 10px;\r\n}\r\n.radio-toolbar label {\r\n  background-color: #95c8d8;\r\n  color: darkblue;\r\n  padding: 10px 20px;\r\n  font-family: sans-serif, Arial;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.radio-toolbar label:hover {\r\nbackground-color: #dfd;\r\n}\r\n }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHF1aXovZWRpdHF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7R0FHRyxLQUFLOztHQUVMOztLQUVFOztHQUNIOztHQUVDOztHQUtIO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7OztLQUdHO0VBQ0g7RUFDQSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFFBQVE7RUFDUjtFQUNBO0VBQ0EsY0FBYztFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7RUFDQSxzQkFBc0I7RUFDdEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO01BQ0ksdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxVQUFVOzs7RUFHZDtFQUNBO01BQ0ksb0JBQWE7TUFBYixhQUFhO01BQ2IscUJBQXFCO01BQ3JCLHlCQUFtQjtjQUFuQixtQkFBbUI7O0lBRXJCO0lBQ0E7TUFDRSxvQkFBYTtNQUFiLGFBQWE7TUFDYixxQkFBcUI7TUFDckIseUJBQW1CO2NBQW5CLG1CQUFtQjs7SUFFckI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsWUFBWTs7SUFFZDtJQUNBO01BQ0UsWUFBWTtNQUNaLGlCQUFpQjs7SUFFbkI7SUFDQTtNQUNFLG9FQUFvRTtJQUN0RTtJQUNBOztNQUVFLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsY0FBYztNQUNkLGlCQUFpQjs7O0VBR3JCO0VBQ0E7TUFDSSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdDQUFnQzs7RUFFcEM7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO01BQ0ksZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7O0NBR0g7R0FDRSxvQkFBYTtHQUFiLGFBQWE7R0FDYiw0QkFBc0I7R0FBdEIsNkJBQXNCO1dBQXRCLHNCQUFzQjtHQUN0QixrQkFBa0I7R0FDbEIsTUFBTTtHQUNOLFNBQVM7R0FDVCxPQUFPO0dBQ1AsUUFBUTtDQUNWOztDQUVBO0dBQ0UsZUFBZTtHQUNmLDhFQUE4RTtHQUM5RSxVQUFVO0NBQ1o7O0NBRUE7R0FDRSxnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRTsyRkFDd0Y7R0FDeEYsbUJBQU87V0FBUCxPQUFPO0NBQ1Q7O0NBRUE7R0FDRTtnRUFDNkQ7R0FDN0QsbUJBQWM7V0FBZCxjQUFjO0NBQ2hCOzs7Q0FHQTtHQUNFO0NBQ0Y7Q0FDQTtHQUNFO0NBQ0Y7O0NBRUE7R0FDRTs7Q0FFRjtDQUNBO0VBQ0M7O0FBRUY7O0NBRUM7O0dBR0E7RUFDQztJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTs7O0tBR0c7RUFDSDtFQUNBLFVBQVU7RUFDVixlQUFlO0VBQ2YsUUFBUTtFQUNSO0VBQ0E7RUFDQSxjQUFjO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtFQUNBLHNCQUFzQjtFQUN0Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSx1QkFBdUI7TUFDdkIsV0FBVztNQUNYLFVBQVU7OztFQUdkO0VBQ0E7TUFDSSxvQkFBYTtNQUFiLGFBQWE7TUFDYixxQkFBcUI7TUFDckIseUJBQW1CO2NBQW5CLG1CQUFtQjs7SUFFckI7SUFDQTtNQUNFLG9CQUFhO01BQWIsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQix5QkFBbUI7Y0FBbkIsbUJBQW1COztJQUVyQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixZQUFZOztJQUVkO0lBQ0E7TUFDRSxZQUFZO01BQ1osaUJBQWlCOztJQUVuQjtJQUNBO01BQ0Usb0VBQW9FO0lBQ3RFO0lBQ0E7O01BRUUsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixjQUFjO01BQ2QsaUJBQWlCOzs7RUFHckI7RUFDQTtNQUNJLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsZ0NBQWdDOztFQUVwQztFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7TUFDSSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOzs7QUFHSjtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLDRCQUFzQjtDQUF0Qiw2QkFBc0I7U0FBdEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sU0FBUztDQUNULE9BQU87Q0FDUCxRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsOEVBQThFO0NBQzlFLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDO3lGQUN3RjtDQUN4RixtQkFBTztTQUFQLE9BQU87QUFDUjs7QUFFQTtDQUNDOzhEQUM2RDtDQUM3RCxtQkFBYztTQUFkLGNBQWM7QUFDZjs7O0FBR0E7Q0FDQztBQUNEO0FBQ0E7Q0FDQztBQUNEOztBQUVBO0NBQ0M7O0FBRUQ7O0FBRUE7Q0FDQzs7QUFFRDtBQUNBOztHQUtDLFNBQVM7O0dBQ1Q7RUFDQztJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTs7O0tBR0c7RUFDSDtFQUNBLFVBQVU7RUFDVixlQUFlO0VBQ2YsUUFBUTtFQUNSO0VBQ0E7RUFDQSxjQUFjO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtFQUNBLHNCQUFzQjtFQUN0QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtNQUNJLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gsVUFBVTs7O0VBR2Q7RUFDQTtNQUNJLG9CQUFhO01BQWIsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQix5QkFBbUI7Y0FBbkIsbUJBQW1COztJQUVyQjtJQUNBO01BQ0Usb0JBQWE7TUFBYixhQUFhO01BQ2IscUJBQXFCO01BQ3JCLHlCQUFtQjtjQUFuQixtQkFBbUI7O0lBRXJCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLFlBQVk7O0lBRWQ7SUFDQTtNQUNFLFlBQVk7TUFDWixpQkFBaUI7O0lBRW5CO0lBQ0E7TUFDRSxvRUFBb0U7SUFDdEU7SUFDQTs7TUFFRSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGNBQWM7TUFDZCxpQkFBaUI7OztFQUdyQjtFQUNBO01BQ0ksY0FBYztNQUNkLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixnQ0FBZ0M7O0VBRXBDO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtNQUNJLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7OztFQUdGO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7R0FDVDtDQUNGO0dBQ0UsZUFBZTtHQUNmLDhFQUE4RTtHQUM5RSxVQUFVO0NBQ1o7O0NBRUE7R0FDRSxnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRTsyRkFDd0Y7R0FDeEYsbUJBQU87V0FBUCxPQUFPO0NBQ1Q7O0NBRUE7R0FDRTtnRUFDNkQ7R0FDN0QsbUJBQWM7V0FBZCxjQUFjO0NBQ2hCO0FBQ0QsNkNBQTZDOztBQUU3QztFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTs7QUFFRjtBQUNBO0NBQ0M7O0FBRUQ7Q0FDQzs7R0FHQTs7O0VBR0MsU0FBUzs7RUFFVDtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSx1QkFBdUI7TUFDdkIsV0FBVztNQUNYLFVBQVU7OztFQUdkO0VBQ0E7TUFDSSxvQkFBYTtNQUFiLGFBQWE7TUFDYixxQkFBcUI7TUFDckIseUJBQW1CO2NBQW5CLG1CQUFtQjs7SUFFckI7SUFDQTtNQUNFLG9CQUFhO01BQWIsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQix5QkFBbUI7Y0FBbkIsbUJBQW1COztJQUVyQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixZQUFZOztJQUVkO0lBQ0E7TUFDRSxZQUFZO01BQ1osaUJBQWlCOztJQUVuQjtJQUNBO01BQ0Usb0VBQW9FO0lBQ3RFO0lBQ0E7O01BRUUsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixjQUFjO01BQ2QsWUFBWTtNQUNaLGlCQUFpQjs7O0VBR3JCO0VBQ0E7TUFDSSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdDQUFnQzs7RUFFcEM7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO01BQ0ksZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGO0dBQ0Msb0JBQWE7R0FBYixhQUFhO0dBQ2IsNEJBQXNCO0dBQXRCLDZCQUFzQjtXQUF0QixzQkFBc0I7R0FDdEIsa0JBQWtCO0dBQ2xCLE1BQU07R0FDTixTQUFTO0dBQ1QsT0FBTztHQUNQLFFBQVE7Q0FDVjs7O0NBR0E7R0FDRSxlQUFlO0dBQ2YsOEVBQThFO0dBQzlFLFVBQVU7Q0FDWjs7Q0FFQTtHQUNFLGdCQUFnQjtDQUNsQjs7Q0FFQTtHQUNFOzJGQUN3RjtHQUN4RixtQkFBTztXQUFQLE9BQU87Q0FDVDs7Q0FFQTtHQUNFO2dFQUM2RDtHQUM3RCxtQkFBYztXQUFkLGNBQWM7Q0FDaEI7QUFDRCw2Q0FBNkM7O0VBRTNDO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFOztFQUVGO0VBQ0E7R0FDQzs7Q0FFRjtDQUNBO0VBQ0MsdUJBQXVCO0FBQ3pCOztBQUVBOzs7R0FHRztBQUNIO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixRQUFRO0FBQ1IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtDQUNDIiwiZmlsZSI6InNyYy9hcHAvZWRpdHF1aXovZWRpdHF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiAgIC8qICAqL1xyXG5cclxuICAgLyogLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfSAqL1xyXG4gIC8qIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0Y3OyBcclxufSAqL1xyXG5cclxuICBcclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNDQ0O1xyXG4gIH1cclxuICBcclxuICAvKiAucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDY4Mjg0O1xyXG4gIH0gKi9cclxuICAucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAwO1xyXG4gIH1cclxuICAucmFkaW8tdG9vbGJhciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG4gIC5yYWRpby10b29sYmFyIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NWM4ZDg7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgQXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLXRvb2xiYXIgbGFiZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ7XHJcbiAgfVxyXG4gIFxyXG4gICNjb21fYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGN0Y3O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgI3RvcGJhcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQlO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgfVxyXG4gIC5leGFtcGxlLXNlY3Rpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZS1zZWN0aW9uLW1hbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZS1tYXJnaW4ge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5jYXJkLTMge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIH1cclxuICAgICNjYXJkMXtcclxuICAgICAgXHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDU4MHB4O1xyXG4gIFxyXG4gICAgICBcclxuICB9XHJcbiAgI2N0aXRsZXtcclxuICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luLXRvcDogMC41JTtcclxuICAgICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5lZGl0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gIH1cclxuICAuYWRkdGM6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuIFxyXG5cclxuIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiAwO1xyXG4gICBib3R0b206IDA7XHJcbiAgIGxlZnQ6IDA7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gfVxyXG4gXHJcbiAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICB6LWluZGV4OiAyO1xyXG4gfVxyXG4gXHJcbiBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuIH1cclxuIFxyXG4gLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgIGZsZXg6IDE7XHJcbiB9XHJcbiBcclxuIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gfVxyXG4gXHJcbiBcclxuIC5tZWRpdW17XHJcbiAgIGRpc3BsYXk6bm9uZVxyXG4gfVxyXG4gLmxhcmdle1xyXG4gICBkaXNwbGF5Om5vbmVcclxuIH1cclxuIFxyXG4gLmNob3Rle1xyXG4gICBkaXNwbGF5OmJsb2NrXHJcbiAgIFxyXG4gfVxyXG4gLmRlc2t0b3B7XHJcbiAgZGlzcGxheTpub25lXHJcbiAgXHJcbn1cclxuXHJcbiB9XHJcbiBcclxuXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNDQ0O1xyXG4gIH1cclxuICBcclxuICAvKiAucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDY4Mjg0O1xyXG4gIH0gKi9cclxuICAucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAwO1xyXG4gIH1cclxuICAucmFkaW8tdG9vbGJhciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG4gIC5yYWRpby10b29sYmFyIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NWM4ZDg7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgQXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLXRvb2xiYXIgbGFiZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ7XHJcbiAgfVxyXG4gXHJcbiAgI2NvbV9ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNGM0Y3Rjc7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICAjdG9wYmFye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNCU7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICB9XHJcbiAgLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgIH1cclxuICAgIC5leGFtcGxlLXNlY3Rpb24tbWFuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICBcclxuICAgIH1cclxuICAgIC5leGFtcGxlLW1hcmdpbiB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNhcmQtMyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgfVxyXG4gICAgI2NhcmQxe1xyXG4gICAgICBcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgbWluLWhlaWdodDogNTgwcHg7XHJcbiAgXHJcbiAgICAgIFxyXG4gIH1cclxuICAjY3RpdGxle1xyXG4gICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjUlO1xyXG4gICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gICAgICBcclxuICB9XHJcbiAgLmVkaXQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgfVxyXG4gIC5hZGR0Yzpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB0b3A6IDA7XHJcbiBib3R0b206IDA7XHJcbiBsZWZ0OiAwO1xyXG4gcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuIHBvc2l0aW9uOiBmaXhlZDtcclxuIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG5cclxuLm1lZGl1bXtcclxuIGRpc3BsYXk6YmxvY2tcclxufSBcclxuLmxhcmdle1xyXG4gZGlzcGxheTpub25lXHJcbn1cclxuXHJcbi5jaG90ZXtcclxuIGRpc3BsYXk6bm9uZVxyXG4gXHJcbn1cclxuXHJcbi5kZXNrdG9we1xyXG4gZGlzcGxheTpub25lXHJcbiBcclxufVxyXG59XHJcblxyXG4gXHJcbiBcclxuIFxyXG4gLyogdGFicyAqL1xyXG4gQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnJhZGlvLXRvb2xiYXIgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzICsgbGFiZWwge1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICM0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NjgyODQ7XHJcbiAgfSAqL1xyXG4gIC5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIC5yYWRpby10b29sYmFyIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgLnJhZGlvLXRvb2xiYXIgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YzhkODtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucmFkaW8tdG9vbGJhciBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZDtcclxuICB9XHJcbiAgI2NvbV9ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNGM0Y3Rjc7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICAjdG9wYmFye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNCU7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICB9XHJcbiAgLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgIH1cclxuICAgIC5leGFtcGxlLXNlY3Rpb24tbWFuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICBcclxuICAgIH1cclxuICAgIC5leGFtcGxlLW1hcmdpbiB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNhcmQtMyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgfVxyXG4gICAgI2NhcmQxe1xyXG4gICAgICBcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgbWluLWhlaWdodDogNTgwcHg7XHJcbiAgXHJcbiAgICAgIFxyXG4gIH1cclxuICAjY3RpdGxle1xyXG4gICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjUlO1xyXG4gICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gICAgICBcclxuICB9XHJcbiAgLmVkaXQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgfVxyXG4gIC5hZGR0Yzpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gXHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICB9XHJcbiAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICB6LWluZGV4OiAyO1xyXG4gfVxyXG4gXHJcbiBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuIH1cclxuIFxyXG4gLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgIGZsZXg6IDE7XHJcbiB9XHJcbiBcclxuIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gfVxyXG4vKiBDb250YWluZXIgaG9sZGluZyB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0ICovXHJcblxyXG4ubWVkaXVte1xyXG4gIGRpc3BsYXk6bm9uZVxyXG59XHJcbi5sYXJnZXtcclxuICBkaXNwbGF5OmJsb2NrXHJcbn1cclxuXHJcbi5jaG90ZXtcclxuICBkaXNwbGF5Om5vbmVcclxuICBcclxufVxyXG4uZGVza3RvcHtcclxuIGRpc3BsYXk6bm9uZVxyXG4gXHJcbn1cclxuIH1cclxuXHJcbiBcclxuIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuXHJcblxyXG4gIC8qIGJhZGUgKi9cclxuICBcclxuICAjY29tX2JvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI0YzRjdGNztcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gICN0b3BiYXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0JTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gIH1cclxuICAuZXhhbXBsZS1zZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLmV4YW1wbGUtc2VjdGlvbi1tYW4ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLmV4YW1wbGUtbWFyZ2luIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuY2FyZC0zIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICB9XHJcbiAgICAjY2FyZDF7XHJcbiAgICAgIFxyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDU4MHB4O1xyXG4gIFxyXG4gICAgICBcclxuICB9XHJcbiAgI2N0aXRsZXtcclxuICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luLXRvcDogMC41JTtcclxuICAgICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5lZGl0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gIH1cclxuICAuYWRkdGM6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHRvcDogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICBsZWZ0OiAwO1xyXG4gICByaWdodDogMDtcclxuIH1cclxuIFxyXG5cclxuIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgIHotaW5kZXg6IDI7XHJcbiB9XHJcbiBcclxuIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gfVxyXG4gXHJcbiAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgZmxleDogMTtcclxuIH1cclxuIFxyXG4gLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgZmxleDogMSAwIGF1dG87XHJcbiB9XHJcbi8qIENvbnRhaW5lciBob2xkaW5nIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQgKi9cclxuXHJcbiAgLm1lZGl1bXtcclxuICAgIGRpc3BsYXk6bm9uZVxyXG4gIH1cclxuICAubGFyZ2V7XHJcbiAgICBkaXNwbGF5Om5vbmVcclxuICB9XHJcbiAgXHJcbiAgLmNob3Rle1xyXG4gICAgZGlzcGxheTpub25lXHJcbiAgICBcclxuICB9XHJcbiAgLmRlc2t0b3B7XHJcbiAgIGRpc3BsYXk6YmxvY2tcclxuICAgXHJcbiB9XHJcbiAucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICM0NDQ7XHJcbn1cclxuXHJcbi8qIC5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ2ODI4NDtcclxufSAqL1xyXG4ucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG5vcGFjaXR5OiAwO1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbndpZHRoOiAwO1xyXG5ib3JkZXI6IDJweCBkYXNoZWQgIzQ0NDtcclxufVxyXG4ucmFkaW8tdG9vbGJhciB7XHJcbm1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5yYWRpby10b29sYmFyIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVjOGQ4O1xyXG4gIGNvbG9yOiBkYXJrYmx1ZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yYWRpby10b29sYmFyIGxhYmVsOmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2RmZDtcclxufVxyXG4gfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/editquiz/editquiz.component.ts":
/*!************************************************!*\
  !*** ./src/app/editquiz/editquiz.component.ts ***!
  \************************************************/
/*! exports provided: EditquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditquizComponent", function() { return EditquizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editquiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editquiz.service */ "./src/app/editquiz/editquiz.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_del_program_del_program_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/del-program/del-program.component */ "./src/app/del-program/del-program.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog-body/dialog-body.component */ "./src/app/dialog-body/dialog-body.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");











let EditquizComponent = class EditquizComponent {
    constructor(dialog, changeDetectorRef, media, _snackBar, _editquizService, _formBuilder, matDialog) {
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this._editquizService = _editquizService;
        this._formBuilder = _formBuilder;
        this.matDialog = matDialog;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.pubmanstatus = true;
        this.checked = [];
        this.uename = true;
        this.addquiz = false;
        this.upprog1 = true;
        this.addprogtog = true;
        this.main = false;
        this.load = false;
        this.quiz = {
            "no": "",
            "name": "",
            "key": "",
            "ind": "",
            "topic": []
        };
        this.setArray = [];
        this.customArray = [];
        this.cusobj = {};
        this.opt = [];
        this.quizQues = [];
        this.scrapping = true;
        this.manual = [];
        this.topicarr = [];
        this.topic = {
            "tno": "",
            "tkey": "",
            "title": "",
            "url1": "",
            "url2": "",
            "ques": [],
            "totscore": 0,
        };
        this.totalscore = 0;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    checkAll() {
        console.log(this.checked1);
        if (this.checked1 == false) {
            for (let index = 0; index < this.u1.length; index++) {
                this.u1[index].select = true;
            }
        }
        else {
            for (let index = 0; index < this.u1.length; index++) {
                this.u1[index].select = false;
            }
        }
        console.log(this.ques, this.opa, this.opb, this.opc, this.opd);
    }
    addcq() {
        this.opt = [];
        this.opt.push(this.opa);
        this.opt.push(this.opb);
        this.opt.push(this.opc);
        this.opt.push(this.opd);
        if (this.opselect == 'A') {
            this.ans = this.opa;
        }
        else if (this.opselect == 'B') {
            this.ans = this.opb;
        }
        else if (this.opselect == 'C') {
            this.ans = this.opc;
        }
        else {
            this.ans = this.opd;
        }
        this.customArray.push({
            "question": this.ques,
            "option": this.opt,
            "answer": this.ans
        });
        for (let index = 0; index < this.customArray.length; index++) {
            this.customArray[index].id = index;
        }
        console.log(this.opselect);
        console.log(this.customArray);
    }
    saveall() {
        this.quizQues = [];
        this.quizQues = this.setArray;
        for (let index = 0; index < this.customArray.length; index++) {
            this.quizQues.push(this.customArray[index]);
        }
        // this.quizQues = {
        //   "scrapQues" : this.setArray,
        //   "custQues" : this.customArray
        // }
        console.log(this.setArray);
        console.log(this.quizQues);
    }
    check1() {
        this.setArray = [];
        // console.log(this.checked);
        // // console.log(this.checked1);
        // // this.len = this.checked.length;
        // for (let index = 0; index < this.checked.length; index++) {
        //   if(this.checked[index] == true){
        //     console.log(this.u1[index].id);
        //     this.setArray.push(this.u1[index]);
        //   }
        // }
        // console.log(this.setArray);
        for (let index = 0; index < this.u1.length; index++) {
            if (this.u1[index].select == true) {
                this.totalscore = this.totalscore + this.u1[index].score;
                console.log(this.u1[index]);
                this.setArray.push(this.u1[index]);
            }
        }
        console.log("scr", this.totalscore);
        console.log(this.u1);
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            quizno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            quizname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.uenameFormGroup = this._formBuilder.group({
            uexpname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.addprogFormGroup_pno = this._formBuilder.group({
            progno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_t = this._formBuilder.group({
            progtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_d = this._formBuilder.group({
            progurl1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.addprogFormGroup_ipf = this._formBuilder.group({
            progurl2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.updateman();
    }
    openDialog(i) {
        // this.delExkey = this.manual[i].key;
        this.delExname = this.manual[i].name;
        this.delExno = this.manual[i].no;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.data = {
            num: this.delExno,
            title: this.delExname
        };
        this.matDialog.open(src_app_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_7__["DialogBodyComponent"], dialogConfig);
        const dialogRef = this.matDialog.open(src_app_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_7__["DialogBodyComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            console.log("Dialog output:", data);
            this.deleteExp(data.name, i);
        });
    }
    deleteExp(name, i) {
        if (name == this.delExname) {
            console.log("Delete");
            // this.delExp.key = this.delExkey;
            this.deleteAt(this.manual, i);
        }
        else {
            this._snackBar.open("Experiment not Deleted", "OK", {
                duration: 90000,
            });
        }
    }
    delProg(i, j) {
        // this.delPkey = this.manual[i].topic[j].pkey;
        this.delPpno = this.manual[i].topic[j].tind + 1;
        this.delPeno = this.manual[i].ind + 1;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.data = {
            eno: this.delPeno,
            pno: this.delPpno,
        };
        this.matDialog.open(src_app_del_program_del_program_component__WEBPACK_IMPORTED_MODULE_5__["DelProgramComponent"], dialogConfig);
        const dialogRef = this.matDialog.open(src_app_del_program_del_program_component__WEBPACK_IMPORTED_MODULE_5__["DelProgramComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            console.log("Dialog output:", data);
            if (data == true) {
                this.deleteAt(this.manual[i].topic, j);
            }
        });
    }
    deleteAt(array, index) {
        // if(index == 0){
        //   array.splice(index,-1);
        // }
        // else if(index == 1){
        //   array.splice(index,1);
        // }
        // else {
        //   array.splice(index,index-1);
        // }
        array.splice(index, 1);
        console.log(this.manual);
        this.msg = "Quiz Deleted";
        this.updatequiz(this.msg);
    }
    heelo() {
        this.main = true;
        this.scrapping = false;
    }
    updateman() {
        this._editquizService.enroll2().subscribe(data => {
            console.log("success dash", data.manual);
            this.manual = data.manual;
            this.load = true;
            this.pubmanstatus = false;
            // this.tcip = [];
            // this.tcop = [];
        }, error => console.error("error", error));
    }
    scoreInd(k, v) {
        console.log(k, v);
        this.u1[k].score = Number(v);
    }
    addques() {
        this.key = this.addprogFormGroup_d.value.progurl1;
        this._editquizService.enroll1(this.key).subscribe(data => {
            console.log("success", data);
            this.obj = JSON.parse(data);
            console.log("s", this.obj);
            this.u1 = this.obj[this.key];
            console.log("u1", this.u1);
            console.log(this.u1);
        }, error => console.error("error", error));
        this.scrapping = false;
        this.main = true;
        this.opt = [];
    }
    //   publishman(){
    //     this._editlabmanualService.enroll7(this.manual).subscribe(
    //       data=>{ console.log("success dash",data);
    //       this._snackBar.open("Manual Published", "OK", {
    //         duration: 10000,
    //       });
    //     },
    //       error=>console.error("error",error))
    // }
    addprog() {
        var key = "ToBePulled_" + new Date().toString();
        this.topic.tno = this.addprogFormGroup_pno.value.progno;
        this.topic.tkey = key;
        this.topic.title = this.addprogFormGroup_t.value.progtitle;
        this.topic.url1 = this.addprogFormGroup_d.value.progurl1;
        this.topic.url2 = this.addprogFormGroup_ipf.value.progurl2;
        this.topic.ques = this.quizQues;
        this.topic.totscore = this.totalscore;
        var no = this.addprogFormGroup_pno.value.progno - 1;
        console.log(this.topic);
        this.topicarr = this.manual[this.quiznum - 1].topic;
        console.log(this.topicarr);
        this.insertAt1(this.topicarr, no, this.topic);
        this.manual[this.quiznum - 1].topic = this.topicarr;
        console.log(this.manual);
        this.msg = "Quiz Topic Added";
        this.updatequiz(this.msg);
        this.reset();
    }
    reset() {
        console.log("reset");
        this.main = false;
        this.scrapping = true;
        // this.addprogFormGroup_pno.value.progno = '';
        // this.addprogFormGroup_t.value.progtitle = '';
        // this.addprogFormGroup_d.value.progurl1 = '';
        // this.addprogFormGroup_ipf.value.progurl2 = '';
        this.topic = {
            "tno": "",
            "tkey": "",
            "title": "",
            "url1": "",
            "url2": "",
            "ques": [],
            "totscore": 0
        };
    }
    insertAt1(array, index, elements) {
        if (array == null) {
            array.push(elements);
            console.log(elements);
        }
        else {
            array.splice(index, 0, elements);
        }
        // array.splice(index, 0, elements);
        for (let i = 0; i < array.length; i++) {
            this.manual[this.quiznum - 1].topic[i].tind = i;
        }
    }
    insertAt(array, index, elements) {
        if (array == null) {
            array[0] = elements;
            console.log(elements);
        }
        else {
            array.splice(index, 0, elements);
        }
        for (let i = 0; i < array.length; i++) {
            this.manual[i].ind = i;
        }
    }
    updatequiz(message) {
        this._editquizService.enroll3(this.manual).subscribe(data => {
            console.log("success", data);
            this._snackBar.open(message, "OK", {
                duration: 10000,
            });
            // this.updateman();
        }, error => console.error("error", error));
    }
    ind_uename(eno) {
        console.log("gy");
        this.quiznum = this.manual[eno].ind + 1;
        this.quizind = eno;
        this.uename = false;
        this.addquiz = true;
        this.addprogtog = true;
        this.upprog1 = true;
        // if(this.addexp == true ){
        //   this.addexp = false;
        //   this.uename = true;
        // }
        // else {
        //   this.addexp = true;
        //   this.uename = false;
        // }
        console.log(this.addquiz);
    }
    ind_addprog(eno) {
        console.log("gyss", eno);
        this.quiznum = eno + 1;
        this.uename = true;
        this.addquiz = true;
        this.upprog1 = true;
        this.addprogtog = false;
        // this.tcip = [];
        // this.tcop = [];
    }
    upqname() {
        this.manual[this.quizind].name = this.uenameFormGroup.value.uexpname;
        this.msg = "Quiz Name Modified";
        this.updatequiz(this.msg);
    }
    done() {
        console.log("yoyo");
        var key = "ToBePulled_" + new Date().toString();
        console.log(key);
        this.quiz.no = this.firstFormGroup.value.quizno;
        this.quiz.name = this.secondFormGroup.value.quizname;
        this.quiz.key = key;
        // this.quiz.ind = key;
        console.log(this.firstFormGroup.value.quizno);
        var no = this.firstFormGroup.value.quizno - 1;
        this.insertAt(this.manual, no, this.quiz);
        this.msg = "Quiz Added";
        this.updatequiz(this.msg);
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    publishman() {
        this._editquizService.enroll4(this.manual).subscribe(data => {
            console.log("success dash", data);
            this._snackBar.open("Manual Published", "OK", {
                duration: 10000,
            });
        }, error => console.error("error", error));
    }
};
EditquizComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["MediaMatcher"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _editquiz_service__WEBPACK_IMPORTED_MODULE_2__["EditquizService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
EditquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editquiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editquiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editquiz/editquiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editquiz.component.css */ "./src/app/editquiz/editquiz.component.css")).default]
    })
], EditquizComponent);

// splice not deleting at 0,1
// new array pe splice not working
// 0: {id: 0, question: "What does the following function do for a given Li…(head->next);
// ↵  printf("%d  ", head->data);
// ↵}
// ↵", option: Array(4), answer: "Prints all nodes of linked list in reverse order"}
// 1: {id: 1, question: "Which of the following points is/are true about Li…ist data structure when it is compared with array", option: Array(5), answer: "All of the above"}
// 2: {id: 2, question: "Consider the following function that takes referen…the modified linked list after the function call?", option: Array(4), answer: "6 <--> 5 <--> 4 <--> 3 <--> 2 <--> 1."}
// 3: {id: 3, question: "Which of the following sorting algorithms can be u… random linked list with minimum time complexity?", option: Array(4), answer: "Merge Sort"}
// 4: {id: 4, question: "The following function reverse() is supposed to re…at the function correctly reverses a linked list.", option: Array(4), answer: "*head_ref = prev;"}
// 5: {id: 5, question: "What is the output of following function for start…next->next);
// ↵  printf("%d  ", start->data);
// ↵}
// ↵", option: Array(4), answer: "1  3  5 5 3 1"}
// 6: {id: 6, question: "The following C function takes a simply-linked lis…___________________________
// ↵  return head;
// ↵}
// ↵↵", option: Array(4), answer: "q->next = NULL; p->next = head; head = p;"}
// 7: {id: 7, question: "The following C function takes a single-linked lis…   p = q->next;
// ↵     q = p?p->next:0;
// ↵  }
// ↵}
// ↵↵", option: Array(4), answer: "2,1,4,3,6,5,7 "}
// 8: {id: 8, question: "In the worst case, the number of comparisons neede…ength n for a given element is (GATE CS 2002)
// ↵
// ↵", option: Array(4), answer: "n"}
// 9: {id: 9, question: "Suppose each set is represented as a linked list w…, cardinality will be the slowest? (GATE CS 2004)", option: Array(4), answer: "union, intersection"}
// length: 10
// __proto__: Array(0)


/***/ }),

/***/ "./src/app/editquiz/editquiz.service.ts":
/*!**********************************************!*\
  !*** ./src/app/editquiz/editquiz.service.ts ***!
  \**********************************************/
/*! exports provided: EditquizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditquizService", function() { return EditquizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EditquizService = class EditquizService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/putquiz';
        this._url1 = 'https://still-retreat-74767.herokuapp.com/postjson/data';
        this._url2 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getquizbook';
        this._url3 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/updatequiz';
        this._url4 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/publish_quizbook';
    }
    enroll(exp) {
        console.log(exp);
        return this._http.post(this._url, exp, { withCredentials: true });
    }
    enroll1(str) {
        var user1 = {
            list: [str],
        };
        // console.log("chapak",c)
        // console.log("chapak",user1)
        return this._http.post(this._url1, JSON.stringify(user1), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    }
    enroll2() {
        return this._http.get(this._url2, { withCredentials: true });
    }
    enroll3(quiz) {
        console.log(quiz);
        return this._http.post(this._url3, quiz, { withCredentials: true });
    }
    enroll4(quiz) {
        console.log(quiz);
        return this._http.post(this._url4, quiz, { withCredentials: true });
    }
};
EditquizService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditquizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditquizService);



/***/ }),

/***/ "./src/app/editteacher/editteacher.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editteacher/editteacher.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  \r\n\r\n\r\n@media (min-width: 320px) and (max-width: 767px) {\r\n  \r\n\r\n\r\n  #com_body {\r\n    background: white;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    }\r\n\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 2%;\r\n}\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41;\r\n    text-align: center; \r\n    \r\n}\r\n.card {\r\n    background: #fff;\r\n    \r\n    width: 200px;\r\n\r\n  }\r\n  .card-3 {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n  #card1{\r\n    margin-top:10%;\r\n\r\n    display: inline-block;\r\n\r\n}\r\n#card2{\r\n\r\n  margin-top:10%;\r\n \r\n  display: inline-block;\r\n\r\n}\r\n#card3{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 40%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n#card4{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 65%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n\r\n\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n  #disp{\r\n    display: none;\r\n  }\r\n\r\n } \r\n \r\n\r\n @media (min-width: 700px) and (max-width: 900px) {\r\n\r\n \r\n  #com_body {\r\n    background: white;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 2%;\r\n}\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41; \r\n    margin-left: 180px;\r\n}\r\n.card {\r\n  background: #fff;\r\n  \r\n  width: 200px;\r\n\r\n}\r\n.card-3 {\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n#card1{\r\n  margin-top:10%;\r\n\r\n  display: inline-block;\r\n\r\n}\r\n#card2{\r\n\r\nmargin-top:10%;\r\nmargin-left:10%;\r\n\r\n\r\n\r\ndisplay: inline-block;\r\n\r\n}\r\n#card3{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 40%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n#card4{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 65%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n\r\n\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n\r\n\r\n\r\n\r\n} \r\n \r\n\r\n /* tabs */ \r\n \r\n\r\n @media (min-width: 901px) and (max-width: 1024px) {\r\n  \r\n  #com_body {\r\n    background: white;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 2%;\r\n}\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41; \r\n    margin-left: 180px;\r\n}\r\n.card {\r\n  background: #fff;\r\n  \r\n  width: 200px;\r\n\r\n}\r\n.card-3 {\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n#card1{\r\n  margin-top:10%;\r\n\r\n  display: inline-block;\r\n\r\n}\r\n#card2{\r\n\r\nmargin-top:10%;\r\nmargin-left:10%;\r\n\r\n\r\n\r\ndisplay: inline-block;\r\n\r\n}\r\n#card3{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 40%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n#card4{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 65%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n\r\n\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n } \r\n \r\n\r\n @media (min-width: 1025px) {\r\n\r\n\r\n\r\n  #com_body {\r\n    background: white;\r\n    \r\n  }\r\n\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 2%;\r\n}\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41; \r\n    margin-left: 180px;\r\n}\r\n.card {\r\n    background: #fff;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n    height: 200px;\r\n    margin: 1rem;\r\n    position: absolute;\r\n    width: 200px;\r\n  }\r\n  .card-3 {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n  #card1{\r\n    \r\n    margin-top: 40px;\r\n    margin-left: 40%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n    \r\n}\r\n#card2{\r\n    \r\n    margin-top: 40px;\r\n    margin-left: 65%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n#card3{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 40%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n#card4{\r\n    \r\n    margin-top: 20%;\r\n    margin-left: 65%;\r\n    background-color: white;\r\n    color: #1b1b1b;\r\n}\r\n\r\n\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n\r\n\r\n }\r\n  \r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHRlYWNoZXIvZWRpdHRlYWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7RUFJRTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCOztBQUVKO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGdCQUFnQjs7SUFFaEIsWUFBWTs7RUFFZDtFQUNBO0lBQ0Usb0VBQW9FO0VBQ3RFO0VBQ0E7SUFDRSxjQUFjOztJQUVkLHFCQUFxQjs7QUFFekI7QUFDQTs7RUFFRSxjQUFjOztFQUVkLHFCQUFxQjs7QUFFdkI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7OztBQUlBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGVBQWU7SUFDZiw4RUFBOEU7SUFDOUUsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0U7NEZBQ3dGO0lBQ3hGLG1CQUFPO1lBQVAsT0FBTztFQUNUOztFQUVBO0lBQ0U7aUVBQzZEO0lBQzdELG1CQUFjO1lBQWQsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7Q0FFRDs7O0NBR0E7OztFQUdDO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7O0VBRWhCLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsY0FBYzs7RUFFZCxxQkFBcUI7O0FBRXZCO0FBQ0E7O0FBRUEsY0FBYztBQUNkLGVBQWU7Ozs7QUFJZixxQkFBcUI7O0FBRXJCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7Ozs7QUFJQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFOzRGQUN3RjtJQUN4RixtQkFBTztZQUFQLE9BQU87RUFDVDs7RUFFQTtJQUNFO2lFQUM2RDtJQUM3RCxtQkFBYztZQUFkLGNBQWM7RUFDaEI7Ozs7OztBQU1GOzs7Q0FLQyxTQUFTOzs7Q0FDVDs7RUFFQztJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCOztFQUVoQixZQUFZOztBQUVkO0FBQ0E7RUFDRSxvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLGNBQWM7O0VBRWQscUJBQXFCOztBQUV2QjtBQUNBOztBQUVBLGNBQWM7QUFDZCxlQUFlOzs7O0FBSWYscUJBQXFCOztBQUVyQjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOzs7O0FBSUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDhFQUE4RTtJQUM5RSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTs0RkFDd0Y7SUFDeEYsbUJBQU87WUFBUCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztDQUVEOzs7Q0FHQTs7OztFQUlDO0lBQ0UsaUJBQWlCOztFQUVuQjs7QUFFRjtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0VBQW9FO0VBQ3RFO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYzs7QUFFbEI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7Ozs7QUFJQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFOzRGQUN3RjtJQUN4RixtQkFBTztZQUFQLE9BQU87RUFDVDs7RUFFQTtJQUNFO2lFQUM2RDtJQUM3RCxtQkFBYztZQUFkLGNBQWM7RUFDaEI7Ozs7Q0FJRCIsImZpbGUiOiJzcmMvYXBwL2VkaXR0ZWFjaGVyL2VkaXR0ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIFxyXG5cclxuXHJcbiAgI2NvbV9ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4jdG9wYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMiU7XHJcbn1cclxuI2N0aXRsZXtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgXHJcbn1cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG5cclxuICB9XHJcbiAgLmNhcmQtMyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICB9XHJcbiAgI2NhcmQxe1xyXG4gICAgbWFyZ2luLXRvcDoxMCU7XHJcblxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG4jY2FyZDJ7XHJcblxyXG4gIG1hcmdpbi10b3A6MTAlO1xyXG4gXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG4jY2FyZDN7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG59XHJcbiNjYXJkNHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI2Rpc3B7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiB9IFxyXG4gXHJcblxyXG4gQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuXHJcbiBcclxuICAjY29tX2JvZHkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4jdG9wYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMiU7XHJcbn1cclxuI2N0aXRsZXtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIFxyXG4gIHdpZHRoOiAyMDBweDtcclxuXHJcbn1cclxuLmNhcmQtMyB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbn1cclxuI2NhcmQxe1xyXG4gIG1hcmdpbi10b3A6MTAlO1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcbiNjYXJkMntcclxuXHJcbm1hcmdpbi10b3A6MTAlO1xyXG5tYXJnaW4tbGVmdDoxMCU7XHJcblxyXG5cclxuXHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbn1cclxuI2NhcmQze1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzFiMWIxYjtcclxufVxyXG4jY2FyZDR7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIFxyXG4gXHJcbiBcclxuIC8qIHRhYnMgKi9cclxuIEBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIFxyXG4gICNjb21fYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiN0b3BiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyJTtcclxufVxyXG4jY3RpdGxle1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgXHJcbiAgd2lkdGg6IDIwMHB4O1xyXG5cclxufVxyXG4uY2FyZC0zIHtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG4jY2FyZDF7XHJcbiAgbWFyZ2luLXRvcDoxMCU7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbn1cclxuI2NhcmQye1xyXG5cclxubWFyZ2luLXRvcDoxMCU7XHJcbm1hcmdpbi1sZWZ0OjEwJTtcclxuXHJcblxyXG5cclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG4jY2FyZDN7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG59XHJcbiNjYXJkNHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiB9XHJcblxyXG4gXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcblxyXG5cclxuXHJcbiAgI2NvbV9ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuI3RvcGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIlO1xyXG59XHJcbiNjdGl0bGV7XHJcbiAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmNhcmQtMyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICB9XHJcbiAgI2NhcmQxe1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICBcclxufVxyXG4jY2FyZDJ7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzFiMWIxYjtcclxufVxyXG4jY2FyZDN7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG59XHJcbiNjYXJkNHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcbiAgXHJcblxyXG5cclxuIH1cclxuICBcclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/editteacher/editteacher.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editteacher/editteacher.component.ts ***!
  \******************************************************/
/*! exports provided: EditteacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditteacherComponent", function() { return EditteacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");





let EditteacherComponent = class EditteacherComponent {
    constructor(changeDetectorRef, router, media) {
        this.router = router;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    edquiz() {
        this.router.navigate(['/editquiz']);
    }
    edlabs() {
        this.router.navigate(['/labbook']);
    }
    ngOnInit() {
    }
};
EditteacherComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"] }
];
EditteacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editteacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editteacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editteacher/editteacher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editteacher.component.css */ "./src/app/editteacher/editteacher.component.css")).default]
    })
], EditteacherComponent);



/***/ }),

/***/ "./src/app/enrollment.service.ts":
/*!***************************************!*\
  !*** ./src/app/enrollment.service.ts ***!
  \***************************************/
/*! exports provided: EnrollmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentService", function() { return EnrollmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EnrollmentService = class EnrollmentService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/dashboard';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/logout';
    }
    enroll() {
        return this._http.get(this._url, { withCredentials: true });
    }
    signout() {
        return this._http.get(this._url1, { withCredentials: true });
    }
};
EnrollmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnrollmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnrollmentService);



/***/ }),

/***/ "./src/app/forgotpassword/enrollment.service3.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/enrollment.service3.ts ***!
  \*******************************************************/
/*! exports provided: EnrollmentService3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentService3", function() { return EnrollmentService3; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EnrollmentService3 = class EnrollmentService3 {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/checkuserverification';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/updatepassword';
    }
    enroll(user) {
        console.log("chapak", user);
        return this._http.post(this._url, user);
    }
    enroll1(user) {
        console.log("chapak", user);
        console.log("chapak", user);
        return this._http.post(this._url1, user);
    }
};
EnrollmentService3.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnrollmentService3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnrollmentService3);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 400px;\r\n    margin: 0 auto; /* Added */\r\n      float: none; /* Added */\r\n      /* Added */\r\n     \r\n      background-color: #0091ea;\r\n\r\n  }\r\n  .buttonui{\r\n    color:red;\r\n    \r\n\r\n  }\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjLEVBQUUsVUFBVTtNQUN4QixXQUFXLEVBQUUsVUFBVTtNQUN2QixVQUFVOztNQUVWLHlCQUF5Qjs7RUFFN0I7RUFDQTtJQUNFLFNBQVM7OztFQUdYO0VBQ0E7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBBZGRlZCAqL1xyXG4gICAgICBmbG9hdDogbm9uZTsgLyogQWRkZWQgKi9cclxuICAgICAgLyogQWRkZWQgKi9cclxuICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTFlYTtcclxuXHJcbiAgfVxyXG4gIC5idXR0b251aXtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIFxyXG5cclxuICB9XHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enrollment_service3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enrollment.service3 */ "./src/app/forgotpassword/enrollment.service3.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(_enrolllmentService, snackBar, router) {
        this._enrolllmentService = _enrolllmentService;
        this.snackBar = snackBar;
        this.router = router;
        this.display = false;
    }
    ngOnInit() {
        var url_string = window.location.href; //window.location.href
        console.log("sdsdsd", url_string.indexOf("email"));
        var index = url_string.indexOf("email");
        console.log(url_string.slice(index + 6));
        var email = url_string.slice(index + 6);
        console.log("emmmmmail", email);
        this.obj = JSON.parse('{ "email":"' + email + '"}');
        this.verify = "Verifying you";
        this._enrolllmentService.enroll(this.obj).subscribe(data => {
            console.log("success", data);
            this.data1 = data['message'];
            console.log(this.data1);
            if (this.data1 == true) {
                console.log("yess");
                this.verify = "You are verified";
            }
            else {
                console.log("awww");
                this.verify = "You are not verified.Looke you have not verified you email account";
            }
        }, error => console.error("error", error));
    }
    password(form) {
        console.log(form.value);
        this.display = true;
        if (form.value.password.length == 0 || form.value.rpassword.length == 0) {
            this.display = false;
            this.snackBar.open("Please enter all the fields!!", "OK", {
                duration: 90000,
            });
        }
        else if (form.value.password != form.value.rpassword) {
            this.display = false;
            this.snackBar.open("Both Fields should have same values!!", "OK", {
                duration: 90000,
            });
        }
        else {
            var url_string = window.location.href; //window.location.href
            console.log("sdsdsd", url_string.indexOf("email"));
            var index = url_string.indexOf("email");
            console.log(url_string.slice(index + 6));
            var email = url_string.slice(index + 6);
            this.obj1 = JSON.parse('{ "email":"' + email + '","password":"' + form.value.password + '"}');
            console.log(this.obj1);
            this._enrolllmentService.enroll1(this.obj1).subscribe(data => {
                this.display = false;
                console.log("success", data);
                this.snackBar.open("Your Password has been changed Successfully.Redirecting to login", "OK", {
                    duration: 90000,
                });
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 3000);
            }, error => {
                this.display = false;
                console.error("error", error);
                this.snackBar.open("Something went wrong try again!!", "OK", {
                    duration: 90000,
                });
            });
        }
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: _enrollment_service3__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService3"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")).default]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/interaction.service.ts":
/*!****************************************!*\
  !*** ./src/app/interaction.service.ts ***!
  \****************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let InteractionService = class InteractionService {
    constructor() {
        this._labselect = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    sendMessage(message) {
        this._labselect.next({ text: message });
        console.log("dd", message);
    }
    getMessage() {
        return this._labselect.asObservable();
    }
};
InteractionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InteractionService);



/***/ }),

/***/ "./src/app/labbook/labbook.component.css":
/*!***********************************************!*\
  !*** ./src/app/labbook/labbook.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n@media (min-width: 320px) and (max-width: 767px) {\r\n  \r\n#disp{\r\n  display: none\r\n}\r\n\r\n\r\n#progress{\r\n  position: absolute;\r\n}\r\n\r\n  \r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.example-card {\r\n  background-color: white;\r\n  color:black;\r\n  max-width: 400px;\r\n  \r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.cards69 {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n\r\n  /* display: flex;\r\nflex-wrap: wrap; */\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n\r\n#com_body {\r\n  background: #F3F7F7;\r\n}\r\n\r\n.card {\r\n  background: #fff;\r\n  border-radius: 2px;\r\n  height: 350px; \r\n  margin: 1rem;\r\n}\r\n.card-3 {\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n#topbar{\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 8%;\r\n  \r\n  \r\n}\r\n#ctitle{\r\n  color: #1b1b1b;\r\n  font-weight: bold;\r\n  font-family:  monospace;\r\n  margin-top: 1%;\r\n  font-size: 300%;\r\n  text-shadow: 1.5px 1.5px #252A41;\r\n  text-align: center;\r\n  \r\n}\r\n#card1{\r\n  \r\n \r\n  \r\n}\r\n#card2{\r\n  \r\n \r\n}\r\n#card3{\r\n  \r\n\r\n}\r\n#card4{\r\n  \r\n \r\n}\r\n\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n  #disp{\r\n    display: none;\r\n  }\r\n\r\n } \r\n \r\n\r\n\r\n\r\n@media (min-width: 1025px) {\r\n    \r\n    * {\r\n        box-sizing: border-box;\r\n      }\r\n\r\n\r\n      #progress{\r\n        position: absolute; width: 50%;\r\n      }\r\n      \r\n      .column {\r\n        float: left;\r\n        width: 33.33%;\r\n        padding: 5px;\r\n      }\r\n      \r\n      /* Clearfix (clear floats) */\r\n      .row::after {\r\n        content: \"\";\r\n        clear: both;\r\n        display: table;\r\n      }\r\n    .example-card {\r\n        background-color: white;\r\n        color:black;\r\n        max-width: 400px;\r\n        \r\n      }\r\n      \r\n      .example-header-image {\r\n        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n        background-size: cover;\r\n      }\r\n    .cards69 {\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-pack: space-evenly;\r\n                justify-content: space-evenly;\r\n\r\n        /* display: flex;\r\n    flex-wrap: wrap; */\r\n     }\r\n    .example-container {\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: column;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n      }\r\n      \r\n      .example-is-mobile .example-toolbar {\r\n        position: fixed;\r\n        /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n        z-index: 2;\r\n      }\r\n      \r\n      h1.example-app-name {\r\n        margin-left: 8px;\r\n      }\r\n      \r\n      .example-sidenav-container {\r\n        /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n           causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n        -webkit-box-flex: 1;\r\n                flex: 1;\r\n      }\r\n      \r\n      .example-is-mobile .example-sidenav-container {\r\n        /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n           `<body>` to be our scrolling element for mobile layouts. */\r\n        -webkit-box-flex: 1;\r\n                flex: 1 0 auto;\r\n      }\r\n      \r\n    \r\n    #com_body {\r\n        background: #F3F7F7;\r\n      }\r\n      \r\n    .card {\r\n        background: #fff;\r\n        border-radius: 2px;\r\n        display: inline-block;\r\n        height: 200px; \r\n        margin: 1rem;\r\n        position: absolute;\r\n        width: 450px;\r\n      }\r\n      .card-3 {\r\n        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n      }\r\n    #topbar{\r\n        background-color: white;\r\n        width: 100%;\r\n        height: 8%;\r\n        \r\n        \r\n    }\r\n    #ctitle{\r\n        color: #1b1b1b;\r\n        font-weight: bold;\r\n        font-family:  monospace;\r\n        margin-top: 1%;\r\n        font-size: 300%;\r\n        text-shadow: 1.5px 1.5px #252A41;\r\n        margin-left: 180px;\r\n    }\r\n    #card1{\r\n        \r\n        margin-top: 40px;\r\n        margin-left: 30%;\r\n        background-color: white;\r\n        color: #1b1b1b;\r\n        \r\n    }\r\n    #card2{\r\n        \r\n        margin-top: 40px;\r\n        margin-left: 65%;\r\n        background-color: white;\r\n        color: #1b1b1b;\r\n    }\r\n    #card3{\r\n        \r\n        margin-top: 20%;\r\n        margin-left: 30%;\r\n        background-color: white;\r\n        color: #1b1b1b;\r\n    }\r\n    #card4{\r\n        \r\n        margin-top: 20%;\r\n        margin-left: 65%;\r\n        background-color: white;\r\n        color: #1b1b1b;\r\n    }\r\n    \r\n    \r\n     \r\n   } \r\n \r\n\r\n\r\n\r\n@media (min-width: 700px) and (max-width: 900px) {\r\n\r\n   \r\n#disp{\r\n  display: none\r\n}\r\n\r\n\r\n#progress{\r\n  position: absolute;\r\n}\r\n\r\n  \r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.example-card {\r\n  background-color: white;\r\n  color:black;\r\n  max-width: 400px;\r\n  \r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.cards69 {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n\r\n  /* display: flex;\r\nflex-wrap: wrap; */\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n\r\n#com_body {\r\n  background: #F3F7F7;\r\n}\r\n\r\n.card {\r\n  background: #fff;\r\n  border-radius: 2px;\r\n  height: 200px; \r\n  margin: 1rem;\r\n}\r\n.card-3 {\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n#topbar{\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 8%;\r\n  \r\n  \r\n}\r\n#ctitle{\r\n  color: #1b1b1b;\r\n  font-weight: bold;\r\n  font-family:  monospace;\r\n  margin-top: 1%;\r\n  font-size: 300%;\r\n  text-shadow: 1.5px 1.5px #252A41;\r\n  text-align: center;\r\n  \r\n}\r\n#card1{\r\n  \r\n \r\n  \r\n}\r\n#card2{\r\n  \r\n \r\n}\r\n#card3{\r\n  \r\n\r\n}\r\n#card4{\r\n  \r\n \r\n}\r\n\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n  #disp{\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n} \r\n \r\n\r\n\r\n\r\n/* tabs */ \r\n \r\n\r\n\r\n\r\n@media (min-width: 901px) and (max-width: 1024px) {\r\n    \r\n#disp{\r\n  display: none\r\n}\r\n\r\n\r\n#progress{\r\n  position: absolute;\r\n}\r\n\r\n  \r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.example-card {\r\n  background-color: white;\r\n  color:black;\r\n  max-width: 400px;\r\n  \r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.cards69 {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n\r\n  /* display: flex;\r\nflex-wrap: wrap; */\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n\r\n#com_body {\r\n  background: #F3F7F7;\r\n}\r\n\r\n.card {\r\n  background: #fff;\r\n  border-radius: 2px;\r\n  height: 250px; \r\n  margin: 1rem;\r\n}\r\n.card-3 {\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n#topbar{\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 8%;\r\n  \r\n  \r\n}\r\n#ctitle{\r\n  color: #1b1b1b;\r\n  font-weight: bold;\r\n  font-family:  monospace;\r\n  margin-top: 1%;\r\n  font-size: 300%;\r\n  text-shadow: 1.5px 1.5px #252A41;\r\n  text-align: center;\r\n  \r\n}\r\n#card1{\r\n  \r\n \r\n  \r\n}\r\n#card2{\r\n  \r\n \r\n}\r\n#card3{\r\n  \r\n\r\n}\r\n#card4{\r\n  \r\n \r\n}\r\n\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n  #disp{\r\n    display: none;\r\n  }\r\n\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiYm9vay9sYWJib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7O0FBRUE7RUFDRTtBQUNGOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEI7Ozs7Ozs7QUFPQSw0QkFBNEI7O0FBRTVCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO1VBQTdCLDZCQUE2Qjs7RUFFN0I7a0JBQ2dCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhFQUE4RTtFQUM5RSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTswRkFDd0Y7RUFDeEYsbUJBQU87VUFBUCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRTsrREFDNkQ7RUFDN0QsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0VBQW9FO0FBQ3RFO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7OztBQUdaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxrQkFBa0I7O0FBRXBCO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBR0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDhFQUE4RTtJQUM5RSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTs0RkFDd0Y7SUFDeEYsbUJBQU87WUFBUCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztDQUVEOzs7OztBQUtEOztJQUVJO1FBQ0ksc0JBQXNCO01BQ3hCOzs7TUFHQTtRQUNFLGtCQUFrQixFQUFFLFVBQVU7TUFDaEM7O01BRUE7UUFDRSxXQUFXO1FBQ1gsYUFBYTtRQUNiLFlBQVk7TUFDZDs7TUFFQSw0QkFBNEI7TUFDNUI7UUFDRSxXQUFXO1FBQ1gsV0FBVztRQUNYLGNBQWM7TUFDaEI7SUFDRjtRQUNJLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsZ0JBQWdCOztNQUVsQjs7TUFFQTtRQUNFLG1GQUFtRjtRQUNuRixzQkFBc0I7TUFDeEI7SUFDRjtRQUNJLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDhCQUE2QjtnQkFBN0IsNkJBQTZCOztRQUU3QjtzQkFDYztLQUNqQjtJQUNEO1FBQ0ksb0JBQWE7UUFBYixhQUFhO1FBQ2IsNEJBQXNCO1FBQXRCLDZCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULE9BQU87UUFDUCxRQUFRO01BQ1Y7O01BRUE7UUFDRSxlQUFlO1FBQ2YsOEVBQThFO1FBQzlFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFO2dHQUN3RjtRQUN4RixtQkFBTztnQkFBUCxPQUFPO01BQ1Q7O01BRUE7UUFDRTtxRUFDNkQ7UUFDN0QsbUJBQWM7Z0JBQWQsY0FBYztNQUNoQjs7O0lBR0Y7UUFDSSxtQkFBbUI7TUFDckI7O0lBRUY7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO01BQ2Q7TUFDQTtRQUNFLG9FQUFvRTtNQUN0RTtJQUNGO1FBQ0ksdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxVQUFVOzs7SUFHZDtJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsY0FBYztRQUNkLGVBQWU7UUFDZixnQ0FBZ0M7UUFDaEMsa0JBQWtCO0lBQ3RCO0lBQ0E7O1FBRUksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsY0FBYzs7SUFFbEI7SUFDQTs7UUFFSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsY0FBYztJQUNsQjtJQUNBOztRQUVJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGNBQWM7SUFDbEI7Ozs7R0FJRDs7Ozs7QUFLRjs7O0FBR0Q7RUFDRTtBQUNGOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEI7Ozs7Ozs7QUFPQSw0QkFBNEI7O0FBRTVCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO1VBQTdCLDZCQUE2Qjs7RUFFN0I7a0JBQ2dCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhFQUE4RTtFQUM5RSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTswRkFDd0Y7RUFDeEYsbUJBQU87VUFBUCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRTsrREFDNkQ7RUFDN0QsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0VBQW9FO0FBQ3RFO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7OztBQUdaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxrQkFBa0I7O0FBRXBCO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBR0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDhFQUE4RTtJQUM5RSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTs0RkFDd0Y7SUFDeEYsbUJBQU87WUFBUCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOzs7O0FBSUY7Ozs7O0FBS0MsU0FBUzs7Ozs7QUFDVDs7QUFFRDtFQUNFO0FBQ0Y7OztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLHNCQUFzQjtBQUN4Qjs7Ozs7OztBQU9BLDRCQUE0Qjs7QUFFNUI7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBNkI7VUFBN0IsNkJBQTZCOztFQUU3QjtrQkFDZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzBGQUN3RjtFQUN4RixtQkFBTztVQUFQLE9BQU87QUFDVDs7QUFFQTtFQUNFOytEQUM2RDtFQUM3RCxtQkFBYztVQUFkLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsVUFBVTs7O0FBR1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGtCQUFrQjs7QUFFcEI7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOzs7QUFHQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFOzRGQUN3RjtJQUN4RixtQkFBTztZQUFQLE9BQU87RUFDVDs7RUFFQTtJQUNFO2lFQUM2RDtJQUM3RCxtQkFBYztZQUFkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0NBRUQiLCJmaWxlIjoic3JjL2FwcC9sYWJib29rL2xhYmJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgXHJcbiNkaXNwe1xyXG4gIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuXHJcbiNwcm9ncmVzc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiAgXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogQ2xlYXJmaXggKGNsZWFyIGZsb2F0cykgKi9cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY2FyZHM2OSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuZmxleC13cmFwOiB3cmFwOyAqL1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuXHJcbiNjb21fYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI0YzRjdGNztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGhlaWdodDogMzUwcHg7IFxyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG4uY2FyZC0zIHtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG4jdG9wYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOCU7XHJcbiAgXHJcbiAgXHJcbn1cclxuI2N0aXRsZXtcclxuICBjb2xvcjogIzFiMWIxYjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBmb250LXNpemU6IDMwMCU7XHJcbiAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcbiNjYXJkMXtcclxuICBcclxuIFxyXG4gIFxyXG59XHJcbiNjYXJkMntcclxuICBcclxuIFxyXG59XHJcbiNjYXJkM3tcclxuICBcclxuXHJcbn1cclxuI2NhcmQ0e1xyXG4gIFxyXG4gXHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAjZGlzcHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuIH0gXHJcbiBcclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgXHJcbiAgICAqIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgI3Byb2dyZXNze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIENsZWFyZml4IChjbGVhciBmbG9hdHMpICovXHJcbiAgICAgIC5yb3c6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICB9XHJcbiAgICAuZXhhbXBsZS1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIC5jYXJkczY5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwOyAqL1xyXG4gICAgIH1cclxuICAgIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIFxyXG4gICAgI2NvbV9ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjNGN0Y3O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC0zIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgICAgfVxyXG4gICAgI3RvcGJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDglO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgI2N0aXRsZXtcclxuICAgICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgI2NhcmQxe1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICNjYXJkMntcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICB9XHJcbiAgICAjY2FyZDN7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICB9XHJcbiAgICAjY2FyZDR7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgIFxyXG4gICB9XHJcbiAgICBcclxuXHJcblxyXG4gICBcclxuIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcblxyXG4gICBcclxuI2Rpc3B7XHJcbiAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5cclxuI3Byb2dyZXNze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuICBcclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBDbGVhcmZpeCAoY2xlYXIgZmxvYXRzKSAqL1xyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYXJkczY5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG5mbGV4LXdyYXA6IHdyYXA7ICovXHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG5cclxuI2NvbV9ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjRjNGN0Y3O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgaGVpZ2h0OiAyMDBweDsgXHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcbi5jYXJkLTMge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcbiN0b3BiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBcclxuICBcclxufVxyXG4jY3RpdGxle1xyXG4gIGNvbG9yOiAjMWIxYjFiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGZvbnQtc2l6ZTogMzAwJTtcclxuICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuI2NhcmQxe1xyXG4gIFxyXG4gXHJcbiAgXHJcbn1cclxuI2NhcmQye1xyXG4gIFxyXG4gXHJcbn1cclxuI2NhcmQze1xyXG4gIFxyXG5cclxufVxyXG4jY2FyZDR7XHJcbiAgXHJcbiBcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICNkaXNwe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiBcclxuIFxyXG4gXHJcbiAvKiB0YWJzICovXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIFxyXG4jZGlzcHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcblxyXG4jcHJvZ3Jlc3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4gIFxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIENsZWFyZml4IChjbGVhciBmbG9hdHMpICovXHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjpibGFjaztcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNhcmRzNjkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtd3JhcDogd3JhcDsgKi9cclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcblxyXG4jY29tX2JvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNGM0Y3Rjc7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBoZWlnaHQ6IDI1MHB4OyBcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuLmNhcmQtMyB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbn1cclxuI3RvcGJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDglO1xyXG4gIFxyXG4gIFxyXG59XHJcbiNjdGl0bGV7XHJcbiAgY29sb3I6ICMxYjFiMWI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgZm9udC1zaXplOiAzMDAlO1xyXG4gIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxufVxyXG4jY2FyZDF7XHJcbiAgXHJcbiBcclxuICBcclxufVxyXG4jY2FyZDJ7XHJcbiAgXHJcbiBcclxufVxyXG4jY2FyZDN7XHJcbiAgXHJcblxyXG59XHJcbiNjYXJkNHtcclxuICBcclxuIFxyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI2Rpc3B7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/labbook/labbook.component.ts":
/*!**********************************************!*\
  !*** ./src/app/labbook/labbook.component.ts ***!
  \**********************************************/
/*! exports provided: LabbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabbookComponent", function() { return LabbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");







let LabbookComponent = class LabbookComponent {
    constructor(dialog, router, changeDetectorRef, media) {
        this.dialog = dialog;
        this.router = router;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    edlabmanual(key) {
        localStorage.setItem('key', key);
        this.router.navigate(['/editlabmanual']);
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    ngOnInit() {
    }
};
LabbookComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"] }
];
LabbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-labbook',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./labbook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/labbook/labbook.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./labbook.component.css */ "./src/app/labbook/labbook.component.css")).default]
    })
], LabbookComponent);



/***/ }),

/***/ "./src/app/labmanual/labmanual.component.css":
/*!***************************************************!*\
  !*** ./src/app/labmanual/labmanual.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  } */\r\n  @media (min-width: 320px) and (max-width: 767px) {\r\n    .example-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n  \r\n    #bgimg {\r\n      display: none;\r\n      \r\n     }\r\n    .example-is-mobile .example-toolbar {\r\n      position: fixed;\r\n      /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n      z-index: 2;\r\n    }\r\n    h1.example-app-name {\r\n      margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n      /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n         causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n         `<body>` to be our scrolling element for mobile layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1 0 auto;\r\n    }\r\n    #topbar{\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 8%;\r\n  }\r\n  #ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41;\r\n    margin-left: 8px;\r\n}\r\n    \r\n  }\r\n  @media (min-width: 1025px){\r\n    .example-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n    #bgimg {\r\n      display: inline-block;\r\n      \r\n     }\r\n    .example-is-mobile .example-toolbar {\r\n      position: fixed;\r\n      /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n      z-index: 2;\r\n    }\r\n    h1.example-app-name {\r\n      margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n      /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n         causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n         `<body>` to be our scrolling element for mobile layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1 0 auto;\r\n    }\r\n  #com_body {\r\n    \r\n    background: #F3F7F7;\r\n  }\r\n\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8%;\r\n}\r\n#manual{\r\n  margin-top: -40%;\r\n  position: absolute;width: 70%;margin-left: 20%;\r\n}\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41;\r\n    margin-left: 180px;\r\n}\r\n#manbutton{\r\n  margin-left:85%; position: absolute;\r\n}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFibWFudWFsL2xhYm1hbnVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztLQUVLO0VBQ0g7SUFDRTtNQUNFLG9CQUFhO01BQWIsYUFBYTtNQUNiLDRCQUFzQjtNQUF0Qiw2QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sU0FBUztNQUNULE9BQU87TUFDUCxRQUFRO0lBQ1Y7O0lBRUE7TUFDRSxhQUFhOztLQUVkO0lBQ0Q7TUFDRSxlQUFlO01BQ2YsOEVBQThFO01BQzlFLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0U7OEZBQ3dGO01BQ3hGLG1CQUFPO2NBQVAsT0FBTztJQUNUOztJQUVBO01BQ0U7bUVBQzZEO01BQzdELG1CQUFjO2NBQWQsY0FBYztJQUNoQjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxVQUFVO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7RUFFRTtFQUNBO0lBQ0U7TUFDRSxvQkFBYTtNQUFiLGFBQWE7TUFDYiw0QkFBc0I7TUFBdEIsNkJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFNBQVM7TUFDVCxPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0E7TUFDRSxxQkFBcUI7O0tBRXRCO0lBQ0Q7TUFDRSxlQUFlO01BQ2YsOEVBQThFO01BQzlFLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0U7OEZBQ3dGO01BQ3hGLG1CQUFPO2NBQVAsT0FBTztJQUNUOztJQUVBO01BQ0U7bUVBQzZEO01BQzdELG1CQUFjO2NBQWQsY0FBYztJQUNoQjtFQUNGOztJQUVFLG1CQUFtQjtFQUNyQjs7QUFFRjtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGdCQUFnQjtBQUNoRDtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlLEVBQUUsa0JBQWtCO0FBQ3JDO0VBQ0UiLCJmaWxlIjoic3JjL2FwcC9sYWJtYW51YWwvbGFibWFudWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9ICovXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2JnaW1nIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgXHJcbiAgICAgfVxyXG4gICAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAjdG9wYmFye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogOCU7XHJcbiAgfVxyXG4gICNjdGl0bGV7XHJcbiAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4gICAgXHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpe1xyXG4gICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAjYmdpbWcge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIFxyXG4gICAgIH1cclxuICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgfVxyXG4gICNjb21fYm9keSB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICNGM0Y3Rjc7XHJcbiAgfVxyXG5cclxuI3RvcGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG59XHJcbiNtYW51YWx7XHJcbiAgbWFyZ2luLXRvcDogLTQwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDcwJTttYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcbiNjdGl0bGV7XHJcbiAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG59XHJcbiNtYW5idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6ODUlOyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/labmanual/labmanual.component.ts":
/*!**************************************************!*\
  !*** ./src/app/labmanual/labmanual.component.ts ***!
  \**************************************************/
/*! exports provided: LabmanualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabmanualComponent", function() { return LabmanualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _labmanual_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labmanual.service */ "./src/app/labmanual/labmanual.service.ts");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");









let LabmanualComponent = class LabmanualComponent {
    constructor(router, _labmanualService, _interactionService, changeDetectorRef, media, dialog) {
        this.router = router;
        this._labmanualService = _labmanualService;
        this._interactionService = _interactionService;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.manual = [];
        this.load = false;
        this.key = "";
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.prog = {
            "eno": "",
            "pno": "",
            "title": "",
            "desc": "",
            "ip_format": "",
            "cons": "",
            "op_format": "",
            "tc_ip": "",
            "tc_op": "",
            "expl": "",
            "tcip": [],
            "tcop": [],
            "pkey": ""
        };
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        this.key = localStorage.getItem('key');
        // localStorage.setItem("compiler",comp);
        this.compiler = localStorage.getItem('compiler');
        console.log("ccccc", this.compiler);
        localStorage.setItem("compiler1", this.compiler);
        this._labmanualService.enroll1(this.key).subscribe(data => {
            console.log("success dash", data.manual);
            this.load = true;
            this.manual = data.manual;
        }, error => console.error("error", error));
    }
    program(i, j) {
        this.prog.eno = this.manual[i].prog[j].eno;
        this.prog.pno = this.manual[i].prog[j].pno;
        this.prog.title = this.manual[i].prog[j].title;
        this.prog.desc = this.manual[i].prog[j].desc;
        this.prog.ip_format = this.manual[i].prog[j].ip_format;
        this.prog.cons = this.manual[i].prog[j].cons;
        this.prog.op_format = this.manual[i].prog[j].op_format;
        this.prog.tc_ip = this.manual[i].prog[j].tc_ip;
        this.prog.tc_op = this.manual[i].prog[j].tc_op;
        this.prog.expl = this.manual[i].prog[j].expl;
        this.prog.tcip = this.manual[i].prog[j].tcip;
        this.prog.tcop = this.manual[i].prog[j].tcop;
        this.prog.pkey = this.manual[i].prog[j].pkey;
        localStorage.setItem('programming', this.key);
        localStorage.setItem('i', i);
        localStorage.setItem('j', j);
        localStorage.setItem('eno', this.prog.eno);
        localStorage.setItem('pno', this.prog.pno);
        localStorage.setItem('title', this.prog.title);
        localStorage.setItem('desc', this.prog.desc);
        localStorage.setItem('ip_format', this.prog.ip_format);
        localStorage.setItem('cons', this.prog.cons);
        localStorage.setItem('op_format', this.prog.op_format);
        localStorage.setItem('tc_ip', this.prog.tc_ip);
        localStorage.setItem('tc_op', this.prog.tc_op);
        localStorage.setItem('expl', this.prog.expl);
        localStorage.setItem('pkey', this.prog.pkey);
        var n = localStorage.getItem('eno');
        console.log("s", n);
        this.router.navigate(['program']).then(() => {
            console.log("program go");
            // window.location.reload();
        });
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
LabmanualComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _labmanual_service__WEBPACK_IMPORTED_MODULE_3__["LabmanualService"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
LabmanualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-labmanual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./labmanual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/labmanual/labmanual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./labmanual.component.css */ "./src/app/labmanual/labmanual.component.css")).default]
    })
], LabmanualComponent);



/***/ }),

/***/ "./src/app/labmanual/labmanual.service.ts":
/*!************************************************!*\
  !*** ./src/app/labmanual/labmanual.service.ts ***!
  \************************************************/
/*! exports provided: LabmanualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabmanualService", function() { return LabmanualService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LabmanualService = class LabmanualService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getpubman';
    }
    enroll1(key) {
        var data = {
            "key": key
        };
        console.log(data);
        return this._http.post(this._url, data, { withCredentials: true });
    }
};
LabmanualService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LabmanualService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LabmanualService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  \r\n\r\n\r\n@media (min-width: 320px) and (max-width: 767px) {\r\n  \r\n\r\n  \r\n  .example-card{\r\n    display:none\r\n  }\r\n \r\n  #hellotop{\r\n    margin-top:20%\r\n  }\r\n  /* bade */\r\n  body {\r\n    /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n    \r\nbackground-color:whitesmoke\r\n  }\r\n\r\n  .card-3 {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n  .overlay{\r\n    background-color:#0091ea;\r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n}\r\n  \r\n  .example-card {\r\n    margin: 0 auto; /* Added */\r\n        float: none; /* Added */\r\n        margin-bottom: 10px; /* Added */\r\n        \r\n       \r\n        background-color: white;\r\n        padding: 60px 0 40px 0;\r\n        \r\n    \r\n  }\r\n  .input{\r\n    width:275px;\r\n  }\r\n  \r\n  .login{\r\n    background-color:#0091ea;\r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n    \r\n  }\r\n  #outside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    margin-left: 70%;\r\n    box-shadow:         3px 3px 5px 6px #ccc;\r\n    \r\n  }\r\n  #inside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    \r\n    margin-left: 35%;\r\n  }\r\n  .buttonui{\r\n    color:red;\r\n    \r\n\r\n  }\r\n\r\n \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n\r\n  \r\n\r\n  #bajume{\r\n    margin-left:0%\r\n  }\r\n \r\n\r\n } \r\n \r\n\r\n @media (min-width: 700px) and (max-width: 900px) {\r\n\r\n  .example-card{\r\n    display:none\r\n  }\r\n\r\n  #bajume{\r\n    margin-left:70%\r\n  }\r\n \r\n  #hellotop{\r\n    margin-top:20%;\r\n    text-align: center;\r\n  }\r\n  /* bade */\r\n  body {\r\n    /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n    \r\nbackground-color:whitesmoke\r\n  }\r\n\r\n  .card-3 {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n  .overlay{\r\n    background-color:#0091ea;\r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n}\r\n  \r\n  .example-card {\r\n    margin: 0 auto; /* Added */\r\n        float: none; /* Added */\r\n        margin-bottom: 10px; /* Added */\r\n        \r\n       \r\n        background-color: white;\r\n        padding: 60px 0 40px 0;\r\n        \r\n    \r\n  }\r\n  .input{\r\n    width:400px;\r\n    display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  }\r\n  \r\n  .login{\r\n    background-color:#0091ea;\r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n    \r\n  }\r\n  #outside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    margin-left: 70%;\r\n    box-shadow:         3px 3px 5px 6px #ccc;\r\n    \r\n  }\r\n  #inside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    \r\n    margin-left: 35%;\r\n  }\r\n  .buttonui{\r\n    color:red;\r\n    \r\n\r\n  }\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n\r\n  \r\n#cen{\r\n  text-align:center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n} \r\n \r\n\r\n /* tabs */ \r\n \r\n\r\n @media (min-width: 901px) and (max-width: 1024px) {\r\n  .example-card{\r\n    display:none\r\n  }\r\n\r\n  #bajume{\r\n    margin-left:70%\r\n  }\r\n \r\n  #hellotop{\r\n    margin-top:20%;\r\n    text-align: center;\r\n  }\r\n  /* bade */\r\n  body {\r\n    /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n    \r\nbackground-color:whitesmoke\r\n  }\r\n\r\n  .card-3 {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n  .overlay{\r\n    background-color:#0091ea;\r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n}\r\n  \r\n  .example-card {\r\n    margin: 0 auto; /* Added */\r\n        float: none; /* Added */\r\n        margin-bottom: 10px; /* Added */\r\n        \r\n       \r\n        background-color: white;\r\n        padding: 60px 0 40px 0;\r\n        \r\n    \r\n  }\r\n  .input{\r\n    width:400px;\r\n    display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  }\r\n  \r\n  .login{\r\n    background-color:#0091ea;\r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n    \r\n  }\r\n  #outside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    margin-left: 70%;\r\n    box-shadow:         3px 3px 5px 6px #ccc;\r\n    \r\n  }\r\n  #inside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    \r\n    margin-left: 35%;\r\n  }\r\n  .buttonui{\r\n    color:red;\r\n    \r\n\r\n  }\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n\r\n  \r\n#cen{\r\n  text-align:center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n } \r\n \r\n\r\n @media (min-width: 1025px) {\r\n\r\n\r\n  /* bade */\r\n  body {\r\n    /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n    \r\nbackground-color:whitesmoke\r\n  }\r\n\r\n  .card-3 {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n  .overlay{\r\n    background-color:#0091ea;\r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n}\r\n  \r\n  .example-card {\r\n    margin: 0 auto; /* Added */\r\n        float: none; /* Added */\r\n        margin-bottom: 10px; /* Added */\r\n        \r\n       \r\n        background-color: white;\r\n        padding: 60px 0 40px 0;\r\n        \r\n    \r\n  }\r\n  .input{\r\n    width:275px;\r\n  }\r\n  \r\n  .login{\r\n    background-color: #0091ea;\r\n    margin-left: 40%;\r\n  box-shadow:         3px 3px 5px 6px #ccc;\r\n    \r\n  }\r\n  #outside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    margin-left: 70%;\r\n    box-shadow:         3px 3px 5px 6px #ccc;\r\n    \r\n  }\r\n  #inside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    \r\n    margin-left: 35%;\r\n  }\r\n  .buttonui{\r\n    color:red;\r\n    \r\n\r\n  }\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7Ozs7RUFJRTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRTtFQUNGO0VBQ0EsU0FBUztFQUNUO0lBQ0UseURBQXlEOztBQUU3RDtFQUNFOztFQUVBO0lBQ0Usb0VBQW9FO0VBQ3RFO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztFQUVFO0lBQ0UsY0FBYyxFQUFFLFVBQVU7UUFDdEIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsbUJBQW1CLEVBQUUsVUFBVTs7O1FBRy9CLHVCQUF1QjtRQUN2QixzQkFBc0I7OztFQUc1QjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTs7RUFFZDtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFHaEIsd0NBQXdDOztFQUUxQztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7O0lBRVgsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxTQUFTOzs7RUFHWDs7O0VBR0E7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCOzs7OztFQUtBO0lBQ0U7RUFDRjs7O0NBR0Q7OztDQUdBOztFQUVDO0lBQ0U7RUFDRjs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0EsU0FBUztFQUNUO0lBQ0UseURBQXlEOztBQUU3RDtFQUNFOztFQUVBO0lBQ0Usb0VBQW9FO0VBQ3RFO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztFQUVFO0lBQ0UsY0FBYyxFQUFFLFVBQVU7UUFDdEIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsbUJBQW1CLEVBQUUsVUFBVTs7O1FBRy9CLHVCQUF1QjtRQUN2QixzQkFBc0I7OztFQUc1QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7O0VBRWQ7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBR2hCLHdDQUF3Qzs7RUFFMUM7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXOztJQUVYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsU0FBUzs7O0VBR1g7RUFDQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7Ozs7QUFJRjtFQUNFLGlCQUFpQjtBQUNuQjs7Ozs7O0FBTUE7OztDQUtDLFNBQVM7OztDQUNUO0VBQ0M7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQSxTQUFTO0VBQ1Q7SUFDRSx5REFBeUQ7O0FBRTdEO0VBQ0U7O0VBRUE7SUFDRSxvRUFBb0U7RUFDdEU7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0VBRUU7SUFDRSxjQUFjLEVBQUUsVUFBVTtRQUN0QixXQUFXLEVBQUUsVUFBVTtRQUN2QixtQkFBbUIsRUFBRSxVQUFVOzs7UUFHL0IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjs7O0VBRzVCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTs7RUFFZDtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFHaEIsd0NBQXdDOztFQUUxQztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7O0lBRVgsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxTQUFTOzs7RUFHWDtFQUNBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4Qjs7OztBQUlGO0VBQ0UsaUJBQWlCO0FBQ25COzs7Ozs7O0NBT0M7OztDQUdBOzs7RUFHQyxTQUFTO0VBQ1Q7SUFDRSx5REFBeUQ7O0FBRTdEO0VBQ0U7O0VBRUE7SUFDRSxvRUFBb0U7RUFDdEU7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0VBRUU7SUFDRSxjQUFjLEVBQUUsVUFBVTtRQUN0QixXQUFXLEVBQUUsVUFBVTtRQUN2QixtQkFBbUIsRUFBRSxVQUFVOzs7UUFHL0IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjs7O0VBRzVCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBR2xCLHdDQUF3Qzs7RUFFeEM7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBR2hCLHdDQUF3Qzs7RUFFMUM7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXOztJQUVYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsU0FBUzs7O0VBR1g7RUFDQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7Ozs7Ozs7O0NBUUQiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBcclxuXHJcbiAgXHJcbiAgLmV4YW1wbGUtY2FyZHtcclxuICAgIGRpc3BsYXk6bm9uZVxyXG4gIH1cclxuIFxyXG4gICNoZWxsb3RvcHtcclxuICAgIG1hcmdpbi10b3A6MjAlXHJcbiAgfVxyXG4gIC8qIGJhZGUgKi9cclxuICBib2R5IHtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggI2ZmY2YwMCwjZmY1NzIyKTsgKi9cclxuICAgIFxyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2VcclxuICB9XHJcblxyXG4gIC5jYXJkLTMge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgfVxyXG4gIC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA5MWVhO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB6LWluZGV4OjEwMDA7XHJcbn1cclxuICBcclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBBZGRlZCAqL1xyXG4gICAgICAgIGZsb2F0OiBub25lOyAvKiBBZGRlZCAqL1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIEFkZGVkICovXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgNDBweCAwO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIC5pbnB1dHtcclxuICAgIHdpZHRoOjI3NXB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDkxZWE7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHotaW5kZXg6MTAwMDtcclxuICAgIFxyXG4gIH1cclxuICAjb3V0c2lkZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgIFxyXG4gIH1cclxuICAjaW5zaWRle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgfVxyXG4gIC5idXR0b251aXtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgI2JhanVtZXtcclxuICAgIG1hcmdpbi1sZWZ0OjAlXHJcbiAgfVxyXG4gXHJcblxyXG4gfSBcclxuIFxyXG5cclxuIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcblxyXG4gIC5leGFtcGxlLWNhcmR7XHJcbiAgICBkaXNwbGF5Om5vbmVcclxuICB9XHJcblxyXG4gICNiYWp1bWV7XHJcbiAgICBtYXJnaW4tbGVmdDo3MCVcclxuICB9XHJcbiBcclxuICAjaGVsbG90b3B7XHJcbiAgICBtYXJnaW4tdG9wOjIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLyogYmFkZSAqL1xyXG4gIGJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjZmZjZjAwLCNmZjU3MjIpOyAqL1xyXG4gICAgXHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtMyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICB9XHJcbiAgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDkxZWE7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHotaW5kZXg6MTAwMDtcclxufVxyXG4gIFxyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEFkZGVkICovXHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7IC8qIEFkZGVkICovXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkZWQgKi9cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMCA0MHB4IDA7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgd2lkdGg6NDAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwOTFlYTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgei1pbmRleDoxMDAwO1xyXG4gICAgXHJcbiAgfVxyXG4gICNvdXRzaWRle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgXHJcbiAgfVxyXG4gICNpbnNpZGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICB9XHJcbiAgLmJ1dHRvbnVpe1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4jY2Vue1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIFxyXG4gXHJcbiBcclxuIC8qIHRhYnMgKi9cclxuIEBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5leGFtcGxlLWNhcmR7XHJcbiAgICBkaXNwbGF5Om5vbmVcclxuICB9XHJcblxyXG4gICNiYWp1bWV7XHJcbiAgICBtYXJnaW4tbGVmdDo3MCVcclxuICB9XHJcbiBcclxuICAjaGVsbG90b3B7XHJcbiAgICBtYXJnaW4tdG9wOjIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLyogYmFkZSAqL1xyXG4gIGJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjZmZjZjAwLCNmZjU3MjIpOyAqL1xyXG4gICAgXHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtMyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICB9XHJcbiAgLm92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDkxZWE7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHotaW5kZXg6MTAwMDtcclxufVxyXG4gIFxyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEFkZGVkICovXHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7IC8qIEFkZGVkICovXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkZWQgKi9cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMCA0MHB4IDA7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgd2lkdGg6NDAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwOTFlYTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgei1pbmRleDoxMDAwO1xyXG4gICAgXHJcbiAgfVxyXG4gICNvdXRzaWRle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgXHJcbiAgfVxyXG4gICNpbnNpZGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICB9XHJcbiAgLmJ1dHRvbnVpe1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4jY2Vue1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiB9XHJcblxyXG4gXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcblxyXG5cclxuICAvKiBiYWRlICovXHJcbiAgYm9keSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICNmZmNmMDAsI2ZmNTcyMik7ICovXHJcbiAgICBcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlXHJcbiAgfVxyXG5cclxuICAuY2FyZC0zIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gIH1cclxuICAub3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwOTFlYTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgei1pbmRleDoxMDAwO1xyXG59XHJcbiAgXHJcbiAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQWRkZWQgKi9cclxuICAgICAgICBmbG9hdDogbm9uZTsgLyogQWRkZWQgKi9cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBBZGRlZCAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogNjBweCAwIDQwcHggMDtcclxuICAgICAgICBcclxuICAgIFxyXG4gIH1cclxuICAuaW5wdXR7XHJcbiAgICB3aWR0aDoyNzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTFlYTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgIFxyXG4gIH1cclxuICAjb3V0c2lkZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICAgIFxyXG4gIH1cclxuICAjaW5zaWRle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgfVxyXG4gIC5idXR0b251aXtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIFxyXG5cclxuICB9XHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcbiB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(_loginService, router, snackBar) {
        this._loginService = _loginService;
        this.router = router;
        this.snackBar = snackBar;
        this.ppdisp = false;
    }
    ngOnInit() {
    }
    login(form) {
        this.ppdisp = true;
        console.log(form.value);
        console.log(form.value.password);
        var docRef = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"]().collection("users").doc(form.value.email);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data().status);
                if (doc.data().status1 == true) {
                    firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().signInWithEmailAndPassword(form.value.email, form.value.password).then(() => {
                        console.log("Success student");
                        if (doc.data().status == "student") {
                            console.log("student");
                            this.ppdisp = false;
                            this.router.navigate(['/dashboard']);
                        }
                        else {
                            console.log("teacher");
                            this.ppdisp = false;
                            this.router.navigate(['/editteacher']);
                        }
                    }).
                        catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        this.snackBar.open(error.message, "OK", {
                            duration: 90000,
                        });
                        this.ppdisp = false;
                        // ...
                    });
                }
                else {
                    console.log("complete verification");
                }
            }
            else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }
    hello() {
        var txt;
        var person = prompt("Please enter your email address:");
        if (person == null || person == "") {
            this.snackBar.open("Please enter you email address!!", "OK", {
                duration: 90000,
            });
        }
        else {
            var obj = JSON.parse('{ "email":"' + person + '"}');
            this._loginService.enroll1(obj).subscribe(data => {
                console.log("success", data);
                this.snackBar.open("A verification link has been sent to your email address!!", "OK", {
                    duration: 90000,
                });
            }, error => {
                this.snackBar.open("Something went wrong, please try again!!", "OK", {
                    duration: 90000,
                });
                console.error("error", error);
            });
            console.log(txt);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/login';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/forgotpassword';
    }
    enroll(user) {
        console.log(user);
        return this._http.post(this._url, user, { withCredentials: true });
    }
    enroll1(user) {
        return this._http.post(this._url1, user);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/logout/login.service.ts":
/*!*****************************************!*\
  !*** ./src/app/logout/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/login';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/forgotpassword';
        this._url10 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/logout';
    }
    enroll(user) {
        console.log(user);
        return this._http.post(this._url, user, { withCredentials: true });
    }
    enroll1(user) {
        return this._http.post(this._url1, user);
    }
    signout() {
        return this._http.get(this._url10, { withCredentials: true });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 400px;\r\n    background-color: #059BE5;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5QkU1O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0gIl19 */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/logout/login.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





let LogoutComponent = class LogoutComponent {
    constructor(router, _enrolllmentService) {
        this.router = router;
        this._enrolllmentService = _enrolllmentService;
        this.display1 = true;
        this.display = false;
    }
    ngOnInit() {
    }
    yes() {
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut().then(() => {
            // Sign-out successful.
            this.router.navigate(['/login']);
            this.display1 = false;
            this.display = true;
        }).catch(function (error) {
            // An error happened.
        });
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/program/program.component.css":
/*!***********************************************!*\
  !*** ./src/app/program/program.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* body, html {padding:0;margin:0;background:#000;height:100%;} */\r\n@media (min-width: 320px) and (max-width: 767px) {\r\n    .example-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n\t}\r\n\t#output1{\r\n\t\tbackground-color:black;\r\n\t}\r\n\t#box{\r\n\t\tbackground-color: #323232;\r\n\t}\r\n\t#botnav{\r\n\t\tdisplay: block;\r\n\t\toverflow: auto;\r\n\t\tposition: fixed;\r\n\t\tbottom: 0;\r\n\t\tz-index: 1;\r\n\t\twidth: 100%;\r\n\t\tbackground-color: whitesmoke ;\r\n\t}\r\n    #bgimg {\r\n      display: none;\r\n      \r\n     }\r\n    .example-is-mobile .example-toolbar {\r\n      position: fixed;\r\n      /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n      z-index: 2;\r\n    }\r\n    h1.example-app-name {\r\n      margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n      /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n         causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n         `<body>` to be our scrolling element for mobile layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1 0 auto;\r\n\t}\r\n\t.mat-tab-label {\r\n\t\tmin-width: 25px !important;\r\n\t\tpadding: 5px;\r\n\t\tbackground-color: transparent;\r\n\t\tcolor: whitesmoke;\r\n\t\tfont-weight: 700;\r\n\t  }\r\n\t  .mat-badge-content{\r\n\t\tbackground : green;\r\n\t\tfont-size: small;\r\n\t\twidth: 50px;\r\n\t  }\r\n\t  .resizable {\r\n\t\twidth: 100%;\r\n\t\theight:100%;\r\n\t\tpadding: 0;\r\n\t\tdisplay: block;\r\n\t\tcolor:#000;\r\n\t\tposition:relative; \r\n\t}\r\n\t#disc{\r\n\t\tbackground-color: #191919;\r\n\t}\r\n\t.resizable1 {\r\n\t\tbackground-color: #191919;\r\n\t\tpadding-bottom: 20%;\r\n\t\t\r\n\t\t} \r\n\t\t.resizable2 {\r\n\t\t\t/* background-color: #f3f3f3; */\r\n\t\t\t/* background-color: #eaeaea; */\r\n\t\t\tbackground-color: black; \r\n\t\t\t\r\n\t\t\r\n\t\t  }\r\n\t#ps{\r\n\t\tdisplay: block;\r\n\t}\r\n\t#ps1{\r\n\t\tdisplay: none;\r\n\t}\r\n\t/* #subcode{\r\n\t\tdisplay: none;\r\n\t}\r\n\t#runcode{\r\n\t\tdisplay: none;\r\n\t} */\r\n\t/* #subcode1{\r\n\t\tdisplay: block;\r\n\t}\r\n\t#runcode1{\r\n\t\tdisplay: none;\r\n\t} */\r\n\t#container{\r\n\t\t\r\n\t\theight: 100%;\r\n\t\tbackground:black;\r\n\t\tmargin:0 auto;\r\n\t\tfont-size:0;\r\n\t\tborder-radius:5px;\r\n\t\toverflow:hidden;\r\n\t}\r\n\taside{\r\n\t\twidth:260px;\r\n\t\theight:800px;\r\n\t\tbackground-color:#3b3e49;\r\n\t\tdisplay:inline-block;\r\n\t\tfont-size:15px;\r\n\t\tvertical-align:top;\r\n\t}\r\n\tmain{\r\n\t\twidth:490px;\r\n\t\theight:800px;\r\n\t\tdisplay:inline-block;\r\n\t\tfont-size:15px;\r\n\t\tvertical-align:top;\r\n\t}\r\n\t\r\n\taside header{\r\n\t\tpadding:30px 20px;\r\n\t}\r\n\taside input{\r\n\t\twidth:100%;\r\n\t\theight:50px;\r\n\t\tline-height:50px;\r\n\t\tpadding:0 50px 0 20px;\r\n\t\tbackground-color:#5e616a;\r\n\t\tborder:none;\r\n\t\tborder-radius:3px;\r\n\t\tcolor:#fff;\r\n\t\tbackground-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_search.png);\r\n\t\tbackground-repeat:no-repeat;\r\n\t\tbackground-position:170px;\r\n\t\tbackground-size:40px;\r\n\t}\r\n\taside input::-webkit-input-placeholder{\r\n\t\tcolor:#fff;\r\n\t}\r\n\taside input::-moz-placeholder{\r\n\t\tcolor:#fff;\r\n\t}\r\n\taside input::-ms-input-placeholder{\r\n\t\tcolor:#fff;\r\n\t}\r\n\taside input::placeholder{\r\n\t\tcolor:#fff;\r\n\t}\r\n\taside ul{\r\n\t\tpadding-left:0;\r\n\t\tmargin:0;\r\n\t\tlist-style-type:none;\r\n\t\toverflow-y:scroll;\r\n\t\theight:690px;\r\n\t}\r\n\taside li{\r\n\t\tpadding:10px 0;\r\n\t}\r\n\taside li:hover{\r\n\t\tbackground-color:#5e616a;\r\n\t}\r\n\th2,h3{\r\n\t\tmargin:0;\r\n\t}\r\n\taside li img{\r\n\t\tborder-radius:50%;\r\n\t\tmargin-left:20px;\r\n\t\tmargin-right:8px;\r\n\t}\r\n\taside li div{\r\n\t\tdisplay:inline-block;\r\n\t\tvertical-align:top;\r\n\t\tmargin-top:12px;\r\n\t}\r\n\taside li h2{\r\n\t\tfont-size:14px;\r\n\t\tcolor:#fff;\r\n\t\tfont-weight:normal;\r\n\t\tmargin-bottom:5px;\r\n\t}\r\n\taside li h3{\r\n\t\tfont-size:12px;\r\n\t\tcolor:#7e818a;\r\n\t\tfont-weight:normal;\r\n\t}\r\n\t\r\n\t.status{\r\n\t\twidth:8px;\r\n\t\theight:8px;\r\n\t\tborder-radius:50%;\r\n\t\tdisplay:inline-block;\r\n\t\tmargin-right:7px;\r\n\t}\r\n\t.green{\r\n\t\tbackground-color:#58b666;\r\n\t}\r\n\t.orange{\r\n\t\tbackground-color:#ff725d;\r\n\t}\r\n\t.blue{\r\n\t\tbackground-color:#6fbced;\r\n\t\tmargin-right:0;\r\n\t\tmargin-left:7px;\r\n\t}\r\n\t\r\n\tmain header{\r\n\t\theight:110px;\r\n\t\tpadding:30px 20px 30px 40px;\r\n\t}\r\n\tmain header > *{\r\n\t\tdisplay:inline-block;\r\n\t\tvertical-align:top;\r\n\t}\r\n\tmain header img:first-child{\r\n\t\tborder-radius:50%;\r\n\t}\r\n\tmain header img:last-child{\r\n\t\twidth:24px;\r\n\t\tmargin-top:8px;\r\n\t}\r\n\tmain header div{\r\n\t\tmargin-left:10px;\r\n\t\tmargin-right:145px;\r\n\t}\r\n\tmain header h2{\r\n\t\tfont-size:16px;\r\n\t\tmargin-bottom:5px;\r\n\t}\r\n\tmain header h3{\r\n\t\tfont-size:14px;\r\n\t\tfont-weight:normal;\r\n\t\tcolor:#7e818a;\r\n\t}\r\n\t\r\n\t#chat{\r\n\t\tpadding-left:0;\r\n\t\tmargin:0;\r\n\t\tlist-style-type:none;\r\n\t\toverflow-y:scroll;\r\n\t\theight:535px;\r\n\t\tborder-top:2px solid #fff;\r\n\t\tborder-bottom:2px solid #fff;\r\n\t}\r\n\t#chat li{\r\n\t\tpadding:10px 30px;\r\n\t}\r\n\t#chat h2,#chat h3{\r\n\t\tdisplay:inline-block;\r\n\t\tfont-size:13px;\r\n\t\tfont-weight:normal;\r\n\t}\r\n\t#chat h3{\r\n\t\tcolor:#bbb;\r\n\t}\r\n\t#chat .entete{\r\n\t\tmargin-bottom:5px;\r\n\t}\r\n\t#chat .message{\r\n\t\tpadding:20px;\r\n\t\tcolor:#fff;\r\n\t\tline-height:25px;\r\n\t\tmax-width:90%;\r\n\t\tdisplay:inline-block;\r\n\t\ttext-align:left;\r\n\t\tborder-radius:5px;\r\n\t}\r\n\t#chat .me{\r\n\t\ttext-align:right;\r\n\t}\r\n\t#chat .you .message{\r\n\t\tbackground-color:#58b666;\r\n\t}\r\n\t#chat .me .message{\r\n\t\tbackground-color:#6fbced;\r\n\t}\r\n\t#chat .triangle{\r\n\t\twidth: 0;\r\n\t\theight: 0;\r\n\t\tborder-style: solid;\r\n\t\tborder-width: 0 10px 10px 10px;\r\n\t}\r\n\t#chat .you .triangle{\r\n\t\t\tborder-color: transparent transparent #58b666 transparent;\r\n\t\t\tmargin-left:15px;\r\n\t}\r\n\t#chat .me .triangle{\r\n\t\t\tborder-color: transparent transparent #6fbced transparent;\r\n\t\t\tmargin-left:375px;\r\n\t}\r\n\t\r\n\tmain footer{\r\n\t\theight:155px;\r\n\t\tpadding:20px 30px 10px 20px;\r\n\t}\r\n\tmain footer textarea{\r\n\t\tresize:none;\r\n\t\tborder:none;\r\n\t\tdisplay:block;\r\n\t\twidth:100%;\r\n\t\theight:80px;\r\n\t\tborder-radius:3px;\r\n\t\tpadding:20px;\r\n\t\tfont-size:13px;\r\n\t\tmargin-bottom:13px;\r\n\t}\r\n\tmain footer textarea::-webkit-input-placeholder{\r\n\t\tcolor:#ddd;\r\n\t}\r\n\tmain footer textarea::-moz-placeholder{\r\n\t\tcolor:#ddd;\r\n\t}\r\n\tmain footer textarea::-ms-input-placeholder{\r\n\t\tcolor:#ddd;\r\n\t}\r\n\tmain footer textarea::placeholder{\r\n\t\tcolor:#ddd;\r\n\t}\r\n\tmain footer img{\r\n\t\theight:30px;\r\n\t\tcursor:pointer;\r\n\t}\r\n\tmain footer a{\r\n\t\ttext-decoration:none;\r\n\t\ttext-transform:uppercase;\r\n\t\tfont-weight:bold;\r\n\t\tcolor:#6fbced;\r\n\t\tvertical-align:top;\r\n\t\tmargin-left:333px;\r\n\t\tmargin-top:5px;\r\n\t\tdisplay:inline-block;\r\n\t}\r\n\t.mat-tab-label {\r\n\t\tmin-width: 25px !important;\r\n\t\tpadding: 5px;\r\n\t\tbackground-color: transparent;\r\n\t\tcolor: whitesmoke;\r\n\t\tfont-weight: 700;\r\n\t  }\r\n\t  .mat-badge-content{\r\n\t\tbackground : green;\r\n\t\tfont-size: small;\r\n\t\twidth: 50px;\r\n\t  }\r\n\t  .example-card1 {\r\n\t\tmax-width: 600px;\r\n\t  }\r\n\t  \r\n\t  .example-card2{\r\n\t\tmax-width: 500px;\r\n\t  }\r\n\t  \r\n\t  \r\n\t  .example-header-image {\r\n\t\tbackground-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n\t\tbackground-size: cover;\r\n\t  }\r\n\t  .item {\r\n\t\twidth: 100%;\r\n\t\tmargin-top:4%\r\n\t  }\r\n\t  \r\n\t  .container {\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t  }\r\n\t  \r\n\t  .container>div {\r\n\t\t-webkit-box-flex: 0;\r\n\t\t        flex: 0 50%;\r\n\t\t/*demo*/\r\n\t\tbox-sizing:border-box;\r\n\t\tbox-sizing:border-box;\r\n\t\tword-wrap: break-word;\r\n\t  \r\n\t  }\r\n\t  \r\n\t  .example-card {\r\n\t\t  max-width: 200px;\r\n\t\tbackground: linear-gradient(70deg, white 40%, #ffed4b 40%);    margin-left: 5%;\r\n\t\t  color:black;\r\n\t\t\r\n\t\t}\r\n\t  \r\n\t\t.example-card:hover {\r\n\t\t  color:black;\r\n\t\t  border-style: groove;\r\n\t\t}\r\n\t  \r\n\t\t.cards {\r\n\t\t   display: -webkit-box;\r\n\t\t   display: flex;\r\n\t\t   -webkit-box-pack: justify;\r\n\t\t           justify-content: space-between;\r\n\t\t   \r\n\t\t}\r\n\t\t#compbut{\r\n\t\t\tcolor: white;\r\n\t\t}\r\n\t\r\n}\r\n@media (min-width: 1025px){\r\n\t/* #subcode{\r\n\t\tdisplay: block;\r\n\t}\r\n\t#runcode{\r\n\t\tdisplay: block;\r\n\t} */\r\n\t.mat-form-field + .mat-form-field {\r\n\t\tmargin-left: 8px;\r\n\t  }\r\n\t#botnav{\r\n\t\tdisplay: none;\r\n\t}\r\n\t#cusin{\r\n\t\twidth: 180px;float: right;\r\n\t}\r\n\t#output1{\r\n\t\tbackground-color:black;\r\n\t\twidth: 300px;\r\n\t}\r\n\t#box{\r\n\t\tbackground-color: #323232;\r\n\t}\r\n    .example-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n    #bgimg {\r\n      display: inline-block;\r\n      \r\n     }\r\n    .example-is-mobile .example-toolbar {\r\n      position: fixed;\r\n      /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n      z-index: 2;\r\n    }\r\n    h1.example-app-name {\r\n      margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n      /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n         causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n         `<body>` to be our scrolling element for mobile layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1 0 auto;\r\n    }\r\n.wrap {\r\n    width: 100%;\r\n    float:left;\r\n    overflow:hidden;\r\n    height:100%;\r\n}\r\n\r\n.mat-tab-label {\r\n  min-width: 25px !important;\r\n  padding: 5px;\r\n  background-color: transparent;\r\n  color: whitesmoke;\r\n  font-weight: 700;\r\n}\r\n.mat-badge-content{\r\n  background : green;\r\n  font-size: small;\r\n  width: 50px;\r\n}\r\n/* .mat-badge{\r\n  background-color: #000;\r\n} */\r\n\r\n.resizable {\r\n    width: 50%;\r\n    height:100%;\r\n    padding: 0;\r\n    display: block;\r\n    float:left;\r\n    color:#000;\r\n    position:relative; \r\n}\r\n\r\n.resizable1 {\r\n    background-color: #191919;\r\n    min-width: 580px;\r\n    float:left;} \r\n    \r\n\r\n.resizable2 {\r\n    /* background-color: #f3f3f3; */\r\n    /* background-color: #eaeaea; */\r\n    background-color: black; \r\n    float:right;\r\n\r\n  }\r\n\r\n.resizable .inner {\r\n  padding:30px;\r\n  overflow:hidden;\r\n  overflow-y:auto;\r\n  position:absolute; \r\n  height:100%;\r\n  top:0;\r\n  left:0;\r\n  box-sizing: border-box;\r\n}\r\n.resizable1 .inner {\r\n  margin-right:7px;\r\n}\r\n.resizable2 .inner {\r\n  margin-left:7px;\r\n}\r\n\r\n.ui-resizable-e { \r\n    cursor: e-resize; \r\n    display:block!important;\r\n    width: 20px; \r\n    right: -7px;\r\n\r\n    top: 0; \r\n    bottom: 0; \r\n    background: #333;\r\n}\r\n.ui-resizable-e:hover{\r\n  background-color: #464646;\r\n}\r\np {\r\n  color: white;\r\n}\r\n/* s */\r\n\r\n/* ddddd */\r\n\r\n/* body, html {padding:0;margin:0;background:#000;height:100%;} */\r\n*{\r\n\tbox-sizing:border-box;\r\n}\r\n#mattab{\r\n\tfloat: left\r\n}\r\n#container{\r\n\twidth:500px;\r\n\theight:800px;\r\n\tbackground:black;\r\n\tmargin:0 auto;\r\n\tfont-size:0;\r\n\tborder-radius:5px;\r\n\toverflow:hidden;\r\n}\r\naside{\r\n\twidth:260px;\r\n\theight:800px;\r\n\tbackground-color:#3b3e49;\r\n\tdisplay:inline-block;\r\n\tfont-size:15px;\r\n\tvertical-align:top;\r\n}\r\nmain{\r\n\twidth:490px;\r\n\theight:800px;\r\n\tdisplay:inline-block;\r\n\tfont-size:15px;\r\n\tvertical-align:top;\r\n}\r\n\r\naside header{\r\n\tpadding:30px 20px;\r\n}\r\naside input{\r\n\twidth:100%;\r\n\theight:50px;\r\n\tline-height:50px;\r\n\tpadding:0 50px 0 20px;\r\n\tbackground-color:#5e616a;\r\n\tborder:none;\r\n\tborder-radius:3px;\r\n\tcolor:#fff;\r\n\tbackground-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_search.png);\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-position:170px;\r\n\tbackground-size:40px;\r\n}\r\naside input::-webkit-input-placeholder{\r\n\tcolor:#fff;\r\n}\r\naside input::-moz-placeholder{\r\n\tcolor:#fff;\r\n}\r\naside input::-ms-input-placeholder{\r\n\tcolor:#fff;\r\n}\r\naside input::placeholder{\r\n\tcolor:#fff;\r\n}\r\naside ul{\r\n\tpadding-left:0;\r\n\tmargin:0;\r\n\tlist-style-type:none;\r\n\toverflow-y:scroll;\r\n\theight:690px;\r\n}\r\naside li{\r\n\tpadding:10px 0;\r\n}\r\naside li:hover{\r\n\tbackground-color:#5e616a;\r\n}\r\nh2,h3{\r\n\tmargin:0;\r\n}\r\naside li img{\r\n\tborder-radius:50%;\r\n\tmargin-left:20px;\r\n\tmargin-right:8px;\r\n}\r\naside li div{\r\n\tdisplay:inline-block;\r\n\tvertical-align:top;\r\n\tmargin-top:12px;\r\n}\r\naside li h2{\r\n\tfont-size:14px;\r\n\tcolor:#fff;\r\n\tfont-weight:normal;\r\n\tmargin-bottom:5px;\r\n}\r\naside li h3{\r\n\tfont-size:12px;\r\n\tcolor:#7e818a;\r\n\tfont-weight:normal;\r\n}\r\n\r\n.status{\r\n\twidth:8px;\r\n\theight:8px;\r\n\tborder-radius:50%;\r\n\tdisplay:inline-block;\r\n\tmargin-right:7px;\r\n}\r\n.green{\r\n\tbackground-color:#58b666;\r\n}\r\n.orange{\r\n\tbackground-color:#ff725d;\r\n}\r\n.blue{\r\n\tbackground-color:#6fbced;\r\n\tmargin-right:0;\r\n\tmargin-left:7px;\r\n}\r\n\r\nmain header{\r\n\theight:110px;\r\n\tpadding:30px 20px 30px 40px;\r\n}\r\nmain header > *{\r\n\tdisplay:inline-block;\r\n\tvertical-align:top;\r\n}\r\nmain header img:first-child{\r\n\tborder-radius:50%;\r\n}\r\nmain header img:last-child{\r\n\twidth:24px;\r\n\tmargin-top:8px;\r\n}\r\nmain header div{\r\n\tmargin-left:10px;\r\n\tmargin-right:145px;\r\n}\r\nmain header h2{\r\n\tfont-size:16px;\r\n\tmargin-bottom:5px;\r\n}\r\nmain header h3{\r\n\tfont-size:14px;\r\n\tfont-weight:normal;\r\n\tcolor:#7e818a;\r\n}\r\n\r\n#chat{\r\n\tpadding-left:0;\r\n\tmargin:0;\r\n\tlist-style-type:none;\r\n\toverflow-y:scroll;\r\n\theight:535px;\r\n\tborder-top:2px solid #fff;\r\n\tborder-bottom:2px solid #fff;\r\n}\r\n#chat li{\r\n\tpadding:10px 30px;\r\n}\r\n#chat h2,#chat h3{\r\n\tdisplay:inline-block;\r\n\tfont-size:13px;\r\n\tfont-weight:normal;\r\n}\r\n#chat h3{\r\n\tcolor:#bbb;\r\n}\r\n#chat .entete{\r\n\tmargin-bottom:5px;\r\n}\r\n#chat .message{\r\n\tpadding:20px;\r\n\tcolor:#fff;\r\n\tline-height:25px;\r\n\tmax-width:90%;\r\n\tdisplay:inline-block;\r\n\ttext-align:left;\r\n\tborder-radius:5px;\r\n}\r\n#chat .me{\r\n\ttext-align:right;\r\n}\r\n#chat .you .message{\r\n\tbackground-color:#58b666;\r\n}\r\n#chat .me .message{\r\n\tbackground-color:#6fbced;\r\n}\r\n#chat .triangle{\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 0 10px 10px 10px;\r\n}\r\n#chat .you .triangle{\r\n\t\tborder-color: transparent transparent #58b666 transparent;\r\n\t\tmargin-left:15px;\r\n}\r\n#chat .me .triangle{\r\n\t\tborder-color: transparent transparent #6fbced transparent;\r\n\t\tmargin-left:375px;\r\n}\r\n\r\nmain footer{\r\n\theight:155px;\r\n\tpadding:20px 30px 10px 20px;\r\n}\r\nmain footer textarea{\r\n\tresize:none;\r\n\tborder:none;\r\n\tdisplay:block;\r\n\twidth:100%;\r\n\theight:80px;\r\n\tborder-radius:3px;\r\n\tpadding:20px;\r\n\tfont-size:13px;\r\n\tmargin-bottom:13px;\r\n}\r\nmain footer textarea::-webkit-input-placeholder{\r\n\tcolor:#ddd;\r\n}\r\nmain footer textarea::-moz-placeholder{\r\n\tcolor:#ddd;\r\n}\r\nmain footer textarea::-ms-input-placeholder{\r\n\tcolor:#ddd;\r\n}\r\nmain footer textarea::placeholder{\r\n\tcolor:#ddd;\r\n}\r\nmain footer img{\r\n\theight:30px;\r\n\tcursor:pointer;\r\n}\r\nmain footer a{\r\n\ttext-decoration:none;\r\n\ttext-transform:uppercase;\r\n\tfont-weight:bold;\r\n\tcolor:#6fbced;\r\n\tvertical-align:top;\r\n\tmargin-left:333px;\r\n\tmargin-top:5px;\r\n\tdisplay:inline-block;\r\n}\r\n\r\n/*  */\r\n.wrap {\r\n    width: 100%;\r\n    float:left;\r\n    overflow:hidden;\r\n    height:100%;\r\n}\r\n\r\n.mat-tab-label {\r\n  min-width: 25px !important;\r\n  padding: 5px;\r\n  background-color: transparent;\r\n  color: whitesmoke;\r\n  font-weight: 700;\r\n}\r\n.mat-badge-content{\r\n  background : green;\r\n  font-size: small;\r\n  width: 50px;\r\n}\r\n/* .mat-badge{\r\n  background-color: #000;\r\n} */\r\n\r\n.resizable {\r\n    width: 50%;\r\n    height:100%;\r\n    padding: 0;\r\n    display: block;\r\n    float:left;\r\n    color:#000;\r\n    position:relative; \r\n}\r\n\r\n.resizable1 {\r\n    background-color: #191919;\r\n    min-width: 580px;\r\n    float:left;} \r\n    \r\n\r\n.resizable2 {\r\n    /* background-color: #f3f3f3; */\r\n    /* background-color: #eaeaea; */\r\n    background-color: black; \r\n    float:right;\r\n\r\n  }\r\n\r\n.resizable .inner {\r\n  padding:30px;\r\n  overflow:hidden;\r\n  overflow-y:auto;\r\n  position:absolute; \r\n  height:100%;\r\n  top:0;\r\n  left:0;\r\n  box-sizing: border-box;\r\n}\r\n.resizable1 .inner {\r\n  margin-right:7px;\r\n}\r\n.resizable2 .inner {\r\n  margin-left:7px;\r\n}\r\n\r\n.ui-resizable-e { \r\n    cursor: e-resize; \r\n    display:block!important;\r\n    width: 20px; \r\n    right: -7px;\r\n\r\n    top: 0; \r\n    bottom: 0; \r\n    background: #333;\r\n}\r\n.ui-resizable-e:hover{\r\n  background-color: #464646;\r\n}\r\np {\r\n  color: white;\r\n}\r\n/* s */\r\n\r\n\r\n\r\n\r\n.example-card1 {\r\n\tmax-width: 600px;\r\n  }\r\n  \r\n  .example-card2{\r\n\tmax-width: 500px;\r\n  }\r\n  \r\n  \r\n  .example-header-image {\r\n\tbackground-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n\tbackground-size: cover;\r\n  }\r\n  .item {\r\n\twidth: 100%;\r\n\tmargin-top:4%\r\n  }\r\n  \r\n  .container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n  }\r\n  \r\n  .container>div {\r\n\t-webkit-box-flex: 0;\r\n\t        flex: 0 50%;\r\n\t/*demo*/\r\n\tbox-sizing:border-box;\r\n\tbox-sizing:border-box;\r\n\tword-wrap: break-word;\r\n  \r\n  }\r\n  \r\n  .example-card {\r\n\t  max-width: 200px;\r\n\tbackground: linear-gradient(70deg, white 40%, #ffed4b 40%);    margin-left: 5%;\r\n\t  color:black;\r\n\t\r\n\t}\r\n  \r\n\t.example-card:hover {\r\n\t  color:black;\r\n\t  border-style: groove;\r\n\t}\r\n  \r\n\t.cards {\r\n\t   display: -webkit-box;\r\n\t   display: flex;\r\n\t   -webkit-box-pack: justify;\r\n\t           justify-content: space-between;\r\n\t   \r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFO0FBQ2pFO0lBQ0k7TUFDRSxvQkFBYTtNQUFiLGFBQWE7TUFDYiw0QkFBc0I7TUFBdEIsNkJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFNBQVM7TUFDVCxPQUFPO01BQ1AsUUFBUTtDQUNiO0NBQ0E7RUFDQyxzQkFBc0I7Q0FDdkI7Q0FDQTtFQUNDLHlCQUF5QjtDQUMxQjtDQUNBO0VBQ0MsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsNkJBQTZCO0NBQzlCO0lBQ0c7TUFDRSxhQUFhOztLQUVkO0lBQ0Q7TUFDRSxlQUFlO01BQ2YsOEVBQThFO01BQzlFLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0U7OEZBQ3dGO01BQ3hGLG1CQUFPO2NBQVAsT0FBTztJQUNUOztJQUVBO01BQ0U7bUVBQzZEO01BQzdELG1CQUFjO2NBQWQsY0FBYztDQUNuQjtDQUNBO0VBQ0MsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtHQUNmO0dBQ0E7RUFDRCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7R0FDVjtHQUNBO0VBQ0QsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLHlCQUF5QjtDQUMxQjtDQUNBO0VBQ0MseUJBQXlCO0VBQ3pCLG1CQUFtQjs7RUFFbkI7RUFDQTtHQUNDLCtCQUErQjtHQUMvQiwrQkFBK0I7R0FDL0IsdUJBQXVCOzs7SUFHdEI7Q0FDSDtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0MsYUFBYTtDQUNkO0NBQ0E7Ozs7O0lBS0c7Q0FDSDs7Ozs7SUFLRztDQUNIOztFQUVDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YseUZBQXlGO0VBQ3pGLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsb0JBQW9CO0NBQ3JCO0NBQ0E7RUFDQyxVQUFVO0NBQ1g7Q0FGQTtFQUNDLFVBQVU7Q0FDWDtDQUZBO0VBQ0MsVUFBVTtDQUNYO0NBRkE7RUFDQyxVQUFVO0NBQ1g7Q0FDQTtFQUNDLGNBQWM7RUFDZCxRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0NBQ0E7RUFDQyxRQUFRO0NBQ1Q7Q0FDQTtFQUNDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0Msd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsWUFBWTtFQUNaLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0Msb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsY0FBYztDQUNmO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxjQUFjO0VBQ2QsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOEJBQThCO0NBQy9CO0NBQ0E7R0FDRSx5REFBeUQ7R0FDekQsZ0JBQWdCO0NBQ2xCO0NBQ0E7R0FDRSx5REFBeUQ7R0FDekQsaUJBQWlCO0NBQ25COztDQUVBO0VBQ0MsWUFBWTtFQUNaLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLFVBQVU7Q0FDWDtDQUZBO0VBQ0MsVUFBVTtDQUNYO0NBRkE7RUFDQyxVQUFVO0NBQ1g7Q0FGQTtFQUNDLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsV0FBVztFQUNYLGNBQWM7Q0FDZjtDQUNBO0VBQ0Msb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjtDQUNBO0VBQ0MsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtHQUNmO0dBQ0E7RUFDRCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7R0FDVjtHQUNBO0VBQ0QsZ0JBQWdCO0dBQ2Y7O0dBRUE7RUFDRCxnQkFBZ0I7R0FDZjs7O0dBR0E7RUFDRCxtRkFBbUY7RUFDbkYsc0JBQXNCO0dBQ3JCO0dBQ0E7RUFDRCxXQUFXO0VBQ1g7R0FDQzs7R0FFQTtFQUNELG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7R0FDZDs7R0FFQTtFQUNELG1CQUFXO1VBQVgsV0FBVztFQUNYLE9BQU87RUFDUCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjs7R0FFcEI7O0dBRUE7SUFDQyxnQkFBZ0I7RUFJbEIsMERBQTBELEtBQUssZUFBZTtJQUM1RSxXQUFXOztFQUViOztFQUVBO0lBQ0UsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7RUFFQTtLQUNHLG9CQUFhO0tBQWIsYUFBYTtLQUNiLHlCQUE4QjthQUE5Qiw4QkFBOEI7O0VBRWpDO0VBQ0E7R0FDQyxZQUFZO0VBQ2I7O0FBRUY7QUFDQTtDQUNDOzs7OztJQUtHO0NBQ0g7RUFDQyxnQkFBZ0I7R0FDZjtDQUNGO0VBQ0MsYUFBYTtDQUNkO0NBQ0E7RUFDQyxZQUFZLENBQUMsWUFBWTtDQUMxQjtDQUNBO0VBQ0Msc0JBQXNCO0VBQ3RCLFlBQVk7Q0FDYjtDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0lBQ0c7TUFDRSxvQkFBYTtNQUFiLGFBQWE7TUFDYiw0QkFBc0I7TUFBdEIsNkJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFNBQVM7TUFDVCxPQUFPO01BQ1AsUUFBUTtJQUNWO0lBQ0E7TUFDRSxxQkFBcUI7O0tBRXRCO0lBQ0Q7TUFDRSxlQUFlO01BQ2YsOEVBQThFO01BQzlFLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0U7OEZBQ3dGO01BQ3hGLG1CQUFPO2NBQVAsT0FBTztJQUNUOztJQUVBO01BQ0U7bUVBQzZEO01BQzdELG1CQUFjO2NBQWQsY0FBYztJQUNoQjtBQUNKO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsVUFBVSxDQUFDOzs7QUFHZjtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7O0VBRWI7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLEtBQUs7RUFDTCxNQUFNO0VBR0osc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXOztJQUVYLE1BQU07SUFDTixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLE1BQU07O0FBRU4sVUFBVTs7QUFFVixpRUFBaUU7QUFDakU7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsd0JBQXdCO0NBQ3hCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLHlGQUF5RjtDQUN6RiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBRkE7Q0FDQyxVQUFVO0FBQ1g7QUFGQTtDQUNDLFVBQVU7QUFDWDtBQUZBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsUUFBUTtDQUNSLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLHdCQUF3QjtDQUN4QixjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsUUFBUTtDQUNSLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLHlCQUF5QjtDQUN6Qiw0QkFBNEI7QUFDN0I7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLFFBQVE7Q0FDUixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLDhCQUE4QjtBQUMvQjtBQUNBO0VBQ0UseURBQXlEO0VBQ3pELGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseURBQXlEO0VBQ3pELGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLFVBQVU7Q0FDVixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFGQTtDQUNDLFVBQVU7QUFDWDtBQUZBO0NBQ0MsVUFBVTtBQUNYO0FBRkE7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0FBQ2Y7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxvQkFBb0I7QUFDckI7O0FBRUEsS0FBSztBQUNMO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsVUFBVSxDQUFDOzs7QUFHZjtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7O0VBRWI7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLEtBQUs7RUFDTCxNQUFNO0VBR0osc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXOztJQUVYLE1BQU07SUFDTixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLE1BQU07Ozs7O0FBS047Q0FDQyxnQkFBZ0I7RUFDZjs7RUFFQTtDQUNELGdCQUFnQjtFQUNmOzs7RUFHQTtDQUNELG1GQUFtRjtDQUNuRixzQkFBc0I7RUFDckI7RUFDQTtDQUNELFdBQVc7Q0FDWDtFQUNDOztFQUVBO0NBQ0Qsb0JBQWE7Q0FBYixhQUFhO0NBQ2IsZUFBZTtFQUNkOztFQUVBO0NBQ0QsbUJBQVc7U0FBWCxXQUFXO0NBQ1gsT0FBTztDQUNQLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIscUJBQXFCOztFQUVwQjs7RUFFQTtHQUNDLGdCQUFnQjtDQUlsQiwwREFBMEQsS0FBSyxlQUFlO0dBQzVFLFdBQVc7O0NBRWI7O0NBRUE7R0FDRSxXQUFXO0dBQ1gsb0JBQW9CO0NBQ3RCOztDQUVBO0lBQ0csb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4Qjs7Q0FFakM7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keSwgaHRtbCB7cGFkZGluZzowO21hcmdpbjowO2JhY2tncm91bmQ6IzAwMDtoZWlnaHQ6MTAwJTt9ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuXHR9XHJcblx0I291dHB1dDF7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5cdH1cclxuXHQjYm94e1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcclxuXHR9XHJcblx0I2JvdG5hdntcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0b3ZlcmZsb3c6IGF1dG87XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlIDtcclxuXHR9XHJcbiAgICAjYmdpbWcge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBcclxuICAgICB9XHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxIDAgYXV0bztcclxuXHR9XHJcblx0Lm1hdC10YWItbGFiZWwge1xyXG5cdFx0bWluLXdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHQgIH1cclxuXHQgIC5tYXQtYmFkZ2UtY29udGVudHtcclxuXHRcdGJhY2tncm91bmQgOiBncmVlbjtcclxuXHRcdGZvbnQtc2l6ZTogc21hbGw7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHQgIH1cclxuXHQgIC5yZXNpemFibGUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNvbG9yOiMwMDA7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcblx0fVxyXG5cdCNkaXNje1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuXHR9XHJcblx0LnJlc2l6YWJsZTEge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMCU7XHJcblx0XHRcclxuXHRcdH0gXHJcblx0XHQucmVzaXphYmxlMiB7XHJcblx0XHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7ICovXHJcblx0XHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7ICovXHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuXHRcdFx0XHJcblx0XHRcclxuXHRcdCAgfVxyXG5cdCNwc3tcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQjcHMxe1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LyogI3N1YmNvZGV7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQjcnVuY29kZXtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fSAqL1xyXG5cdC8qICNzdWJjb2RlMXtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQjcnVuY29kZTF7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH0gKi9cclxuXHQjY29udGFpbmVye1xyXG5cdFx0XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOmJsYWNrO1xyXG5cdFx0bWFyZ2luOjAgYXV0bztcclxuXHRcdGZvbnQtc2l6ZTowO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo1cHg7XHJcblx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0fVxyXG5cdGFzaWRle1xyXG5cdFx0d2lkdGg6MjYwcHg7XHJcblx0XHRoZWlnaHQ6ODAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiMzYjNlNDk7XHJcblx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0dmVydGljYWwtYWxpZ246dG9wO1xyXG5cdH1cclxuXHRtYWlue1xyXG5cdFx0d2lkdGg6NDkwcHg7XHJcblx0XHRoZWlnaHQ6ODAwcHg7XHJcblx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdGZvbnQtc2l6ZToxNXB4O1xyXG5cdFx0dmVydGljYWwtYWxpZ246dG9wO1xyXG5cdH1cclxuXHRcclxuXHRhc2lkZSBoZWFkZXJ7XHJcblx0XHRwYWRkaW5nOjMwcHggMjBweDtcclxuXHR9XHJcblx0YXNpZGUgaW5wdXR7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0aGVpZ2h0OjUwcHg7XHJcblx0XHRsaW5lLWhlaWdodDo1MHB4O1xyXG5cdFx0cGFkZGluZzowIDUwcHggMCAyMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjojNWU2MTZhO1xyXG5cdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRib3JkZXItcmFkaXVzOjNweDtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xOTQwMzA2L2ljb19zZWFyY2gucG5nKTtcclxuXHRcdGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246MTcwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6NDBweDtcclxuXHR9XHJcblx0YXNpZGUgaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHR9XHJcblx0YXNpZGUgdWx7XHJcblx0XHRwYWRkaW5nLWxlZnQ6MDtcclxuXHRcdG1hcmdpbjowO1xyXG5cdFx0bGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcblx0XHRvdmVyZmxvdy15OnNjcm9sbDtcclxuXHRcdGhlaWdodDo2OTBweDtcclxuXHR9XHJcblx0YXNpZGUgbGl7XHJcblx0XHRwYWRkaW5nOjEwcHggMDtcclxuXHR9XHJcblx0YXNpZGUgbGk6aG92ZXJ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM1ZTYxNmE7XHJcblx0fVxyXG5cdGgyLGgze1xyXG5cdFx0bWFyZ2luOjA7XHJcblx0fVxyXG5cdGFzaWRlIGxpIGltZ3tcclxuXHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0bWFyZ2luLWxlZnQ6MjBweDtcclxuXHRcdG1hcmdpbi1yaWdodDo4cHg7XHJcblx0fVxyXG5cdGFzaWRlIGxpIGRpdntcclxuXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0dmVydGljYWwtYWxpZ246dG9wO1xyXG5cdFx0bWFyZ2luLXRvcDoxMnB4O1xyXG5cdH1cclxuXHRhc2lkZSBsaSBoMntcclxuXHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdH1cclxuXHRhc2lkZSBsaSBoM3tcclxuXHRcdGZvbnQtc2l6ZToxMnB4O1xyXG5cdFx0Y29sb3I6IzdlODE4YTtcclxuXHRcdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHR9XHJcblx0XHJcblx0LnN0YXR1c3tcclxuXHRcdHdpZHRoOjhweDtcclxuXHRcdGhlaWdodDo4cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OjdweDtcclxuXHR9XHJcblx0LmdyZWVue1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjojNThiNjY2O1xyXG5cdH1cclxuXHQub3Jhbmdle1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjojZmY3MjVkO1xyXG5cdH1cclxuXHQuYmx1ZXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IzZmYmNlZDtcclxuXHRcdG1hcmdpbi1yaWdodDowO1xyXG5cdFx0bWFyZ2luLWxlZnQ6N3B4O1xyXG5cdH1cclxuXHRcclxuXHRtYWluIGhlYWRlcntcclxuXHRcdGhlaWdodDoxMTBweDtcclxuXHRcdHBhZGRpbmc6MzBweCAyMHB4IDMwcHggNDBweDtcclxuXHR9XHJcblx0bWFpbiBoZWFkZXIgPiAqe1xyXG5cdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcblx0fVxyXG5cdG1haW4gaGVhZGVyIGltZzpmaXJzdC1jaGlsZHtcclxuXHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdH1cclxuXHRtYWluIGhlYWRlciBpbWc6bGFzdC1jaGlsZHtcclxuXHRcdHdpZHRoOjI0cHg7XHJcblx0XHRtYXJnaW4tdG9wOjhweDtcclxuXHR9XHJcblx0bWFpbiBoZWFkZXIgZGl2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdG1hcmdpbi1yaWdodDoxNDVweDtcclxuXHR9XHJcblx0bWFpbiBoZWFkZXIgaDJ7XHJcblx0XHRmb250LXNpemU6MTZweDtcclxuXHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdH1cclxuXHRtYWluIGhlYWRlciBoM3tcclxuXHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0Y29sb3I6IzdlODE4YTtcclxuXHR9XHJcblx0XHJcblx0I2NoYXR7XHJcblx0XHRwYWRkaW5nLWxlZnQ6MDtcclxuXHRcdG1hcmdpbjowO1xyXG5cdFx0bGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcblx0XHRvdmVyZmxvdy15OnNjcm9sbDtcclxuXHRcdGhlaWdodDo1MzVweDtcclxuXHRcdGJvcmRlci10b3A6MnB4IHNvbGlkICNmZmY7XHJcblx0XHRib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZmZmO1xyXG5cdH1cclxuXHQjY2hhdCBsaXtcclxuXHRcdHBhZGRpbmc6MTBweCAzMHB4O1xyXG5cdH1cclxuXHQjY2hhdCBoMiwjY2hhdCBoM3tcclxuXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0Zm9udC1zaXplOjEzcHg7XHJcblx0XHRmb250LXdlaWdodDpub3JtYWw7XHJcblx0fVxyXG5cdCNjaGF0IGgze1xyXG5cdFx0Y29sb3I6I2JiYjtcclxuXHR9XHJcblx0I2NoYXQgLmVudGV0ZXtcclxuXHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdH1cclxuXHQjY2hhdCAubWVzc2FnZXtcclxuXHRcdHBhZGRpbmc6MjBweDtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRsaW5lLWhlaWdodDoyNXB4O1xyXG5cdFx0bWF4LXdpZHRoOjkwJTtcclxuXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo1cHg7XHJcblx0fVxyXG5cdCNjaGF0IC5tZXtcclxuXHRcdHRleHQtYWxpZ246cmlnaHQ7XHJcblx0fVxyXG5cdCNjaGF0IC55b3UgLm1lc3NhZ2V7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM1OGI2NjY7XHJcblx0fVxyXG5cdCNjaGF0IC5tZSAubWVzc2FnZXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IzZmYmNlZDtcclxuXHR9XHJcblx0I2NoYXQgLnRyaWFuZ2xle1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xyXG5cdH1cclxuXHQjY2hhdCAueW91IC50cmlhbmdsZXtcclxuXHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNThiNjY2IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQjY2hhdCAubWUgLnRyaWFuZ2xle1xyXG5cdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM2ZmJjZWQgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjM3NXB4O1xyXG5cdH1cclxuXHRcclxuXHRtYWluIGZvb3RlcntcclxuXHRcdGhlaWdodDoxNTVweDtcclxuXHRcdHBhZGRpbmc6MjBweCAzMHB4IDEwcHggMjBweDtcclxuXHR9XHJcblx0bWFpbiBmb290ZXIgdGV4dGFyZWF7XHJcblx0XHRyZXNpemU6bm9uZTtcclxuXHRcdGJvcmRlcjpub25lO1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6ODBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdFx0cGFkZGluZzoyMHB4O1xyXG5cdFx0Zm9udC1zaXplOjEzcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOjEzcHg7XHJcblx0fVxyXG5cdG1haW4gZm9vdGVyIHRleHRhcmVhOjpwbGFjZWhvbGRlcntcclxuXHRcdGNvbG9yOiNkZGQ7XHJcblx0fVxyXG5cdG1haW4gZm9vdGVyIGltZ3tcclxuXHRcdGhlaWdodDozMHB4O1xyXG5cdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0fVxyXG5cdG1haW4gZm9vdGVyIGF7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuXHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHRjb2xvcjojNmZiY2VkO1xyXG5cdFx0dmVydGljYWwtYWxpZ246dG9wO1xyXG5cdFx0bWFyZ2luLWxlZnQ6MzMzcHg7XHJcblx0XHRtYXJnaW4tdG9wOjVweDtcclxuXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdH1cclxuXHQubWF0LXRhYi1sYWJlbCB7XHJcblx0XHRtaW4td2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmc6IDVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0Y29sb3I6IHdoaXRlc21va2U7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdCAgfVxyXG5cdCAgLm1hdC1iYWRnZS1jb250ZW50e1xyXG5cdFx0YmFja2dyb3VuZCA6IGdyZWVuO1xyXG5cdFx0Zm9udC1zaXplOiBzbWFsbDtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdCAgfVxyXG5cdCAgLmV4YW1wbGUtY2FyZDEge1xyXG5cdFx0bWF4LXdpZHRoOiA2MDBweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmV4YW1wbGUtY2FyZDJ7XHJcblx0XHRtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICBcclxuXHQgIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0ICB9XHJcblx0ICAuaXRlbSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi10b3A6NCVcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmNvbnRhaW5lciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuY29udGFpbmVyPmRpdiB7XHJcblx0XHRmbGV4OiAwIDUwJTtcclxuXHRcdC8qZGVtbyovXHJcblx0XHRib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcblx0XHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0ICBcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmV4YW1wbGUtY2FyZCB7XHJcblx0XHQgIG1heC13aWR0aDogMjAwcHg7XHJcblx0XHQgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDcwZGVnLCB3aGl0ZSA0MCUsICNmZmVkNGIgNDAlKTtcclxuXHRcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg3MGRlZywgd2hpdGUgNDAlLCAjZmZlZDRiIDQwJSk7XHJcblx0XHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg3MGRlZywgd2hpdGUgNDAlLCAjZmZlZDRiIDQwJSk7XHJcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzBkZWcsIHdoaXRlIDQwJSwgI2ZmZWQ0YiA0MCUpOyAgICBtYXJnaW4tbGVmdDogNSU7XHJcblx0XHQgIGNvbG9yOmJsYWNrO1xyXG5cdFx0XHJcblx0XHR9XHJcblx0ICBcclxuXHRcdC5leGFtcGxlLWNhcmQ6aG92ZXIge1xyXG5cdFx0ICBjb2xvcjpibGFjaztcclxuXHRcdCAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcblx0XHR9XHJcblx0ICBcclxuXHRcdC5jYXJkcyB7XHJcblx0XHQgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0ICAgXHJcblx0XHR9XHJcblx0XHQjY29tcGJ1dHtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0fVxyXG5cdFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpe1xyXG5cdC8qICNzdWJjb2Rle1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdCNydW5jb2Rle1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fSAqL1xyXG5cdC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcblx0XHRtYXJnaW4tbGVmdDogOHB4O1xyXG5cdCAgfVxyXG5cdCNib3RuYXZ7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQjY3VzaW57XHJcblx0XHR3aWR0aDogMTgwcHg7ZmxvYXQ6IHJpZ2h0O1xyXG5cdH1cclxuXHQjb3V0cHV0MXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0fVxyXG5cdCNib3h7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xyXG5cdH1cclxuICAgIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgI2JnaW1nIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBcclxuICAgICB9XHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxuLndyYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsIHtcclxuICBtaW4td2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubWF0LWJhZGdlLWNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZCA6IGdyZWVuO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLyogLm1hdC1iYWRnZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59ICovXHJcblxyXG4ucmVzaXphYmxlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG59XHJcblxyXG4ucmVzaXphYmxlMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gICAgbWluLXdpZHRoOiA1ODBweDtcclxuICAgIGZsb2F0OmxlZnQ7fSBcclxuICAgIFxyXG5cclxuLnJlc2l6YWJsZTIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMzsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICBmbG9hdDpyaWdodDtcclxuXHJcbiAgfVxyXG5cclxuLnJlc2l6YWJsZSAuaW5uZXIge1xyXG4gIHBhZGRpbmc6MzBweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTphdXRvO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlOyBcclxuICBoZWlnaHQ6MTAwJTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucmVzaXphYmxlMSAuaW5uZXIge1xyXG4gIG1hcmdpbi1yaWdodDo3cHg7XHJcbn1cclxuLnJlc2l6YWJsZTIgLmlubmVyIHtcclxuICBtYXJnaW4tbGVmdDo3cHg7XHJcbn1cclxuXHJcbi51aS1yZXNpemFibGUtZSB7IFxyXG4gICAgY3Vyc29yOiBlLXJlc2l6ZTsgXHJcbiAgICBkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMHB4OyBcclxuICAgIHJpZ2h0OiAtN3B4O1xyXG5cclxuICAgIHRvcDogMDsgXHJcbiAgICBib3R0b206IDA7IFxyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxufVxyXG4udWktcmVzaXphYmxlLWU6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDY0NjtcclxufVxyXG5wIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogcyAqL1xyXG5cclxuLyogZGRkZGQgKi9cclxuXHJcbi8qIGJvZHksIGh0bWwge3BhZGRpbmc6MDttYXJnaW46MDtiYWNrZ3JvdW5kOiMwMDA7aGVpZ2h0OjEwMCU7fSAqL1xyXG4qe1xyXG5cdGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxufVxyXG4jbWF0dGFie1xyXG5cdGZsb2F0OiBsZWZ0XHJcbn1cclxuI2NvbnRhaW5lcntcclxuXHR3aWR0aDo1MDBweDtcclxuXHRoZWlnaHQ6ODAwcHg7XHJcblx0YmFja2dyb3VuZDpibGFjaztcclxuXHRtYXJnaW46MCBhdXRvO1xyXG5cdGZvbnQtc2l6ZTowO1xyXG5cdGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5hc2lkZXtcclxuXHR3aWR0aDoyNjBweDtcclxuXHRoZWlnaHQ6ODAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojM2IzZTQ5O1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZToxNXB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5tYWlue1xyXG5cdHdpZHRoOjQ5MHB4O1xyXG5cdGhlaWdodDo4MDBweDtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6MTVweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuXHJcbmFzaWRlIGhlYWRlcntcclxuXHRwYWRkaW5nOjMwcHggMjBweDtcclxufVxyXG5hc2lkZSBpbnB1dHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDo1MHB4O1xyXG5cdGxpbmUtaGVpZ2h0OjUwcHg7XHJcblx0cGFkZGluZzowIDUwcHggMCAyMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzVlNjE2YTtcclxuXHRib3JkZXI6bm9uZTtcclxuXHRib3JkZXItcmFkaXVzOjNweDtcclxuXHRjb2xvcjojZmZmO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NDAzMDYvaWNvX3NlYXJjaC5wbmcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOjE3MHB4O1xyXG5cdGJhY2tncm91bmQtc2l6ZTo0MHB4O1xyXG59XHJcbmFzaWRlIGlucHV0OjpwbGFjZWhvbGRlcntcclxuXHRjb2xvcjojZmZmO1xyXG59XHJcbmFzaWRlIHVse1xyXG5cdHBhZGRpbmctbGVmdDowO1xyXG5cdG1hcmdpbjowO1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5cdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdGhlaWdodDo2OTBweDtcclxufVxyXG5hc2lkZSBsaXtcclxuXHRwYWRkaW5nOjEwcHggMDtcclxufVxyXG5hc2lkZSBsaTpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiM1ZTYxNmE7XHJcbn1cclxuaDIsaDN7XHJcblx0bWFyZ2luOjA7XHJcbn1cclxuYXNpZGUgbGkgaW1ne1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdG1hcmdpbi1sZWZ0OjIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OjhweDtcclxufVxyXG5hc2lkZSBsaSBkaXZ7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0dmVydGljYWwtYWxpZ246dG9wO1xyXG5cdG1hcmdpbi10b3A6MTJweDtcclxufVxyXG5hc2lkZSBsaSBoMntcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRjb2xvcjojZmZmO1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOjVweDtcclxufVxyXG5hc2lkZSBsaSBoM3tcclxuXHRmb250LXNpemU6MTJweDtcclxuXHRjb2xvcjojN2U4MThhO1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxufVxyXG5cclxuLnN0YXR1c3tcclxuXHR3aWR0aDo4cHg7XHJcblx0aGVpZ2h0OjhweDtcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tcmlnaHQ6N3B4O1xyXG59XHJcbi5ncmVlbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiM1OGI2NjY7XHJcbn1cclxuLm9yYW5nZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZjcyNWQ7XHJcbn1cclxuLmJsdWV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojNmZiY2VkO1xyXG5cdG1hcmdpbi1yaWdodDowO1xyXG5cdG1hcmdpbi1sZWZ0OjdweDtcclxufVxyXG5cclxubWFpbiBoZWFkZXJ7XHJcblx0aGVpZ2h0OjExMHB4O1xyXG5cdHBhZGRpbmc6MzBweCAyMHB4IDMwcHggNDBweDtcclxufVxyXG5tYWluIGhlYWRlciA+ICp7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0dmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcbm1haW4gaGVhZGVyIGltZzpmaXJzdC1jaGlsZHtcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcclxufVxyXG5tYWluIGhlYWRlciBpbWc6bGFzdC1jaGlsZHtcclxuXHR3aWR0aDoyNHB4O1xyXG5cdG1hcmdpbi10b3A6OHB4O1xyXG59XHJcbm1haW4gaGVhZGVyIGRpdntcclxuXHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdG1hcmdpbi1yaWdodDoxNDVweDtcclxufVxyXG5tYWluIGhlYWRlciBoMntcclxuXHRmb250LXNpemU6MTZweDtcclxuXHRtYXJnaW4tYm90dG9tOjVweDtcclxufVxyXG5tYWluIGhlYWRlciBoM3tcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRmb250LXdlaWdodDpub3JtYWw7XHJcblx0Y29sb3I6IzdlODE4YTtcclxufVxyXG5cclxuI2NoYXR7XHJcblx0cGFkZGluZy1sZWZ0OjA7XHJcblx0bWFyZ2luOjA7XHJcblx0bGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcblx0b3ZlcmZsb3cteTpzY3JvbGw7XHJcblx0aGVpZ2h0OjUzNXB4O1xyXG5cdGJvcmRlci10b3A6MnB4IHNvbGlkICNmZmY7XHJcblx0Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2ZmZjtcclxufVxyXG4jY2hhdCBsaXtcclxuXHRwYWRkaW5nOjEwcHggMzBweDtcclxufVxyXG4jY2hhdCBoMiwjY2hhdCBoM3tcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6MTNweDtcclxuXHRmb250LXdlaWdodDpub3JtYWw7XHJcbn1cclxuI2NoYXQgaDN7XHJcblx0Y29sb3I6I2JiYjtcclxufVxyXG4jY2hhdCAuZW50ZXRle1xyXG5cdG1hcmdpbi1ib3R0b206NXB4O1xyXG59XHJcbiNjaGF0IC5tZXNzYWdle1xyXG5cdHBhZGRpbmc6MjBweDtcclxuXHRjb2xvcjojZmZmO1xyXG5cdGxpbmUtaGVpZ2h0OjI1cHg7XHJcblx0bWF4LXdpZHRoOjkwJTtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0Ym9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuI2NoYXQgLm1le1xyXG5cdHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuI2NoYXQgLnlvdSAubWVzc2FnZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiM1OGI2NjY7XHJcbn1cclxuI2NoYXQgLm1lIC5tZXNzYWdle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzZmYmNlZDtcclxufVxyXG4jY2hhdCAudHJpYW5nbGV7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xyXG59XHJcbiNjaGF0IC55b3UgLnRyaWFuZ2xle1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNThiNjY2IHRyYW5zcGFyZW50O1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxufVxyXG4jY2hhdCAubWUgLnRyaWFuZ2xle1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNmZiY2VkIHRyYW5zcGFyZW50O1xyXG5cdFx0bWFyZ2luLWxlZnQ6Mzc1cHg7XHJcbn1cclxuXHJcbm1haW4gZm9vdGVye1xyXG5cdGhlaWdodDoxNTVweDtcclxuXHRwYWRkaW5nOjIwcHggMzBweCAxMHB4IDIwcHg7XHJcbn1cclxubWFpbiBmb290ZXIgdGV4dGFyZWF7XHJcblx0cmVzaXplOm5vbmU7XHJcblx0Ym9yZGVyOm5vbmU7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDo4MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdHBhZGRpbmc6MjBweDtcclxuXHRmb250LXNpemU6MTNweDtcclxuXHRtYXJnaW4tYm90dG9tOjEzcHg7XHJcbn1cclxubWFpbiBmb290ZXIgdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG5cdGNvbG9yOiNkZGQ7XHJcbn1cclxubWFpbiBmb290ZXIgaW1ne1xyXG5cdGhlaWdodDozMHB4O1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbm1haW4gZm9vdGVyIGF7XHJcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0Y29sb3I6IzZmYmNlZDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcblx0bWFyZ2luLWxlZnQ6MzMzcHg7XHJcblx0bWFyZ2luLXRvcDo1cHg7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qICAqL1xyXG4ud3JhcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwge1xyXG4gIG1pbi13aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5tYXQtYmFkZ2UtY29udGVudHtcclxuICBiYWNrZ3JvdW5kIDogZ3JlZW47XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG4vKiAubWF0LWJhZGdle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn0gKi9cclxuXHJcbi5yZXNpemFibGUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbn1cclxuXHJcbi5yZXNpemFibGUxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgICBtaW4td2lkdGg6IDU4MHB4O1xyXG4gICAgZmxvYXQ6bGVmdDt9IFxyXG4gICAgXHJcblxyXG4ucmVzaXphYmxlMiB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG5cclxuICB9XHJcblxyXG4ucmVzaXphYmxlIC5pbm5lciB7XHJcbiAgcGFkZGluZzozMHB4O1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBvdmVyZmxvdy15OmF1dG87XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5yZXNpemFibGUxIC5pbm5lciB7XHJcbiAgbWFyZ2luLXJpZ2h0OjdweDtcclxufVxyXG4ucmVzaXphYmxlMiAuaW5uZXIge1xyXG4gIG1hcmdpbi1sZWZ0OjdweDtcclxufVxyXG5cclxuLnVpLXJlc2l6YWJsZS1lIHsgXHJcbiAgICBjdXJzb3I6IGUtcmVzaXplOyBcclxuICAgIGRpc3BsYXk6YmxvY2shaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIwcHg7IFxyXG4gICAgcmlnaHQ6IC03cHg7XHJcblxyXG4gICAgdG9wOiAwOyBcclxuICAgIGJvdHRvbTogMDsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcbi51aS1yZXNpemFibGUtZTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKiBzICovXHJcblxyXG5cclxuXHJcblxyXG4uZXhhbXBsZS1jYXJkMSB7XHJcblx0bWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY2FyZDJ7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuaXRlbSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDo0JVxyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcj5kaXYge1xyXG5cdGZsZXg6IDAgNTAlO1xyXG5cdC8qZGVtbyovXHJcblx0Ym94LXNpemluZzpib3JkZXItYm94O1xyXG5cdGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNhcmQge1xyXG5cdCAgbWF4LXdpZHRoOiAyMDBweDtcclxuXHQgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDcwZGVnLCB3aGl0ZSA0MCUsICNmZmVkNGIgNDAlKTtcclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNzBkZWcsIHdoaXRlIDQwJSwgI2ZmZWQ0YiA0MCUpO1xyXG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDcwZGVnLCB3aGl0ZSA0MCUsICNmZmVkNGIgNDAlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzBkZWcsIHdoaXRlIDQwJSwgI2ZmZWQ0YiA0MCUpOyAgICBtYXJnaW4tbGVmdDogNSU7XHJcblx0ICBjb2xvcjpibGFjaztcclxuXHRcclxuXHR9XHJcbiAgXHJcblx0LmV4YW1wbGUtY2FyZDpob3ZlciB7XHJcblx0ICBjb2xvcjpibGFjaztcclxuXHQgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG5cdH1cclxuICBcclxuXHQuY2FyZHMge1xyXG5cdCAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdCAgIFxyXG5cdH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/program/program.component.ts":
/*!**********************************************!*\
  !*** ./src/app/program/program.component.ts ***!
  \**********************************************/
/*! exports provided: default, ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program.service */ "./src/app/program/program.service.ts");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);












pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default.a.pdfMake.vfs;
var firebaseConfig = {
    apiKey: "AIzaSyDc-AMQY1i9Rx85kCrG6yJM1guhkxMOBYc",
    authDomain: "newproj-aa594.firebaseapp.com",
    databaseURL: "https://newproj-aa594.firebaseio.com",
    projectId: "newproj-aa594",
    storageBucket: "newproj-aa594.appspot.com",
    messagingSenderId: "496383872974",
    appId: "1:496383872974:web:f467a1fc1f505d7be8a59f",
    measurementId: "G-84B0YHYC4K"
};
// Initialize Firebase
firebase__WEBPACK_IMPORTED_MODULE_11__["initializeApp"](firebaseConfig);
/* harmony default export */ __webpack_exports__["default"] = (!firebase__WEBPACK_IMPORTED_MODULE_11__["apps"].length ? firebase__WEBPACK_IMPORTED_MODULE_11__["initializeApp"](firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_11__["app"]());

let ProgramComponent = class ProgramComponent {
    constructor(dialog, _enrolllmentService, renderer, _interactionService, snackBar, _formBuilder, changeDetectorRef, media) {
        this.dialog = dialog;
        this._enrolllmentService = _enrolllmentService;
        this.renderer = renderer;
        this._interactionService = _interactionService;
        this.snackBar = snackBar;
        this._formBuilder = _formBuilder;
        this.testcase12 = [];
        this.items = [
            { icon: 'developer_board', label: 'Problem', routerLink: '/program/ps' },
            { icon: 'dvr', label: 'IDE', routerLink: '/program/ps1' }
        ];
        this.members = [];
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.prog = {
            "eno": "",
            "pno": "",
            "title": "",
            "desc": "",
            "ip_format": "",
            "cons": "",
            "op_format": "",
            "tc_ip": "",
            "tc_op": "",
            "expl": "",
            "tcip": [],
            "tcop": [],
            "pkey": ""
        };
        this.compiler = "";
        this.isLinear = false;
        this.disp1 = true;
        this.disp2 = false;
        this.disp3 = false;
        this.disp4 = false;
        this.disp5 = false;
        this.editorOptions = { theme: "vs-dark", language: 'c', automaticLayout: true, roundedSelection: true,
            autoIndent: true };
        this.code1 = 'function x() {\nconsole.log("Hello world!");\n}';
        this.programming = "";
        this.arr = [];
        this.op = [];
        this.testcase = [];
        this.size = this.arr.length;
        this.show = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    mychange() {
        console.log("bro", window.innerWidth);
        this.location = window.location.href;
        console.log(this.location);
        if (this.location.includes("ps1")) {
            document.getElementById("ps").style.display = "none";
            document.getElementById("ps1").style.display = "block";
            console.log("problem");
        }
        else {
            document.getElementById("ps").style.display = "block";
            document.getElementById("ps1").style.display = "none";
            console.log("code");
        }
        // if(item.MouseEvent.screenX <)
    }
    theme(stheme) {
        console.log(stheme);
        this.editorOptions = Object.assign({}, this.editorOptions, { theme: stheme });
    }
    onInit(editor) {
        this.compiler123 = localStorage.getItem('compiler1');
        console.log("hello", this.compiler123);
        let line = editor.getPosition();
        console.log(line);
        editor.layout(innerWidth);
        this.programming = localStorage.getItem('programming');
        this.prog.eno = localStorage.getItem('eno');
        this.prog.pno = localStorage.getItem('pno');
        this.prog.title = localStorage.getItem('title');
        this.prog.desc = localStorage.getItem('desc');
        this.prog.ip_format = localStorage.getItem('ip_format');
        this.prog.cons = localStorage.getItem('cons');
        this.prog.op_format = localStorage.getItem('op_format');
        this.prog.tc_ip = localStorage.getItem('tc_ip');
        this.prog.tc_op = localStorage.getItem('tc_op');
        this.prog.expl = localStorage.getItem('expl');
        this.prog.pkey = localStorage.getItem('pkey');
        this.i = localStorage.getItem('i');
        this.j = localStorage.getItem('j');
        this._enrolllmentService.enroll3(this.programming).subscribe(data => {
            console.log("success", data);
            console.log("dd", data.manual[this.i].prog[this.j].tcip);
            this.arr = data.manual[this.i].prog[this.j].tcip;
            this.op = data.manual[this.i].prog[this.j].tcop;
            console.log(this.arr, this.op);
        }, error => console.error("error", error));
    }
    changed(str) {
        console.log('yo', str);
        localStorage.setItem('compiler', str);
    }
    extractcode() {
        console.log(this.code1);
        var result = JSON.stringify(this.code1);
        console.log("hello", result);
        var obj = JSON.parse('{ "email":' + result + '}');
        console.log("bom", obj);
        this._enrolllmentService.enroll(obj).subscribe(data => console.log("success", data), error => console.error("error", error));
    }
    extractcode1(ele, i, out1) {
        setTimeout(() => {
            console.log(this.code1);
            console.log("hola", ele);
            this.code2 = ele;
            var b = encodeURIComponent(this.code1);
            var c = encodeURIComponent(this.code2);
            console.log(b);
            console.log(c);
            var d = this.compiler123;
            this._enrolllmentService.enroll1(b, c, d).subscribe(data => {
                console.log("success", data['name']);
                this.outputfinal = data['name'];
                var trim = this.outputfinal.trim();
                console.log(this.outputfinal);
                if (trim == out1) {
                    this.testcase.push({ id: "TestCase " + i, status: "Pass", color: "green" });
                    console.log("pass wala");
                }
                else {
                    this.testcase.push({ id: "TestCase " + i, status: "Fail", color: "red" });
                    console.log("fail wala");
                }
                const p = this.renderer.createElement('p');
                p.innerHTML = this.testcase[i].id + " : " + this.testcase[i].status;
                p.style.color = this.testcase[i].color;
                this.renderer.appendChild(this.div.nativeElement, p);
            }, error => console.error("error", error));
        }, 5000 * i);
        // var c = JSON.parse('{"email":"'+b+'"}')
    }
    extractcode2(ele, i, out1) {
        setTimeout(() => {
            console.log(this.code1);
            console.log("hola", ele);
            this.code2 = ele;
            var b = encodeURIComponent(this.code1);
            var c = encodeURIComponent(this.code2);
            // this.testcase12.push([this.code1,this.code2])
            console.log(b);
            console.log(c);
            var d = this.compiler123;
            this._enrolllmentService.enroll1(b, c, d).subscribe(data => {
                console.log("success", data['name']);
                this.outputfinal = data['name'];
                var trim = this.outputfinal.trim();
                console.log(this.outputfinal);
                if (trim == out1) {
                    this.testcase.push({ id: "TestCase " + i, status: "Pass", color: "green" });
                    console.log("pass1 wala");
                }
                else {
                    this.testcase.push({ id: "TestCase " + i, status: "Fail", color: "red" });
                    console.log("fail1 wala");
                }
                const p = this.renderer.createElement('p');
                p.innerHTML = this.testcase[i].id + " : " + this.testcase[i].status;
                var obj = { "Testcase": this.testcase[i].status };
                this.testcase12.push(obj);
                p.style.color = this.testcase[i].color;
                console.log("tc", this.testcase12);
                this.renderer.appendChild(this.div.nativeElement, p);
                firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("Submit").doc(this.useremail + this.prog.title).set({
                    tc: this.testcase12,
                    date: this.date,
                    code: this.code1
                });
            }, error => console.error("error", error));
        }, 5000 * i);
        // var c = JSON.parse('{"email":"'+b+'"}')
    }
    checkop(op_ele) {
        console.log("call");
        this.op.forEach(element => {
            if (op_ele == element) {
                this.testcase.push("pass");
                console.log(this.testcase);
            }
        });
    }
    start(title, subtitle, email) {
        this.title = title;
        this.subtitle = subtitle;
        console.log(title, subtitle, email);
        this.disp3 = false;
        this.disp5 = true;
        $(".chat").append('<li class="self"><div style="color:white;background:#0B93F6;align-self: flex-end;max-width: 255px;word-wrap: break-word;margin-bottom: 12px;line-height: 15px;position:relative;padding:10px 20px;border-radius:25px;max-width: 450px;margin: 50px auto; display: -webkit-box;display: flex;-webkit-box-orient: vertical-webkit-box-direction: normal; flex-direction: column;"><span >' + '<p >Welcome to codellion connect</p></div></li>');
        console.log("meraemail", email);
        var newarr = [];
        var newarr1 = [];
        var index1 = 0;
        var index;
        var data23 = localStorage.getItem('email');
        firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("user online status").doc().set({
            online: true,
            email: email
        }, { merge: true })
            .then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
        firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("messages").doc(email + title)
            .onSnapshot(function (doc) {
            var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
            console.log(source, " data: ", doc.data());
            newarr = doc.data().message;
            index = doc.data().index;
            if (index == 0) {
                $(".chat").append(newarr[0]);
            }
            $(".chat").append(newarr[index + 1]);
            var $box = $('.chat');
            var height = $box.get(0).scrollHeight;
            $box.scrollTop(height);
            // else if(index==1)
            // {
            //   $(".chat").append(newarr[1]);
            // }
            // else if(index>1)
            // {
            //   $(".chat").append(newarr[index +1]);
            // }
        });
        var docRef1 = firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("messages").doc(email + title);
        docRef1.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                newarr = doc.data().message;
                index = doc.data().index;
                console.log("yolo", newarr.length);
                var len1 = newarr.length;
                for (var j = 0; j < newarr.length; j++) {
                    $(".chat").append(newarr[j]);
                    var $box = $('.chat');
                    var height = $box.get(0).scrollHeight;
                    $box.scrollTop(height);
                }
            }
            else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        var email1 = this.data1;
        $(document).ready(function () {
            var ready = false;
            $("#submit").submit(function (e) {
                e.preventDefault();
                $("#nick").fadeOut();
                $("#chat").fadeIn();
                var name = $("#nickname").val();
                var time = new Date();
                $("#name").html(name);
                $("#time").html('First login: ' + time.getHours() + ':' + time.getMinutes());
                ready = true;
            });
            $("#textarea").keypress(function (e) {
                if (e.which == 13) {
                    this.text = $("#textarea").val();
                    console.log(this.text);
                    $("#textarea").val('');
                    var time = new Date();
                    // var audio = {};
                    // audio["walk"] = new Audio();
                    // audio["walk"].src = "assets/mess.mp3"
                    // audio["walk"].play();
                    // audio["walk"].addEventListener('load', function () {
                    // });
                    // $(".chat").append('<li class="self"><div style="color:white;background:#0B93F6;align-self: flex-end;max-width: 255px;word-wrap: break-word;margin-bottom: 12px;line-height: 15px;position:relative;padding:10px 20px;border-radius:25px;max-width: 450px;margin: 50px auto; display: -webkit-box;display: flex;-webkit-box-orient: vertical-webkit-box-direction: normal; flex-direction: column;"><span >'+'<p >'+ this.text + '</p><time>' + time.getHours() + ':' + time.getMinutes() + '</time></div></li>');
                    // automatically scroll down
                    var docRef = firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("messages").doc(email + title);
                    docRef.get().then(function (doc) {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            var marr12 = [];
                            var marr13 = [];
                            marr12 = doc.data().message;
                            console.log("lololol", marr12.length);
                            var len = marr12.length;
                            firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("messages").doc(email + title).set({
                                index: len,
                            }, { merge: true })
                                .then(function () {
                                console.log("Document successfully written!");
                            })
                                .catch(function (error) {
                                console.error("Error writing document: ", error);
                            });
                        }
                        else {
                            firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("messages").doc(email + title).set({
                                index: 0,
                            }, { merge: true })
                                .then(function () {
                                console.log("Document successfully written!");
                            })
                                .catch(function (error) {
                                console.error("Error writing document: ", error);
                            });
                        }
                    }).catch(function (error) {
                        console.log("Error getting document:", error);
                    });
                    newarr.push(` <li class="you ">
<div style="margin-bottom:5px;">
  <span style="width:8px;
  height:8px;
  border-radius:50%;
  display:inline-block;
  margin-right:7px;	background-color:#58b666;"></span>
  <h2 style="color:white">` + email1 + `</h2>
  <h3>` + time.getHours() + ':' + time.getMinutes() + `</h3>
</div>
<div style="width: 0;
height: 0;
border-style: solid;
border-width: 0 10px 10px 10px;border-color: transparent transparent #58b666 transparent;
margin-left:15px;"></div>
<div style="padding:20px;
color:#fff;
line-height:25px;
max-width:90%;
display:inline-block;
text-align:left;
border-radius:5px;	background-color:#58b666;  word-wrap: break-word;
">
  ` + this.text + `
</div>
</li>`);
                    firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("messages").doc(email + title).set({
                        email: email,
                        topic: title,
                        readby: "codellionapps@gmail.com",
                        message: newarr,
                    }, { merge: true })
                        .then(function () {
                        console.log("Document successfully written!");
                    })
                        .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
                }
            });
        });
    }
    output() {
        this._enrolllmentService.enroll2().subscribe(data => {
            console.log("success", data);
            this.outputfinal = data['name'];
        }, error => console.error("error", error));
    }
    ngOnInit() {
        var d = new Date();
        var newd = d.toString();
        this.date = newd.slice(0, 15);
        this._enrolllmentService.enroll9().subscribe(data => {
            console.log("success dash", data);
            this.data1 = data.email1;
            console.log("sdsdd", this.data1);
            // this.router.navigate(['/dashboard']);
        }, 
        // else if(data.user == true && this.count>=1){
        //   console.log("s",this.count);
        //   this.display = true;
        // }
        error => console.error("error", error));
        this._enrolllmentService.enroll5().subscribe(data => {
            console.log("success", data['message']);
            console.log("success", data);
            //         var text = data['message'];
            // var obj = JSON.parse(text);
            console.log(data['message'][0]);
            var j = 0;
            this.members = [];
            for (var i in data['message']) {
                var newarr = [];
                console.log("fdfdf", data['message'].length);
                var id = data['message'][i];
                var text = id;
                var obj = JSON.parse(text);
                console.log("dddd", obj);
                newarr.push(obj);
                console.log("length", newarr.length);
                for (var k = 0; k < newarr.length; k++) {
                    this.members.push(newarr[k]);
                    console.log("cxxcxc", this.members);
                }
            }
        }, error => console.error("error", error));
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        $(function () {
            $(".resizable1").resizable({
                autoHide: true,
                handles: 'e',
                resize: function (e, ui) {
                    var parent = ui.element.parent();
                    //alert(parent.attr('class'));
                    var remainingSpace = parent.width() - ui.element.outerWidth(), divTwo = ui.element.next(), divTwoWidth = (remainingSpace - (divTwo.outerWidth() - divTwo.width())) / parent.width() * 100 + "%";
                    divTwo.width(divTwoWidth);
                },
                stop: function (e, ui) {
                    var parent = ui.element.parent();
                    ui.element.css({
                        width: ui.element.width() / parent.width() * 100 + "%",
                    });
                }
            });
        });
        firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                this.useremail = user.email;
                console.log("123", this.useremail);
                var case1;
                var pass = [];
                setTimeout(() => {
                    firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("Submit").doc(this.useremail + this.prog.title)
                        .onSnapshot((doc) => {
                        console.log("Current data: ", doc.data().tc);
                        case1 = doc.data().tc;
                        for (var i = 0; i < case1.length; i++) {
                            const p = this.renderer.createElement('p');
                            p.innerHTML = case1[i]["Testcase"];
                            this.renderer.appendChild(this.p.nativeElement, p);
                            // this.resulttest = case1[i]["Testcase"]
                        }
                        this.submissiontime = doc.data().date;
                    });
                }, 3000);
            }
            else {
                // No user is signed in.
            }
        });
    }
    browse() {
        this.disp1 = false;
        this.disp3 = true;
    }
    create() {
        this.disp1 = false;
        this.disp2 = true;
    }
    back() {
        console.log('dddheeeeeeeeeeeeeeeeee');
        this.disp1 = true;
        this.disp2 = false;
        this.disp3 = false;
        this.disp5 = false;
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    download() {
        console.log('Downloading');
        firebase__WEBPACK_IMPORTED_MODULE_11__["auth"]().onAuthStateChanged((user) => {
            if (user) {
                this.useremail = user.email;
                console.log("123", this.useremail);
                var case1;
                var pass = [];
                setTimeout(() => {
                    firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"]().collection("Submit").doc(this.useremail + this.prog.title)
                        .onSnapshot((doc) => {
                        console.log("Current data: ", doc.data().tc);
                        case1 = doc.data().tc;
                        const documentDefinition = { content: doc.data().code };
                        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.createPdf(documentDefinition).download();
                        ;
                    });
                }, 3000);
            }
            else {
                // No user is signed in.
            }
        });
    }
    issue() {
        this.disp4 = true;
        console.log("clicked");
        console.log(this.firstFormGroup['value']['firstCtrl'], this.secondFormGroup['value']['secondCtrl']);
        var obj = JSON.parse('{ "email":"' + this.data1 + '","topic":"' + this.firstFormGroup['value']['firstCtrl'] + '","description":"' + this.secondFormGroup['value']['secondCtrl'] + '"}');
        console.log(obj);
        this._enrolllmentService.enroll4(obj).subscribe(data => {
            console.log("success", data['message']);
            this._enrolllmentService.enroll5().subscribe(data => {
                console.log("success", data['message']);
                console.log("success", data);
                //         var text = data['message'];
                // var obj = JSON.parse(text);
                console.log(data['message'][0]);
                var j = 0;
                this.members = [];
                for (var i in data['message']) {
                    var newarr = [];
                    console.log("fdfdf", data['message'].length);
                    var id = data['message'][i];
                    var text = id;
                    var obj = JSON.parse(text);
                    console.log("dddd", obj);
                    newarr.push(obj);
                    console.log("length", newarr.length);
                    for (var k = 0; k < newarr.length; k++) {
                        this.members.push(newarr[k]);
                        console.log("cxxcxc", this.members);
                    }
                    this.snackBar.open("Topic Successfully Created", "OK", {
                        duration: 90000,
                    });
                    this.disp2 = false;
                    this.disp3 = true;
                    this.disp4 = false;
                }
            }, error => console.error("error", error));
        }, error => console.error("error", error));
    }
    ipcase() {
        this.div.nativeElement.innerHTML = "";
        this.outputfinal = "";
        this.testcase = [];
        console.log("herllo", this.testcase);
        for (let i = 0; i < this.arr.length; i++) {
            this.extractcode1(this.arr[i], i, this.op[i]);
        }
    }
    ipcase1() {
        this.div.nativeElement.innerHTML = "";
        this.outputfinal = "";
        this.testcase = [];
        console.log("herllo", this.testcase);
        for (let i = 0; i < this.arr.length; i++) {
            this.extractcode2(this.arr[i], i, this.op[i]);
        }
    }
    hello() {
        console.log(this.code1);
        console.log("hola", this.code2);
        console.log("yoooooooooooo", this.compiler123);
        var b = encodeURIComponent(this.code1);
        var c = encodeURIComponent(this.code2);
        console.log(b);
        console.log(c);
        // var c = JSON.parse('{"email":"'+b+'"}')
        var d = this.compiler123;
        this._enrolllmentService.enroll1(b, c, d).subscribe(data => {
            console.log("success", data);
            this.outputfinal = data['name'];
        }, error => console.error("error", error));
    }
};
ProgramComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('div', { static: true })
], ProgramComponent.prototype, "div", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('p', { static: true })
], ProgramComponent.prototype, "p", void 0);
ProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/program.component.html")).default,
        providers: [_interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"]],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./program.component.css */ "./src/app/program/program.component.css")).default]
    })
], ProgramComponent);



/***/ }),

/***/ "./src/app/program/program.service.ts":
/*!********************************************!*\
  !*** ./src/app/program/program.service.ts ***!
  \********************************************/
/*! exports provided: ProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramService", function() { return ProgramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProgramService = class ProgramService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/setcode';
        this._url1 = 'https://javabuild10-c3dx5fi32q-uc.a.run.app/compilers/java.phpp';
        this._url2 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/output';
        this._url3 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getpubman';
        this._url4 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/chattopic';
        this._url5 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getchattopic';
        this._url9 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/dashboard';
        this.compiler = localStorage.getItem('compiler');
    }
    enroll(user) {
        console.log("chapak", user);
        return this._http.post(this._url, user, { withCredentials: true });
    }
    enroll1(user, c, d) {
        console.log("sas", d);
        var user1 = {
            email: user,
            input: c
        };
        console.log(this.compiler);
        console.log("chapak", c);
        console.log("chapak", user1);
        // this.link = 'https://compiler-git-angular-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/'+d+'';
        https: //javapyfinale-c3dx5fi32q-uc.a.run.app/
         this.link = d;
        // else if(this.compiler == "cpp_compiler"){
        //   this.link = 'https://compiler-git-angular-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/cpp.php';
        // }
        // else if(this.compiler == "cpp11_compiler"){
        //   this.link = 'https://compiler-git-angular-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/cpp11.php';
        // }
        // else if(this.compiler == "py_compiler"){
        //   this.link = 'https://compiler-git-angular-kubernetesml.apps.us-east-1.starter.openshift-online.com/compilers/python27.php';
        //   console.log("sccscsd")
        // }
        // else {
        //   this.link = this._url1;
        // }
        return this._http.post(this.link, user1, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    }
    enroll9() {
        return this._http.get(this._url9, { withCredentials: true });
    }
    enroll2() {
        return this._http.get(this._url2, { withCredentials: true });
    }
    enroll3(data1) {
        var data = {
            "key": data1
        };
        return this._http.post(this._url3, data, { withCredentials: true });
    }
    enroll4(user) {
        return this._http.post(this._url4, user, { withCredentials: true });
    }
    enroll5() {
        return this._http.get(this._url5, { withCredentials: true });
    }
};
ProgramService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProgramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProgramService);



/***/ }),

/***/ "./src/app/qtopicdialog/qtopicdialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/qtopicdialog/qtopicdialog.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F0b3BpY2RpYWxvZy9xdG9waWNkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/qtopicdialog/qtopicdialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/qtopicdialog/qtopicdialog.component.ts ***!
  \********************************************************/
/*! exports provided: QtopicdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QtopicdialogComponent", function() { return QtopicdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QtopicdialogComponent = class QtopicdialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
QtopicdialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qtopicdialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qtopicdialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/qtopicdialog/qtopicdialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qtopicdialog.component.css */ "./src/app/qtopicdialog/qtopicdialog.component.css")).default]
    })
], QtopicdialogComponent);



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  } */\r\n  @media (min-width: 320px) and (max-width: 767px) {\r\n    .example-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n  \r\n    #bgimg {\r\n      display: none;\r\n      \r\n     }\r\n    .example-is-mobile .example-toolbar {\r\n      position: fixed;\r\n      /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n      z-index: 2;\r\n    }\r\n    h1.example-app-name {\r\n      margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n      /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n         causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n         `<body>` to be our scrolling element for mobile layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1 0 auto;\r\n    }\r\n    #topbar{\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 8%;\r\n  }\r\n  #ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41;\r\n    margin-left: 8px;\r\n}\r\n    \r\n  }\r\n  @media (min-width: 1025px){\r\n    .example-container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n    }\r\n    #bgimg {\r\n      display: inline-block;\r\n      \r\n     }\r\n    .example-is-mobile .example-toolbar {\r\n      position: fixed;\r\n      /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n      z-index: 2;\r\n    }\r\n    h1.example-app-name {\r\n      margin-left: 8px;\r\n    }\r\n    \r\n    .example-sidenav-container {\r\n      /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n         causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1;\r\n    }\r\n    \r\n    .example-is-mobile .example-sidenav-container {\r\n      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n         `<body>` to be our scrolling element for mobile layouts. */\r\n      -webkit-box-flex: 1;\r\n              flex: 1 0 auto;\r\n    }\r\n  #com_body {\r\n    \r\n    background: #F3F7F7;\r\n  }\r\n\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8%;\r\n}\r\n#manual{\r\n  margin-top: -40%;\r\n  position: absolute;width: 70%;margin-left: 20%;\r\n}\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 1%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41;\r\n    margin-left: 180px;\r\n}\r\n#manbutton{\r\n  margin-left:85%; position: absolute;\r\n}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUs7RUFDSDtJQUNFO01BQ0Usb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLE1BQU07TUFDTixTQUFTO01BQ1QsT0FBTztNQUNQLFFBQVE7SUFDVjs7SUFFQTtNQUNFLGFBQWE7O0tBRWQ7SUFDRDtNQUNFLGVBQWU7TUFDZiw4RUFBOEU7TUFDOUUsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRTs4RkFDd0Y7TUFDeEYsbUJBQU87Y0FBUCxPQUFPO0lBQ1Q7O0lBRUE7TUFDRTttRUFDNkQ7TUFDN0QsbUJBQWM7Y0FBZCxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSx1QkFBdUI7TUFDdkIsV0FBVztNQUNYLFVBQVU7RUFDZDtFQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztFQUVFO0VBQ0E7SUFDRTtNQUNFLG9CQUFhO01BQWIsYUFBYTtNQUNiLDRCQUFzQjtNQUF0Qiw2QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sU0FBUztNQUNULE9BQU87TUFDUCxRQUFRO0lBQ1Y7SUFDQTtNQUNFLHFCQUFxQjs7S0FFdEI7SUFDRDtNQUNFLGVBQWU7TUFDZiw4RUFBOEU7TUFDOUUsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRTs4RkFDd0Y7TUFDeEYsbUJBQU87Y0FBUCxPQUFPO0lBQ1Q7O0lBRUE7TUFDRTttRUFDNkQ7TUFDN0QsbUJBQWM7Y0FBZCxjQUFjO0lBQ2hCO0VBQ0Y7O0lBRUUsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCO0FBQ2hEO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7QUFDckM7RUFDRSIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfSAqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICBcclxuICAgICNiZ2ltZyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIFxyXG4gICAgIH1cclxuICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgI3RvcGJhcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDglO1xyXG4gIH1cclxuICAjY3RpdGxle1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuICAgIFxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KXtcclxuICAgIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgI2JnaW1nIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBcclxuICAgICB9XHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxuICAjY29tX2JvZHkge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGN0Y3O1xyXG4gIH1cclxuXHJcbiN0b3BiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxufVxyXG4jbWFudWFse1xyXG4gIG1hcmdpbi10b3A6IC00MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA3MCU7bWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG4jY3RpdGxle1xyXG4gICAgY29sb3I6ICMxYjFiMWI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcclxufVxyXG4jbWFuYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0Ojg1JTsgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quiz1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz1.service */ "./src/app/quiz/quiz1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");








let QuizComponent = class QuizComponent {
    constructor(dialog, router, _quizService, changeDetectorRef, media) {
        this.dialog = dialog;
        this.router = router;
        this._quizService = _quizService;
        this.load = false;
        this.img1 = false;
        this.quiz = [];
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        this._quizService.getQuiz().subscribe(data => {
            console.log("success dash", data);
            console.log("success ques", data.q);
            this.quiz = data.q;
            this.load = true;
            // console.log("quiz:",this.quiz)
            // this.formatquiz(0);
        }, error => console.error("error", error));
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    topic(i, j) {
        // let obj = ;
        // console.log(obj)
        localStorage.setItem("sendobj", JSON.stringify(this.quiz[i].topic[j]));
        this.router.navigate(['/quizpage']);
    }
};
QuizComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _quiz1_service__WEBPACK_IMPORTED_MODULE_2__["Quiz1Service"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"] }
];
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")).default]
    })
], QuizComponent);



/***/ }),

/***/ "./src/app/quiz/quiz1.service.ts":
/*!***************************************!*\
  !*** ./src/app/quiz/quiz1.service.ts ***!
  \***************************************/
/*! exports provided: Quiz1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz1Service", function() { return Quiz1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let Quiz1Service = class Quiz1Service {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getQuiz';
    }
    getQuiz() {
        return this._http.post(this._url, { withCredentials: true });
    }
};
Quiz1Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Quiz1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Quiz1Service);



/***/ }),

/***/ "./src/app/quizdialog/quizdialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quizdialog/quizdialog.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXpkaWFsb2cvcXVpemRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/quizdialog/quizdialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quizdialog/quizdialog.component.ts ***!
  \****************************************************/
/*! exports provided: QuizdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizdialogComponent", function() { return QuizdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuizdialogComponent = class QuizdialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuizdialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quizdialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quizdialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quizdialog/quizdialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quizdialog.component.css */ "./src/app/quizdialog/quizdialog.component.css")).default]
    })
], QuizdialogComponent);



/***/ }),

/***/ "./src/app/quizpage/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/quizpage/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let QuizService = class QuizService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getQuiz';
    }
    getQuiz() {
        return this._http.post(this._url, { withCredentials: true });
    }
};
QuizService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuizService);



/***/ }),

/***/ "./src/app/quizpage/quizpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/quizpage/quizpage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 320px) and (max-width: 767px) {\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  #totalscore{\r\n    display: none;\r\n  }\r\n  #bgimg {\r\n    display: none;\r\n    \r\n   }\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  #com_body{\r\n    background-color: #F3F7F7;\r\n}\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    \r\n    height:1%; \r\n}\r\n/*  */\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 0.5%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41;\r\n    \r\n}\r\n.card {\r\n  background: #fff;\r\n  border-radius: 2px;\r\n  margin: 1rem;\r\n\r\n}\r\n.card-3 {\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n}\r\n#card1{\r\n  \r\n  margin-top: 40px;\r\n  margin-left: 1%;\r\n  color: #1b1b1b;\r\n  \r\n}\r\n#card2{\r\n    \r\n  margin-top: 40px;\r\n  margin-left: 1%;\r\n  \r\n  color: #1b1b1b;\r\n  \r\n}\r\n#card3{\r\n    \r\n  margin-top: 40px;\r\n  margin-left: 1%;\r\n  \r\n  color: #1b1b1b;\r\n  \r\n}\r\n.example-section {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  align-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  margin-top: 2%;\r\n}\r\n.example-margin {\r\n  color: black;\r\n  font-size: medium;\r\n  \r\n}\r\n.radio-toolbar input[type=\"radio\"]:focus + label {\r\n  border: 2px dashed #444;\r\n}\r\n\r\n.radio-toolbar input[type=\"radio\"]:focus + label {\r\n  background-color: #dfd;\r\n  border-color: #468284;\r\n}\r\n.radio-toolbar input[type=\"radio\"] {\r\nopacity: 0;\r\nposition: fixed;\r\nwidth: 0;\r\n}\r\n.radio-toolbar {\r\nmargin: 0 10px;\r\n}\r\n.radio-toolbar label {\r\n  background-color: #95c8d8;\r\n  padding: 10px 20px;\r\n  font-family: sans-serif, Arial;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.radio-toolbar label:hover {\r\nbackground-color: #dfd;\r\n}\r\npre {\r\n  overflow-x: auto;\r\n  white-space: pre-wrap;\r\n  white-space: -moz-pre-wrap;\r\n  white-space: -pre-wrap;\r\n  white-space: -o-pre-wrap;\r\n  word-wrap: break-word;\r\n}\r\n}\r\n @media (min-width: 1025px){\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  #bgimg {\r\n    display: inline-block;\r\n    \r\n   }\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n#com_body{\r\n    background-color: #F3F7F7;\r\n}\r\n#topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8%; \r\n}\r\n/*  */\r\n#ctitle{\r\n    color: #1b1b1b;\r\n    font-weight: bold;\r\n    font-family:  monospace;\r\n    margin-top: 0.5%;\r\n    font-size: 300%;\r\n    text-shadow: 1.5px 1.5px #252A41;\r\n    margin-left: 180px;\r\n}\r\n.example-card {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .example-section {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    align-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-top: 2%;\r\n  }\r\n  .card {\r\n    background: #fff;\r\n    border-radius: 2px;\r\n    margin: 1rem;\r\n\r\n  }\r\n  .example-margin {\r\n    color: black;\r\n    font-size: medium;\r\n    \r\n  }\r\n.radio-toolbar input[type=\"radio\"]:focus + label {\r\n    border: 2px dashed #444;\r\n}\r\n\r\n.radio-toolbar input[type=\"radio\"]:focus + label {\r\n    background-color: #dfd;\r\n    border-color: #468284;\r\n}\r\n.radio-toolbar input[type=\"radio\"] {\r\n  opacity: 0;\r\n  position: fixed;\r\n  width: 0;\r\n}\r\n.radio-toolbar {\r\n  margin: 0 10px;\r\n}\r\n\r\n\r\n.radio-toolbar label {\r\n    background-color: #95c8d8;\r\n    padding: 10px 20px;\r\n    font-family: sans-serif, Arial;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.radio-toolbar label:hover {\r\n  background-color: #dfd;\r\n}\r\n  /* .option{\r\n    background-color: #95c8d8;\r\n    border-radius: 40px;\r\n    margin: 0 10px;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n  }\r\n  .option:hover{\r\n      background-color: #468284;\r\n  } */\r\n  .card-3 {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n  #card1{\r\n    \r\n    margin-top: 40px;\r\n    margin-left: 1%;\r\n    color: #1b1b1b;\r\n    \r\n}\r\npre {\r\n  overflow-x: auto;\r\n  white-space: pre-wrap;\r\n  white-space: -moz-pre-wrap;\r\n  white-space: -pre-wrap;\r\n  white-space: -o-pre-wrap;\r\n  word-wrap: break-word;\r\n}\r\n#card2{\r\n    \r\n  margin-top: 40px;\r\n  margin-left: 1%;\r\n  width: 450px;\r\n  color: #1b1b1b;\r\n  \r\n}\r\n#card3{\r\n    \r\n  margin-top: 40px;\r\n  margin-left: 1%;\r\n  width: 450px;\r\n  color: #1b1b1b;\r\n  \r\n}\r\n#score{\r\n  display: -webkit-box;\r\n  display: flex;\r\n    align-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-top: 2%;\r\n}\r\n#totalscore{\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n}\r\n.display-card{\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n#right .mat-progress-bar-fill::after{\r\n  background-color: green !important;\r\n}\r\n#progress{\r\n  width: 250px;\r\n  height: 20px;\r\n  margin-left: 5px;\r\n}\r\n#right{\r\n  width: 250px;\r\n  height: 20px;\r\n  margin-left: 5px;\r\n}\r\n }\r\n /* ::ng-deep .mat-step-header .mat-step-icon-selected {\r\n  background-color: red; \r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpenBhZ2UvcXVpenBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhOztHQUVkO0VBQ0Q7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0U7NEZBQ3dGO0lBQ3hGLG1CQUFPO1lBQVAsT0FBTztFQUNUOztFQUVBO0lBQ0U7aUVBQzZEO0lBQzdELG1CQUFjO1lBQWQsY0FBYztFQUNoQjtFQUNBO0lBQ0UseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVzs7SUFFWCxTQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdDQUFnQzs7QUFFcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usb0VBQW9FO0FBQ3RFO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjOztBQUVoQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLGNBQWM7O0FBRWhCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZUFBZTtBQUNmLFFBQVE7QUFDUjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtDQUNDO0VBQ0M7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWO0VBQ0E7SUFDRSxxQkFBcUI7O0dBRXRCO0VBQ0Q7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0U7NEZBQ3dGO0lBQ3hGLG1CQUFPO1lBQVAsT0FBTztFQUNUOztFQUVBO0lBQ0U7aUVBQzZEO0lBQzdELG1CQUFjO1lBQWQsY0FBYztFQUNoQjtBQUNGO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBLEtBQUs7QUFDTDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZOztFQUVkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCOztFQUVuQjtBQUNGO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7RUFDRTs7Ozs7Ozs7O0tBU0c7RUFDSDtJQUNFLG9FQUFvRTtFQUN0RTtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYzs7QUFFaEI7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjOztBQUVoQjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0VBQ0UsMkJBQW9CO0VBQXBCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0NBQ0M7Q0FDRDs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL3F1aXpwYWdlL3F1aXpwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgI3RvdGFsc2NvcmV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjYmdpbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIFxyXG4gICB9XHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gICNjb21fYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y3Rjc7XHJcbn1cclxuI3RvcGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIGhlaWdodDoxJTsgXHJcbn1cclxuLyogICovXHJcbiNjdGl0bGV7XHJcbiAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjUlO1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgICBcclxufVxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG5cclxufVxyXG4uY2FyZC0zIHtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG4jY2FyZDF7XHJcbiAgXHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgY29sb3I6ICMxYjFiMWI7XHJcbiAgXHJcbn1cclxuI2NhcmQye1xyXG4gICAgXHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgXHJcbiAgY29sb3I6ICMxYjFiMWI7XHJcbiAgXHJcbn1cclxuI2NhcmQze1xyXG4gICAgXHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgXHJcbiAgY29sb3I6ICMxYjFiMWI7XHJcbiAgXHJcbn1cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBcclxufVxyXG4ucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICM0NDQ7XHJcbn1cclxuXHJcbi5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ2ODI4NDtcclxufVxyXG4ucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG5vcGFjaXR5OiAwO1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbndpZHRoOiAwO1xyXG59XHJcbi5yYWRpby10b29sYmFyIHtcclxubWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLnJhZGlvLXRvb2xiYXIgbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWM4ZDg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBBcmlhbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tdG9vbGJhciBsYWJlbDpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNkZmQ7XHJcbn1cclxucHJlIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcclxuICB3aGl0ZS1zcGFjZTogLXByZS13cmFwO1xyXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxufVxyXG4gQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCl7XHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAjYmdpbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbiAgIH1cclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcbiNjb21fYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y3Rjc7XHJcbn1cclxuI3RvcGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDglOyBcclxufVxyXG4vKiAgKi9cclxuI2N0aXRsZXtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICAgIG1hcmdpbi10b3A6IDAuNSU7XHJcbiAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcclxufVxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcblxyXG4gIH1cclxuICAuZXhhbXBsZS1tYXJnaW4ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBcclxuICB9XHJcbi5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNDQ0O1xyXG59XHJcblxyXG4ucmFkaW8tdG9vbGJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDY4Mjg0O1xyXG59XHJcbi5yYWRpby10b29sYmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuLnJhZGlvLXRvb2xiYXIge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG5cclxuLnJhZGlvLXRvb2xiYXIgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YzhkODtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBBcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tdG9vbGJhciBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZDtcclxufVxyXG4gIC8qIC5vcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVjOGQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIH1cclxuICAub3B0aW9uOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4Mjg0O1xyXG4gIH0gKi9cclxuICAuY2FyZC0zIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gIH1cclxuICAjY2FyZDF7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBjb2xvcjogIzFiMWIxYjtcclxuICAgIFxyXG59XHJcbnByZSB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XHJcbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcclxuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbiNjYXJkMntcclxuICAgIFxyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBjb2xvcjogIzFiMWIxYjtcclxuICBcclxufVxyXG4jY2FyZDN7XHJcbiAgICBcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgY29sb3I6ICMxYjFiMWI7XHJcbiAgXHJcbn1cclxuI3Njb3Jle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuI3RvdGFsc2NvcmV7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmRpc3BsYXktY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNyaWdodCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcbiNwcm9ncmVzc3tcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuI3JpZ2h0e1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4gfVxyXG4vKiA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyBcclxufSAqL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/quizpage/quizpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/quizpage/quizpage.component.ts ***!
  \************************************************/
/*! exports provided: QuizpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizpageComponent", function() { return QuizpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.service */ "./src/app/quizpage/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var src_app_score_score_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/score/score.component */ "./src/app/score/score.component.ts");









let QuizpageComponent = class QuizpageComponent {
    // constructor(public dialog: MatDialog,private _quizService:QuizService, private router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher)
    constructor(_quizService, router, changeDetectorRef, media, matDialog) {
        this._quizService = _quizService;
        this.router = router;
        this.matDialog = matDialog;
        this.checked = false;
        this.it = 0;
        this.title = '';
        this.totalscore = 0;
        this.yourscore = 0;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.compques = 0;
        this.totalques = 0;
        // yourquiz = {
        //   cques : 0,
        //   yscore : 0
        // }
        this.yourquiz = [];
        this.currind = 0;
        this.attempt = 'None';
        this.yselect = 'None';
        this.qscore = 0;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        // this._quizService.getQuiz().subscribe(
        //   data=>{console.log("success dash",data);
        //   console.log("success ques",data.q);
        //   this.quiz = data.q;
        //   console.log("quiz:",this.quiz)
        //   this.formatquiz(0);},
        //   error=>console.error("error",error)
        // );
        this.obj = localStorage.getItem('sendobj');
        this.obj = (JSON.parse(this.obj));
        this.quiz = this.obj.ques;
        this.title = this.obj.title;
        this.shuffleArray(this.quiz);
        this.yourquiz = this.quiz.slice();
        this.totalscore = this.obj.totscore;
        this.totalques = this.quiz.length;
        this.formatquiz(0);
        for (let index = 0; index < this.yourquiz.length; index++) {
            this.yourquiz[index].cques = 0,
                this.yourquiz[index].yscore = 0,
                this.yourquiz[index].yattempt = 'None',
                this.yourquiz[index].yselect = 'None';
        }
    }
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    // this.checkA = "checked";
    subquiz() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = {
            totalscr: this.totalscore,
            yscore: this.yourscore,
            title: this.title
        };
        this.matDialog.open(src_app_score_score_component__WEBPACK_IMPORTED_MODULE_7__["ScoreComponent"], dialogConfig);
        const dialogRef = this.matDialog.open(src_app_score_score_component__WEBPACK_IMPORTED_MODULE_7__["ScoreComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(
        //   data => {console.log("Dialog output:", data);
        //   this.deleteProgram(data);
        // }
        );
    }
    subans() {
        console.log(this.currind);
        if (this.opselect == 'A' && this.ans == this.opa) {
            this.result = "Right";
            this.yourquiz[this.currind].cques = 1;
            this.yourquiz[this.currind].yscore = this.yourquiz[this.currind].score;
            this.yourquiz[this.currind].yattempt = 'Done';
            this.yourquiz[this.currind].yselect = 'A';
            this.attempt = 'Done';
            this.yselect = 'A';
            // document.getElementById('optionA').style.backgroundColor = "#32cd32";
        }
        else if (this.opselect == 'B' && this.ans == this.opb) {
            console.log("right");
            this.result = "Right";
            this.yourquiz[this.currind].cques = 1;
            this.yourquiz[this.currind].yscore = this.yourquiz[this.currind].score;
            this.yourquiz[this.currind].yattempt = 'Done';
            this.yourquiz[this.currind].yselect = 'B';
            this.attempt = 'Done';
            this.yselect = 'B';
            // document.getElementById('optionB').style.backgroundColor = "#32cd32";
        }
        else if (this.opselect == 'C' && this.ans == this.opc) {
            console.log("right");
            this.result = "Right";
            this.yourquiz[this.currind].cques = 1;
            this.yourquiz[this.currind].yscore = this.yourquiz[this.currind].score;
            this.yourquiz[this.currind].yattempt = 'Done';
            this.yourquiz[this.currind].yselect = 'C';
            this.attempt = 'Done';
            this.yselect = 'C';
            // document.getElementById('optionC').style.backgroundColor = "#32cd32";
        }
        else if (this.opselect == 'D' && this.ans == this.opd) {
            console.log("right");
            this.result = "Right";
            this.yourquiz[this.currind].cques = 1;
            this.yourquiz[this.currind].yscore = this.yourquiz[this.currind].score;
            this.yourquiz[this.currind].yattempt = 'Done';
            this.yourquiz[this.currind].yselect = 'D';
            this.attempt = 'Done';
            this.yselect = 'D';
            // document.getElementById('optionD').style.backgroundColor = "#32cd32";
        }
        else {
            console.log("wrong");
            if (this.opselect == 'A') {
                this.result = "Wrong";
                this.yourquiz[this.currind].cques = 1;
                this.yourquiz[this.currind].yscore = 0;
                this.yourquiz[this.currind].yattempt = 'Done';
                this.yourquiz[this.currind].yselect = 'A';
                this.attempt = 'Done';
                this.yselect = 'A';
                // document.getElementById('optionA').style.backgroundColor = "#f88379";
            }
            else if (this.opselect == 'B') {
                this.result = "Wrong";
                this.yourquiz[this.currind].cques = 1;
                this.yourquiz[this.currind].yscore = 0;
                this.yourquiz[this.currind].yattempt = 'Done';
                this.yourquiz[this.currind].yselect = 'B';
                this.attempt = 'Done';
                this.yselect = 'B';
                // document.getElementById('optionB').style.backgroundColor = "#f88379";
            }
            else if (this.opselect == 'C') {
                this.result = "Wrong";
                this.yourquiz[this.currind].cques = 1;
                this.yourquiz[this.currind].yscore = 0;
                this.yourquiz[this.currind].yattempt = 'Done';
                this.yourquiz[this.currind].yselect = 'C';
                this.attempt = 'Done';
                this.yselect = 'C';
                // document.getElementById('optionC').style.backgroundColor = "#f88379";
            }
            else if (this.opselect == 'D') {
                this.result = "Wrong";
                this.yourquiz[this.currind].cques = 1;
                this.yourquiz[this.currind].yscore = 0;
                this.yourquiz[this.currind].yattempt = 'Done';
                this.yourquiz[this.currind].yselect = 'D';
                this.attempt = 'Done';
                this.yselect = 'D';
                // document.getElementById('optionD').style.backgroundColor = "#f88379";
            }
        }
        // if(this.ans==this.opa){
        //   console.log("a");
        //   document.getElementById('optionA').style.backgroundColor = "#7cfc00";
        // }
        // else if(this.ans==this.opb){
        //   console.log("b");
        //   document.getElementById('optionB').style.backgroundColor = "#7cfc00";
        // }
        // else if(this.ans==this.opc){
        //   console.log("c");
        //   document.getElementById('optionC').style.backgroundColor = "#7cfc00";
        // }
        // else{
        //   console.log("d");
        //   document.getElementById('optionD').style.backgroundColor = "#7cfc00";
        // }
        this.yourscore = 0;
        this.compques = 0;
        for (let index = 0; index < this.yourquiz.length; index++) {
            this.yourscore = this.yourscore + this.yourquiz[index].yscore;
            this.compques = this.compques + this.yourquiz[index].cques;
        }
        // for (let index = 0; index < this.yourquiz.length; index++) {
        //   this.compques = this.compques + this.yourquiz[index].cques;
        // }
        console.log("yscore", this.yourscore);
    }
    formatquiz(i) {
        this.attempt = 'None';
        this.yselect = 'None';
        this.count = i + 1;
        this.question = this.quiz[i].question;
        this.opa = this.quiz[i].option[0];
        this.opb = this.quiz[i].option[1];
        this.opc = this.quiz[i].option[2];
        this.opd = this.quiz[i].option[3];
        this.ans = this.quiz[i].answer;
        this.qscore = this.quiz[i].score;
        this.currind = i;
        this.attempt = this.yourquiz[i].yattempt;
        this.yselect = this.yourquiz[i].yselect;
        document.getElementById('optionA').style.backgroundColor = "#95c8d8";
        document.getElementById('optionB').style.backgroundColor = "#95c8d8";
        document.getElementById('optionC').style.backgroundColor = "#95c8d8";
        document.getElementById('optionD').style.backgroundColor = "#95c8d8";
    }
    prev() {
        if (this.it == 0) {
            console.log("no more prev");
        }
        else {
            this.it -= 1;
            this.formatquiz(this.it);
        }
    }
    next() {
        this.it += 1;
        this.formatquiz(this.it);
    }
    openDialog999() {
        const dialogRef = this.matDialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
QuizpageComponent.ctorParameters = () => [
    { type: _quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
QuizpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quizpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quizpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quizpage/quizpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quizpage.component.css */ "./src/app/quizpage/quizpage.component.css")).default]
    })
], QuizpageComponent);



/***/ }),

/***/ "./src/app/register/enrollment.service1.ts":
/*!*************************************************!*\
  !*** ./src/app/register/enrollment.service1.ts ***!
  \*************************************************/
/*! exports provided: EnrollmentService1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentService1", function() { return EnrollmentService1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EnrollmentService1 = class EnrollmentService1 {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/checkuser';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/enroll';
    }
    enroll(user) {
        console.log("chapak", user);
        return this._http.post(this._url, user);
    }
    enroll1(user) {
        console.log("chapak", user);
        return this._http.post(this._url1, user);
    }
};
EnrollmentService1.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnrollmentService1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnrollmentService1);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n@media (min-width: 320px) and (max-width: 767px) {\r\n\r\n  /* bade */\r\n  \r\nbody {\r\n  /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n  overflow: auto;\r\nbackground-color:whitesmoke\r\n} \r\n.example-card {\r\n  margin: 0 auto; /* Added */\r\n      float: none; /* Added */\r\n      margin-bottom: 10px; /* Added */\r\n      display:none;\r\n     \r\n      background-color: whitesmoke;\r\n      padding: 60px 0 40px 0;\r\n       \r\n  \r\n}\r\n\r\n\r\n/* #top{\r\n\r\n  margin-top:20%\r\n} */\r\n\r\n.input{\r\n  width:275px;\r\n}\r\n\r\n.login{\r\n  background-color:#0091ea;\r\n  position:fixed;\r\n  width:100%;\r\n  height:100%;\r\n  top:0px;\r\n  left:0px;\r\n  z-index:1000;\r\n}\r\n#outside{\r\n  display: inline-block;\r\n  width: 175%;\r\n  margin-left: 50%;\r\n\r\n  \r\n} \r\n#inside{\r\n  display: inline-block;\r\n  width: 200%;\r\n  \r\n  margin-left: 10%;\r\n}\r\n.buttonui{\r\n  color:red;\r\n   \r\n\r\n}\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.snackbar {\r\n  max-width: 90% !important;\r\n  margin-left: auto !important; \r\n  margin-right: auto !important;\r\n  margin-bottom: 1rem !important; \r\n  padding: 10px !important; \r\n  background-color: #0b8357;\r\n  color: #f7f0cf;\r\n\r\n  \r\n}\r\n\r\n.mat-button-wrapper {\r\ncolor: black !important; \r\n}\r\n\r\n\r\n\r\n\r\n } \r\n \r\n\r\n @media (min-width: 700px) and (max-width: 900px) {\r\n /* bade */\r\n  \r\n body {\r\n  /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n  overflow: auto;\r\nbackground-color:whitesmoke\r\n} \r\n.example-card {\r\n  margin: 0 auto; /* Added */\r\n      float: none; /* Added */\r\n      margin-bottom: 10px; /* Added */\r\n      display:none;\r\n     \r\n      background-color: whitesmoke;\r\n      padding: 60px 0 40px 0;\r\n       \r\n  \r\n}\r\n\r\n\r\n/* #top{\r\n\r\n  margin-top:20%\r\n} */\r\n  \r\n.input{\r\n  width:275px;\r\n\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n#cen{\r\n  text-align:center;\r\n}\r\n\r\n#bajume{\r\n  margin-left:70%\r\n}\r\n\r\n\r\n#neeche{\r\n  margin-top:20%;\r\n  text-align:center\r\n}\r\n\r\n.login{\r\n  background-color:#0091ea;\r\n  position:fixed;\r\n  width:100%;\r\n  height:100%;\r\n  top:0px;\r\n  left:0px;\r\n  z-index:1000;\r\n}\r\n#outside{\r\n  display: inline-block;\r\n  width: 175%;\r\n  margin-left: 50%;\r\n\r\n  \r\n} \r\n\r\n#inside{\r\n  display: inline-block;\r\n  width: 200%;\r\n  \r\n  margin-left: 10%;\r\n}\r\n.buttonui{\r\n  color:red;\r\n   \r\n\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.snackbar {\r\n  max-width: 90% !important;\r\n  margin-left: auto !important; \r\n  margin-right: auto !important;\r\n  margin-bottom: 1rem !important; \r\n  padding: 10px !important; \r\n  background-color: #0b8357;\r\n  color: #f7f0cf;\r\n\r\n  \r\n}\r\n\r\n.mat-button-wrapper {\r\ncolor: black !important; \r\n}\r\n\r\n\r\n\r\n\r\n  \r\n} \r\n \r\n\r\n /* tabs */ \r\n \r\n\r\n @media (min-width: 901px) and (max-width: 1024px) {\r\n /* bade */\r\n  \r\n body {\r\n  /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n  overflow: auto;\r\nbackground-color:whitesmoke\r\n} \r\n.example-card {\r\n  margin: 0 auto; /* Added */\r\n      float: none; /* Added */\r\n      margin-bottom: 10px; /* Added */\r\n      display:none;\r\n     \r\n      background-color: whitesmoke;\r\n      padding: 60px 0 40px 0;\r\n       \r\n  \r\n}\r\n\r\n\r\n/* #top{\r\n\r\n  margin-top:20%\r\n} */\r\n  \r\n.input{\r\n  width:275px;\r\n\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n#cen{\r\n  text-align:center;\r\n}\r\n\r\n#bajume{\r\n  margin-left:70%\r\n}\r\n\r\n\r\n#neeche{\r\n  margin-top:20%;\r\n  text-align:center\r\n}\r\n\r\n.login{\r\n  background-color:#0091ea;\r\n  position:fixed;\r\n  width:100%;\r\n  height:100%;\r\n  top:0px;\r\n  left:0px;\r\n  z-index:1000;\r\n}\r\n#outside{\r\n  display: inline-block;\r\n  width: 175%;\r\n  margin-left: 50%;\r\n\r\n  \r\n} \r\n\r\n#inside{\r\n  display: inline-block;\r\n  width: 200%;\r\n  \r\n  margin-left: 10%;\r\n}\r\n.buttonui{\r\n  color:red;\r\n   \r\n\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n.snackbar {\r\n  max-width: 90% !important;\r\n  margin-left: auto !important; \r\n  margin-right: auto !important;\r\n  margin-bottom: 1rem !important; \r\n  padding: 10px !important; \r\n  background-color: #0b8357;\r\n  color: #f7f0cf;\r\n\r\n  \r\n}\r\n\r\n.mat-button-wrapper {\r\ncolor: black !important; \r\n}\r\n\r\n } \r\n \r\n\r\n @media (min-width: 1025px) {\r\n\r\n  body {\r\n    /* background-image: linear-gradient( #ffcf00,#ff5722); */\r\n    \r\n  background-color:white\r\n  }\r\n  .example-card {\r\n    margin: 0 auto; /* Added */\r\n        float: none; /* Added */\r\n        margin-bottom: 10px; /* Added */\r\n        \r\n       \r\n        background-color: white;\r\n        padding: 60px 0 40px 0;\r\n         \r\n    \r\n  }\r\n  .input{\r\n    width:275px;\r\n  }\r\n  \r\n  .login{\r\n    background-color: #0091ea;\r\n    margin-left: 40%;\r\n    box-shadow:         3px 3px 5px 6px #ccc;\r\n  }\r\n  #outside{\r\n    display: inline-block;\r\n    width: 175%;\r\n    margin-left: 50%;\r\n   \r\n    \r\n  }\r\n  #inside{\r\n    display: inline-block;\r\n    width: 200%;\r\n    \r\n    margin-left: 10%;\r\n  }\r\n  .buttonui{\r\n    color:red;\r\n     \r\n  \r\n  }\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  .snackbar {\r\n    max-width: 90% !important;\r\n    margin-left: auto !important; \r\n    margin-right: auto !important;\r\n    margin-bottom: 1rem !important; \r\n    padding: 10px !important; \r\n    background-color: #0b8357;\r\n    color: #f7f0cf;\r\n  \r\n    \r\n  }\r\n  \r\n  .mat-button-wrapper {\r\n  color: black !important; \r\n  }\r\n  \r\n  \r\n  \r\n\r\n }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7O0VBRUUsU0FBUzs7QUFFWDtFQUNFLHlEQUF5RDtFQUN6RCxjQUFjO0FBQ2hCO0FBQ0E7QUFDQTtFQUNFLGNBQWMsRUFBRSxVQUFVO01BQ3RCLFdBQVcsRUFBRSxVQUFVO01BQ3ZCLG1CQUFtQixFQUFFLFVBQVU7TUFDL0IsWUFBWTs7TUFFWiw0QkFBNEI7TUFDNUIsc0JBQXNCOzs7QUFHNUI7OztBQUdBOzs7R0FHRzs7QUFFSDtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7OztBQUdsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7O0VBRVgsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxTQUFTOzs7QUFHWDtBQUNBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsY0FBYzs7O0FBR2hCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOzs7OztDQUtDOzs7Q0FHQTtDQUNBLFNBQVM7O0NBRVQ7RUFDQyx5REFBeUQ7RUFDekQsY0FBYztBQUNoQjtBQUNBO0FBQ0E7RUFDRSxjQUFjLEVBQUUsVUFBVTtNQUN0QixXQUFXLEVBQUUsVUFBVTtNQUN2QixtQkFBbUIsRUFBRSxVQUFVO01BQy9CLFlBQVk7O01BRVosNEJBQTRCO01BQzVCLHNCQUFzQjs7O0FBRzVCOzs7QUFHQTs7O0dBR0c7O0FBRUg7RUFDRSxXQUFXOztFQUVYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7QUFDRjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7OztBQUdsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUzs7O0FBR1g7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixjQUFjOzs7QUFHaEI7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7Ozs7OztBQU1BOzs7Q0FLQyxTQUFTOzs7Q0FDVDtDQUNBLFNBQVM7O0NBRVQ7RUFDQyx5REFBeUQ7RUFDekQsY0FBYztBQUNoQjtBQUNBO0FBQ0E7RUFDRSxjQUFjLEVBQUUsVUFBVTtNQUN0QixXQUFXLEVBQUUsVUFBVTtNQUN2QixtQkFBbUIsRUFBRSxVQUFVO01BQy9CLFlBQVk7O01BRVosNEJBQTRCO01BQzVCLHNCQUFzQjs7O0FBRzVCOzs7QUFHQTs7O0dBR0c7O0FBRUg7RUFDRSxXQUFXOztFQUVYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7QUFDRjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7OztBQUdsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUzs7O0FBR1g7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixjQUFjOzs7QUFHaEI7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7O0NBRUM7OztDQUdBOztFQUVDO0lBQ0UseURBQXlEOztFQUUzRDtFQUNBO0VBQ0E7SUFDRSxjQUFjLEVBQUUsVUFBVTtRQUN0QixXQUFXLEVBQUUsVUFBVTtRQUN2QixtQkFBbUIsRUFBRSxVQUFVOzs7UUFHL0IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjs7O0VBRzVCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBSWhCLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7OztFQUdsQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7O0lBRVgsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxTQUFTOzs7RUFHWDtFQUNBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsY0FBYzs7O0VBR2hCOztFQUVBO0VBQ0EsdUJBQXVCO0VBQ3ZCOzs7OztDQUtEIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAvKiBiYWRlICovXHJcbiAgXHJcbmJvZHkge1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggI2ZmY2YwMCwjZmY1NzIyKTsgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlXHJcbn0gXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBBZGRlZCAqL1xyXG4gICAgICBmbG9hdDogbm9uZTsgLyogQWRkZWQgKi9cclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkZWQgKi9cclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICBwYWRkaW5nOiA2MHB4IDAgNDBweCAwO1xyXG4gICAgICAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4vKiAjdG9we1xyXG5cclxuICBtYXJnaW4tdG9wOjIwJVxyXG59ICovXHJcblxyXG4uaW5wdXR7XHJcbiAgd2lkdGg6Mjc1cHg7XHJcbn1cclxuXHJcbi5sb2dpbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDkxZWE7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB0b3A6MHB4O1xyXG4gIGxlZnQ6MHB4O1xyXG4gIHotaW5kZXg6MTAwMDtcclxufVxyXG4jb3V0c2lkZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuXHJcbiAgXHJcbn0gXHJcbiNpbnNpZGV7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIFxyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuLmJ1dHRvbnVpe1xyXG4gIGNvbG9yOnJlZDtcclxuICAgXHJcblxyXG59XHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc25hY2tiYXIge1xyXG4gIG1heC13aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsgXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50OyBcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjgzNTc7XHJcbiAgY29sb3I6ICNmN2YwY2Y7XHJcblxyXG4gIFxyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4gfSBcclxuIFxyXG5cclxuIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAvKiBiYWRlICovXHJcbiAgXHJcbiBib2R5IHtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICNmZmNmMDAsI2ZmNTcyMik7ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZVxyXG59IFxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXJnaW46IDAgYXV0bzsgLyogQWRkZWQgKi9cclxuICAgICAgZmxvYXQ6IG5vbmU7IC8qIEFkZGVkICovXHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIEFkZGVkICovXHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgcGFkZGluZzogNjBweCAwIDQwcHggMDtcclxuICAgICAgIFxyXG4gIFxyXG59XHJcblxyXG5cclxuLyogI3RvcHtcclxuXHJcbiAgbWFyZ2luLXRvcDoyMCVcclxufSAqL1xyXG4gIFxyXG4uaW5wdXR7XHJcbiAgd2lkdGg6Mjc1cHg7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuI2NlbntcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuI2JhanVtZXtcclxuICBtYXJnaW4tbGVmdDo3MCVcclxufVxyXG5cclxuXHJcbiNuZWVjaGV7XHJcbiAgbWFyZ2luLXRvcDoyMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG5cclxuLmxvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwOTFlYTtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHRvcDowcHg7XHJcbiAgbGVmdDowcHg7XHJcbiAgei1pbmRleDoxMDAwO1xyXG59XHJcbiNvdXRzaWRle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTc1JTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG5cclxuICBcclxufSBcclxuXHJcbiNpbnNpZGV7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIFxyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuLmJ1dHRvbnVpe1xyXG4gIGNvbG9yOnJlZDtcclxuICAgXHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNuYWNrYmFyIHtcclxuICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7IFxyXG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDsgXHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI4MzU3O1xyXG4gIGNvbG9yOiAjZjdmMGNmO1xyXG5cclxuICBcclxufVxyXG5cclxuLm1hdC1idXR0b24td3JhcHBlciB7XHJcbmNvbG9yOiBibGFjayAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcblxyXG5cclxuICBcclxufVxyXG5cclxuIFxyXG4gXHJcbiBcclxuIC8qIHRhYnMgKi9cclxuIEBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gLyogYmFkZSAqL1xyXG4gIFxyXG4gYm9keSB7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjZmZjZjAwLCNmZjU3MjIpOyAqL1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2VcclxufSBcclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIEFkZGVkICovXHJcbiAgICAgIGZsb2F0OiBub25lOyAvKiBBZGRlZCAqL1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBBZGRlZCAqL1xyXG4gICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIHBhZGRpbmc6IDYwcHggMCA0MHB4IDA7XHJcbiAgICAgICBcclxuICBcclxufVxyXG5cclxuXHJcbi8qICN0b3B7XHJcblxyXG4gIG1hcmdpbi10b3A6MjAlXHJcbn0gKi9cclxuICBcclxuLmlucHV0e1xyXG4gIHdpZHRoOjI3NXB4O1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbiNjZW57XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbiNiYWp1bWV7XHJcbiAgbWFyZ2luLWxlZnQ6NzAlXHJcbn1cclxuXHJcblxyXG4jbmVlY2hle1xyXG4gIG1hcmdpbi10b3A6MjAlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyXHJcbn1cclxuXHJcbi5sb2dpbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDkxZWE7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB0b3A6MHB4O1xyXG4gIGxlZnQ6MHB4O1xyXG4gIHotaW5kZXg6MTAwMDtcclxufVxyXG4jb3V0c2lkZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuXHJcbiAgXHJcbn0gXHJcblxyXG4jaW5zaWRle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwJTtcclxuICBcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbi5idXR0b251aXtcclxuICBjb2xvcjpyZWQ7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5zbmFja2JhciB7XHJcbiAgbWF4LXdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50OyBcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7IFxyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiODM1NztcclxuICBjb2xvcjogI2Y3ZjBjZjtcclxuXHJcbiAgXHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXdyYXBwZXIge1xyXG5jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbiB9XHJcblxyXG4gXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcblxyXG4gIGJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjZmZjZjAwLCNmZjU3MjIpOyAqL1xyXG4gICAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZVxyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBBZGRlZCAqL1xyXG4gICAgICAgIGZsb2F0OiBub25lOyAvKiBBZGRlZCAqL1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIEFkZGVkICovXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgNDBweCAwO1xyXG4gICAgICAgICBcclxuICAgIFxyXG4gIH1cclxuICAuaW5wdXR7XHJcbiAgICB3aWR0aDoyNzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTFlYTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBcclxuICAgIC1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYztcclxuICB9XHJcbiAgI291dHNpZGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTc1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG4gICNpbnNpZGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcbiAgLmJ1dHRvbnVpe1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgIFxyXG4gIFxyXG4gIH1cclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuc25hY2tiYXIge1xyXG4gICAgbWF4LXdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7IFxyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjgzNTc7XHJcbiAgICBjb2xvcjogI2Y3ZjBjZjtcclxuICBcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enrollment_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enrollment.service1 */ "./src/app/register/enrollment.service1.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let RegisterComponent = class RegisterComponent {
    constructor(_enrolllmentService, snackBar, router) {
        this._enrolllmentService = _enrolllmentService;
        this.snackBar = snackBar;
        this.router = router;
        this.display = true;
        this.display1 = false;
        this.count = 0;
    }
    ngOnInit() {
    }
    register(form) {
        if (form.value.name.length == 0 && form.value.lname.length == 0 && form.value.email.length == 0 && form.value.password.length == 0) {
            this.snackBar.open("Please fill all the form details", "OK", {
                duration: 90000,
            });
        }
        else {
            this.display1 = true;
            firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().createUserWithEmailAndPassword(form.value.email, form.value.password).then(() => {
                console.log("user created");
                firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"]().collection('users').doc(form.value.email).set({
                    fname: form.value.name,
                    lname: form.value.lname,
                    email: form.value.email,
                    status: "student",
                    status1: false
                }).then(() => {
                    this._enrolllmentService.enroll1(form.value).subscribe(data => {
                        this.display1 = false;
                        console.log(data);
                        this.snackBar.open("Verification email has been successfully sent", "OK", {
                            duration: 90000,
                        });
                    }, error => console.error("error", error));
                });
            }).
                catch((error) => {
                this.display1 = false;
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                this.snackBar.open(errorMessage, "OK", {
                    duration: 90000,
                });
                // ...
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _enrollment_service1__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService1"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/score/score.component.css":
/*!*******************************************!*\
  !*** ./src/app/score/score.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/score/score.component.ts":
/*!******************************************!*\
  !*** ./src/app/score/score.component.ts ***!
  \******************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score.service */ "./src/app/score/score.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);






var firebaseConfig = {
    apiKey: "AIzaSyDc-AMQY1i9Rx85kCrG6yJM1guhkxMOBYc",
    authDomain: "newproj-aa594.firebaseapp.com",
    databaseURL: "https://newproj-aa594.firebaseio.com",
    projectId: "newproj-aa594",
    storageBucket: "newproj-aa594.appspot.com",
    messagingSenderId: "496383872974",
    appId: "1:496383872974:web:f467a1fc1f505d7be8a59f",
    measurementId: "G-84B0YHYC4K"
};
// Initialize Firebase
if (!firebase__WEBPACK_IMPORTED_MODULE_6__["apps"].length) {
    firebase__WEBPACK_IMPORTED_MODULE_6__["initializeApp"]({});
}

let ScoreComponent = class ScoreComponent {
    constructor(_scoreService, router, fb, dialogRef, data) {
        this._scoreService = _scoreService;
        this.router = router;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.confirm = false;
        this.congrats = true;
        this.title = '';
        this.user = firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser;
        this.totalscore = data.totalscr;
        this.yourscore = data.yscore, this.title = data.title;
    }
    ngOnInit() {
        console.log(this.totalscore, this.yourscore);
    }
    submit() {
        this.confirm = true;
        this.congrats = false;
        console.log(this.user.email);
        var obj = {
            "yscore": this.yourscore,
            "tscore": this.totalscore,
            "time": new Date(),
            "title": this.title
        };
        this._scoreService.subQuiz(obj, this.user.email).subscribe(data => {
            console.log("success dash", obj);
            console.log("success ques");
        }, error => console.error("error", error));
        // this.dialogRef.close(this.form.value);
    }
    close() {
        this.dialogRef.close();
    }
    exit() {
        this.router.navigate(['quiz']).then(() => {
            console.log("quiz");
            // window.location.reload();
        });
        this.dialogRef.close();
        this.dialogRef.close();
        this.dialogRef.close();
    }
};
ScoreComponent.ctorParameters = () => [
    { type: _score_service__WEBPACK_IMPORTED_MODULE_5__["ScoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/score/score.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score.component.css */ "./src/app/score/score.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ScoreComponent);



/***/ }),

/***/ "./src/app/score/score.service.ts":
/*!****************************************!*\
  !*** ./src/app/score/score.service.ts ***!
  \****************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ScoreService = class ScoreService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/quiz_sub';
    }
    subQuiz(data, email) {
        console.log("Ded");
        var data1 = {
            "sub": data,
            "key": email
        };
        return this._http.post(this._url, data1, { withCredentials: true });
    }
};
ScoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScoreService);



/***/ }),

/***/ "./src/app/submission/submission.component.css":
/*!*****************************************************!*\
  !*** ./src/app/submission/submission.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 320px) and (max-width: 767px) {\r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  td, th {\r\n    width: 25%;\r\n  }\r\n  #filterForm{\r\n    width: 30%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    border-bottom: 2px solid #3f51b5;\r\n  }\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  #prog{\r\n    display: none;\r\n  }\r\n  #bgimg {\r\n    display: none;\r\n    \r\n   }\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  #topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8%;\r\n}\r\n#ctitle{\r\n  color: #1b1b1b;\r\n  font-weight: bold;\r\n  font-family:  monospace;\r\n  margin-top: 1%;\r\n  font-size: 300%;\r\n  text-shadow: 1.5px 1.5px #252A41;\r\n  margin-left: 8px;\r\n}\r\n}\r\n@media (min-width: 1025px){\r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  td, th {\r\n    width: 25%;\r\n  }\r\n  #filterForm{\r\n    width: 30%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    border-bottom: 2px solid #3f51b5;\r\n  }\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  #prog{\r\n    display: none;\r\n  }\r\n  #bgimg {\r\n    display: none;\r\n    \r\n   }\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  #topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8%;\r\n}\r\n#ctitle{\r\n  color: #1b1b1b;\r\n  font-weight: bold;\r\n  font-family:  monospace;\r\n  margin-top: 1%;\r\n  margin-left:10%;\r\n  font-size: 300%;\r\n  text-shadow: 1.5px 1.5px #252A41;\r\n  margin-left: 8px;\r\n}\r\n#tablemid{\r\n  margin-left: 10%;margin-right: 10%;\r\n}\r\n  \r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWlzc2lvbi9zdWJtaXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7O0dBRWQ7RUFDRDtJQUNFLGVBQWU7SUFDZiw4RUFBOEU7SUFDOUUsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTs0RkFDd0Y7SUFDeEYsbUJBQU87WUFBUCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsbUJBQWM7WUFBZCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTs7R0FFZDtFQUNEO0lBQ0UsZUFBZTtJQUNmLDhFQUE4RTtJQUM5RSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFOzRGQUN3RjtJQUN4RixtQkFBTztZQUFQLE9BQU87RUFDVDs7RUFFQTtJQUNFO2lFQUM2RDtJQUM3RCxtQkFBYztZQUFkLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0IsQ0FBQyxpQkFBaUI7QUFDcEM7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9zdWJtaXNzaW9uL3N1Ym1pc3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gICNmaWx0ZXJGb3Jte1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZjUxYjU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgI3Byb2d7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjYmdpbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIFxyXG4gICB9XHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gICN0b3BiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxufVxyXG4jY3RpdGxle1xyXG4gIGNvbG9yOiAjMWIxYjFiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGZvbnQtc2l6ZTogMzAwJTtcclxuICB0ZXh0LXNoYWRvdzogMS41cHggMS41cHggIzI1MkE0MTtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCl7XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gICNmaWx0ZXJGb3Jte1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZjUxYjU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgI3Byb2d7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjYmdpbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIFxyXG4gICB9XHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gICN0b3BiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxufVxyXG4jY3RpdGxle1xyXG4gIGNvbG9yOiAjMWIxYjFiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAgbW9ub3NwYWNlO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OjEwJTtcclxuICBmb250LXNpemU6IDMwMCU7XHJcbiAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4jdGFibGVtaWR7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTttYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG4gIFxyXG59XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/submission/submission.component.ts":
/*!****************************************************!*\
  !*** ./src/app/submission/submission.component.ts ***!
  \****************************************************/
/*! exports provided: SubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionComponent", function() { return SubmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submission.service */ "./src/app/submission/submission.service.ts");









var firebaseConfig = {
    apiKey: "AIzaSyDc-AMQY1i9Rx85kCrG6yJM1guhkxMOBYc",
    authDomain: "newproj-aa594.firebaseapp.com",
    databaseURL: "https://newproj-aa594.firebaseio.com",
    projectId: "newproj-aa594",
    storageBucket: "newproj-aa594.appspot.com",
    messagingSenderId: "496383872974",
    appId: "1:496383872974:web:f467a1fc1f505d7be8a59f",
    measurementId: "G-84B0YHYC4K"
};
// Initialize Firebase
if (!firebase__WEBPACK_IMPORTED_MODULE_8__["apps"].length) {
    firebase__WEBPACK_IMPORTED_MODULE_8__["initializeApp"]({});
}


var ELEMENT_DATA = [
    {
        yscore: 0,
        tscore: 0,
        time: '',
        title: ''
    }
];
var ELEMENT_DATA1 = [
    {
        date: 'Sat Sep 05 2020',
        title: 'Hello TechGig',
        language: 'Java1',
        result: ''
    }
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
let SubmissionComponent = class SubmissionComponent {
    constructor(_submissionService, dialog, router, changeDetectorRef, media) {
        this._submissionService = _submissionService;
        this.dialog = dialog;
        this.router = router;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        // displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
        this.displayedColumns = ['time', 'title', 'tscore', 'yscore'];
        this.displayedColumns1 = ['title', 'date', 'language', 'result'];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        // // Create 100 users
        // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
        // // Assign the data to the data source for the table to render
        // this.dataSource = new MatTableDataSource(users);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        var user = firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser;
        console.log(user.email);
        this._submissionService.getQuizSub(user.email).subscribe(data => {
            console.log("success", data.manual);
            ELEMENT_DATA = data.manual;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log("test", ELEMENT_DATA);
        }, error => console.error("error", error));
        this._submissionService.getProgSub(user.email).subscribe(data => {
            console.log("success", data.manual);
            ELEMENT_DATA1 = data.manual;
            this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA1);
            this.dataSource1.paginator = this.paginator;
            this.dataSource1.sort = this.sort;
            console.log("test", ELEMENT_DATA1);
        }, error => console.error("error", error));
        // this.dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
        // this.dataSource1.paginator = this.paginator;
        // this.dataSource1.sort = this.sort;
        //   console.log("test",ELEMENT_DATA1)
    }
    tableVal(val) {
        if (val == 'quiz') {
            document.getElementById('quiz').style.display = 'block';
            document.getElementById('prog').style.display = 'none';
        }
        else if (val == 'program') {
            document.getElementById('prog').style.display = 'block';
            document.getElementById('quiz').style.display = 'none';
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    applyFilter1(filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
        if (this.dataSource1.paginator) {
            this.dataSource1.paginator.firstPage();
        }
    }
};
SubmissionComponent.ctorParameters = () => [
    { type: _submission_service__WEBPACK_IMPORTED_MODULE_9__["SubmissionService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], SubmissionComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], SubmissionComponent.prototype, "sort", void 0);
SubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./submission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/submission/submission.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./submission.component.css */ "./src/app/submission/submission.component.css")).default]
    })
], SubmissionComponent);

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }


/***/ }),

/***/ "./src/app/submission/submission.service.ts":
/*!**************************************************!*\
  !*** ./src/app/submission/submission.service.ts ***!
  \**************************************************/
/*! exports provided: SubmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionService", function() { return SubmissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SubmissionService = class SubmissionService {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getquizsub';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getprogsub';
    }
    getQuizSub(data) {
        console.log("Ded");
        var data1 = {
            "key": data
        };
        return this._http.post(this._url, data1, { withCredentials: true });
    }
    getProgSub(data) {
        console.log("Ded");
        var data1 = {
            "key": data
        };
        return this._http.post(this._url1, data1, { withCredentials: true });
    }
};
SubmissionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubmissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubmissionService);



/***/ }),

/***/ "./src/app/verified/enrollment.service2.ts":
/*!*************************************************!*\
  !*** ./src/app/verified/enrollment.service2.ts ***!
  \*************************************************/
/*! exports provided: EnrollmentService2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentService2", function() { return EnrollmentService2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EnrollmentService2 = class EnrollmentService2 {
    constructor(_http) {
        this._http = _http;
        this._url = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/update';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/result';
    }
    enroll(user) {
        console.log("chapak", user);
        return this._http.post(this._url, user);
    }
    getserver() {
        return this._http.get(this._url1);
    }
};
EnrollmentService2.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnrollmentService2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnrollmentService2);



/***/ }),

/***/ "./src/app/verified/verified.component.css":
/*!*************************************************!*\
  !*** ./src/app/verified/verified.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\r\n    background-color:white;  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpZWQvdmVyaWZpZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQixHQUFHIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZpZWQvdmVyaWZpZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgIH0iXX0= */");

/***/ }),

/***/ "./src/app/verified/verified.component.ts":
/*!************************************************!*\
  !*** ./src/app/verified/verified.component.ts ***!
  \************************************************/
/*! exports provided: VerifiedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedComponent", function() { return VerifiedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enrollment_service2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enrollment.service2 */ "./src/app/verified/enrollment.service2.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





let VerifiedComponent = class VerifiedComponent {
    constructor(_enrolllmentService, router) {
        this._enrolllmentService = _enrolllmentService;
        this.router = router;
    }
    ngOnInit() {
        var url_string = window.location.href; //window.location.href
        console.log("sdsdsd", url_string.indexOf("email"));
        var index = url_string.indexOf("email");
        console.log(url_string.slice(index + 6));
        var email = url_string.slice(index + 6);
        var obj = JSON.parse('{ "email":"' + email + '"}');
        firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('users').doc(email).update({
            status1: true
        });
    }
};
VerifiedComponent.ctorParameters = () => [
    { type: _enrollment_service2__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VerifiedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verified',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verified.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verified/verified.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verified.component.css */ "./src/app/verified/verified.component.css")).default]
    })
], VerifiedComponent);



/***/ }),

/***/ "./src/app/video/video.component.css":
/*!*******************************************!*\
  !*** ./src/app/video/video.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 400px;\r\n    background-color:white;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSAiXX0= */");

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoComponent = class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
    yes() {
        window.open('https://gcpcollection-95381.web.app/');
    }
};
VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video.component.css */ "./src/app/video/video.component.css")).default]
    })
], VideoComponent);



/***/ }),

/***/ "./src/app/webinars/service1.ts":
/*!**************************************!*\
  !*** ./src/app/webinars/service1.ts ***!
  \**************************************/
/*! exports provided: cwebinarService1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cwebinarService1", function() { return cwebinarService1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let cwebinarService1 = class cwebinarService1 {
    constructor(_http) {
        this._http = _http;
        this._url3 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/dashboard';
        this._url1 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/webinar';
        this._url2 = 'https://edtech-angular-server-git-kubernetesml.apps.us-east-1.starter.openshift-online.com/getwebinardata';
    }
    enroll3() {
        return this._http.get(this._url3, { withCredentials: true });
    }
    enroll2() {
        return this._http.get(this._url2, { withCredentials: true });
    }
    enroll(user) {
        return this._http.post(this._url1, user);
    }
};
cwebinarService1.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
cwebinarService1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], cwebinarService1);



/***/ }),

/***/ "./src/app/webinars/webinars.component.css":
/*!*************************************************!*\
  !*** ./src/app/webinars/webinars.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 320px) and (max-width: 767px) {\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  #typed{\r\n    display: none;\r\n  }\r\n  #bgimg {\r\n    display: none;\r\n    \r\n   }\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  .wrapper {\r\n    \r\n    margin-top: -10%;\r\n    \r\n  }\r\n  #topbar{\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8%;\r\n    display: block;\r\n}\r\n#ctitle{\r\n  color: #1b1b1b;\r\n  font-weight: bold;\r\n  font-family:  monospace;\r\n  margin-top: 1%;\r\n  font-size: 300%;\r\n  text-shadow: 1.5px 1.5px #252A41;\r\n  margin-left: 8px;\r\n  display: block;\r\n}\r\n.label {\r\n  font-size: .625rem;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  letter-spacing: +1.3px;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.searchBar {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n#searchQueryInput {\r\n  width: 100%;\r\n  height: 2.8rem;\r\n  background: #f5f5f5;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 1.625rem;\r\n  padding: 0 3.5rem 0 1.5rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n#searchQuerySubmit {\r\n  width: 3.5rem;\r\n  height: 2.8rem;\r\n  margin-left: -3.5rem;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#searchQuerySubmit:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n  \r\n  .container>div {\r\n    margin-left: 3%;\r\n  -webkit-box-flex: 0;\r\n          flex: 0 30%;\r\n  /*demo*/\r\n  box-sizing:border-box;\r\n  box-sizing:border-box;\r\n  word-wrap: break-word;\r\n  \r\n  }\r\n  .item {\r\n    width: 100%;\r\n    margin-top:4%;\r\n    \r\n    }\r\n    .example-card {\r\n      max-width: 400px;\r\n      background-color: white;\r\n      color: black;\r\n    }\r\n\r\n}\r\n@media (min-width: 1025px){\r\n  #typed{\r\n    display: block;\r\n  }\r\n  #bgimg {\r\n    display: block;\r\n    \r\n   }\r\n  #topbar{\r\n    display: none;\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 8%;\r\n}\r\n#ctitle{\r\n  display: none;\r\n  color: #1b1b1b;\r\n  font-weight: bold;\r\n  font-family:  monospace;\r\n  margin-top: 1%;\r\n  font-size: 300%;\r\n  text-shadow: 1.5px 1.5px #252A41;\r\n  margin-left: 8px;\r\n}\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n  }\r\n  .wrapper {\r\n    width: 100%;\r\n    max-width: 31.25rem;\r\n    margin: 6rem auto;\r\n  }\r\n  \r\n  .label {\r\n    font-size: .625rem;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    letter-spacing: +1.3px;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .searchBar {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n  \r\n  #searchQueryInput {\r\n    width: 100%;\r\n    height: 2.8rem;\r\n    background: #f5f5f5;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 1.625rem;\r\n    padding: 0 3.5rem 0 1.5rem;\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  #searchQuerySubmit {\r\n    width: 3.5rem;\r\n    height: 2.8rem;\r\n    margin-left: -3.5rem;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n  }\r\n  \r\n  #searchQuerySubmit:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.cards {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n } \r\n\r\n\r\n .main__heading {\r\n    font-size: 4rem;\r\n    margin-left: 10%;\r\n    max-width: 19ch;\r\n    line-height: 1.0;\r\n    color:rgb(39,51,57);\r\n    font-family: 'Nunito', sans-serif;\r\n  \r\n  }\r\n\r\n  \r\n:root {\r\n  --marquee-width: 80vw;\r\n  --marquee-height: 20vh;\r\n  /* --marquee-elements: 12; */ /* defined with JavaScript */\r\n  --marquee-elements-displayed: 5;\r\n  --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));\r\n  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);\r\n}\r\n\r\n.marquee {\r\n  width: var(--marquee-width);\r\n  height: var(--marquee-height);\r\n  background-color: #111;\r\n  color: #eee;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.marquee:before, .marquee:after {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 10rem;\r\n  height: 100%;\r\n  content: \"\";\r\n  z-index: 1;\r\n}\r\n.marquee:before {\r\n  left: 0;\r\n  background: -webkit-gradient(linear, left top, right top, from(#111), to(transparent));\r\n  background: linear-gradient(to right, #111 0%, transparent 100%);\r\n}\r\n.marquee:after {\r\n  right: 0;\r\n  background: -webkit-gradient(linear, right top, left top, from(#111), to(transparent));\r\n  background: linear-gradient(to left, #111 0%, transparent 100%);\r\n}\r\n.marquee-content {\r\n  list-style: none;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-animation: scrolling var(--marquee-animation-duration) linear infinite;\r\n          animation: scrolling var(--marquee-animation-duration) linear infinite;\r\n}\r\n/* .marquee-content:hover {\r\n  animation-play-state: paused;\r\n} */\r\n@-webkit-keyframes scrolling {\r\n  0% { -webkit-transform: translateX(0); transform: translateX(0); }\r\n  100% { -webkit-transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }\r\n}\r\n@keyframes scrolling {\r\n  0% { -webkit-transform: translateX(0); transform: translateX(0); }\r\n  100% { -webkit-transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }\r\n}\r\n.marquee-content li {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  /* text-align: center; */\r\n  flex-shrink: 0;\r\n  width: var(--marquee-element-width);\r\n  max-height: 100%;\r\n  font-size: calc(var(--marquee-height)*3/4); /* 5rem; */\r\n  white-space: nowrap;\r\n}\r\n\r\n.marquee-content li img {\r\n  width: 100%;\r\n  /* height: 100%; */\r\n  border: 2px solid #eee;\r\n}\r\n.Row {\r\n  display: table;\r\n  width: 100%; /*Optional*/\r\n  table-layout: fixed; /*Optional*/\r\n  border-spacing: 10px; /*Optional*/\r\n}\r\n.Column {\r\n  display: table-cell;\r\n  background-color: red; /*Optional*/\r\n}\r\n.example-card {\r\n  max-width: 400px;\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n\r\n.item {\r\nwidth: 100%;\r\nmargin-top:4%\r\n}\r\n\r\n.container {\r\ndisplay: -webkit-box;\r\ndisplay: flex;\r\nflex-wrap: wrap;\r\n}\r\n\r\n.container>div {\r\n  margin-left: 3%;\r\n-webkit-box-flex: 0;\r\n        flex: 0 30%;\r\n/*demo*/\r\nbox-sizing:border-box;\r\nbox-sizing:border-box;\r\nword-wrap: break-word;\r\n\r\n}\r\n}\r\n/*  */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViaW5hcnMvd2ViaW5hcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhOztHQUVkO0VBQ0Q7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0U7NEZBQ3dGO0lBQ3hGLG1CQUFPO1lBQVAsT0FBTztFQUNUOztFQUVBO0lBQ0U7aUVBQzZEO0lBQzdELG1CQUFjO1lBQWQsY0FBYztFQUNoQjtFQUNBOztJQUVFLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7RUFHRTtJQUNFLGVBQWU7RUFDakIsbUJBQVc7VUFBWCxXQUFXO0VBQ1gsT0FBTztFQUNQLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCOztFQUVyQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7O0lBRWI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsWUFBWTtJQUNkOztBQUVKO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7O0dBRWY7RUFDRDtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjtFQUNFO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGVBQWU7SUFDZiw4RUFBOEU7SUFDOUUsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTs0RkFDd0Y7SUFDeEYsbUJBQU87WUFBUCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsbUJBQWM7WUFBZCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOzs7QUFHRjtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUE2QjtZQUE3Qiw2QkFBNkI7Q0FDaEM7OztDQUdBO0lBQ0csZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7O0VBRW5DOzs7QUFHRjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUUsNEJBQTRCO0VBQzFELCtCQUErQjtFQUMvQix1RkFBdUY7RUFDdkYsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxPQUFPO0VBQ1Asc0ZBQWdFO0VBQWhFLGdFQUFnRTtBQUNsRTtBQUNBO0VBQ0UsUUFBUTtFQUNSLHNGQUErRDtFQUEvRCwrREFBK0Q7QUFDakU7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEVBQXNFO1VBQXRFLHNFQUFzRTtBQUN4RTtBQUNBOztHQUVHO0FBQ0g7RUFDRSxLQUFLLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTtFQUMvQixPQUFPLGdHQUF3RixFQUF4Rix3RkFBd0YsRUFBRTtBQUNuRztBQUhBO0VBQ0UsS0FBSyxnQ0FBd0IsRUFBeEIsd0JBQXdCLEVBQUU7RUFDL0IsT0FBTyxnR0FBd0YsRUFBeEYsd0ZBQXdGLEVBQUU7QUFDbkc7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsMENBQTBDLEVBQUUsVUFBVTtFQUN0RCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVcsRUFBRSxXQUFXO0VBQ3hCLG1CQUFtQixFQUFFLFdBQVc7RUFDaEMsb0JBQW9CLEVBQUUsV0FBVztBQUNuQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFFLFdBQVc7QUFDcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7O0FBR0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLG9CQUFhO0FBQWIsYUFBYTtBQUNiLGVBQWU7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakIsbUJBQVc7UUFBWCxXQUFXO0FBQ1gsT0FBTztBQUNQLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0EsS0FBSyIsImZpbGUiOiJzcmMvYXBwL3dlYmluYXJzL3dlYmluYXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgI3R5cGVke1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI2JnaW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBcclxuICAgfVxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gIH1cclxuICAud3JhcHBlciB7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IC0xMCU7XHJcbiAgICBcclxuICB9XHJcbiAgI3RvcGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI2N0aXRsZXtcclxuICBjb2xvcjogIzFiMWIxYjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogIG1vbm9zcGFjZTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBmb250LXNpemU6IDMwMCU7XHJcbiAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4ICMyNTJBNDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogLjYyNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6ICsxLjNweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2VhcmNoQmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jc2VhcmNoUXVlcnlJbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxLjYyNXJlbTtcclxuICBwYWRkaW5nOiAwIDMuNXJlbSAwIDEuNXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbiNzZWFyY2hRdWVyeVN1Ym1pdCB7XHJcbiAgd2lkdGg6IDMuNXJlbTtcclxuICBoZWlnaHQ6IDIuOHJlbTtcclxuICBtYXJnaW4tbGVmdDogLTMuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jc2VhcmNoUXVlcnlTdWJtaXQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuICBcclxuICAuY29udGFpbmVyPmRpdiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgZmxleDogMCAzMCU7XHJcbiAgLypkZW1vKi9cclxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICB9XHJcbiAgLml0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjQlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZS1jYXJkIHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCl7XHJcbiAgI3R5cGVke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gICNiZ2ltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG4gICB9XHJcbiAgI3RvcGJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxufVxyXG4jY3RpdGxle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY29sb3I6ICMxYjFiMWI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6ICBtb25vc3BhY2U7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgZm9udC1zaXplOiAzMDAlO1xyXG4gIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAjMjUyQTQxO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcbiAgLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMxLjI1cmVtO1xyXG4gICAgbWFyZ2luOiA2cmVtIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IC42MjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiArMS4zcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoQmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjc2VhcmNoUXVlcnlJbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjYyNXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMy41cmVtIDAgMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAjc2VhcmNoUXVlcnlTdWJtaXQge1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI3NlYXJjaFF1ZXJ5U3VibWl0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG5cclxuLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuIH0gXHJcblxyXG5cclxuIC5tYWluX19oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXgtd2lkdGg6IDE5Y2g7XHJcbiAgICBsaW5lLWhlaWdodDogMS4wO1xyXG4gICAgY29sb3I6cmdiKDM5LDUxLDU3KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICBcclxuICB9XHJcblxyXG4gIFxyXG46cm9vdCB7XHJcbiAgLS1tYXJxdWVlLXdpZHRoOiA4MHZ3O1xyXG4gIC0tbWFycXVlZS1oZWlnaHQ6IDIwdmg7XHJcbiAgLyogLS1tYXJxdWVlLWVsZW1lbnRzOiAxMjsgKi8gLyogZGVmaW5lZCB3aXRoIEphdmFTY3JpcHQgKi9cclxuICAtLW1hcnF1ZWUtZWxlbWVudHMtZGlzcGxheWVkOiA1O1xyXG4gIC0tbWFycXVlZS1lbGVtZW50LXdpZHRoOiBjYWxjKHZhcigtLW1hcnF1ZWUtd2lkdGgpIC8gdmFyKC0tbWFycXVlZS1lbGVtZW50cy1kaXNwbGF5ZWQpKTtcclxuICAtLW1hcnF1ZWUtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLW1hcnF1ZWUtZWxlbWVudHMpICogM3MpO1xyXG59XHJcblxyXG4ubWFycXVlZSB7XHJcbiAgd2lkdGg6IHZhcigtLW1hcnF1ZWUtd2lkdGgpO1xyXG4gIGhlaWdodDogdmFyKC0tbWFycXVlZS1oZWlnaHQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1hcnF1ZWU6YmVmb3JlLCAubWFycXVlZTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ubWFycXVlZTpiZWZvcmUge1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTExIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxufVxyXG4ubWFycXVlZTphZnRlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxMTEgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG59XHJcbi5tYXJxdWVlLWNvbnRlbnQge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYW5pbWF0aW9uOiBzY3JvbGxpbmcgdmFyKC0tbWFycXVlZS1hbmltYXRpb24tZHVyYXRpb24pIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4vKiAubWFycXVlZS1jb250ZW50OmhvdmVyIHtcclxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG59ICovXHJcbkBrZXlmcmFtZXMgc2Nyb2xsaW5nIHtcclxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMSAqIHZhcigtLW1hcnF1ZWUtZWxlbWVudC13aWR0aCkgKiB2YXIoLS1tYXJxdWVlLWVsZW1lbnRzKSkpOyB9XHJcbn1cclxuLm1hcnF1ZWUtY29udGVudCBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICBmbGV4LXNocmluazogMDtcclxuICB3aWR0aDogdmFyKC0tbWFycXVlZS1lbGVtZW50LXdpZHRoKTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tYXJxdWVlLWhlaWdodCkqMy80KTsgLyogNXJlbTsgKi9cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWFycXVlZS1jb250ZW50IGxpIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbn1cclxuLlJvdyB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7IC8qT3B0aW9uYWwqL1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7IC8qT3B0aW9uYWwqL1xyXG4gIGJvcmRlci1zcGFjaW5nOiAxMHB4OyAvKk9wdGlvbmFsKi9cclxufVxyXG4uQ29sdW1uIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgLypPcHRpb25hbCovXHJcbn1cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5pdGVtIHtcclxud2lkdGg6IDEwMCU7XHJcbm1hcmdpbi10b3A6NCVcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbnRhaW5lcj5kaXYge1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxuZmxleDogMCAzMCU7XHJcbi8qZGVtbyovXHJcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuYm94LXNpemluZzpib3JkZXItYm94O1xyXG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG59XHJcbn1cclxuLyogICovIl19 */");

/***/ }),

/***/ "./src/app/webinars/webinars.component.ts":
/*!************************************************!*\
  !*** ./src/app/webinars/webinars.component.ts ***!
  \************************************************/
/*! exports provided: WebinarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebinarsComponent", function() { return WebinarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service1 */ "./src/app/webinars/service1.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");







let WebinarsComponent = class WebinarsComponent {
    constructor(dialog, _enrolllmentService, changeDetectorRef, media) {
        this.dialog = dialog;
        this._enrolllmentService = _enrolllmentService;
        this.members = [];
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".hello23").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $(".item").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                });
            });
        });
        this._enrolllmentService.enroll2().subscribe(data => {
            console.log("success", data);
            console.log("success", data);
            //         var text = data['message'];
            // var obj = JSON.parse(text);
            console.log(data['message'][0]);
            var j = 0;
            this.members = [];
            for (var i in data['message']) {
                var newarr = [];
                console.log("fdfdf", data['message'].length);
                var id = data['message'][i];
                newarr.push(id);
                console.log("length", newarr.length);
                for (var k = 0; k < newarr.length; k++) {
                    this.members.push(newarr[k]);
                    console.log("cxxcxc", this.members);
                }
            }
        }, error => console.error("error", error));
    }
    search() {
        console.log('xxxxx', this.yo);
        var value = this.yo.toLowerCase();
        console.log(value);
        $(".item").filter(function () {
            console.log("hello");
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    }
    click(url) {
        window.open(url);
    }
    click1(url) {
        window.open(url);
    }
    openDialog999() {
        const dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
WebinarsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _service1__WEBPACK_IMPORTED_MODULE_2__["cwebinarService1"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"] }
];
WebinarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-webinars',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./webinars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/webinars/webinars.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./webinars.component.css */ "./src/app/webinars/webinars.component.css")).default]
    })
], WebinarsComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pranay\Desktop\final pang integration\pang1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map