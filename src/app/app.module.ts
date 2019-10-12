import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Core/top-bar/top-bar.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,
  
  RouterModule.forRoot([
    { path: 'Home', component: AppComponent },
  ])
  
  ],
  declarations: [ AppComponent, TopBarComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
