import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/css/services.scss";
import LoadingBox from "./LoadingBox";
import { getAllServices, getStatus } from "../features/serviceSlice";

const ServiceCard = () => {
  // const { items, status } = useSelector((state) => state.services);
  const services = useSelector(getAllServices);
  const status = useSelector(getStatus);
  return status === "pending" ? (
    <LoadingBox />
  ) : (
    <div className="row">
      {services &&
        services.map((service) => (
          <div key={service.id} className="col-lg-4 col-md-12 col-sm-12">
            <Link to={`/services/${service.id}`}>
              <div className="custom-card">
                <div>
                  <img
                    src={
                      "https://defendovb.az/api/v1/files?filepath=" +
                      service.image.filePath
                    }
                    alt=""
                  />
                </div>
                <h5>{service.title}</h5>
                <p>
                  {service.description.length > 70
                    ? service.description.slice(0, 70) + "..."
                    : service.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ServiceCard;
