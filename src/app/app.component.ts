import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(public app: FirebaseApp){

  }
}
