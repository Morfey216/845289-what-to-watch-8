import { Reviews } from '../../types/reviews';

type FilmReviewsProps = {
  reviews: Reviews;
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      {/* 3 cards in row */}
      {/* todo */}

      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{user.name}</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016{date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>
      </div>
    </div>
  );
}

export default FilmReviews;
