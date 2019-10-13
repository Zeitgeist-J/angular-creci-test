import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Core/top-bar/top-bar.component';
import { MovieComponent } from './Core/movie/movie.component';
import { MoviesService } from './movies.service';
import { LogInComponent } from './Core/log-in/log-in.component';
import { HomeComponent } from './Core/home/home.component';






@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
  
  RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'LogIn', component: LogInComponent}
  ])
  
  ],
  declarations: [ AppComponent, TopBarComponent, MovieComponent, LogInComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MoviesService]
})
export class AppModule { }
