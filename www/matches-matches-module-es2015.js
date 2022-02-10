(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["matches-matches-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div class=\"wrapper wrapper--mini-header\" id=\"app\">\r\n  <header class=\"header header--sm\">\r\n    <div class=\"header__top\">\r\n      <!-- <div class=\"header__search\"><span class=\"icon\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"136pt\" version=\"1.1\" viewBox=\"-1 0 136 136.21852\" width=\"136pt\">\r\n            <g id=\"surface1\">\r\n              <path d=\"M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 \"></path>\r\n            </g>\r\n          </svg></span></div> -->\r\n      <div class=\"header__logo\"><a routerLink=\"/home\"><img src=\"assets/img/logo.png\" /></a></div>\r\n      <div *ngIf=\"is_user_logged\" routerLink=\"/settings\" class=\"header__setting header__login\"><span class=\"icon\">\r\n          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\" style=\"enable-background:new 0 0 426.667 426.667;\"\r\n            xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307\r\n                        c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44\r\n                        c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96\r\n                        l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573\r\n                        c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44\r\n                        c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16\r\n                        c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96\r\n                        l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92\r\n                        C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667\r\n                        s74.667,33.387,74.667,74.667S254.56,288,213.28,288z\" />\r\n              </g>\r\n            </g>\r\n\r\n          </svg>\r\n\r\n        </span></div>\r\n      <div *ngIf=\"!is_user_logged\" routerLink=\"/register\" class=\"header__setting header__login\"><span class=\"icon\">\r\n          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z\" />\r\n              </g>\r\n            </g>\r\n            <g>\r\n              <g>\r\n                <path d=\"M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195\r\n                    C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15\r\n                    C481,444.833,460.745,395.539,423.966,358.195z\" />\r\n              </g>\r\n            </g>\r\n          </svg>\r\n        </span></div>\r\n      <!-- <div class=\"header__setting\"><span class=\"icon\">\r\n          <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\" style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g></g>\r\n              <path d=\"M416.8,269.44l-45.013-35.307c0.853-6.827,1.493-13.76,1.493-20.8s-0.64-13.973-1.493-20.8l45.12-35.307                                        c4.053-3.2,5.227-8.96,2.56-13.653L376.8,69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12,21.44                                        c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653,3.947,261.28,0,255.947,0h-85.333c-5.333,0-9.707,3.947-10.56,8.96                                        l-8,56.533c-13.013,5.44-25.067,12.48-36.053,21.013l-53.12-21.44c-4.8-1.813-10.347,0-13.013,4.587L7.2,143.573                                        c-2.667,4.587-1.493,10.347,2.56,13.653l45.013,35.307c-0.853,6.827-1.493,13.76-1.493,20.8s0.64,13.973,1.493,20.8L9.76,269.44                                        c-4.053,3.2-5.227,8.96-2.56,13.653l42.667,73.92c2.667,4.587,8.213,6.507,13.013,4.587L116,340.16                                        c10.987,8.427,23.04,15.573,36.053,21.013l8,56.533c0.853,5.013,5.227,8.96,10.56,8.96h85.333c5.333,0,9.707-3.947,10.56-8.96                                        l8-56.533c13.013-5.44,25.067-12.48,36.053-21.013l53.12,21.44c4.8,1.813,10.347,0,13.013-4.587l42.667-73.92                                        C422.027,278.507,420.853,272.747,416.8,269.44z M213.28,288c-41.28,0-74.667-33.387-74.667-74.667S172,138.667,213.28,138.667                                        s74.667,33.387,74.667,74.667S254.56,288,213.28,288z\"></path>\r\n            </g>\r\n          </svg></span></div> -->\r\n    </div>\r\n    <!-- <div class=\"header__bottom\">\r\n      <nav class=\"header__nav\">\r\n        <ul class=\"noscroll\">\r\n          <li><a class=\"active\" >كل المباريات</a></li>\r\n          <li><a >المفضلة</a></li>\r\n        </ul>\r\n      </nav>\r\n    </div> -->\r\n  </header>\r\n  <ion-content >\r\n    <ion-refresher slot=\"fixed\" ion-refresh-native (ionRefresh)=\"_refresh($event)\">\r\n      <ion-refresher-content pullingIcon=\"ios-refresh-outline\" refreshingSpinner=\"crescent\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"page-content\" id=\"app-box\">\r\n      <div class=\"calenday-days\">\r\n        <ion-content class=\"slider-box\">\r\n          <ion-slides pager=\"true\" [options]=\"slideOpts\" #_slider>\r\n            <ion-slide *ngFor=\"let _day of edited;let i = index\" >\r\n              <div  (click)=\"click($event.target,_day.fulldate,i)\"\r\n                class=\"calenday-days__day\">\r\n                <span>{{_day.month}}</span>\r\n                <span>{{_day.day}}</span>\r\n                <!-- <p>{{_day.date}}</p> -->\r\n              </div>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-content>\r\n        <!-- <div class=\"calenday-days__day active\"><span>الثلاثاء</span>\r\n        <p>17 نوفمبر</p>\r\n      </div> -->\r\n\r\n\r\n      </div>\r\n      <div class=\"mini-title\">\r\n        <h5>كل المباريات</h5>\r\n      </div>\r\n      <div class=\"matches-box\">\r\n        <app-no-data *ngIf=\"no_matches\"></app-no-data>\r\n        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n        <app-skeleton-loader *ngIf=\"!page_loaded\"></app-skeleton-loader>\r\n        <div *ngIf=\"!no_matches\">\r\n          <div *ngFor=\"let group of _competitions; let i = index\" class=\"matches-box__group\">\r\n            <div class=\"matches-box__head\">\r\n              <div class=\"img-beside-text\"><a [routerLink]=\"['/competition/', group.competition.competitionId]\"></a><img\r\n                  onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"group.logo\" />\r\n                <p>{{group.competition.name}}</p>\r\n              </div><span class=\"arrow icon active\" (click)=\"expand_collapse(i)\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 256 256\"\r\n                  style=\"enable-background:new 0 0 256 256;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g></g>\r\n                    <polygon points=\"225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 \t\t\">\r\n                    </polygon>\r\n                  </g>\r\n                </svg></span>\r\n            </div>\r\n            <div class=\"matches-box__body active\">\r\n              <div class=\"matches-box__matches\">\r\n\r\n                <app-match-card *ngFor=\"let _match of _competitions[i].matches\" [match]=\"_match\"\r\n                  [modifier]=\"'match-card--mini'\"></app-match-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n  <app-menu-bar [_active_tab]=\"2\"></app-menu-bar>\r\n</div>");

/***/ }),

