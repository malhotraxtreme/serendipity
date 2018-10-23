import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slideIn', [
        state('void',style({opacity:0, top:'20px'})),
        transition(':enter',[
            animate('500ms 500ms ease')
        ])
    ]),
    trigger('fade', [
        state('void',style({opacity:0})),
        transition(':enter',[
            animate('500ms 1000ms ease')
        ])
    ]),
    trigger('slidelater', [
        state('void',style({opacity:0, top:'20px'})),
        transition(':enter',[
            animate('500ms 1500ms ease')
        ])
    ]),
    trigger('fadelater', [
        state('void',style({opacity:0})),
        transition(':enter',[
            animate('500ms 2000ms ease')
        ])
    ])
]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
