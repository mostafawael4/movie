import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FetchDataService } from '../servies/fetch-data.service';
import { Result } from '../interface/nowplaying';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CarouselModule,
    RouterLink,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  constructor(private _FetchDataService: FetchDataService) {}

  nowPlaying!: Result[];
  isLoading!:boolean;
  srcImage: string = 'https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this.isLoading = true;
    this._FetchDataService.nowPlaying().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.nowPlaying = res.results;
        console.log(this.nowPlaying);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 700,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
