(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTeamTeamPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div class=\"wrapper wrapper--large-header\" id=\"app\">\r\n  <div class=\"large-header\">\r\n    <div (click)=\"back()\" class=\"large-header__back\"><span class=\"icon\">\r\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n          x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\r\n          <g>\r\n            <g id=\"chevron-right\">\r\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\r\n            </g>\r\n          </g>\r\n        </svg></span></div>\r\n    <div *ngIf=\"if_user_logged\" class=\"large-header__favorite\">\r\n      <div class=\"checkstar large\">\r\n        <input class=\"_fav\" (change)=\"add_favorite(data.teamId)\"  type=\"checkbox\"><span class=\"icon\">\r\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"510px\" height=\"510px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <polygon points=\"255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472                                                     139.103,318.011 97.41,497.25 \t\t\"></polygon>\r\n              </g>\r\n            </g>\r\n          </svg></span>\r\n      </div>\r\n      <!-- <span class=\"icon\">\r\n        <svg _ngcontent-syb-c140=\"\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"510px\" height=\"510px\" viewBox=\"0 0 510 510\" xml:space=\"preserve\" style=\"enable-background: new 0 0 510 510;\"><g _ngcontent-syb-c140=\"\"><g _ngcontent-syb-c140=\"\"><polygon _ngcontent-syb-c140=\"\" points=\"255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472                                                     139.103,318.011 97.41,497.25 \t\t\"></polygon></g></g></svg>\r\n      </span> -->\r\n    </div>\r\n    <div class=\"large-header__inside large-header__inside--competition\"><span\r\n        class=\"match-card__competition\">{{data?.name}}</span>\r\n      <div class=\"large-header__logo\"><img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"data?.logo\" /></div>\r\n    </div>\r\n    <div class=\"large-header__tabs\">\r\n      <li (click)=\"tabs(0)\" class=\"active\">مباريات</li>\r\n      <li (click)=\"tabs(1)\">ترتيب الفريق</li>\r\n      <li (click)=\"tabs(2)\">الهدافين</li>\r\n      <li (click)=\"tabs(3)\">لاعبون</li>\r\n    </div>\r\n  </div>\r\n  <div class=\"page-content page-content--nomenu page-content--largeheader\" id=\"app-box\">\r\n    <div class=\"main-tabs-box\">\r\n      <div class=\"main-tabs-box__tab active\">\r\n        <div class=\"team-matches-option\">\r\n          <h4 class=\"team-matches-option__title\">البطولة</h4>\r\n          <div class=\"select-box\">\r\n            <div class=\"select-box__current\" tabindex=\"1\">\r\n              <div *ngFor=\"let competition of _competitions;let i = index\" class=\"select-box__value\">\r\n                <input (change)=\"get_matches(_competitions[i].competition.competitionId,false)\"\r\n                  class=\"select-box__input\" [id]=\"data.teamId+'first'+i\" type=\"radio\"\r\n                  [value]=\"_competitions[i].competition.competitionId\" name=\"_competition\"\r\n                  [checked]=\"_competitions[i].checked == true\" />\r\n                <p class=\"select-box__input-text\">{{competition.name}}</p>\r\n              </div>\r\n\r\n\r\n              <span class=\"icon select-box__icon\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 185.344 185.344\"\r\n                  style=\"enable-background:new 0 0 185.344 185.344;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g></g>\r\n                    <path\r\n                      d=\"M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18                                c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0                                c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span>\r\n            </div>\r\n            <ul class=\"select-box__list\">\r\n              <li *ngFor=\"let competition of _competitions;let i = index\">\r\n                <label class=\"select-box__option\" for=\"{{data.teamId}}first{{i}}\" aria-hidden=\"aria-hidden\">{{competition.name}}</label>\r\n              </li>\r\n\r\n            </ul>\r\n          </div>\r\n\r\n\r\n          <!-- <div class=\"date-picker-box\">\r\n            <ion-datetime class=\"_date-picker\" #mydt [pickerOptions]=\"customPickerOptions\" [(ngModel)]=\"selYear\"\r\n              displayFormat=\"YYYY-MMM-DD\" placeholder=\"Select Date\"></ion-datetime>\r\n            <span class=\"icon\">\r\n              <svg height=\"617pt\" viewBox=\"-29 -19 617 617.33507\" width=\"617pt\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path\r\n                  d=\"m139.144531 299.351562c-55.53125-.054687-105.8125 32.800782-128.042969 83.683594-22.238281 50.882813-12.191406 110.105469 25.574219 150.8125 2.378907 2.65625 4.902344 5.179688 7.550781 7.5625 45.878907 42.605469 114.496094 49.492188 167.917969 16.84375 53.425781-32.652344 78.601563-96.859375 61.605469-157.113281-16.988281-60.261719-71.996094-101.855469-134.605469-101.789063zm9.976563 139.699219c0 5.511719-4.464844 9.980469-9.976563 9.980469h-59.871093c-5.511719 0-9.976563-4.46875-9.976563-9.980469 0-5.507812 4.464844-9.976562 9.976563-9.976562h49.894531v-89.808594c0-5.507813 4.464843-9.976563 9.976562-9.976563s9.976563 4.46875 9.976563 9.976563zm0 0\">\r\n                </path>\r\n                <path\r\n                  d=\"m558.238281 159.65625h-518.878906v154.863281c1.46875-1.175781 2.992187-2.214843 4.527344-3.339843 1.539062-1.132813 2.996093-2.246094 4.492187-3.304688 3.09375-2.132812 6.265625-4.121094 9.492188-5.988281 1.09375-.648438 2.140625-1.363281 3.25-1.992188 4.339844-2.445312 8.804687-4.664062 13.351562-6.691406 1.238282-.542969 2.507813-.992187 3.761719-1.503906 3.414063-1.40625 6.855469-2.742188 10.355469-3.921875 1.699218-.566406 3.414062-1.058594 5.128906-1.5625 3.183594-.960938 6.398438-1.8125 9.652344-2.570313 1.785156-.410156 3.574218-.804687 5.375-1.164062 3.425781-.667969 6.867187-1.179688 10.328125-1.628907 1.609375-.199218 3.191406-.457031 4.800781-.617187 5.0625-.488281 10.148438-.796875 15.269531-.796875 88.117188.105469 159.527344 71.5 159.65625 159.613281 0 5.121094-.3125 10.207031-.800781 15.265625-.160156 1.609375-.417969 3.195313-.617188 4.789063-.441406 3.476562-1 6.929687-1.628906 10.339843-.359375 1.808594-.757812 3.582032-1.167968 5.367188-.746094 3.265625-1.613282 6.496094-2.574219 9.703125-.496094 1.695313-.996094 3.390625-1.554688 5.066406-1.1875 3.570313-2.546875 7.074219-3.992187 10.546875-.488282 1.175782-.90625 2.382813-1.429688 3.554688-2.03125 4.589844-4.277344 9.078125-6.734375 13.460937-.550781.996094-1.199219 1.914063-1.773437 2.894531-1.996094 3.363282-4.050782 6.664063-6.277344 9.867188-.996094 1.457031-2.085938 2.855469-3.144531 4.273438-1.058594 1.410156-2.210938 3.152343-3.429688 4.65625h264.628907c16.53125 0 29.933593-13.402344 29.933593-29.933594zm0 0\">\r\n                </path>\r\n                <path\r\n                  d=\"m558.238281 89.804688c0-16.53125-13.402343-29.933594-29.933593-29.933594h-19.957032v29.933594c0 5.511718-4.46875 9.980468-9.980468 9.980468-5.507813 0-9.976563-4.46875-9.976563-9.980468v-29.933594h-79.828125v29.933594c0 5.511718-4.46875 9.980468-9.976562 9.980468-5.511719 0-9.980469-4.46875-9.980469-9.980468v-29.933594h-79.828125v29.933594c0 5.511718-4.46875 9.980468-9.976563 9.980468-5.511719 0-9.980469-4.46875-9.980469-9.980468v-29.933594h-79.828124v29.933594c0 5.511718-4.464844 9.980468-9.976563 9.980468s-9.980469-4.46875-9.980469-9.980468v-29.933594h-79.824218v29.933594c0 5.511718-4.46875 9.980468-9.980469 9.980468s-9.976563-4.46875-9.976563-9.980468v-29.933594h-19.957031c-16.539063 0-29.9375 13.402344-29.9375 29.933594v49.894531h518.878906zm0 0\">\r\n                </path>\r\n                <path\r\n                  d=\"m298.800781 0c-5.511719 0-9.980469 4.46875-9.980469 9.976562v49.894532h19.957032v-49.894532c0-5.507812-4.46875-9.976562-9.976563-9.976562zm0 0\">\r\n                </path>\r\n                <path\r\n                  d=\"m398.585938 0c-5.511719 0-9.980469 4.46875-9.980469 9.976562v49.894532h19.957031v-49.894532c0-5.507812-4.46875-9.976562-9.976562-9.976562zm0 0\">\r\n                </path>\r\n                <path\r\n                  d=\"m508.347656 9.976562c0-5.507812-4.46875-9.976562-9.980468-9.976562-5.507813 0-9.976563 4.46875-9.976563 9.976562v49.894532h19.957031zm0 0\">\r\n                </path>\r\n                <path\r\n                  d=\"m199.015625 0c-5.511719 0-9.980469 4.46875-9.980469 9.976562v49.894532h19.957032v-49.894532c0-5.507812-4.464844-9.976562-9.976563-9.976562zm0 0\">\r\n                </path>\r\n                <path\r\n                  d=\"m99.230469 0c-5.511719 0-9.976563 4.46875-9.976563 9.976562v49.894532h19.957032v-49.894532c0-5.507812-4.46875-9.976562-9.980469-9.976562zm0 0\">\r\n                </path>\r\n              </svg>\r\n            </span>\r\n          </div> -->\r\n        </div>\r\n\r\n        <div class=\"competition-wrap-data\">\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!matches_loaded\"></app-skeleton-loader>\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!matches_loaded\"></app-skeleton-loader>\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!matches_loaded\"></app-skeleton-loader>\r\n          <app-no-data style=\"display: block;margin-left: 10px;margin-right: 10px;\" *ngIf=\"no_matches\"></app-no-data>\r\n          <div *ngFor=\"let _match of played_matches;let i = index\" class=\"match-perview\">\r\n            <div class=\"match-perview__head\">\r\n              <p class=\"match-perview__day\">{{transform_date(_match?.match_day)}}</p>\r\n              <p class=\"match-perview__week\">الجولة {{_match?.week}}</p>\r\n            </div>\r\n            <!-- <div class=\"match-perview__competition\">\r\n              <div class=\"img-beside-text\"><a href=\"\"></a><img onerror=\"this.src='assets/img/placeholder.png';\" src=\"img/logos/competition.png\" />\r\n                <p>دوري أبطال أوروبا</p>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"match-perview__body\">\r\n              <app-match-card [match]=\"_match\"></app-match-card>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"is_matches_line\" class=\"matches_status_filter\"></div>\r\n          <div *ngFor=\"let _match of incoming_matches;let i = index\" class=\"match-perview\">\r\n            <div class=\"match-perview__head\">\r\n              <p class=\"match-perview__day\">{{transform_date(_match?.match_day)}}</p>\r\n              <p class=\"match-perview__week\">الجولة {{_match?.week}}</p>\r\n            </div>\r\n            <!-- <div class=\"match-perview__competition\">\r\n              <div class=\"img-beside-text\"><a href=\"\"></a><img onerror=\"this.src='assets/img/placeholder.png';\" src=\"img/logos/competition.png\" />\r\n                <p>دوري أبطال أوروبا</p>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"match-perview__body\">\r\n              <app-match-card [match]=\"_match\"></app-match-card>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <div class=\"competition-wrap-data\">\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!standing_loaded\"></app-skeleton-loader>\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!standing_loaded\"></app-skeleton-loader>\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!standing_loaded\"></app-skeleton-loader>\r\n          <app-no-data style=\"display: block;margin-left: 10px;margin-right: 10px;\" *ngIf=\"no_standing\"></app-no-data>\r\n          <div *ngIf=\"!no_standing\">\r\n            <div *ngFor=\"let _table of _tables_arr; let i = index\">\r\n              <div class=\"mini-title pdr10\">\r\n                <h5>{{_table.name}}</h5>\r\n              </div>\r\n              <div class=\"table-box table-box--wh\">\r\n                <div class=\"table-box__row table-box__row--head\">\r\n                  <div class=\"table-box__col table-box__col--first\">#</div>\r\n                  <div class=\"table-box__col table-box__col--large\">الفريق</div>\r\n                  <div class=\"table-box__col\">لعب </div>\r\n                  <div class=\"table-box__col\">فوز </div>\r\n                  <div class=\"table-box__col\">تعادل </div>\r\n                  <div class=\"table-box__col\">خسارة </div>\r\n                  <!-- <div class=\"table-box__col\">الفرق </div> -->\r\n                  <div class=\"table-box__col mark\">نقاط</div>\r\n                </div>\r\n                <div *ngFor=\"let _team of _tables_arr[i].table\" class=\"table-box__row\">\r\n                  <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{_team.position}}</span></div>\r\n                  <div class=\"table-box__col table-box__col--large\">\r\n                    <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+_team.teamId)\"></a><img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_team.logo\" />\r\n                      <p [ngStyle]=\"_team.check == true && {'color':'#d8141c'}\">{{_team.teamName}}</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"table-box__col\">{{_team.total.totalMatches}}</div>\r\n                  <div class=\"table-box__col\">{{_team.total.wonMatches}}</div>\r\n                  <div class=\"table-box__col\">{{_team.total.drawMatches}}</div>\r\n                  <div class=\"table-box__col\">{{_team.total.lostMatches}} </div>\r\n                  <!-- <div class=\"table-box__col\">{{_team.total.scoreDifference}}</div> -->\r\n                  <div class=\"table-box__col mark\">{{_team.total.points}}</div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <div class=\"competition-wrap-data\">\r\n\r\n          <div class=\"team-matches-option\">\r\n            <h4 class=\"team-matches-option__title pdr10\">البطولة</h4>\r\n            <div class=\"select-box\">\r\n              <div class=\"select-box__current\" tabindex=\"1\">\r\n                <div *ngFor=\"let competition of _competitions;let i = index\" class=\"select-box__value\">\r\n                  <input (change)=\"get_top_scorers(_competitions[i].competition.competitionId)\"\r\n                    class=\"select-box__input\" [id]=\"data.teamId+'second'+i\" type=\"radio\"\r\n                    [value]=\"_competitions[i].competition.competitionId\" name=\"_top_scorer\"\r\n                    [checked]=\"_competitions[i].checked == true\" />\r\n                  <p class=\"select-box__input-text\">{{competition.name}}</p>\r\n                </div>\r\n\r\n\r\n                <span class=\"icon select-box__icon\">\r\n                  <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 185.344 185.344\"\r\n                    style=\"enable-background:new 0 0 185.344 185.344;\" xml:space=\"preserve\">\r\n                    <g>\r\n                      <g></g>\r\n                      <path\r\n                        d=\"M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18                                c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0                                c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z\">\r\n                      </path>\r\n                    </g>\r\n                  </svg></span>\r\n              </div>\r\n              <ul class=\"select-box__list\">\r\n                <li *ngFor=\"let competition of _competitions;let i = index\">\r\n                  <label class=\"select-box__option\" for=\"{{data.teamId}}second{{i}}\"\r\n                    aria-hidden=\"aria-hidden\">{{competition.name}}</label>\r\n                </li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!top_scorers_loaded\"></app-skeleton-loader>\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!top_scorers_loaded\"></app-skeleton-loader>\r\n          <app-skeleton-loader class=\"mt15\" *ngIf=\"!top_scorers_loaded\"></app-skeleton-loader>\r\n          <app-no-data style=\"display: block;margin-left: 10px;margin-right: 10px;\" *ngIf=\"no_top_scorers\">\r\n          </app-no-data>\r\n          <div *ngIf=\"!no_top_scorers\" class=\"table-box table-box--wh mt15\">\r\n            <div class=\"table-box__row table-box__row--head\">\r\n              <div class=\"table-box__col table-box__col--first\">#</div>\r\n              <div class=\"table-box__col table-box__col--large\">اللاعب</div>\r\n              <!-- <div class=\"table-box__col\">الرقم </div> -->\r\n              <div class=\"table-box__col mark\">أهداف</div>\r\n            </div>\r\n            <div *ngFor=\"let _scorer of _top_scorers; let i = index\" class=\"table-box__row\">\r\n              <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n              <div class=\"table-box__col table-box__col--large\">\r\n                <div (click)=\"_router('/player/'+_scorer.peopleId)\" class=\"img-beside-text img-beside-text--twolines\"><a></a><img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_scorer.logo\" />\r\n                  <div class=\"img-besite-text__data\">\r\n                    <p>{{_scorer.name}}</p><span>{{_scorer.teamName}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"table-box__col\">{{_scorer.name}}</div> -->\r\n              <div class=\"table-box__col mark\">{{_scorer.count}}</div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <app-no-data style=\"display: block;\" *ngIf=\"no_players\">\r\n        </app-no-data>\r\n        <div *ngIf=\"!no_players\">\r\n          <div class=\"mini-title\">\r\n            <h5>حراسة المرمي</h5>\r\n          </div>\r\n          <div class=\"competition-wrap-data\">\r\n            <div class=\"table-box table-box--wh\">\r\n              <div class=\"table-box__row table-box__row--head\">\r\n                <div class=\"table-box__col table-box__col--first\">#</div>\r\n                <div class=\"table-box__col table-box__col--large\">اللاعب</div>\r\n                <div class=\"table-box__col mark\">العمر</div>\r\n              </div>\r\n              <div *ngFor=\"let _player of __GK;let i = index\" class=\"table-box__row\">\r\n                <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n                <div class=\"table-box__col table-box__col--large\">\r\n                  <div (click)=\"_router('/player/'+_player.peopleId)\" class=\"img-beside-text img-beside-text--twolines\"><a></a>\r\n                    <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_player?.logo\" />\r\n                    <div class=\"img-besite-text__data\">\r\n                      <p>{{_player?.name}}</p><span>{{_player?.nationality}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-box__col mark\">{{_player?.age}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mini-title\">\r\n            <h5>الدفاع</h5>\r\n          </div>\r\n          <div class=\"competition-wrap-data\">\r\n            <div class=\"table-box table-box--wh\">\r\n              <div class=\"table-box__row table-box__row--head\">\r\n                <div class=\"table-box__col table-box__col--first\">#</div>\r\n                <div class=\"table-box__col table-box__col--large\">اللاعب</div>\r\n                <div class=\"table-box__col mark\">العمر</div>\r\n              </div>\r\n              <div *ngFor=\"let _player of __Def;let i = index\" class=\"table-box__row\">\r\n                <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n                <div class=\"table-box__col table-box__col--large\">\r\n                  <div (click)=\"_router('/player/'+_player.peopleId)\" class=\"img-beside-text img-beside-text--twolines\"><a></a>\r\n                    <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_player?.logo\" />\r\n                    <div class=\"img-besite-text__data\">\r\n                      <p>{{_player?.name}}</p><span>{{_player?.nationality}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-box__col mark\">{{_player?.age}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mini-title\">\r\n            <h5>خط الوسط</h5>\r\n          </div>\r\n          <div class=\"competition-wrap-data\">\r\n            <div class=\"table-box table-box--wh\">\r\n              <div class=\"table-box__row table-box__row--head\">\r\n                <div class=\"table-box__col table-box__col--first\">#</div>\r\n                <div class=\"table-box__col table-box__col--large\">اللاعب</div>\r\n                <div class=\"table-box__col mark\">العمر</div>\r\n              </div>\r\n              <div *ngFor=\"let _player of __Mid;let i = index\" class=\"table-box__row\">\r\n                <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n                <div class=\"table-box__col table-box__col--large\">\r\n                  <div (click)=\"_router('/player/'+_player.peopleId)\" class=\"img-beside-text img-beside-text--twolines\"><a></a>\r\n                    <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_player?.logo\" />\r\n                    <div class=\"img-besite-text__data\">\r\n                      <p>{{_player?.name}}</p><span>{{_player?.nationality}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-box__col mark\">{{_player?.age}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mini-title\">\r\n            <h5>الهجوم</h5>\r\n          </div>\r\n          <div class=\"competition-wrap-data\">\r\n            <div class=\"table-box table-box--wh\">\r\n              <div class=\"table-box__row table-box__row--head\">\r\n                <div class=\"table-box__col table-box__col--first\">#</div>\r\n                <div class=\"table-box__col table-box__col--large\">اللاعب</div>\r\n                <div class=\"table-box__col mark\">العمر</div>\r\n              </div>\r\n              <div *ngFor=\"let _player of __Att;let i = index\" class=\"table-box__row\">\r\n                <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{i+1}}</span></div>\r\n                <div class=\"table-box__col table-box__col--large\">\r\n                  <div (click)=\"_router('/player/'+_player.peopleId)\" class=\"img-beside-text img-beside-text--twolines\"><a></a>\r\n                    <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_player?.logo\" />\r\n                    <div class=\"img-besite-text__data\">\r\n                      <p>{{_player?.name}}</p><span>{{_player?.nationality}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-box__col mark\">{{_player?.age}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/team/team-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/team/team-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TeamPageRoutingModule */

    /***/
    function srcAppTeamTeamRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamPageRoutingModule", function () {
        return TeamPageRoutingModule;
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


      var _team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./team.page */
      "./src/app/team/team.page.ts");

      var routes = [{
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"]
      }];

      var TeamPageRoutingModule = function TeamPageRoutingModule() {
        _classCallCheck(this, TeamPageRoutingModule);
      };

      TeamPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TeamPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/team/team.module.ts":
    /*!*************************************!*\
      !*** ./src/app/team/team.module.ts ***!
      \*************************************/

    /*! exports provided: TeamPageModule */

    /***/
    function srcAppTeamTeamModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamPageModule", function () {
        return TeamPageModule;
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


      var _team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./team-routing.module */
      "./src/app/team/team-routing.module.ts");
      /* harmony import */


      var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./team.page */
      "./src/app/team/team.page.ts");
      /* harmony import */


      var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.components */
      "./src/app/shared/shared.components.ts");

      var TeamPageModule = function TeamPageModule() {
        _classCallCheck(this, TeamPageModule);
      };

      TeamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _team_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamPageRoutingModule"], _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
      })], TeamPageModule);
      /***/
    },

    /***/
    "./src/app/team/team.page.scss":
    /*!*************************************!*\
      !*** ./src/app/team/team.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTeamTeamPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/team/team.page.ts":
    /*!***********************************!*\
      !*** ./src/app/team/team.page.ts ***!
      \***********************************/

    /*! exports provided: TeamPage */

    /***/
    function srcAppTeamTeamPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamPage", function () {
        return TeamPage;
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


      var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/app.service */
      "./src/app/services/app.service.ts");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../user.service */
      "./src/app/user.service.ts");

      var TeamPage = /*#__PURE__*/function () {
        // @ViewChild('mydt') mydt: IonDatetime;
        function TeamPage(_ActivatedRoute, _AppService, _ElementRef, _UserService) {
          _classCallCheck(this, TeamPage);

          this._ActivatedRoute = _ActivatedRoute;
          this._AppService = _AppService;
          this._ElementRef = _ElementRef;
          this._UserService = _UserService;
          this.no_played_matches = false;
          this.no_incoming_matches = false;
          this.no_matches = false;
          this.no_standing = false;
          this.no_top_scorers = false;
          this.no_players = false; // _active_competition
          // isFirstRequest
          // _matches

          this.played_matches = [];
          this.incoming_matches = [];
          this.is_matches_line = true;
          this.matches_loaded = false;
          this.standing_loaded = false;
          this.top_scorers_loaded = false;
          this.players_loaded = false;
          this.selected_date = '';
          this._tables_arr = [];
          this.if_user_logged = false;
          this.favorites_teams = [];
          this.months_arabic = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]; // this.customPickerOptions = {
          //   buttons: [{
          //     text: 'تم',
          //     handler: (res) => {
          //       this.selected_date = `${res.year.value}/${res.month.value}/${res.day.value}`
          //       // console.log(this.selected_date)
          //       this.get_matches(this.selected_competition,false)
          //       this.mydt.value = res.year.text;
          //     }
          //   }, {
          //     text: 'اليوم',
          //     handler: (res) => {
          //       this.selected_date = `${res.year.value}/${res.month.value}/${res.day.value}`
          //       // console.log(this.selected_date)
          //       this.get_matches(this.selected_competition,false)
          //       // console.log('Set Today', res)
          //       this.mydt.value = "2020";
          //     }
          //   }, {
          //     text: 'إلغاء',
          //     handler: () => {
          //       // console.log('Clicked Log. Do not Dismiss.');
          //       // return false;
          //     }
          //   }]
          // }
        }

        _createClass(TeamPage, [{
          key: "get_matches",
          value: function get_matches(_competition, isFirstRequest) {
            var _this = this;

            this.matches_loaded = false;
            this.played_matches = [];
            this.incoming_matches = [];

            this._AppService.get_data("teams/matches?id=".concat(this.id, "&competitionId=").concat(_competition, "&date=").concat(this.selected_date), 's').subscribe(function (res) {
              _this.matches_loaded = true;
              _this.selected_competition = _competition;

              if (isFirstRequest) {
                _this.data = res.data;
                _this._competitions = _this.data.competitions; // console.log(this._competitions[0].competition.matches)
              } else {}

              for (var i = 0; i < res.data.competitions.length; i++) {
                if (res.data.competitions[i].checked) {
                  if (res.data.competitions[i].matches) {
                    _this.incoming_matches = res.data.competitions[i].matches;
                  }

                  if (res.data.competitions[i].played_matches) {
                    _this.played_matches = res.data.competitions[i].played_matches;
                  }

                  if (_this.played_matches.length == 0 && _this.incoming_matches.length == 0) {
                    _this.no_matches = true;
                    _this.is_matches_line = false;
                  } else {
                    _this.no_matches = false;
                    _this.is_matches_line = true;
                  }

                  if (_this.played_matches.length == 0 || _this.incoming_matches.length == 0) {
                    _this.is_matches_line = false;
                  }
                }
              }

              var el = _this._ElementRef.nativeElement.querySelector('.matches_status_filter');

              setTimeout(function () {
                if (el) {
                  el.scrollIntoView();
                }

                _this.data_loaded = true;
              }, 100);
            });
          }
        }, {
          key: "get_table",
          value: function get_table() {
            var _this2 = this;

            this.standing_loaded = false;

            this._AppService.get_data("teams/table?id=".concat(this.id, "&competitionId="), 's').subscribe(function (res) {
              // console.log(res.data)
              _this2.standing_loaded = true;
              _this2._tables_competitions = res.data.competitions; // console.log(this._tables_competitions)

              if (_this2._tables_competitions.length > 0) {
                _this2.no_standing = false;

                for (var i = 0; i < _this2._tables_competitions.length; i++) {
                  if (_this2._tables_competitions[i].competition.format == 'domestic_league') {
                    if (_this2._tables_competitions[i].league_table.length > 0) {
                      _this2._tables_arr.push({
                        'name': _this2._tables_competitions[i].competition.name,
                        'table': _this2._tables_competitions[i].league_table
                      });
                    }
                  } else {
                    if (_this2._tables_competitions[i].group_table.teams.length > 0) {
                      _this2._tables_arr.push({
                        'name': _this2._tables_competitions[i].competition.name,
                        'table': _this2._tables_competitions[i].group_table.teams
                      });
                    }
                  } //-- if no tables


                  if (_this2._tables_arr.length == 0) {
                    _this2.no_standing = true;
                  }
                }
              } else {
                _this2.no_standing = true;
              }
            });
          }
        }, {
          key: "get_top_scorers",
          value: function get_top_scorers(_competitionId) {
            var _this3 = this;

            this.top_scorers_loaded = false;

            this._AppService.get_data("teams/topScorer?id=".concat(this.id, "&competitionId=").concat(_competitionId), 's').subscribe(function (res) {
              _this3.top_scorers_loaded = true;
              _this3._top_scorers = res.data.topScorer; // console.log(this._top_scorers)

              if (_this3._top_scorers.length == 0) {
                _this3.no_top_scorers = true;
              } else {
                _this3.no_top_scorers = false;
              }
            });
          }
        }, {
          key: "get_players",
          value: function get_players() {
            var _this4 = this;

            this._AppService.get_data("teams/squad?id=".concat(this.id), 's').subscribe(function (res) {
              // console.log(res.data.squad)
              _this4._players = res.data.squad.players; // console.log(this._players)

              if (_this4._players) _this4.__GK = _this4._players.GK;
              _this4.__Def = _this4._players.Def;
              _this4.__Mid = _this4._players.Mid;
              _this4.__Att = _this4._players.Att;

              if (_this4.__GK.length == 0 && _this4.__Def.length == 0 && _this4.__Mid.length == 0 && _this4.__Att.length == 0) {
                _this4.no_players = true;
              }
            });
          }
        }, {
          key: "tabs",
          value: function tabs(index) {
            this._ElementRef.nativeElement.querySelector('.large-header__tabs li.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelector('.main-tabs-box__tab.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelectorAll('.large-header__tabs li')[index].classList.add('active');

            this._ElementRef.nativeElement.querySelectorAll('.main-tabs-box__tab')[index].classList.add('active');

            this._AppService.scroll_to_top();
          }
        }, {
          key: "add_favorite",
          value: function add_favorite(id) {
            this._AppService.user_post_data("user/savespeciallist", {
              favourite_team: [id]
            }, 's', localStorage.getItem('token')).subscribe(function (res) {// console.log(res)
            });
          }
        }, {
          key: "get_favorites",
          value: function get_favorites() {
            var _this5 = this;

            if (this.if_user_logged) {
              this._AppService.user_get_data("user/favourite", 's', localStorage.getItem('token')).subscribe(function (res) {
                // console.log(res)
                _this5.favorites_teams = res.data.favorite_teams;

                for (var i = 0; i < _this5.favorites_teams.length; i++) {
                  if (_this5.favorites_teams[i].teamId == _this5.id) {
                    _this5._ElementRef.nativeElement.querySelector('._fav').checked = true;
                  }
                }
              });
            }
          }
        }, {
          key: "transform_date",
          value: function transform_date(__date) {
            __date = __date.replace(/:[^:]*$/, '');

            var _generated_date = __date.split("/");

            var _final_date = "".concat(_generated_date[2], " ").concat(this.months_arabic[parseInt(_generated_date[1]) - 1], " ").concat(_generated_date[0]);

            return _final_date;
          }
        }, {
          key: "_router",
          value: function _router(url) {
            this._AppService.router_navigation(url);
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
            this.if_user_logged = this._UserService.is_user_logged(false);
            this.get_favorites();
            this.id = this._ActivatedRoute.snapshot.params['id'];
            this.get_matches('', true);
            this.get_table();
            this.get_top_scorers('');
            this.get_players();
          }
        }]);

        return TeamPage;
      }();

      TeamPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      };

      TeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./team.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./team.page.scss */
        "./src/app/team/team.page.scss"))["default"]]
      })], TeamPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=team-team-module-es5.js.map