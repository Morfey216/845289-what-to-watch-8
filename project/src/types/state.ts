import { Film, Films } from './films';
import { Reviews } from './reviews';

export type State = {
  genre: string;
  films: Films;
  currentFilm: Film;
  promoFilm: Film;
  reviews: Reviews;
};
