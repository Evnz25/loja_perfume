import React from "react";
import './ProductDesc.css'

function ProductDesc({ produto }) {
    return (
        <div className="description">
        <div className="card mb-3" style={{ maxWidth: '1000px' }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={produto.imagem} className="img-fluid rounded-start"  />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h2 className="card-title">{produto.nome}</h2>
                <h6 className="card-especificacao">{produto.especificacao}</h6>
                <h6 className="card-fabricante">{produto.fabricante}</h6>
                <p className="card-text">{produto.descricao}</p>
                <p className="card-text">{produto.preco}</p>
                <a className="btn btn-primary" onClick={() => navigate (`/product/${produto.id}`)}>Comprar</a>
            </div>
            </div>
        </div>
        </div>
        </div>

);
}

export default ProductDesc;