
import React from "react";
import { Link } from "react-router-dom";

const Header = ({count}) => {
  return (
    <>
      <nav style={{backgroundColor :"gray" }} className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">E-commerce</Link>
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
            <ul style={{marginLeft : '250px'}} className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/products">Product</Link>
              </li>
              <li className="nav-item">
                     <Link className="nav-link text-light" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to='/login' className="text-decoration-none me-3 border text-light border-1 px-2 py-1 fs-6 rounded-2"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</Link>
              <Link to='/signup' className="text-decoration-none me-3 text-light border border-1 px-2 py-1 fs-6 rounded-2"><i class="fa-solid fa-users"></i> Register</Link>
              <Link to='/cart' className="text-decoration-none me-5 border text-light border-1 px-2 py-1 fs-6 rounded-2">
              <i class="fa-solid fa-cart-shopping"></i>  Cart {count}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
