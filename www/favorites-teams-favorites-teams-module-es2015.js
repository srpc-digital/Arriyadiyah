(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-teams-favorites-teams-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-teams/favorites-teams.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-teams/favorites-teams.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\n<div class=\"wrapper wrapper--mini-header\" id=\"app\">\n  <div class=\"mini-header mini-header--red\">\n    <div class=\"large-header__back\"><span class=\"icon\">\n        <!-- <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\n          <g>\n            <g id=\"chevron-right\">\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\n            </g>\n          </g>\n        </svg> -->\n        <p routerLink=\"/home\" class=\"wh\">تخطي</p>\n      </span></div>\n    <div class=\"mini-header__center\">الفرق المفضلة</div>\n    <div class=\"mini-header__search\"><span (click)=\"send_favorites()\" class=\"icon\">\n        <p class=\"wh\">التالي</p></span></div>\n  </div>\n  \n  <div class=\"page-content page-content--nomenu\" id=\"app-box\">\n    <div class=\"competitions-box\">\n      <div class=\"competitions-box__one\">\n        <div  class=\"competitions-box__head active\">\n          <p>أبرز الفرق</p>\n          <!-- <span class=\"icon arrow\">\n            <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 256 256\" style=\"enable-background:new 0 0 256 256;\" xml:space=\"preserve\">\n              <g>\n                <g></g>\n                <polygon points=\"225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 \t\t\"></polygon>\n              </g>\n            </svg>\n          </span> -->\n        </div>\n        <div class=\"competitions-box__body active\">\n          <div *ngFor=\"let _team of data\" class=\"competitions-box__single\">\n            <div  class=\"img-beside-text\">\n              \n              <img onerror=\"this.src='assets/img/placeholder.png';\" [src]=\"_team.logo\"/>\n              <p>{{_team.name}}</p>\n            </div>\n            <div class=\"checkstar\">\n              <input class=\"_teams\" [attr.data-id]=_team.teamId type=\"checkbox\"><span class=\"icon\">\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"510px\" height=\"510px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\n                  <g>\n                    <g>\n                      <polygon points=\"255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472                                                     139.103,318.011 97.41,497.25 \t\t\"></polygon>\n                    </g>\n                  </g>\n                </svg></span>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./src/app/favorites-teams/favorites-teams-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/favorites-teams/favorites-teams-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritesTeamsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesTeamsPageRoutingModule", function() { return FavoritesTeamsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favorites_teams_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites-teams.page */ "./src/app/favorites-teams/favorites-teams.page.ts");




const routes = [
    {
        path: '',
        component: _favorites_teams_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesTeamsPage"]
    }
];
let FavoritesTeamsPageRoutingModule = class FavoritesTeamsPageRoutingModule {
};
FavoritesTeamsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesTeamsPageRoutingModule);



/***/ }),

/***/ "./src/app/favorites-teams/favorites-teams.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/favorites-teams/favorites-teams.module.ts ***!
  \***********************************************************/
/*! exports provided: FavoritesTeamsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesTeamsPageModule", function() { return FavoritesTeamsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _favorites_teams_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-teams-routing.module */ "./src/app/favorites-teams/favorites-teams-routing.module.ts");
/* harmony import */ var _favorites_teams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites-teams.page */ "./src/app/favorites-teams/favorites-teams.page.ts");
/* harmony import */ var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.components */ "./src/app/shared/shared.components.ts");








let FavoritesTeamsPageModule = class FavoritesTeamsPageModule {
};
FavoritesTeamsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorites_teams_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesTeamsPageRoutingModule"],
            _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_favorites_teams_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesTeamsPage"]]
    })
], FavoritesTeamsPageModule);



/***/ }),

/***/ "./src/app/favorites-teams/favorites-teams.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/favorites-teams/favorites-teams.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy10ZWFtcy9mYXZvcml0ZXMtdGVhbXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/favorites-teams/favorites-teams.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/favorites-teams/favorites-teams.page.ts ***!
  \*********************************************************/
/*! exports provided: FavoritesTeamsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesTeamsPage", function() { return FavoritesTeamsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");



let FavoritesTeamsPage = class FavoritesTeamsPage {
    constructor(_ElementRef, _AppService) {
        this._ElementRef = _ElementRef;
        this._AppService = _AppService;
        this.data_loaded = false;
        this.data = [];
        this.teams_arr = [];
    }
    get_data() {
        this._AppService.user_get_data(`teams/special`, 's', localStorage.getItem('token'))
            .subscribe((res) => {
            this.data_loaded = true;
            this.data = res.data;
            console.log(this.data);
            this.get_favorites();
            setTimeout(() => {
                this.collect_favorites();
            }, 2000);
        });
    }
    expand_collapse(index) {
        this._ElementRef.nativeElement.querySelectorAll('.competitions-box__head')[index].classList.toggle('active');
        this._ElementRef.nativeElement.querySelectorAll('.competitions-box__body')[index].classList.toggle('active');
    }
    collect_favorites() {
        let inputs = this._ElementRef.nativeElement.querySelectorAll('._teams');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('click', () => {
                if (this.teams_arr.includes(inputs[i].getAttribute('data-id'))) {
                    const index = this.teams_arr.indexOf(inputs[i].getAttribute('data-id'));
                    if (index > -1) {
                        this.teams_arr.splice(index, 1);
                    }
                }
                else {
                    this.teams_arr.push(inputs[i].getAttribute('data-id'));
                }
                console.log(this.teams_arr);
            });
        }
    }
    send_favorites() {
        if (this.teams_arr.length > 0) {
            this._AppService.user_post_data(`user/savespeciallist`, {
                // favourite_competitions: this.teams_arr,
                favourite_team: this.teams_arr
            }, 's', localStorage.getItem('token'))
                .subscribe((res) => {
                // console.log(res)
                if (res.status == 1) {
                    this._AppService.router_navigation('/home');
                }
            });
        }
        else {
            this._AppService.router_navigation('/home');
        }
    }
    get_favorites() {
        this._AppService.user_get_data(`user/favourite`, 's', localStorage.getItem('token')).subscribe((res) => {
            let collected_ids = [];
            if (res.data != null) {
                if (res.data.favorite_teams) {
                    if (res.data.favorite_teams.length > 0) {
                        for (let i = 0; i < res.data.favorite_teams.length; i++) {
                            collected_ids.push(res.data.favorite_teams[i].teamId);
                        }
                        let inputs;
                        inputs = this._ElementRef.nativeElement.querySelectorAll('._teams');
                        // console.log(inputs)
                        for (let i = 0; i < collected_ids.length; i++) {
                            for (let x = 0; x < inputs.length; x++) {
                                if (collected_ids[i] == inputs[x].getAttribute('data-id')) {
                                    // console.log(inputs[x])
                                    inputs[x].checked = true;
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    ngOnInit() {
        this.get_data();
    }
};
FavoritesTeamsPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
FavoritesTeamsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites-teams',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favorites-teams.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-teams/favorites-teams.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favorites-teams.page.scss */ "./src/app/favorites-teams/favorites-teams.page.scss")).default]
    })
], FavoritesTeamsPage);



/***/ })

}]);
//# sourceMappingURL=favorites-teams-favorites-teams-module-es2015.js.map