import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NewMovies: any[] = [];
  SelectedMovie: any[];


  @Output() id = new EventEmitter<any[]>();


  constructor(private Movie: MoviesService, private router: Router) {
    this.Movie.getDiscoverMovies().subscribe((data: any ) => {
      console.log(data);
      this.NewMovies = data;
    });
  }

  GoMovie(){
    this.router.navigate(['/Movie']);
  }

  SendMovie(movie: any[]){
    this.id.emit(movie);
    this.SelectedMovie = movie;
    console.log(movie);
  }

  ngOnInit() {
    
  }
}