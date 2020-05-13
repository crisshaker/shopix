import React from 'react';
import PasswordInput from './PasswordInput';

export default function LoginPage() {
  return (
    <div id="auth-page">
      <div className="form-container">
        <h2 className="vcx heading">
          <span>
            <i className="fas fa-key"></i>Log in to your account
          </span>
        </h2>
        <form className="vcx">
          <div className="group">
            <label htmlFor="email">E-mail</label>
            <input className="vcx" type="text" name="email" id="email" />
          </div>

          <div className="group">
            <label htmlFor="password">Password</label>
            <PasswordInput />
          </div>

          <button type="submit" className="vcx button block orange">
            Log in <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
