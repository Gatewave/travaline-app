import {Component, Input} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";

@Component({
  selector: 'tripcard',
  templateUrl: 'tripcard.html'
})
export class TripcardComponent {
    @Input('post') post;
    @Input('showButton') showButton = true;

    showheartIcon = true;
    showheartIconRed = false;

  constructor(public toast: ToastController, public navCtrl:NavController) {

  }
    setWishlistTrue(id){
        this.showheartIconRed = true;
        this.showheartIcon = false;
        this.toast.create({
            message: 'تم إضافة المقالة الى المفضلة',
            duration: 3000,
            position: 'bottom',
        }).present();

    }

    setWishlistFalse(id){
        this.showheartIconRed = false;
        this.showheartIcon = true;
        this.toast.create({
            message: 'تم إزالة المقالة الى المفضلة',
            duration: 3000,
            position: 'bottom'
        }).present();
    }

    openPost(post) {
        this.navCtrl.push('FavoritePage', {post});
    }



    addToFavorite(event) {
        this.post.isFavorite = !this.post.isFavorite;

        if (this.post.isFavorite)
            this.toast.create({
                message: 'تم إضافة المقالة الى المفضلة',
                duration: 3000,
                position: 'bottom'
            }).present();
        else
            this.toast.create({
                message: 'تم إزالة المقالة الى المفضلة',
                duration: 3000,
                position: 'bottom'
            }).present();

        event.stopPropagation();
    }
}
