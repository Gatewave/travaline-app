import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchresultsPage } from './searchresults';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    SearchresultsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchresultsPage),
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
export class SearchresultsPageModule {}
