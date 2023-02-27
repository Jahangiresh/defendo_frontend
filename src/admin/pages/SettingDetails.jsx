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
import { Swal } from "sweetalert2/dist/sweetalert2";
import { Helmet } from "react-helmet";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, setting: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const SettingDetails = () => {
  const popUp = (title, icon, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };

  const { pathname } = useLocation();
  const params = useParams();
  const id = params.id;

  const [{ loader, setting, error }, dispatch] = useReducer(reducer, {
    loader: true,
    error: false,
    setting: {},
  });
  const apiEndPoint = `https://defendovb.az/api/v1/settings/${id}`;
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
  const settingPost = async (setting) => {
    const formData = new FormData();
    formData.append("key", setting.key);
    formData.append("value", setting.value);
    formData.append("imageFile", setting.image);

    await axios
      .put(`https://defendovb.az/api/v1/settings/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        window.location = "/admin/setting";
      })
      .catch((error) => {
        popUp("Oops...", "error", error.response.data.title);
      });
  };
  const formik = useFormik({
    initialValues: {
      key: "",
      value: "",
      image: "",
    },
    onSubmit: (values) => {
      settingPost(values);
    },
  });

  const [change, setChange] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="productdetails">
      <Helmet>
        <title>setting</title>
      </Helmet>
      {setting.image && (
        <div className="productdetails__images">
          <div className="productdetails__images__image">
            {setting.image && (
              <img
                style={{ width: "200px" }}
                src={
                  "https://defendovb.az/api/v1/files?filepath=" +
                  setting.image.filePath
                }
                alt=""
              />
            )}
          </div>
        </div>
      )}
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
          <h3 className="title__h mt-2">Açar söz:</h3>
          {change && change ? (
            <input
              style={{ width: "90%", padding: "10px" }}
              className="edit_inputs "
              type="text"
              defaultValue={setting.key}
              readOnly
            />
          ) : (
            <input
              style={{ width: "90%", padding: "10px" }}
              className="edit_inputs"
              type="text"
              defaultValue={setting.key}
              name="key"
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
        {setting.value && (
          <div className="productdetails__title">
            <h3 className="title__h mt-2">Dəyər:</h3>
            {change && change ? (
              <input
                type="text"
                style={{ width: "90%", padding: "15px" }}
                className="edit_inputs "
                defaultValue={setting.value}
                readOnly
              />
            ) : (
              <input
                style={{ width: "90%", padding: "15px" }}
                className="edit_inputs"
                type="text"
                name="value"
                defaultValue={setting.value}
                onChange={formik.handleChange}
              />
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
        )}
        <button
          type="submit"
          className="bg-success btn btn-success text-light  "
        >
          Yadda saxla
        </button>
      </form>
    </div>
  );
};

export default SettingDetails;
