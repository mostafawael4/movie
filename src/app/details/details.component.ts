import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../servies/fetch-data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(
    private _FetchDataService: FetchDataService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  id!: number;
  details!: any;
  srcImage: string = 'https://image.tmdb.org/t/p/w500';
  isLoading!:boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this._ActivatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        console.log(this.id);
      },
    });

    this._FetchDataService.movieDetails(this.id).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.details = res;
        console.log(res);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}
