
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FetchDataService } from '../servies/fetch-data.service';
import { SliderComponent } from "../slider/slider.component";
import { PopularComponent } from "../popular/popular.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    RouterLink,
    PopularComponent,
    RouterOutlet,
    RouterLinkActive,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  



  
}
