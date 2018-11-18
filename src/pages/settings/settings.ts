import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LanguageProvider} from "../../providers/language/language";


@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public lang:LanguageProvider) {
    }

    changeLanguage(){
        this.lang.present();
    }

    terms(){
        this.navCtrl.setRoot('TermsPage');
    }
    backHome(){
        this.navCtrl.setRoot('HomePage')
    }
}
