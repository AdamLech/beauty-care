import { React, useEffect } from "react";
import "../css/home.css";
import homePageBg from "../img/homepagebg.jpg";
import showcaseImg1 from "../img/showcase1.jpg";
import showcaseImg2 from "../img/showcase2.jpg";
import showcaseImg3 from "../img/showcase3.jpg";
import nextArrow from "../img/next.png";
import nextArrowL from "../img/nextL.png";

export const Home = (props) => {
  useEffect(() => {
    const showcaseSliderArrow = document.querySelectorAll("[data-button]");
    const showcaseSlider = document.querySelector(".showcase-content");
    const scSliderPos =
      getComputedStyle(showcaseSlider).transform.split(",")[4];

    showcaseSliderArrow.forEach((button) => {
      button.addEventListener("click", (event) => {
        console.log(
          getComputedStyle(showcaseSlider).transform.split(",")[4] +
            " " +
            showcaseSlider.offsetWidth +
            " " +
            (scSliderPos - scSliderPos * (1 / 3))
        );
        if (button.getAttribute("data-button") === "next") {
          showcaseSlider.style.transform = `translateX(-${
            scSliderPos - scSliderPos / 3
          }px)`;
        } else {
          showcaseSlider.style.transform = `translateX(-${
            scSliderPos - scSliderPos / 3
          }px)`;
        }
      });
    });

    const scrollHandler = () => {
      const image = document.querySelector(".home-page-bg");
      const bgTitle = document.querySelector(".home-page-bg-content");
      image.style.transform = `translateY(${window.scrollY * 0.6}px)`;
      bgTitle.style.transform = `translateY(-${window.scrollY * 0.1}px)`;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      // showcaseSliderArrow.forEach((arrow) => {
      //   arrow.removeEventListener("click", showcaseHandler);
      // });
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div className="home-page">
      <div className="home-page-bg">
        <div className="home-page-bg-content">
          New Collection
          <div>
            <span>Tangerine</span>
            <div>Temptation</div>
          </div>
        </div>
        <img src={homePageBg} />
      </div>
      <div className="home-page-content ctnt">
        <div className="home-page-content-showcase">
          <div
            data-button="prev"
            className="showcase-arrow-left showcase-arrow"
          >
            <img src={nextArrowL}></img>
          </div>
          <div className="showcase-content">
            <div className="se1 showcase-element">
              <img src={showcaseImg1} />
            </div>
            <div className="se2 showcase-element">
              <img src={showcaseImg2} />
            </div>
            <div className="se3 showcase-element">
              <img src={showcaseImg3} />
            </div>
          </div>
          <div
            data-button="next"
            className="showcase-arrow-right showcase-arrow"
          >
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
