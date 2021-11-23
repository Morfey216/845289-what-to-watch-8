import { useState } from 'react';
import { Link, generatePath, useHistory } from 'react-router-dom';
import { AppRoute, Thumbnail } from '../../const';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {id, name, previewImage} = film;
  const history = useHistory();

  const [isActive, setActive] = useState(false);

  const pathToFilm = generatePath(AppRoute.Film, {id: id});

  const handleFilmCardClick = () => {
    history.push(pathToFilm);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={handleFilmCardClick}
    >
      <div className="small-film-card__image">
        {isActive
          ? <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} />
          : <img src={previewImage} alt={name} width={Thumbnail.Width} height={Thumbnail.Height} />}
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
