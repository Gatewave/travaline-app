import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffersPage } from './offers';
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    OffersPage,
  ],
  imports: [
    IonicPageModule.forChild(OffersPage),
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
export class OffersPageModule {}
