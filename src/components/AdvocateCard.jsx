import React from "react";
import { useSelector } from "react-redux";
import vekilPng from "../assets/images/vekilPng.png";
import "../assets/css/advocatecard.scss";
import { Link } from "react-router-dom";

const AdvocateCard = () => {
  const { items, status } = useSelector((state) => state.advocates);
  console.log(status);
  return (
    <div className="advocatecard__slider__card__row row">
      {status === "pending" ? (
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex
          nostrum debitis maiores?
        </h1>
      ) : (
        items &&
        items.map((item) => (
          <Link
            to={`/team/${item.id}`}
            key={item.id}
            className="advocatecard__slider__card team__links col-3"
          >
            <div className="advocatecard__slider__card__image">
              <img src={vekilPng} alt="" />
            </div>
            <div className="advocatecard__slider__card__name">{item.name}</div>
          </Link>
        ))
      )}
    </div>
  );
};

export default AdvocateCard;
