import { Component } from '@angular/core';

@Component({
    selector: 'lifestyle',
    templateUrl: './lifestyle.component.html',
    styleUrls: ['./lifestyle.component.css']
})

export class LifestyleComponent{
    public temps = [0,0,0,0,0,0];
    constructor(){}

    ngOnInit(){
    }

    ngOnDestroy(){
    }
}