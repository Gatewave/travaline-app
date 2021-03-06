import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourismPage } from './tourism';
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    TourismPage,
  ],
  imports: [
    IonicPageModule.forChild(TourismPage),
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
export class TourismPageModule {}
