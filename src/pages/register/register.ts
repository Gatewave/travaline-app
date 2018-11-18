import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {User} from "../../Models/user";
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFireDatabase} from 'angularfire2/database';
import {Profile} from "../../Models/profile";



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    user = {} as User;
    profile = {} as Profile;
    url = '';
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
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public toastCtrl: ToastController,
                private afAuth : AngularFireAuth,
                private afDatabase : AngularFireDatabase,
) {
    }


    readUrl(event:any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event: ProgressEvent) => {
                this.url = (<FileReader>event.target).result;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    async register(user:User) {
        let toast = this.toastCtrl.create({
            message: 'لقد قمت بانشاء حساب جديد',
            duration: 4000,
        });
        toast.present(toast);
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.error(result);
            this.afAuth.authState.take(1).subscribe(auth => {
                this.afDatabase.object(` profile/${auth.uid} `).set(this.profile)
                    .then(() => this.navCtrl.setRoot('LoginPage'));
            })

        }
        catch (e) {
            console.error(e);
        }
    }

}
