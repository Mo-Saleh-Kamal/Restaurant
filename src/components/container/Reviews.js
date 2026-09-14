import "./Reviews.css";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Regular guest",
    quote:
      "The classic burger is the best I've had in the city. Everything tastes fresh, and the staff always remember our order.",
  },
  {
    name: "James Okafor",
    role: "Food blogger",
    quote:
      "Delicio's pasta is rich without being heavy. Great portions, fair prices, and a warm atmosphere to match.",
  },
  {
    name: "Ahmed Saleh",
    role: "First-time visitor",
    quote:
      "Booked a table for a birthday dinner and it was perfect. Quick service and the chocolate cake stole the show.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h3>Testimonials</h3>
      <h1>What Our Guests Say</h1>

      <div className="review-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.name}>
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">"{review.quote}"</p>
            <div className="review-person">
              <div className="review-avatar">{review.name.charAt(0)}</div>
              <div>
                <div className="review-name">{review.name}</div>
                <div className="review-role">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
