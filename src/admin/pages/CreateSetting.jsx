import axios from "axios";
import { Formik, useFormik } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2";
import { createSetting } from "../../features/settingSlice";
import "../scss/productdetails.scss";

const CreateSetting = () => {
  const popUp = (title, icon, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };
  const dispatch = useDispatch();
  const settingPost = async (setting) => {
    const formData = new FormData();
    formData.append("key", setting.key);
    formData.append("value", setting.value);
    formData.append("imageFile", setting.image);
    dispatch(createSetting(formData));
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
  return (
    <div className="productdetails">
      <Helmet>
        <title>add setting</title>
      </Helmet>
      <div className="productdetails__images">
        <div className="productdetails__images__image">
          {/* {service.image && (
            <img
              src={"../../api/v1/files?filepath=" + service.image.filePath}
              alt=""
            />
          )} */}
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
        style={{
          width: "100%",
        }}
      >
        <label className="custom-file-upload">
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
        <div
          className="productdetails__title"
          style={{
            height: "50px",
          }}
        >
          <h3 className="title__h">Açar söz:</h3>
          <input
            name="key"
            style={{ marginLeft: "20px" }}
            className="edit_inputs "
            type="text"
            onChange={formik.handleChange}
            style={{
              height: "100%",
            }}
          />
        </div>
        <div
          className="productdetails__title"
          style={{
            height: "50px",
          }}
        >
          <h3 className="title__h">Dəyər:</h3>
          <input
            name="value"
            style={{ marginLeft: "20px" }}
            className="edit_inputs "
            type="text"
            onChange={formik.handleChange}
            style={{
              height: "100%",
            }}
          />
        </div>
        <button type="submit" className="bg-success  text-light  ">
          Yarat
        </button>
      </form>
    </div>
  );
};

export default CreateSetting;
