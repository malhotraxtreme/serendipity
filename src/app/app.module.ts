import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeContainer, ImageSliderComponent, AboutContainer, ProductsContainer, LifestyleComponent, ApparelsComponent, AppliancesComponent } from '../app-components';
import { AppService } from '../app-components/shared/services/app.service';
import { ContactComponent } from '../app-components/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeContainer,
    AboutContainer,
    ProductsContainer,
    ImageSliderComponent,
    ContactComponent,
    LifestyleComponent,
    AppliancesComponent,
    ApparelsComponent
  ],
  
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
