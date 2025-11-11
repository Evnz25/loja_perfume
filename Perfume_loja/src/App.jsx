import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import produtos from "../Produtos.json"
import ProductCard from "./Components/ProductCard"

function App() {
  return (
    <>
      <Navbar />
      <div>
        {produtos.produtos.map((produtos) => (<ProductCard
        key={produtos.id}
        produto={produtos}/>))}
      </div>
    </>
  );
}

export default App;
