import React from "react";
import { useNavigate } from 'react-router-dom'

function ProductCard({ produto }) {
  const navigate = useNavigate();
  
  return (
    <div class="card h-100">
      <img src={produto.imagem} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {produto.nome} </h5>
        <h6 className="card-text"> {produto.especificacao} </h6>
        <h6 className="card-text"> R$:{produto.preco} </h6>
        <a className="btn btn-primary" onClick={() => navigate (`/product/${produto.id}`)}>Comprar</a>
      </div>
    </div>
  );
}

export default ProductCard;
