import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
      TranslateModule.forChild({
          loader: {
              provide: TranslateLoader,
              useFactory: (http: HttpClient) => {
                  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
              },
              deps: [HttpClient]
          }
      })
  ],
})
export class LoginPageModule {}
