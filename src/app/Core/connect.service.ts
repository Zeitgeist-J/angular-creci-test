import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ConnectService {

  private apiKey: String = "a481d499b03c4c1e346fbc84db7b9ff9";
  private UrlMovie: String = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getQuery(query: String){
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getQueryforMovie(query: String){
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getDiscoverMovies() {
    return this.getQuery("/discover/movie?api_key=a481d499b03c4c1e346fbc84db7b9ff9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1").pipe(
      map((data: any) => data.results)
    );
  }

  getSeacrhMovie(term: String){
    return this.getQuery(`https://api.themoviedb.org/3/search/movie?api_key=a481d499b03c4c1e346fbc84db7b9ff9&language=en-US&query=${term}&include_adult=false`).pipe((data: any) => data);
  }



  getMovie(id: String){
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

  getToken(){
    const url = 'https://api.themoviedb.org/3/movie/76341?api_key=a481d499b03c4c1e346fbc84db7b9ff9';
    return this.http.get(url);
  }

}