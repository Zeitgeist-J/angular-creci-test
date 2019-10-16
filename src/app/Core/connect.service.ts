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
  getSearchMovie(term: String){
    return this.getQuery(`https://api.themoviedb.org/3/search/movie?api_key=a481d499b03c4c1e346fbc84db7b9ff9&language=en-US&query=${term}&include_adult=false`).pipe((data: any) => data);
  }


  getMovie(id: String){
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }/*
  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  getQueryforMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  getSearchMovie(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

  getPelicula(id: string) {
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

  // Otra alternativa para hacer la peticion
  /*   getDiscoverMovies() {
  const url = `${
    this.urlMoviedb
  }/discover/movie?sort_by=popularity.desc&api_key=${
    this.apikey
  }&language=es&callback=JSONP_CALLBACK`;
  return this.http.jsonp(url, "").pipe(map((res: any) => res.results));
} */

 

}