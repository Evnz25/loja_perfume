import React from "react";
import axios from "axios";
import { useState } from "react";
import "./ProductDesc.css";

function ProductDesc({ produto }) {
  const [cepInput, setCepInput] = useState("");
  const [endereco, setEndereco] = useState(null);

  const handleBuscaCep = () => {
    setEndereco(null);

    axios
      .get(`https://viacep.com.br/ws/${cepInput}/json/`)
      .then((res) => {
        setEndereco(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar o CEP (Productpage): ", err);
      });
  };

  return (
    <div className="description">
      <div className="card mb-3" style={{ maxWidth: "1000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={produto.imagem} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{produto.nome}</h2>
              <h6 className="card-especificacao">{produto.especificacao}</h6>
              <h6 className="card-fabricante">{produto.fabricante}</h6>
              <p className="card-text">{produto.descricao}</p>
              <p className="card-text">{produto.preco}</p>
              <a
                className="btn btn-primary"
                onClick={() => navigate(`/product/${produto.id}`)}
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Seu CEP (só números)"
            value={cepInput} // O valor vem do estado
            onChange={(e) => setCepInput(e.target.value)} // O estado é atualizado a cada dígito
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleBuscaCep}
          >
            Calcular cep
          </button>
        </div>
        {endereco && (
          <div className="alert alert-success">
            <p className="mb-0">
              <strong>Endereço:</strong> {endereco.logradouro},{" "}
              {endereco.bairro}
            </p>
            <p className="mb-0">
              <strong>Cidade:</strong> {endereco.localidade} - {endereco.uf}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDesc;
