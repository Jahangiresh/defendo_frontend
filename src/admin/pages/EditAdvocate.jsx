import React, { useEffect, useReducer } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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
        const resp = await axios.get(
          `https://defendovb.az/api/v1/lawyers/${id}`
        );

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
      firstName: advocate.firstName,
      lastName: advocate.lastName,
      email: advocate.email,
      phoneNumber: advocate.phoneNumber,
      moreInfo: advocate.moreInfo,
      image: advocate.image,
      id: advocate.id,
    },
    onSubmit: async (values) => {
      try {
        await axios.put(`https://defendovb.az/api/v1/lawyers/${id}`, {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          moreInfo: values.moreInfo,
          image: values.image,
        });
        toast.success("Vəkil dəyişildi");

        window.location = "/admin/advocates";
      } catch (error) {
        toast.error(error.response.data.Detail);
      }
    },
  });
  return (
    <div>
      <div className="createadvocates">
        <Helmet>
          <title>update lawyer</title>
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
            name="image"
            accept="image/*"
            type="file"
            onChange={(e) => {
              formik.setFieldValue("image", e.currentTarget.files[0]);
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
            // value={formik.values.firstName}
            defaultValue={advocate.firstName}
          />
          <label className="createadvocates__forms__label" htmlFor="lastName">
            soy ad
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
            Email 
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
            nömrə
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
            məlumat
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
