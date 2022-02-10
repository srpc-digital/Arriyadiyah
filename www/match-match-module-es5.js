(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["match-match-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMatchMatchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div style=\"background:#fff !important;\" class=\"wrapper wrapper--large-header wrapper--wh\" id=\"app\">\r\n  <div class=\"large-header\">\r\n    <div (click)=\"back()\" class=\"large-header__back\"><span class=\"icon\">\r\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n          x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\r\n          <g>\r\n            <g id=\"chevron-right\">\r\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\r\n            </g>\r\n          </g>\r\n        </svg></span></div>\r\n    <div class=\"large-header__inside\">\r\n      <div class=\"match-card match-card--large \"><a (click)=\"_router('/competition/'+data.competition.competitionId)\"\r\n          class=\"match-card__competition\">{{data?.competition?.name}}</a>\r\n        <div class=\"match-card__team\"><a (click)=\"_router('/team/'+data.teamA.teamId)\"><img\r\n              [src]=\"data?.teamA?.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/><span>{{data?.teamA?.name}}</span></a></div>\r\n        <a *ngIf=\"data?.status == 'Fixture'\" class=\"match-card__info\"><span class=\"time\">{{data?.hour}}</span><span\r\n            class=\"state\">لم تبدأ</span></a>\r\n        <a *ngIf=\"data?.status == 'Played'\" class=\"match-card__info done\">\r\n          <div class=\"match-card__result\">\r\n            <span class=\"number\">{{data?.scoreA}}</span>\r\n            <span class=\"dash\">-</span>\r\n            <span class=\"number\">{{data?.scoreB}}</span>\r\n          </div>\r\n          <span class=\"state\">إنتهت</span>\r\n        </a>\r\n        <a *ngIf=\"data?.status == 'Playing'\" class=\"match-card__info live\">\r\n          <div class=\"match-card__result\">\r\n            <span class=\"number\">{{data?.scoreA}}</span>\r\n            <span class=\"dash\">-</span>\r\n            <span class=\"number\">{{data?.scoreB}}</span>\r\n          </div>\r\n          <span class=\"state\">{{data?.minute}}'</span>\r\n        </a>\r\n        <a *ngIf=\"data?.status == 'Break'\" class=\"match-card__info live\">\r\n          <div class=\"match-card__result\">\r\n            <span class=\"number\">{{data?.scoreA}}</span>\r\n            <span class=\"dash\">-</span>\r\n            <span class=\"number\">{{data?.scoreB}}</span>\r\n          </div>\r\n          <span class=\"state\">45`</span>\r\n        </a>\r\n        <a *ngIf=\"data?.status == 'Cancelled'\" class=\"match-card__info\"><span class=\"state\">ملغي</span></a>\r\n        <div class=\"match-card__team\"><a (click)=\"_router('/team/'+data.teamB.teamId)\"><img\r\n              [src]=\"data?.teamB?.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/><span>{{data?.teamB?.name}}</span></a></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"large-header__tabs\">\r\n      <li (click)=\"tabs(0)\" class=\"active\">تفاصيل</li>\r\n      <li (click)=\"tabs(1)\">أحداث المباراة</li>\r\n      <li (click)=\"tabs(2)\">تشكيل الفريقين</li>\r\n      <li (click)=\"tabs(3)\">إحصائيات</li>\r\n    </div>\r\n  </div>\r\n  <div class=\"page-content page-content--nomenu page-content--largeheader\" id=\"app-box\">\r\n    <div class=\"main-tabs-box\">\r\n      <div class=\"main-tabs-box__tab active\">\r\n        <div *ngIf=\"_group\" class=\"mini-title\">\r\n          <h5>ترتيب الفريقين</h5>\r\n        </div>\r\n        <div *ngIf=\"_group\" class=\"table-box grey-theme\">\r\n          <div class=\"table-box__row table-box__row--head\">\r\n            <div class=\"table-box__col table-box__col--first\">#</div>\r\n            <div class=\"table-box__col table-box__col--large\">الفريق</div>\r\n            <div class=\"table-box__col\">لعب </div>\r\n            <div class=\"table-box__col\">فرق</div>\r\n            <div class=\"table-box__col\">نقاط</div>\r\n          </div>\r\n          <div *ngFor=\"let sort of _group\" class=\"table-box__row\">\r\n            <div class=\"table-box__col table-box__col--first\"><span class=\"number\">{{sort?.position}}</span></div>\r\n            <div class=\"table-box__col table-box__col--large\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+sort.teamId)\"></a><img [src]=\"sort?.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{sort?.name}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-box__col\">{{sort?.total.totalMatches}}</div>\r\n            <div class=\"table-box__col\">{{sort?.total.scoreDifference}}</div>\r\n            <div class=\"table-box__col\">{{sort?.total.points}}</div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"mini-title\">\r\n          <h5>معلومات المباراة</h5>\r\n        </div>\r\n        <div class=\"table-box grey-theme\">\r\n          <div class=\"table-box__row\">\r\n            <div class=\"table-box__col table-box__col--large\"><span class=\"table-box__icon\">\r\n                <div class=\"icon\">\r\n                  <svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\"\r\n                    xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <g>\r\n                      <path\r\n                        d=\"m15 421h482c8.284 0 15-6.716 15-15v-300c0-8.284-6.716-15-15-15h-482c-8.284 0-15 6.716-15 15v300c0 8.284 6.716 15 15 15zm15-210h30v90h-30zm241 2.58c17.459 6.192 30 22.865 30 42.42s-12.541 36.228-30 42.42zm-30 84.84c-17.459-6.192-30-22.865-30-42.42s12.541-36.228 30-42.42zm241 2.58h-30v-90h30zm0-120h-45c-8.284 0-15 6.716-15 15v120c0 8.284 6.716 15 15 15h45v60h-211v-61.509c34.192-6.968 60-37.271 60-73.491s-25.808-66.522-60-73.491v-61.509h211zm-241-60v61.509c-34.192 6.968-60 37.271-60 73.491s25.808 66.522 60 73.491v61.509h-211v-60h45c8.284 0 15-6.716 15-15v-120c0-8.284-6.716-15-15-15h-45v-60z\">\r\n                      </path>\r\n                    </g>\r\n                  </svg>\r\n                </div>\r\n                <p>ملعب المباراة</p>\r\n              </span></div>\r\n            <div class=\"table-box__col table-box__col--last\">{{data?.venue?.name}}</div>\r\n          </div>\r\n          <div class=\"table-box__row\">\r\n            <div class=\"table-box__col table-box__col--large\"><span class=\"table-box__icon\">\r\n                <div class=\"icon\">\r\n                  <svg id=\"Capa_1\" enable-background=\"new 0 0 511.999 511.999\" height=\"512\"\r\n                    viewBox=\"0 0 511.999 511.999\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <g>\r\n                      <path\r\n                        d=\"m164.999 181.012c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z\">\r\n                      </path>\r\n                      <path\r\n                        d=\"m496.999 91.012h-212c-3.979 0-7.794 1.58-10.606 4.393l-19.394 19.394-19.394-19.394c-2.813-2.813-6.628-4.393-10.606-4.393h-53.146c-30.382 0-59.873 7.779-85.891 22.327l-9.145-9.145c-17.544-17.544-46.091-17.543-63.635 0-17.544 17.544-17.544 46.091 0 63.635l8.314 8.314c-12.998 22.328-20.39 47.37-21.376 73.495-1.879 49.788 18.447 97.225 55.766 130.147 36.53 32.226 86.209 47.273 136.972 38.938 63.864-10.487 117.047-59.926 132.338-123.017 13.386-54.895 55.492-84.694 100.077-84.694h71.727c8.284 0 15-6.716 15-15v-90c-.001-8.284-6.717-15-15.001-15zm-462.604 55.604c-5.847-5.847-5.847-15.361 0-21.209 5.848-5.848 15.361-5.848 21.209 0l5.102 5.102c-7.56 6.166-14.719 13.007-21.53 20.888zm447.604 34.396h-56.727c-56.896 0-112.277 37.67-129.231 107.621-12.492 51.543-55.912 91.926-108.044 100.486-40.82 6.701-81.738-4.9-112.265-31.831-30.539-26.941-47.171-65.766-45.634-106.519 2.701-71.549 66.292-129.758 141.754-129.758h46.933l25.607 25.607c5.857 5.857 15.355 5.857 21.213 0l25.606-25.607h190.787v60.001z\">\r\n                      </path>\r\n                    </g>\r\n                  </svg>\r\n                </div>\r\n                <p>حكم المباراة</p>\r\n              </span></div>\r\n            <div class=\"table-box__col table-box__col--last\">\r\n              {{data?.referees?.mainReferee?.name ? data.referees.mainReferee.name : '-'}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mini-title\">\r\n          <h5>أخر خمس مباريات </h5>\r\n        </div>\r\n        <div class=\"table-box grey-theme\">\r\n          <div class=\"table-box__row\">\r\n            <div class=\"table-box__col table-box__col--large table-box__col--paddingright\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+data.teamA.teamId)\"></a><img\r\n                  [src]=\"data?.teamA?.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{data?.teamA?.name}}</p>\r\n              </div>\r\n            </div>\r\n            <div *ngFor=\"let _status of _team_a_last_five_matches\" class=\"table-box__col table-box__col--mini\">\r\n              <span *ngIf=\"_status == 'win'\" class=\"icon won result-state\">\r\n                <svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <g>\r\n                    <path\r\n                      d=\"m450.585 68.552-252.065 252.065-137.105-137.104-61.415 61.415 198.52 198.52 313.48-313.48z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span>\r\n\r\n              <span *ngIf=\"_status == 'draw'\" class=\"icon draw result-state\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"357px\" height=\"357px\"\r\n                  viewBox=\"0 0 357 357\" style=\"enable-background:new 0 0 357 357;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g>\r\n                      <path d=\"M357,204H0v-51h357V204z\"></path>\r\n                    </g>\r\n                  </g>\r\n                </svg></span>\r\n\r\n              <span *ngIf=\"_status == 'lose'\" class=\"icon lost result-state\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"357px\" height=\"357px\"\r\n                  viewBox=\"0 0 357 357\" style=\"enable-background:new 0 0 357 357;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g>\r\n                      <polygon\r\n                        points=\"357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3                                             214.2,178.5 \t\t\">\r\n                      </polygon>\r\n                    </g>\r\n                  </g>\r\n                </svg></span>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-box__row\">\r\n            <div class=\"table-box__col table-box__col--large table-box__col--paddingright\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+data.teamB.teamId)\"></a><img\r\n                  [src]=\"data?.teamB?.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{data?.teamB?.name}}</p>\r\n              </div>\r\n            </div>\r\n            <div *ngFor=\"let _status of _team_b_last_five_matches\" class=\"table-box__col table-box__col--mini\">\r\n              <span *ngIf=\"_status == 'win'\" class=\"icon won result-state\">\r\n                <svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <g>\r\n                    <path\r\n                      d=\"m450.585 68.552-252.065 252.065-137.105-137.104-61.415 61.415 198.52 198.52 313.48-313.48z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span>\r\n\r\n              <span *ngIf=\"_status == 'draw'\" class=\"icon draw result-state\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"357px\" height=\"357px\"\r\n                  viewBox=\"0 0 357 357\" style=\"enable-background:new 0 0 357 357;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g>\r\n                      <path d=\"M357,204H0v-51h357V204z\"></path>\r\n                    </g>\r\n                  </g>\r\n                </svg></span>\r\n\r\n              <span *ngIf=\"_status == 'lose'\" class=\"icon lost result-state\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"357px\" height=\"357px\"\r\n                  viewBox=\"0 0 357 357\" style=\"enable-background:new 0 0 357 357;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g>\r\n                      <polygon\r\n                        points=\"357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3                                             214.2,178.5 \t\t\">\r\n                      </polygon>\r\n                    </g>\r\n                  </g>\r\n                </svg></span>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- <div class=\"table-box__row\">\r\n            <div class=\"table-box__col table-box__col--large table-box__col--paddingright\">\r\n              <div class=\"img-beside-text\"><a href=\"\"></a><img src=\"img/logos/chelsea.png\" />\r\n                <p>باريس سان جيرمان</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-box__col\"><span class=\"icon won result-state\">\r\n                <svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <g>\r\n                    <path\r\n                      d=\"m450.585 68.552-252.065 252.065-137.105-137.104-61.415 61.415 198.52 198.52 313.48-313.48z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span></div>\r\n            <div class=\"table-box__col\"><span class=\"icon draw result-state\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"357px\" height=\"357px\"\r\n                  viewBox=\"0 0 357 357\" style=\"enable-background:new 0 0 357 357;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g>\r\n                      <path d=\"M357,204H0v-51h357V204z\"></path>\r\n                    </g>\r\n                  </g>\r\n                </svg></span></div>\r\n            <div class=\"table-box__col\"> <span class=\"icon lost result-state\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"357px\" height=\"357px\"\r\n                  viewBox=\"0 0 357 357\" style=\"enable-background:new 0 0 357 357;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g>\r\n                      <polygon\r\n                        points=\"357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3                                             214.2,178.5 \t\t\">\r\n                      </polygon>\r\n                    </g>\r\n                  </g>\r\n                </svg></span></div>\r\n          </div> -->\r\n        </div>\r\n        <div *ngIf=\"_lastfivematches?.length > 0\" class=\"mini-title\">\r\n          <h5>مواجهات مباشرة</h5>\r\n\r\n        </div>\r\n        <div *ngIf=\"_lastfivematches?.length > 0\" class=\"grey-theme matches-history\">\r\n          <div *ngFor=\"let match of _lastfivematches\" class=\"matches-history__row\">\r\n            <div class=\"matches-history__details\">\r\n              <div class=\"matches-history__day\">{{match.match_day}}</div>\r\n              <div class=\"matches-history__competition\">{{match.competition.name}}</div>\r\n            </div>\r\n            <div class=\"matches-history__match\">\r\n              <div class=\"match-card match-card--mini\">\r\n                <div class=\"match-card__team\"><a (click)=\"_router('/team/'+data.teamA.teamId)\"><img\r\n                      [src]=\"data?.teamA.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/><span>{{data?.teamA.name}}</span></a>\r\n                </div><a (click)=\"_router('/match/'+match.matchId)\" class=\"match-card__info done\">\r\n                  <div class=\"match-card__result\"><span class=\"number\">{{match?.scoreA}}</span><span\r\n                      class=\"dash\">-</span><span class=\"number\">{{match?.scoreB}}</span></div>\r\n                </a>\r\n                <div class=\"match-card__team\"><a (click)=\"_router('/team/'+data.teamB.teamId)\"><img\r\n                      [src]=\"data?.teamB.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/><span>{{data?.teamB.name}}</span></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <app-no-data style=\"display: block;\" *ngIf=\"data?.key_event.length == 0\">\r\n        </app-no-data>\r\n        <div class=\"event-box\">\r\n          <div class=\"center-line\"></div>\r\n\r\n          <div *ngFor=\"let _event of _match_events\" class=\"event-row\">\r\n            <div class=\"team-event\"\r\n              [ngClass]=\"(_event.team.teamId == _home_team_id) ? 'team-A-event' :  'team-B-event'\">\r\n              <div class=\"minutes\">{{_event.minute}}</div>\r\n              <div class=\"event-details\"><span class=\"event-maker\">{{_event.player.name}}</span>\r\n                <!-- <span\r\n                  class=\"event-additional\">داني\r\n                  الفيش</span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"team-event event-icon\">\r\n              <span *ngIf=\"_event.type == 'assist'\" class=\"icon\">\r\n                <svg style=\"fill:#4bae4f;\" xmlns=\"http://www.w3.org/2000/svg\" id=\"_20-shoe\" data-name=\"20-shoe\" viewBox=\"0 0 96 96\" width=\"512\" height=\"512\"><g id=\"Glyph\"><path d=\"M67.08,25.305C64.9,18.123,59.291,16,56,16a4,4,0,0,0-3.123,1.5c-2.823,3.528-6.031,7.283-8.964,10.5,6.955-2.18,13.6-4,16.087-4A19.718,19.718,0,0,1,67.08,25.305Z\"/><path d=\"M24.522,38.994C3.1,47.369,0,52.123,0,56c0,3.409,2.967,4.8,6.814,5.538l-.736,3.678,7.844,1.568.858-4.29c2.5.215,5.43.407,8.741.576l-.481,3.365,7.92,1.13.594-4.155c.877.03,1.759.06,2.675.088,1.674.051,3.378.1,5.092.137a57.521,57.521,0,0,0-7.649-15.916A50.511,50.511,0,0,0,24.522,38.994Z\"/><path d=\"M39.984,33.46c-2.472.815-4.954,1.663-7.318,2.5,6.9,7.606,13.177,19.162,14.879,27.834-2.518-.04-5.043-.087-7.545-.145V68h8V63.805l-.085,0c2.558.04,5.1.073,7.6.1C53.639,54.8,46.6,41.03,39.984,33.46Z\"/><path d=\"M96,48c0-13-4.308-17.965-5.172-18.828a4,4,0,0,0-6.406,1.039c-.028.058-3,5.712-8.313,5.788a16.362,16.362,0,0,1-2.812-2.06C70.271,31.433,66.128,28,60,28c-1.579,0-6.182,1.176-11.791,2.861,7.712,9.858,13.778,24.174,15.377,33.1q2.271.012,4.414.019V68h8V64h4v4h8V62.427C93.16,60.059,96,55.087,96,48ZM62,40a4,4,0,1,1,4-4A4,4,0,0,1,62,40Z\"/></g></svg>\r\n              </span>\r\n              <span *ngIf=\"_event.type == 'yellow_card'\" class=\"icon\">\r\n                <svg class=\"yellow-card\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10.263 15.316\">\r\n                  <g transform=\"translate(-5.842 -2.842)\">\r\n                    <rect class=\"cls-1\" id=\"Rectangle_1534\" data-name=\"Rectangle 1534\" width=\"10.105\" height=\"15.158\"\r\n                      rx=\"2\" transform=\"translate(5.921 2.921)\"></rect>\r\n                    <rect class=\"cls-2\" id=\"Rectangle_1535\" data-name=\"Rectangle 1535\" width=\"9.263\" height=\"14.316\"\r\n                      rx=\"2\" transform=\"translate(6.342 3.342)\"></rect>\r\n                  </g>\r\n                </svg>\r\n              </span>\r\n\r\n              <span *ngIf=\"_event.type == 'substitute_out'\" class=\"icon\">\r\n                <svg class=\"substitute_out\" viewBox=\"0 -22 512 511\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path\r\n                    d=\"m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0\" />\r\n                </svg>\r\n              </span>\r\n\r\n              <span *ngIf=\"_event.type == 'substitute_in'\" class=\"icon\">\r\n                <svg class=\"substitute_in\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 477.862 477.862\"\r\n                  style=\"enable-background:new 0 0 477.862 477.862;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g>\r\n                      <path d=\"M187.722,102.856V17.062C187.719,7.636,180.076-0.003,170.65,0c-4.834,0.001-9.44,2.053-12.676,5.644L4.375,176.311\r\n\t\t\tc-5.617,6.256-5.842,15.67-0.529,22.187l153.6,187.733c5.968,7.295,16.72,8.371,24.016,2.403c3.952-3.233,6.249-8.066,6.26-13.172\r\n\t\t\tv-85.043c134.827,4.386,218.965,62.02,256.888,175.787c2.326,6.96,8.841,11.653,16.179,11.656c0.92,0.003,1.84-0.072,2.748-0.222\r\n\t\t\tc8.256-1.347,14.319-8.479,14.319-16.845C477.855,259.818,356.87,112.174,187.722,102.856z\" />\r\n                    </g>\r\n                  </g>\r\n\r\n                </svg>\r\n\r\n              </span>\r\n\r\n              <span *ngIf=\"_event.type == 'goal'\" class=\"icon\">\r\n                <svg _ngcontent-rvv-c137=\"\" id=\"football\" xmlns=\"http://www.w3.org/2000/svg\" height=\"480pt\"\r\n                  viewBox=\"0 0 480 480\" width=\"480pt\" class=\"goal\">\r\n                  <path _ngcontent-rvv-c137=\"\"\r\n                    d=\"m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm8.566406 69.191406 83.433594-33.351562c9.46875 4.285156 18.628906 9.222656 27.414062 14.777344l.21875.136718c8.632813 5.46875 16.882813 11.519532 24.695313 18.109375l.671875.585938c3.503906 2.984375 6.910156 6.074219 10.222656 9.261719.417969.410156.855469.800781 1.273438 1.21875 3.472656 3.390624 6.835937 6.886718 10.089844 10.484374.269531.304688.527343.625.796874.929688 2.855469 3.199219 5.601563 6.511719 8.265626 9.878906.640624.800782 1.28125 1.601563 1.902343 2.402344 2.890625 3.742188 5.6875 7.550781 8.328125 11.480469l-16.632812 70.703125-81.832032 27.28125-78.828124-63.074219zm-186.125 34.480469c.621094-.800781 1.253906-1.601563 1.894532-2.398437 2.632812-3.339844 5.355468-6.597657 8.167968-9.777344.304688-.335938.585938-.679688.886719-1.015625 3.234375-3.605469 6.582031-7.097657 10.050781-10.480469.398438-.390625.796875-.800781 1.214844-1.160156 3.285156-3.167969 6.664062-6.238282 10.136719-9.207032l.800781-.671874c7.742188-6.542969 15.914062-12.554688 24.460938-18l.3125-.199219c8.734374-5.542969 17.835937-10.472657 27.25-14.761719l83.816406 33.191406v80.800782l-78.832032 63.0625-81.832031-27.230469-16.632812-70.703125c2.664062-3.921875 5.429687-7.722656 8.304687-11.449219zm-9.640625 259.089844c-2.351562-3.585938-4.601562-7.238281-6.746093-10.960938l-.519532-.898437c-2.132812-3.703125-4.152344-7.46875-6.054687-11.292969l-.066407-.121094c-4.007812-8.046875-7.527343-16.328125-10.535156-24.800781v-.078125c-1.421875-4-2.71875-8.097656-3.917968-12.21875l-.433594-1.519531c-1.097656-3.871094-2.09375-7.785156-2.984375-11.742188-.078125-.386718-.175781-.753906-.253907-1.136718-1.964843-8.9375-3.375-17.984376-4.226562-27.097657l48.839844-58.605469 81.265625 27.085938 23.585937 94.335938-38.753906 51.5625zm240.472657 94.78125c-4 .992187-8.105469 1.847656-12.210938 2.617187-.574219.113282-1.160156.207032-1.734375.3125-3.496094.625-7.03125 1.160156-10.574219 1.597656-.945312.121094-1.882812.25-2.824218.363282-3.289063.382812-6.609376.671875-9.9375.910156-1.046876.070312-2.082032.175781-3.128907.242188-4.253906.261718-8.542969.414062-12.863281.414062-3.957031 0-7.890625-.105469-11.800781-.3125-.472657 0-.925781-.078125-1.398438-.113281-3.480469-.199219-6.945312-.460938-10.402343-.796875l-.398438-.074219c-7.574219-.820313-15.105469-2.023437-22.558594-3.597656l-47.320312-74.089844 38.144531-50.863281h111.46875l38.769531 51.199218zm165.496093-169.542969c-.082031.382812-.175781.753906-.257812 1.136719-.894531 3.953125-1.890625 7.867187-2.984375 11.742187l-.429688 1.519532c-1.203125 4.121093-2.496094 8.203124-3.921875 12.21875v.078124c-3.007812 8.472657-6.523437 16.753907-10.535156 24.800782l-.066406.121094c-1.914063 3.828124-3.929688 7.59375-6.054688 11.292968l-.519531.898438c-2.132812 3.734375-4.378906 7.378906-6.734375 10.945312l-78.929687 12.445313-39.023438-51.519531 23.574219-94.3125 81.265625-27.085938 48.839844 58.605469c-.847657 9.117187-2.257813 18.171875-4.222657 27.113281zm0 0\">\r\n                  </path>\r\n                </svg>\r\n              </span>\r\n\r\n              <span *ngIf=\"_event.type == 'yellow_red_card' || _event.type == 'red_card'\" class=\"icon\">\r\n                <svg _ngcontent-grn-c137=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10.263 15.316\"\r\n                  class=\"red-card\">\r\n                  <g _ngcontent-grn-c137=\"\" transform=\"translate(-5.842 -2.842)\">\r\n                    <rect _ngcontent-grn-c137=\"\" id=\"Rectangle_1534\" data-name=\"Rectangle 1534\" width=\"10.105\"\r\n                      height=\"15.158\" rx=\"2\" transform=\"translate(5.921 2.921)\" class=\"cls-1\"></rect>\r\n                    <rect _ngcontent-grn-c137=\"\" id=\"Rectangle_1535\" data-name=\"Rectangle 1535\" width=\"9.263\"\r\n                      height=\"14.316\" rx=\"2\" transform=\"translate(6.342 3.342)\" class=\"cls-2\"></rect>\r\n                  </g>\r\n                </svg>\r\n              </span>\r\n\r\n              <span *ngIf=\"_event.type == 'own_goal'\" class=\"icon\">\r\n                <svg class=\"own-goal\" _ngcontent-rvv-c137=\"\" id=\"football\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  height=\"480pt\" viewBox=\"0 0 480 480\" width=\"480pt\">\r\n                  <path _ngcontent-rvv-c137=\"\"\r\n                    d=\"m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm8.566406 69.191406 83.433594-33.351562c9.46875 4.285156 18.628906 9.222656 27.414062 14.777344l.21875.136718c8.632813 5.46875 16.882813 11.519532 24.695313 18.109375l.671875.585938c3.503906 2.984375 6.910156 6.074219 10.222656 9.261719.417969.410156.855469.800781 1.273438 1.21875 3.472656 3.390624 6.835937 6.886718 10.089844 10.484374.269531.304688.527343.625.796874.929688 2.855469 3.199219 5.601563 6.511719 8.265626 9.878906.640624.800782 1.28125 1.601563 1.902343 2.402344 2.890625 3.742188 5.6875 7.550781 8.328125 11.480469l-16.632812 70.703125-81.832032 27.28125-78.828124-63.074219zm-186.125 34.480469c.621094-.800781 1.253906-1.601563 1.894532-2.398437 2.632812-3.339844 5.355468-6.597657 8.167968-9.777344.304688-.335938.585938-.679688.886719-1.015625 3.234375-3.605469 6.582031-7.097657 10.050781-10.480469.398438-.390625.796875-.800781 1.214844-1.160156 3.285156-3.167969 6.664062-6.238282 10.136719-9.207032l.800781-.671874c7.742188-6.542969 15.914062-12.554688 24.460938-18l.3125-.199219c8.734374-5.542969 17.835937-10.472657 27.25-14.761719l83.816406 33.191406v80.800782l-78.832032 63.0625-81.832031-27.230469-16.632812-70.703125c2.664062-3.921875 5.429687-7.722656 8.304687-11.449219zm-9.640625 259.089844c-2.351562-3.585938-4.601562-7.238281-6.746093-10.960938l-.519532-.898437c-2.132812-3.703125-4.152344-7.46875-6.054687-11.292969l-.066407-.121094c-4.007812-8.046875-7.527343-16.328125-10.535156-24.800781v-.078125c-1.421875-4-2.71875-8.097656-3.917968-12.21875l-.433594-1.519531c-1.097656-3.871094-2.09375-7.785156-2.984375-11.742188-.078125-.386718-.175781-.753906-.253907-1.136718-1.964843-8.9375-3.375-17.984376-4.226562-27.097657l48.839844-58.605469 81.265625 27.085938 23.585937 94.335938-38.753906 51.5625zm240.472657 94.78125c-4 .992187-8.105469 1.847656-12.210938 2.617187-.574219.113282-1.160156.207032-1.734375.3125-3.496094.625-7.03125 1.160156-10.574219 1.597656-.945312.121094-1.882812.25-2.824218.363282-3.289063.382812-6.609376.671875-9.9375.910156-1.046876.070312-2.082032.175781-3.128907.242188-4.253906.261718-8.542969.414062-12.863281.414062-3.957031 0-7.890625-.105469-11.800781-.3125-.472657 0-.925781-.078125-1.398438-.113281-3.480469-.199219-6.945312-.460938-10.402343-.796875l-.398438-.074219c-7.574219-.820313-15.105469-2.023437-22.558594-3.597656l-47.320312-74.089844 38.144531-50.863281h111.46875l38.769531 51.199218zm165.496093-169.542969c-.082031.382812-.175781.753906-.257812 1.136719-.894531 3.953125-1.890625 7.867187-2.984375 11.742187l-.429688 1.519532c-1.203125 4.121093-2.496094 8.203124-3.921875 12.21875v.078124c-3.007812 8.472657-6.523437 16.753907-10.535156 24.800782l-.066406.121094c-1.914063 3.828124-3.929688 7.59375-6.054688 11.292968l-.519531.898438c-2.132812 3.734375-4.378906 7.378906-6.734375 10.945312l-78.929687 12.445313-39.023438-51.519531 23.574219-94.3125 81.265625-27.085938 48.839844 58.605469c-.847657 9.117187-2.257813 18.171875-4.222657 27.113281zm0 0\">\r\n                  </path>\r\n                </svg>\r\n              </span>\r\n\r\n              <span *ngIf=\"_event.type == 'penalty_goal'\" class=\"icon\">\r\n                <svg _ngcontent-rvv-c137=\"\" id=\"football\" xmlns=\"http://www.w3.org/2000/svg\" height=\"480pt\"\r\n                  viewBox=\"0 0 480 480\" width=\"480pt\" class=\"goal\">\r\n                  <path _ngcontent-rvv-c137=\"\"\r\n                    d=\"m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm8.566406 69.191406 83.433594-33.351562c9.46875 4.285156 18.628906 9.222656 27.414062 14.777344l.21875.136718c8.632813 5.46875 16.882813 11.519532 24.695313 18.109375l.671875.585938c3.503906 2.984375 6.910156 6.074219 10.222656 9.261719.417969.410156.855469.800781 1.273438 1.21875 3.472656 3.390624 6.835937 6.886718 10.089844 10.484374.269531.304688.527343.625.796874.929688 2.855469 3.199219 5.601563 6.511719 8.265626 9.878906.640624.800782 1.28125 1.601563 1.902343 2.402344 2.890625 3.742188 5.6875 7.550781 8.328125 11.480469l-16.632812 70.703125-81.832032 27.28125-78.828124-63.074219zm-186.125 34.480469c.621094-.800781 1.253906-1.601563 1.894532-2.398437 2.632812-3.339844 5.355468-6.597657 8.167968-9.777344.304688-.335938.585938-.679688.886719-1.015625 3.234375-3.605469 6.582031-7.097657 10.050781-10.480469.398438-.390625.796875-.800781 1.214844-1.160156 3.285156-3.167969 6.664062-6.238282 10.136719-9.207032l.800781-.671874c7.742188-6.542969 15.914062-12.554688 24.460938-18l.3125-.199219c8.734374-5.542969 17.835937-10.472657 27.25-14.761719l83.816406 33.191406v80.800782l-78.832032 63.0625-81.832031-27.230469-16.632812-70.703125c2.664062-3.921875 5.429687-7.722656 8.304687-11.449219zm-9.640625 259.089844c-2.351562-3.585938-4.601562-7.238281-6.746093-10.960938l-.519532-.898437c-2.132812-3.703125-4.152344-7.46875-6.054687-11.292969l-.066407-.121094c-4.007812-8.046875-7.527343-16.328125-10.535156-24.800781v-.078125c-1.421875-4-2.71875-8.097656-3.917968-12.21875l-.433594-1.519531c-1.097656-3.871094-2.09375-7.785156-2.984375-11.742188-.078125-.386718-.175781-.753906-.253907-1.136718-1.964843-8.9375-3.375-17.984376-4.226562-27.097657l48.839844-58.605469 81.265625 27.085938 23.585937 94.335938-38.753906 51.5625zm240.472657 94.78125c-4 .992187-8.105469 1.847656-12.210938 2.617187-.574219.113282-1.160156.207032-1.734375.3125-3.496094.625-7.03125 1.160156-10.574219 1.597656-.945312.121094-1.882812.25-2.824218.363282-3.289063.382812-6.609376.671875-9.9375.910156-1.046876.070312-2.082032.175781-3.128907.242188-4.253906.261718-8.542969.414062-12.863281.414062-3.957031 0-7.890625-.105469-11.800781-.3125-.472657 0-.925781-.078125-1.398438-.113281-3.480469-.199219-6.945312-.460938-10.402343-.796875l-.398438-.074219c-7.574219-.820313-15.105469-2.023437-22.558594-3.597656l-47.320312-74.089844 38.144531-50.863281h111.46875l38.769531 51.199218zm165.496093-169.542969c-.082031.382812-.175781.753906-.257812 1.136719-.894531 3.953125-1.890625 7.867187-2.984375 11.742187l-.429688 1.519532c-1.203125 4.121093-2.496094 8.203124-3.921875 12.21875v.078124c-3.007812 8.472657-6.523437 16.753907-10.535156 24.800782l-.066406.121094c-1.914063 3.828124-3.929688 7.59375-6.054688 11.292968l-.519531.898438c-2.132812 3.734375-4.378906 7.378906-6.734375 10.945312l-78.929687 12.445313-39.023438-51.519531 23.574219-94.3125 81.265625-27.085938 48.839844 58.605469c-.847657 9.117187-2.257813 18.171875-4.222657 27.113281zm0 0\">\r\n                  </path>\r\n                </svg>\r\n                <svg class=\"penalty_goal\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 187.496 187.496\"\r\n                  style=\"enable-background:new 0 0 187.496 187.496;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <path d=\"M93.748,0C42.056,0,0,42.055,0,93.748s42.056,93.748,93.748,93.748s93.748-42.055,93.748-93.748S145.44,0,93.748,0z\r\n\t\t M93.748,173.496C49.774,173.496,14,137.721,14,93.748S49.774,14,93.748,14s79.748,35.775,79.748,79.748\r\n\t\tS137.722,173.496,93.748,173.496z\" />\r\n                    <path d=\"M102.028,54.809h-26.53c-3.866,0-7,3.134-7,7v31.939v31.939c0,3.866,3.134,7,7,7s7-3.134,7-7v-24.939h19.53\r\n\t\tc12.666,0,22.97-10.304,22.97-22.97C124.998,65.113,114.694,54.809,102.028,54.809z M102.028,86.748h-19.53V68.809h19.53\r\n\t\tc4.946,0,8.97,4.024,8.97,8.97S106.975,86.748,102.028,86.748z\" />\r\n                  </g>\r\n\r\n                </svg>\r\n\r\n              </span>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <app-no-data style=\"display: block;\" *ngIf=\"_home_lineup?.GK.length == 0\">\r\n        </app-no-data>\r\n        <div *ngIf=\"_home_lineup?.GK.length > 0\">\r\n          <div class=\"modern-tabs\">\r\n            <div (click)=\"tabs2(0)\" class=\"modern-tabs__tab active\">{{_home_team_name}}</div>\r\n            <div (click)=\"tabs2(1)\" class=\"modern-tabs__tab\">{{_away_team_name}}</div>\r\n          </div>\r\n          <div class=\"modern-tabs__content active\">\r\n            <div class=\"mini-title\">\r\n              <h5>حارس المرمي</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _home_lineup?.GK\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>الدفاع</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _home_lineup?.Def\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\"onerror=\"this.src='assets/img/placeholder.png';\" />\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>خط الوسط</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _home_lineup?.Mid\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>الهجوم</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _home_lineup?.Att\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>البدلاء</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _home_onbench\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"modern-tabs__content\">\r\n            <div class=\"mini-title\">\r\n              <h5>حارس المرمي</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _away_lineup?.GK\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>الدفاع</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _away_lineup?.Def\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>خط الوسط</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _away_lineup?.Mid\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>الهجوم</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _away_lineup?.Att\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n\r\n            <div class=\"mini-title\">\r\n              <h5>البدلاء</h5>\r\n            </div>\r\n            <div *ngFor=\"let _player of _away_onbench\" class=\"player-ticket\">\r\n              <div class=\"img-beside-text\"><a (click)=\"_router('/player/'+_player.player.peopleId)\"></a><img [src]=\"_player.logo\" onerror=\"this.src='assets/img/placeholder.png';\"/>\r\n                <p>{{_player.player.name}}</p>\r\n              </div>\r\n              <p class=\"player-ticket__number\">{{_player.player.shirtNumber}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <app-no-data style=\"display: block;\" *ngIf=\"_match_state == 'Fixture'\">\r\n        </app-no-data>\r\n        <div *ngIf=\"_match_state != 'Fixture'\" class=\"match-statistics\">\r\n          <div *ngIf=\"_match_statistics?._match_statistics\" class=\"match-statistics__overview\">\r\n            <div class=\"match-statistics__number\">{{_match_statistics?.possession?.teamA}}%</div>\r\n            <div [ngClass]=\"'p'+_match_statistics?.possession?.teamA\" class=\"c100 center\"><span>إستحواذ</span>\r\n              <div class=\"slice\">\r\n                <div class=\"bar\"></div>\r\n                <div class=\"fill\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"match-statistics__number\">{{_match_statistics?.possession?.teamB}}%</div>\r\n          </div>\r\n          <div class=\"match-statistics__details\">\r\n            <div *ngFor=\"let _st of _match_statistics;let i = index\" class=\"match-statistics__row\">\r\n              <div class=\"match-statistics__point\">\r\n                <p class=\"match-statistics__count\">{{_st?.teamA}}</p>\r\n                <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n              </div>\r\n              <div class=\"match-statistics__point match-statistics__title\">{{fin_arr[i]}}</div>\r\n              <div class=\"match-statistics__point\">\r\n                <p class=\"match-statistics__count\">{{_st?.teamB}}</p>\r\n                <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div style=\"display: none;\">\r\n              <div *ngIf=\"_match_statistics?.shotsTotal\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsTotal?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تسديدات</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsTotal?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.shotsOnTarget\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsOnTarget?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تسديدات على المرمي</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsOnTarget?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.shotsOffTarget\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsOffTarget?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تسديدات خارج المرمي</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsOffTarget?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.shotsBlocked\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsBlocked?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تسديدات معترضة </div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsBlocked?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.shotsWoodwork\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsWoodwork?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تسديدات على القائم</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.shotsWoodwork?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.crosses\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.crosses?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">عرضيات</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.crosses?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.clearances\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.clearances?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تشتيت</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.clearances?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.corners\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.corners?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">ضربات ركنية</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.corners?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.offsides\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.offsides?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تسلل</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.offsides?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.fouls\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.fouls?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">أخطاء</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.fouls?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.passes\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.passes?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تمريرات</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.passes?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.passesCompleted\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.passesCompleted?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">تمريرات مكتملة</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.passesCompleted?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.yellowCards\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.yellowCards?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">كروت صفراء</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.yellowCards?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.redCards\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.redCards?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">كروت حمراء</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.redCards?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.yellowRedCards\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.yellowRedCards?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">كروت صفراء حمراء</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.yellowRedCards?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.aerialsWon\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.aerialsWon?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">الفوز بالكرات الهوائية</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.aerialsWon?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.goalKicks\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.goalKicks?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">ضربات مرمي</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.goalKicks?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.tackles\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.tackles?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">قطع تمريرات</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.tackles?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.longBalls\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.longBalls?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">كرات طويلة</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.longBalls?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_match_statistics?.touches\" class=\"match-statistics__row\">\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.touches?.teamA}}</p>\r\n                  <!-- <div class=\"match-statistics__percent home\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n                <div class=\"match-statistics__point match-statistics__title\">لمسات</div>\r\n                <div class=\"match-statistics__point\">\r\n                  <p class=\"match-statistics__count\">{{_match_statistics?.touches?.teamB}}</p>\r\n                  <!-- <div class=\"match-statistics__percent away\"><span style=\"width:50%;\"></span></div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/match/match-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/match/match-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: MatchPageRoutingModule */

    /***/
    function srcAppMatchMatchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatchPageRoutingModule", function () {
        return MatchPageRoutingModule;
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


      var _match_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./match.page */
      "./src/app/match/match.page.ts");

      var routes = [{
        path: '',
        component: _match_page__WEBPACK_IMPORTED_MODULE_3__["MatchPage"]
      }];

      var MatchPageRoutingModule = function MatchPageRoutingModule() {
        _classCallCheck(this, MatchPageRoutingModule);
      };

      MatchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MatchPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/match/match.module.ts":
    /*!***************************************!*\
      !*** ./src/app/match/match.module.ts ***!
      \***************************************/

    /*! exports provided: MatchPageModule */

    /***/
    function srcAppMatchMatchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatchPageModule", function () {
        return MatchPageModule;
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


      var _match_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./match-routing.module */
      "./src/app/match/match-routing.module.ts");
      /* harmony import */


      var _match_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./match.page */
      "./src/app/match/match.page.ts");
      /* harmony import */


      var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.components */
      "./src/app/shared/shared.components.ts");

      var MatchPageModule = function MatchPageModule() {
        _classCallCheck(this, MatchPageModule);
      };

      MatchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _match_routing_module__WEBPACK_IMPORTED_MODULE_5__["MatchPageRoutingModule"], _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_match_page__WEBPACK_IMPORTED_MODULE_6__["MatchPage"]]
      })], MatchPageModule);
      /***/
    },

    /***/
    "./src/app/match/match.page.scss":
    /*!***************************************!*\
      !*** ./src/app/match/match.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppMatchMatchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoL21hdGNoLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/match/match.page.ts":
    /*!*************************************!*\
      !*** ./src/app/match/match.page.ts ***!
      \*************************************/

    /*! exports provided: MatchPage */

    /***/
    function srcAppMatchMatchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatchPage", function () {
        return MatchPage;
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

      _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"];

      var MatchPage = /*#__PURE__*/function () {
        function MatchPage(_ElementRef, _ActivatedRoute, _AppService) {
          _classCallCheck(this, MatchPage);

          this._ElementRef = _ElementRef;
          this._ActivatedRoute = _ActivatedRoute;
          this._AppService = _AppService;
          this.naming_arr = [{
            "en": 'aerialsWon',
            "ar": 'التحامات هوائية'
          }, {
            "en": 'clearances',
            "ar": 'تخليص'
          }, {
            "en": 'corners',
            "ar": 'ضربات ركنيه'
          }, {
            "en": 'crosses',
            "ar": 'عرضيات'
          }, {
            "en": 'fouls',
            "ar": 'مخالفات ضد'
          }, {
            "en": 'goalKicks',
            "ar": 'ركلات المرمى'
          }, {
            "en": 'interceptionsMade',
            "ar": 'الاعتراضات'
          }, {
            "en": 'longBalls',
            "ar": 'الكرات الطويلة'
          }, {
            "en": 'offsides',
            "ar": 'التسلل'
          }, {
            "en": 'passes',
            "ar": 'تمريرات'
          }, {
            "en": 'passes_completed',
            "ar": 'تمريرات صحيحة'
          }, {
            "en": 'possession',
            "ar": 'الإستحواذ'
          }, {
            "en": 'saves',
            "ar": 'تصديات'
          }, {
            "en": 'shotsBlocked',
            "ar": 'بلوكات'
          }, {
            "en": 'shotsOffTarget',
            "ar": 'تسديدات خارج المرمى'
          }, {
            "en": 'shots_on_target',
            "ar": 'تسديدات علي المرمى'
          }, {
            "en": 'shots_total',
            "ar": 'تسديدات'
          }, {
            "en": 'shotsWoodwork',
            "ar": 'تسديدات علي القائم'
          }, {
            "en": 'tackles',
            "ar": 'قطع الكرة'
          }, {
            "en": 'throwIns',
            "ar": 'رمية تماس'
          }, {
            "en": 'touches',
            "ar": 'لمسات'
          }, {
            "en": 'yellow_cards',
            "ar": 'بطاقات صفراء'
          }, {
            "en": 'yellow_red_cards',
            "ar": 'بطاقات صفراء ادت اللي حمراء'
          }, {
            "en": 'red_cards',
            "ar": 'بطاقات حمراء'
          }, {
            "en": 'passing_percentage',
            "ar": ' دقة التمرير'
          }];
          this.fin_arr = [];
          this.data_loaded = false;
        }

        _createClass(MatchPage, [{
          key: "tabs",
          value: function tabs(index) {
            this._ElementRef.nativeElement.querySelector('.large-header__tabs li.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelector('.main-tabs-box__tab.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelectorAll('.large-header__tabs li')[index].classList.add('active');

            this._ElementRef.nativeElement.querySelectorAll('.main-tabs-box__tab')[index].classList.add('active');

            this._AppService.scroll_to_top();
          }
        }, {
          key: "tabs2",
          value: function tabs2(index) {
            this._ElementRef.nativeElement.querySelector('.modern-tabs__tab.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelector('.modern-tabs__content.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelectorAll('.modern-tabs__tab')[index].classList.add('active');

            this._ElementRef.nativeElement.querySelectorAll('.modern-tabs__content')[index].classList.add('active');
          }
        }, {
          key: "get_data",
          value: function get_data(_id) {
            var _this = this;

            this._AppService.get_data("matches/single?id=".concat(_id), 's').subscribe(function (res) {
              // console.log(res)
              _this.data = res.data;
              _this._group = res.data.group; // console.log(this._group)

              _this._team_a_last_five_matches = res.data.teamA_lastFiveMatches;
              _this._team_b_last_five_matches = res.data.teamB_lastFiveMatches;
              _this._lastfivematches = res.data.lastfivematches;
              _this._match_events = res.data.key_event;
              _this._home_team_id = res.data.teamA.teamId;
              _this._away_team_id = res.data.teamB.teamId;
              _this._home_team_name = res.data.teamA.name;
              _this._away_team_name = res.data.teamB.name;
              _this._home_lineup = res.data.teamA_lineUp;
              _this._away_lineup = res.data.teamB_lineUp;
              _this._home_onbench = _this.data.teamA_subsOnBench;
              _this._away_onbench = _this.data.teamB_subsOnBench; // console.log(this._match_statistics)

              _this._match_state = _this.data.status;
              _this._match_statistics = res.data.teamStats;

              for (var i = 0; i < _this.naming_arr.length; i++) {
                for (var x = 0; x < _this._match_statistics.length; x++) {
                  if (_this._match_statistics[x].type == _this.naming_arr[i].en) {
                    _this.fin_arr.push(_this.naming_arr[i].ar);
                  }
                }
              } // console.log(this.fin_arr)
              // console.log(this._home_lineup)


              _this.data_loaded = true;
            });
          }
        }, {
          key: "back",
          value: function back() {
            this._AppService.go_back();
          }
        }, {
          key: "_router",
          value: function _router(url) {
            this._AppService.router_navigation(url);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // console.log(this.naming_arr)
            this.id = this._ActivatedRoute.snapshot.params['id']; // console.log(this.id)

            this.get_data(this.id);
          }
        }]);

        return MatchPage;
      }();

      MatchPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }];
      };

      MatchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./match.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./match.page.scss */
        "./src/app/match/match.page.scss"))["default"]]
      })], MatchPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=match-match-module-es5.js.map