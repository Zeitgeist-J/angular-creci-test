import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(protected http: HttpClient) { }

  authetication(){
    return this.http.get('https://api.themoviedb.org/3/movie/76341?api_key=a481d499b03c4c1e346fbc84db7b9ff9')
  }

}