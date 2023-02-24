import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  slides: [],
  status: null,
  isDeleting: false,
};

const { accessToken } = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

export const slideFetch = createAsyncThunk("slides/slideFetch", async () => {
  const resp = await axios.get(
    "https://defendovb.az/api/v1/slides"
  );
  return resp?.data;
});

export const deleteSlide = createAsyncThunk(
  "slides/deleteApi",
  async (payload) => {
    const response = await axios.delete(
      `https://defendovb.az/api/v1/slides/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

export const createSlide = createAsyncThunk(
  "slides/postApi",
  async (payload) => {
    const response = await axios
      .post(
        `https://defendovb.az/api/v1/slides`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        window.location = "/admin/slides";
      })
      .catch((err) => {
        alert(err);
      });
    return response.data;
  }
);

const slideSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {},
  extraReducers: {
    [slideFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [slideFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.slides = action.payload;
    },
    [slideFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export const getAllSlides = (state) => state.slides.slides;

export const getStatus = (state) => state.slides.status;
export const getIsDeleting = (state) => state.slides.isDeleting;

export default slideSlice.reducer;
