import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any[];
  id: String;
  current;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    this.moviesService.getMovie(this.id).subscribe((data: any ) => {
      console.log(data);
      this.movie = data;
    });
  } 

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.id += `: ${id}`;
    console.log(this.id);

    this.current = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.moviesService.getFullMovie('id'))
    );

    //this.movie = this.moviesService.getMovie(this.id);
    
    console.log(this.current);
  }


}