import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: MoviesService) { }

  ngOnInit() {
  }

  getToken(){
    this.token.getToken().suscribe((token) )
  }

}