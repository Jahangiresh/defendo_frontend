import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/header.scss";
import logoSvg from "../../assets/images/headerLogo.png";
import menuIcon from "../../assets/images/hamburger.png";
import webIcon from "../../assets/images/web-icon.png";
import MenuDrawer from "./MenuDrawer";
import { useTranslation } from "react-i18next";
import HeaderLangs from "./HeaderLangs";

const Header = () => {
  const { t } = useTranslation();
  const pathname = useLocation();
  const navigate = useNavigate();

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        let direction = scrollY > lastScrollY ? "down" : "up";
        if (window.scrollY <= 0) {
          setScrollDirection("top");
        }
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);
    return scrollDirection;
  }

  let scrollDirection = useScrollDirection();
  if (window.scrollY <= 0) {
    scrollDirection = "top";
  }
  return (
    <div
      className={`header 
   
      ${
        scrollDirection === "down"
          ? ""
          : scrollDirection === "top"
          ? ""
          : "header__sticky"
      }`}
    >
      <div className="header__container custom-container">
        <div className="header__container__logo">
          <Link to="/">
            <img src={logoSvg} alt="" />
          </Link>
        </div>
        <div className="header__container__menu d-block d-md-none">
          {/* <img src={menuIcon} alt="" /> */}
          <MenuDrawer />
        </div>
        <div className="header__container__nav">
          <ul className="header__container__nav__ul">
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/">
                <span className="link__span">{t("ana səhifə")}</span>
              </Link>
            </li>
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/about">
                <span className="link__span">{t("haqqımızda")}</span>
              </Link>
            </li>
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/team">
                <span className="link__span">{t("komandamız")}</span>
              </Link>
            </li>

            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/services">
                <span className="link__span">{t("xidmətlər")} </span>
              </Link>
            </li>
            <li className="header__container__nav__ul__li">
              <Link className="link-default" to="/blogs">
                <span className="link__span">{t("Məqalələr")} </span>
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
              <div className="li__lang">
                <HeaderLangs />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
