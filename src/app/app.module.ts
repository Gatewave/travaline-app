import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FIREBASE_CREDENTIALS} from './firebase.credentials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {LanguageProvider} from "../providers/language/language";
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot(),

      TranslateModule.forRoot({
    loader: {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
    },
    deps: [HttpClient]
    }
    }),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LanguageProvider,
    {provide: ErrorHandler,
    useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
