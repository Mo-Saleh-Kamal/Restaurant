import "./Offers.css";
import steak from "../../assets/post-thumb-5.jpg";
import { useState, useEffect } from "react";
const Offers = () => {
  const [time, setTime] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 58,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1,
          };
        }

        if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        }

        if (prev.hours > 0) {
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }

        if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <section id="offers" className="offers">
        <div className="collect-all">
          <div className="mix">

          <div>
            <img className="steak" src={steak} alt="aaa" />
          </div>
          <div className="collect">
            <h3 className="special">Special Offer</h3>
            <h1>Get 20% Off On Your First Order</h1>
            <p>Enjoy 20% discount on your first order.</p>
            <span className="spant">
              Use code: <span className="code">DELICIO20</span>
            </span>
          </div>
          </div>
          <div className="right-side">
            <div className="count">
              <div className="count-down">
                <span>{time.days}</span>
                <span>Days</span>
              </div>

              <div className="count-down" id="mo">
                <span>{time.hours}</span>
                <span>Hours</span>
              </div>

              <div className="count-down" id="me">
                <span>{time.minutes}</span>
                <span>Mintues</span>
              </div>

              <div className="count-down" id="ma">
                <span>{time.seconds}</span>
                <span>Seconds</span>
              </div>
            </div>
            <button className="btn">Order Now </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
