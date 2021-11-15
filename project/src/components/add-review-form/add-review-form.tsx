import { ChangeEvent, useState } from 'react';
import RatingInputField from '../rating-input-field/rating-input-field';

type AddReviewFormProps = {
  id: number;
}

const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function AddReviewForm({id}: AddReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratings.map((itRating) => (
              <RatingInputField
                key = {`star-${itRating}`}
                ratingId = {itRating}
                value = {itRating}
                isChecked = {itRating === rating}
                setRating={setRating}
              />
            ))}

          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            value={review}
            onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => setReview(target.value)}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
