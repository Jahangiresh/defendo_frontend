import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  blogs: [],
  status: null,
  isDeleting: false,
};

const { accessToken } = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

export const blogFetch = createAsyncThunk("blogs/blogFetch", async () => {
  const resp = await axios.get("https://defendovb.az/api/v1/blogs");
  return resp?.data;
});

export const deleteBlog = createAsyncThunk(
  "blogs/deleteApi",
  async (payload) => {
    const response = await axios.delete(
      `https://defendovb.az/api/v1/blogs/${payload}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const createBLog = createAsyncThunk("blogs/postApi", async (payload) => {
  const response = await axios
    .post(`https://defendovb.az/api/v1/blogs`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(() => {
      window.location = "/admin/blogs";
    })
    .catch((err) => {
      alert(err);
    });
  return response.data;
});



const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: {
    [blogFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [blogFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.blogs = action.payload;
    },
    [blogFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export const getAllBlogs = (state) => state.blogs.blogs;

export const getStatus = (state) => state.blogs.status;
export const getIsDeleting = (state) => state.blogs.isDeleting;

export default blogSlice.reducer;
