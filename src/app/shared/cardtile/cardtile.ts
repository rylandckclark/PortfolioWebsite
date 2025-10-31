import { Component, Input} from '@angular/core';
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
  
  @Input() icon: string = "https://i.imgur.com/AxgaNX3.png";
  @Input() title: string = 'Project Showcase';
  @Input() subtitle: string = 'Console BlackJack';
  @Input() image: string = 'assets/images/blackjack.png';
  @Input() desc: string = 'A simple text-input version of the classic Blackjack card game! Written in C# as a .Net Framework Console application, this project is equipped with logic surrounding all possible decisions including hit, stand, split, double-down, surrender, insurance, and any combination of the six. Hand information is packed together in structs and passed between methods to seamlessly deliver game outcomes. Although lacking in visual spectacle, the project serves as an intuitive way to implement switch case statements, structs, loop logic, methods, method overloads, enums, input-checking, delays, and algorithms.';

  /* Card is passed constructor arguments passed in through html*/
  Cards: Card[] = [
    {
      Icon: this.icon,
      Title: this.title,
      Subtitle: this.subtitle,
      Image: this.image,
      Desc: this.desc
    }
  ];
}
