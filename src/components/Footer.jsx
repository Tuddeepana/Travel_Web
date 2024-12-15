import './Footer.css';
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-logo">
          <h2>LOGO</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <div className="social-icons">
            <i className="icon-twitter"></i>
            <i className="icon-youtube"></i>
            <i className="icon-instagram"></i>
            <i className="icon-facebook"></i>
          </div>
        </div>
  
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Top Destinations</li>
            <li>Our Packages</li>
            <li>Top Activities</li>
          </ul>
        </div>
  
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>How are we</li>
            <li>Terms of service</li>
          </ul>
        </div>
  
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Location Location Location...</p>
          <p>+94 123 456 7890</p>
          <p>thisatravel@mail.com</p>
        </div>
      </footer>
    );
  };

  export default Footer;