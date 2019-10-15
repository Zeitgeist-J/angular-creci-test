import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class Connect {

  constructor(private http: HttpClient) { }

  getToken(){
    const url = 'https://api.themoviedb.org/3/movie/76341?api_key=a481d499b03c4c1e346fbc84db7b9ff9';
    return this.http.get(url);
  }

}