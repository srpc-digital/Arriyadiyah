(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\n<div class=\"wrapper wrapper--mini-header\" id=\"app\">\n  <div class=\"mini-header mini-header--red\">\n    <div class=\"large-header__back\"><span (click)=\"back()\" class=\"icon\">\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\n          <g>\n            <g id=\"chevron-right\">\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\n            </g>\n          </g>\n        </svg></span></div>\n    <div class=\"mini-header__center\">تعديل البطولات والفرق المفضلة</div>\n    <div class=\"mini-header__search\"><span class=\"icon\"></span></div>\n  </div>\n  <div class=\"page-content page-content--nomenu\" id=\"app-box\">\n    <div class=\"favorites-box\">\n      <div class=\"favorites-box__head\">\n        <p>البطولات المفضلة</p>\n      </div>\n      <div class=\"favorites-box__body\">\n        <app-no-data style=\"width: 100%;margin: 0 15px;\" *ngIf=\"no_competitions\"></app-no-data>\n        <div *ngFor=\"let _competition of _competitions\" class=\"favorites-box__single\"><span (click)=\"remove_favorite_competition(_competition.competitionId)\" class=\"favorites-box__delete icon\">\n            <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"348.333px\" height=\"348.334px\" viewBox=\"0 0 348.333 348.334\" style=\"enable-background:new 0 0 348.333 348.334;\" xml:space=\"preserve\">\n              <g>\n                <path d=\"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85                                        c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563                                        c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85                                        l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554                                        L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z\"></path>\n              </g>\n            </svg></span><img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_competition.logo\"/>\n          <p>{{_competition.name}}</p>\n        </div>\n        \n       \n        \n        \n       \n      </div>\n    </div><a class=\"btn btn--primary btn--block mb15\" routerLink=\"/favorites-competitions\">تعديل البطولات المفضلة</a>\n    <div class=\"favorites-box\">\n      <div class=\"favorites-box__head\">\n        <p>الفرق المفضلة</p>\n      </div>\n      <div class=\"favorites-box__body\">\n        <app-no-data style=\"width: 100%;margin: 0 15px;\" *ngIf=\"no_teams\"></app-no-data>\n        \n        \n        \n        \n        <div *ngFor=\"let _team of _teams\" class=\"favorites-box__single\"><span (click)=\"remove_favorite_team(_team.teamId)\" class=\"favorites-box__delete icon\">\n          <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"348.333px\" height=\"348.334px\" viewBox=\"0 0 348.333 348.334\" style=\"enable-background:new 0 0 348.333 348.334;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85                                        c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563                                        c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85                                        l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554                                        L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z\"></path>\n            </g>\n          </svg></span><img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_team.logo\"/>\n        <p>{{_team.name}}</p>\n      </div>\n      </div>\n    </div><a class=\"btn btn--primary btn--block mb15\" routerLink=\"/favorites-teams\">تعديل الفرق المفضلة</a>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.components */ "./src/app/shared/shared.components.ts");








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
            _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");



let SettingsPage = class SettingsPage {
    constructor(_AppService) {
        this._AppService = _AppService;
        this.data_loaded = false;
        this._competitions = [];
        this._teams = [];
        this.no_competitions = false;
        this.no_teams = false;
    }
    get_data() {
        this.data_loaded = false;
        this._AppService.user_get_data(`user/favourite`, 's', localStorage.getItem('token'))
            .subscribe((res) => {
            this.data_loaded = true;
            if (res.data != null) {
                if (res.data.favorite_competitions) {
                    this._competitions = res.data.favorite_competitions;
                    if (this._competitions.length == 0) {
                        this.no_competitions = true;
                    }
                }
                else {
                    this.no_competitions = true;
                }
                if (res.data.favorite_teams) {
                    this._teams = res.data.favorite_teams;
                    if (this._teams.length == 0) {
                        this.no_teams = true;
                    }
                }
                else {
                    this.no_teams = true;
                }
            }
            // console.log(this._competitions,this._teams)
        });
    }
    remove_favorite_competition(competition_id) {
        console.log(competition_id);
        this._AppService.user_post_data(`user/savespeciallist`, {
            favourite_competitions: [competition_id]
        }, 's', localStorage.getItem('token')).subscribe((res) => {
            console.log(res);
            this.get_data();
        });
    }
    remove_favorite_team(team_id) {
        console.log(team_id);
        this._AppService.user_post_data(`user/savespeciallist`, {
            favourite_team: [team_id]
        }, 's', localStorage.getItem('token')).subscribe((res) => {
            console.log(res);
            this.get_data();
        });
    }
    back() {
        this._AppService.go_back();
    }
    ngOnInit() {
        this.get_data();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map