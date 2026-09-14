import "./About.css";
import aboutImg from "../../assets/images.jfif";
import { PiChefHatThin } from "react-icons/pi";
import { PiForkKnifeBold } from "react-icons/pi";
import { GiPaperArrow } from "react-icons/gi";


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h3>About Us</h3>

        <h1>
          Why Choose <span>Delicio?</span>
        </h1>

        <p>
          We are passionate about food. Our chefs use only the freshest
          ingredients to create delicious meals.
        </p>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <PiChefHatThin style={{ color: "var(--main-color)" }} />
            </div>
            <h4>Expert Chefs</h4>
            <p>Professional chefs with experience.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <GiPaperArrow style={{ color: "green" }} />
            </div>
            <h4>Fresh Ingredients</h4>
            <p>We use only the fresh ingredients.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <PiForkKnifeBold style={{ color: "var(--main-color)" }} />
            </div>
            <h4>Fast Service</h4>
            <p>We serve our customers quickly.</p>
          </div>

          <div className="feature">
            <div className="feature-icon">👥</div>
            <h4>Best Atmosphere</h4>
            <p>Enjoy a warm and friendly place.</p>
          </div>
        </div>
      </div>

      <div className="about-image">
        <img src={aboutImg} alt="Delicio Restaurant" />
      </div>
    </section>
  );
};

export default About;
