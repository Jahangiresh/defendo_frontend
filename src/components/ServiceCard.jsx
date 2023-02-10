import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import courthouse from "../assets/images/map_courthouse.png";
import "../assets/css/services.scss";
import Loader from "../assets/images/Component 1.png";

const ServiceCard = () => {
  const { items, status } = useSelector((state) => state.services);
  return (
    <div className="row">
      {items &&
        items.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-12 col-sm-12">
            <Link to={`/services/${item.id}`}>
              <div className="custom-card">
                <div>
                  <img
                    src={
                      "https://localhost:7148/api/v1/files?filepath=" +
                      item.image.filePath
                    }
                    alt=""
                  />
                </div>
                <h5>{item.title}</h5>
                <p>
                  {item.description.length > 70
                    ? item.description.slice(0, 70) + "..."
                    : item.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ServiceCard;
