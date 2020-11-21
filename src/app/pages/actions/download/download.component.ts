import { Component, OnInit } from '@angular/core';
import {Folder} from '../../../interfaces/folder';
import {TalkGibberishStoreService} from '../../../services/talk-gibberish-store.service';
import {ProgressService} from '../../../services/progress.service';

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
  constructor(private talkGibberish: TalkGibberishStoreService, private progress: ProgressService) { }

  ngOnInit(): void {
    this.progress.advanceLevel();
    const folderNumber = Math.round(Math.random() * 10 + 10);
    [...Array(folderNumber)].forEach((elem, index) => {
      this.folders.push({
        id: this.folderNames[index % 9] + '_' + index.toString() + Date.now().toString(),
        name: this.folderNames[index % 9],
        link: false,
      });
    });
  }

  downloadFolder(id: any): void {
    const element = document.createElement('a');
    const rawText = this.talkGibberish.getGibberish();
    if (/binary/.test(id.toLowerCase() || /appdata/.test(id.toLowerCase()))) {
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.text2Binary(rawText)));
      element.setAttribute('download', id + '.bin');
    } else {
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(rawText));
      element.setAttribute('download', id + '.fecc');
    }

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
