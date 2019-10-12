import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Core/top-bar/top-bar.component';
import { MovieComponent } from './Core/movie/movie.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,
  
  RouterModule.forRoot([
    { path: 'Home', component: AppComponent },
  ])
  
  ],
  declarations: [ AppComponent, TopBarComponent, MovieComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
