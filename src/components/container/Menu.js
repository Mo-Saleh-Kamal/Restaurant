import "./Menu.css";
import Burger from "../../assets/photo_2026-09-02_19-33-48.jpg";
import Pizza from "../../assets/photo_2026-09-03_12-35-49.jpg";
import Pasta from "../../assets/photo_2026-09-03_12-42-05.jpg";
import Cake from "../../assets/photo_2026-09-03_12-43-31.jpg";
import fish from "../../assets/photo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Menu = () => {
  return (
    <div className="dev">
      <section id="menu">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="burger">
              <img src={Burger} alt="aaaa" />
              <div>
                <div className="name">
                  <h2>Classic Burger</h2>
                  <span className="dollar">$12.99</span>
                </div>
                <div className="desc">
                  <p>
                    Beef patty with cheese, lettuce, tomato and our special
                    sauce.
                  </p>
                  <button className="btn">
                    <FaShoppingCart className="btn1" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="burger">
              <img src={Pizza} alt="aaaa" />
              <div>
                <div className="name">
                  <h2>Pepperoni Pizza</h2>
                  <span className="dollar">$14.99</span>
                </div>
                <div className="desc">
                  <p>Fresh pepperoni, mozzarella cheese, and tomato sauce.</p>
                  <button className="btn">
                    <FaShoppingCart className="btn1" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="burger">
              <img src={Pasta} alt="aaaa" />
              <div>
                <div className="name">
                  <h2>Creamy Pasta</h2>
                  <span className="dollar">$13.50</span>
                </div>
                <div className="desc">
                  <p>Pasta with creamy sauce, chicken and parmesan cheese.</p>
                  <button className="btn">
                    <FaShoppingCart className="btn1" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="burger">
              <img src={Cake} alt="aaaa" />
              <div>
                <div className="name">
                  <h2>Chocolate Cake</h2>
                  <span className="dollar">$6.99</span>
                </div>
                <div className="desc">
                  <p>Rich chocolate cake served with chocolate sauce.</p>
                  <button className="btn">
                    <FaShoppingCart className="btn1" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="burger">
              <img src={fish} alt="aaaa" />
              <div>
                <div className="name">
                  <h2>Steak Meat</h2>
                  <span className="dollar">$25.99</span>
                </div>
                <div className="desc">
                  <p>Rich steak meat served with vegetables .</p>
                  <button className="btn">
                    <FaShoppingCart className="btn1" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        ;
      </section>
      <h2 className="offer">~ Offers ~</h2>
    </div>
  );
};

export default Menu;
