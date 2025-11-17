import React from "react";

function ProductDesc({ produto }) {
    return (

        <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={produto.imagem} className="img-fluid rounded-start"  />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">{produto.descricao}</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        </div>

);
}

export default ProductDesc;