(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-password-forget-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppForgetPasswordForgetPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper wrapper--mini-header\" id=\"app\">\n  <div class=\"mini-header mini-header--red\">\n    <div class=\"large-header__back\"><span (click)=\"back()\" class=\"icon\">\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\n          <g>\n            <g id=\"chevron-right\">\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\n            </g>\n          </g>\n        </svg></span></div>\n    <div class=\"mini-header__center\">إستعادة كلمة المرور</div>\n    <div class=\"mini-header__search\"><span class=\"icon\"></span></div>\n  </div>\n  <div class=\"page-content page-content--nomenu\" id=\"app-box\">\n    <form #forgetPassword=\"ngForm\" (ngSubmit)=\"forget_password(forgetPassword)\" autocomplete=\"off\" class=\"user-auth\"> \n      <div class=\"user-auth__group\">\n        <input autocomplete=\"off\" ngModel name=\"email\" #email=\"ngModel\" required class=\"input validate\" type=\"email\" placeholder=\"البريد الإلكتروني\"/><span class=\"icon\">\n          <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 477.867 477.867\" style=\"enable-background:new 0 0 477.867 477.867;\" xml:space=\"preserve\">\n            <g>\n              <g>\n                <path d=\"M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z\"></path>\n              </g>\n            </g>\n            <g>\n              <g>\n                <path d=\"M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8                                c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z\"></path>\n              </g>\n            </g>\n          </svg></span>\n          <label *ngIf=\"email.touched && email.errors?.required\" class=\"user-auth__validation\">هذا الحقل\n            مطلوب</label>\n          <label *ngIf=\"email.touched && email.errors?.email\" class=\"user-auth__validation\">البريد الإلكتروني غير\n            صحيح</label>\n      </div>\n      \n      <button [disabled]=\"forgetPassword.invalid\" class=\"btn btn--primary btn--block\" type=\"submit\">إرسال</button>\n      <div *ngIf=\"errorMessage\" style=\"display: block;\n            color: red;\n            text-align: center;\n            margin-top: 15px;\n            padding: 5px;\n            background: rgba(255, 0, 0, 0.14);\n            border-radius: 3px;\n            \">{{errorMessage}}</div>\n      \n      <div *ngIf=\"message_sent\" class=\"message-sent\">تم إرسال رابط على بريدك الإلكتروني .. قم بفتح الرابط وإعادة تعيين كلمة المرور الخاصة بك. <br>سيتم تحويلك للصفحة الرئيسية بعد 7 ثوان.</div>\n      \n    </form>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/forget-password/forget-password-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/forget-password/forget-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgetPasswordPageRoutingModule */

    /***/
    function srcAppForgetPasswordForgetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function () {
        return ForgetPasswordPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forget-password.page */
      "./src/app/forget-password/forget-password.page.ts");

      var routes = [{
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
      }];

      var ForgetPasswordPageRoutingModule = function ForgetPasswordPageRoutingModule() {
        _classCallCheck(this, ForgetPasswordPageRoutingModule);
      };

      ForgetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgetPasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/forget-password/forget-password.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/forget-password/forget-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForgetPasswordPageModule */

    /***/
    function srcAppForgetPasswordForgetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function () {
        return ForgetPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forget-password-routing.module */
      "./src/app/forget-password/forget-password-routing.module.ts");
      /* harmony import */


      var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forget-password.page */
      "./src/app/forget-password/forget-password.page.ts");

      var ForgetPasswordPageModule = function ForgetPasswordPageModule() {
        _classCallCheck(this, ForgetPasswordPageModule);
      };

      ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"]],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
      })], ForgetPasswordPageModule);
      /***/
    },

    /***/
    "./src/app/forget-password/forget-password.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/forget-password/forget-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppForgetPasswordForgetPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/forget-password/forget-password.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/forget-password/forget-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ForgetPasswordPage */

    /***/
    function srcAppForgetPasswordForgetPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function () {
        return ForgetPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/app.service */
      "./src/app/services/app.service.ts");

      var ForgetPasswordPage = /*#__PURE__*/function () {
        function ForgetPasswordPage(_AppService, _ElementRef, _Router, _NavController) {
          _classCallCheck(this, ForgetPasswordPage);

          this._AppService = _AppService;
          this._ElementRef = _ElementRef;
          this._Router = _Router;
          this._NavController = _NavController;
          this.errorMessage = '';
        }

        _createClass(ForgetPasswordPage, [{
          key: "forget_password",
          value: function forget_password(form) {
            var _this = this;

            this._AppService.post_data("resetPassword", {
              "email": form.value.email
            }, 's').subscribe(function (res) {
              console.log(res);

              if (res.message == "'Great! Successfully send forget password mail'") {
                _this.errorMessage = '';
                _this.message_sent = true;
                _this._ElementRef.nativeElement.querySelector('.input').value = '';
                setTimeout(function () {
                  _this._Router.navigate(['intro']);
                }, 7000);
              }
            }, function (error) {
              console.log(error);

              if (error.error.message == 'this email is not register ') {
                _this.errorMessage = 'هذا البريد الإلكتروني غير مسجل من قبل.';
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            this._NavController.pop();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.message_sent = false;
          }
        }]);

        return ForgetPasswordPage;
      }();

      ForgetPasswordPage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forget-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-password/forget-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forget-password.page.scss */
        "./src/app/forget-password/forget-password.page.scss"))["default"]]
      })], ForgetPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forget-password-forget-password-module-es5.js.map