import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacking',
  templateUrl: './hacking.component.html',
  styleUrls: ['./hacking.component.scss']
})
export class HackingComponent implements OnInit {
  hitCount = 0;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('keypress', (ev) => {
      this.hitCount++;
    });
  }

}
