import { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { ALL_GENRES_LABEL, FILMS_SCREENING_STEP } from '../../const';
import { getFilms, getGenres } from '../../store/data/selectors';
import { Genre } from '../../types/genres';
import { getfilmsByGenre } from '../../utils/film';
import FilmsList from '../films-list/films-list';

function Catalog(): JSX.Element {
  const genres = useSelector(getGenres);
  const films = useSelector(getFilms);

  const [activeGenre, setActiveGenre] = useState(ALL_GENRES_LABEL);
  const [filmsCount, setFilmsCount] = useState(FILMS_SCREENING_STEP);

  const filmsByGenre = getfilmsByGenre(films, activeGenre);
  const filmsList = filmsByGenre.slice(0, Math.min(filmsByGenre.length, filmsCount));

  const handleGenresClick = (evt: MouseEvent<HTMLLIElement>, genre: Genre) => {
    evt.preventDefault();
    setActiveGenre(genre);
    setFilmsCount(FILMS_SCREENING_STEP);
  };

  const handleShowMoreButtonClick = () => {
    setFilmsCount(filmsCount + FILMS_SCREENING_STEP);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li
            key={genre}
            className={genre === activeGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            onClick={(evt) => handleGenresClick(evt, genre)}
          >
            <a href="/" className="catalog__genres-link">{genre}</a>
          </li>
        ))}
      </ul>

      <FilmsList films = {filmsList} />

      {filmsCount < filmsByGenre.length && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMoreButtonClick} >Show more</button>
        </div>
      )}
    </section>
  );
}

export default Catalog;
