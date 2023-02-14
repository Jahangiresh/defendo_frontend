import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/css/newscard.scss";
import newsPng from "../assets/images/newsPng.png";
import timePng from "../assets/images/time.png";
import LoadingBox from "./LoadingBox";
const NewsCard = () => {
  const { items, status } = useSelector((state) => state.news);
  const navigate = useNavigate();
  return status === "pending" ? (
    <LoadingBox />
  ) : (
    <div className="newscard">
      {items &&
        items.map((item) => (
          <div className="newscard__col col-4">
            <div className="newscard__col__img">
              <img src={newsPng} alt="" />
            </div>
            <div className="newscard__col__content">
              <span className="newscard__col__content__span">
                <img src={timePng} alt="" /> {item.createdAt}
              </span>
              <h3 className="newscard__col__content__h">{item.title}</h3>
              <p className="newscard__col__content__p">
                {item.desc.substring(0, 100)}...
              </p>
              <button
                onClick={() => navigate(`/news/${item.id}`)}
                className="newscard__col__content__button"
              >
                ətraflı oxu
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsCard;
