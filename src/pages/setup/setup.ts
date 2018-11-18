import {Component, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Slides ,Events} from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

    @ViewChild(Slides) _slides: Slides;
    slides = [
        {
            title: "اهلا بك و مرحبا فى تطبيق ترافل لاين",
            description: "سافر الان بسهوله",
            image: "assets/imgs/02.png",
            parallax:true,
        },
        {
            title: "ترافل لاين توفر الان لك العديد من الرحلات",
            description: "أحجز الان بسهوله",
            image: "assets/imgs/01.png",
            parallax:true,
        }
    ];

  constructor(public navCtrl: NavController,
              public menu: MenuController,
              public navParams: NavParams,
              public storage: Storage,
              public events: Events) {
      this.menu.swipeEnable(false);
  }

    Skip() {
        this._slides.slideNext();
    }

    goToHome() {
        this.storage.set('endSlides', true).then(() => {
            this.navCtrl.setRoot('LoginPage');
        });
    }
}
