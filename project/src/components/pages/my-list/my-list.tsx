import { Films } from '../../../types/films';
import FilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

type MyListProps = {
  films: Films,
}

function MyList({films}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films = {films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
