import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ActionSheetController, Events } from 'ionic-angular';
// import { AddItemPage } from '../add-item/add-item';
// import { EditItemPage } from '../edit-item/edit-item';
import { Data } from '../../providers/data';

// import { ItemSliding } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public oneDeleted: boolean;
  public items = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public dataService: Data,
    public actionSheetCtrl: ActionSheetController,
    public events: Events) {

    this.dataService.getData().then((todos) => {

      if (todos) {
        this.items = JSON.parse(todos);
      }

    });

  }

  addItem() {

    let addModal = this.modalCtrl.create('AddItemPage');

    addModal.onDidDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });

    addModal.present();

  }

  editItem(item, index) {

    let editModal = this.modalCtrl.create('EditItemPage', { item: item, index: index });

    editModal.onDidDismiss((item) => {
      console.log(item);
      if (item) {
        console.log('quak');

        this.updateItem(item);
      }

    });

    editModal.present();

  }
  uncheck(item) {
    item.isDone = false;
    this.dataService.save(this.items);
  }
  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }
  updateItem(item) {
    console.log(item);

    this.items[item.index] = item;
    this.dataService.save(this.items);
  }
  removeItem(item) {
    let index = this.items.indexOf(item);
    //  console.log(index);
    this.items.splice(index, 1);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    if (item.description || item.img) {
      this.navCtrl.push('ItemDetailPage', {
        item: item
      });
    }
  }
  logDrag(event) {
    console.log(event);
  }
  ondrag(event, item, index) {
    let percent = event.getSlidingPercent();

    if (percent > 0) {

      if (percent > 1) {
        // this.removeItem(item);
        setTimeout(() => {
          event.close();
        }, 1500)
      }

    } else {

      if (percent < -1) {
        // console.log(this.items[index]);
        if (!this.items[index].isDone) {
          this.items[index].isDone = true;
          this.dataService.save(this.items);
        }

        setTimeout(() => {
          event.close();
        }, 500)


      }


    }

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'More Actions',
      buttons: [
        {
          text: 'Portfolio',
          // role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            // location.href = '//mattbag.github.io'
            window.open('//mattbag.github.io')

          }
        },
        {
          text: 'About',
          handler: () => {
            console.log('About page clicked');
            this.navCtrl.push("AboutPage");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}