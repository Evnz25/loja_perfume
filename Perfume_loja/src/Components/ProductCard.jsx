import React from "react";

function ProductCard({ produto }) {
  return (
    <div class="card h-100 ">
      <img src={produto.imagem} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{produto.nome}</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
