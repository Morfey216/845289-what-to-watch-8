import { Film } from '../../../types/films';
import AddReviewForm from '../../add-review-form/add-review-form';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

type AddReviewProps = {
  film: Film,
}

function AddReview({film}: AddReviewProps): JSX.Element {
  const {id, posterImage, backgroundImage, name} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>

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

export default AddReview;
