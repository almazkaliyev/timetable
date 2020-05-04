import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLinkIcon from './NavbarLinkIcon';

const NavbarLink = ({ link, icon, children }) => {
  return (
    <NavLink to={link} activeClassName="active" className="nav-link ripple">
      <NavbarLinkIcon>{icon}</NavbarLinkIcon>
      <span className="link-text">{children}</span>
    </NavLink>
  );
};

export default NavbarLink;
