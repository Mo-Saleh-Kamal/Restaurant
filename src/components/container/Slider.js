import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Slider.css";
import smak from "../../assets/slideshow-11 - Copy.jpg";
import برجر from "../../assets/برجر.jpg";
import thumb from "../../assets/8.jpg";


function Slider() {
  return (<>
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="hero-swiper"
    >
\      <SwiperSlide>
        <div className="hero-slide">
          <div className="hero-content">
            <p className="welcome">WELCOME TO DELICIO</p>

            <h1>
              Taste the <br />
              <span>Difference</span>
            </h1>

            <p className="description">
              We serve delicious food made with the finest ingredients. Visit us
              and enjoy our special recipes.
            </p>

            <div className="hero-buttons">
              <button>Explore Menu</button>
              <button className="btn"> Book a Table</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={برجر} alt="Steak" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero-slide">
          <div className="hero-content">
            <p className="welcome">WELCOME TO DELICIO</p>

            <h1>
              Taste the <br />
              <span>Difference</span>
            </h1>

            <p className="description">
              Fresh ingredients and delicious recipes made especially for you.
            </p>

            <div className="hero-buttons">
              <button>Explore Menu</button>
              <button className="btn">Book a Table</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={smak} alt="Burger" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slide">
          <div className="hero-content">
            <p className="welcome">WELCOME TO DELICIO</p>

            <h1>
              Taste the <br />
              <span>Difference</span>
            </h1>

            <p className="description">
              Fresh ingredients and delicious recipes made especially for you.
            </p>

            <div className="hero-buttons">
              <button>Explore Menu</button>
              <button className="btn">Book a Table</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={thumb} alt="Burger" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="mo">
        <h4>Our Specialities</h4>
        <h1>~ Popular Dishes ~</h1>
    </div>
    </>
  );
}

export default Slider;
