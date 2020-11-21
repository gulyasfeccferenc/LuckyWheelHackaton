import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  // tslint:disable-next-line:variable-name
  private _progress: number;
  progressObserver: Subject<number> = new Subject<number>();
  // tslint:disable-next-line:variable-name
  private _playersLevel: number;
  levelChangeObserver: Subject<number> = new Subject<number>();
  modifier = {
    1: 5.5,
    2: 5.0,
    3: 4.0,
    4: 3.5,
    5: 2.5,
    6: 2.0
  };

  constructor() {
    this._playersLevel = 1;
  }

  get progress(): number {
    return this._progress;
  }

  set progress(newProgress: number) {
    if (newProgress <= 110) { this._progress = newProgress; }
    this.progressObserver.next(this._progress);
  }

  get playersLevel(): number {
    return this._playersLevel;
  }

  set playersLevel(level: number) {
    this._playersLevel = level;
    this.levelChangeObserver.next(this._playersLevel);
  }

  advanceLevel(): void {
    this.playersLevel = ++this._playersLevel;
    if (this._playersLevel === 6) {
      console.error('You win');
    }
  }

  getModifier(): number {
    return this.modifier[this.playersLevel];
  }
}
