(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\r\n<div class=\"wrapper wrapper--large-header\" id=\"app\">\r\n  <div class=\"large-header\">\r\n    <div (click)=\"back()\" class=\"large-header__back\"><span class=\"icon\">\r\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n          x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\r\n          <g>\r\n            <g id=\"chevron-right\">\r\n              <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\r\n            </g>\r\n          </g>\r\n        </svg></span></div>\r\n    <div class=\"large-header__inside large-header__inside--competition\"><span\r\n        class=\"match-card__competition\">{{data?.name}}</span>\r\n      <div class=\"large-header__logo\"><img [src]=\"data?.logo\" /></div>\r\n    </div>\r\n    <div class=\"large-header__tabs\">\r\n      <li (click)=\"tabs(0)\" class=\"active\">معلومات</li>\r\n      <li (click)=\"tabs(1)\">إحصائيات</li>\r\n    </div>\r\n  </div>\r\n  <div class=\"page-content page-content--nomenu page-content--largeheader\" id=\"app-box\">\r\n    <div class=\"main-tabs-box\">\r\n      <div class=\"main-tabs-box__tab  active\">\r\n        <div class=\"player-details\">\r\n          <div class=\"player-details__top\">\r\n            <div class=\"player-details__box\"><a (click)=\"_router('/team/'+data.current_club.teamId)\"><img\r\n                  [src]=\"data?.current_club?.logo\" onerror=\"this.src='assets/img/placeholder.png';\" />\r\n                <p>{{data?.current_club.teamName}}</p>\r\n              </a></div>\r\n            <div class=\"player-details__box\"><a (click)=\"_router('/team/'+data.nationality_team.teamId)\"><img\r\n                  [src]=\"data?.nationality_team?.logo\" onerror=\"this.src='assets/img/placeholder.png';\" />\r\n                <p>{{data?.nationality_team.teamArea}}</p>\r\n              </a></div>\r\n          </div>\r\n          <div class=\"player-details__bottom\">\r\n            <div class=\"player-details__role\"><span>تاريخ الميلاد</span>\r\n              <p>{{data?.birthDate}}</p>\r\n            </div>\r\n            <div class=\"player-details__role\"><span>المركز</span>\r\n              <p>{{data?.position}}</p>\r\n            </div>\r\n            <div class=\"player-details__role\"><span>القدم المفضلة</span>\r\n              <p>{{data?.foot}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mini-title\">\r\n          <h5>الانتقالات</h5>\r\n        </div>\r\n        <div class=\"player-transfers\">\r\n          <div *ngFor=\"let _transfer of _memberships\" class=\"player-transfers__row\">\r\n            <div class=\"img-beside-text\"><a (click)=\"_router('/team/'+_transfer.teamId)\"></a><img [src]=\"_transfer.logo\"\r\n                onerror=\"this.src='assets/img/placeholder.png';\" />\r\n              <p>{{_transfer.teamName}}</p>\r\n            </div>\r\n            <div class=\"player-transfers__data\"><span>إنتقال</span>\r\n              <p>{{_transfer.startDate}}</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"main-tabs-box__tab\">\r\n        <div class=\"player-box-option\">\r\n          <div class=\"select-box\">\r\n            <div class=\"select-box__current\" tabindex=\"1\">\r\n              <div *ngFor=\"let _team of played_arr;let i = index\" class=\"select-box__value\">\r\n                <input (change)=\"get_statistics(_team.team_id,'',true)\" class=\"select-box__input\" [id]=\"'player_team'+i\"\r\n                  type=\"radio\" [value]=\"_team.team_id\" name=\"_player-team\"\r\n                  [checked]=\"_team.team_id == played_arr[0].team_id\" />\r\n                <p class=\"select-box__input-text\">{{_team.team_name}}</p>\r\n              </div>\r\n              <span class=\"icon select-box__icon\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 185.344 185.344\"\r\n                  style=\"enable-background:new 0 0 185.344 185.344;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g></g>\r\n                    <path\r\n                      d=\"M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18                                c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0                                c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span>\r\n            </div>\r\n            <ul class=\"select-box__list\">\r\n              <li *ngFor=\"let _team of played_arr;let i = index\">\r\n                <label class=\"select-box__option\" for=\"player_team{{i}}\"\r\n                  aria-hidden=\"aria-hidden\">{{_team.team_name}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"select-box\">\r\n            <div class=\"select-box__current\" tabindex=\"1\">\r\n              <div *ngFor=\"let _season  of competitions_arr;let i = index\" class=\"select-box__value\">\r\n                <input (change)=\"get_statistics(_season.team_id,_season.season_id,false)\" class=\"select-box__input\" [id]=\"'player_season'+i\"\r\n                  type=\"radio\" [value]=\"_season.season_id\" name=\"_player-season\"\r\n                  [checked]=\"_season.state == true\" />\r\n                <p class=\"select-box__input-text\">{{_season.competition_name}}</p>\r\n              </div>\r\n              <span class=\"icon select-box__icon\">\r\n                <svg id=\"Capa_1\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                  xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 185.344 185.344\"\r\n                  style=\"enable-background:new 0 0 185.344 185.344;\" xml:space=\"preserve\">\r\n                  <g>\r\n                    <g></g>\r\n                    <path\r\n                      d=\"M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18                                c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0                                c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z\">\r\n                    </path>\r\n                  </g>\r\n                </svg></span>\r\n            </div>\r\n            <ul class=\"select-box__list\">\r\n              <li *ngFor=\"let _season  of competitions_arr;let i = index\">\r\n                <label class=\"select-box__option\" for=\"player_season{{i}}\"\r\n                  aria-hidden=\"aria-hidden\">{{_season.competition_name}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n         \r\n        </div>\r\n\r\n\r\n        <div class=\"table-box table-box--wh table-box--grow\">\r\n          <div class=\"table-box__row table-box__row--head\">\r\n            <!-- <div class=\"table-box__col table-box__col--large table-box__col--paddingright\">البطولة</div> -->\r\n            <div class=\"table-box__col\">دقائق اللعب </div>\r\n            <div class=\"table-box__col\">سجل </div>\r\n            <div class=\"table-box__col\">صنع </div>\r\n            <div class=\"table-box__col\">إنذار </div>\r\n            <div class=\"table-box__col\">طرد</div>\r\n          </div>\r\n          <div class=\"table-box__row\">\r\n            <!-- <div class=\"table-box__col table-box__col--large table-box__col--paddingright\"> \r\n              <p>{{_statistic.competitionName}}</p>\r\n            </div> -->\r\n            <div class=\"table-box__col\">{{statistics_data?.minutesPlayed ? statistics_data?.minutesPlayed : '-'}}</div>\r\n            <div class=\"table-box__col\">{{statistics_data?.goals ? statistics_data?.goals : '-'}}</div>\r\n            <div class=\"table-box__col\">{{statistics_data?.assists ? statistics_data?.assists : '-'}}</div>\r\n            <div class=\"table-box__col\">{{statistics_data?.yellow_card ? statistics_data?.yellow_card : '-'}}</div>\r\n            <div class=\"table-box__col\">{{statistics_data?.red_card ? statistics_data.red_card : '-'}}</div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    \r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/player/player-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/player/player-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageRoutingModule", function() { return PlayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.page */ "./src/app/player/player.page.ts");




const routes = [
    {
        path: '',
        component: _player_page__WEBPACK_IMPORTED_MODULE_3__["PlayerPage"]
    }
];
let PlayerPageRoutingModule = class PlayerPageRoutingModule {
};
PlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayerPageRoutingModule);



