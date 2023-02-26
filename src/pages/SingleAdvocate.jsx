import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../assets/css/singleadvocate.scss";
import mapPng from "../assets/images/mapIcon.png";
import phonePng from "../assets/images/phonePng.png";
import messagePng from "../assets/images/messagePng.png";
import AdvocateCard from "../components/AdvocateCard";
import HeaderDown from "../components/header/HeaderDown";
import LoadingBox from "../components/LoadingBox";
import { Helmet } from "react-helmet";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, advocate: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

const SingleAdvocate = () => {
  const pathname = useLocation();
  const [{ advocate, loading, error }, dispatch] = useReducer(reducer, {
    advocate: {},
    loading: true,
    error: false,
  });
  const params = useParams();
  const _id = params.id;

  const apiEndPoint = `https://defendovb.az/api/v1/lawyers/${_id}`;

  useEffect(() => {
    const getAdvocate = async () => {
      try {
        dispatch({ type: "FETCH_REQ" });
        const resp = await axios.get(apiEndPoint);
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        window.location.href = "/*";
      }
    };
    getAdvocate();
  }, [pathname]);

  return loading ? (
    <LoadingBox />
  ) : (
    <>
      <Helmet>
        <title>
          Vəkillər {advocate.firstName}-{advocate.lastName}
        </title>
      </Helmet>
      <HeaderDown>
        <h1>Komandamız</h1>
        <p>Peşəkar komandamız ilə tanış olun.</p>
      </HeaderDown>
      <div className="singleadvocate">
        <div className="singleadvocate__container custom-container ">
          <div className="singleadvocate__container__row row">
            <div className="singleadvocate__container__row__left col-lg-4 col-6">
              <div className="singleadvocate__container__row__left__image">
                {advocate.image && (
                  <img
                    src={
                      "https://defendovb.az/api/v1/files?filepath=" +
                      advocate.image.filePath
                    }
                    alt=""
                  />
                )}
              </div>
              <div className="singleadvocate__container__row__left__details">
                <ul className="singleadvocate__container__row__left__details__ul">
                  <li className="singleadvocate__container__row__left__details__ul__li">
                    <img src={mapPng} alt="" /> Ak. Həsən Əliyev 82F
                  </li>
                  <li className="singleadvocate__container__row__left__details__ul__li">
                    <img src={phonePng} alt="" /> {advocate.phoneNumber}
                  </li>
                  <li className="singleadvocate__container__row__left__details__ul__li">
                    <img src={messagePng} alt="" /> {advocate.email}
                  </li>
                </ul>
              </div>
            </div>
            <div className="singleadvocate__container__row__right col-lg-8  col-5">
              <h1 className="singleadvocate__container__row__right__title">
                {advocate.firstName} {advocate.lastName}
              </h1>
              <p className="singleadvocate__container__row__right__about">
                {advocate.moreInfo}
              </p>
            </div>
          </div>
          <AdvocateCard />
        </div>
      </div>
    </>
  );
};

export default SingleAdvocate;
