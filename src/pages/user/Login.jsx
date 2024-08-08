import React, { useState } from "react";
import { loginApi } from "../../apis/Apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }} className="d-flex">
        <div className="w-50">
          <img src="/assets/images/Cover.jpg" alt="Cover Page" className="w-100 h-100" />
        </div>
        <div className="w-50">
          <h1 className="m-4">Login </h1>
          <form className="w-75 m-4">
            <label>Email Address</label>
            <input
              onChange={changeEmail}
              className="form-control mb-2"
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              onChange={changePassword}
              className="form-control mb-2"
              type="password"
              placeholder="Enter your password"
            />

            {/* Remember me, Forgot password, and Register links */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="ml-2">Remember me</label>
              </div>
              <div>
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="btn btn-secondary w-100"
              type="submit"
              style={{backgroundColor:"rgba(97, 124, 181, 1)"}}

            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
