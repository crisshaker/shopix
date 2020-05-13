import React, { useState } from 'react';

export default function PasswordInput() {
  const [passwordHidden, setPasswordHidden] = useState(true);

  function togglePasswordHidden(e) {
    e.preventDefault();

    setPasswordHidden(!passwordHidden);
  }

  return (
    <div className="password">
      <input
        className="vcx"
        type={passwordHidden ? 'password' : 'text'}
        name="password"
        id="password"
      />
      <button onClick={togglePasswordHidden}>
        {passwordHidden ? (
          <i className="fas fa-eye"></i>
        ) : (
          <i className="fas fa-eye-slash"></i>
        )}
      </button>
    </div>
  );
}
