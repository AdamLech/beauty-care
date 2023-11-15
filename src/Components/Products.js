import React from "react";
import "../css/Products.css";
import image1 from "../img/img1.png";

export const Products = (props) => {
  return (
    <div className="products-page-main-container">
      <div className="products-functions">
        <div className="products-search">SEARCH</div>
        <div className="products-filters">FILTERS</div>
      </div>
      <div className="products-body">
        <div className="products-categories">
          <div className="products-categories-cat1">Category 1</div>
          <div className="products-categories-cat2">Category 2</div>
          <div className="products-categories-cat3">Category 3</div>
          <div className="products-categories-cat4">Category 4</div>
          <div className="products-categories-cat5">Category 5</div>
        </div>
        <div className="products-body-panel">
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
          <div className="panel-product">
            <img src={image1} />
            <p className="product-name">Name</p>
            <p className="product-price">20 $</p>
          </div>
        </div>
      </div>
    </div>
  );
};
