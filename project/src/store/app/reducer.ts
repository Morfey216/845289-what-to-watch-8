import { AppState } from '../../types/state';
import { Actions, ActionType } from './actions';

const initialState: AppState = {
  genre: 'All genres',
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
