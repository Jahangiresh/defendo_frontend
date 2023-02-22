import axios from "axios";
import { Formik, useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2/dist/sweetalert2";
import "../scss/productdetails.scss";

const CreateService = () => {
  const popUp = (title, icon, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };

  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  const servicePost = async (service) => {
    const formData = new FormData();
    formData.append("title", service.title);
    formData.append("description", service.description);
    formData.append("imageFile", service.image);
    await axios
      .post(
        "http://defendo-001-site1.atempurl.com/api/v1/providedservices",
        {
          title: formData.get("title"),
          description: formData.get("description"),
          imageFile: formData.get("imageFile"),
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        window.location = "/admin/services";
      })
      .catch((error) => {
        console.log(error);
        popUp("Oops...", "error", "Zəhmət olmasa dataları düzgün daxil edin");
      });
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      servicePost(values);
    },
  });
  return (
    <div className="productdetails">
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
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
        <div className="productdetails__title">
          <h3 className="title__h">Başlıq:</h3>
          <input
            name="title"
            style={{ marginLeft: "20px" }}
            className="edit_inputs "
            type="text"
            onChange={formik.handleChange}
          />
        </div>
        <div className="productdetails__title">
          <h3 className="title__h">Təsviri:</h3>
          <textarea
            name="description"
            style={{ marginLeft: "20px" }}
            className="edit_inputs "
            type="text"
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <button type="submit" className="bg-success  text-light  ">
          Yarat
        </button>
      </form>
    </div>
  );
};

export default CreateService;
