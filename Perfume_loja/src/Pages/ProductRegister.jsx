import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import perfumeService from "../services/PerfumeService";

function ProductRegister() {
  const [formData, setFormData] = useState({
    nome: "",
    especificacao: "",
    fabricante: "",
    descricao: "",
    preco: "",
    imagem: null,
  });

  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState({ tipo: "", texto: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      imagem: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem({ tipo: "", texto: "" });

    const data = new FormData();
    data.append("nome", formData.nome);
    data.append("especificacao", formData.especificacao);
    data.append("fabricante", formData.fabricante);
    data.append("descricao", formData.descricao);
    data.append("preco", formData.preco);

    if (formData.imagem) {
      data.append("imagem", formData.imagem);
    }

    try {
      await perfumeService.createProduto(data);

      setMensagem({
        tipo: "success",
        texto: "Perfume cadastrado com sucesso!",
      });

      setFormData({
        nome: "",
        especificacao: "",
        fabricante: "",
        descricao: "",
        preco: "",
        imagem: null,
      });
      document.getElementById("imagemInput").value = "";
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem({ tipo: "danger", texto: "Erro ao cadastrar o produto." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div
          className="card shadow"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Cadastro de Novo Perfume</h4>
          </div>
          <div className="card-body">
            {mensagem.texto && (
              <div className={`alert alert-${mensagem.tipo}`} role="alert">
                {mensagem.texto}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nome do Perfume</label>
                <input
                  type="text"
                  className="form-control"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Fabricante</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fabricante"
                    value={formData.fabricante}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Especificação</label>
                  <input
                    type="text"
                    className="form-control"
                    name="especificacao"
                    value={formData.especificacao}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3 mt-3">
                <div className="col-md-6">
                  <label className="form-label">Preço (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    name="preco"
                    value={formData.preco}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Imagem do Produto</label>
                  <input
                    type="file"
                    id="imagemInput"
                    className="form-control"
                    name="imagem"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Descrição Detalhada</label>
                <textarea
                  className="form-control"
                  name="descricao"
                  rows="4"
                  value={formData.descricao}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="/" className="btn btn-secondary me-md-2">
                  Cancelar
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Cadastrando..." : "Cadastrar Produto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRegister;
