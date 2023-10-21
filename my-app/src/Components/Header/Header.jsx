import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <div className="logo">
          <img src={Logo} width={40} alt="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Trending</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
