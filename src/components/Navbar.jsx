import React from "react";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import foto from "../assets/cw.jpeg";
import { useConsumeContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const { displayName, setDisplayName } = useConsumeContext()
  const { currentUser, setCurrentUser } = useConsumeContext()

  const handleClick = () => {
    logOut()
    navigate("/login")
    setDisplayName(false)
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between ">
     
        <div className="collapse navbar-collapse d-flex justify-content-around me-5" id="navbarNavDarkDropdown">
        <div className="container-fluid d-flex justify-content-between">
        <Link to="/about">
          <img src={foto} style={{ width: "30px" }} alt="" />
        </Link>

   
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="text-light">
          {/* {displayName && "" + "<"  + displayName.stringify() + ">"} */}
        {currentUser && currentUser.displayName}
        </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <FaUserTie  size={25}/>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark ">
                <li>
                  {
                    currentUser ? (
                      <Link to="/logout" className="dropdown-item" onClick={handleClick}>
                        Logout
                      </Link>
                    ):
                    (
                      <Link to="/login" className="dropdown-item">
                        Login
                      </Link>
                    )
                  }
                
                </li>

                <li>
                  {
                    currentUser && (
                      <Link to="/blog" className="dropdown-item">
                        Blog
                      </Link>
                    )
                  }
                </li>

                <li>
                  {
                    currentUser && 
                    <Link to="/profile" className="dropdown-item">
                      Profile
                      </Link>
                  }
                </li>

                <li>
                  {
                    !currentUser && <Link to="/register" className="dropdown-item">
                    Register
                  </Link>
                  }
                </li>
                
                {
                  displayName && 
                    <li>
                     
                       <Link to="/profile" className="dropdown-item"
              
              >
               Profile
                 {/* {displayName.split(" ")[0]} */}
                 {/* {displayName.slice(0 , displayName.indexOf(" ")).toUpperCase()} */}
              </Link>
              
              </li> 
              }

              <li>
               <div onClick={handleClick} className="dropdown-item">
               {displayName && "Logout"}
               </div>
              </li>
              
                    
                  
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
