webpackJsonp([7],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Camera } from 'ionic-native';
/*
  Generated class for the AddItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EditItemPage = (function () {
    function EditItemPage(navCtrl, navParams, view, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toast = toast;
        this.title = this.navParams.get('item').title;
        this.description = this.navParams.get('item').description;
        this.isDone = this.navParams.get('item').isDone;
        this.img = this.navParams.get('item').img;
        this.index = this.navParams.get('index');
    }
    EditItemPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: 'Don\'t remove the title!',
            duration: 3000,
            position: 'top',
        });
        toast.present();
    };
    EditItemPage.prototype.updateItem = function () {
        var updatedItem = {
            // id: UUID.UUID(),
            title: this.title,
            description: this.description,
            isDone: this.isDone,
            img: this.img,
            index: this.index
        };
        if (this.title) {
            this.view.dismiss(updatedItem);
        }
        else {
            this.presentToast();
        }
        // console.log(updatedItem);
    };
    EditItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    return EditItemPage;
}());
EditItemPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-edit-item',template:/*ion-inline-start:"/Users/matteo/Desktop/SnapDo/src/pages/edit-item/edit-item.html"*/'<!--\n  Generated template for the AddItem page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>\n      Edit Item\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n<ion-icon name="close"></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item color="dark">\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item color="dark">\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n    \n  </ion-list>\n   <img [src]="img" *ngIf="img">\n  <!--<button full ion-button color="primary" (click)="accessGallery()">Add Picture</button>-->\n  <button full ion-button color="secondary" (click)="updateItem()">Save</button>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/SnapDo/src/pages/edit-item/edit-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], EditItemPage);

//# sourceMappingURL=edit-item.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_item__ = __webpack_require__(359);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPageModule", function() { return EditItemPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditItemPageModule = (function () {
    function EditItemPageModule() {
    }
    return EditItemPageModule;
}());
EditItemPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItemPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItemPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItemPage */]
        ]
    })
], EditItemPageModule);

//# sourceMappingURL=edit-item.module.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map