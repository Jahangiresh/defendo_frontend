import React from "react";
import { useFormik } from "formik";
import "../scss/adminadvocates.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createBLog } from "../../features/blogSlice";
import { Helmet } from "react-helmet";
import { toast, Toaster } from "react-hot-toast";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog = () => {
  const [tagName, setTagName] = useState("");
  const [myTags, setMyTags] = useState([]);
  const [editortxt, setEditotxt] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e, editor) => {
    setEditotxt(editor.getData());
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      tags: [],
      imageFile: "",
    },

    onSubmit: (values) => {
      console.log(values);
      try {
        var req = new FormData();
        req.append("title", values.title);
        req.append("body", editortxt);
        myTags.forEach((tag, index) => {
          req.append(`tags[${index}]`, tag);
        });
        req.append("imageFile", values.imageFile);
        dispatch(createBLog(req));
      } catch (error) {
        toast.error(error.response.data.Detail);
      }
    },
  });
  return (
    <div className="createadvocates">
      <Helmet>
        <title>create blog</title>
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
          başlıq
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
          məzmun
        </label>
        <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
        <label className="createadvocates__forms__label" htmlFor="email">
          taqlar
        </label>
        <input value={tagName} onChange={(e) => setTagName(e.target.value)} />

        <button
          type="button"
          onClick={() => {
            setMyTags([tagName, ...myTags]);
            setTagName("");
          }}
        >
          əlavə et
        </button>

        <ul>
          {myTags.map((myTag, index) => (
            <li key={index}>{myTag}</li>
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
