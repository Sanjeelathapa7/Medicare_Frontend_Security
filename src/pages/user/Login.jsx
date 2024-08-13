// import React, { useState } from "react";
// import { loginApi } from "../../apis/Apis";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       email: email,
//       password: password,
//     };

//     loginApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           localStorage.setItem("token", res.data.token);
//           const convertedJson = JSON.stringify(res.data.userData);

//           // Check if user is admin
//           const isAdmin = res.data.isAdmin;

//           // Redirect based on admin status
//           if (isAdmin) {
//             // Redirect to admin dashboard
//             navigate("/admin/dashboard");
            
//           } else {
//             // Redirect to user dashboard
//             navigate("/user/dashboard");
//           }

//           localStorage.setItem("user", convertedJson);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Server Error!");
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }} className="d-flex">
//         <div className="w-50">
//           <img src="/assets/images/Cover.jpg" alt="Cover Page" className="w-100 h-100" />
//         </div>
//         <div className="w-50">
//           <h1 className="m-4">Login </h1>
//           <form className="w-75 m-4">
//             <label>Email Address</label>
//             <input
//               onChange={changeEmail}
//               className="form-control mb-2"
//               type="email"
//               placeholder="Enter your email"
//             />

//             <label>Password</label>
//             <input
//               onChange={changePassword}
//               className="form-control mb-2"
//               type="password"
//               placeholder="Enter your password"
//             />

//             {/* Remember me, Forgot password, and Register links */}
//             <div className="d-flex justify-content-between align-items-center mb-2">
//               <div>
//                 <input type="checkbox" id="rememberMe" />
//                 <label htmlFor="rememberMe" className="ml-2">Remember me</label>
//               </div>
//               <div>
//                 <a href="/forgot-password">Forgot password?</a>
//               </div>
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="btn btn-secondary w-100"
//               type="submit"
//               style={{backgroundColor:"rgba(97, 124, 181, 1)"}}

//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { loginApi } from "../../apis/Apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    loginApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          const convertedJson = JSON.stringify(res.data.userData);

          // Check if user is admin
          const isAdmin = res.data.isAdmin;

          // Redirect based on admin status
          if (isAdmin) {
            // Redirect to admin dashboard
            navigate("/admin/dashboard");
          } else {
            // Redirect to user dashboard
            navigate("/user/dashboard");
          }

          localStorage.setItem("user", convertedJson);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server Error!");
      });
  };

  // return (
  //   <div className="d-flex justify-content-center align-items-center vh-100">
  //     <div style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }} className="d-flex">
  //       <div className="w-50">
  //         <img src="/assets/images/Cover.jpg" alt="Cover Page" className="w-100 h-100" />
  //       </div>
  //       <div className="w-50">
  //         <h1 className="m-4">Login</h1>
  //         <form className="w-75 m-4" onSubmit={handleSubmit}>
  //           <label>Email Address</label>
  //           <input
  //             onChange={changeEmail}
  //             className="form-control mb-2"
  //             type="email"
  //             placeholder="Enter your email"
  //             value={email}
  //           />
  //           {emailError && <div style={{ color: "red" }}><small>{emailError}</small></div>}

  //           <label>Password</label>
  //           <input
  //             onChange={changePassword}
  //             className="form-control mb-2"
  //             type="password"
  //             placeholder="Enter your password"
  //             value={password}
  //           />
  //           {passwordError && <div style={{ color: "red" }}><small>{passwordError}</small></div>}

  //           {/* Remember me, Forgot password, and Register links */}
  //           <div className="d-flex justify-content-between align-items-center mb-2">
  //             <div>
  //               <input type="checkbox" id="rememberMe" />
  //               <label htmlFor="rememberMe" className="ml-2">Remember me</label>
  //             </div>
  //             <div>
  //               <a href="/forgot-password">Forgot password?</a>
  //             </div>
  //           </div>

  //           <button
  //             className="btn btn-secondary w-100"
  //             type="submit"
  //             style={{backgroundColor:"rgba(97, 124, 181, 1)"}}
  //           >
  //             Login
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)", display: 'flex' }} className="w-100">
        <div className="w-50">
          {/* Assuming you have the image available under the path `/assets/images/pharmacy.jpg` */}
          <img src="/assets/images/cover.jpg" alt="Pharmacy" className="w-100 h-100" style={{ objectFit: 'cover' }} />
        </div>
        <div className="w-50 d-flex align-items-center justify-content-center">
          <div style={{ width: '80%' }}>
            <h1>Log in </h1>
            <form>
              
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password"/>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">Login</button>
              <p className="mt-2">Don't have an account? <a href="/register">Register</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
);

};

export default Login;