/***/ "./src/app/matches/matches-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/matches/matches-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MatchesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesPageRoutingModule", function() { return MatchesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matches.page */ "./src/app/matches/matches.page.ts");




const routes = [
    {
        path: '',
        component: _matches_page__WEBPACK_IMPORTED_MODULE_3__["MatchesPage"]
    }
];
let MatchesPageRoutingModule = class MatchesPageRoutingModule {
};
MatchesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MatchesPageRoutingModule);



/***/ }),

/***/ "./src/app/matches/matches.module.ts":
/*!*******************************************!*\
  !*** ./src/app/matches/matches.module.ts ***!
  \*******************************************/
/*! exports provided: MatchesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesPageModule", function() { return MatchesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _matches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matches-routing.module */ "./src/app/matches/matches-routing.module.ts");
/* harmony import */ var _matches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matches.page */ "./src/app/matches/matches.page.ts");
/* harmony import */ var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.components */ "./src/app/shared/shared.components.ts");








let MatchesPageModule = class MatchesPageModule {
};
MatchesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _matches_routing_module__WEBPACK_IMPORTED_MODULE_5__["MatchesPageRoutingModule"],
            _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_matches_page__WEBPACK_IMPORTED_MODULE_6__["MatchesPage"]]
    })
], MatchesPageModule);



/***/ }),

/***/ "./src/app/matches/matches.page.scss":
/*!*******************************************!*\
  !*** ./src/app/matches/matches.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoZXMvbWF0Y2hlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/matches/matches.page.ts":
/*!*****************************************!*\
  !*** ./src/app/matches/matches.page.ts ***!
  \*****************************************/
