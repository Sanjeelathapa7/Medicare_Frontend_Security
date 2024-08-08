import React, { useState } from "react";
import { registerApi } from "../../apis/Apis";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
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

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="d-flex"
        style={{
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {/* Left side with image */}
        <div className="w-50" style={{ marginRight: "20px" }}>
          <img
            src="/assets/images/Cover.jpg"
            alt="Cover Page"
            className="w-100 h-100"
          />
        </div>

        {/* Right side with form */}
        <div className="w-50">
          <h1 className="m-4">Create an Account</h1>
          <form className="w-75">
            <label>Firstname</label>
            <input
              onChange={changeFirstName}
              className="form-control mb-2"
              type="text"
              placeholder="Enter your firstname"
            />

            <label>Lastname</label>
            <input
              onChange={changeLastName}
              className="form-control mb-2"
              type="text"
              placeholder="Enter your lastname"
            />

            <label>Email</label>
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

            <button
              onClick={handleSubmit}
              className="btn btn-secondary w-100"
              type="submit"
              style={{ backgroundColor: "rgba(97, 124, 181, 1)" }}
            >
              Signup
            </button>
            <p className="mt-4, ">
              Already have an account? <a href="/">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
