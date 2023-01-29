import React from "react";
import { Link } from "react-router-dom";
import courthouse from "../assets/images/map_courthouse.png";

const ServiceCard = ({ service: { id, title, desc } }) => {
  return (
    <>
      <div key={id} className="col-lg-3 col-md-12 col-sm-12">
        <Link to={`/services/${id}`}>
          <div className="custom-card">
            <img src={courthouse} alt="" />
            <h5>{title}</h5>
            <p>{desc.length > 70 ? desc.slice(0, 70) + "..." : desc}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
