import axios from "axios";
import React, { useEffect, useReducer } from "react";
import "../assets/css/servicedetail.scss";
import { useLocation, useParams } from "react-router-dom";
import HeaderDown from "../components/header/HeaderDown";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet";
import LoadingBox from "../components/LoadingBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, service: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const ServicesDetail = () => {
  const { pathname } = useLocation();

  const params = useParams();
  const id = params.id;

  const [{ loader, service, error }, dispatch] = useReducer(reducer, {
    loader: true,
    error: false,
    service: {},
  });
  const apiEndPoint = `https://defendovb.az/api/v1/providedservices/${id}`;
  useEffect(() => {
    const getItem = async () => {
      try {
        dispatch({ type: "FETCH_REQ" });
        const { data } = await axios.get(apiEndPoint);
        dispatch({ type: "FETCH_SUCCES", payload: data });
      } catch (error) {
        alert("error:" + error);
        dispatch({ type: "FETCH_FAIL" });
        alert(error);
        window.location.href = "/*";
      }
    };
    getItem();
  }, [pathname]);
  return loader ? (
    <LoadingBox />
  ) : (
    <>
      <HeaderDown>
        <h1>Xidmətlər</h1>
        <p>{service.title}</p>
      </HeaderDown>
      <main>
        <Helmet>
          <title>xidmətlər</title>
        </Helmet>
        <section id="detail">
          <div className="custom-container">
            <div className="cus-row">
              <div className="info">
                <div className="title">
                  <h4>{service.title}</h4>
                </div>
                <div className="desc">
                  <p>{service.description}</p>
                </div>
                <div className="contact">
                  <a className="link" href="#">
                    Bizimlə əlaqə
                  </a>
                </div>
              </div>
              <div className="logo">
                {service.image && (
                  <img
                    src={`https://defendovb.az/api/v1/files?filepath=${service.image.filePath}`}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div className="custom-container pt-5">
            <div className="row">
              <ServiceCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesDetail;
