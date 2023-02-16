
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../scss/products.scss";

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
  const navigate = useNavigate();

  const [{ loader, services, error }, dispatch] = useReducer(reducer, {
    loader: true,
    error: false,
    services: [],
  });
  const apiEndPoint = `../api/v1/providedservices`;
  useEffect(() => {
    const getItem = async () => {
      try {
        dispatch({ type: "FETCH_REQ" });
        const { data } = await axios.get(apiEndPoint);
        dispatch({ type: "FETCH_SUCCES", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        alert(error);
        // window.location.href = "/*";
      }
    };
    getItem();
  }, []);

  return (
    <div className="products">
      <div className="col-12 pb-3">
        <Link
          to={"/admin/service/create"}
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "20px",
          }}
        >
          Xidmət Yartamaq
        </Link>
      </div>
      <div className="col-12 p-0">
        <table class="table ">
          <thead className="p-0">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Şəkil</th>
              <th scope="col">Başlıq</th>
              <th scope="col">Təsviri</th>
            </tr>
          </thead>
          {services &&
            services.map((service, index) => (
              <Link to={"/admin/services/" + service.id}>
                <div className="my__box ">
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td className="image__td">
                        <img
                          src={
                            "../api/v1/files?filepath=" + service.image.filePath
                          }
                          alt=""
                        />
                      </td>
                      <td>
                        {service.title.length > 10
                          ? service.title.slice(0, 10) + "..."
                          : service.title}
                      </td>
                      <td>
                        {service.description.length > 15
                          ? service.description.slice(0, 15) + "..."
                          : service.description}
                      </td>
                    </tr>
                  </tbody>
                </div>
              </Link>
            ))}
        </table>
      </div>
    </div>
  );
import React from "react";

const Services = () => {
  return <div>Services</div>;
};

export default Services;
