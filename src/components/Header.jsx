import React from "react";
import Logo from "/Users/paulkalait/Desktop/webdeveloper/projects/stock-app/src/robinhood.svg";
import '../Header.css'

export const Header = () => {
  return (
    <div className="header__wrapper">
      {/* logo */}
      <div className="header__logo">
        <img src={Logo} width={25} alt="logo" />
      </div>
      {/* search */}
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search" type='text' />
        </div>
      </div>
      {/* menu */}
      <div className="header__menuItems">
      <a href='#'>Free Stocks</a>
      <a href='#'>Portfolio</a>
      <a href='#'>Cash</a>
      <a href='#'>Messages</a>
      <a href='#'>Account</a>
      </div>
    </div>
  );
};

export default Header;