/***/ }),

/***/ "./src/app/player/player.module.ts":
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/*! exports provided: PlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function() { return PlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-routing.module */ "./src/app/player/player-routing.module.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.page */ "./src/app/player/player.page.ts");
/* harmony import */ var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.components */ "./src/app/shared/shared.components.ts");








let PlayerPageModule = class PlayerPageModule {
};
PlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _player_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerPageRoutingModule"],
            _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_player_page__WEBPACK_IMPORTED_MODULE_6__["PlayerPage"]]
    })
], PlayerPageModule);



/***/ }),

/***/ "./src/app/player/player.page.scss":
/*!*****************************************!*\
  !*** ./src/app/player/player.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/player/player.page.ts":
/*!***************************************!*\
  !*** ./src/app/player/player.page.ts ***!
  \***************************************/
/*! exports provided: PlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPage", function() { return PlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");




let PlayerPage = class PlayerPage {
    constructor(_ActivatedRoute, _AppService, _ElementRef) {
        this._ActivatedRoute = _ActivatedRoute;
        this._AppService = _AppService;
        this._ElementRef = _ElementRef;
        this.data_loaded = false;
        // _team_statistics
        // _nationality_statistics
        // total_statistics
        this.played_arr = [];
        this.competitions_arr = [];
    }
    get_details() {
        this._AppService.get_data(`player/details?playerId=${this.id}`, 's').subscribe((res) => {
            this.data = res.data;
            // console.log(this.data)
            this._memberships = this.data.memberships;
            // this._staistics = this.data.
            // this._team_statistics = this.data.current_club.seasonStatistic
            // this._nationality_statistics = this.data.nationality_team.seasonStatistic
            // console.log(this._team_statistics)
            this.data_loaded = true;
            for (let i = 0; i < this.data.club_unique.length; i++) {
                this.played_arr.push({ "team_name": this.data.club_unique[i].teamName, "team_id": this.data.club_unique[i].teamId });
            }
            this.played_arr.push({ "team_name": this.data.nationality_team.teamArea, "team_id": this.data.nationality_team.teamId });
            console.log(this.played_arr);
            this.get_statistics(this.data.club_unique[0].teamId, '', false);
        });
    }
    get_statistics(_teamId, _seasonId, team_changed) {
        let competitions;
        this._AppService.get_data(`player/statistic?playerId=${this.id}&seasonId=${_seasonId}&teamId=${_teamId}`, 's').subscribe((res) => {
            this.statistics_data = res.data.competitions_statistic;
            console.log(this.statistics_data);
            competitions = res.data.competitions_Season;
            // console.log(competitions)
            if (team_changed) {
                this.competitions_arr = [];
            }
            for (let i = 0; i < competitions.length; i++) {
                // console.log(competitions[i].name)
                for (let x = 0; x < competitions[i].seasons.length; x++) {
                    this.competitions_arr.push({
                        "competition_name": `${competitions[i].name} - ${competitions[i].seasons[x].title}`,
                        "season_id": competitions[i].seasons[x].seasonId,
                        "team_id": competitions[i].seasons[x].team.teamId,
                        "state": competitions[i].seasons[x].checked
                    });
                    // console.log(competitions[i].seasons[x].seasonId)
                }
            }
            // this.team_id = _teamId
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
        setTimeout(() => {
            this._AppService.scroll_to_top();
        }, 10);
    }
    _router(url) {
        this._AppService.router_navigation(url);
    }
    ngOnInit() {
        this.id = this._ActivatedRoute.snapshot.params['id'];
        this.get_details();
        // this.get_statistics()
    }
};
PlayerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
PlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.page.scss */ "./src/app/player/player.page.scss")).default]
    })
], PlayerPage);



/***/ })

}]);
//# sourceMappingURL=player-player-module-es2015.js.map