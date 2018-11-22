import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TripdataProvider} from "../../providers/tripdata/tripdata";

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _Data: TripdataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

}
