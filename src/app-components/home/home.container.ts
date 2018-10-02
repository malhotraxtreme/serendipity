import { Component } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    selector: 'home',
    templateUrl: './home.container.html'
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