import React, { useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../styles/Header.css";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();



  const handleLogout = () => {
    logout();
    navigate("/login");
  }
  return (
    <header className="header">
      <div className="header-content">
        <h1>Profile Card</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/profiles">Profiles</Link>

          {isLoggedIn ? (
            <button
              className="logout-small"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </nav>

      </div>
    </header>
  );
};

export default Header;
