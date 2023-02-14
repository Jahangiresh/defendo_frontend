import React, { useReducer } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import "../assets/css/newscard.scss";
import HeaderDown from "../components/header/HeaderDown";
import timePng from "../assets/images/time.png";
import newsPng from "../assets/images/newsPng.png";
import facebookIcon from "../assets/images/facebookIcon.png";
import linkedinIcon from "../assets/images/linkedinIcon.png";
import twitterIcon from "../assets/images/twitterIcon.png";
import { useSelector } from "react-redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loading: true };
    case "FETCH_SUCCES":
      return { ...state, item: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const SingleNews = () => {
  const { items, status } = useSelector((state) => state.news);
  const [{ loading, item, error }, dispatch] = useReducer(reducer, {
    loading: true,
    item: {},
    error: false,
  });
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getItem = async () => {
      try {
        dispatch({ type: "FETCH_REQ" });
        const resp = await axios.get(`http://localhost:3000/news/${id}`);
        console.log(resp);
        dispatch({ type: "FETCH_SUCCES", payload: resp.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
      }
    };
    getItem();
  }, [id]);

  return loading ? (
    <LoadingBox />
  ) : (
    <div className="singlenews">
      <HeaderDown>
        <h1>Hüquqi məqalələr</h1>
      </HeaderDown>
      <div className="singlenews__container custom-container">
        <div className="singlenews__container__row row">
          <div className="singlenews__container__row__left col-8">
            <p className="singlenews__container__row__left__p">
              <img src={timePng} alt="" /> {item.createdAt}
            </p>
            <h3 className="singlenews__container__row__left__h">
              {item.title}
            </h3>
            <div className="singlenews__container__row__left__img">
              <img src={newsPng} alt="" />
            </div>
            <h3 className="singlenews__container__row__left__xulase">Xülasə</h3>
            <p className="singlenews__container__row__left__xulaseP">
              {item.xulase}
            </p>
            <h3 className="singlenews__container__row__left__xulase">Məqalə</h3>
            <p className="singlenews__container__row__left__xulaseP">
              {item.meqale}
            </p>
            <div className="singlenews__container__row__left__share">
              <h3 className="singlenews__container__row__left__xulase share__h">
                Paylaş:
              </h3>
              <div className="singlenews__container__row__left__share__buttons">
                <button className="singlenews__container__row__left__share__buttons__button button__facebook">
                  <img src={facebookIcon} alt="" /> facebook
                </button>
                <button className="singlenews__container__row__left__share__buttons__button button__linkedin">
                  <img src={linkedinIcon} alt="" /> linkedin
                </button>
                <button className="singlenews__container__row__left__share__buttons__button button__twitter">
                  <img src={twitterIcon} alt="" /> twitter
                </button>
              </div>
            </div>
          </div>
          <div className="singlenews__container__row__right col-4">
            <ul className="singlenews__container__row__right__content">
              <li className="singlenews__container__row__right__content__li">
                <p className="singlenews__container__row__left__p right__p">
                  <img src={timePng} alt="" /> {item.createdAt}
                </p>
                <h3 className="singlenews__container__row__right__content__li__title title1">
                  {item.title}
                </h3>
              </li>
              {items &&
                items
                  .filter((it) => it.id != id)
                  .map((it) => (
                    <Link
                      key={it.id}
                      to={`/news/${it.id}`}
                      className="singlenews__container__row__right__content__li link-default"
                    >
                      <p className="singlenews__container__row__left__p right__p">
                        <img src={timePng} alt="" /> {it.createdAt}
                      </p>
                      <h3 className="singlenews__container__row__right__content__li__title ">
                        {it.title}
                      </h3>
                    </Link>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
