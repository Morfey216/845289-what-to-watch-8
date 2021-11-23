export enum ActionType {
  SetGenre = 'app/set-genre',
}

const setGenre = (genre: string) => ({
  type: ActionType.SetGenre,
  payload: genre,
} as const);

export {
  setGenre
};

export type Actions = ReturnType<typeof setGenre>;
