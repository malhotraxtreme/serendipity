import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'about',
    templateUrl: './about.container.html',
    styleUrls: ['./about.container.css'],
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

export class AboutContainer{

    constructor(){}

    ngOnInit(){
    }

    ngOnDestroy(){
    }
}