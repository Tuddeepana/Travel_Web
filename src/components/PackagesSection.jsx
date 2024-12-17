// Import necessary libraries
import { BsWhatsapp } from "react-icons/bs";
import './PackagesSection.css'; // Separate CSS file for styling

import sigiriya from '../assets/Images/landingPG_Img.jpg'

const PackagesSection = () => {
  const packages = [
    {
      title: 'SIGIRIYA',
      days: '10 days trip',
      image: sigiriya,
    },
    {
      title: 'SINHARAJAYA',
      days: '6 days trip',
      image: sigiriya,
    },
    {
      title: 'ELLA',
      days: '6 days trip',
      image: sigiriya,
    },
  ];

  return (
    <section className="package-section">
      <div className='package-title-container'> 
      <h2 className="package-title">Top Packages</h2>
      <p className="package-description">
        This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the context which led to the publication of this special issue of Via Tourism Review.
      </p>
      </div>
      
      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-info">
              <div>
              <h3>{pkg.title}</h3>
              <p>{pkg.days}</p>
              </div>
              <div>
              <BsWhatsapp size={25} className="items-center m-2 hover:scale-150 "/>

              </div>
              
            </div>
          </div>
        ))}
      </div>
      <button className="custom-package-btn">Custom Package</button>
    </section>
  );
};

export default PackagesSection;
