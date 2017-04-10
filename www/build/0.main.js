webpackJsonp([0],{

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-edit-item',template:/*ion-inline-start:"/Users/matteo/Desktop/SnapDo/src/pages/edit-item/edit-item.html"*/'<!--\n  Generated template for the AddItem page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>\n      Edit Item\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n<ion-icon name="close"></ion-icon>\n</button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item color="dark">\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item color="dark">\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n    \n  </ion-list>\n   <img [src]="img" *ngIf="img">\n  <!--<button full ion-button color="primary" (click)="accessGallery()">Add Picture</button>-->\n  <button full ion-button color="secondary" (click)="updateItem()">Save</button>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/SnapDo/src/pages/edit-item/edit-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], EditItemPage);

//# sourceMappingURL=edit-item.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(429);
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
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_item_edit_item__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AddItemPage } from '../add-item/add-item';


// import { ItemSliding } from 'ionic-angular';
var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, dataService, actionSheetCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.items = [];
        this.dataService.getData().then(function (todos) {
            if (todos) {
                _this.items = JSON.parse(todos);
            }
        });
    }
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('AddItemPage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
    };
    HomePage.prototype.editItem = function (item, index) {
        var _this = this;
        var editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__edit_item_edit_item__["a" /* EditItemPage */], { item: item, index: index });
        editModal.onDidDismiss(function (item) {
            console.log(item);
            if (item) {
                console.log('quak');
                _this.updateItem(item);
            }
        });
        editModal.present();
    };
    HomePage.prototype.uncheck = function (item) {
        item.isDone = false;
        this.dataService.save(this.items);
    };
    HomePage.prototype.saveItem = function (item) {
        this.items.push(item);
        this.dataService.save(this.items);
    };
    HomePage.prototype.updateItem = function (item) {
        console.log(item);
        this.items[item.index] = item;
        this.dataService.save(this.items);
    };
    HomePage.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        //  console.log(index);
        this.items.splice(index, 1);
        this.dataService.save(this.items);
    };
    HomePage.prototype.viewItem = function (item) {
        if (item.description) {
            this.navCtrl.push('ItemDetailPage', {
                item: item
            });
        }
    };
    HomePage.prototype.logDrag = function (event) {
        console.log(event);
    };
    HomePage.prototype.ondrag = function (event, item, index) {
        var percent = event.getSlidingPercent();
        if (percent > 0) {
            if (percent > 1) {
                // this.removeItem(item);
                setTimeout(function () {
                    event.close();
                }, 1500);
            }
        }
        else {
            if (percent < -1) {
                // console.log(this.items[index]);
                if (!this.items[index].isDone) {
                    this.items[index].isDone = true;
                    this.dataService.save(this.items);
                }
                setTimeout(function () {
                    event.close();
                }, 500);
            }
        }
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'More Actions',
            buttons: [
                {
                    text: 'Portfolio',
                    // role: 'destructive',
                    handler: function () {
                        // console.log('Destructive clicked');
                        // location.href = '//mattbag.github.io'
                        window.open('//mattbag.github.io');
                    }
                },
                {
                    text: 'About',
                    handler: function () {
                        console.log('About page clicked');
                        _this.navCtrl.push("AboutPage");
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/matteo/Desktop/SnapDo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="darker">\n    <ion-title>\n      SnapDo\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentActionSheet()">\n      <ion-icon name="more" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding #slidingItem *ngFor="let item of items; let index = index" (ionDrag)="ondrag($event, item, index)">\n      <ion-item color="dark">\n\n        <!--<ion-icon name="trash" color="danger" (click)="removeItem(item)" item-right></ion-icon>-->\n\n        <span (click)="viewItem(item)">{{item?.title}}</span>\n        <ion-icon name="information-circle" color="danger" item-right *ngIf="item?.description" (click)="viewItem(item)" [style.margin-right]="item?.isDone ? \'5px\' : \'\'"></ion-icon>\n        <ion-icon name="checkmark-circle" color="secondary" item-right *ngIf="item.isDone" (click)="uncheck(item)"></ion-icon>\n      </ion-item>\n      <ion-item-options side="left">\n        <button expandable ion-button color="secondary">\n        <ion-icon name="check"></ion-icon>\n        Done\n      </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="removeItem(item)">\n        <ion-icon name="trash"></ion-icon>\n        Delete\n      </button>\n      <button ion-button color="primary" (click)="editItem(item, index)">\n        <ion-icon name="color-palette"></ion-icon>\n        Edit\n      </button>\n      </ion-item-options>\n      \n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab bottom right>\n   <button ion-fab (click)="addItem()" color="secondary"><ion-icon name="add"></ion-icon></button>\n </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/SnapDo/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* Data */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map