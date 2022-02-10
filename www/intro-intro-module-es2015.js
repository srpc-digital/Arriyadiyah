(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader *ngIf=\"isLogged == false\"></app-page-loader>\r\n<div class=\"wrapper\" id=\"app\">\r\n  <div class=\"intro-box\"><img class=\"intro-box__bg\" src=\"assets/img/intro.png\"/>\r\n    <div class=\"intro-box__inside\">\r\n      <div class=\"intro-box__data\"><img src=\"assets/img/logo-white.png\"/>\r\n        <p>أخبار الرياضة وكرة القدم السعودية والعالمية من مصادر حصرية تنشر أول بأول</p>\r\n      </div>\r\n      <div class=\"intro-box__action\">\r\n        <a routerLink=\"/register\" class=\"btn btn--block btn--primary\">إنشاء حساب جديد</a>\r\n        <a routerLink=\"/login\" class=\"btn btn--block btn--secondary\">تسجيل دخول</a>\r\n        <a routerLink=\"/home\" class=\"btn\">إستمرار بدون دخول</a></div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/intro/intro-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/intro/intro-routing.module.ts");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");
/* harmony import */ var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.components */ "./src/app/shared/shared.components.ts");








let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"],
            _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");







let IntroPage = class IntroPage {
    constructor(_UserService, fcm, _ActivatedRoute, _platform, _Router, _AppService) {
        this._UserService = _UserService;
        this.fcm = fcm;
        this._ActivatedRoute = _ActivatedRoute;
        this._platform = _platform;
        this._Router = _Router;
        this._AppService = _AppService;
        this.isLogged = false;
        this.plugin_state = false;
        this.notification_count = 0;
    }
    getToken() {
        this.fcm.getToken().then(function (token) {
            if (token) {
                localStorage.setItem("fcm_token", token);
            }
        })
            .catch(function (error) {
        });
    }
    setupFCM() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //  alert('2')
            // if (!this.plugin_state) {
            yield this._platform.ready();
            if (!this._platform.is('cordova')) {
                return;
            }
            yield this.fcm.subscribeToTopic('arriyadiyah');
            this._device_id = this._UserService.get_device_id();
            localStorage.setItem('device_id', this._device_id);
            // alert('3'+this._device_id)
            this.getToken();
            this.fcm.onTokenRefresh().subscribe((newToken) => {
                if (newToken) {
                    localStorage.setItem("fcm_token", newToken);
                    this._AppService.user_post_data(`user/update`, {
                        "device_id": this._UserService.get_device_id(),
                        "device_type": this._AppService.get_platform(),
                        "token": newToken
                    }, 's', localStorage.getItem('token'))
                        .subscribe((res => {
                    }));
                    // this.updateToken(newToken, this._device_id);
                }
            });
            this.fcm.onNotification().subscribe((payload) => {
                if (payload.wasTapped) {
                    // let navigationExtras: NavigationExtras = { state: { data: payload } };
                    // this._Router.navigate(['single-notification'], navigationExtras);
                }
                else {
                    // if (localStorage.getItem('notification_count')) {
                    //   localStorage.setItem('notification_count', localStorage.getItem('notification_count') + '1')
                    // } else {
                    //   localStorage.setItem('notification_count', '1')
                    // }
                }
                this.fcm.clearAllNotifications();
                this.fcm.unsubscribeFromTopic('arriyadiyah');
                // this.plugin_state = true
            });
            // }
        });
    }
    is_user_logged_routing() {
        if (localStorage.getItem('token') != null) {
            if (this._Router.url == '/login' || this._Router.url == '/register' || this._Router.url == '/intro') {
                // this.isLogged = true
                this._AppService.router_navigation('/home');
            }
        }
        else {
            this.isLogged = true;
            // this._AppService.router_navigation('/intro')
        }
    }
    ngOnInit() {
        // alert('ss')
        // alert('1')
        this.setupFCM();
        this.is_user_logged_routing();
        // this._UserService.is_user_logged_routing()
        // this._ActivatedRoute.params.subscribe(val => {
        //   this._platform.ready().then(() => {
        //     .then(function () {
        //       // console.log('ss')
        //     })
        //       .catch(function (error) {
        //       });
        //   });
        // })
    }
};
IntroPage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_3__["FCM"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }
];
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")).default]
    })
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es2015.js.map