import React from "react";
import "../assets/css/home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import vekilPng from "../assets/images/vekilPng.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Team = () => {
  const { items, status } = useSelector((state) => state.advocates);
  console.log(status);
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
        {items &&
          items.map((item) => (
            <Link className="team__links">
              <div key={item.id} className="team__slider__card">
                <div className="team__slider__card__image">
                  <img src={vekilPng} alt="" />
                </div>
                <div className="team__slider__card__name">{item.name}</div>
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
};

export default Team;
