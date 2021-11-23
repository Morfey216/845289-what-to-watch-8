import { Films } from '../types/films';

export enum ActionType {
  SetGenre = 'data/set-genre',
  SetFilms = 'data/set-films',
}

const setGenre = (genre: string) => ({
  type: ActionType.SetGenre,
  payload: { genre },
} as const);

const setFilms = (films: Films) => ({
  type: ActionType.SetFilms,
  payload: { films },
} as const);

export {
  setGenre,
  setFilms
};

export type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof setFilms>;
