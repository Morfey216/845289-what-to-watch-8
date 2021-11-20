import { MAX_NUMBER_OF_SIMILAR_FILMS } from '../const';
import { Films } from '../types/films';

export const generateFilmRatingDescription = (rating: number): string => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    default:
      return 'Awesome';
  }
};

export const getSimilarFilms = (films: Films, genre: string): Films => {
  const similarFilms = films.filter((itFilm) => itFilm.genre === genre);

  return (
    similarFilms.length > MAX_NUMBER_OF_SIMILAR_FILMS
      ? similarFilms.slice(0, MAX_NUMBER_OF_SIMILAR_FILMS)
      : similarFilms
  );
};
