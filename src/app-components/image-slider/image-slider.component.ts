import { Component, Input } from '@angular/core';
// import { trigger, transition, } from '@angular/animations';

@Component({
    selector:'image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss']
})

export class ImageSliderComponent{

    @Input() images: any;

    public selected: number = 0;

    constructor(){}

    slideLeft(index: number){
        if(index == 0)
            this.selected = this.images.length - 1;
        else
            this.selected = index-1;
    }

    slideRight(index: number){
        if(index >= this.images.length-1)
            this.selected = 0;
        else
            this.selected = index+1;
    }

    
}