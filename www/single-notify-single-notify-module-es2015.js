(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-notify-single-notify-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-notify/single-notify.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-notify/single-notify.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-loader *ngIf=\"!data_loaded\"></app-page-loader>\n<div class=\"wrapper\" id=\"app\">\n  <div class=\"single-wrapper\">\n    <div class=\"post-card post-card--over post-card--section-theme post-card--single\">\n      <div class=\"post-card__img\"><img [src]=\"img\" onerror=\"this.src='assets/img/no-img.png';\"/><span (click)=\"back()\" class=\"icon\">\n          <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"306px\" height=\"306px\" viewBox=\"0 0 306 306\" xml:space=\"preserve\">\n            <g>\n              <g id=\"chevron-right\">\n                <polygon points=\"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   \"></polygon>\n              </g>\n            </g>\n          </svg></span>\n      </div>\n      <div class=\"post-card__data\">\n        <h4 class=\"post-card__title\">{{title}}</h4><span class=\"time-icon\">\n          <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 209.28 209.28\" style=\"enable-background:new 0 0 209.28 209.28;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M104.641,0C46.943,0,0.002,46.94,0.002,104.637c0,57.701,46.941,104.643,104.639,104.643   c57.697,0,104.637-46.943,104.637-104.643C209.278,46.94,162.338,0,104.641,0z M104.641,194.28   c-49.427,0-89.639-40.214-89.639-89.643C15.002,55.211,55.214,15,104.641,15c49.426,0,89.637,40.211,89.637,89.637   C194.278,154.066,154.067,194.28,104.641,194.28z\"></path>\n              <path d=\"M158.445,102.886h-49.174V49.134c0-4.142-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v61.252c0,4.142,3.358,7.5,7.5,7.5   h56.674c4.143,0,7.5-3.358,7.5-7.5C165.945,106.244,162.587,102.886,158.445,102.886z\"></path>\n            </g>\n          </svg></span>\n        <div class=\"post-card__date\"><span class=\"date\">{{date}}</span></div>\n      </div>\n      <!-- <div class=\"share-icon\">\n        <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 482.239 482.239\" height=\"512\" viewBox=\"0 0 482.239 482.239\" width=\"512\">\n          <path d=\"m378.902 275.565c-34.183 0-64.306 16.874-83.127 42.521l-94.044-47.033c2.912-9.539 4.943-19.456 4.943-29.934s-2.031-20.397-4.943-29.934l94.044-47.033c18.821 25.647 48.944 42.521 83.127 42.521 56.983 0 103.337-46.354 103.337-103.337s-46.353-103.336-103.337-103.336-103.337 46.354-103.337 103.337c0 10.478 2.033 20.395 4.945 29.932l-94.047 47.035c-18.821-25.647-48.944-42.521-83.127-42.521-56.983 0-103.336 46.353-103.336 103.337s46.353 103.337 103.337 103.337c34.183 0 64.306-16.874 83.127-42.521l94.044 47.035c-2.912 9.536-4.943 19.453-4.943 29.932 0 56.983 46.353 103.337 103.337 103.337s103.337-46.354 103.337-103.337-46.354-103.338-103.337-103.338zm0-241.119c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.897 68.891-68.891 68.891-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891zm-275.565 275.565c-37.995 0-68.891-30.914-68.891-68.891 0-37.978 30.897-68.891 68.891-68.891 37.995 0 68.891 30.914 68.891 68.891s-30.896 68.891-68.891 68.891zm275.565 137.782c-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.896 68.891-68.891 68.891z\"></path>\n        </svg>\n      </div> -->\n    </div>\n    <div class=\"single-wrapper__content\">\n      <span style=\"font-size: 15px;display: block;padding-top: 15px;padding-right: 15px;\">{{author}}</span>\n      \n      <p [innerHTML]=\"_after\"></p>\n      <div class=\"article_images\">\n        <div *ngIf=\"images_loading\" class=\"loader-more\"><div class=\"loader-more__box\"><div></div><div></div><div></div></div></div>\n        <img *ngFor=\"let _image of article_images\" [src]=_image.image/>\n      </div>\n      <!-- <div class=\"author\">\n        <span class=\"icon\">\n          <svg height=\"325pt\" viewBox=\"0 0 325 325.37515\" width=\"325pt\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0\"/></svg>\n        </span>\n        \n      </div> -->\n      <!-- <p>???????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ??????????????????????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ????????????????</p>\n      <p>??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ?????????? ????????????????</p>\n      <p>???????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ??????????????????????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ????????????????</p>\n      <p>??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ???????????????? ??????????: \"?????????????? ???????????? \"????????????\" ???? ?????? ?????????? ???????? ???????? ???????? ???????????????????? ?????????????? ?????????? ????????????????</p> -->\n    </div>\n    <div class=\"social-box\"><span class=\"share-text\">???????????? ????????????</span>\n      <a target=\"_blank\" href=\"https://twitter.com/intent/tweet?text=https://arriyadiyah.com/{{id}}\"><span class=\"icon twtr\">\n        <svg aria-hidden=\"true\" data-prefix=\"fab\" data-icon=\"twitter\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg=\"\">\n          <path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>\n        </svg></span></a>\n      <a target=\"_blank\" href=\"http://www.facebook.com/sharer/sharer.php?u=https://arriyadiyah.com/{{id}}\">\n        <div class=\"icon fb\">\n          <svg aria-hidden=\"true\" data-prefix=\"fab\" data-icon=\"facebook-f\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 264 512\" data-fa-i2svg=\"\">\n            <path d=\"M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229\"></path>\n          </svg>\n        </div></a>\n        \n          <a href={{_url}} ><span class=\"icon wts\">\n          <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n            <g>\n              <g>\n                <path d=\"M256.064,0h-0.128C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104l98.4-31.456    C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z M405.024,361.504    c-6.176,17.44-30.688,31.904-50.24,36.128c-13.376,2.848-30.848,5.12-89.664-19.264C189.888,347.2,141.44,270.752,137.664,265.792    c-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624,26.176-62.304c6.176-6.304,16.384-9.184,26.176-9.184    c3.168,0,6.016,0.16,8.576,0.288c7.52,0.32,11.296,0.768,16.256,12.64c6.176,14.88,21.216,51.616,23.008,55.392    c1.824,3.776,3.648,8.896,1.088,13.856c-2.4,5.12-4.512,7.392-8.288,11.744c-3.776,4.352-7.36,7.68-11.136,12.352    c-3.456,4.064-7.36,8.416-3.008,15.936c4.352,7.36,19.392,31.904,41.536,51.616c28.576,25.44,51.744,33.568,60.032,37.024    c6.176,2.56,13.536,1.952,18.048-2.848c5.728-6.176,12.8-16.416,20-26.496c5.12-7.232,11.584-8.128,18.368-5.568    c6.912,2.4,43.488,20.48,51.008,24.224c7.52,3.776,12.48,5.568,14.304,8.736C411.2,329.152,411.2,344.032,405.024,361.504z\"></path>\n              </g>\n            </g>\n          </svg></span></a>\n          <!-- <a href=\"#\"><span class=\"icon share\">\n          <svg id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 482.239 482.239\" height=\"512\" viewBox=\"0 0 482.239 482.239\" width=\"512\">\n            <path d=\"m378.902 275.565c-34.183 0-64.306 16.874-83.127 42.521l-94.044-47.033c2.912-9.539 4.943-19.456 4.943-29.934s-2.031-20.397-4.943-29.934l94.044-47.033c18.821 25.647 48.944 42.521 83.127 42.521 56.983 0 103.337-46.354 103.337-103.337s-46.353-103.336-103.337-103.336-103.337 46.354-103.337 103.337c0 10.478 2.033 20.395 4.945 29.932l-94.047 47.035c-18.821-25.647-48.944-42.521-83.127-42.521-56.983 0-103.336 46.353-103.336 103.337s46.353 103.337 103.337 103.337c34.183 0 64.306-16.874 83.127-42.521l94.044 47.035c-2.912 9.536-4.943 19.453-4.943 29.932 0 56.983 46.353 103.337 103.337 103.337s103.337-46.354 103.337-103.337-46.354-103.338-103.337-103.338zm0-241.119c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.897 68.891-68.891 68.891-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891zm-275.565 275.565c-37.995 0-68.891-30.914-68.891-68.891 0-37.978 30.897-68.891 68.891-68.891 37.995 0 68.891 30.914 68.891 68.891s-30.896 68.891-68.891 68.891zm275.565 137.782c-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.896 68.891-68.891 68.891z\"></path>\n          </svg></span></a> -->\n        </div>\n    <div class=\"block-box p-15\">\n      <div class=\"main-title\">\n        <h4>?????? ??????????????</h4>\n      </div>\n      <div class=\"block-box__content\">\n        <app-media-card [data]=\"_trends\" [modifier]=\"'post-card--horizontal'\"></app-media-card>\n        <!-- <div class=\"post-card post-card--horizontal \"><a class=\"post-card__link\" href=\"#\"></a>\n          <div class=\"post-card__img\"><img src=\"assets/img/content/1.jpg\"/>\n          </div>\n          <div class=\"post-card__data\">\n            <h4 class=\"post-card__title\">???? ???????? ?????????????????????? ?????????? ???????????? ???????????????? ???????????????????</h4>\n            <div class=\"post-card__date\"><span class=\"date\">?????????? ?????? 60 ??????????</span></div>\n          </div>\n        </div> -->\n        \n      </div>\n    </div>\n  </div>\n  <script src=\"js/bundle.js\"></script>\n</div>");

