import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo-container">
                <h2>LOGO</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <div className="social-icons">
                    <FaTwitter size={20} className="m-2" />
                    <AiFillLinkedin size={20} className="m-2" />
                    <ImFacebook2 size={20} className="m-2" />
                    <FaInstagramSquare size={20} className="m-2" />
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
                    <li>Who are we</li>
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