webpackJsonp([2],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item__ = __webpack_require__(427);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddItemPageModule = (function () {
    function AddItemPageModule() {
    }
    return AddItemPageModule;
}());
AddItemPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItemPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItemPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItemPage */]
        ]
    })
], AddItemPageModule);

//# sourceMappingURL=add-item.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
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
  Generated class for the AddItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AddItemPage = (function () {
    function AddItemPage(navCtrl, navParams, view, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toast = toast;
        this.img = '';
    }
    AddItemPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: 'I need a title here!',
            duration: 3000,
            position: 'top',
        });
        toast.present();
    };
    AddItemPage.prototype.accessGallery = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Camera */].getPicture({
            sourceType: __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Camera */].PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Camera */].DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AddItemPage.prototype.saveItem = function () {
        var newItem = {
            // id: UUID.UUID(),
            title: this.title,
            description: this.description,
            isDone: false,
            img: this.img
        };
        if (this.title) {
            this.view.dismiss(newItem);
        }
        else {
            this.presentToast();
        }
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    return AddItemPage;
}());
AddItemPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-add-item',template:/*ion-inline-start:"/Users/matteo/Desktop/SnapDo/src/pages/add-item/add-item.html"*/'<!--\n  Generated template for the AddItem page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>\n      Add Item\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n<ion-icon name="close"></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item color="dark">\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="title" autofocus></ion-input>\n    </ion-item>\n    <ion-item color="dark">\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n    \n  </ion-list>\n   <img [src]="img" *ngIf="img">\n  <button full ion-button color="primary" (click)="accessGallery()">Add Picture</button>\n  <button full ion-button color="secondary" (click)="saveItem()">Save</button>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/SnapDo/src/pages/add-item/add-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], AddItemPage);

//# sourceMappingURL=add-item.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map