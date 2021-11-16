import { PropsWithChildren, useRef, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, DELAY_PLAYBACK, Thumbnail } from '../../const';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: PropsWithChildren<FilmCardProps>): JSX.Element {
  const {id, name, previewImage} = film;
  const [isActiveFilm, setActiveFilm] = useState(false);
  const activeRef = useRef<boolean>(false);

  const pathToFilm = generatePath(AppRoute.Film, {id: id});

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        activeRef.current = true;

        setTimeout(() => {
          if (activeRef.current) {
            setActiveFilm(true);
          }
        }, DELAY_PLAYBACK);
      }}

      onMouseLeave={() => {
        activeRef.current = false;
        setActiveFilm(false);
      }}
    >
      <div className="small-film-card__image">
        {isActiveFilm
          ? <VideoPlayer src={film.previewVideoLink} />
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
