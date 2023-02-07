import React from "react";
import { useLocation } from "react-router-dom";
import headerMapPng from "../../assets/images/headerMap.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HeaderDown = (props) => {
  const { pathname } = useLocation();
  return (
    <div
      style={{
        display: pathname === "/" || pathname === `${"/*"}` ? "none" : "block",
      }}
      className="headerdown"
    >
      <div className="headerdown__cover">
        <img src={headerMapPng} alt="" />
      </div>
      <div className="headerdown__title">{props.children}</div>
    </div>
  );
};

export default HeaderDown;
