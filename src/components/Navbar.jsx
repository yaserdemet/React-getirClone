import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg bg-warning ">
        <div>
          
        </div>
         
         <div><span>  </span></div>

        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link" href="#">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">
                 Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
  );
};

export default Navbar;
