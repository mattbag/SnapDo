import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the AddItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
  title: string;
  description: string;
  isDone: boolean;
  img: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {}

accessGallery(){
   Camera.getPicture({
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.img = 'data:image/jpeg;base64,'+imageData;

     }, (err) => {
      console.log(err);
    });
  }
  saveItem(){
    let newItem = {
      // id: UUID.UUID(),
      title: this.title,
      description: this.description,
      isDone: false,
      img: this.img
    };
    if(this.title){
      this.view.dismiss(newItem);
    }
    
  }
 close(){
   this.view.dismiss();
 }
}
