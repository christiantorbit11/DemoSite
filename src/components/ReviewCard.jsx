import StarRating from "./StarRating";
import "./ReviewCard.css";

export default function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <span className="review-card__quote">&#8220;</span>
      <StarRating rating={review.rating} />
      <p className="review-card__text">{review.text}</p>
      <div className="review-card__author">
        <span className="review-card__name">{review.name}</span>
        <span className="review-card__location">{review.location}</span>
      </div>
    </div>
  );
}
