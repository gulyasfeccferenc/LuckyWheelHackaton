import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkGibberishStoreService {
  text: string;

  constructor() {
    this.text = '';
  }

  addGibberish(hitKeys: any[]): void {
    for (const i in hitKeys) {
      this.text += hitKeys[i];
    }
    console.info('text from service', this.text);
  }
}
