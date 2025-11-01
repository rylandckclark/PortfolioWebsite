import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-slidetile',
  imports: [
    MatCardModule,
    MatPaginatorModule,
  ],
  templateUrl: './slidetile.html',
  styleUrl: './slidetile.scss',
})
export class Slidetile {

}
