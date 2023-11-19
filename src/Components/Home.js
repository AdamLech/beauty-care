import { React, useEffect } from "react";
import "../css/home.css";
import homePageBg from "../img/homepagebg.jpg";
import showcaseImg1 from "../img/showcase1.jpg";
import showcaseImg2 from "../img/showcase2.jpg";
import showcaseImg3 from "../img/showcase3.jpg";
import nextArrow from "../img/next.png";

export const Home = (props) => {
  useEffect(() => {
    const image = document.querySelector(".home-page-bg");
    const bgTitle = document.querySelector(".home-page-bg-content");
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;
      const slowScroll = scrollPosition * 0.6;
      const slowScroll2 = scrollPosition * 0.1;
      image.style.transform = `translateY(${slowScroll}px)`;
      bgTitle.style.transform = `translateY(-${slowScroll2}px)`;
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div className="home-page">
      <div className="home-page-bg">
        <div className="home-page-bg-content">
          <div>New Collection</div>
          <span>Tangerine</span>
          Temptation
        </div>
        <img src={homePageBg} />
      </div>
      <div className="home-page-content ctnt">
        <div className="home-page-content-showcase">
          <div className="showcase-arrow-left showcase-arrow">
            <img src={nextArrow}></img>
          </div>
          <div className="showcase-content">
            <div>
              <img className="showcase-img" src={showcaseImg1} />
            </div>
            <div>
              <img className="showcase-img" src={showcaseImg2} />
            </div>
            <div>
              <img className="showcase-img" src={showcaseImg3} />
            </div>
          </div>
          <div className="showcase-arrow-right showcase-arrow">
            <img src={nextArrow} />
          </div>
        </div>
        <div className="home-page-content-collection">collection1</div>
        <div className="home-page-content-collection">collection2</div>
        <div className="home-page-content-collection">collection3</div>
      </div>
    </div>
  );
};
