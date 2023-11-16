import React from "react";
import "../css/home.css";
import homePageBg from "../img/homepagebg.jpg";

export const Home = (props) => {
  const background = document.querySelector(".home-page-main-bg");
  // const bgTitle = document.querySelector(".about-page-bg-content");
  const scrollPosition = window.scrollY;
  const slowScroll = scrollPosition * 0.6;
  // const slowScroll2 = scrollPosition * 0.1;

  background.style.transform = `translateY(${slowScroll}px)`;
  // bgTitle.style.transform = `translateY(-${slowScroll2}px)`;
  return (
    <div className="home-page-main">
      <div className="home-page-main-bg">
        <img src={homePageBg} />
      </div>
      <div className="home-page-main-content">
        <div>
          cwel
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          cwel
        </div>
      </div>
    </div>
  );
};
