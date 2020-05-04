import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLinkIcon from './NavbarLinkIcon';

const Logo = () => {
  return (
    <li className="logo">
      <NavLink to="/" className="nav-link ripple">
        <NavbarLinkIcon>К</NavbarLinkIcon>
        <span className="link-text">Кесте</span>
      </NavLink>
    </li>
  );
};

export default Logo;
