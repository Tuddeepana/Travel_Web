
import "./ContactFormSection.css";

const ContactFormSection = () => {
    return (
      <div className="contact-form-section">
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
  
        <div className="contact-details">
          <div className="contact-item">
            <i className="icon-phone"></i>
            <p>Give Us a Call</p>
            <p>+91 098 098 8333</p>
          </div>
          <div className="contact-item">
            <i className="icon-email"></i>
            <p>Send Us an Email</p>
            <p>ThisaTravel@Gmail.com</p>
          </div>
          <div className="social-icons">
            <i className="icon-twitter"></i>
            <i className="icon-linkedin"></i>
            <i className="icon-instagram"></i>
            <i className="icon-facebook"></i>
          </div>
        </div>
      </div>
    );
  };
  export default ContactFormSection;