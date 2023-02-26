import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/header.scss";
import facebookPng from "../../assets/images/facebook.png";
import twitterPng from "../../assets/images/twitter.png";
import instagramPng from "../../assets/images/instagram.png";
import { getAllSetting } from "../../features/settingSlice";
import { useSelector } from "react-redux";

const UpperHeader = () => {
  const settings = useSelector(getAllSetting);
  return (
    <div className="upperheader">
      <div className="upperheader__container custom-container">
        <div className="upperheader__container__left">
          <span className="upperheader__container__left__span">
            {settings &&
              settings
                .filter((setting) => setting.key === "Mobile")
                .map((s) => (
                  <>
                    {s.key} : {s.value}
                  </>
                ))}
          </span>
          <span className="upperheader__container__left__span home__phone">
            {settings &&
              settings
                .filter((setting) => setting.key === "Telefon")
                .map((s) => (
                  <>
                    {s.key} : {s.value}
                  </>
                ))}
          </span>
          <span className="upperheader__container__left__span">
            {settings &&
              settings
                .filter((setting) => setting.key === "Email")
                .map((s) => (
                  <>
                    {s.key} : {s.value}
                  </>
                ))}
          </span>
        </div>
        <div className="upperheader__container__right">
          <span className="upperheader__container__right__span">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookPng} alt="" />
            </a>
          </span>
          <span className="upperheader__container__right__span">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterPng} alt="" />
            </a>
          </span>{" "}
          <span className="upperheader__container__right__span">
            <a
              href="https://instagram.com"
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
