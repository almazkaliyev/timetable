import React from 'react';
import Logo from './Logo';
import NavbarListItem from './NavbarListItem';
import ThemeSwitchButton from './ThemeSwitchButton';
import NavbarLink from './NavbarLink';

const NavbarList = ({ items }) => {
  return (
    <ul className="navbar-nav">
      <Logo />
      {items.map(item =>
        <NavbarListItem key={item.id}>
          <NavbarLink link={item.id} icon={item.icon}>
            {item.title}
          </NavbarLink>
        </NavbarListItem>,
      )}
      <NavbarListItem>
        <ThemeSwitchButton />
      </NavbarListItem>
    </ul>
  );
};

export default NavbarList;
