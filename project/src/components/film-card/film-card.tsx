import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film,
  setActiveFilm(id: number): void,
}

function FilmCard({film, setActiveFilm}: FilmCardProps): JSX.Element {
  const {id, name, previewImage} = film;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveFilm(id)}
      onMouseOut={() => setActiveFilm(0)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
