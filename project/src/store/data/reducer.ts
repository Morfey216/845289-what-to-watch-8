import { films } from '../../mocks/films';
import { reviews } from '../../mocks/reviews';
import { DataState } from '../../types/state';
import { Actions, ActionType } from './actions';

const initialState: DataState = {
  films: films,
  currentFilm: films[0],
  promoFilm: films[0],
  reviews: reviews,
};

export const reducer = (state: DataState = initialState, action: Actions): DataState => {
  switch (action.type) {
    case ActionType.SetFilms:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
};
