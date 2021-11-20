import { Review } from '../../types/reviews';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const { comment, date, user, rating } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">December 24, 2016{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewItem;
