import React from "react";
import "../assets/css/loadingbox.scss";
import logo from "../assets/images/logo.svg";
const LoadingBox = () => {
  return (
    <div className="loadingbox">
      <img className="loadingbox__img" src={logo} alt="" />
    </div>
  );
};

export default LoadingBox;
