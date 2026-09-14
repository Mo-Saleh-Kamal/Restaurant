import "./App.css";
import Contact from "./components/container/Contact";
import Slider from "./components/container/Slider";
import Offers from "./components/container/Offers";
import Home from "./components/container/Home";
import Menu from "./components/container/Menu";
import About from "./components/container/About";
import Reviews from "./components/container/Reviews";
import Footer from "./components/container/Footer";

function App() {
  return (
    <div>
      <Home />
      <Slider />
      <Menu />
      <Offers />
      <About />
      <Reviews />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
