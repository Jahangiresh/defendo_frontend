import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/notfound.json";
import "../assets/css/notfound.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="notfound__parent">
      <Helmet>
        <title>səhifə tapılmadı</title>
      </Helmet>
      <div className="custom-container">
        <div className="cus-row">
          <Lottie options={defaultOptions} />
          <p>bu sehife tapilmadi</p>
          <div className="btns">
            <Link onClick={refreshPage} className="new-btn">
              Yenidən cəhd et
            </Link>
            <Link className="home" to="/">
              Ana səhifəyə geri dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
