import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  singleAdvocate: {},
  status: null,
  isDeleting: false,
};

const { accessToken } = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

export const teamFetch = createAsyncThunk("team/teamFetch", async () => {
  const resp = await axios.get("../../api/v1/lawyers");
  return resp?.data;
});

export const deleteAdvocate = createAsyncThunk(
  "advocates/deleteApi",
  async (payload) => {
    const response = await axios.delete(`../../api/v1/lawyers/${payload}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
);

export const createAdvocate = createAsyncThunk(
  "advocates/postApi",
  async (payload) => {
    const response = await axios
      .post(`../../api/v1/lawyers`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        window.location = "/admin/advocates";
      })
      .catch((err) => {
        alert(err);
      });
    return response.data;
  }
);

const teamSlice = createSlice({
  name: "advocates",
  initialState,
  reducers: {},
  extraReducers: {
    [teamFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [teamFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [teamFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export const getAllAdvocates = (state) => state.advocates.items;

export const getStatus = (state) => state.advocates.status;
export const getIsDeleting = (state) => state.advocates.isDeleting;

export default teamSlice.reducer;
