import React from "react";
import { useLocation } from "react-router-dom";
import headerMapPng from "../../assets/images/headerMap.png";
const HeaderDown = () => {
  const { pathname } = useLocation();

  return (
    <div
      style={{
        display: pathname === "/" ? "none" : "block",
      }}
      className="headerdown"
    >
      <div className="headerdown__cover">
        <img src={headerMapPng} alt="" />
      </div>
      <div className="headerdown__title">
        <h1>haqqimizda</h1>
        <p>pesekar komandamiz ile tanish ol</p>
      </div>
    </div>
  );
};

export default HeaderDown;
