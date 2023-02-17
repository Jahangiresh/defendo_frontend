import React, { useEffect, useReducer } from "react";
import { useFormik } from "formik";
import { getSingleAdvocate } from "../../features/teamSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, advocate: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const EditAdvocate = () => {
  const [{ loading, error, advocate }, dispatch] = useReducer(reducer, {
    advocate: {},
    loading: true,
    error: false,
  });
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getAdvocate = async () => {
      dispatch({ type: "FETCH_REQ" });

      try {
        const resp = await axios.get(`../api/v1/lawyers/${id}`);

        dispatch({ type: "FETCH_SUCCES", payload: resp.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        alert("err");
      }
    };
    getAdvocate();
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      moreInfo: "",
      image: "",
    },
    onSubmit: (values) => {
      try {
        var req = new FormData();
        req.append("firstName", values.firstName);
        req.append("lastName", values.lastName);
        req.append("email", values.email);
        req.append("phoneNumber", values.phoneNumber);
        req.append("moreInfo", values.moreInfo);
        req.append("image", values.image);
        // dispatch(updateAdvocate(req));
      } catch (error) {
        alert("salam");
      }
    },
  });
  return (
    <div>
      <div className="createadvocates">
        <form className="createadvocates__forms" onSubmit={formik.handleSubmit}>
          <label className="createadvocates__forms__label" htmlFor="image">
            image
          </label>
          <input
            className="createadvocates__forms__input"
            id="image"
            name="image"
            accept="image/*"
            type="file"
            onChange={(e) => {
              formik.setFieldValue("image", e.currentTarget.files[0]);
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
            // value={formik.values.firstName}
            defaultValue={advocate.firstName}
          />
          <label className="createadvocates__forms__label" htmlFor="lastName">
            lastName{" "}
          </label>
          <input
            className="createadvocates__forms__input"
            id="lastName"
            name="lastName"
            type="text"
            // value={formik.values.lastName}
            onChange={formik.handleChange}
            defaultValue={advocate.lastName}
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
            // value={formik.values.email}
            defaultValue={advocate.email}
          />{" "}
          <label
            className="createadvocates__forms__label"
            htmlFor="phoneNumber"
          >
            phoneNumber
          </label>
          <input
            className="createadvocates__forms__input"
            id="phoneNumber"
            name="phoneNumber"
            type="phoneNumber"
            onChange={formik.handleChange}
            // value={formik.values.phoneNumber}
            defaultValue={advocate.phoneNumber}
          />
          <label
            className="createadvocates__forms__label"
            htmlFor="phoneNumber"
          >
            moreInfo
          </label>
          <input
            className="createadvocates__forms__input"
            id="moreInfo"
            name="moreInfo"
            type="moreInfo"
            onChange={formik.handleChange}
            defaultValue={advocate.moreInfo}
          />
          <button className="createadvocates__forms__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAdvocate;
