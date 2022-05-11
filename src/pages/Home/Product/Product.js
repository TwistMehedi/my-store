import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, img, price, category, seller } = product;
  console.log(product);
  return (
    <div className="d-flex">
      <div className="mb-3">
        <img src={img} width={200} />
      </div>
      <div id="description" className="ms-3">
        <p>Name: {name}</p>
        <p>Price: {price}$</p>
        <p>Category: {category}</p>
        <p>Seller: {seller}</p>
      </div>
    </div>
  );
};

export default Product;
