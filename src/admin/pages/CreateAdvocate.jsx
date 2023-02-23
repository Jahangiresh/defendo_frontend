import React from "react";
import { useFormik } from "formik";
import "../scss/adminadvocates.scss";
import { useDispatch } from "react-redux";
import { createAdvocate } from "../../features/teamSlice";
// import { toast } from "react-toastify";
const CreateAdvocate = () => {
  const dispatch = useDispatch();

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
      try {
        var req = new FormData();
        req.append("firstName", values.firstName);
        req.append("lastName", values.lastName);
        req.append("email", values.email);
        req.append("phoneNumber", values.phoneNumber);
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
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="createadvocates">
      <form className="createadvocates__forms" onSubmit={formik.handleSubmit}>
        <label className="createadvocates__forms__label" htmlFor="image">
          firstName{" "}
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
          firstName{" "}
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
          lastName{" "}
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
          Email Address
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
          phoneNumber
        </label>
        <input
          className="createadvocates__forms__input"
          id="phoneNumber"
          name="phoneNumber"
          type="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        <label className="createadvocates__forms__label" htmlFor="moreInfo">
          moreInfo
        </label>
        <input
          className="createadvocates__forms__input"
          id="moreInfo"
          name="moreInfo"
          type="moreInfo"
          onChange={formik.handleChange}
          value={formik.values.moreInfo}
        />
        <label className="createadvocates__forms__label" htmlFor="role">
          role
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
