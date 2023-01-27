import React from "react";
import { useSelector } from "react-redux";
import vekilPng from "../assets/images/vekilPng.png";
import "../assets/css/advocatecard.scss";

const AdvocateCard = () => {
  const { items, status } = useSelector((state) => state.advocates);

  return (
    <div className="advocatecard__slider__card__row row">
      {items &&
        items.map((item) => (
          <div key={item.id} className="advocatecard__slider__card col-3">
            <div className="advocatecard__slider__card__image">
              <img src={vekilPng} alt="" />
            </div>
            <div className="advocatecard__slider__card__name">{item.name}</div>
          </div>
        ))}
    </div>
  );
};

export default AdvocateCard;
