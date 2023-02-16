import React, { useReducer, useEffect } from "react";
import { useState } from "react";
import "../scss/productdetails.scss";
import penPng from "../assets/images/Vector.png";
import plusPng from "../assets/images/plus.png";
import aznPng from "../assets/images/azn.png";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUpload } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

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

const ProductDetails = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const id = params.id;

  const [{ loader, service, error }, dispatch] = useReducer(reducer, {
    loader: true,
    error: false,
    service: {},
  });
  const apiEndPoint = `../../api/v1/providedservices/${id}`;
  useEffect(() => {
    const getItem = async () => {
      try {
        dispatch({ type: "FETCH_REQ" });
        const { data } = await axios.get(apiEndPoint);
        dispatch({ type: "FETCH_SUCCES", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        window.location.href = "/*";
      }
    };
    getItem();
  }, [pathname]);

  const [change, setChange] = useState(true);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {});
  return (
    <div className="productdetails">
      <div className="productdetails__images">
        <div className="productdetails__images__image">
          {service.image && (
            <img
              src={"../../api/v1/files?filepath=" + service.image.filePath}
              alt=""
            />
          )}
        </div>
      </div>
      <label className="custom-file-upload">
        <input type="file" accept="image/*" />
        {/* <span> Upload image</span> <AiOutlineUpload /> */}
      </label>
      <div className="productdetails__title">
        <h3 className="title__h">Başlıq:</h3>
        {change && change ? (
          <input
            style={{ marginLeft: "20px" }}
            className="edit_inputs "
            type="text"
            defaultValue={service.title}
            readOnly
          />
        ) : (
          <input
            style={{ marginLeft: "20px" }}
            className="edit_inputs"
            type="text"
            defaultValue={service.title}
          />
        )}
        {change && change ? (
          <BsPencil
            className="pencil__class"
            onClick={() => setChange((value) => !value)}
          />
        ) : (
          //   <button onClick={() => setChange((value) => !value)}> change</button>
          <BsPencil
            className="text-success pencil__class"
            onClick={() => setChange((value) => !value)}
          />
        )}
      </div>
      <div className="productdetails__title">
        <h3 className="title__h">Təsviri:</h3>
        {change && change ? (
          <textarea
            style={{ marginLeft: "20px" }}
            className="edit_inputs "
            type="text"
            defaultValue={service.description}
            readOnly
          ></textarea>
        ) : (
          <textarea
            style={{ marginLeft: "20px" }}
            className="edit_inputs"
            type="text"
            defaultValue={service.description}
          ></textarea>
        )}
        {change && change ? (
          <BsPencil
            className="pencil__class"
            onClick={() => setChange((value) => !value)}
          />
        ) : (
          //   <button onClick={() => setChange((value) => !value)}> change</button>
          <BsPencil
            className="text-success pencil__class"
            onClick={() => setChange((value) => !value)}
          />
        )}
      </div>
      <button className="bg-success  text-light  ">save</button>
    </div>
  );
};

export default ProductDetails;
