import Slider from "react-slick";
import "./DestinationSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destinations = [
  { id: 1, image: "https://via.placeholder.com/400x300", alt: "City Road" },
  { id: 2, image: "https://via.placeholder.com/400x300", alt: "Canal Views" },
  { id: 3, image: "https://via.placeholder.com/400x300", alt: "Colorful Village" },
  { id: 4, image: "https://via.placeholder.com/400x300", alt: "Mountain Lake" },
  { id: 5, image: "https://via.placeholder.com/400x300", alt: "Hot Air Balloons" },
];

const DestinationSection = () => {
  // Settings for react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="destination-section">
      <div className="header-text">
        <h1>Top Destinations</h1>
        <p>
          This text presents my research journey on the topic of Music and
          Tourism Imaginaries and gives the context which led to the publication
          of this special issue of Via Tourism Review.
        </p>
      </div>
      <Slider {...settings} className="destination-carousel">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.alt} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DestinationSection;
