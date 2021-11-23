import { MAX_NUMBER_OF_ACTORS } from '../../const';
import { Film } from '../../types/films';
import { generateFilmRatingDescription } from '../../utils/film';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({film}: FilmOverviewProps):JSX.Element {
  const {rating, scoresCount, director, starring} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{generateFilmRatingDescription(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring">
          <strong>
            Starring: {film.starring.length > MAX_NUMBER_OF_ACTORS
              ? `${starring.slice(0, MAX_NUMBER_OF_ACTORS).map((it) => it).join(', ')} and other`
              : `${starring.map((it) => it).join(', ')}`}
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
