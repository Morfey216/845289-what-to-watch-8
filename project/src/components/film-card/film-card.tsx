import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film,
  setActiveFilm(id: number): void,
}

function FilmCard({film, setActiveFilm}: FilmCardProps): JSX.Element {
  const {id, name, previewImage} = film;

  const pathToFilm = generatePath(AppRoute.Film, {
    id: id,
  });

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveFilm(id)}
      onMouseOut={() => setActiveFilm(0)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={pathToFilm} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
