import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.svg";
import menuOpen from '../../assets/images/icon-menu.svg'
import menuClose from '../../assets/images/icon-menu-close.svg'


const Header = () => {
  const [menuState,setMenuState]=useState(false)

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <div className="logo">
          <img src={Logo} width={40} alt="" />
        </div>
      
        <div className={`links ${!menuState ? "hide" : " "}`}>
          
              <a href="#">Home</a>
            
          
              <a href="#">New</a>
            
          
              <a href="#">Popular</a>
            
          
              <a href="#">Trending</a>
            
          
              <a href="#">Categories</a>
        </div>
          
        
        <div className="menu">
          {menuState ? (
            <img
              src={menuClose}
              onClick={() => setMenuState(!menuState)}
              width={20}
              height={20}
              alt=""
            />
          ) : (
            <img
              src={menuOpen}
              onClick={() => setMenuState(!menuState)}
              width={25}
              height={20}
              alt=""
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
