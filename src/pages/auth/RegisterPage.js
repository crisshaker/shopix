import React from 'react';
import PasswordInput from './PasswordInput';

export default function RegisterPage() {
  return (
    <div id="auth-page">
      <div className="form-container">
        <h2 className="vcx heading">
          <span>
            <i className="fas fa-key"></i>Sign up for free
          </span>
        </h2>
        <form className="vcx">
          <div className="group">
            <label htmlFor="email">E-mail</label>
            <input className="vcx" type="text" name="email" id="email" />
          </div>

          <div className="group">
            <label htmlFor="password">Choose a password</label>
            <PasswordInput />
          </div>

          <div className="group">
            <label htmlFor="intent">What is your primary intent?</label>
            <div className="vcx select">
              <select name="intent" id="intent">
                <option>Please select an option</option>
                <option>I want to sell my products</option>
                <option>I'm here to buy</option>
              </select>
            </div>
          </div>

          <button type="submit" className="vcx button block orange">
            Create my account <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
