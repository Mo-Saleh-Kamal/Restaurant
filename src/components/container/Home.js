
import "./Home.css";
import logo from "../../assets/wwwwwww-removebg-preview.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Home = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <>
      <section id="home">
        <header>
          <a href="#home"><img className="logo" src={logo} alt="Logo" /></a>

          <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
            <a
              className={active === "Home" ? "active" : ""}
              onClick={() => handleClick("Home")}
              href="#home"
            >
              Home
            </a>

            <a
              className={active === "Menu" ? "active" : ""}
              onClick={() => handleClick("Menu")}
              href="#menu"
            >
              Menu
            </a>

            <a
              className={active === "Offers" ? "active" : ""}
              onClick={() => handleClick("Offers")}
              href="#offers"
            >
              Offers
            </a>

            <a
              className={active === "About" ? "active" : ""}
              onClick={() => handleClick("About")}
              href="#about"
            >
              About
            </a>

            <a
              className={active === "Reviews" ? "active" : ""}
              onClick={() => handleClick("Reviews")}
              href="#reviews"
            >
              Reviews
            </a>

            <a
              className={active === "Contact" ? "active" : ""}
              onClick={() => handleClick("Contact")}
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <div className="header-actions">
            <div className="cart-box">
              <FaShoppingCart className="card" />
              <span className="sale">0</span>
            </div>

            <button className="btn">Order Now</button>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </header>

        <hr />
      </section>
    </>
  );
};

export default Home;