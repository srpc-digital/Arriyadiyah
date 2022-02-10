(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div class=\"wrapper wrapper--main\" id=\"app\">\r\n    <header class=\"header\">\r\n        <div class=\"header__top\">\r\n            <!-- <div class=\"header__search\"><span routerLink=\"/search\" class=\"icon\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"136pt\" version=\"1.1\" viewBox=\"-1 0 136 136.21852\"\r\n                        width=\"136pt\">\r\n                        <g id=\"surface1\">\r\n                            <path\r\n                                d=\"M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 \">\r\n                            </path>\r\n                        </g>\r\n                    </svg></span></div> -->\r\n            <div class=\"header__logo\"><a (click)=\"reload_app()\"><img src=\"assets/img/logo.png\" /></a></div>\r\n            <!-- <div *ngIf=\"is_user_logged\" routerLink=\"/settings\" class=\"header__setting header__profile\"><span class=\"icon\">\r\n                    \r\n                    <img  onerror=\"this.src='assets/img/placeholder.png';\" src=\"\"/>\r\n                </span></div> -->\r\n            <div *ngIf=\"is_user_logged\" routerLink=\"/settings\" class=\"header__setting header__login\"><span class=\"icon\">\r\n                    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\r\n                        style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\r\n                        <g>\r\n                            <g>\r\n                                <path d=\"M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307\r\n                                    c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44\r\n                                    c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96\r\n                                    l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573\r\n                                    c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44\r\n                                    c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16\r\n                                    c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96\r\n                                    l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92\r\n                                    C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667\r\n                                    s74.667,33.387,74.667,74.667S254.56,288,213.28,288z\" />\r\n                            </g>\r\n                        </g>\r\n\r\n                    </svg>\r\n\r\n                </span></div>\r\n            <div *ngIf=\"!is_user_logged\" routerLink=\"/register\" class=\"header__setting header__login\"><span\r\n                    class=\"icon\">\r\n                    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\r\n                        style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n                        <g>\r\n                            <g>\r\n                                <path\r\n                                    d=\"M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z\" />\r\n                            </g>\r\n                        </g>\r\n                        <g>\r\n                            <g>\r\n                                <path d=\"M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195\r\n                                C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15\r\n                                C481,444.833,460.745,395.539,423.966,358.195z\" />\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </span></div>\r\n        </div>\r\n        <div class=\"header__bottom\">\r\n            <nav class=\"header__nav\">\r\n                <ul>\r\n                    <li *ngFor=\"let item of header_data;let i = index\"><a class=\"{{item.class}}\"\r\n                            (click)=\"change_content(i)\">{{item.name}}</a></li>\r\n                    <!-- <li><a (click)=\"showAll()\" [ngClass]=\"show_all == true ? 'active' : ''\">الكل</a></li>\r\n                    <li><a (click)=\"showSaudi()\" [ngClass]=\"show_saudi == true ? 'active' : ''\">كرة سعودية</a></li>\r\n                    <li><a (click)=\"showInternational()\" [ngClass]=\"show_international == true ? 'active' : ''\">كرة\r\n                            عالمية</a></li>\r\n                    <li><a (click)=\"showOtherSports()\" [ngClass]=\"show_other_sports == true ? 'active' : ''\">رياضات\r\n                            أخري</a></li>\r\n                    <li><a (click)=\"showArticles()\" [ngClass]=\"show_articles == true ? 'active' : ''\">مقالات</a></li>\r\n                    <li><a (click)=\"showArticles()\" [ngClass]=\"show_articles == true ? 'active' : ''\">حوارات</a></li>\r\n                    <li><a (click)=\"showArticles()\" [ngClass]=\"show_articles == true ? 'active' : ''\">تقارير</a></li>\r\n                    <li><a (click)=\"showArticles()\" [ngClass]=\"show_articles == true ? 'active' : ''\">قصص مصورة</a></li>\r\n                    <li><a (click)=\"showArticles()\" [ngClass]=\"show_articles == true ? 'active' : ''\">سوشيال ميديا</a></li>\r\n                    <li><a (click)=\"showArticles()\" [ngClass]=\"show_articles == true ? 'active' : ''\">منوعات</a></li> -->\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n    </header>\r\n    <ion-content  [scrollEvents]=\"true\">\r\n        <ion-refresher slot=\"fixed\" ion-refresh-native (ionRefresh)=\"_refresh($event)\">\r\n            <ion-refresher-content pullingIcon=\"ios-refresh-outline\" refreshingSpinner=\"crescent\">\r\n            </ion-refresher-content>\r\n        </ion-refresher>\r\n        <div class=\"page-content\" id=\"app-box\">\r\n            <div class=\"home-tabs\">\r\n                <div class=\"page-content__box active\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>آخر الأخبار</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <div class=\"horizontal-scroll\">\r\n\r\n                                <div *ngFor=\"let media of _trends\" class=\"post-card post-card--card \">\r\n                                    <a class=\"post-card__link\"\r\n                                        (click)=\"saving_object_with_routing(media.subject2,media.image,media.text,transform_date(media.date),media.author)\"\r\n                                        [routerLink]=\"['/single/',media.id]\"></a>\r\n                                    <div class=\"post-card__img\"><img src=\"{{media.thumbnail}}\">\r\n                                    </div>\r\n                                    <div class=\"post-card__data\">\r\n                                        <h4 class=\"post-card__title\">{{media.subject2}}</h4>\r\n                                        <div class=\"post-card__date\"><span class=\"date\">{{transform_date(media.date)}}</span></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>مباريات اليوم</h4>\r\n                            <div class=\"main-title__otherside\"><a routerLink=\"/matches\">المزيد<span class=\"icon\">\r\n                                        <svg height=\"448pt\" viewBox=\"0 0 448 448\" width=\"448pt\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0\">\r\n                                            </path>\r\n                                        </svg></span></a></div>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <div class=\"horizontal-scroll\">\r\n                                <div *ngFor=\"let _match of matches_arr\" class=\"match-wrap\">\r\n                                    <div [routerLink]=\"['/competition/',_match.competition.competitionId]\"\r\n                                        class=\"match-wrap__head\">{{_match.competition.name}}</div>\r\n                                    <app-match-card [match]=\"_match\" [modifier]=\"\"></app-match-card>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>كرة سعودية</h4>\r\n                            <div class=\"main-title__otherside\"><a (click)=\"change_content(1)\">المزيد<span class=\"icon\">\r\n                                        <svg height=\"448pt\" viewBox=\"0 0 448 448\" width=\"448pt\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0\">\r\n                                            </path>\r\n                                        </svg></span></a></div>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_saudi\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>كرة عالمية</h4>\r\n                            <div class=\"main-title__otherside\"><a (click)=\"change_content(2)\">المزيد<span class=\"icon\">\r\n                                        <svg height=\"448pt\" viewBox=\"0 0 448 448\" width=\"448pt\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0\">\r\n                                            </path>\r\n                                        </svg></span></a></div>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_international\" [modifier]=\"'post-card--horizontal'\">\r\n                            </app-media-card>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4> مقالات</h4>\r\n                            <div class=\"main-title__otherside\"><a (click)=\"change_content(4)\">المزيد<span class=\"icon\">\r\n                                        <svg height=\"448pt\" viewBox=\"0 0 448 448\" width=\"448pt\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0\">\r\n                                            </path>\r\n                                        </svg></span></a></div>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"horizontal-scroll horizontal-scroll--mini\">\r\n\r\n                            <!-- <app-media-card [data]=\"_articles\" [modifier]=\"'post-card--article'\"></app-media-card> -->\r\n                            <div *ngFor=\"let media of _articles\" class=\"post-card post-card--card post-card--article \">\r\n                                <a class=\"post-card__link\" [routerLink]=\"['/single/',media.id]\"\r\n                                    (click)=\"saving_object_with_routing(media.subject2,media.thumbnail,media.text,transform_date(media.date),media.author)\"></a>\r\n                                <div class=\"post-card__img\"><img src=\"{{media.thumbnail}}\" />\r\n                                </div>\r\n                                <div class=\"post-card__data\">\r\n                                    <h4 class=\"post-card__title\">{{media.subject2}}</h4>\r\n                                    <div class=\"post-card__date\"><span class=\"date\">{{transform_date(media.date)}}</span></div>\r\n                                    <span class=\"post-card__author\">{{media.author}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>قصص مصورة</h4>\r\n                            <div class=\"main-title__otherside\"><a (click)=\"change_content(7)\">المزيد<span class=\"icon\">\r\n                                        <svg height=\"448pt\" viewBox=\"0 0 448 448\" width=\"448pt\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0\">\r\n                                            </path>\r\n                                        </svg></span></a></div>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content stories-box\">\r\n\r\n                            <app-media-card [data]=\"_stories\" [modifier]=\"'post-card--over post-card--stories'\">\r\n                            </app-media-card>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>سوشال ميديا</h4>\r\n                            <div class=\"main-title__otherside\"><a (click)=\"change_content(8)\">المزيد<span class=\"icon\">\r\n                                        <svg height=\"448pt\" viewBox=\"0 0 448 448\" width=\"448pt\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0\">\r\n                                            </path>\r\n                                        </svg></span></a></div>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_socialmedia\" [modifier]=\"'post-card--card'\"></app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <ion-content>\r\n                    <ion-infinite-scroll  threshold=\"150px\" (ionInfinite)=\"loadData($event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\r\n\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </ion-content> -->\r\n\r\n\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"2\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>كرة سعودية</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_saudi_section\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\r\n    \r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(2,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"3\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>كرة عالمية</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_international_section\" [modifier]=\"'post-card--horizontal'\">\r\n                            </app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(3,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"4\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>رياضات أخري</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_other_sports_section\" [modifier]=\"'post-card--horizontal'\">\r\n                            </app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(4,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"6\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>مقالات</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_articles_section\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(6,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"52\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>حوارات</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_dialogues_section\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(52,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"62\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>تقارير</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_reports_section\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(62,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"61\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>قصص مصورة</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_stories_section\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(61,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n                <div class=\"page-content__box infinite_box\" data-id=\"51\">\r\n                    <div class=\"block-box\">\r\n                        <div class=\"main-title\">\r\n                            <h4>سوشال ميديا</h4>\r\n                        </div>\r\n                        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n                        <div class=\"block-box__content\">\r\n                            <app-media-card [data]=\"_socialmedia_section\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\r\n                        </div>\r\n                    </div>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData(51,$event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" >\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </ion-content>\r\n\r\n    <app-menu-bar [_active_tab]=\"1\"></app-menu-bar>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.components */
      "./src/app/shared/shared.components.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(_AppService, _ElementRef, _UserService) {
          _classCallCheck(this, HomePage);

          this._AppService = _AppService;
          this._ElementRef = _ElementRef;
          this._UserService = _UserService; // header_data = ['الكل','كرة سعودية','كرة عالمية','رياضات أخري','مقالات','حوارات','تقارير','قصص مصورة','سوشيال ميديا','منوعات']

          this.is_user_logged = false;
          this.data_loaded = false;
          this.header_data = [{
            name: 'الكل',
            "class": 'active',
            id: ''
          }, {
            name: 'كرة سعودية',
            "class": '',
            id: ''
          }, {
            name: 'كرة عالمية',
            "class": '',
            id: ''
          }, {
            name: 'رياضات',
            "class": '',
            id: ''
          }, {
            name: 'مقالات',
            "class": '',
            id: ''
          }, {
            name: 'حوارات',
            "class": '',
            id: ''
          }, {
            name: 'تقارير',
            "class": '',
            id: ''
          }, {
            name: 'قصص مصورة',
            "class": '',
            id: ''
          }, {
            name: 'سوشال ميديا',
            "class": '',
            id: ''
          }];
          this.page_loaded = false;
          this._no_matches = false;
          this._saudi_index = 2;
          this._international_index = 2;
          this._other_sports_index = 2;
          this._articles_index = 2;
          this._infographics_index = 2;
          this._dialogues_index = 2;
          this._trends_index = 2;
          this._stories_index = 2;
          this._reports_index = 2;
          this._socialmedia_index = 2;
          this.show_all = true;
          this.show_saudi = false;
          this.show_international = false;
          this.show_other_sports = false;
          this.show_articles = false;
          this.matches_arr = [];
          this.months_arabic = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        }

        _createClass(HomePage, [{
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(400);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.scrollToTop();
            this.change_content(0);
          }
        }, {
          key: "reload_app",
          value: function reload_app() {
            this.scrollToTop();
            this.change_content(0);
          }
        }, {
          key: "get_data_all",
          value: function get_data_all() {
            var _this = this;

            this.data_loaded = false;

            this._AppService.get_data("app_news_by_sections/58-2-3-6-52-62-61-4-46-51", 'r').subscribe(function (res) {
              _this._saudi = res.results.section_2; // كرة سعودية - home

              _this._saudi_section = res.results.section_2; // كرة سعودية - section

              _this._international = res.results.section_3; // كرة عالمية - home

              _this._international_section = res.results.section_3; // كرة عالمية - section

              _this._other_sports = res.results.section_4; // رياضات اخري - home

              _this._other_sports_section = res.results.section_4; // رياضات اخري - section
              // this._articles = res.results.section_6 // مقالات - home
              // this._articles_section = res.results.section_6 // مقالات - section

              _this._infographics = res.results.section_46; // إنفوجراف - home

              _this._infographics_section = res.results.section_46; // إنفوجراف- section

              _this._dialogues = res.results.section_52; // حوارات - home

              _this._dialogues_section = res.results.section_52; // حوارات - section

              _this._trends = res.results.section_58; // تريند - home

              _this._trends_section = res.results.section_58; // تريند - section

              _this._stories = res.results.section_61; // قصص مصورة - home

              _this._stories_section = res.results.section_61; // قصص مصورة - section

              _this._reports = res.results.section_62; // تقارير - home

              _this._reports_section = res.results.section_62; // تقارير - section

              _this._socialmedia = res.results.section_51; // سوشيال ميديا - home

              _this._socialmedia_section = res.results.section_51; // سوشيال ميديا - section
              // console.log(this._trends)
              // document.querySelector('.pre').style.display = 'none'

              _this.page_loaded = true;
              _this.data_loaded = true;
            });
          }
        }, {
          key: "get_articles",
          value: function get_articles() {
            var _this2 = this;

            this._AppService.get_data("app_news_by_section/6", 'r').subscribe(function (res) {
              console.log(res);
              _this2._articles = res.results; // مقالات - home

              _this2._articles_section = res.results; // مقالات - section
            });
          }
        }, {
          key: "_refresh",
          value: function _refresh(page) {
            this.get_data_all();
            this.get_articles();
            page.target.complete(); // this._AppService.pull_to_refresh(page)
          }
        }, {
          key: "change_content",
          value: function change_content(i) {
            // console.log(i)
            // this._AppService.scroll_to_top()
            this.content.scrollToTop(0);

            this._ElementRef.nativeElement.querySelector('.header__nav li a.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelector('.page-content__box.active').classList.remove('active');

            this._ElementRef.nativeElement.querySelectorAll('.header__nav li a')[i].classList.add('active');

            this._ElementRef.nativeElement.querySelectorAll('.page-content__box')[i].classList.add('active'); // setTimeout(() => {
            // }, 100);

          }
        }, {
          key: "saving_object_with_routing",
          value: function saving_object_with_routing(_title, _img, _text, _date, _author) {
            // console.log(_author)
            // localStorage.removeItem('author')
            localStorage.setItem('title', _title);
            localStorage.setItem('img', _img);
            localStorage.setItem('text', _text);
            localStorage.setItem('date', _date);

            if (_author == '') {
              localStorage.removeItem('author');
            } else {
              localStorage.setItem('author', _author);
            }
          }
        }, {
          key: "loadData",
          value: function loadData(id, _event) {
            var _this3 = this;

            var _index = 0;

            if (id == 2) {
              _index = this._saudi_index;
            } else if (id == 3) {
              _index = this._international_index;
            } else if (id == 4) {
              _index = this._other_sports_index;
            } else if (id == 6) {
              _index = this._articles_index;
            } else if (id == 46) {
              _index = this._infographics_index;
            } else if (id == 52) {
              _index = this._dialogues_index;
            } else if (id == 62) {
              _index = this._reports_index;
            } else if (id == 61) {
              _index = this._stories_index;
            } else if (id == 51) {
              _index = this._socialmedia_index;
            }

            this._AppService.get_data("app_news_by_sections/".concat(id, "?page=").concat(_index), 'r').subscribe(function (res) {
              if (id == 2) {
                _this3._saudi_section = _this3._saudi_section.concat(res.results.section_2);
                _this3._saudi_index++;
              } else if (id == 3) {
                _this3._international_section = _this3._international_section.concat(res.results.section_3);
                _this3._international_index++;
              } else if (id == 4) {
                _this3._other_sports_section = _this3._other_sports_section.concat(res.results.section_4);
                _this3._other_sports_index++;
              } else if (id == 6) {
                _this3._articles_section = _this3._articles_section.concat(res.results.section_6);
                _this3._articles_index++;
              } else if (id == 46) {
                _this3._infographics_section = _this3._infographics_section.concat(res.results.section_46);
                _this3._infographics_index++;
              } else if (id == 52) {
                _this3._dialogues_section = _this3._dialogues_section.concat(res.results.section_52);
                _this3._dialogues_index++;
              } else if (id == 62) {
                _this3._reports_section = _this3._reports_section.concat(res.results.section_62);
                _this3._reports_index++;
              } else if (id == 61) {
                _this3._stories_section = _this3._stories_section.concat(res.results.section_61);
                _this3._stories_index++;
              } else if (id == 51) {
                _this3._socialmedia_section = _this3._socialmedia_section.concat(res.results.section_51);
                _this3._socialmedia_index++;
              }

              _event.target.complete();
            });
          }
        }, {
          key: "get_matches",
          value: function get_matches() {
            var _this4 = this;

            this._AppService.get_data("matches", 's').subscribe(function (res) {
              // alert(1+JSON.stringify(res))
              // console.log(res.data.matches)
              var i;
              _this4.data_matches = res.data.matches;

              if (_this4.data_matches.length > 0) {
                for (i = 0; i < _this4.data_matches.length; i++) {
                  _this4.matches_arr.push(_this4.data_matches[i].matches[0]);
                }
              } else {
                _this4._no_matches = true;
              }
            }, function (error) {// alert(2+JSON.stringify(error))
            });
          } // infinite_scroll(_box){
          //   let boxes = this._ElementRef.nativeElement.querySelectorAll(_box)
          //   for(let i=0;i<boxes.length;i++){
          //     console.log(boxes[i])
          //     boxes[i].onscroll = () => {
          //       console.log(boxes[i])
          //     }
          //     // boxes[i].addEventListener('scroll',()=>{
          //     // })
          //   }
          //   // console.log(boxes)
          // }

        }, {
          key: "infinite_scroll",
          value: function infinite_scroll(el) {
            console.log(el); // let box = this._ElementRef.nativeElement.querySelector('#app-box')
            // console.log(box)
            // console.log(box.innerHeight)
            // console.log(box.scrollY)
            // console.log(box.offsetHeight)
            // if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) {
            //   // console.log(el)
            // }
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
            var _this5 = this;

            this.get_data_all();
            this.get_articles();
            this.get_matches(); // this.infinite_scroll('.infinite_box')

            setTimeout(function () {
              _this5.is_user_logged = _this5._UserService.is_user_logged(false);
            }, 100);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      HomePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], {
            "static": false
          }]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map