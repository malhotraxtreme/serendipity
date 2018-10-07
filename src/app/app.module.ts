import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeContainer, ImageSliderComponent } from '../app-components';
import { AppService } from '../app-components/shared/services/app.service';

@NgModule({
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeContainer,

    ImageSliderComponent
  ],
  
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
