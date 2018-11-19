import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TripdataProvider {

    packagesA = [
        {
            title: "ايطليا",
            description: "ايطليا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        },
        {
            title: "ايطليا",
            description: "ايطليا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        },
        {
            title: "ايطليا",
            description: "ايطليا و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
        }
    ];

  constructor(public http: HttpClient) {

  }

}
