import Navbar from "../Components/Navbar";
import produtos from "../../Produtos.json";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import perfumeService from "../services/PerfumeService";

function Homepage() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const dados = await perfumeService.getProdutos();
        setProdutos(dados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {loading ? (
          <div className="text-center">Carregando perfumes...</div>
        ) : (
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {produtos.map((produto) => (
              <div className="col" key={produto._id}>
                <ProductCard produto={produto} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Homepage;
