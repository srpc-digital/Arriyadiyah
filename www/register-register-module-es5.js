(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper wrapper--mini-header\" id=\"app\">\r\n  <div class=\"mini-header mini-header--red\">\r\n    <div class=\"large-header__back\"><span (click)=\"back()\" class=\"icon\">\r\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\r\n          <g>\r\n            <g id=\"chevron-right\">\r\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\r\n            </g>\r\n          </g>\r\n        </svg></span></div>\r\n    <div class=\"mini-header__center\">إنشاء حساب جديد</div>\r\n    <div class=\"mini-header__search\"><span class=\"icon\"></span></div>\r\n  </div>\r\n  <div class=\"page-content page-content--nomenu\" id=\"app-box\">\r\n    <form class=\"user-auth\" #userRegister=\"ngForm\" (ngSubmit)=\"user_register(userRegister)\" autocomplete=\"off\"> \r\n      <div class=\"user-auth__group\">\r\n        <input ngModel name=\"user_name\" #user_name=\"ngModel\" required class=\"input validate\" type=\"text\" placeholder=\"إسم المستخدم\" minlength=\"3\"/><span class=\"icon\">\r\n          <svg id=\"Layer_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z\"></path>\r\n              </g>\r\n            </g>\r\n            <g>\r\n              <g>\r\n                <path d=\"M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195                                C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15                                C481,444.833,460.745,395.539,423.966,358.195z\"></path>\r\n              </g>\r\n            </g>\r\n          </svg></span>\r\n          <label *ngIf=\"user_name.touched && user_name.errors?.required\" class=\"user-auth__validation\">هذا الحقل\r\n            مطلوب</label>\r\n            <label *ngIf=\"user_name.touched && user_name.errors?.minlength\" class=\"user-auth__validation\">لا يجب ان تكون\r\n             إسم المستخدم أقل من 3 حروف</label>\r\n      </div>\r\n      <div class=\"user-auth__group\">\r\n        <input ngModel name=\"email\" #email=\"ngModel\" required email required class=\"input  validate\" type=\"email\" placeholder=\"البريد الإلكتروني\"/><span class=\"icon\">\r\n          <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 477.867 477.867\" style=\"enable-background:new 0 0 477.867 477.867;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z\"></path>\r\n              </g>\r\n            </g>\r\n            <g>\r\n              <g>\r\n                <path d=\"M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8                                c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z\"></path>\r\n              </g>\r\n            </g>\r\n          </svg></span>\r\n          <label *ngIf=\"email.touched && email.errors?.required\" class=\"user-auth__validation\">هذا الحقل\r\n            مطلوب</label>\r\n          <label *ngIf=\"email.touched && email.errors?.email\" class=\"user-auth__validation\">البريد الإلكتروني غير\r\n            صحيح</label>\r\n      </div>\r\n      <div class=\"user-auth__group\">\r\n        <input ngModel name=\"password\" type=\"password\" #password=\"ngModel\" required minlength=\"8\" class=\"input  validate\" type=\"password\" placeholder=\"كلمة المرور\"/><span class=\"icon\">\r\n          <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"401.998px\" height=\"401.998px\" viewBox=\"0 0 401.998 401.998\" style=\"enable-background:new 0 0 401.998 401.998;\" xml:space=\"preserve\">\r\n            <g>\r\n              <path d=\"M357.45,190.721c-5.331-5.33-11.8-7.993-19.417-7.993h-9.131v-54.821c0-35.022-12.559-65.093-37.685-90.218                            C266.093,12.563,236.025,0,200.998,0c-35.026,0-65.1,12.563-90.222,37.688C85.65,62.814,73.091,92.884,73.091,127.907v54.821                            h-9.135c-7.611,0-14.084,2.663-19.414,7.993c-5.33,5.326-7.994,11.799-7.994,19.417V374.59c0,7.611,2.665,14.086,7.994,19.417                            c5.33,5.325,11.803,7.991,19.414,7.991H338.04c7.617,0,14.085-2.663,19.417-7.991c5.325-5.331,7.994-11.806,7.994-19.417V210.135                            C365.455,202.523,362.782,196.051,357.45,190.721z M274.087,182.728H127.909v-54.821c0-20.175,7.139-37.402,21.414-51.675                            c14.277-14.275,31.501-21.411,51.678-21.411c20.179,0,37.399,7.135,51.677,21.411c14.271,14.272,21.409,31.5,21.409,51.675V182.728                            z\"></path>\r\n            </g>\r\n          </svg></span>\r\n          <label *ngIf=\"password.touched && password.errors?.required\" class=\"user-auth__validation\">هذا الحقل\r\n            مطلوب</label>\r\n          <label *ngIf=\"password.touched && password.errors?.minlength\" class=\"user-auth__validation\">لا يجب ان تكون\r\n            كلمة المرور أقل من 8 حروف</label>\r\n      </div>\r\n      <div class=\"user-auth__group\">\r\n        <input type=\"password\" ngModel name=\"repassword\" #repassword=\"ngModel\" required class=\"input  validate\" type=\"password\" placeholder=\"إعادة كلمة المرور\"/><span class=\"icon\">\r\n          <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"401.998px\" height=\"401.998px\" viewBox=\"0 0 401.998 401.998\" style=\"enable-background:new 0 0 401.998 401.998;\" xml:space=\"preserve\">\r\n            <g>\r\n              <path d=\"M357.45,190.721c-5.331-5.33-11.8-7.993-19.417-7.993h-9.131v-54.821c0-35.022-12.559-65.093-37.685-90.218                            C266.093,12.563,236.025,0,200.998,0c-35.026,0-65.1,12.563-90.222,37.688C85.65,62.814,73.091,92.884,73.091,127.907v54.821                            h-9.135c-7.611,0-14.084,2.663-19.414,7.993c-5.33,5.326-7.994,11.799-7.994,19.417V374.59c0,7.611,2.665,14.086,7.994,19.417                            c5.33,5.325,11.803,7.991,19.414,7.991H338.04c7.617,0,14.085-2.663,19.417-7.991c5.325-5.331,7.994-11.806,7.994-19.417V210.135                            C365.455,202.523,362.782,196.051,357.45,190.721z M274.087,182.728H127.909v-54.821c0-20.175,7.139-37.402,21.414-51.675                            c14.277-14.275,31.501-21.411,51.678-21.411c20.179,0,37.399,7.135,51.677,21.411c14.271,14.272,21.409,31.5,21.409,51.675V182.728                            z\"></path>\r\n            </g>\r\n          </svg></span>\r\n          <label *ngIf=\"repassword.touched && repassword.errors?.required\" class=\"user-auth__validation\">هذا الحقل\r\n            مطلوب</label>\r\n          <label *ngIf=\"repassword.value != password.value && repassword.touched\"\r\n            class=\"user-auth__validation\">كلمات المرور غير متطابقة</label>\r\n          \r\n      </div>\r\n      <!-- <label class=\"checkboxwrap\">أوافق على شروط الخدمة\r\n        <input (change)=\"_rules()\" class=\"checkboxwrap__input\" type=\"checkbox\"/><span class=\"checkboxwrap__mark\"></span>\r\n      </label> -->\r\n      <button [disabled]=\"userRegister.invalid || repassword.value != password.value\" class=\"btn btn--primary btn--block\" type=\"submit\">تسجيل</button>\r\n      <div *ngIf=\"errorMessage\" style=\"display: block;\r\n            color: red;\r\n            text-align: center;\r\n            margin-top: 15px;\r\n            padding: 5px;\r\n            background: rgba(255, 0, 0, 0.14);\r\n            border-radius: 3px;\r\n            \">{{errorMessage}}</div>\r\n      <div class=\"haveacc\">\r\n        <p>لديك حساب بالفعل؟<a routerLink=\"/login\">تسجيل دخول</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/register/register-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/register/register.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "./src/app/register/register-routing.module.ts");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/register/register.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/register/register.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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


      var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/app.service */
      "./src/app/services/app.service.ts");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user.service */
      "./src/app/user.service.ts");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(_AppService, _UserService) {
          _classCallCheck(this, RegisterPage);

          this._AppService = _AppService;
          this._UserService = _UserService;
          this.errorMessage = '';
          this.hold_btn = false;
          this.rules = false;
        }

        _createClass(RegisterPage, [{
          key: "user_register",
          value: function user_register(form) {
            var _this = this;

            var _value = form.value;
            console.log(_value);

            this._AppService.post_data("auth/register", {
              "name": _value.user_name,
              "email": _value.email,
              "password": _value.password,
              "device_id": localStorage.getItem('device_id'),
              "device_type": this._AppService.get_platform(),
              "token": localStorage.getItem('fcm_token')
            }, 's').subscribe(function (res) {
              _this.errorMessage = '';
              console.log(res);

              if (res.status == 1) {
                //-- success
                console.log(res.data);
                localStorage.setItem('token', res.data.token);

                _this._AppService.router_navigation('/favorites-competitions');
              }
            }, function (error) {
              if (error.status == 422) {
                if (error.error.data.email[0] == 'Email already used!') {
                  console.log('yup');
                  _this.errorMessage = 'هذا البريد الإلكتروني مستخدم من قبل';
                }
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            this._AppService.go_back();
          }
        }, {
          key: "_rules",
          value: function _rules() {
            if (this.rules) {
              this.rules = false;
            } else {
              this.rules = true;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._UserService.is_user_logged_routing();
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map