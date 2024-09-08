import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../servies/fetch-data.service';
import { Result } from '../interface/nowplaying';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toprated',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './toprated.component.html',
  styleUrl: './toprated.component.css',
})
export class TopratedComponent implements OnInit {
  constructor(private _FetchDataService: FetchDataService) {}

  movieList!: Result[];
  srcImage: string = 'https://image.tmdb.org/t/p/w500';
  isLoading!:boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this._FetchDataService.topRatedMovie().subscribe({
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
