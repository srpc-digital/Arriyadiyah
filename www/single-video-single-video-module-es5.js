(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-video-single-video-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/single-video/single-video.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-video/single-video.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSingleVideoSingleVideoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <app-page-loader *ngIf=\"!data_loaded\"></app-page-loader> -->\r\n<div class=\"wrapper wrapper--mini-header\" id=\"app\">\r\n  <div class=\"mini-header\">\r\n    <div (click)=\"back()\" class=\"large-header__back\"><span class=\"icon\">\r\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\r\n          <g>\r\n            <g id=\"chevron-right\">\r\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\r\n            </g>\r\n          </g>\r\n        </svg></span></div>\r\n    <!-- <div class=\"mini-header__center\">????????????</div> -->\r\n    <!-- <div class=\"mini-header__search\"><span class=\"icon\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"136pt\" version=\"1.1\" viewBox=\"-1 0 136 136.21852\" width=\"136pt\">\r\n          <g id=\"surface1\">\r\n            <path d=\"M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 \"></path>\r\n          </g>\r\n        </svg></span></div> -->\r\n  </div>\r\n  <!-- <div class=\"page-content page-content--nomenu\" id=\"app-box\">\r\n   \r\n  </div> -->\r\n  <div class=\"single-video\">\r\n    <div class=\"single-video__box\">\r\n      <iframe  [src]=\"__()\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    </div>\r\n    <h2 class=\"single-video__title\">{{title}}</h2>\r\n    <div class=\"single-video__date\">\r\n      <span class=\"icon\">\r\n        <svg _ngcontent-nps-c2=\"\" xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Capa_1\" style=\"enable-background:new 0 0 209.28 209.28;\" version=\"1.1\" viewBox=\"0 0 209.28 209.28\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\"><g _ngcontent-nps-c2=\"\"><path _ngcontent-nps-c2=\"\" d=\"M104.641,0C46.943,0,0.002,46.94,0.002,104.637c0,57.701,46.941,104.643,104.639,104.643   c57.697,0,104.637-46.943,104.637-104.643C209.278,46.94,162.338,0,104.641,0z M104.641,194.28   c-49.427,0-89.639-40.214-89.639-89.643C15.002,55.211,55.214,15,104.641,15c49.426,0,89.637,40.211,89.637,89.637   C194.278,154.066,154.067,194.28,104.641,194.28z\"></path><path _ngcontent-nps-c2=\"\" d=\"M158.445,102.886h-49.174V49.134c0-4.142-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v61.252c0,4.142,3.358,7.5,7.5,7.5   h56.674c4.143,0,7.5-3.358,7.5-7.5C165.945,106.244,162.587,102.886,158.445,102.886z\"></path></g></svg>\r\n      </span>\r\n      <p>{{date}}</p>\r\n    </div>\r\n    \r\n    <div class=\"single-wrapper__content\">\r\n      <span style=\"font-size: 15px;display: block;padding-right: 15px;margin-bottom: 10px;\">{{author}}</span>\r\n      <!-- <div class=\"author\">\r\n       \r\n        <span>???????????? / {{author}}</span>\r\n      </div> -->\r\n      \r\n      <p [innerHTML]=\"_after\" class=\"no-pt\"></p>\r\n      <div class=\"article_images\">\r\n        <img *ngFor=\"let _image of article_images\" [src]=_image.image/>\r\n      </div>\r\n      <!-- <p>???????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ??????????????????????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ????????????????</p>\r\n      <p>??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ?????????? ????????????????</p>\r\n      <p>???????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ??????????????????????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ????????????????</p>\r\n      <p>??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ?????????? ????????????????</p> -->\r\n      \r\n      \r\n    </div>\r\n    <div class=\"social-box social-box--video\"><span class=\"share-text\">???????????? ????????????</span>\r\n      <a target=\"_blank\" href=\"https://twitter.com/intent/tweet?text=https://arriyadiyah.com/{{id}}\"><span class=\"icon twtr\">\r\n        <svg aria-hidden=\"true\" data-prefix=\"fab\" data-icon=\"twitter\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg=\"\">\r\n          <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>\r\n        </svg></span></a>\r\n      <a target=\"_blank\" href=\"http://www.facebook.com/sharer/sharer.php?u=https://arriyadiyah.com/{{id}}\">\r\n        <div class=\"icon fb\">\r\n          <svg aria-hidden=\"true\" data-prefix=\"fab\" data-icon=\"facebook-f\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 264 512\" data-fa-i2svg=\"\">\r\n            <path d=\"M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229\"></path>\r\n          </svg>\r\n        </div></a>\r\n        \r\n          <a href={{_url}} ><span class=\"icon wts\">\r\n          <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M256.064,0h-0.128C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104l98.4-31.456    C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z M405.024,361.504    c-6.176,17.44-30.688,31.904-50.24,36.128c-13.376,2.848-30.848,5.12-89.664-19.264C189.888,347.2,141.44,270.752,137.664,265.792    c-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624,26.176-62.304c6.176-6.304,16.384-9.184,26.176-9.184    c3.168,0,6.016,0.16,8.576,0.288c7.52,0.32,11.296,0.768,16.256,12.64c6.176,14.88,21.216,51.616,23.008,55.392    c1.824,3.776,3.648,8.896,1.088,13.856c-2.4,5.12-4.512,7.392-8.288,11.744c-3.776,4.352-7.36,7.68-11.136,12.352    c-3.456,4.064-7.36,8.416-3.008,15.936c4.352,7.36,19.392,31.904,41.536,51.616c28.576,25.44,51.744,33.568,60.032,37.024    c6.176,2.56,13.536,1.952,18.048-2.848c5.728-6.176,12.8-16.416,20-26.496c5.12-7.232,11.584-8.128,18.368-5.568    c6.912,2.4,43.488,20.48,51.008,24.224c7.52,3.776,12.48,5.568,14.304,8.736C411.2,329.152,411.2,344.032,405.024,361.504z\"></path>\r\n              </g>\r\n            </g>\r\n          </svg></span></a>\r\n          <!-- <a href=\"#\"><span class=\"icon share\">\r\n          <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 482.239 482.239\" height=\"512\" viewBox=\"0 0 482.239 482.239\" width=\"512\">\r\n            <path d=\"m378.902 275.565c-34.183 0-64.306 16.874-83.127 42.521l-94.044-47.033c2.912-9.539 4.943-19.456 4.943-29.934s-2.031-20.397-4.943-29.934l94.044-47.033c18.821 25.647 48.944 42.521 83.127 42.521 56.983 0 103.337-46.354 103.337-103.337s-46.353-103.336-103.337-103.336-103.337 46.354-103.337 103.337c0 10.478 2.033 20.395 4.945 29.932l-94.047 47.035c-18.821-25.647-48.944-42.521-83.127-42.521-56.983 0-103.336 46.353-103.336 103.337s46.353 103.337 103.337 103.337c34.183 0 64.306-16.874 83.127-42.521l94.044 47.035c-2.912 9.536-4.943 19.453-4.943 29.932 0 56.983 46.353 103.337 103.337 103.337s103.337-46.354 103.337-103.337-46.354-103.338-103.337-103.338zm0-241.119c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.897 68.891-68.891 68.891-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891zm-275.565 275.565c-37.995 0-68.891-30.914-68.891-68.891 0-37.978 30.897-68.891 68.891-68.891 37.995 0 68.891 30.914 68.891 68.891s-30.896 68.891-68.891 68.891zm275.565 137.782c-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.896 68.891-68.891 68.891z\"></path>\r\n          </svg></span></a> -->\r\n        </div>\r\n        \r\n  </div>\r\n  <div class=\"block-box p-15\">\r\n    <div class=\"main-title\">\r\n      <h4>?????? ????????????????????</h4>\r\n    </div>\r\n    <div class=\"block-box__content\">\r\n      <div *ngFor=\"let _video of _trends\" class=\"post-card post-card--card \"><a (click)=\"_router('/single-video/'+_video.id)\" (click)=\"saving_object_with_routing(_video.subject2,_video.text,_video.date,_video.author,_video.youtube_url)\" class=\"post-card__link\"></a>\r\n        <div class=\"post-card__img\">\r\n          <span class=\"icon post-card__video\">\r\n            <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 320.001 320.001\"\r\n              style=\"enable-background:new 0 0 320.001 320.001;\" xml:space=\"preserve\">\r\n              <path d=\"M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288\r\n            c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144\r\n            c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z\" />\r\n\r\n            </svg>\r\n\r\n          </span>\r\n          <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_video.thumbnail\" />\r\n        </div>\r\n        <div class=\"post-card__data\">\r\n          <h4 class=\"post-card__title\">{{_video.subject2}}</h4>\r\n\r\n          <div class=\"post-card__date\"><span class=\"date\">{{_video.date}}</span></div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  \r\n  \r\n</div>";
      /***/
    },

    /***/
    "./src/app/single-video/single-video-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/single-video/single-video-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: SingleVideoPageRoutingModule */

    /***/
    function srcAppSingleVideoSingleVideoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleVideoPageRoutingModule", function () {
        return SingleVideoPageRoutingModule;
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


      var _single_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./single-video.page */
      "./src/app/single-video/single-video.page.ts");

      var routes = [{
        path: '',
        component: _single_video_page__WEBPACK_IMPORTED_MODULE_3__["SingleVideoPage"]
      }];

      var SingleVideoPageRoutingModule = function SingleVideoPageRoutingModule() {
        _classCallCheck(this, SingleVideoPageRoutingModule);
      };

      SingleVideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SingleVideoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/single-video/single-video.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/single-video/single-video.module.ts ***!
      \*****************************************************/

    /*! exports provided: SingleVideoPageModule */

    /***/
    function srcAppSingleVideoSingleVideoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleVideoPageModule", function () {
        return SingleVideoPageModule;
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


      var _single_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./single-video-routing.module */
      "./src/app/single-video/single-video-routing.module.ts");
      /* harmony import */


      var _single_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./single-video.page */
      "./src/app/single-video/single-video.page.ts");
      /* harmony import */


      var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.components */
      "./src/app/shared/shared.components.ts");

      var SingleVideoPageModule = function SingleVideoPageModule() {
        _classCallCheck(this, SingleVideoPageModule);
      };

      SingleVideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _single_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleVideoPageRoutingModule"], _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_single_video_page__WEBPACK_IMPORTED_MODULE_6__["SingleVideoPage"]]
      })], SingleVideoPageModule);
      /***/
    },

    /***/
    "./src/app/single-video/single-video.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/single-video/single-video.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSingleVideoSingleVideoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS12aWRlby9zaW5nbGUtdmlkZW8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/single-video/single-video.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/single-video/single-video.page.ts ***!
      \***************************************************/

    /*! exports provided: SingleVideoPage */

    /***/
    function srcAppSingleVideoSingleVideoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleVideoPage", function () {
        return SingleVideoPage;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SingleVideoPage = /*#__PURE__*/function () {
        function SingleVideoPage(_AppService, dom, _ActivatedRoute) {
          _classCallCheck(this, SingleVideoPage);

          this._AppService = _AppService;
          this.dom = dom;
          this._ActivatedRoute = _ActivatedRoute;
          this.data_loaded = false; // this.video = this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${localStorage.getItem('video')}`); 
        }

        _createClass(SingleVideoPage, [{
          key: "recieve_data",
          value: function recieve_data() {
            this.title = localStorage.getItem('title'); // this.video = `https://www.youtube.com/embed/${localStorage.getItem('video')}` 

            this.text = localStorage.getItem('text');
            this.date = localStorage.getItem('date');
            this.author = localStorage.getItem('author');
            this._removed_rn = this.text.replace(/(?:\r\n|\r|\n)/g, '<br>');
            this._after = this._removed_rn.replace(/&quot;/g, ' ');
          }
        }, {
          key: "back",
          value: function back() {
            this._AppService.go_back();

            console.log('back');
          }
        }, {
          key: "__",
          value: function __() {
            this._video_url = this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/".concat(localStorage.getItem('video')));
            return this._video_url;
          }
        }, {
          key: "related_videos",
          value: function related_videos() {
            var _this = this;

            this.data_loaded = false;

            this._AppService.get_data("app_news_by_sections/5", 'r').subscribe(function (res) {
              console.log(res);
              _this.data_loaded = true;
              _this._trends = res.results.section_5;
            });
          }
        }, {
          key: "get_images",
          value: function get_images() {
            var _this2 = this;

            this._AppService.get_data("app_images_by_news_id/".concat(this.id), 'r').subscribe(function (res) {
              console.log(res);

              if (res != null) {
                _this2.article_images = res.results;
              }
            });
          }
        }, {
          key: "_router",
          value: function _router(url) {
            this._AppService.router_navigation(url);
          } // saving_object_with_routing(_title, _text, _date, _author,_video) {
          //   localStorage.setItem('title', _title)
          //   // localStorage.setItem('img', _img)
          //   localStorage.setItem('text', _text)
          //   localStorage.setItem('date', _date)
          //   localStorage.setItem('author', _author)
          //   localStorage.setItem('video', _video)
          // }

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this._ActivatedRoute.snapshot.params['id'];
            this._url = "https://wa.me/?text=https://arriyadiyah.com/".concat(this.id);
            this.recieve_data();
            this.get_images();
            this.related_videos();
          }
        }]);

        return SingleVideoPage;
      }();

      SingleVideoPage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      SingleVideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./single-video.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/single-video/single-video.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./single-video.page.scss */
        "./src/app/single-video/single-video.page.scss"))["default"]]
      })], SingleVideoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=single-video-single-video-module-es5.js.map