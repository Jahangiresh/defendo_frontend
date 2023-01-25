import React from "react";

import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/header.scss";
import logoSvg from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/hamburger.png";
import webIcon from "../../assets/images/web-icon.png";
import MenuDrawer from "./MenuDrawer";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__container custom-container">
        <div className="header__container__logo">
          <img src={logoSvg} alt="" />
        </div>
        <div className="header__container__menu d-block d-md-none">
          {/* <img src={menuIcon} alt="" /> */}
          <MenuDrawer />
        </div>
        <div className="header__container__nav">
          <ul className="header__container__nav__ul">
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/">
                <span className="link__span">ana sehifə</span>
              </Link>
            </li>
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/">
                <span className="link__span">haqqımızda </span>
              </Link>
            </li>
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/">
                <span className="link__span">komandamız </span>
              </Link>
            </li>
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/services">
                <span className="link__span">xidmətlər </span>
              </Link>
            </li>
            <li className="header__container__nav__ul__li">
              <button
                onClick={() => navigate("/contact")}
                className="header__container__nav__ul__li__button"
              >
                bizimlə əlaqə
              </button>
            </li>
            <li className="header__container__nav__ul__li">
              <img src={webIcon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
