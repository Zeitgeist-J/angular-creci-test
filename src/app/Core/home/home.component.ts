import { Component, OnInit } from '@angular/core';
import { MoviesService } from './Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: MoviesService) { }

  ngOnInit() {
    this.getToken();
  }

  getToken(){
    this.token.getToken().suscribe(tk => console.log('success'));
  }

}