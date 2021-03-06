import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router){}

  aboutClick(){
    this.router.navigate(['about']);
  }

  productClick(){
    this.router.navigate(['products']);
  }
  homeClick(){
    this.router.navigate(['home']);
  }
  contactClick(){
    this.router.navigate(['contact']);
  }
}
