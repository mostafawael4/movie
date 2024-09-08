import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../servies/fetch-data.service';
import { Result } from '../interface/movies';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css',
})
export class PopularComponent implements OnInit {
  constructor(private _FetchDataService: FetchDataService) {}

  movieList!: Result[];
  srcImage: string = 'https://image.tmdb.org/t/p/w500';
  isLoading!:boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this._FetchDataService.popularMovie().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.movieList = res.results;
        console.log(res);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
} 
