export default function StarRating({ rating = 5, max = 5 }) {
  return (
    <span className="star-rating" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4">
          <path d="M12 2.5l2.94 6.32 6.87.72-5.1 4.75 1.4 6.9L12 17.9l-6.11 3.29 1.4-6.9-5.1-4.75 6.87-.72L12 2.5z" strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  );
}
