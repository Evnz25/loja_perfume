import React from "react";

function ProductCard({produto}){
  return (
  <div className="card" style={{width: '18rem;'}}>
    <img src={produto.imagem} className="card-img-top" alt="..."  style={{ height: '200px', objectFit: 'cover' }}/>
    <div className="card-body">
      <p className="card-text">{produto.nome}</p>
    </div>
  </div>
  );
};

export default ProductCard
