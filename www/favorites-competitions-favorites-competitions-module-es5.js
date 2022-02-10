(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-competitions-favorites-competitions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-competitions/favorites-competitions.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-competitions/favorites-competitions.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFavoritesCompetitionsFavoritesCompetitionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\n<div class=\"wrapper wrapper--mini-header\" id=\"app\">\n  <div class=\"mini-header mini-header--red\">\n    <div class=\"large-header__back\"><span class=\"icon\">\n        <!-- <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\n          <g>\n            <g id=\"chevron-right\">\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\n            </g>\n          </g>\n        </svg> -->\n        <p routerLink=\"/home\" class=\"wh\">تخطي</p>\n      </span></div>\n    <div class=\"mini-header__center\">البطولات المفضلة</div>\n    <div class=\"mini-header__search\"><span (click)=\"send_favorites()\" class=\"icon\">\n        <p class=\"wh\">التالي</p></span></div>\n  </div>\n  <div class=\"page-content page-content--nomenu\" id=\"app-box\">\n    <div class=\"competitions-box\">\n      <div *ngFor=\"let _competition of data;let i = index\" class=\"competitions-box__one\">\n        <div (click)=\"expand_collapse(i)\" class=\"competitions-box__head\">\n          <p>{{_competition.title}}</p>\n          <span class=\"icon arrow\">\n            <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 256 256\" style=\"enable-background:new 0 0 256 256;\" xml:space=\"preserve\">\n              <g>\n                <g></g>\n                <polygon points=\"225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 \t\t\"></polygon>\n              </g>\n            </svg>\n          </span>\n        </div>\n        <div class=\"competitions-box__body\">\n          <div *ngFor=\"let _item of data[i].list\" class=\"competitions-box__single\">\n            <div  class=\"img-beside-text\">\n              <!-- <a [routerLink]=\"['/competition/',_item.competitionId]\"></a> -->\n              <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_item.logo\"/>\n              <p>{{_item.name}}</p>\n            </div>\n            <div class=\"checkstar\">\n              <input class=\"_competitions\" [attr.data-id]=_item.competitionId type=\"checkbox\"><span class=\"icon\">\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"510px\" height=\"510px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\n                  <g>\n                    <g>\n                      <polygon points=\"255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472                                                     139.103,318.011 97.41,497.25 \t\t\"></polygon>\n                    </g>\n                  </g>\n                </svg></span>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/favorites-competitions/favorites-competitions-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/favorites-competitions/favorites-competitions-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: FavoritesCompetitionsPageRoutingModule */

    /***/
    function srcAppFavoritesCompetitionsFavoritesCompetitionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesCompetitionsPageRoutingModule", function () {
        return FavoritesCompetitionsPageRoutingModule;
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


      var _favorites_competitions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favorites-competitions.page */
      "./src/app/favorites-competitions/favorites-competitions.page.ts");

      var routes = [{
        path: '',
        component: _favorites_competitions_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesCompetitionsPage"]
      }];

      var FavoritesCompetitionsPageRoutingModule = function FavoritesCompetitionsPageRoutingModule() {
        _classCallCheck(this, FavoritesCompetitionsPageRoutingModule);
      };

      FavoritesCompetitionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoritesCompetitionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/favorites-competitions/favorites-competitions.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/favorites-competitions/favorites-competitions.module.ts ***!
      \*************************************************************************/

    /*! exports provided: FavoritesCompetitionsPageModule */

    /***/
    function srcAppFavoritesCompetitionsFavoritesCompetitionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesCompetitionsPageModule", function () {
        return FavoritesCompetitionsPageModule;
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


      var _favorites_competitions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorites-competitions-routing.module */
      "./src/app/favorites-competitions/favorites-competitions-routing.module.ts");
      /* harmony import */


      var _favorites_competitions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favorites-competitions.page */
      "./src/app/favorites-competitions/favorites-competitions.page.ts");
      /* harmony import */


      var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.components */
      "./src/app/shared/shared.components.ts");

      var FavoritesCompetitionsPageModule = function FavoritesCompetitionsPageModule() {
        _classCallCheck(this, FavoritesCompetitionsPageModule);
      };

      FavoritesCompetitionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorites_competitions_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesCompetitionsPageRoutingModule"], _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_favorites_competitions_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesCompetitionsPage"]]
      })], FavoritesCompetitionsPageModule);
      /***/
    },

    /***/
    "./src/app/favorites-competitions/favorites-competitions.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/favorites-competitions/favorites-competitions.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFavoritesCompetitionsFavoritesCompetitionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy1jb21wZXRpdGlvbnMvZmF2b3JpdGVzLWNvbXBldGl0aW9ucy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/favorites-competitions/favorites-competitions.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/favorites-competitions/favorites-competitions.page.ts ***!
      \***********************************************************************/

    /*! exports provided: FavoritesCompetitionsPage */

    /***/
    function srcAppFavoritesCompetitionsFavoritesCompetitionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesCompetitionsPage", function () {
        return FavoritesCompetitionsPage;
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

      var FavoritesCompetitionsPage = /*#__PURE__*/function () {
        function FavoritesCompetitionsPage(_ElementRef, _AppService) {
          _classCallCheck(this, FavoritesCompetitionsPage);

          this._ElementRef = _ElementRef;
          this._AppService = _AppService;
          this.data_loaded = false;
          this.data = [];
          this.competitions_arr = [];
          this.teams_arr = [];
          this.liked_competitions = [];
        }

        _createClass(FavoritesCompetitionsPage, [{
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

              _this.data.push(_this._south_america); // console.log(this.data)


              _this.data_loaded = true;

              _this.get_favorites();

              setTimeout(function () {
                _this.collect_favorites();
              }, 2000);
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
            this._AppService.go_back(); // console.log('back')

          }
        }, {
          key: "collect_favorites",
          value: function collect_favorites() {
            var _this2 = this;

            // this.competitions_arr = []
            // this.teams_arr = []
            var inputs = this._ElementRef.nativeElement.querySelectorAll('._competitions'); // console.log(inputs)


            var _loop = function _loop(i) {
              // this.competitions_arr.push(inputs[i].getAttribute('data-id'))
              inputs[i].addEventListener('click', function () {
                if (_this2.competitions_arr.includes(inputs[i].getAttribute('data-id'))) {
                  var index = _this2.competitions_arr.indexOf(inputs[i].getAttribute('data-id'));

                  if (index > -1) {
                    _this2.competitions_arr.splice(index, 1);
                  }
                } else {
                  _this2.competitions_arr.push(inputs[i].getAttribute('data-id'));
                }

                console.log(_this2.competitions_arr);
              });
            };

            for (var i = 0; i < inputs.length; i++) {
              _loop(i);
            }
          }
        }, {
          key: "send_favorites",
          value: function send_favorites() {
            var _this3 = this;

            if (this.competitions_arr.length > 0) {
              this._AppService.user_post_data("user/savespeciallist", {
                favourite_competitions: this.competitions_arr
              }, 's', localStorage.getItem('token')).subscribe(function (res) {
                // console.log(res)
                if (res.status == 1) {
                  _this3._AppService.router_navigation('/favorites-teams');
                }
              });
            } else {
              this._AppService.router_navigation('/favorites-teams');
            }
          }
        }, {
          key: "get_favorites",
          value: function get_favorites() {
            var _this4 = this;

            this._AppService.user_get_data("user/favourite", 's', localStorage.getItem('token')).subscribe(function (res) {
              var collected_ids = [];

              if (res.data != null) {
                if (res.data.favorite_competitions.length > 0) {
                  for (var i = 0; i < res.data.favorite_competitions.length; i++) {
                    collected_ids.push(res.data.favorite_competitions[i].competitionId);
                  }

                  var inputs;
                  inputs = _this4._ElementRef.nativeElement.querySelectorAll('._competitions'); // console.log(inputs)

                  for (var _i = 0; _i < collected_ids.length; _i++) {
                    for (var x = 0; x < inputs.length; x++) {
                      if (collected_ids[_i] == inputs[x].getAttribute('data-id')) {
                        // console.log(inputs[x])
                        inputs[x].checked = true;
                      }
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.get_data(); // this.get_favorites()
          }
        }]);

        return FavoritesCompetitionsPage;
      }();

      FavoritesCompetitionsPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }];
      };

      FavoritesCompetitionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites-competitions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorites-competitions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-competitions/favorites-competitions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorites-competitions.page.scss */
        "./src/app/favorites-competitions/favorites-competitions.page.scss"))["default"]]
      })], FavoritesCompetitionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favorites-competitions-favorites-competitions-module-es5.js.map