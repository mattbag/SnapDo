import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Camera } from 'ionic-native';
/*
  Generated class for the ItemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
img: string;
title: string;
description: string;
isDone: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {}

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.img = this.navParams.get('item').img;
  }
  
accessGallery(){
   Camera.getPicture({
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.img = 'data:image/jpeg;base64,'+imageData;
      
    //    let newItem = {
    //   // id: UUID.UUID(),
    //   title: this.title,
    //   description: this.description,
    //   isDone: this.isDone,
    //   img: this.img
    // };
    // this.events.publish('pic:added', newItem);

     }, (err) => {
      console.log(err);
    });
  }
 
}
