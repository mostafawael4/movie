import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FetchDataService } from '../servies/fetch-data.service';
import { Result } from '../interface/nowplaying';

@Component({
  selector: 'app-tvtoprated',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tvtoprated.component.html',
  styleUrl: './tvtoprated.component.css',
})
export class TvtopratedComponent {
  constructor(private _FetchDataService: FetchDataService) {}

  movieList!: any[];
  srcImage: string = 'https://image.tmdb.org/t/p/w500';
  isLoading!:boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this._FetchDataService.topRatedTv().subscribe({
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
