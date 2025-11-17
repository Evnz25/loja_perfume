import Navbar from "../Components/Navbar";
import produtos from "../../Produtos.json";
import ProductCard from "../Components/ProductCard";

function Homepage () {  
    return (
    <>
      <Navbar />
      <div className="container mt-5" >
      <div class="row row-cols-1 row-cols-md-5 g-4">
        {produtos.produtos.map((produto) => (
          <div class="col" key={produto.id}>
            <ProductCard key={produto.id} produto={produto} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Homepage