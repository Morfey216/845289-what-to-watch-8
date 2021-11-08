import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsProps = {
  films: Films,
}

function FilmsList({films}: FilmsProps): JSX.Element {
  const [, setActiveFilm] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key = {film.id}
          film = {film}
          setActiveFilm = {setActiveFilm}
        />
      ))}
    </div>
  );
}

export default FilmsList;
