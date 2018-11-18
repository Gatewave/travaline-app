import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsPage } from './terms';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    TermsPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsPage),
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
export class TermsPageModule {}
