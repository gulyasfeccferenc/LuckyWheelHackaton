import { Component, OnInit } from '@angular/core';
import {Folder} from '../../../interfaces/folder';
import {TalkGibberishStoreService} from '../../../services/talk-gibberish-store.service';
import {ProgressService} from '../../../services/progress.service';
import {FacilityService} from '../../../services/facility.service';
import {OfflineDBService} from '../../../services/offline-db.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  folderNames = [
    'BINARY DATA',
    'COMPROMISING PHOTOS',
    'HR STUFF',
    'CORP',
    'FINANCIAL',
    'VIRUS',
    'APPDATA',
    'DOG VIDEOS',
    'TWITTER ACCOUNTS'
  ];
  folders: Folder[] = [];
  constructor(private talkGibberish: TalkGibberishStoreService,
              private progress: ProgressService,
              private offlineDBService: OfflineDBService,
              private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.progress.advanceLevel();
    this.facilityService.hackFacility(this.progress.playersLevel);
    this.populateFolder();
    this.saveGeneratedContent();
  }

  populateFolder(): void {
    const folderNumber = Math.round(Math.random() * 10 + 10);
    [...Array(folderNumber)].forEach((elem, index) => {
      this.folders.push({
        id: this.folderNames[index % 9] + '_' + index.toString() + Date.now().toString(),
        name: this.folderNames[index % 9],
        filename: '',
        content: '',
      });
    });
  }

  saveGeneratedContent(): void {
    this.folders.forEach((folder) => {
      const shouldBeBinary = this.isItBinary(folder.id);
      const extension = shouldBeBinary ? '.bin' : '.fecc';
      const content2Inject = this.talkGibberish.getGibberish() + folder.id + '¯\\_(ツ)_/¯'.repeat(Math.random() * 10);
      folder.filename = folder.id + extension;
      folder.content = shouldBeBinary ? this.text2Binary(content2Inject) : content2Inject;
      // Trying to save generated file for later
      this.offlineDBService.saveContent2DB(folder.filename, folder.content);
    });
  }

  isItBinary(id: string): boolean {
    return /binary/.test(id.toLowerCase()) || /appdata/.test(id.toLowerCase());
  }

  downloadFolder(id: any): void {
    const element = document.createElement('a');
    element.setAttribute('download', this.folders[id].filename);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + this.folders[id].content);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  text2Binary(string2convert): string {
    return string2convert.split('').map((char) => {
      return char.charCodeAt(0).toString(2);
    }).join(' ');
  }
}
