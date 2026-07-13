import ReviewCard from "./ReviewCard";
import "./ReviewsMarquee.css";

export default function ReviewsMarquee({ reviews }) {
  const track = [...reviews, ...reviews];
  return (
    <div className="reviews-marquee">
      <div className="reviews-marquee__fade reviews-marquee__fade--left" />
      <div className="reviews-marquee__fade reviews-marquee__fade--right" />
      <div className="reviews-marquee__track">
        {track.map((r, i) => (
          <div className="reviews-marquee__item" key={`${r.name}-${i}`}>
            <ReviewCard review={r} />
          </div>
        ))}
      </div>
    </div>
  );
}
