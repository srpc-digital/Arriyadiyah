(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competitions-competitions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/competitions/competitions.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competitions/competitions.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCompetitionsCompetitionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div class=\"wrapper wrapper--mini-header\" id=\"app\">\r\n  <div class=\"mini-header\">\r\n    <!-- <div (click)=\"back()\" class=\"large-header__back\"><span class=\"icon\">\r\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\r\n          <g>\r\n            <g id=\"chevron-right\">\r\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\r\n            </g>\r\n          </g>\r\n        </svg></span></div> -->\r\n    <div class=\"mini-header__center\">بطولات</div>\r\n    <!-- <div class=\"mini-header__search\"><span class=\"icon\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"136pt\" version=\"1.1\" viewBox=\"-1 0 136 136.21852\" width=\"136pt\">\r\n          <g id=\"surface1\">\r\n            <path d=\"M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 \"></path>\r\n          </g>\r\n        </svg></span></div> -->\r\n  </div>\r\n  <div class=\"page-content\" id=\"app-box\">\r\n    <div class=\"competitions-box\">\r\n      <div *ngFor=\"let _competition of data;let i = index\" class=\"competitions-box__one\">\r\n        <div (click)=\"expand_collapse(i)\" class=\"competitions-box__head\">\r\n          <p>{{_competition.title}}</p>\r\n          <span class=\"icon arrow\">\r\n            <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 256 256\" style=\"enable-background:new 0 0 256 256;\" xml:space=\"preserve\">\r\n              <g>\r\n                <g></g>\r\n                <polygon points=\"225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 \t\t\"></polygon>\r\n              </g>\r\n            </svg>\r\n          </span>\r\n        </div>\r\n        <div class=\"competitions-box__body\">\r\n          <div *ngFor=\"let _item of data[i].list\" class=\"competitions-box__single\">\r\n            <div  class=\"img-beside-text\">\r\n              <a [routerLink]=\"['/competition/',_item.competitionId]\"></a>\r\n              <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_item.logo\"/>\r\n              <p>{{_item.name}}</p>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-menu-bar [_active_tab]=\"4\"></app-menu-bar>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/competitions/competitions-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/competitions/competitions-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CompetitionsPageRoutingModule */

    /***/
    function srcAppCompetitionsCompetitionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompetitionsPageRoutingModule", function () {
        return CompetitionsPageRoutingModule;
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


      var _competitions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./competitions.page */
      "./src/app/competitions/competitions.page.ts");

      var routes = [{
        path: '',
        component: _competitions_page__WEBPACK_IMPORTED_MODULE_3__["CompetitionsPage"]
      }];

      var CompetitionsPageRoutingModule = function CompetitionsPageRoutingModule() {
        _classCallCheck(this, CompetitionsPageRoutingModule);
      };

      CompetitionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompetitionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/competitions/competitions.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/competitions/competitions.module.ts ***!
      \*****************************************************/

    /*! exports provided: CompetitionsPageModule */

    /***/
    function srcAppCompetitionsCompetitionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompetitionsPageModule", function () {
        return CompetitionsPageModule;
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


      var _competitions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./competitions-routing.module */
      "./src/app/competitions/competitions-routing.module.ts");
      /* harmony import */


      var _competitions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./competitions.page */
      "./src/app/competitions/competitions.page.ts");
      /* harmony import */


      var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.components */
      "./src/app/shared/shared.components.ts");

      var CompetitionsPageModule = function CompetitionsPageModule() {
        _classCallCheck(this, CompetitionsPageModule);
      };

      CompetitionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _competitions_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompetitionsPageRoutingModule"], _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_competitions_page__WEBPACK_IMPORTED_MODULE_6__["CompetitionsPage"]]
      })], CompetitionsPageModule);
      /***/
    },

    /***/
    "./src/app/competitions/competitions.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/competitions/competitions.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCompetitionsCompetitionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9ucy9jb21wZXRpdGlvbnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/competitions/competitions.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/competitions/competitions.page.ts ***!
      \***************************************************/

    /*! exports provided: CompetitionsPage */

    /***/
    function srcAppCompetitionsCompetitionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompetitionsPage", function () {
        return CompetitionsPage;
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

      var CompetitionsPage = /*#__PURE__*/function () {
        function CompetitionsPage(_AppService, _ElementRef) {
          _classCallCheck(this, CompetitionsPage);

          this._AppService = _AppService;
          this._ElementRef = _ElementRef;
          this.data_loaded = false;
          this.data = [];
        }

        _createClass(CompetitionsPage, [{
          key: "get_data",
          value: function get_data() {
            var _this = this;

            this._AppService.get_data("Competitions/continent", 's').subscribe(function (res) {
              _this._africa = res.data.africa;
              _this._asia = res.data.asia;
              _this._europe = res.data.europe;
              _this._international = res.data.international;
              _this._south_america = res.data.south_america;

              _this.data.push(_this._africa);

              _this.data.push(_this._asia);

              _this.data.push(_this._europe);

              _this.data.push(_this._international);

              _this.data.push(_this._south_america);

              console.log(_this.data);
              _this.data_loaded = true;
            });
          }
        }, {
          key: "expand_collapse",
          value: function expand_collapse(index) {
            this._ElementRef.nativeElement.querySelectorAll('.competitions-box__head')[index].classList.toggle('active');

            this._ElementRef.nativeElement.querySelectorAll('.competitions-box__body')[index].classList.toggle('active');
          }
        }, {
          key: "back",
          value: function back() {
            this._AppService.go_back();

            console.log('back');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.get_data();
          }
        }]);

        return CompetitionsPage;
      }();

      CompetitionsPage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      CompetitionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competitions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./competitions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/competitions/competitions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./competitions.page.scss */
        "./src/app/competitions/competitions.page.scss"))["default"]]
      })], CompetitionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=competitions-competitions-module-es5.js.map