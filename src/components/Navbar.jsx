// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   // Get user data from local storage
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Logout function
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//     window.location.reload();
//   };

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg"
//         style={{ backgroundColor: "rgba(97, 124, 181, 1)", color: "white" }}
//       >
//         <div className="container-fluid">
//           {/* Left side */}
//           <div className="navbar-brand text-light fw-bold">Medicare</div>

//           {/* Center (menu items) */}
//           <div className="navbar-nav mx-auto">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/user/dashboard"
//                   style={{ marginRight: "20px", fontWeight: "bold" }}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/user/cart"
//                   style={{
//                     marginRight: "20px",
//                     fontWeight: "bold",
//                     color: "white",
//                   }}
//                 >
//                   Cart
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/user/favorites"
//                   style={{
//                     marginRight: "20px",
//                     fontWeight: "bold",
//                     color: "white",
//                   }}
//                 >
//                   Favorite
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/user/contact"
//                   style={{
//                     marginRight: "20px",
//                     fontWeight: "bold",
//                     color: "white",
//                   }}
//                 >
//                   Contact us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Right side */}
//           <div className="navbar-text">
//             {user ? (
//               <div className="dropdown">
//                 <button
//                   className="btn btn-secondary dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                   style={{ backgroundColor: "grey" }} // Make the button grey
//                 >
//                   Welcome, {user.firstName}!
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to="/profile">
//                       Profile
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/resetpassword">
//                       Change password
//                     </Link>
//                   </li>

//                   <li>
//                     <button onClick={handleLogout} className="dropdown-item">
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <>
//                 <button className="btn btn-outline-light" type="submit">
//                   Login
//                 </button>
//                 <button className="btn btn-outline-light" type="submit">
//                   Register
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;




// // import React from "react";
// // import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
// // import styled from "styled-components";

// // const NavbarContainer = styled.nav`
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// //   padding: 10px 20px;
// //   background-color: white;
// //   border-bottom: 1px solid #eee;
// //   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
// // `;

// // const Logo = styled.img`
// //   max-width: 100px;
// // `;

// // const NavLinks = styled.ul`
// //   display: flex;
// //   list-style: none;
// //   gap: 20px;
// // `;

// // const NavLink = styled(RouterNavLink)`
// //   font-size: 16px;
// //   cursor: pointer;
// //   padding: 5px 10px;
// //   text-decoration: none;
// //   color: black;

// //   &.active {
// //     border-bottom: 2px solid blue;
// //     color: blue;
// //   }

// //   &:hover {
// //     color: blue;
// //   }
// // `;

// // const ButtonContainer = styled.div`
// //   display: flex;
// //   gap: 10px;
// // `;

// // const Button = styled.button`
// //   padding: 10px 20px;
// //   background-color: #4869a3;
// //   color: white;
// //   border: none;
// //   border-radius: 5px;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #365083;
// //   }
// // `;



// // const Navbar = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <NavbarContainer>
// //       <img
// //         src="/assets/images/Logo.png"
// //         alt="VolunteerVerse Logo"
// //         style={{ height: "70px" }}
// //       />
// //       <NavLinks>
// //         <NavLink to="/user/dashboard" activeClassName="active" className="text-font">
// //           Home
// //         </NavLink>
// //         <NavLink to="//user/cart" activeClassName="active" className="text-font">
// //           Cart
// //         </NavLink>
// //         <NavLink to="/user/favorites" activeClassName="active" className="text-font">
// //           Favorite
// //         </NavLink>
// //         <NavLink to="/user/contact" activeClassName="active" className="text-font">
// //           Contact us
// //         </NavLink>
// //       </NavLinks>
// //       <ButtonContainer>
// //         <Button onClick={() => navigate("/register")}>Register</Button>
// //         <Button onClick={() => navigate("/login")}>Login</Button>
// //       </ButtonContainer>
// //     </NavbarContainer>
// //   );
// // };

// // export default Navbar;




import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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

  // Get the current location
  const location = useLocation();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div className="container-fluid">
          {/* Left side */}
          <div className="navbar-brand text-dark fw-bold">Medicare</div>

          {/* Center (menu items) */}
          <div className="navbar-nav mx-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/user/dashboard" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/user/dashboard"
                  style={{
                    marginRight: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
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
                    color: "black",
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
                    color: "black",
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
                    color: "black",
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
                    <Link className="dropdown-item" to="/resetpassword">
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
                <button className="btn btn-outline-dark" type="submit">
                  Login
                </button>
                <button className="btn btn-outline-dark" type="submit">
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
