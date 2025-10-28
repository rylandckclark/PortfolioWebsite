import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Homemidsection } from '../../shared/homemidsection/homemidsection';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Homemidsection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
