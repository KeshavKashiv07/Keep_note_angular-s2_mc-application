import { Component } from '@angular/core';
import { MOVIES } from '../models/movie-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
dashboradTitle = 'Tranding Movies'
movies = MOVIES;
searchText: string = '';

search() {
  if (this.searchText === '' || !this.searchText)
    this.movies = MOVIES;
  else {
    this.movies = MOVIES;
    this.movies = this.movies.filter(movie => movie.movieTitle?.startsWith(this.searchText.toLowerCase()));
}
}

reset() {
  this.searchText = '';
  this.movies = MOVIES;
}


}
