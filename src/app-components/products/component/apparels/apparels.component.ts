import { Component } from '@angular/core';

@Component({
    selector: 'apparels',
    templateUrl: './apparels.component.html',
    styleUrls: ['./apparels.component.css']
})

export class ApparelsComponent{
    public temps = [0,0,0,0,0,0];
    
    constructor(){}

    ngOnInit(){
    }

    ngOnDestroy(){
    }
}