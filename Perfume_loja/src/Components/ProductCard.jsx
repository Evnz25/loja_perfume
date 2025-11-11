import React from "react";

function ProductCard(){
const product = ({ produtos }) => {
  return (
    <div className="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-nome">{product.nome}</h4>
          <h5 class="card-fabricante">${product.fabricante}</h5>
          <h6 class="card-especificacao">${product.especificacao}</h6>
          <h6 class="card-preco">${product.preco}</h6>
          <button
            class="btn btn-primary"
            onClick={() => dispatch({ type: "Add", produtos: product })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
}

export default ProductCard
