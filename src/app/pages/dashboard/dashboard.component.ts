import { Component, OnInit } from '@angular/core';
import {Building} from '../../interfaces/building';
import {FacilityService} from '../../services/facility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  availableBuildings: Building[];

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.availableBuildings = this.facilityService.getNextBuilding();
    this.facilityService.levelChangeObserver.subscribe((nextLevel) => {
      this.availableBuildings = this.facilityService.getNextBuilding();
    });
  }

}
