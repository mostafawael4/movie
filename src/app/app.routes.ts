import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TopratedComponent } from './toprated/toprated.component';
import { PopularComponent } from './popular/popular.component';
import { TvhomeComponent } from './tvhome/tvhome.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { TvtopratedComponent } from './tvtoprated/tvtoprated.component';
import { TvpopularComponent } from './tvpopular/tvpopular.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
      { path: 'toprated', component: TopratedComponent },
      { path: 'popular', component: PopularComponent },
    ],
  },
  {
    path: 'tvhome',
    component: TvhomeComponent,
    children: [
      { path: '', redirectTo: 'tvpopular', pathMatch: 'full' },
      { path: 'tvtoprated', component: TvtopratedComponent },
      { path: 'tvpopular', component: TvpopularComponent },
    ],
  },
  { path: 'movieDetails/:id', component: DetailsComponent },
  { path: 'tvDetails/:id', component: TvdetailsComponent },
];
