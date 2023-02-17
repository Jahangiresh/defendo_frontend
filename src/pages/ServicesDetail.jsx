import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import "../assets/css/servicedetail.scss";
import { useLocation, useParams } from "react-router-dom";
import courthouse from "../assets/images/courthouse.png";
import Services from "./Services";
import NotFound from "./NotFound";
import HeaderDown from "../components/header/HeaderDown";
import ServiceCard from "../components/ServiceCard";

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
  const apiEndPoint = `http://defendo-001-site1.atempurl.com/api/v1/providedservices/${id}`;
  useEffect(() => {
    console.log("salam");
    const getItem = async () => {
      try {
        dispatch({ type: "FETCH_REQ" });
        const { data } = await axios.get(apiEndPoint);
        console.log(data);
        dispatch({ type: "FETCH_SUCCES", payload: data });
      } catch (error) {
        console.log("error:" + error);
        dispatch({ type: "FETCH_FAIL" });
        alert(error);
        window.location.href = "/*";
      }
    };
    getItem();
  }, [pathname]);
  return (
    <>
      <HeaderDown>
        <h1>Xidmətlər</h1>
        <p>{service.title}</p>
      </HeaderDown>
      <main>
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
                    src={`/api/v1/files?filepath=${service.image.filePath}`}
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
