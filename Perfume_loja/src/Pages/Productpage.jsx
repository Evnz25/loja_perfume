import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import ProductDesc from "../Components/ProductDesc";
import produtosData from "../../Produtos.json";

function Productpage() {
  const { id } = useParams();
  const produto = produtosData.produtos.find((p) => p.id === Number(id));

  return (
    <>
      <Navbar />
      <ProductDesc key={produto.id} produto={produto} />
    </>
  );
}

export default Productpage;
