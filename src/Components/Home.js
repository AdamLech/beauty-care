import React, { useEffect } from "react";
import "../css/home.css";
import image1 from "../img/main-bg.jpg";

export const Home = (props) => {
  console.log(window.innerHeight);
  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector(".home-page-bg");
      const foreground = document.querySelector(".home-page-content");
      const scrollPosition = window.scrollY;
      const slowScroll = scrollPosition * 0.4;

      background.style.transform = `translateY(${slowScroll}px)`;
      foreground.style.transform = `translateY(-${scrollPosition}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="home-page-main-container">
      <img className="home-page-bg" src={image1} alt="" />

      <div className="home-page-content">
        <div className="image-panel main-page-content-panel"></div>
        <div className="text-panel main-page-content-panel"></div>
        <div className="text-panel main-page-content-panel"></div>
        <div className="image-panel main-page-content-panel"></div>
      </div>
    </div>
  );
};
