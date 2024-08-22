// import React, { useState } from "react";
// import { registerApi } from "../../apis/Apis";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const changeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const changeconfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };

//     registerApi(data)
//       .then((res) => {
//         if (res.data.success === true) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Internal Server Error!");
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div
//         className="d-flex"
//         style={{
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
//           padding: "20px",
//           borderRadius: "10px",
//         }}
//       >
//         {/* Left side with image */}
//         <div className="w-50" style={{ marginRight: "20px" }}>
//           <img
//             src="/assets/images/Cover.jpg"
//             alt="Cover Page"
//             className="w-100 h-100"
//           />
//         </div>

//         {/* Right side with form */}
//         <div className="w-50">
//           <h1 className="m-4">Create an Account</h1>
//           <form className="w-75">
//             <label>Firstname</label>
//             <input
//               onChange={changeFirstName}
//               className="form-control mb-2"
//               type="text"
//               placeholder="Enter your firstname"
//             />

//             <label>Lastname</label>
//             <input
//               onChange={changeLastName}
//               className="form-control mb-2"
//               type="text"
//               placeholder="Enter your lastname"
//             />

//             <label>Email</label>
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

//             <label>Confirm Password</label>
//             <input
//               onChange={changeconfirmPassword}
//               className="form-control mb-2"
//               type="password"
//               placeholder="Enter your confirm password"
//             />

//             <button
//               onClick={handleSubmit}
//               className="btn btn-secondary w-100"
//               type="submit"
//               style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
//             >
//               Signup
//             </button>
//             <p className="mt-4, ">
//               Already have an account? <a href="/">Login</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { registerApi } from "../../apis/Apis";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordStrength, setPasswordStrength] = useState("");

