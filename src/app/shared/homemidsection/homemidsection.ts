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
    {text: 'Left', cols: 1, rows: 1, color: 'grey'},
    {component: Cardtile, cols: 4, rows: 1, color: 'silver'},
    {text: 'Right', cols: 1, rows: 1, color: 'grey'},
  ];
}