
import { Component } from '@angular/core';
import { TvsliderComponent } from "../tvslider/tvslider.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tvhome',
  standalone: true,
  imports: [TvsliderComponent , RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './tvhome.component.html',
  styleUrl: './tvhome.component.css'
})
export class TvhomeComponent {

}
