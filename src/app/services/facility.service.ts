import { Injectable } from '@angular/core';
import {Building} from '../interfaces/building';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  allFacilities: Building[] = [
    {
      id: '1',
      level: 1,
      hacked: false,
      compromised: false,
      name: 'Bac Monalds',
      description: 'This evil corp makes people fat. You have to stop them!'
    },
    {
      id: 'x',
      level: 2,
      hacked: false,
      compromised: false,
      name: 'Babbling Inc',
      description: 'This evil corp just makes you uncomfortable!'
    },
    {
      id: 'c',
      level: 3,
      hacked: false,
      compromised: false,
      name: 'Legitech',
      description: 'This evil corp want to raise tax on keyboards! Sounds highly unethical!'
    },
    {
      id: 'zz',
      level: 4,
      hacked: false,
      compromised: false,
      name: 'Notflix',
      description: 'This evil corp want to make binge-watching extinct!'
    },
    {
      id: '123',
      level: 5,
      hacked: false,
      compromised: false,
      name: 'Hellweiken',
      description: 'This evil corp wants to wipe craft beers off the face of Earth. You have to stop them!'
    },
    {
      id: 'xds',
      level: 6,
      hacked: false,
      compromised: false,
      name: 'Geegle',
      description: 'This evil corp want to let everybody know your visited pages (even from private mode!). You can\'t let them!',
    }
  ];

  constructor() { }

  getAvailableBuildings(level: number): Building[] {
    return this.allFacilities.filter(x => x.level <= level);
  }

  hackFacility(level: number): void {
    console.info('>>> Facility hacked');
    this.getBuildingWithLevel(level)[0].hacked = true;
  }

  compromiseFacility(level: number): void {
    console.info('>>> Facility compromised');
    this.getBuildingWithLevel(level)[0].compromised = true;
  }

  getBuildingWithLevel(level: number): Building[] {
    return this.allFacilities.filter(x => x.level === level);
  }
}