/***/ }),

/***/ "./src/app/single-notify/single-notify-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/single-notify/single-notify-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SingleNotifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleNotifyPageRoutingModule", function() { return SingleNotifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _single_notify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-notify.page */ "./src/app/single-notify/single-notify.page.ts");




const routes = [
    {
        path: '',
        component: _single_notify_page__WEBPACK_IMPORTED_MODULE_3__["SingleNotifyPage"]
    }
];
let SingleNotifyPageRoutingModule = class SingleNotifyPageRoutingModule {
};
SingleNotifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleNotifyPageRoutingModule);



/***/ }),

/***/ "./src/app/single-notify/single-notify.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/single-notify/single-notify.module.ts ***!
  \*******************************************************/
/*! exports provided: SingleNotifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleNotifyPageModule", function() { return SingleNotifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _single_notify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-notify-routing.module */ "./src/app/single-notify/single-notify-routing.module.ts");
/* harmony import */ var _single_notify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-notify.page */ "./src/app/single-notify/single-notify.page.ts");
/* harmony import */ var _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.components */ "./src/app/shared/shared.components.ts");








let SingleNotifyPageModule = class SingleNotifyPageModule {
};
SingleNotifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _single_notify_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleNotifyPageRoutingModule"],
            _shared_shared_components__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_single_notify_page__WEBPACK_IMPORTED_MODULE_6__["SingleNotifyPage"]]
    })
], SingleNotifyPageModule);



