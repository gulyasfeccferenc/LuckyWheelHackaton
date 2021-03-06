import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProgressService} from '../../../services/progress.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TalkGibberishStoreService} from '../../../services/talk-gibberish-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hacking',
  templateUrl: './hacking.component.html',
  styleUrls: ['./hacking.component.scss']
})
export class HackingComponent implements OnInit {
  hitCount = 0;
  hitKeys = [];
  hackingLines: string;
  terms = [
    'exec({\n\t\'Password\' : \'KbJ7zpQ\',\n\t\'Username\' : \'Administrator\'\n});',
    '>>> Command Returned 2',
    '>>> Return 0;',
    '## Server Connected',
    '## Server Disconnected',
    '## Connection Refused',
    '## Password Reseted',
    'ACCESS DENIED',
    'ACCESS GRANTED',
    'Password: ********\n>>> Incorrect Password\n## Server Disconnected',
    '\n\nNMAP\n\n\tIP: 198.162.0.24\n\tPlatform: Linux armv7\n\tUsers Connected: 27\n\tNetmask: 255.255.255.0\n\t0 flags up\n\n\t',
    'Reconnecting...',
    '/bin ~ # sudo chown /system/',
    '$.system.on();\n\t[SYSTEM]:Antivirus Protocol Overridden\n\t[SERVER]:Firewall Disabled\n\t',
    '[ROOT]:Filesystem Formatted',
    'oauth: qowxlksdfopp9823nn',
    '$(function(){\n\t$.database.get(\'Password\')\n});',
    '>>> Invalid IP',
    '>>> Address not found',
    'admin@youshouldnthavesudohere: ~ $>>> sudo rm -rf',
    '################ HACKING IN PROGRES ##################',
    'FOR (VAR X; X < PASSWORD.LENGTH; X++) {\n\tpassword[x].hack(Math.rand(b));\n}'
  ];
  @ViewChild('hackingSuccess') private successModal: ElementRef;

  constructor(private elRef: ElementRef,
              private progressService: ProgressService,
              private talkGibberishStore: TalkGibberishStoreService,
              private router: Router,
              private modalService: NgbModal) { }

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    this.progressService.progress = 0;
  }

  @HostListener('document:keypress', ['$event'])
  keyEventListener(ev: KeyboardEvent): void {
    const levelModifier = this.progressService.getModifier();
    this.hitCount++;
    this.hitKeys.push(ev.key);
    if (this.hitCount % 10 === 0) {
      this.generateCode();
      this.progressService.progress = this.progressService.progress + Math.round(Math.random() * levelModifier);
      if (this.progressService.progress >= 100) {
        this.modalService.open(this.successModal);
        this.talkGibberishStore.addGibberish(this.hitKeys);
        this.progressService.progress = 0;
      }
    }
  }

  /**
   * Will generate random code lines and shows them on screen.
   * Got the idea from https://hackertyper.net
   */
  generateCode(): void {
    const random = (Math.floor(Math.random() * this.terms.length));
    this.hackingLines += this.terms[random] + '\n';
    this.scrollToBottom();
  }

  /**
   * Utility function to keep up with the code in the "terminal"
   */
  scrollToBottom(): void {
    this.elRef.nativeElement.scroll(0, this.elRef.nativeElement.scrollHeight);
  }

  downloadClicked(): void {
    this.modalService.dismissAll();
    this.router.navigate(['download'], {skipLocationChange: true});
  }
}
