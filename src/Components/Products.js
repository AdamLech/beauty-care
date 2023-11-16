import React from "react";
import "../css/Products.css";
import image1 from "../img/img1.png";

export const Products = (props) => {
  return (
    <div className="products-page-main-container">
      <div className="products-functions">
        <div className="products-search"></div>
        <div className="products-filters"></div>
      </div>
      <div className="products-body">
        <div className="products-categories">
          <div className="products-categories-cat1">Category 1</div>
          <div className="products-categories-cat1">Category 2</div>
          <div className="products-categories-cat1">Category 3</div>
          <div className="products-categories-cat1">Category 4</div>
          <div className="products-categories-cat1">Category 5</div>
        </div>
        <div className="products-body-panel">
          <div className="panel-product">
            <img src={image1} />
          </div>
        </div>
      </div>
    </div>
  );
};
