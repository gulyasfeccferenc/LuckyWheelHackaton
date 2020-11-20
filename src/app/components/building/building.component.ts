import {Component, Input, OnInit} from '@angular/core';
import {Building} from '../../interfaces/building';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() building: Building;

  constructor() { }

  ngOnInit(): void {
  }

}
