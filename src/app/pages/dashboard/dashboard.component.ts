import { Component, OnInit } from '@angular/core';
import {Building} from '../../interfaces/building';
import {FacilityService} from '../../services/facility.service';
import {ProgressService} from '../../services/progress.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  availableBuildings: Building[];

  constructor(private facilityService: FacilityService,
              private progress: ProgressService) {}

  ngOnInit(): void {
    this.availableBuildings = this.facilityService.getAvailableBuildings(this.progress.playersLevel);
  }

}
