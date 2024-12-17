import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

import "./ContactFormSection.css";

const ContactFormSection = () => {
    return (
      <div className="contact-form-section">
        <div className="left-sub-container">
          <h1>Let’s Plan your Ideal Vacation</h1>
          <p>Fill up the form below and have our agent help you with your ideal travel in Sri Lanka.</p>
    
          <form className="form">
            <div className="form-row">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" className="form-input" />
              <select className="form-input">
                <option value="">Select Service</option>
                <option value="tour">Tour</option>
                <option value="accommodation">Accommodation</option>
                <option value="transport">Transport</option>
              </select>
            </div>
            <textarea
              placeholder="Travel Brief..."
              className="form-textarea"
            ></textarea>
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
  
        <div className="contact-details">
          <div className="contact-item ">
            <div className="  border rounded-md border-teal-700  ">
            <IoCall size={35} className="items-center m-2  "/>
            </div>
            <div>
            <p>Give Us a Call</p>
            <p>+91 098 098 8333</p>
            </div>
          </div>

          <div className="contact-item ">
            <div className="  border rounded-md border-teal-700  ">
            <IoIosMail  size={35} className="items-center m-2  "/>
            </div>
            <div>
            <p>Send Us an Email</p>
            <p>ThisaTravel@Gmail.com</p>
            </div>
          </div>

         
          <div className="social-icons">
            <div className="  border rounded-md border-teal-700 hover:scale-110 transition-transform   ">
              <FaTwitter  size={15} className="items-center m-2  "/>
            </div>
            <div className="  border rounded-md border-teal-700 hover:scale-110 transition-transform ">
            <AiFillLinkedin  size={15} className="items-center m-2  "/>
            </div>
            <div className="  border rounded-md border-teal-700 hover:scale-110 transition-transform  ">
              <ImFacebook2  size={15} className="items-center m-2  "/>
            </div>
            <div className="  border rounded-md border-teal-700 hover:scale-110 transition-transform  ">
              <FaInstagramSquare  size={15} className="items-center m-2  "/>
            </div>
            </div>
        </div>

      </div>
    );
  };
  export default ContactFormSection;