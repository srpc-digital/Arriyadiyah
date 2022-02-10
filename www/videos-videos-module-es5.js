(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-videos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVideosVideosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div class=\"wrapper wrapper--mini-header\" id=\"app\">\r\n  <header class=\"header header--sm\">\r\n    <div class=\"header__top\">\r\n      <!-- <div class=\"header__search\"><span routerLink=\"/search\" class=\"icon\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"136pt\" version=\"1.1\" viewBox=\"-1 0 136 136.21852\"\r\n            width=\"136pt\">\r\n            <g id=\"surface1\">\r\n              <path\r\n                d=\"M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 \">\r\n              </path>\r\n            </g>\r\n          </svg></span></div> -->\r\n      <div class=\"header__logo\"><a routerLink=\"/home\"><img src=\"assets/img/logo.png\" /></a></div>\r\n      <div *ngIf=\"is_user_logged\" routerLink=\"/settings\" class=\"header__setting header__login\"><span class=\"icon\">\r\n          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\" style=\"enable-background:new 0 0 426.667 426.667;\"\r\n            xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307\r\n                        c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44\r\n                        c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96\r\n                        l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573\r\n                        c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44\r\n                        c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16\r\n                        c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96\r\n                        l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92\r\n                        C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667\r\n                        s74.667,33.387,74.667,74.667S254.56,288,213.28,288z\" />\r\n              </g>\r\n            </g>\r\n\r\n          </svg>\r\n\r\n        </span></div>\r\n      <div *ngIf=\"!is_user_logged\" routerLink=\"/register\" class=\"header__setting header__login\"><span class=\"icon\">\r\n          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z\" />\r\n              </g>\r\n            </g>\r\n            <g>\r\n              <g>\r\n                <path d=\"M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195\r\n                    C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15\r\n                    C481,444.833,460.745,395.539,423.966,358.195z\" />\r\n              </g>\r\n            </g>\r\n          </svg>\r\n        </span></div>\r\n      <!-- <div class=\"header__setting\"><span class=\"icon\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\r\n                    style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\r\n                    <g>\r\n                        <g></g>\r\n                        <path\r\n                            d=\"M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307                        c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44                        c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96                        l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573                        c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44                        c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16                        c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96                        l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92                        C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667                        s74.667,33.387,74.667,74.667S254.56,288,213.28,288z\">\r\n                        </path>\r\n                    </g>\r\n                </svg></span></div> -->\r\n    </div>\r\n\r\n  </header>\r\n  <ion-content>\r\n    <div class=\"page-content\">\r\n      <div class=\"page-content__box active\">\r\n        <div class=\"block-box\">\r\n          <div class=\"main-title\">\r\n            <h4>فيديوهات</h4>\r\n          </div>\r\n          <!-- <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader> -->\r\n          <div class=\"block-box__content\">\r\n            <div *ngFor=\"let _video of data\" class=\"post-card post-card--card \"><a\r\n                (click)=\"_router('/single-video/'+_video.id)\"\r\n                (click)=\"saving_object_with_routing(_video.subject2,_video.text,transform_date(_video.date),_video.author,_video.youtube_url)\"\r\n                class=\"post-card__link\"></a>\r\n              <div class=\"post-card__img\">\r\n                <span class=\"icon post-card__video\">\r\n                  <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 320.001 320.001\"\r\n                    style=\"enable-background:new 0 0 320.001 320.001;\" xml:space=\"preserve\">\r\n                    <path d=\"M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288\r\n                  c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144\r\n                  c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z\" />\r\n\r\n                  </svg>\r\n\r\n                </span>\r\n                <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_video.thumbnail\" />\r\n              </div>\r\n              <div class=\"post-card__data\">\r\n                <h4 class=\"post-card__title\">{{_video.subject2}}</h4>\r\n\r\n                <div class=\"post-card__date\"><span class=\"date\">{{transform_date(_video.date)}}</span></div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <app-media-card [data]=\"_socialmedia\" [modifier]=\"'post-card--horizontal'\"></app-media-card> -->\r\n          </div>\r\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\r\n            </ion-infinite-scroll-content>\r\n          </ion-infinite-scroll>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n\r\n  <app-menu-bar [_active_tab]=\"3\"></app-menu-bar>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/videos/videos-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/videos/videos-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: VideosPageRoutingModule */

    /***/
    function srcAppVideosVideosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideosPageRoutingModule", function () {
        return VideosPageRoutingModule;
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


      var _videos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./videos.page */
      "./src/app/videos/videos.page.ts");

      var routes = [{
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_3__["VideosPage"]
      }];

      var VideosPageRoutingModule = function VideosPageRoutingModule() {
        _classCallCheck(this, VideosPageRoutingModule);
      };

      VideosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VideosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/videos/videos.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/videos/videos.module.ts ***!
      \*****************************************/

    /*! exports provided: VideosPageModule */

    /***/
    function srcAppVideosVideosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideosPageModule", function () {
        return VideosPageModule;
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


      var _videos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./videos-routing.module */
      "./src/app/videos/videos-routing.module.ts");
      /* harmony import */


      var _videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./videos.page */
      "./src/app/videos/videos.page.ts");
      /* harmony import */


      var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.components */
      "./src/app/shared/shared.components.ts");

      var VideosPageModule = function VideosPageModule() {
        _classCallCheck(this, VideosPageModule);
      };

      VideosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _videos_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideosPageRoutingModule"], _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]]
      })], VideosPageModule);
      /***/
    },

    /***/
    "./src/app/videos/videos.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/videos/videos.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppVideosVideosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlb3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/videos/videos.page.ts":
    /*!***************************************!*\
      !*** ./src/app/videos/videos.page.ts ***!
      \***************************************/

    /*! exports provided: VideosPage */

    /***/
    function srcAppVideosVideosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideosPage", function () {
        return VideosPage;
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

      var VideosPage = /*#__PURE__*/function () {
        function VideosPage(_AppService, _UserService) {
          _classCallCheck(this, VideosPage);

          this._AppService = _AppService;
          this._UserService = _UserService;
          this.is_user_logged = false;
          this.data_loaded = false;
          this.page_loaded = false;
          this.data = [];
          this.index = 1;
          this.months_arabic = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        }

        _createClass(VideosPage, [{
          key: "get_data",
          value: function get_data() {
            var _this = this;

            this._AppService.get_data("app_news_by_sections/5?page=".concat(this.index), 'r').subscribe(function (res) {
              _this.data = _this.data.concat(res.results.section_5);
              _this.data_loaded = true;
              _this.index++;
              console.log(_this.data);
            });
          }
        }, {
          key: "loadData",
          value: function loadData(_event) {
            // console.log('ssss')
            this.get_data();

            _event.target.complete();
          }
        }, {
          key: "_router",
          value: function _router(url) {
            this._AppService.router_navigation(url);
          }
        }, {
          key: "saving_object_with_routing",
          value: function saving_object_with_routing(_title, _text, _date, _author, _video) {
            localStorage.setItem('title', _title); // localStorage.setItem('img', _img)

            localStorage.setItem('text', _text);
            localStorage.setItem('date', _date);
            localStorage.setItem('author', _author);
            localStorage.setItem('video', _video);
          }
        }, {
          key: "transform_date",
          value: function transform_date(__date) {
            // __date = '2021-03-27 22:46:22'
            __date = __date.replace(/-/g, ' ');

            var _arr = __date.split(" ");

            var _generated_date = _arr;

            var _final_date = "".concat(_generated_date[2], " ").concat(this.months_arabic[parseInt(_generated_date[1]) - 1], " - ").concat(_generated_date[3]);

            return _final_date;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.is_user_logged = this._UserService.is_user_logged(false);
            this.get_data(); // this._AppService.infinite_scroll('.infinite_box')
          }
        }]);

        return VideosPage;
      }();

      VideosPage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      VideosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./videos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./videos.page.scss */
        "./src/app/videos/videos.page.scss"))["default"]]
      })], VideosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=videos-videos-module-es5.js.map