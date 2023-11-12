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
                <Link to="/about">About</Link>
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
      </div>
    </Router>
  );
}

export default App;
