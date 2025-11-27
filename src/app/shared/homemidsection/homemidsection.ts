import {Component} from '@angular/core';
import { Type } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Cardtile } from '../cardtile/cardtile';
import { ɵEmptyOutletComponent } from "@angular/router";
import { NgComponentOutlet } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  component?: Type<any>;
  text?: string;
}

@Component({
  selector: 'app-homemidsection',
  standalone: true,
  imports: [
    MatGridListModule,
    Cardtile,
    ɵEmptyOutletComponent,
    NgComponentOutlet
],
  templateUrl: './homemidsection.html',
  styleUrl: './homemidsection.scss',
})

export class Homemidsection {
  tiles: Tile[] = [
<<<<<<< HEAD
    {text: '<--', cols: 1, rows: 1, color: ' #cfab89ff'},
    {component: Cardtile, cols: 4, rows: 1, color: '#744c23ff'},
    {text: '-->', cols: 1, rows: 1, color: ' #cfab89ff'},
=======
    {text: 'Left', cols: 1, rows: 1, color: ' #cfab89ff'},
    {cols: 4, rows: 1, color: '#772014'},
    {text: 'Right', cols: 1, rows: 1, color: ' #cfab89ff'},
>>>>>>> refs/remotes/origin/master
  ];
}