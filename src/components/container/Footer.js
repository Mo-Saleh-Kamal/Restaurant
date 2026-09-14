import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* About */}
        <div className="footer-box">
          <h2 className="footer-logo">DELICIO</h2>
          <p>
            Delicious food, fresh ingredients and unforgettable moments. Enjoy
            our special meals made with love.
          </p>

          <div className="social">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>
            <FaLocationDot />
            Cairo, Egypt
          </p>

          <p>
            <FaPhone />
            +20 123 456 7890
          </p>

          <p>
            <FaEnvelope />
            info@delicio.com
          </p>
        </div>

        {/* Opening Hours */}
        <div className="footer-box">
          <h3>Opening Hours</h3>

          <p>Monday - Friday</p>
          <span>10:00 AM - 12:00 AM</span>

          <p>Saturday - Sunday</p>
          <span>11:00 AM - 01:00 AM</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <span>DELICIO</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
