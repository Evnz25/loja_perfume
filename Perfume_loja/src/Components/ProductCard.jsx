import React from "react";

const Product = ({ product }) => {
  return (
    <div className="col">
      <div class="card h-100">
        <img src={product.thumbnail} class="card-img-top h-75" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{product.title}</h4>
          <h5 class="">${product.price}</h5>
          <button
            class="btn btn-primary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
