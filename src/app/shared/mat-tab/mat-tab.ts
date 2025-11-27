import { Component, Input } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

//The goal with the MatTab interface is to find a way to push everything in one fell swoop and generate the components based off of that
export interface Tab {

   Description: string;
   Photo: string;
   Languages: string;
   Challenges: string;
   Highlights: string;
   Video: String;
}

@Component({
  selector: 'app-mat-tab',
  imports: [
    MatTabsModule,
    MatIconModule,
    MatTableModule,
  ],
  templateUrl: './mat-tab.html',
  styleUrl: './mat-tab.scss',
})
export class MatTab {

  @Input() description: string = 'Error';
  @Input() photo: string = 'Error';
  @Input() languages: string = 'Error';
  @Input() challenges: string = 'Error';
  @Input() highlights: string = 'Error';
  @Input() video: string = 'Error'; 

  MatTabs: Tab[] = [
    {
      Description: this.description,
      Photo: this.photo,
      Languages: this.languages,
      Challenges: this.challenges,
      Highlights: this.highlights,
      Video: this.video
    }
  ];
}
