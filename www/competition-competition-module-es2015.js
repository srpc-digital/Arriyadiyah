(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competition-competition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/competition/competition.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competition/competition.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div class=\"wrapper wrapper--large-header\" id=\"app\">\r\n  <div class=\"large-header\">\r\n    <div (click)=\"back()\" class=\"large-header__back\"><span class=\"icon\">\r\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n          x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\r\n          <g>\r\n            <g id=\"chevron-right\">\r\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\r\n            </g>\r\n          </g>\r\n        </svg></span></div>\r\n    <div *ngIf=\"if_user_logged\" class=\"large-header__favorite\">\r\n      <div class=\"checkstar large\">\r\n        <input class=\"_fav\" (change)=\"add_favorite(data.competitionId)\"  type=\"checkbox\"><span class=\"icon\">\r\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"510px\" height=\"510px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <polygon points=\"255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472                                                     139.103,318.011 97.41,497.25 \t\t\"></polygon>\r\n              </g>\r\n            </g>\r\n          </svg></span>\r\n      </div>\r\n      <!-- <span class=\"icon\">\r\n        <svg _ngcontent-syb-c140=\"\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"510px\" height=\"510px\" viewBox=\"0 0 510 510\" xml:space=\"preserve\" style=\"enable-background: new 0 0 510 510;\"><g _ngcontent-syb-c140=\"\"><g _ngcontent-syb-c140=\"\"><polygon _ngcontent-syb-c140=\"\" points=\"255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472                                                     139.103,318.011 97.41,497.25 \t\t\"></polygon></g></g></svg>\r\n      </span> -->\r\n    </div>\r\n    <div class=\"large-header__inside large-header__inside--competition\"><span\r\n        class=\"match-card__competition\">{{data?.name}}</span>\r\n      <div class=\"large-header__logo\"><img [src]=\"data?.logo\" /></div>\r\n    </div>\r\n    <div class=\"large-header__tabs\">\r\n      <li (click)=\"tabs(0)\" class=\"active\">مباريات</li>\r\n      <li (click)=\"tabs(1)\">ترتيب الفرق</li>\r\n      <li (click)=\"tabs(2)\">الهدافين</li>\r\n      <li (click)=\"tabs(3)\">إحصائيات</li>\r\n    </div>\r\n  </div>\r\n  <div class=\"page-content page-content--nomenu page-content--largeheader\" id=\"app-box\">\r\n    <div class=\"main-tabs-box\">\r\n      <div class=\"main-tabs-box__tab active\">\r\n        <div *ngIf=\"data?.format == 'domestic_league'\" class=\"competition-matches-option\">\r\n          <h4 class=\"competition-matches-option__title\">الجولة</h4>\r\n          <div class=\"select-box select-box--week\">\r\n\r\n            <div class=\"select-box__current\" tabindex=\"1\">\r\n              <div *ngFor=\"let week of _total_weeks;let i = index\" class=\"select-box__value\">\r\n                <input (change)=\"get_matches(data.competitionId,i+1,'')\" class=\"select-box__input\" [id]=\"'competition'+i\" type=\"radio\"\r\n                  [value]=\"i+1\" name=\"_week\" [checked]=\"i+1 == data.active_week\" />\r\n                <p class=\"select-box__input-text\">{{i+1}}</p>\r\n              </div>\r\n              <span class=\"icon select-box__icon\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 185.344 185.344\"\r\n                  style=\"enable-background:new 0 0 185.344 185.344;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g></g>\r\n                    <path\r\n                      d=\"M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18                                c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0                                c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span>\r\n            </div>\r\n            <ul class=\"select-box__list\">\r\n              <li *ngFor=\"let week of _total_weeks;let i = index\">\r\n                <label class=\"select-box__option\" for=\"competition{{i}}\" aria-hidden=\"aria-hidden\">{{i+1}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"data?.format != 'domestic_league'\" class=\"competition-matches-option\">\r\n          <h4 class=\"competition-matches-option__title\">الدور</h4>\r\n          <div class=\"select-box\">\r\n\r\n            <div class=\"select-box__current\" tabindex=\"1\">\r\n              <div *ngFor=\"let round of _total_rounds;let i = index\" class=\"select-box__value\">\r\n                <input (change)=\"get_matches(data.competitionId,'',round.roundId)\" class=\"select-box__input\" [id]=\"'1competition'+i\"\r\n                  type=\"radio\" [value]=\"round.roundId\" name=\"_round\" [checked]=\"round.roundId == data.active_round\" />\r\n                <p class=\"select-box__input-text\">{{round.name}}</p>\r\n              </div>\r\n              <span class=\"icon select-box__icon\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 185.344 185.344\"\r\n                  style=\"enable-background:new 0 0 185.344 185.344;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g></g>\r\n                    <path\r\n                      d=\"M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18                                c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0                                c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span>\r\n            </div>\r\n            <ul class=\"select-box__list\">\r\n              <li *ngFor=\"let round of _total_rounds;let i = index\">\r\n                <label class=\"select-box__option\" for=\"1competition{{i}}\" aria-hidden=\"aria-hidden\">{{round.name}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <app-skeleton-loader class=\"mt15\" *ngIf=\"!matches_loaded\"></app-skeleton-loader>\r\n        <app-skeleton-loader class=\"mt15\" *ngIf=\"!matches_loaded\"></app-skeleton-loader>\r\n        <app-skeleton-loader class=\"mt15\" *ngIf=\"!matches_loaded\"></app-skeleton-loader>\r\n        <app-no-data *ngIf=\"no_matches\"></app-no-data>\r\n        <div *ngFor=\"let _day of _matches;let i = index\" class=\"matches-day-box\">\r\n\r\n\r\n          <div class=\"mini-title\">\r\n            <!-- <h5>{{_day.day}}</h5> -->\r\n            <h5>{{transform_date(_day.day)}}</h5>\r\n          </div>\r\n          <div class=\"competition-wrap-data\">\r\n            <app-match-card *ngFor=\"let _match of _matches[i].matches\" [match]=\"_match\" [modifier]=\"'match-card--mini'\"></app-match-card>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <app-no-data style=\"margin-left: 10px;margin-right: 10px; display: block;\" *ngIf=\"no_standing\"></app-no-data>\r\n        <div *ngIf=\"data?.format == 'domestic_league'\" class=\"competition-wrap-data\">\r\n\r\n          <div *ngIf=\"!no_standing\" class=\"table-box table-box--wh\">\r\n            <div class=\"table-box__row table-box__row--head\">\r\n              <div class=\"table-box__col table-box__col--first\">#</div>\r\n              <div class=\"table-box__col table-box__col--large\">الفريق</div>\r\n              <div class=\"table-box__col\">لعب </div>\r\n              <div class=\"table-box__col\">فوز </div>\r\n              <div class=\"table-box__col\">تعادل </div>\r\n              <div class=\"table-box__col\">خسارة </div>\r\n              <!-- <div class=\"table-box__col\">الفرق </div> -->\r\n              <div class=\"table-box__col mark\">نقاط</div>\r\n            </div>\r\n            <div *ngFor=\"let team of _standing;let i = index\" class=\"table-box__row\">\r\n              <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n              <div class=\"table-box__col table-box__col--large\">\r\n                <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+team.teamId)\"></a><img [src]=\"team.logo\" />\r\n                  <p>{{team.teamName}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-box__col\">{{team.total.totalMatches}} </div>\r\n              <div class=\"table-box__col\">{{team.total.wonMatches}}</div>\r\n              <div class=\"table-box__col\">{{team.total.drawMatches}}</div>\r\n              <div class=\"table-box__col\">{{team.total.lostMatches}} </div>\r\n              <!-- <div class=\"table-box__col\">{{team.total.scoreDifference}}</div> -->\r\n              <div class=\"table-box__col mark\">{{team.total.points}}</div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"data?.format != 'domestic_league'\" class=\"competition-wrap-data\">\r\n          <div *ngFor=\"let _group of _standing;let i = index;\">\r\n            <div class=\"mini-title pdr10\">\r\n              <h5>{{_group.name}}</h5>\r\n            </div>\r\n            <div  class=\"table-box table-box--wh\">\r\n              <div class=\"table-box__row table-box__row--head\">\r\n                <div class=\"table-box__col table-box__col--first\">#</div>\r\n                <div class=\"table-box__col table-box__col--large\">الفريق</div>\r\n                <div class=\"table-box__col\">لعب </div>\r\n                <div class=\"table-box__col\">فوز </div>\r\n                <div class=\"table-box__col\">تعادل </div>\r\n                <div class=\"table-box__col\">خسارة </div>\r\n                <div class=\"table-box__col\">الفرق </div>\r\n                <div class=\"table-box__col mark\">نقاط</div>\r\n              </div>\r\n              <div *ngFor=\"let team of _standing[i].teams;let x = index\" class=\"table-box__row\">\r\n                <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{x+1}}</span></div>\r\n                <div class=\"table-box__col table-box__col--large\">\r\n                  <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+team.teamId)\"></a><img [src]=\"team.logo\" />\r\n                    <p>{{team.name}}</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-box__col\">{{team.total.totalMatches}} </div>\r\n                <div class=\"table-box__col\">{{team.total.wonMatches}}</div>\r\n                <div class=\"table-box__col\">{{team.total.drawMatches}}</div>\r\n                <div class=\"table-box__col\">{{team.total.lostMatches}} </div>\r\n                <div class=\"table-box__col\">{{team.total.scoreDifference}}</div>\r\n                <div class=\"table-box__col mark\">{{team.total.points}}</div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <div class=\"competition-wrap-data\">\r\n          <app-no-data style=\"margin-left: 10px;margin-right: 10px; display: block;\" *ngIf=\"no_top_scorers\">\r\n          </app-no-data>\r\n          <div *ngIf=\"!no_top_scorers\" class=\"table-box table-box--wh\">\r\n            <div class=\"table-box__row table-box__row--head\">\r\n              <div class=\"table-box__col table-box__col--first\">#</div>\r\n              <div class=\"table-box__col table-box__col--large\">اللاعب</div>\r\n              <div class=\"table-box__col\">لعب </div>\r\n              <div class=\"table-box__col mark\">أهداف</div>\r\n            </div>\r\n            <div *ngFor=\"let player of _top_scorers;let i = index\" class=\"table-box__row\">\r\n              <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n              <div class=\"table-box__col table-box__col--large\">\r\n                <div class=\"img-beside-text img-beside-text--twolines\"><a (click)=\"_router('/player/'+player.peopleId)\"></a><img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"player.logo\" />\r\n                  <div  class=\"img-besite-text__data\">\r\n                    <p>{{player.firstName}} {{player.lastName}}</p><span>{{player.teamName}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-box__col\">{{player.matches_played}}</div>\r\n              <div class=\"table-box__col mark\">{{player.count}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"main-tabs-box__tab \">\r\n        <!-- <div class=\"select-box select-box--mini\">\r\n          <div class=\"select-box__current\" tabindex=\"1\">\r\n            <div class=\"select-box__value\">\r\n              <input class=\"select-box__input\" id=\"3\" type=\"radio\" value=\"4\" name=\"_season\" checked=\"checked\" />\r\n              <p class=\"select-box__input-text\">الموسم</p>\r\n            </div>\r\n            <div class=\"select-box__value\">\r\n              <input class=\"select-box__input\" id=\"4\" type=\"radio\" value=\"5\" name=\"_season\" />\r\n              <p class=\"select-box__input-text\">الأكثر قراءة</p>\r\n            </div>\r\n            <div class=\"select-box__value\">\r\n              <input class=\"select-box__input\" id=\"5\" type=\"radio\" value=\"6\" name=\"_season\" />\r\n              <p class=\"select-box__input-text\">تريند</p>\r\n            </div><span class=\"icon select-box__icon\">\r\n              <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 185.344 185.344\"\r\n                style=\"enable-background:new 0 0 185.344 185.344;\" xml:space=\"preserve\">\r\n                <g>\r\n                  <g></g>\r\n                  <path\r\n                    d=\"M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18                                c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0                                c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z\">\r\n                  </path>\r\n                </g>\r\n              </svg></span>\r\n          </div>\r\n          <ul class=\"select-box__list\">\r\n            <li>\r\n              <label class=\"select-box__option\" for=\"3\" aria-hidden=\"aria-hidden\">الموسم</label>\r\n            </li>\r\n            <li>\r\n              <label class=\"select-box__option\" for=\"4\" aria-hidden=\"aria-hidden\">الأكثر قراءة</label>\r\n            </li>\r\n            <li>\r\n              <label class=\"select-box__option\" for=\"5\" aria-hidden=\"aria-hidden\">تريند </label>\r\n            </li>\r\n          </ul>\r\n        </div> -->\r\n        <div class=\"mini-title\">\r\n          <h5>الأكثر تسجيلا أهداف </h5>\r\n        </div>\r\n        <div class=\"competition-wrap-data\">\r\n          <div class=\"table-box table-box--wh\">\r\n            <div *ngFor=\"let team of _top_Team_scoreFor;let i = index\" class=\"table-box__row\">\r\n              <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n              <div class=\"table-box__col table-box__col--large\">\r\n                <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+team.teamId)\"></a><img [src]=\"team.logo\" />\r\n                  <p>{{team.teamName}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-box__col mark\">{{team.number}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mini-title\">\r\n          <h5>الأكثر إستقبالا أهداف </h5>\r\n        </div>\r\n        <div class=\"competition-wrap-data\">\r\n          <div class=\"table-box table-box--wh\">\r\n            <div *ngFor=\"let team of _top_Team_Aganst;let i = index\" class=\"table-box__row\">\r\n              <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n              <div class=\"table-box__col table-box__col--large\">\r\n                <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+team.teamId)\"></a><img [src]=\"team.logo\" />\r\n                  <p>{{team.teamName}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-box__col mark\">{{team.number}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mini-title\">\r\n          <h5>الأكثر حصولا علي كروت صفراء</h5>\r\n        </div>\r\n        <div class=\"competition-wrap-data\">\r\n          <div class=\"table-box table-box--wh\">\r\n            <div *ngFor=\"let team of _top_Team_Yellowcards;let i = index\" class=\"table-box__row\">\r\n              <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n              <div class=\"table-box__col table-box__col--large\">\r\n                <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+team.teamId)\"></a><img [src]=\"team.logo\" />\r\n                  <p>{{team.teamName}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-box__col mark\">{{team.number}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mini-title\">\r\n          <h5>الأكثر حصولا علي كروت حمراء</h5>\r\n        </div>\r\n        <div class=\"competition-wrap-data\">\r\n          <div class=\"table-box table-box--wh\">\r\n            <div *ngFor=\"let team of _top_Team_Redcards;let i = index\" class=\"table-box__row\">\r\n              <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n              <div class=\"table-box__col table-box__col--large\">\r\n                <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+team.teamId)\"></a><img [src]=\"team.logo\" />\r\n                  <p>{{team.teamName}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-box__col mark\">{{team.number}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/competition/competition-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/competition/competition-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CompetitionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionPageRoutingModule", function() { return CompetitionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _competition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competition.page */ "./src/app/competition/competition.page.ts");




const routes = [
    {
        path: '',
        component: _competition_page__WEBPACK_IMPORTED_MODULE_3__["CompetitionPage"]
    }
];
let CompetitionPageRoutingModule = class CompetitionPageRoutingModule {
};
CompetitionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompetitionPageRoutingModule);



