import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/notfound.json";
import "../assets/css/notfound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="custom-container">
      <div className="cus-row">
        <Lottie options={defaultOptions} height={400} width={400} />
        <p>
          Lorem ipsum dolor sit amet consectetur. Convallis arcu in libero odio.
          Eget egestas sit sit euismod aliquet mauris. Massa odio fringilla
          auctor nisi nisi sagittis faucibus aliquam elementum. Tortor nulla
          molestie fames sodales non imperdiet fringilla.
        </p>
        <div className="btns">
          <Link to="/*" className="new-btn">
            Yenidən cəhd et
          </Link>
          <Link className="home" to="/">
            Ana səhifəyə geri dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
