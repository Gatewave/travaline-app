import { Component } from '@angular/core';

@Component({
  selector: 'tripcard',
  templateUrl: 'tripcard.html'
})
export class TripcardComponent {
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
  constructor() {

  }


}
