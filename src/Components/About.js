import React, { useEffect } from "react";
import "../css/about.css";
import image1 from "../img/nick-scheerbart-nKlld8A1Vy4-unsplash.jpg";
import imgPanel1 from "../img/img1.png";
import imgPanel2 from "../img/img2.png";
import imgPanel3 from "../img/img3.png";
import imgPanel4 from "../img/img4.png";

export const About = (props) => {
  useEffect(() => {
    const background = document.querySelector(".about-page-bg");
    const bgTitle = document.querySelector(".about-page-bg-content");
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const slowScroll = scrollPosition * 0.6;
      const slowScroll2 = scrollPosition * 0.1;

      background.style.transform = `translateY(${slowScroll}px)`;
      bgTitle.style.transform = `translateY(-${slowScroll2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="about-page-main-container">
      <div className="about-page-bg">
        <div></div>
        <div className="about-page-bg-content">
          <h1>
            <span>LEAFY</span> HUES
          </h1>
          <h6>Clothes made from natural resources</h6>
        </div>
        <img src={image1} alt="" />
      </div>
      <div className="about-page-content ctnt">
        <div className="about-page-content-panel">
          <h1>
            <span>Sustainable Style</span>, Naturally Yours
          </h1>
          <div className="about-page-content-panel-introduction">
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
    </div>
  );
};
