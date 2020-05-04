import React from 'react';
import Logo from './Logo';
import NavbarListItem from './NavbarListItem';
import ThemeSwitchButton from './ThemeSwitchButton';
import NavbarLink from './NavbarLink';

const NavbarList = () => {
  return (
    <ul className="navbar-nav">
      <Logo />
      {[
        { icon: 'ПН', name: 'Понедельник', link: '/monday' },
        { icon: 'ВТ', name: 'Вторник', link: '/tuesday' },
        { icon: 'СР', name: 'Среда', link: '/wednesday' },
        { icon: 'ЧТ', name: 'Четверг', link: '/thursday' },
        { icon: 'ПТ', name: 'Пятница', link: '/friday' },
      ].map(item => {
        return <NavbarListItem key={item.name}>
          <NavbarLink link={item.link} icon={item.icon}>
            {item.name}
          </NavbarLink>
        </NavbarListItem>;
      })}
      <NavbarListItem>
        <ThemeSwitchButton />
      </NavbarListItem>
    </ul>
  );
};

export default NavbarList;
