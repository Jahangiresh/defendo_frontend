import React from "react";
import { Helmet } from "react-helmet";
import "../assets/css/services.scss";
import HeaderDown from "../components/header/HeaderDown";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <>
      <HeaderDown>
        <h1>Xidmətlər</h1>
        <p>Peşəkar xidmətlərimizlə tanış olun.</p>
      </HeaderDown>
      <main>
        <Helmet>
          <title>xidmətlər</title>
        </Helmet>
        <div className="custom-container">
          <div className="row">
            <ServiceCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
