import { Injectable } from '@angular/core';
import {Building} from '../interfaces/building';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  allFacilities: Building[] = [
    {
      id: '1',
      level: 1,
      name: 'Bac Monalds',
      description: 'This evil corp makes people fat. You have to stop them!'
    },
    {
      id: 'x',
      level: 2,
      name: 'Babbling Inc',
      description: 'This evil corp just makes you uncomfortable!'
    },
    {
      id: 'c',
      level: 3,
      name: 'Legitech',
      description: 'This evil corp want to raise tax on keyboards! Sounds highly unethical!'
    },
    {
      id: 'zz',
      level: 4,
      name: 'Notflix',
      description: 'This evil corp want to make binge-watching extinct!'
    },
    {
      id: '123',
      level: 5,
      name: 'Hellweiken',
      description: 'This evil corp wants to wipe craft beers off the face of Earth. You have to stop them!'
    },
    {
      id: 'xds',
      level: 10,
      name: 'Geegle',
      description: 'This evil corp want to let everybody know your visited pages (even from private mode!). You can\'t let them!',
    }
  ];
  // tslint:disable-next-line:variable-name
  private _playersLevel = 1;
  levelChangeObserver: Subject<number> = new Subject<number>();

  constructor() { }

  getNextBuilding(): Building[] {
    return this.allFacilities.filter(x => x.level === this.playersLevel);
  }

  get playersLevel(): number {
    return this._playersLevel;
  }

  set playersLevel(level: number) {
    this._playersLevel = level;
    this.levelChangeObserver.next(this._playersLevel);
  }

}