/***/ }),

/***/ "./src/app/competition/competition.module.ts":
/*!***************************************************!*\
  !*** ./src/app/competition/competition.module.ts ***!
  \***************************************************/
/*! exports provided: CompetitionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionPageModule", function() { return CompetitionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _competition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./competition-routing.module */ "./src/app/competition/competition-routing.module.ts");
/* harmony import */ var _competition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competition.page */ "./src/app/competition/competition.page.ts");
/* harmony import */ var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.components */ "./src/app/shared/shared.components.ts");








let CompetitionPageModule = class CompetitionPageModule {
};
CompetitionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _competition_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompetitionPageRoutingModule"],
            _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_competition_page__WEBPACK_IMPORTED_MODULE_6__["CompetitionPage"]]
    })
], CompetitionPageModule);



/***/ }),

/***/ "./src/app/competition/competition.page.scss":
/*!***************************************************!*\
  !*** ./src/app/competition/competition.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGl0aW9uL2NvbXBldGl0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/competition/competition.page.ts":
/*!*************************************************!*\
  !*** ./src/app/competition/competition.page.ts ***!
  \*************************************************/
/*! exports provided: CompetitionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionPage", function() { return CompetitionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





let CompetitionPage = class CompetitionPage {
    constructor(_ActivatedRoute, _AppService, _ElementRef, _UserService) {
        this._ActivatedRoute = _ActivatedRoute;
        this._AppService = _AppService;
        this._ElementRef = _ElementRef;
        this._UserService = _UserService;
        this.matches_loaded = false;
        this.standing_loaded = false;
        this.top_scorers_loaded = false;
        this.statistics_loaded = false;
        this.no_matches = false;
        this.no_standing = false;
        this.no_top_scorers = false;
        this.no_statistics = false;
        this._total_weeks = [];
        this._total_rounds = [];
        this.if_user_logged = false;
        this.favorites_competitions = [];
        this.months_arabic = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    }
    get_matches(_id, _week, _round) {
        this.matches_loaded = false;
        this._AppService.get_data(`Competitions/matches?week=${_week}&roundId=${_round}&id=${_id}`, 's').subscribe((res) => {
            this.matches_loaded = true;
            this.data = res.data;
            this._matches = res.data.matches;
            this.data_loaded = true;
            if (this._matches.length == 0) {
                this.no_matches = true;
            }
            else {
                this.no_matches = false;
            }
            // this._total_weeks = res.data.week_count
            console.log(this._matches);
            if (this.data.format != 'domestic_league') {
                this._total_rounds = this.data.rounds;
                console.log(this._total_rounds);
            }
            else {
                this.sum_weeks();
            }
        });
    }
    sum_weeks() {
        this._total_weeks = [];
        for (let i = 1; i < this.data.week_count + 1; i++) {
            this._total_weeks.push(i);
        }
        console.log(this._total_weeks);
    }
    get_standing() {
        this.standing_loaded = false;
        this._AppService.get_data(`Competitions/table?competitionId=${this.id}`, 's').subscribe((res) => {
            console.log(res.data.groups);
            if (res.data.format != 'domestic_league') {
                this._standing = res.data.groups;
            }
            else {
                this._standing = res.data.table;
            }
            console.log(this._standing);
            if (this._standing.length == 0) {
                this.no_standing = true;
            }
            else {
                this.no_standing = false;
            }
        });
    }
    get_top_scorers() {
        this.top_scorers_loaded = false;
        this._AppService.get_data(`Competitions/topScorer?competitionId=${this.id}`, 's').subscribe((res) => {
            console.log(res);
            this._top_scorers = res.data.topScorer;
            if (this._top_scorers.length == 0) {
                this.no_top_scorers = true;
            }
            else {
                this.no_top_scorers = false;
            }
        });
    }
    get_stastistics() {
        this.statistics_loaded = false;
        this._AppService.get_data(`Competitions/statistic?competitionId=${this.id}`, 's').subscribe((res) => {
            console.log(res);
            this._statistics = res.data;
            this._top_Team_scoreFor = this._statistics.top_Team_scoreFor;
            this._top_Team_Aganst = this._statistics.top_Team_Aganst;
            this._top_Team_Yellowcards = this._statistics.top_Team_Yellowcards;
            this._top_Team_Redcards = this._statistics.top_Team_Redcards;
        });
    }
    back() {
        this._AppService.go_back();
        console.log('back');
    }
    tabs(index) {
        this._ElementRef.nativeElement.querySelector('.large-header__tabs li.active').classList.remove('active');
        this._ElementRef.nativeElement.querySelector('.main-tabs-box__tab.active').classList.remove('active');
        this._ElementRef.nativeElement.querySelectorAll('.large-header__tabs li')[index].classList.add('active');
        this._ElementRef.nativeElement.querySelectorAll('.main-tabs-box__tab')[index].classList.add('active');
        this._AppService.scroll_to_top();
    }
    _router(url) {
        this._AppService.router_navigation(url);
    }
    add_favorite(id) {
        this._AppService.user_post_data(`user/savespeciallist`, { favourite_competitions: [id] }, 's', localStorage.getItem('token'))
            .subscribe((res) => {
            console.log(res);
        });
    }
    get_favorites() {
        if (this.if_user_logged) {
            this._AppService.user_get_data(`user/favourite`, 's', localStorage.getItem('token'))
                .subscribe((res) => {
                console.log(res);
                if (res.data.length > 0) {
                    this.favorites_competitions = res.data.favorite_competitions;
                    for (let i = 0; i < this.favorites_competitions.length; i++) {
                        if (this.favorites_competitions[i].competitionId == this.id) {
                            this._ElementRef.nativeElement.querySelector('._fav').checked = true;
                        }
                    }
                }
            });
        }
    }
    transform_date(__date) {
        __date = __date.replace(/:[^:]*$/, '');
        let _generated_date = __date.split("/");
        let _final_date = `${_generated_date[2]} ${this.months_arabic[parseInt(_generated_date[1]) - 1]} ${_generated_date[0]}`;
        return _final_date;
    }
    ngOnInit() {
        this.if_user_logged = this._UserService.is_user_logged(false);
        if (this.if_user_logged) {
            this.get_favorites();
        }
        this.id = this._ActivatedRoute.snapshot.params['id'];
        this.get_matches(this.id, '', '');
        this.get_standing();
        this.get_top_scorers();
        this.get_stastistics();
    }
};
CompetitionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
CompetitionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competition.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/competition/competition.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./competition.page.scss */ "./src/app/competition/competition.page.scss")).default]
    })
], CompetitionPage);



/***/ })

}]);
//# sourceMappingURL=competition-competition-module-es2015.js.map