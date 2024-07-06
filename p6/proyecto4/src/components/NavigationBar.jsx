import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/products" className="navbar-link">
            Products
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile" className="navbar-link">
            Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;