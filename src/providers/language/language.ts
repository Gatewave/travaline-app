import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import 'rxjs/add/operator/map';
import {ActionSheetController,Platform} from "ionic-angular";


@Injectable()
export class LanguageProvider {
    constructor(public translateService: TranslateService,
                public actionSheetCtrl: ActionSheetController,
                public platform: Platform
                ) {
    }

    set(lang: string): void {
        this.translateService.setDefaultLang(lang);
    }

    setDefaultLanguage(): void {
        this.translateService.setDefaultLang('ar');
        this.platform.setDir('rtl', true);
    }

    present() {
        this.actionSheetCtrl.create({
            title: 'أختر اللغة',
            cssClass: '.action-sheet-ios .action-sheet-group:last-child',
            buttons: [
                {
                    text: 'العربية',
                    handler: () => {
                        this.set('ar');
                        this.platform.setDir('rtl', true);
                    }
                },
                {
                    text: 'English',
                    handler: () => {
                        this.set('en');
                        this.platform.setDir('ltr', true);
                    }
                }
            ]
        }).present();
    }
}
