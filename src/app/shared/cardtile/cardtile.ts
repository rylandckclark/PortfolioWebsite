import { Component, Input, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface Card {
  Icon: string;
  Title: string;
  Subtitle: string;
  Image: string;
  Desc: string;
}

@Component({
  selector: 'app-cardtile',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cardtile.html',
  styleUrls: ['./cardtile.scss'],
})

export class Cardtile {

  @Input() icon: string = "Default";
  @Input() title: string = 'Default';
  @Input() subtitle: string = 'Default';
  @Input() image: string = 'Default';
  @Input() desc: string = 'Default';

  /* Card is passed constructor arguments passed in through html*/
  Cards: Card[] = [];

  /* As the class is initialized the inputs are assigned to their correct variables, this will allow for dynamic creation of cardtiles */
  ngOnInit(): void {
    this.Cards = [{

      Icon: this.icon,
      Title: this.title,
      Subtitle: this.subtitle,
      Image: this.image,
      Desc: this.desc

    }];
  }
}
