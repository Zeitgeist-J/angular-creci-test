import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  name = "Colección";
  movies: any[] = [];
  token;

  constructor(
    protected MoviesService: MoviesService
  ) { }

  ngOnInit() {

    this.MoviesService.authentication(); 
  }

}