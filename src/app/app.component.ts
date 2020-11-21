import {Component, OnInit} from '@angular/core';
import {ProgressService} from './services/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LuckyWheelHackaton';
  progress: number;

  constructor(private progressService: ProgressService) {}

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    this.progressService.progressObserver.subscribe((newValue) => {
      this.progress = newValue;
    });
  }
}
