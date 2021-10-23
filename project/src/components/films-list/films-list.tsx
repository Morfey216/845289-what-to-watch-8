import FilmCard from '../film-card/film-card';

function FilmsList(): JSX.Element {
  return (
    <div className="catalog__films-list">
      <FilmCard />
    </div>
  );
}

export default FilmsList;
