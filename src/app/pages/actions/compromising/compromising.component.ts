import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-compromising',
  templateUrl: './compromising.component.html',
  styleUrls: ['./compromising.component.scss']
})
export class CompromisingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @HostListener('dragover', ['$event'])
  dragOverListener(event): void {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  @HostListener('drop', ['$event'])
  dropListener(event): void {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    console.log(fileList);
  }

  readFile(file): void {
    // Check if the file is text
    if (file.type && file.type.indexOf('text') === -1) {
      console.log('File is not text.', file.type, file);
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      file.src = event.target.result;
    });
    reader.readAsDataURL(file);
  }
}
