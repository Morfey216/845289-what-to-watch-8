import { Film, Films } from './films';
import { Reviews } from './reviews';

export type DataState = {
  films: Films;
  currentFilm: Film;
  promoFilm: Film;
  reviews: Reviews;
};

export type AppState = {
  genre: string;
};
