import React from "react";
import "../assets/css/services.scss";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <main>
      <div className="custom-container">
        <div className="row">
          <ServiceCard />
        </div>
      </div>
    </main>
  );
};

export default Services;
