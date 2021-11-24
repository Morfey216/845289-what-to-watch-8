import {createSelector} from 'reselect';
import { ALL_GENRES_LABEL } from '../../const';
import { Films } from '../../types/films';
import { NameSpace } from '../reducer';
import { State } from '../store';

const NAME_SPACE = NameSpace.Data;

export const getFilms = (state: State): Films => state[NAME_SPACE].films;

export const getGenres = createSelector(
  getFilms,
  (films) => {
    const uniqueGenres = new Set();
    const genres = [];

    films.forEach((film) => {
      uniqueGenres.add(film.genre);
    });

    uniqueGenres.forEach((genre) => genres.push(genre));

    return genres.unshift(ALL_GENRES_LABEL);
  },
);
