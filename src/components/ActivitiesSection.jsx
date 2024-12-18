import "./ActivitiesSection.css";

const activities = [
  { id: 1, title: "Camping", icon: "🏕", description: "Explore beautiful landscapes and camp under the stars." },
  { id: 2, title: "Adventure", icon: "🧗", description: "Take on thrilling adventures and conquer your fears." },
  { id: 3, title: "Trekking", icon: "🥾", description: "Enjoy breathtaking treks across mountains and hills." },
  { id: 4, title: "Off Road", icon: "🚙", description: "Discover remote areas and go off the beaten path." },
  { id: 5, title: "Camp Fire", icon: "🔥", description: "Relax and bond around a warm and cozy campfire." },
  { id: 6, title: "Exploring", icon: "🗺️", description: "Explore new places and gain unforgettable experiences." },
];

const services = [
  { id: 1, title: "Service One", description: "High-quality services for your adventure needs." },
  { id: 2, title: "Service Two", description: "Professional guides to ensure your safety and enjoyment." },
  { id: 3, title: "Service Three", description: "Affordable packages tailored to your preferences." },
];

const reviews = [
  { id: 1, name: "Scarlett Thomas", review: "This was an incredible experience! The team was very professional.", avatar: "🧑‍🎓" },
  { id: 2, name: "David Johnson", review: "Amazing adventures with a focus on safety and fun.", avatar: "👨‍💼" },
  { id: 3, name: "Sophia Williams", review: "Highly recommend for anyone looking for a unique trip!", avatar: "👩‍💻" },
];

const ActivitiesSection = () => {
  return (
    <div>
      {/* Top Activities Section */}
      <section className="activities-section">
        <div className="container">
          <h2 className="section-title">Top Activities</h2>
          <p className="section-description">
            This text presents my research journey on the topic of Music and Tourism imaginations and gives
            the context which led to the publication of this special issue of We Tourism Review.
          </p>
          <div className="activity-cards">
            {activities.map((activity) => (
              <div key={activity.id} className="card">
                <div className="icon">{activity.icon}</div>
                <h3 className="card-title">{activity.title}</h3>
                <p className="card-description">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container-Y-Choose">
          
          <div className="textContainer">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-description">
            Discover the reasons why our clients love traveling with us.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure dolorem eos officiis exercitationem molestias esse possimus ea atque. Eius non distinctio mollitia tempore autem, tenetur dolorum dolore quidem numquam!
          </p>
          </div>
          <div className="service-cards">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Reviews Section */}
      <section className="top-reviews">
        <div className="container">
          <h2 className="section-title">Top Reviews</h2>
          <div className="reviews-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="avatar">{review.avatar}</div>
                <p className="review-text">"{review.review}"</p>
                <h4 className="reviewer-name">- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesSection;
