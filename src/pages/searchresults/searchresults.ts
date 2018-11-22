import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

/**
 * Generated class for the SearchresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchresults',
  templateUrl: 'searchresults.html',
})
export class SearchresultsPage {
    posts: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http
  ) {

      this.http.get('https://randomuser.me/api/?results=50')
          .do(res => console.log(res))
          .map(res => res.json()).take(1)
          .subscribe(data => {
              this.posts = data.results;
          });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultsPage');
  }

}




