import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import ProductDesc from "../Components/ProductDesc";
import produtosData from "../../Produtos.json";
import perfumeService from "../services/PerfumeService";

function Productpage() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        const dados = await perfumeService.getProdutoById(id);
        setProduto(dados);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarProduto();
  }, [id]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="text-center mt-5">Carregando detalhes...</div>
      ) : produto ? (
        <ProductDesc produto={produto} />
      ) : (
        <div className="text-center mt-5">Produto não encontrado.</div>
      )}
    </>
  );
}

export default Productpage;
