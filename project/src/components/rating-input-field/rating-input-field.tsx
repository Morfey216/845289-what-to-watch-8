type RatingInputFieldProps = {
  ratingId: number;
  value: number;
  isChecked: boolean;
  setRating: (id: number) => void;
}

function RatingInputField({ratingId, value, isChecked, setRating}: RatingInputFieldProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${ratingId}`}
        type="radio"
        name="rating"
        value={value}
        checked={isChecked}
        onChange={() => setRating(ratingId)}
      />
      <label className="rating__label" htmlFor={`star-${ratingId}`}>Rating {ratingId}</label>
    </>
  );
}

export default RatingInputField;
