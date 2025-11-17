import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import produtos from "../Produtos.json";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <>
      <Navbar />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {produtos.produtos.map((produto) => (
          <div class="col" key={produto.id}>
            <ProductCard key={produto.id} produto={produto} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
