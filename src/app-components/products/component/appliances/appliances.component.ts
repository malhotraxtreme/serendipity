import { Component } from '@angular/core';

@Component({
    selector: 'appliances',
    templateUrl: './appliances.component.html',
    styleUrls: ['./appliances.component.css']
})

export class AppliancesComponent{
    public temps = [0,0,0,0,0,0];
    constructor(){}

    ngOnInit(){
    }

    ngOnDestroy(){
    }
}