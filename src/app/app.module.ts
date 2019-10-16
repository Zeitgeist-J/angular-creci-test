import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppComponent } from './app.component';
import { TopBarComponent } from './Core/top-bar/top-bar.component';
import { MovieComponent } from './Core/movie/movie.component';
import { LogInComponent } from './Core/log-in/log-in.component';
import { HomeComponent } from './Core/home/home.component';
import { RegisterComponent } from './Core/register/register.component';
import { MoviesService } from './Services/movies.service';





@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpClientJsonpModule, 
  
  RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'new', component: RegisterComponent},
    { path: 'Home', component: HomeComponent},
    { path: 'LogIn', component: LogInComponent},
    { path: 'Movie', component: MovieComponent}
  ])
  
  ],
  declarations: [ AppComponent, TopBarComponent, MovieComponent, LogInComponent, HomeComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MoviesService]
})
export class AppModule { }
