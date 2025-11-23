import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const LOGIN_URL = "http://localhost:8083/api/auth/login";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(LOGIN_URL, user);

      if (res.data.token === "LOGIN_OK") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_email", user.email);
        login();
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <Banner />
    <div className="auth-wrapper">
      
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Login to continue</p>

        <form className="auth-form" onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="auth-footer">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;
