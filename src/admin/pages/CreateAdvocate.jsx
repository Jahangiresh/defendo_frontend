import React from "react";
import { useFormik } from "formik";
import "../scss/adminadvocates.scss";
import { useDispatch, useSelector } from "react-redux";
import { createAdvocate, getError } from "../../features/teamSlice";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useState } from "react";
const CreateAdvocate = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      moreInfo: "",
      imageFile: "",
      role: "",
    },
    onSubmit: (values) => {
      var req = new FormData();
      req.append("firstName", values.firstName);
      req.append("lastName", values.lastName);
      req.append("email", values.email);
      req.append("phoneNumber", fullnumber + values.phoneNumber);
      req.append("moreInfo", values.moreInfo);
      req.append("role", values.role);
      req.append("imageFile", values.imageFile);
      dispatch(
        createAdvocate({
          firstName: req.get("firstName"),
          lastName: req.get("lastName"),
          email: req.get("email"),
          phoneNumber: req.get("phoneNumber"),
          moreInfo: req.get("moreInfo"),
          imageFile: req.get("imageFile"),
          role: req.get("role"),
        })
      );
    },
  });
  const [fullnumber, setFullNumber] = useState();

  return (
    <div className="createadvocates">
      <Helmet>
        <title>create lawyer</title>
      </Helmet>
      <div>
        <Toaster />
      </div>
      <form className="createadvocates__forms" onSubmit={formik.handleSubmit}>
        <label className="createadvocates__forms__label" htmlFor="image">
          şəkil
        </label>
        <input
          className="createadvocates__forms__input"
          id="image"
          name="imageFile"
          accept="image/*"
          type="file"
          onChange={(e) => {
            formik.setFieldValue("imageFile", e.currentTarget.files[0]);
          }}
        />
        <label className="createadvocates__forms__label" htmlFor="firstName">
          ad
        </label>
        <input
          className="createadvocates__forms__input"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label className="createadvocates__forms__label" htmlFor="lastName">
          soyad
        </label>
        <input
          className="createadvocates__forms__input"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label className="createadvocates__forms__label" htmlFor="email">
          Email
        </label>
        <input
          className="createadvocates__forms__input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />{" "}
        <label className="createadvocates__forms__label" htmlFor="phoneNumber">
          nömrə
        </label>
        <div className="phonenumber__div">
          <span>+994</span>
          <select
            onChange={(e) => setFullNumber("+994" + " " + e.target.value + " ")}
            name=""
            id=""
          >
            <option selected disabled hidden></option>
            <option value="55">55</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="70">70</option>
            <option value="77">77</option>
          </select>
          <input
            className="createadvocates__forms__input"
            id="phoneNumber"
            name="phoneNumber"
            type="phoneNumber"
            placeholder="666-66-66"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            maxLength={9}
          />
        </div>
        <label className="createadvocates__forms__label" htmlFor="moreInfo">
          məlumat
        </label>
        <textarea
          className="createadvocates__forms__input"
          id="moreInfo"
          name="moreInfo"
          type="moreInfo"
          onChange={formik.handleChange}
          value={formik.values.moreInfo}
        />
        <label className="createadvocates__forms__label" htmlFor="role">
          rol
        </label>
        <input
          className="createadvocates__forms__input"
          id="role"
          name="role"
          type="role"
          onChange={formik.handleChange}
          value={formik.values.role}
        />
        <button className="createadvocates__forms__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAdvocate;
