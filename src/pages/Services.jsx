import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "../assets/css/services.scss";
import Loader from "../assets/images/Component 1.png";
import ServiceCard from "../components/ServiceCard";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, services: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const Services = () => {
  const [{ loader, services, error }, dispatch] = useReducer(reducer, {
    loader: true,
    error: false,
    services: [],
  });
  const apiEndPoint = "http://localhost:3000/services";

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "FETCH_REQ" });
      try {
        const { data } = await axios.get(apiEndPoint);
        dispatch({ type: "FETCH_SUCCES", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        alert(error);
      }
    };
    getData();
  }, []);

  return (
    <main>
      <div className="custom-container">
        <div className="row">
          {loader ? (
            <img className="loader" src={Loader} alt="" />
          ) : (
            services.map((service) => {
              return <ServiceCard key={service.id} service={service} />;
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default Services;
