import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, PopoverController, ToastController} from 'ionic-angular';
import {LanguageProvider} from "../../providers/language/language";
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    packagesA = [
        {
            title: "ايطليا",
            description: "ايطليا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        },
        {
            title: "ايطليا",
            description: "ايطليا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        },
        {
            title: "ايطليا",
            description: "ايطليا و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        }
    ];
    packagesB = [
        {
            title: "فرنسا",
            description: "فرنسا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        },
        {
            title: "فرنسا",
            description: "فرنسا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        },
        {
            title: "فرنسا",
            description: "فرنسا و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        }
    ];
    data = [
        {
        value: 'AF',
        group: 'A',
        text: 'Afghanistan'
    },
        {
            value: 'AL',
            group: 'A',
            text: 'Albania'
        },
        {
            value: 'DZ',
            group: 'A',
            text: 'Algeria'
        },
        {
            value: 'AD',
            group: 'A',
            text: 'Andorra'
        },
        {
            value: 'AO',
            group: 'A',
            text: 'Angola'
        },
        {
            value: 'AR',
            group: 'A',
            text: 'Argentina'
        },
        {
            value: 'AM',
            group: 'A',
            text: 'Armenia'
        },
        {
            value: 'AW',
            group: 'A',
            text: 'Aruba'
        },
        {
            value: 'AU',
            group: 'A',
            text: 'Australia'
        },
        {
            value: 'AT',
            group: 'A',
            text: 'Austria'
        },
        {
            value: 'AZ',
            group: 'A',
            text: 'Azerbaijan'
        },
        {
            value: 'BH',
            group: 'B',
            text: 'Bahrain'
        },
        {
            value: 'BD',
            group: 'B',
            text: 'Bangladesh'
        },
        {
            value: 'BY',
            group: 'B',
            text: 'Belarus'
        },
        {
            value: 'BE',
            group: 'B',
            text: 'Belgium'
        },
        {
            value: 'BZ',
            group: 'B',
            text: 'Belize'
        },
        {
            value: 'BJ',
            group: 'B',
            text: 'Benin'
        },
        {
            value: 'BT',
            group: 'B',
            text: 'Bhutan'
        },
        {
            value: 'BO',
            group: 'B',
            text: 'Bolivia'
        },
        {
            value: 'BA',
            group: 'B',
            text: 'Bosnia And Herzegovina'
        },
        {
            value: 'BW',
            group: 'B',
            text: 'Botswana'
        },
        {
            value: 'BR',
            group: 'B',
            text: 'Brazil'
        },
        {
            value: 'IO',
            group: 'B',
            text: 'British Indian Ocean Territory'
        },
        {
            value: 'BN',
            group: 'B',
            text: 'Brunei Darussalam'
        },
        {
            value: 'BG',
            group: 'B',
            text: 'Bulgaria'
        },
        {
            value: 'BF',
            group: 'B',
            text: 'Burkina Faso'
        },
        {
            value: 'BI',
            group: 'B',
            text: 'Burundi'
        },
    ];
    brightness: number = 20;
    saturation: number = 0;
    warmth: number = 1300;
    structure: any = {lower: 33, upper: 60};

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public lang:LanguageProvider,
      private afAuth : AngularFireAuth,
      public toast: ToastController,
      public popoverCtrl: PopoverController,
      public platform: Platform,
  ) {
  }

  ionViewDidLoad() {
      this.afAuth.authState.subscribe(data => {
          if (data && data.email && data.uid){
              this.toast.create({
                  message:`Welcome , ${data.email}`,
                  duration:3000
              }).present();
              // this.profileData = this.afDatabase.object(`profile/${data.uid}`)

          } else {
              this.toast.create({
                  message:`Wrong Authentication`,
                  duration:3000
              }).present();
          }
      })
  }

    onChange(ev: any) {
        console.log('Changed', ev);
    }

    hotels(){
        this.navCtrl.push('HotelsPage');
    }

    flight(){
        this.navCtrl.push('FlightPage');
    }
    nile(){
        this.navCtrl.push('NilePage');
    }
    tourism(){
        this.navCtrl.push('TourismPage');
    }
    world(){
        this.navCtrl.push('WorldPage');
    }
    offers(){
        this.navCtrl.push('OffersPage');
    }
    presentRadioPopover(ev: UIEvent) {
        let popover = this.popoverCtrl.create('AccountPage', {},{cssClass: 'hamada'});
        popover.present({
            ev: ev
        });
    }
}
