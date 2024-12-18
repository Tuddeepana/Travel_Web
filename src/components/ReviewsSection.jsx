const reviews = [
    {
        id: 1,
        name: "Scarlett Thomas",
        review: "This was an incredible experience! The team was very professional.",
        avatar: "🧑‍🎓"
    },
    {id: 2, name: "David Johnson", review: "Amazing adventures with a focus on safety and fun.", avatar: "👨‍💼"},
    {
        id: 3,
        name: "Sophia Williams",
        review: "Highly recommend for anyone looking for a unique trip!",
        avatar: "👩‍💻"
    },
];


const ReviewsSection = () => {
    return (
        <>
            Reviews
            {/*<section className="top-reviews">*/}
            {/*    <div className="container">*/}
            {/*        <h2 className="section-title">Top Reviews</h2>*/}
            {/*        <div className="reviews-container">*/}
            {/*            {reviews.map((review) => (*/}
            {/*                <div key={review.id} className="review-card">*/}
            {/*                    <div className="avatar">{review.avatar}</div>*/}
            {/*                    <p className="review-text">"{review.review}"</p>*/}
            {/*                    <h4 className="reviewer-name">- {review.name}</h4>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    )
}

export default ReviewsSection