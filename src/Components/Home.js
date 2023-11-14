import React, { useEffect } from "react";
import "../css/home.css";
import image1 from "../img/nick-scheerbart-nKlld8A1Vy4-unsplash.jpg";
import imgPanel1 from "../img/img1.png";
import imgPanel2 from "../img/img2.png";
import imgPanel3 from "../img/img3.png";
import imgPanel4 from "../img/img4.png";

export const Home = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector(".home-page-bg");
      const foreground = document.querySelector(".home-page-content");
      const bgTitle = document.querySelector(".home-page-bg-content");
      const scrollPosition = window.scrollY;
      const slowScroll = scrollPosition * 0.6;
      const slowScroll2 = scrollPosition * 0.1;

      background.style.transform = `translateY(${slowScroll}px)`;
      //foreground.style.transform = `translateY(-${scrollPosition}px)`;
      bgTitle.style.transform = `translateY(-${slowScroll2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="home-page-main-container">
      <div className="home-page-bg">
        <div></div>
        <div className="home-page-bg-content">
          <h1>
            <span>LEAFY</span> HUES
          </h1>
          <h6>Clothes made from natural resources</h6>
        </div>
        <img src={image1} alt="" />
      </div>
      <div className="home-page-content">
        <div className="home-page-content-panel">
          <h1>
            <span>Sustainable Style</span>, Naturally Yours
          </h1>
          <div className="home-page-content-panel-introduction">
            <div className="panel-wraper">
              <div>
                <h3>Revolutionary Sustainable Fashion</h3>
                <p>
                  Leafy Hues is a revolutionary natural resources clothing
                  company that merges innovation with sustainability. Our
                  mission is to provide eco-conscious individuals with stylish
                  clothing options that not only make a fashion statement but
                  also minimize their carbon footprint.
                </p>
              </div>
              <img className="img-panel" src={imgPanel3} />
            </div>
            <div className="panel-wraper">
              <img className="img-panel" src={imgPanel4} />
              <div>
                <h3>Embrace Minimalism with Leafy Hues</h3>
                <p>
                  At Leafy Hues, we believe in the power of nature and its
                  ability to provide us with the materials necessary for
                  crafting exceptional clothing. We carefully select natural
                  resources like organic cotton, hemp, bamboo, and recycled
                  materials to create our garments, ensuring that every step of
                  our production process is environmentally friendly.
                </p>
              </div>
            </div>
            <div className="panel-wraper">
              <div>
                <h3>Sustainable Style for a Greener Future</h3>
                <p>
                  Join us in making a sustainable choice, and let's create a
                  better future - one fashionable and eco-friendly garment at a
                  time. Welcome to Leafy Hues, where sustainable style is
                  naturally yours.
                </p>
              </div>
              <img className="img-panel" src={imgPanel1} />
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-main-container-footer">
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
        </ul>
      </div>
    </div>
  );
};
