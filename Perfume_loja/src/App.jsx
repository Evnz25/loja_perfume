import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Productpage from "./Pages/Productpage";
import ProductRegister from "./Pages/ProductRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/cadastro" element={<ProductRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
