import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(protected http: HttpClient) { }

  ngOnInit() {
  }

  getToken(){
    var x = () => this.http.get('https://api.themoviedb.org/3/movie/76341?api_key=a481d499b03c4c1e346fbc84db7b9ff9');
    console.log(x);
    return x;
  }
  



}