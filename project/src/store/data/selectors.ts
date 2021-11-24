import {createSelector} from 'reselect';
import { ALL_GENRES_LABEL, MAX_NUMBER_OF_GENRES } from '../../const';
import { Film, Films } from '../../types/films';
import { NameSpace } from '../reducer';
import { State } from '../store';

const NAME_SPACE = NameSpace.Data;

export const getFilms = (state: State): Films => state[NAME_SPACE].films;
export const getPromoFilm = (state: State): Film => state[NAME_SPACE].promoFilm;

export const getGenres = createSelector(
  getFilms,
  (films) => {
    const uniqueGenres: Set<string> = new Set();
    const genres = [ALL_GENRES_LABEL];

    films.forEach((film) => {
      uniqueGenres.add(film.genre);
    });

    uniqueGenres.forEach((genre: string) => genres.push(genre));

    return genres.slice(0, Math.min(genres.length, MAX_NUMBER_OF_GENRES));
  },
);
