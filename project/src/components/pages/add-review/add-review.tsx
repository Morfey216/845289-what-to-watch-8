import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../../store/store';
import AddReviewForm from '../../add-review-form/add-review-form';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

const mapStateToProps = (state: State) => ({
  currentFilm: state.data.currentFilm,
});

const connector = connect(mapStateToProps);

type AddReviewProps = ConnectedProps<typeof connector>;

function AddReview({currentFilm}: AddReviewProps): JSX.Element {
  const {id, posterImage, backgroundImage, name} = currentFilm;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs id={id} name={name} />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm id={id} />

    </section>
  );
}

export {AddReview};
export default connector(AddReview);
