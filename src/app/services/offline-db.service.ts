import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class OfflineDBService {
  DBName = 'LWH_DB';
  DBVersion = 1;
  db: any;

  constructor() {}

  initDB(): void {
    this.db = new Dexie(this.DBName);
    this.db.version(this.DBVersion).stores({
      generatedText: 'filename,content'
    });
    this.db.generatedText?.clear();
  }

  /**
   * Will check for initDB, then store text coming from argument
   * @param content to save
   */
  saveContent2DB(filename: string, content: string): void {
    if (this.db === undefined) {
      this.initDB();
    }

    this.db.transaction('rw', this.db.generatedText, async () => {
      if ((await this.db.generatedText.where({filename}).count()) === 0) {
        const id = await this.db.generatedText.add({filename, content});
        console.info(`>>> Item successfully written into database with filename ${filename}, id: ${id}`);
      }
    }).catch(error => {
      console.error(`>>> Couldn't wrote into database ${error}`);
    });
  }
}
