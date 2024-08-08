import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgba(97, 124, 181, 1)", color: "white" }}
      >
        <div className="container-fluid">
          {/* Left side */}
          <div className="navbar-brand text-light fw-bold">Medicare</div>

          {/* Center (menu items) */}
          <div className="navbar-nav mx-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/user/dashboard"
                  style={{ marginRight: "20px", fontWeight: "bold" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/user/cart"
                  style={{
                    marginRight: "20px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/user/favorites"
                  style={{
                    marginRight: "20px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Favorite
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/user/contact"
                  style={{
                    marginRight: "20px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side */}
          <div className="navbar-text">
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "grey" }} // Make the button grey
                >
                  Welcome, {user.firstName}!
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/changepp">
                      Change password
                    </Link>
                  </li>

                  <li>
                    <button onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <button className="btn btn-outline-light" type="submit">
                  Login
                </button>
                <button className="btn btn-outline-light" type="submit">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
