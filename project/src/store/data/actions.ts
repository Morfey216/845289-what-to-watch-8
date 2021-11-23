import { Films } from '../../types/films';

export enum ActionType {
  SetFilms = 'data/set-films',
}

const setFilms = (films: Films) => ({
  type: ActionType.SetFilms,
  payload: films,
} as const);

export {
  setFilms
};

export type Actions = ReturnType<typeof setFilms>;
