import axios from "axios";
import React from "react";
import "../assets/css/servicedetail.scss";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
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
  const apiEndPoint = `http://localhost:3000/services/${id}`;

  useEffect(() => {
    const getItem = async () => {
      dispatch({ type: "FETCH_REQ" });
      try {
        const { data } = await axios.get(apiEndPoint);
        dispatch({ type: "FETCH_SUCCES", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        // alert(error);
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
                  <p>{service.desc}</p>
                </div>
                <div className="contact">
                  <a className="link" href="">
                    Bizimlə əlaqə
                  </a>
                </div>
              </div>
              <div className="logo">
                <img src={courthouse} alt="" />
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
