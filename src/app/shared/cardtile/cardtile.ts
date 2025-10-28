import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

export interface Card{
  Icon: string;
  Title: string;
  Subtitle: string;
  Image: string;
  Desc: string;
}
@Component({
  selector: 'app-cardtile',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './cardtile.html',
  styleUrl: './cardtile.scss',
})
export class Cardtile {
  Cards: Card[] = [
    {Icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokxV29a-kmKkVDVa3IItgEgQvnTae0bRNnA&s', Title: 'Project Showcase', Subtitle: 'Console BlackJack', Image: 'https://i.imgur.com/AxgaNX3.png', Desc: 'A simple text-input version of the classic Blackjack card game! Written in C# as a .Net Framework Console application, this project is equipped with logic surrounding all possible decisions including hit, stand, split, double-down, surrender, insurance, and any combination of the six. Hand information is packed together in structs and passed between methods to seamlessly deliver game outcomes. Although lacking in visual spectacle, the project serves as an intuitive way to implement switch case statements, structs, loop logic, methods, method overloads, enums, input-checking, delays, and algorithms.'}
  ]
}
