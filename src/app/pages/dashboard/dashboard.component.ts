import { Component, OnInit } from '@angular/core';
import {Building} from '../../interfaces/building';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  availableBuildings: Building[];

  constructor() { }

  ngOnInit(): void {
    this.availableBuildings = [
      {
        id: '1',
        name: 'Babbling Inc',
        description: 'This evil corp makes people fat. You have to stop them!'
      }
    ];
  }

}
