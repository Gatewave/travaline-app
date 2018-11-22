import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TripdataProvider {

    Italy = [
        {
            title: "ايطليا",
            description: "ايطليا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
            isFavorite: false,

        },
        {
            title: "ايطليا",
            description: "ايطليا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
            isFavorite: false,

        },
        {
            title: "ايطليا",
            description: "ايطليا و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
            isFavorite: false,

        },

    ];
    France = [
        {
            title: "فرنسا",
            description: "فرنسا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
            isFavorite: false,

        },
        {
            title: "فرنسا",
            description: "فرنسا  و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
            isFavorite: false,

        },
        {
            title: "فرنسا",
            description: "فرنسا و جولات مميزه ليالى 3",
            image: "assets/imgs/italy.jpg",
            isFavorite: false,

        }
    ];

  constructor(public http: HttpClient) {

  }
    getItaly() {
        return this.Italy;
    }

    getFrance() {
        return this.France;
    }

    favorites() {
        return this.Italy.filter((Post) => {
            return Post.isFavorite;
        })
    }

}
