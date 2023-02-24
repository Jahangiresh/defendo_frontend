import React from "react";
import "../assets/css/home.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import vekilPng from "../assets/images/vekilPng.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import mapPng from "../assets/images/mapSvg.svg";
import phonePng from "../assets/images/phoneSvg.svg";
import messagePng from "../assets/images/messageSvg.svg";
import { getAllAdvocates, getStatus } from "../features/teamSlice";
const Team = () => {
  const advocates = useSelector(getAllAdvocates);
  const status = useSelector(getStatus);
  var teamSettings = {
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(advocates);
  return (
    <div className="team">
      <h3 className="team__title">komandamız</h3>
      <p className="team__intro">pesekar komandamiz ile tanish ol</p>

      <Slider className="team__slider row" {...teamSettings}>
        <Link to={`/team/id}`} className="team__links ">
          <div className="team__slider__card">
            <div className="team__slider__card__image">
              <img src={vekilPng} alt="wqe" />
              <ul className="team__slider__card__image__ul">
                <li>
                  <img src={mapPng} alt="" /> Ak. Həsən Əliyev 82F
                </li>
                <li>
                  <img src={phonePng} alt="" /> +994 50 555-55-55
                </li>
                <li>
                  <img src={messagePng} alt="" /> officedefendo@gmail.com
                </li>
              </ul>
            </div>
            <div className="team__slider__card__name">sasd </div>
          </div>
        </Link>
        <Link to={`/team/id}`} className="team__links ">
          <div className="team__slider__card">
            <div className="team__slider__card__image">
              <img src={vekilPng} alt="wqe" />
              <ul className="team__slider__card__image__ul">
                <li>
                  <img src={mapPng} alt="" /> Ak. Həsən Əliyev 82F
                </li>
                <li>
                  <img src={phonePng} alt="" /> +994 50 555-55-55
                </li>
                <li>
                  <img src={messagePng} alt="" /> officedefendo@gmail.com
                </li>
              </ul>
            </div>
            <div className="team__slider__card__name">sasd </div>
          </div>
        </Link>
        
        <Link to={`/team/id}`} className="team__links ">
          <div className="team__slider__card">
            <div className="team__slider__card__image">
              <img src={vekilPng} alt="wqe" />
              <ul className="team__slider__card__image__ul">
                <li>
                  <img src={mapPng} alt="" /> Ak. Həsən Əliyev 82F
                </li>
                <li>
                  <img src={phonePng} alt="" /> +994 50 555-55-55
                </li>
                <li>
                  <img src={messagePng} alt="" /> officedefendo@gmail.com
                </li>
              </ul>
            </div>
            <div className="team__slider__card__name">sasd </div>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Team;
