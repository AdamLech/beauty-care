import {
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Products } from "./Components/Products";
import { ShopLocation } from "./Components/ShopLocation";

function App() {
  window.addEventListener("scroll", function () {
    const fadeElement = document.querySelector(".main-container-header");
    const scrollPosition = window.scrollY;
    const middleOfPage = window.innerHeight / 1.5;

    if (scrollPosition >= middleOfPage) {
      fadeElement.style.backgroundColor = "rgba(150, 150, 150, 1)";
    } else {
      const bg = 1 - ((middleOfPage - scrollPosition) / middleOfPage) * 0.5;
      fadeElement.style.backgroundColor = "rgba(150, 150, 150, " + bg + ")";
    }
  });
  return (
    <Router>
      <div className="main-container">
        <div className="main-container-header">
          <div className="navbar">
            <ul>
              <li className="nav-bar-element">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-bar-element">
                <Link to="/products">Products</Link>
              </li>
              <li className="nav-bar-element">
                <Link to="/about">About us</Link>
              </li>
              <li className="nav-bar-element">
                <Link to="/shop-location">Location</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-container-routes-wraper">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop-location" element={<ShopLocation />} />
          </Routes>
        </div>
        <div className="main-container-footer">
          <p>© 2022 Leafy Hues. All rights reserved.</p>
          <ul>
            <li>123 Main Street, City, Country</li>
            <li>Phone: 123-456-789</li>
            <li>Email: info@example.com</li>
          </ul>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/next"
                title="next icons"
              >
                Next icons created by
                <br /> Kiranshastry - Flaticon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
