import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/auth/register" exact component={RegisterPage} />
        <Route path="/auth/login" exact component={LoginPage} />
        <div style={{ height: '400px' }}></div>
      </div>
    </BrowserRouter>
  );
}
