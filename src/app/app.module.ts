import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Core/top-bar/top-bar.component';
import { MovieComponent } from './Core/movie/movie.component';
import { MoviesService } from './movies.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  
  RouterModule.forRoot([
    { path: 'Home', component: AppComponent },
  ])
  
  ],
  declarations: [ AppComponent, TopBarComponent, MovieComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MoviesService]
})
export class AppModule { }
