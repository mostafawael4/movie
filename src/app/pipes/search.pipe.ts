import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interface/movies';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(movies: Result[], userWord: string): Result[] {
    if(!userWord)
    {
      return movies;
    }
    return movies.filter( m=>{
      m.title.toLowerCase().includes(userWord.toLowerCase());
    } )
  }
}
