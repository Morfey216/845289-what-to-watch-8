import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsProps = {
  films: Films;
}

function FilmsList({films}: FilmsProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key = {film.id} film = {film} />)}
    </div>
  );
}

export default FilmsList;
