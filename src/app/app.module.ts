import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeContainer } from '../app-components/home/home.container';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeContainer
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
