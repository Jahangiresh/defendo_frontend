import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/header.scss";
import facebookPng from "../../assets/images/facebook.png";
import twitterPng from "../../assets/images/twitter.png";
import instagramPng from "../../assets/images/instagram.png";
const UpperHeader = () => {
  return (
    <div className="upperheader">
      <div className="upperheader__container custom-container">
        <div className="upperheader__container__left">
          <span className="upperheader__container__left__span">
            Mobil: +994 55 465-22-52
          </span>
          <span className="upperheader__container__left__span home__phone">
            Telefon: 012 465-22-52
          </span>
          <span className="upperheader__container__left__span">
            Email: officedefendo@gmail.com
          </span>
        </div>
        <div className="upperheader__container__right">
          <span className="upperheader__container__right__span">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookPng} alt="" />
            </a>
          </span>
          <span className="upperheader__container__right__span">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterPng} alt="" />
            </a>
          </span>{" "}
          <span className="upperheader__container__right__span">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramPng} alt="" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
