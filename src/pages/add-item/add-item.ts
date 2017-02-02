import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
// import { UUID } from 'angular2-uuid';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {}

  saveItem(){
    let newItem = {
      // id: UUID.UUID(),
      title: this.title,
      description: this.description,
      isDone: false
    };
    this.view.dismiss(newItem);
  }
 close(){
   this.view.dismiss();
 }
}
