import React from 'react';

const ThemeSwitchButton = () => {
  return (
    <button type="button" className="nav-link ripple" style={{ width: '100%' }}>
      <svg
        className="theme-icon"
        id="dark-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4V8.69L23.3099 12L20 15.31V20H15.3099L12 23.31L8.68994
              20H4V15.31L0.689941 12L4 8.69V4H8.68994L12 0.690002L15.3099 4H20ZM9.5 17.45C10.26
              17.8 11.11 18 12 18C15.3101 18 18 15.31 18 12C18 8.69 15.3101 6 12 6C11.11 6 10.26
              6.2 9.5 6.55C11.5601 7.5 13 9.58 13 12C13 14.42 11.5601 16.5 9.5 17.45Z" />
      </svg>
      <svg
        className="theme-icon"
        id="light-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002
              11.9999L4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099L23.31 11.9999L20
              8.68994ZM12 17.9999C8.69 17.9999 6 15.3099 6 11.9999C6 8.68994 8.69 5.99994 12
              5.99994C15.31 5.99994 18 8.68994 18 11.9999C18 15.3099 15.31 17.9999 12 17.9999ZM8
              11.9999C8 9.78995 9.79001 7.99994 12 7.99994C14.21 7.99994 16 9.78995 16 11.9999C16
              14.2099 14.21 15.9999 12 15.9999C9.79001 15.9999 8 14.2099 8 11.9999Z" />
      </svg>
      <span className="link-text">Сменить тему</span>
    </button>
  );
};

export default ThemeSwitchButton;
