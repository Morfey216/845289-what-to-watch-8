import { Film, Films } from './films';
import { Reviews } from './reviews';

export type DataState = {
  films: Films;
  genres: string[];
  currentFilm: Film;
  promoFilm: Film;
  reviews: Reviews;
};

export type AppState = {
  genre: string;
};
