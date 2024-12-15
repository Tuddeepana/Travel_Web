// Import necessary libraries

import './PackagesSection.css'; // Separate CSS file for styling

const PackagesSection = () => {
  const packages = [
    {
      title: 'SIGIRIYA',
      days: '10 days trip',
      image: 'path-to-sigiriya-image.jpg',
    },
    {
      title: 'SINHARAJAYA',
      days: '6 days trip',
      image: 'path-to-sinharajaya-image.jpg',
    },
    {
      title: 'ELLA',
      days: '6 days trip',
      image: 'path-to-ella-image.jpg',
    },
  ];

  return (
    <section className="package-section">
      <h2 className="package-title">Top Packages</h2>
      <p className="package-description">
        This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the context which led to the publication of this special issue of Via Tourism Review.
      </p>
      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-info">
              <h3>{pkg.title}</h3>
              <p>{pkg.days}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="custom-package-btn">Custom Package</button>
    </section>
  );
};

export default PackagesSection;