/***/ }),

/***/ "./src/app/single-notify/single-notify.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/single-notify/single-notify.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1ub3RpZnkvc2luZ2xlLW5vdGlmeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/single-notify/single-notify.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/single-notify/single-notify.page.ts ***!
  \*****************************************************/
/*! exports provided: SingleNotifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleNotifyPage", function() { return SingleNotifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");




let SingleNotifyPage = class SingleNotifyPage {
    constructor(_AppService, _ActivatedRoute, _Router) {
        this._AppService = _AppService;
        this._ActivatedRoute = _ActivatedRoute;
        this._Router = _Router;
        this.data_loaded = false;
        this.images_loading = true;
    }
    recieve_data() {
        this._AppService.getPostDataForNotify(this.id).subscribe(data => {
            console.log(`data from api : ${data['results']['title']}`);
            this.title = data['results']['title'];
            this.img = data['results']['img'];
            this.text = data['results']['text'];
            this.date = data['results']['date'];
            this.author = data['results']['author'];
            // localStorage.clear();
            this._removed_rn = this.text.replace(/(?:\r\n|\r|\n)/g, '<br>');
            this._after = this._removed_rn.replace(/&quot;/g, ' ');
        });
        // console.log(this.text)
        // console.log(_after)
    }
    back() {
        this._Router.navigate(['/home']);
        console.log('back');
    }
    related_news() {
        this.data_loaded = true;
        this._AppService.get_data(`app_news_by_sections/58`, 'r').subscribe((res) => {
            console.log(res);
            this.data_loaded = true;
            this._trends = res.results.section_58;
        });
    }
    get_images() {
        this._AppService.get_data(`app_images_by_news_id/${this.id}`, 'r').subscribe((res) => {
            this.images_loading = false;
            console.log(res);
            if (res != null) {
                this.article_images = res.results;
            }
        });
    }
    ngOnInit() {
        this.id = this._ActivatedRoute.snapshot.params['articleId'];
        this._url = `https://wa.me/?text=https://arriyadiyah.com/${this.id}`;
        this.get_images();
        this.recieve_data();
        this.related_news();
    }
};
SingleNotifyPage.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SingleNotifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-notify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./single-notify.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-notify/single-notify.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./single-notify.page.scss */ "./src/app/single-notify/single-notify.page.scss")).default]
    })
], SingleNotifyPage);



/***/ })

}]);
//# sourceMappingURL=single-notify-single-notify-module-es2015.js.map