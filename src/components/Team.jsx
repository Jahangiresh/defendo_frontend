import React from "react";
import "../assets/css/home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Team = () => {
  var teamSettings = {
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: false,
    dots: false,
  };
  return (
    <div className="team">
      <h3 className="team__title">komandamız</h3>
      <p className="team__intro">pesekar komandamiz ile tanish ol</p>
      <Slider className="team__slider" {...teamSettings}>
        <div className="team__slider__card">salam</div>
        <div className="team__slider__card">salam</div>
        <div className="team__slider__card">salam</div>
        <div className="team__slider__card">salam</div>
        <div className="team__slider__card">salam</div>
        <div className="team__slider__card">salam</div>
        <div className="team__slider__card">salam</div>
      </Slider>
    </div>
  );
};

export default Team;
