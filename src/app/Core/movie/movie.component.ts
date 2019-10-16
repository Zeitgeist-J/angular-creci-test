import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: any[]; 
  Fmovie: any[];


  constructor(private moviesServive: MoviesService) {
  } 

  ngOnInit() {
  }


}