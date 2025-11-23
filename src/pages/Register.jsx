import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Auth.css";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

const SIGNUP_URL = "http://localhost:8083/api/auth/signup";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(SIGNUP_URL, user);
      alert("Signup Successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Signup Failed");
    }
  };

  return (
    <div>
      <Banner />
   
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create an Account</h2>
        <p className="auth-subtitle">Join us by creating your account</p>

        <form className="auth-form" onSubmit={handleRegister}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button type="submit" className="auth-btn">Create Account</button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Register;