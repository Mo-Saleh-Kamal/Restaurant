import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم الإرسال  بنجاح ✅");
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <h3>Get In Touch</h3>
        <h1>Contact Us</h1>
        <p>
          Have a question or want to book a table? Send us a message and
          we'll get back to you shortly.
        </p>

        <div className="contact-detail">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-detail-text">
            <strong>Address</strong>
            <span>12 Market Street, Downtown</span>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <div className="contact-detail-text">
            <strong>Phone</strong>
            <span>+20 100 000 0000</span>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">
            <FaClock />
          </div>
          <div className="contact-detail-text">
            <strong>Hours</strong>
            <span>Daily, 10:00 AM – 12:00 AM</span>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
