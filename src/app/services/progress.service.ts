import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  // tslint:disable-next-line:variable-name
  private _progress: number;
  progressObserver: Subject<number> = new Subject<number>();

  constructor() { }

  get progress(): number {
    return this._progress;
  }

  set progress(newProgress: number) {
    if (newProgress <= 100) { this._progress = newProgress; }
    this.progressObserver.next(this._progress);
  }
}
