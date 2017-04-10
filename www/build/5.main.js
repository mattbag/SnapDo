webpackJsonp([5],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail__ = __webpack_require__(430);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__item_detail__["a" /* ItemDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_detail__["a" /* ItemDetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__item_detail__["a" /* ItemDetailPage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ItemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.title = this.navParams.get('item').title;
        this.description = this.navParams.get('item').description;
        this.img = this.navParams.get('item').img;
        this.isDone = this.navParams.get('item').isDone;
    };
    ItemDetailPage.prototype.shareTodo = function () {
        console.log('sharing...');
    };
    ItemDetailPage.prototype.uncheck = function () {
        console.log('uncheck fn missing');
    };
    return ItemDetailPage;
}());
ItemDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-item-detail',template:/*ion-inline-start:"/Users/matteo/Desktop/SnapDo/src/pages/item-detail/item-detail.html"*/'<!--\n  Generated template for the ItemDetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="uncheck()" *ngIf="isDone">\n   <ion-icon name="checkmark-circle" color="secondary" (click)="uncheck()"></ion-icon>\n      </button>\n</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-fab bottom right>\n\n   <button ion-fab color="primary">\n     <ion-icon name="share"></ion-icon>\n    </button>\n      <ion-fab-list side="top">\n      <button ion-fab (click)="shareTodo()"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab (click)="shareTodo()"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab (click)="shareTodo()"><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab (click)="shareTodo()"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  \n\n </ion-fab>\n<ion-card>\n  \n  <ion-card-content>\n    {{description}}\n    <img [src]="img" *ngIf="img">\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/SnapDo/src/pages/item-detail/item-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], ItemDetailPage);

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map