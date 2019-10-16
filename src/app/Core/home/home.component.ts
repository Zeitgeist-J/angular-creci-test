import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NewMovies: any[] = [];


  constructor(private Movie: ConnectService ) {

    this.Movie.getDiscoverMovies().subscribe((data: any ) => {
      console.log(data);
      this.NewMovies = data;
    });
  }


  ngOnInit() {
    
  }
}