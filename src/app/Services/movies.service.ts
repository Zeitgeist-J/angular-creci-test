import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {

  private apiKey: String = "a481d499b03c4c1e346fbc84db7b9ff9";
  private UrlMovie: String = "https://api.themoviedb.org/3";
  private x = 1;

  constructor(private http: HttpClient) { }

  getQuery(query: String){
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }
  
  getQueryforMovie(query: String){
    const url = `https://api.themoviedb.org/3/movie/${query}?api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
    this.x = this.x +1;
  }
  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false").pipe(
      map((data: any) => data.results)
    );
  }

  DiscoverMovies(x: String) {
    return this.getQuery("/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=" + x).pipe(
      map((data: any) => data.results)
    );
  }
  getSearchMovie(term: String){
    return this.getQuery(`https://api.themoviedb.org/3/search/movie?api_key=a481d499b03c4c1e346fbc84db7b9ff9&language=en-US&query=${term}&include_adult=false`).pipe((data: any) => data);
  }


  getMovie(id: String){
    return this.getQueryforMovie(`${id}`).pipe(
      map((data: any) => data)
    );
  }

  getFullMovie(id: String){
    return this.getQueryforMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=a481d499b03c4c1e346fbc84db7b9ff9&language=en-US`).pipe(
      map((data: any) => data)
    );
   
 
  }

}