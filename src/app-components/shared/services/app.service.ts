import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService{

    constructor(private http: Http){}

    getImagesForSlider(){
        return this.http.get('src/app-components/shared/jsons/image-slider.json')
            .pipe(
                map(res => res.json())
            );
    }
}