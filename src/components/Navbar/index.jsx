import React from 'react';
import { connect } from 'react-redux';
import NavbarList from './NavbarList';

import './index.css';

const Navbar = ({ items }) => {
  return(
    <nav className="navbar">
      <NavbarList items={items} />
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.lists.items,
  };
};

export default connect(mapStateToProps)(Navbar);
