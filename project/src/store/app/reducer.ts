import { ALL_GENRES_LABEL } from '../../const';
import { AppState } from '../../types/state';
import { Actions, ActionType } from './actions';

const initialState: AppState = {
  genre: ALL_GENRES_LABEL,
};

export const reducer = (state: AppState = initialState, action: Actions): AppState => {
  switch (action.type) {
    case ActionType.SetGenre:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};
