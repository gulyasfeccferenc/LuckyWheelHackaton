import {Component, OnInit} from '@angular/core';
import {Building} from './interfaces/building';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LuckyWheelHackaton';

  /**
   * Lifecycle method
   */
  ngOnInit(): void {}
}
