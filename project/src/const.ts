export const MAX_NUMBER_OF_ACTORS = 4;
export const MAX_NUMBER_OF_SIMILAR_FILMS = 4;
export const MAX_NUMBER_OF_GENRES = 10;
export const FILMS_SCREENING_STEP = 8;
export const DELAY_PLAYBACK = 1000;

export const MINUTES_IN_HOUR = 60;
export const ALL_GENRES_LABEL = 'All genres';

export enum Thumbnail {
  Width = 280,
  Height = 175
}

export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export enum CurrentTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const TAB_ITEMS = [
  CurrentTab.Overview,
  CurrentTab.Details,
  CurrentTab.Reviews,
];

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
