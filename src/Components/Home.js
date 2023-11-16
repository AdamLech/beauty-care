import { React, useEffect } from "react";
import "../css/home.css";
import homePageBg from "../img/homepagebg.jpg";

export const Home = (props) => {
  useEffect(() => {
    const image = document.querySelector(".home-page-bg");
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;
      const slowScroll = scrollPosition * 0.6;
      image.style.transform = `translateY(${slowScroll}px)`;
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div className="home-page">
      <div className="home-page-bg">
        <img src={homePageBg} />
      </div>
      <div className="home-page-content ctnt">
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
