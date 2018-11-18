import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {User} from "../../Models/user";
import {AngularFireAuth} from 'angularfire2/auth'
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    user = {} as User;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                private afAuth : AngularFireAuth

    ) {

    }
    sign() {
        let loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'جارى تحميل تسجيل الدخول',
            showBackdrop:true
        });

        loading.present();

        setTimeout(() => {
        }, 1000);

        setTimeout(() => {
            loading.dismiss();
        }, 3000);
        this.navCtrl.setRoot('HomePage');
    }

    async login(user:User) {
        try {
            const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            if(result){
                this.navCtrl.setRoot('HomePage');
            }
        }
        catch (e) {
            console.error(e)
        }
    }


    async faceLogin(){
        try{
            const face = this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
            if(face){
                this.navCtrl.setRoot('HomePage');
            }
        }
        catch (e) {
            console.error(e);
        }
    }



    newuser(){
        this.navCtrl.push('RegisterPage');
    }


    forget(){
        this.navCtrl.push('ForgetPassPage');
    }



}
