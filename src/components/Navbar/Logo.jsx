import React from 'react';
import NavbarLinkIcon from './NavbarLinkIcon';

const Logo = () => {
  return (
    <li className="logo">
      <div className="nav-link ripple">
        <NavbarLinkIcon>К</NavbarLinkIcon>
        <span className="link-text">Кесте</span>
      </div>
    </li>
  );
};

export default Logo;