/*! exports provided: MatchesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesPage", function() { return MatchesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




let MatchesPage = class MatchesPage {
    constructor(_AppService, _ElementRef, _UserService) {
        this._AppService = _AppService;
        this._ElementRef = _ElementRef;
        this._UserService = _UserService;
        this.slideOpts = {
            initialSlide: 29,
            speed: 400,
            effect: 'flip',
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 10
            // paginationClickable: true,
            // preventClicks:true
            // dynamicBullets:true
        };
        // slideNext(object, slideView) {
        //   slideView.slideNext(400).then(() => {
        //     // this.checkIfNavDisabled(object, slideView);
        //   });
        //   // slideView.slideTo(slideView).then(()=>{
        //   // })
        //   // slideView.slid
        // }
        this.is_user_logged = false;
        this.data_loaded = false;
        this.page_loaded = false;
        this.feltered_matches = [];
        this.competitions_ids = [];
        this.filter_ids = [];
        this.final_arr = [];
        this.no_matches = false;
        this.initalized = false;
        this.months_arabic = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        this.days_arr = [];
        this.edited = [];
        this.sorted = [];
    }
    get_data(day) {
        this.data = [];
        this._competitions = [];
        this._matches = [];
        this.page_loaded = false;
        this.no_matches = false;
        this._AppService.get_data(`matches?date=${day}`, 's')
            // this._AppService.get_data(`match/list?date=${day}`, 's')
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            if (this.data.data.matches.length > 0) {
                this._competitions = this.data.data.matches;
                this._matches = this.data.data.matches.matches;
            }
            else {
                this.no_matches = true;
            }
            this.page_loaded = true;
            // console.log(this._matches)
            setTimeout(() => {
                if (!this.initalized) {
                    this.days_scroll();
                }
                this.initalized = true;
            }, 2000);
        });
    }
    expand_collapse(index) {
        this._ElementRef.nativeElement.querySelectorAll('.matches-box__head .arrow')[index].classList.toggle('active');
        this._ElementRef.nativeElement.querySelectorAll('.matches-box__body')[index].classList.toggle('active');
    }
    generate_days() {
        let _day;
        let _month;
        let _full;
        //- today
        let now = new Date();
        // -- before 30 days
        for (let i = 0; i < 30; i++) {
            this.days_arr.unshift(new Date(now.getTime() + i * -86400000));
        }
        // -- after 30 days
        for (let i = 1; i < 30; i++) {
            this.days_arr.push(new Date(now.getTime() + i * 86400000));
        }
        // console.log(this.days_arr)
        // -- inject
        for (let i = 0; i < this.days_arr.length; i++) {
            this.edited.push({
                "fulldate": `${this.days_arr[i].getFullYear()}/${this.days_arr[i].getMonth() + 1}/${this.days_arr[i].getDate()}`,
                "day": `${this.months_arabic[this.days_arr[i].getMonth()]}`,
                "month": `${this.days_arr[i].getDate()}`
            });
        }
        this.date_today = this.edited[29].fulldate;
        this.edited[29].day = 'اليوم';
        this.edited[29].month = '';
        this.edited[28].day = 'أمس';
        this.edited[28].month = '';
        this.edited[30].day = 'غدا';
        this.edited[30].month = '';
        // console.log(this.edited)
        this.get_data(this.date_today);
    }
    click(el, day, index) {
        if (el.classList.contains('active')) {
            console.log(el.classList);
        }
        else {
            if (this._ElementRef.nativeElement.querySelector('.calenday-days__day.active')) {
                this._ElementRef.nativeElement.querySelector('.calenday-days__day.active').classList.remove('active');
            }
            this._ElementRef.nativeElement.querySelectorAll('.calenday-days__day')[index].classList.add('active');
            this.get_data(day);
        }
    }
    // tabs(index){
    //   this._ElementRef.nativeElement.querySelector('.large-header__tabs li.active').classList.remove('active')
    //   this._ElementRef.nativeElement.querySelector('.main-tabs-box__tab.active').classList.remove('active')
    //   this._ElementRef.nativeElement.querySelectorAll('.large-header__tabs li')[index].classList.add('active')
    //   this._ElementRef.nativeElement.querySelectorAll('.main-tabs-box__tab')[index].classList.add('active')
    // }
    days_scroll() {
        // console.log(this._ElementRef.nativeElement.querySelector('.calenday-days'))
        let all = this._ElementRef.nativeElement.querySelectorAll('.calenday-days__day');
        this._ElementRef.nativeElement.querySelectorAll('.calenday-days__day')[29].classList.add('active');
        // console.log(this._ElementRef.nativeElement.querySelectorAll('.calenday-days__day')[29])
        // this._ElementRef.nativeElement.querySelector('.calenday-days').scrollLeft = -2130
        // this._ElementRef.nativeElement.querySelector('.calenday-days').scrollLeft = -1900
        // this._ElementRef.nativeElement.querySelector('.calenday-days').scrollLeft = - ((all.length  * all[0].offsetWidth) + (all.length-1 * 10)) / 2
        // this.scrollTo()
        console.log(all.length);
        console.log(all[0].offsetWidth);
        this.data_loaded = true;
    }
    _refresh(page) {
        this._AppService.pull_to_refresh(page);
    }
    // 4120
    // scrollTo () {
    //   let el = this._ElementRef.nativeElement.querySelectorAll('.calenday-days__day')[31]
    //   const elLeft = el.offsetLeft + el.offsetWidth;
    //   const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;
    //   // check if element not in view
    //   if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
    //     el.parentNode.scrollLeft = elLeft - elParentLeft;
    //   } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
    //     el.parentNode.scrollLeft = el.offsetLeft - el.parentNode.offsetLeft;
    //   }
    // }
    ngOnInit() {
        // console.log(this.date_today)
        this.is_user_logged = this._UserService.is_user_logged(false);
        this.generate_days();
        // this.days_scroll()
    }
};
MatchesPage.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
MatchesPage.propDecorators = {
    slideWithNav3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['_slider', { static: false },] }]
};
MatchesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-matches',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./matches.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./matches.page.scss */ "./src/app/matches/matches.page.scss")).default]
    })
], MatchesPage);



/***/ })

}]);
//# sourceMappingURL=matches-matches-module-es2015.js.map