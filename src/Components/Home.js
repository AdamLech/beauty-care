import React from "react";
import "../css/home.css";

export const Home = (props) => {
  return (
    <div className="home-page-main-container">
      <img
        className="home-page-bg"
        src={"https://source.unsplash.com/random/2000x601"}
        alt=""
      ></img>

      <div className="home-page-content">
        <div className="image-panel main-page-content-panel"></div>
        <div className="text-panel main-page-content-panel"></div>
        <div className="text-panel main-page-content-panel"></div>
        <div className="image-panel main-page-content-panel"></div>
      </div>
    </div>
  );
};
