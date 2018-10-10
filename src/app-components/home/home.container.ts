import { Component } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'home',
    templateUrl: './home.container.html',
    styleUrls: ['./home.container.css'],
    animations: [
        trigger('slideIn', [
            state('void',style({opacity:0, top:'20px'})),
            transition(':enter',[
                animate('800ms 0.5s ease')
            ])
        ]),
        trigger('fade', [
            state('void',style({opacity:0})),
            transition(':enter',[
                animate('500ms 1s ease')
            ])
        ]),
        trigger('slidelater', [
            state('void',style({opacity:0, top:'20px'})),
            transition(':enter',[
                animate('1200ms 2s ease')
            ])
        ])
    ]
})

export class HomeContainer{

    //public variables
    public sliderImages: any;

    //Subscriptions
    private imageSubscription: Subscription;

    constructor(private service: AppService){}

    ngOnInit(){
        this.imageSubscription = this.service.getImagesForSlider().subscribe(data => {
            console.log(data);
            this.sliderImages = data;
        });
    }

    ngOnDestroy(){
        this.imageSubscription.unsubscribe();
    }
}