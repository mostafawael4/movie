import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { nowObject } from '../interface/nowplaying';
import { RootObject } from '../interface/movies';
// import { movieObject } from '../interface/movies-data';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private _HttpClient: HttpClient) {}

  getMovies(): Observable<any> {
    return this._HttpClient.get<any>(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=41ac95066d70a16907cb97ccf973e30b'
    );
  }

  nowPlaying(): Observable<nowObject> {
    return this._HttpClient.get<nowObject>(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=41ac95066d70a16907cb97ccf973e30b'
    );
  }
  nowPlayingTv(): Observable<nowObject> {
    return this._HttpClient.get<nowObject>(
      'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=41ac95066d70a16907cb97ccf973e30b'
    );
  }

  movieDetails(id: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=41ac95066d70a16907cb97ccf973e30b`
    );
  }
  tvDetails(id: number): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=41ac95066d70a16907cb97ccf973e30b`
    );
  }

  popularMovie(): Observable<RootObject> {
    return this._HttpClient.get<RootObject>(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=41ac95066d70a16907cb97ccf973e30b'
    );
  }
  popularTv(): Observable<RootObject> {
    return this._HttpClient.get<RootObject>(
      'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=41ac95066d70a16907cb97ccf973e30b'
    );
  }
  topRatedMovie(): Observable<RootObject> {
    return this._HttpClient.get<RootObject>(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=41ac95066d70a16907cb97ccf973e30b'
    );
  }
  topRatedTv(): Observable<RootObject> {
    return this._HttpClient.get<RootObject>(
      'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=41ac95066d70a16907cb97ccf973e30b'
    );
  }
}
