// import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
// import VideoPlayer from '../video-player/video-player';

type FilmsProps = {
  films: Films;
}

function FilmsList({films}: FilmsProps): JSX.Element {
  // const [activeFilm, setActiveFilm] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
      // const isActiveFilm = activeFilm === film.id;

        (
          <FilmCard key = {film.id} film = {film}>
            {/* {isActiveFilm
              ? (<VideoPlayer src={film.previewVideoLink} poster={film.previewImage} isPlaying={isActiveFilm} />)
              : null} */}
          </FilmCard>
        ),
      )}
    </div>
  );
}

export default FilmsList;
