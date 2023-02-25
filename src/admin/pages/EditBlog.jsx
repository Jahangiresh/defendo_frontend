import React, { useEffect, useReducer } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, blog: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const EditBlog = () => {
  const [{ loading, error, blog }, dispatch] = useReducer(reducer, {
    blog: {},
    loading: true,
    error: false,
  });
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getBlog = async () => {
      dispatch({ type: "FETCH_REQ" });

      try {
        const resp = await axios.get(`
        https://defendovb.az/api/v1/blogs/${id}
        `);

        dispatch({ type: "FETCH_SUCCES", payload: resp.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        alert("err");
      }
    };
    getBlog();
  }, []);
  const { accessToken } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  const formik = useFormik({
    initialValues: {
      title: blog.title,
      body: blog.body,
      tags: blog.tags,
      imageFile: blog.image,
    },
    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://defendovb.az/api/v1/blogs/${id}`,
          {
            title: values.title,
            body: values.body,
            tags: values.tags,
            imageFile: values.image,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        window.location = "/admin/blogs";
      } catch (error) {
        alert("salam");
      }
    },
  });
  console.log(formik.values.image);
  return (
    <div className="createadvocates">
      <img
        style={{
          width: "150px",
        }}
        src={`https://defendovb.az/api/v1/files?filepath=${
          blog.image && blog.image.filePath
        }`}
        alt=""
      />
      <form className="createadvocates__forms" onSubmit={formik.handleSubmit}>
        <label className="createadvocates__forms__label mb-2" htmlFor="image">
          image
        </label>
        <input
          className="createadvocates__forms__input"
          id="image"
          name="imageFile"
          accept="image/*"
          type="file"
          onChange={(e) => {
            formik.setFieldValue("image", e.currentTarget.files[0]);
          }}
        />

        <label className="createadvocates__forms__label" htmlFor="firstName">
          title
        </label>
        <input
          className="createadvocates__forms__input"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          //   value={formik.values.title}
          defaultValue={blog.title}
        />
        <label className="createadvocates__forms__label" htmlFor="body">
          body{" "}
        </label>
        <textarea
          className="createadvocates__forms__input"
          id="body"
          name="body"
          type="text"
          onChange={formik.handleChange}
          //   value={formik.values.body}
          defaultValue={blog.body}
        />
        <label className="createadvocates__forms__label" htmlFor="email">
          tags
        </label>
        <input
          defaultValue={blog.tags}
          //  value={tagName} onChange={(e) => setTagName(e.target.value)}
        />

        <button
          type="button"
          //   onClick={() => {
          //     setTagName("");
          //     myTags.push({
          //       // id: nextId++,
          //       name: tagName,
          //     });
          //   }}
        >
          Add
        </button>

        <ul>
          {/* {myTags.map((myTag) => (
            <li key={myTag.id}>{myTag.name}</li>
          ))} */}
        </ul>
        <button className="createadvocates__forms__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
