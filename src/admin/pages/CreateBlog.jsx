import React from "react";
import { useFormik } from "formik";
import "../scss/adminadvocates.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createBLog } from "../../features/blogSlice";
// import { toast } from "react-toastify";
const CreateBlog = () => {
  const dispatch = useDispatch();
  let nextId = 1;

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      tags: [],

      imageFile: "",
    },

    onSubmit: (values) => {
      try {
        var req = new FormData();
        req.append("title", values.title);
        req.append("body", values.body);
        req.append("tags", ...["sad", "asdsasd"]);
        req.append("imageFile", values.imageFile);
        dispatch(
          createBLog({
            title: req.get("title"),
            body: req.get("body"),
            tags: req.get("tags"),
            imageFile: req.get("imageFile"),
          })
        );
      } catch (error) {
        alert(error);
      }
    },
  });
  const [tagName, setTagName] = useState("");
  const [myTags, setMyTags] = useState([]);
  const name = { ...myTags };
  console.log(myTags);
  return (
    <div className="createadvocates">
      <form className="createadvocates__forms" onSubmit={formik.handleSubmit}>
        <label className="createadvocates__forms__label" htmlFor="image">
          image
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
          title{" "}
        </label>
        <input
          className="createadvocates__forms__input"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label className="createadvocates__forms__label" htmlFor="body">
          body{" "}
        </label>
        <input
          className="createadvocates__forms__input"
          id="body"
          name="body"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <label className="createadvocates__forms__label" htmlFor="email">
          tags
        </label>
        <input value={tagName} onChange={(e) => setTagName(e.target.value)} />

        <button
          type="button"
          onClick={() => {
            setTagName("");
            myTags.push({
              // id: nextId++,
              name: tagName,
            });
          }}
        >
          Add
        </button>

        <ul>
          {myTags.map((myTag) => (
            <li key={myTag.id}>{myTag.name}</li>
          ))}
        </ul>
        <button className="createadvocates__forms__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