//   const changeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     const pwd = e.target.value;
//     setPassword(pwd);
//     evaluatePasswordStrength(pwd);
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const evaluatePasswordStrength = (password) => {
//     const lengthRequirement = /.{8,12}/;
//     const uppercaseRequirement = /[A-Z]/;
//     const lowercaseRequirement = /[a-z]/;
//     const numberRequirement = /[0-9]/;
//     const specialCharRequirement = /[!@#$%^&*]/;

//     if (
//       lengthRequirement.test(password) &&
//       uppercaseRequirement.test(password) &&
//       lowercaseRequirement.test(password) &&
//       numberRequirement.test(password) &&
//       specialCharRequirement.test(password)
//     ) {
//       setPasswordStrength("Strong");
//     } else if (
//       lengthRequirement.test(password) &&
//       (uppercaseRequirement.test(password) ||
//         lowercaseRequirement.test(password)) &&
//       (numberRequirement.test(password) || specialCharRequirement.test(password))
//     ) {
//       setPasswordStrength("Medium");
//     } else {
//       setPasswordStrength("Weak");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email.includes("@")) {
//       toast.error("Invalid email format.");
//       return;
//     }

//     if (passwordStrength === "Weak") {
//       toast.error("Password is too weak.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };

//     registerApi(data)
//       .then((res) => {
//         if (res.data.success === true) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Internal Server Error!");
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div
//         className="d-flex"
//         style={{
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
//           padding: "20px",
//           borderRadius: "10px",
//         }}
//       >
//         {/* Left side with image */}
//         <div className="w-50" style={{ marginRight: "20px" }}>
//           <img
//             src="/assets/images/Cover.jpg"
//             alt="Cover Page"
//             className="w-100 h-100"
//           />
//         </div>

//         {/* Right side with form */}
//         <div className="w-50">
//           <h1 className="m-4">Create an Account</h1>
//           <form className="w-75" onSubmit={handleSubmit}>
//             <label>Firstname</label>
//             <input
//               onChange={changeFirstName}
//               className="form-control mb-2"
//               type="text"
//               placeholder="Enter your firstname"
//               value={firstName}
//             />

//             <label>Lastname</label>
//             <input
//               onChange={changeLastName}
//               className="form-control mb-2"
//               type="text"
//               placeholder="Enter your lastname"
//               value={lastName}
//             />

//             <label>Email</label>
//             <input
//               onChange={changeEmail}
//               className="form-control mb-2"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//             />

//             <label>Password</label>
//             <input
//               onChange={changePassword}
//               className="form-control mb-2"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//             />
//             <div className={`mb-2 ${passwordStrength}`}>
//               Password Strength: <strong>{passwordStrength}</strong>
//             </div>

//             <label>Confirm Password</label>
//             <input
//               onChange={changeConfirmPassword}
//               className="form-control mb-2"
//               type="password"
//               placeholder="Enter your confirm password"
//               value={confirmPassword}
//             />

//             <button
//               className="btn btn-secondary w-100"
//               type="submit"
//               style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
//             >
//               Signup
//             </button>
//             <p className="mt-4, ">
//               Already have an account? <a href="/">Login</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { registerApi } from "../../apis/Apis";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const changeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     const pwd = e.target.value;
//     setPassword(pwd);
//     evaluatePasswordStrength(pwd);
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const evaluatePasswordStrength = (password) => {
//     const lengthRequirement = /.{8,12}/;
//     const uppercaseRequirement = /[A-Z]/;
//     const lowercaseRequirement = /[a-z]/;
//     const numberRequirement = /[0-9]/;
//     const specialCharRequirement = /[!@#$%^&*]/;

//     if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long.");
//       setPasswordStrength("Weak");
//       return;
//     }

//     if (
//       lengthRequirement.test(password) &&
//       uppercaseRequirement.test(password) &&
//       lowercaseRequirement.test(password) &&
//       numberRequirement.test(password) &&
//       specialCharRequirement.test(password)
//     ) {
//       setPasswordStrength("Strong");
//       setPasswordError("");
//     } else if (
//       lengthRequirement.test(password) &&
//       (uppercaseRequirement.test(password) ||
//         lowercaseRequirement.test(password)) &&
//       (numberRequirement.test(password) || specialCharRequirement.test(password))
//     ) {
//       setPasswordStrength("Medium");
//       setPasswordError("");
//     } else {
//       setPasswordStrength("Weak");
//       setPasswordError(
//         "Password must contain uppercase, lowercase, numbers, and special characters."
//       );
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email.includes("@")) {
//       toast.error("Invalid email format.");
//       return;
//     }

//     if (passwordStrength === "Weak") {
//       toast.error("Password is too weak.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };

//     registerApi(data)
//       .then((res) => {
//         if (res.data.success === true) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Internal Server Error!");
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div
//         className="d-flex"
//         style={{
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
//           padding: "20px",
//           borderRadius: "10px",
//         }}
//       >
//         {/* Left side with image */}
//         <div className="w-50" style={{ marginRight: "20px" }}>
//           <img
//             src="/assets/images/Cover.jpg"
//             alt="Cover Page"
//             className="w-100 h-100"
//           />
//         </div>

//         {/* Right side with form */}
//         <div className="w-50">
//           <h1 className="m-4">Create an Account</h1>
//           <form className="w-75" onSubmit={handleSubmit}>
//             <label>Firstname</label>
//             <input
//               onChange={changeFirstName}
//               className="form-control mb-2"
//               type="text"
//               placeholder="Enter your firstname"
//               value={firstName}
//             />

//             <label>Lastname</label>
//             <input
//               onChange={changeLastName}
//               className="form-control mb-2"
//               type="text"
//               placeholder="Enter your lastname"
//               value={lastName}
//             />

//             <label>Email</label>
//             <input
//               onChange={changeEmail}
//               className="form-control mb-2"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//             />

//             <label>Password</label>
//             <input
//               onChange={changePassword}
//               className="form-control mb-2"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//             />
//             <div
//               className="mb-2"
//               style={{
//                 color:
//                   passwordStrength === "Strong"
//                     ? "green"
//                     : passwordStrength === "Medium"
//                     ? "orange"
//                     : "red",
//               }}
//             >
//               Password Strength: <strong>{passwordStrength}</strong>
//             </div>
//             {passwordError && (
//               <div style={{ color: "red" }}>
//                 <small>{passwordError}</small>
//               </div>
//             )}

//             <label>Confirm Password</label>
//             <input
//               onChange={changeConfirmPassword}
//               className="form-control mb-2"
//               type="password"
//               placeholder="Enter your confirm password"
//               value={confirmPassword}
//             />

//             <button
//               className="btn btn-secondary w-100"
//               type="submit"
//               style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
//             >
//               Signup
//             </button>
//             <p className="mt-4, ">
//               Already have an account? <a href="/">Login</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { registerApi } from "../../apis/Apis";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const changeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     const pwd = e.target.value;
//     setPassword(pwd);
//     evaluatePasswordStrength(pwd);
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const evaluatePasswordStrength = (password) => {
//     const lengthRequirement = /.{8,12}/;
//     const uppercaseRequirement = /[A-Z]/;
//     const lowercaseRequirement = /[a-z]/;
//     const numberRequirement = /[0-9]/;
//     const specialCharRequirement = /[!@#$%^&*]/;

//     if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long.");
//       setPasswordStrength("Weak");
//       return;
//     }

//     if (
//       lengthRequirement.test(password) &&
//       uppercaseRequirement.test(password) &&
//       lowercaseRequirement.test(password) &&
//       numberRequirement.test(password) &&
//       specialCharRequirement.test(password)
//     ) {
//       setPasswordStrength("Strong");
//       setPasswordError("");
//     } else if (
//       lengthRequirement.test(password) &&
//       (uppercaseRequirement.test(password) ||
//         lowercaseRequirement.test(password)) &&
//       (numberRequirement.test(password) || specialCharRequirement.test(password))
//     ) {
//       setPasswordStrength("Medium");
//       setPasswordError("");
//     } else {
//       setPasswordStrength("Weak");
//       setPasswordError(
//         "Password must contain uppercase, lowercase, numbers, and special characters."
//       );
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email.includes("@")) {
//       toast.error("Invalid email format.");
//       return;
//     }

//     if (passwordStrength === "Weak") {
//       toast.error("Password is too weak.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };

//     registerApi(data)
//       .then((res) => {
//         if (res.data.success === true) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Internal Server Error!");
//       });
//   };

//   // Determine the background color of the password strength indicator based on password strength
//   const getPasswordStrengthColor = (strength) => {
//     switch (strength) {
//       case "Strong":
//         return "green";
//       case "Medium":
//         return "orange";
//       case "Weak":
//       default:
//         return "red";
//     }
//   };

//   // Determine the width of the filled portion of the password strength bar based on password strength
//   const getPasswordStrengthWidth = (strength) => {
//     switch (strength) {
//       case "Strong":
//         return "100%";
//       case "Medium":
//         return "66%";
//       case "Weak":
//       default:
//         return "33%";
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-80" style={{ overflow: "hidden" }}>
//       {/* Image container with 50% width and full viewport height */}
//       <div className="h-100" style={{ width: "50%", marginRight: "10px" }}>
//         <img
//           src="/assets/images/Cover.jpg"
//           alt="Cover Page"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>

//       {/* Form container */}
//       <div style={{ width: "50%" }}>
//         <div style={{ padding: "20px" }}>
//           <h1>Create an Account</h1>
//           <form className="w-75" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Firstname</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Enter your firstname"
//                 value={firstName}
//                 onChange={changeFirstName}
//               />
//             </div>
//             <div className="form-group">
//               <label>Lastname</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Enter your lastname"
//                 value={lastName}
//                 onChange={changeLastName}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className="form-control mb-2"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={changeEmail}
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mb-2"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={changePassword}
//               />
//                {/* Password Strength Indicator Line */}
//             <div className="password-strength-indicator mb-1" style={{ position: "relative", height: "10px", backgroundColor: "#e0e0e0", borderRadius: "5px" }}>
//               <div
//                 style={{
//                   position: "absolute",
//                   height: "100%",
//                   width: getPasswordStrengthWidth(passwordStrength),
//                   backgroundColor: getPasswordStrengthColor(passwordStrength),
//                   borderRadius: "5px",
//                   transition: "width 0.5s, background-color 0.5s",
//                 }}
//               />
//             </div>
//             {passwordStrength && (
//               <div style={{ color: getPasswordStrengthColor(passwordStrength) }}>
//                 <small>{passwordStrength}</small>
//               </div>
//             )}
//             {passwordError && (
//               <div style={{ color: "red" }}>
//                 <small>{passwordError}</small>
//               </div>
//             )}

//             </div>
//             <div className="form-group">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control mb-2"
//                 placeholder="Enter your confirm password"
//                 value={confirmPassword}
//                 onChange={changeConfirmPassword}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Signup</button>
//           </form>
//           <p className="mt-4">
//             Already have an account? <a href="/">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default Register;

// import React, { useState } from "react";
// import { registerApi } from "../../apis/Apis";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordStrength, setPasswordStrength] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasTypedPassword, setHasTypedPassword] = useState(false); // Track if user has typed in the password

//   const changeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const changeLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     const pwd = e.target.value;
//     setPassword(pwd);
//     evaluatePasswordStrength(pwd);
//     if (!hasTypedPassword) {
//       setHasTypedPassword(true); // User has started typing in the password
//     }
//   };

//   const changeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const evaluatePasswordStrength = (password) => {
//     const lengthRequirement = /.{8,12}/;
//     const uppercaseRequirement = /[A-Z]/;
//     const lowercaseRequirement = /[a-z]/;
//     const numberRequirement = /[0-9]/;
//     const specialCharRequirement = /[!@#$%^&*]/;

//     if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long.");
//       setPasswordStrength("Weak");
//       return;
//     }

//     if (
//       lengthRequirement.test(password) &&
//       uppercaseRequirement.test(password) &&
//       lowercaseRequirement.test(password) &&
//       numberRequirement.test(password) &&
//       specialCharRequirement.test(password)
//     ) {
//       setPasswordStrength("Strong");
//       setPasswordError("");
//     } else if (
//       lengthRequirement.test(password) &&
//       (uppercaseRequirement.test(password) ||
//         lowercaseRequirement.test(password)) &&
//       (numberRequirement.test(password) || specialCharRequirement.test(password))
//     ) {
//       setPasswordStrength("Medium");
//       setPasswordError("");
//     } else {
//       setPasswordStrength("Weak");
//       setPasswordError("Password must contain uppercase, lowercase, numbers, and special characters.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email.includes("@")) {
//       toast.error("Invalid email format.");
//       return;
//     }

//     if (passwordStrength === "Weak") {
//       toast.error("Password is too weak.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };

//     registerApi(data)
//       .then((res) => {
//         if (res.data.success === true) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Internal Server Error!");
//       });
//   };

//   const getPasswordStrengthColor = (strength) => {
//     switch (strength) {
//       case "Strong":
//         return "green";
//       case "Medium":
//         return "orange";
//       case "Weak":
//       default:
//         return "red";
//     }
//   };

//   const getPasswordStrengthWidth = (strength) => {
//     switch (strength) {
//       case "Strong":
//         return "100%";
//       case "Medium":
//         return "66%";
//       case "Weak":
//       default:
//         return "33%";
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100" style={{ overflow: "hidden" }}>
//       <div className="h-100" style={{ width: "50%", marginRight: "10px" }}>
//         <img
//           src="/assets/images/Cover.jpg"
//           alt="Cover Page"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>

//       <div style={{ width: "50%" }}>
//         <div style={{ padding: "20px" }}>
//           <h1>Create an Account</h1>
//           <form className="w-75" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Firstname</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Enter your firstname"
//                 value={firstName}
//                 onChange={changeFirstName}
//               />
//             </div>
//             <div className="form-group">
//               <label>Lastname</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Enter your lastname"
//                 value={lastName}
//                 onChange={changeLastName}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className="form-control mb-2"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={changeEmail}
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mb-2"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={changePassword}
//               />
//               <div style={{ minHeight: "10px" }}> {/* Reserve space for the strength indicator and error message */}
//                 {hasTypedPassword && (
//                   <>
//                     <div className="password-strength-indicator mb-1" style={{ position: "relative", height: "8px", backgroundColor: "#e0e0e0", borderRadius: "5px" }}>
//                       <div
//                         style={{
//                           position: "absolute",
//                           height: "100%",
//                           width: getPasswordStrengthWidth(passwordStrength),
//                           backgroundColor: getPasswordStrengthColor(passwordStrength),
//                           borderRadius: "5px",
//                           transition: "width 0.5s, background-color 0.5s",
//                         }}
//                       />
//                     </div>
//                     {passwordStrength && (
//                       <div style={{ color: getPasswordStrengthColor(passwordStrength) }}>
//                         <small>{passwordStrength}</small>
//                       </div>
//                     )}
//                     {passwordError && (
//                       <div style={{ color: "red" }}>
//                         <small>{passwordError}</small>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control mb-2"
//                 placeholder="Enter your confirm password"
//                 value={confirmPassword}
//                 onChange={changeConfirmPassword}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Signup</button>
//           </form>
//           <p className="mt-4">
//             Already have an account? <a href="/">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { registerApi } from "../../apis/Apis";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasTypedPassword, setHasTypedPassword] = useState(false); // Track if user has typed in the password

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
    if (!/^\S+@\S+\.\S+$/.test(e.target.value) || !/\d/.test(e.target.value)) {
      setEmailError(
        "Email must include '@', a domain, and at least one number."
      );
    } else {
      setEmailError("");
    }
  };

  const changePassword = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    evaluatePasswordStrength(pwd);
    setHasTypedPassword(true);
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const evaluatePasswordStrength = (password) => {
    const lengthRequirement = /.{8,12}/;
    const uppercaseRequirement = /[A-Z]/;
    const lowercaseRequirement = /[a-z]/;
    const numberRequirement = /[0-9]/;
    const specialCharRequirement = /[!@#$%^&*]/;

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      setPasswordStrength("Weak");
      return;
    }

    if (
      lengthRequirement.test(password) &&
      uppercaseRequirement.test(password) &&
      lowercaseRequirement.test(password) &&
      numberRequirement.test(password) &&
      specialCharRequirement.test(password)
    ) {
      setPasswordStrength("Strong");
      setPasswordError("");
    } else if (
      lengthRequirement.test(password) &&
      (uppercaseRequirement.test(password) ||
        lowercaseRequirement.test(password)) &&
      (numberRequirement.test(password) ||
        specialCharRequirement.test(password))
    ) {
      setPasswordStrength("Medium");
      setPasswordError("");
    } else {
      setPasswordStrength("Weak");
      setPasswordError(
        "Password must contain uppercase, lowercase, numbers, and special characters."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      toast.error(emailError);
      return;
    }

    if (passwordStrength === "Weak") {
      toast.error("Password is too weak.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    registerApi(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error!");
      });
  };

  const getPasswordStrengthColor = (strength) => {
    switch (strength) {
      case "Strong":
        return "green";
      case "Medium":
        return "orange";
      case "Weak":
      default:
        return "red";
    }
  };

  const getPasswordStrengthWidth = (strength) => {
    switch (strength) {
      case "Strong":
        return "100%";
      case "Medium":
        return "66%";
      case "Weak":
      default:
        return "33%";
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ overflow: "hidden" }}
    >
      
      <div className="h-100" style={{ width: "50%", marginRight: "10px" }}>
        <img
          src="/assets/images/Cover.jpg"
          alt="Cover Page"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ width: "50%" }}>
        <div style={{ padding: "20px" }}>
          <h1>Create an Account</h1>
          <form className="w-75" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Firstname</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter your firstname"
                value={firstName}
                onChange={changeFirstName}
              />
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter your lastname"
                value={lastName}
                onChange={changeLastName}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
                value={email}
                onChange={changeEmail}
              />
              {emailError && (
                <div style={{ color: "red" }}>
                  <small>{emailError}</small>
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Enter your password"
                value={password}
                onChange={changePassword}
              />
              <div style={{ minHeight: "10px" }}>
                {hasTypedPassword && (
                  <>
                    <div
                      className="password-strength-indicator"
                      style={{
                        position: "relative",
                        height: "10px",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: getPasswordStrengthWidth(passwordStrength),
                          backgroundColor:
                            getPasswordStrengthColor(passwordStrength),
                          borderRadius: "5px",
                          transition: "width 0.5s, background-color 0.5s",
                        }}
                      />
                    </div>
                    {passwordStrength && (
                      <div
                        style={{
                          display: "inline",
                          color: getPasswordStrengthColor(passwordStrength),
                        }}
                      >
                        <small>{passwordStrength}</small>
                      </div>
                    )}
                    {passwordError && (
                      <div style={{ color: "red" }}>
                        <small>{passwordError}</small>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Enter your confirm password"
                value={confirmPassword}
                onChange={changeConfirmPassword}
              />
            </div>
            <button
              className="btn btn-secondary w-100"
              onClick={handleSubmit}
              type="submit"
              style={{backgroundColor:"rgba(97, 124, 181, 1)"}}
            >
              Signup
            </button>
          </form>
          <p className="mt-2" style={{ marginLeft: '10px', fontSize: '16px' }}>
  Already have an account? <a href="/login">Login</a>
</p>


        </div>
      </div>
    </div>
  );
};

export default Register;
