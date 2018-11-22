import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LanguageProvider} from "../providers/language/language";
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{title: string, component: string , icon:string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public translate: LanguageProvider,
              public storage: Storage,
              public events: Events
  ) {
    this.translate.setDefaultLanguage();
      this.storage.get('endSlides').then((endSlides) => {
          if (endSlides) this.rootPage = 'SetupPage';
          else this.rootPage = 'HomePage';
          this.initializePages();
          this.initializeApp();
      });
  }

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  initializePages(){
      this.pages = [
          { title: 'Page-D', component: 'HotelsPage', icon:'ios-home'},
          { title: 'Page-E', component: 'FlightPage', icon:'ios-plane'},
          { title: 'Page-F', component: 'NilePage', icon:'ios-boat'},
          { title: 'Page-G', component: 'TourismPage', icon:'ios-pin'},
          { title: 'Page-H', component: 'WorldPage', icon:'ios-globe'},
          { title: 'Page-I', component: 'OffersPage', icon:'ios-bookmark'},
          { title: 'Page-I', component: 'FavoritePage', icon:'ios-heart'},
          { title: 'Page-Z', component: 'SettingsPage', icon:'ios-cog'},
          { title: 'Page-X', component: 'LoginPage', icon:'ios-log-out'}

      ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    // this.nav.setRoot(page.current);
  }
}
