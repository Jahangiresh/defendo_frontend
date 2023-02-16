import axios from "axios";
import { Formik, useFormik } from "formik";
import React from "react";
import "../scss/productdetails.scss";

const CreateService = () => {
  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  const servicePost = async (service) => {
    const formData = new FormData();
    formData.append("title", service.title);
    formData.append("description", service.description);
    formData.append("imageFile", service.image);

    // formData.append("image", service.image, service.image.name);
    // console.log(formData.get("image"));

    await axios
      .post(
        "https://localhost:7148/api/v1/providedservices",
        formData,
        // {
        //   title: service.title,
        //   description: service.description,
        //   imageFile: formData,
        // },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        console.log("Yaradildi");
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
              // const formData = new FormData();
              // const file = e.target.files[0];
              // formData.append("imageFile", file, file.name);
              // console.log(formData);
              // console.log(e.currentTarget.files[0]);
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
