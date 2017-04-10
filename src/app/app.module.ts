import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { AddItemPage } from '../pages/add-item/add-item';
// import { EditItemPage } from '../pages/edit-item/edit-item';
// import {Storage} from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../providers/data';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
