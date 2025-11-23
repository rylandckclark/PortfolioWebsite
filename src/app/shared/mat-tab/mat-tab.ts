import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

export interface MatTab 
{

}

@Component({
  selector: 'app-mat-tab',
  imports: [
    MatTabsModule,
    MatIconModule
  ],
  templateUrl: './mat-tab.html',
  styleUrl: './mat-tab.scss',
})
export class MatTab {
  
  
//   @Input() icon: string =
}
