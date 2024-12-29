import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header() {

  return (
    <nav className="navbar navbar-expand-lg bg-color-custom">
      <div className="container-fluid">
        <Link to={"/home"}>
          <span className="navbar-brand text-light">Relatos de Papel</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Cart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
