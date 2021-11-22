import { films } from '../mocks/films';
import { reviews } from '../mocks/reviews';
import { State } from '../types/state';
import { Actions, ActionType } from './action';

const initialState: State = {
  genre: 'All genres',
  films: films,
  currentFilm: films[0],
  promoFilm: films[0],
  reviews: reviews,
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetGenre:
      return {
        ...state,
        genre: action.payload.genre,
      };
    case ActionType.SetFilms:
      return {
        ...state,
        films: action.payload.films,
      };
    default:
      return state;
  }
};
