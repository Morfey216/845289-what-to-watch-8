import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../../store/store';
import FilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

const mapStateToProps = (state: State) => ({
  films: state.data.films,
});

const connector = connect(mapStateToProps);

type MyListProps = ConnectedProps<typeof connector>;

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

export {MyList};
export default connector(MyList);
