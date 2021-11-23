import { combineReducers } from 'redux';
import { reducer as appReducer} from './app/reducer';
import { reducer as dataReducer} from './data/reducer';

export enum NameSpace {
  App = 'app',
  Data = 'data',
}

export const rootReducer = combineReducers({
  [NameSpace.App]: appReducer,
  [NameSpace.Data]: dataReducer,
});

export type State = ReturnType<typeof rootReducer>;
