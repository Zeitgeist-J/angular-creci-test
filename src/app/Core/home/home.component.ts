import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NewMovies: any[] = [];
  SelectedMovie: any[];
  Current = 1;


  @Output() id = new EventEmitter<any[]>();


  constructor(private Movie: MoviesService, private router: Router, private route: ActivatedRoute, private service: MoviesService) {
    this.Movie.getDiscoverMovies().subscribe((data: any ) => {
      console.log(data);
      this.NewMovies = data;
    });
  }

  more(){
    this.Current = this.Current + 1;
    this.Movie.DiscoverMovies(String(this.Current)).subscribe((data: any ) => {
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
    this.Current = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMovie(params.get('id')))
    );
    
  }
}