import { Reviews } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';

type FilmReviewsProps = {
  reviews: Reviews;
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {
  const halfOfTheReviews = reviews ? Math.ceil(reviews.length / 2) : 0;

  const getReviewsItems = (reviewItems: Reviews) => (
    reviewItems.map((review) => <ReviewItem key={review.id} review={review} /> )
  );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {getReviewsItems(reviews.slice(0, halfOfTheReviews))}
      </div>
      <div className="film-card__reviews-col">
        {getReviewsItems(reviews.slice(halfOfTheReviews))}
      </div>
    </div>
  );
}

export default FilmReviews;
