import React from 'react';

const NavbarLinkIcon = ({ children }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <text
        fontFamily="Oswald, sans-serif"
        fontSize="1.5rem"
        fontWeight="bold"
        x="12" y="21"
        textAnchor="middle">
        {children}
      </text>
    </svg>
  );
};

export default NavbarLinkIcon;
