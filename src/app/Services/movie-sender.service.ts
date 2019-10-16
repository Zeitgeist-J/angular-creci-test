import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MovieSenderService {

  private movie = new Subject<any[]>();

  constructor() { }

  setMovie(movie: any[]){
    this.movie.next(movie);
  }

  getMovie(): Observable<any[]>{
    return this.movie.asObservable();
  }

  clear(){
    this.movie.next(); 
  }
}