import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Navbar } from "../../shared/navbar/navbar";

@Component({
  selector: 'app-net-framework',
  imports: [
    MatTabsModule,
    Navbar,
],

  templateUrl: './net-framework.html',
  styleUrl: './net-framework.scss',
})
export class NetFramework {

}
