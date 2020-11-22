import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkGibberishStoreService {
  text: string;
  dictionary = [
    'Antidisestablishmentarianism',
    'Floccinaucinihilipilification',
    'Pneumonoultramicroscopicsilicovolcanoconiosis',
    'Pseudopseudohypoparathyroidism',
    'Psychoneuroendocrinological',
    'Sesquipedalian',
    'Hippopotomonstrosesquippedaliophobia',
    'Incomprehensibilities',
    'Uncopyrightable',
    'Dermatoglyphics',
    'Psychophysicotherapeutics',
    'Otorhinolaryngological',
    'Efficacious',
    'Efficacious',
    'Tremendous',
    'Magnificent',
    'Clammy',
    'Vegetable',
    'Earthquake',
    'Calculator',
  ];

  constructor() {
    this.text = '';
  }

  /**
   * Trying to convert the players keystroke to something longer yet not meaningful text
   */
  addGibberish(hitKeys: any[]): void {
    for (const i in hitKeys) {
      this.text += ' ' + this.dictionary[hitKeys[i].toUpperCase().charCodeAt(0) % 20];
    }
  }

  getGibberish(): string {
    return this.text;
  }
}
