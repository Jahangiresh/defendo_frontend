import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../assets/css/singleadvocate.scss";
import mapPng from "../assets/images/mapIcon.png";
import phonePng from "../assets/images/phonePng.png";
import messagePng from "../assets/images/messagePng.png";
import advocatePng from "../assets/images/vekilPng.png";
import AdvocateCard from "../components/AdvocateCard";
import HeaderDown from "../components/header/HeaderDown";
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

  return (
    <>
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
                    <img src={mapPng} alt="" /> salam
                  </li>
                  <li className="singleadvocate__container__row__left__details__ul__li">
                    <img src={phonePng} alt="" /> salam
                  </li>
                  <li className="singleadvocate__container__row__left__details__ul__li">
                    <img src={messagePng} alt="" /> salam
                  </li>
                </ul>
              </div>
            </div>
            <div className="singleadvocate__container__row__right col-lg-8  col-5">
              <h1 className="singleadvocate__container__row__right__title">
                {advocate.name}
              </h1>
              <p className="singleadvocate__container__row__right__about">
                {" "}
                text-align: justify; asdasdasd Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequuntur unde non ea?
                Reprehenderit, corporis. Suscipit nemo ducimus at ut labore
                laudantium sapiente officiis modi harum, similique sunt,
                explicabo, quaerat iure ad! Quae, explicabo cumque enim
                doloribus, voluptatum unde exercitationem voluptatibus libero
                nostrum fuga accusantium et pariatur praesentium aliquam
                expedita? Voluptate provident cupiditate nulla impedit fugit
                nobis modi voluptatibus ea blanditiis iste quisquam, ducimus est
                assumenda nihil adipisci magnam in maiores odit excepturi
                veniam, eveniet soluta. Quisquam nemo explicabo enim fugit amet
                omnis, magni eos quas sunt. Harum ipsa animi ea? Nobis
                perspiciatis repellendus corrupti quia cum impedit dolores
                debitis at voluptatem aperiam minus dolore qui nam porro
                repudiandae dicta, rerum ab, est amet omnis veritatis dolorem
                excepturi? Distinctio sit officiis consectetur. Nobis eligendi
                doloribus voluptatem sit id quibusdam totam nesciunt ea porro
                vel cum eius aliquid reprehenderit odit, earum ipsam nulla
                provident. Ad nemo minima illo. Cumque necessitatibus dolorem
                perferendis maxime quas similique, quos ullam illum. Quia odio,
                eaque adipisci culpa est praesentium earum aut dolor maxime ad
                numquam, dolore et ipsam ullam esse ab ea commodi, ducimus nam
                porro quisquam doloremque aliquam quis nesciunt. Quo pariatur
                atque itaque amet. Voluptatibus qui odio fugit modi eligendi
                quam eos facere culpa.
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
