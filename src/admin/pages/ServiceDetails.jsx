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
import { height } from "@mui/system";
import { useFormik } from "formik";

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
  const apiEndPoint = `http://defendo-001-site1.atempurl.com/api/v1/providedservices/${id}`;
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

  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  const servicePost = async (service) => {
    const formData = new FormData();
    formData.append("title", service.title);
    formData.append("description", service.description);
    formData.append("imageFile", service.image);

    await axios
      .put(`../../api/v1/providedservices/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        window.location = "/admin/services";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
      servicePost(values);
    },
  });

  const [change, setChange] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="productdetails">
      <div className="productdetails__images">
        <div className="productdetails__images__image">
          {service.image && (
            <img
              style={{ width: "200px" }}
              src={"../../api/v1/files?filepath=" + service.image.filePath}
              alt=""
            />
          )}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <label className="custom-file-upload mt-3">
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              formik.setFieldValue("image", e.currentTarget.files[0]);
            }}
          />
          {/* <span> Upload image</span> <AiOutlineUpload /> */}
        </label>
        <div className="productdetails__title">
          <h3 className="title__h mt-2">Başlıq:</h3>
          {change && change ? (
            <input
              style={{ width: "90%", padding: "10px" }}
              className="edit_inputs "
              type="text"
              defaultValue={service.title}
              readOnly
            />
          ) : (
            <input
              style={{ width: "90%", padding: "10px" }}
              className="edit_inputs"
              type="text"
              defaultValue={service.title}
              name="title"
              onChange={formik.handleChange}
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
          <h3 className="title__h mt-2">Təsviri:</h3>
          {change && change ? (
            <textarea
              style={{ width: "90%", height: "200px", padding: "15px" }}
              className="edit_inputs "
              type="text"
              defaultValue={service.description}
              readOnly
            ></textarea>
          ) : (
            <textarea
              style={{ width: "90%", height: "200px", padding: "15px" }}
              className="edit_inputs"
              type="text"
              name="description"
              defaultValue={service.description}
              onChange={formik.handleChange}
            ></textarea>
          )}
          {change && change ? (
            <BsPencil
              className="pencil__class"
              onClick={() => setChange((value) => !value)}
            />
          ) : (
            <BsPencil
              className="text-success pencil__class"
              onClick={() => setChange((value) => !value)}
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-success btn btn-success text-light  "
        >
          Yadd saxla
        </button>
      </form>
    </div>
  );
};

export default ProductDetails;
