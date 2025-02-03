// Navbar.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";  // Import AuthContext

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);  // Use context to get login status and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  // Call the logout function from context
    navigate("/login");  // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/mainform">
          ChatApp
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/mainform">
                Main Form
              </Link>
            </li>
            <li className="nav-item">

            </li>
            {/* Conditionally render login/signup or logout depending on the user's login status */}
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
