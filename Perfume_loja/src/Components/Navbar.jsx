import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between py-3 px-5 bg-secondary text-white">
      <Link
        to="/"
        className="navbar-brand fs-4 fw-bolder text-white"
        style={{ textDecoration: "none" }}
      >
        Loja de Perfumes IFPR
      </Link>
      <div>
        <Link to="/cadastro" className="btn btn-light fw-bold text-secondary">
          + Cadastrar Perfume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
