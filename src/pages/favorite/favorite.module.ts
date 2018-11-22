import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritePage } from './favorite';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    FavoritePage
  ],
  imports: [
    IonicPageModule.forChild(FavoritePage),
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
export class FavoritePageModule {}
