import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1 id="logo">
        <NavLink to="/">
          <i className="fas fa-shopping-cart"></i>
          shopix
        </NavLink>
      </h1>

      <nav>
        <span className="nav-trigger">
          <i className="fas fa-bars"></i>
        </span>
      </nav>

      <div className="auth-btns">
        <NavLink to="/auth/login" className="login">
          Log in
        </NavLink>
        <NavLink to="/auth/register" className="signup">
          Sign up
        </NavLink>
      </div>
    </header>
  );
}
