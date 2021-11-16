export const MAX_NUMBER_OF_ACTORS = 4;
export const MAX_NUMBER_OF_SIMILAR_FILMS = 4;

export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
