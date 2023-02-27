import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  isDeleting: false,
};

export const serviceFetch = createAsyncThunk(
  "service/serviceFetch",
  async () => {
    const resp = await axios.get(
      "https://defendovb.az/api/v1/providedservices"
    );
    return resp?.data;
  }
);

export const deleteService = createAsyncThunk(
  "service/deleteApi",
  async (payload) => {
    const { accessToken } = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.delete(
        `https://defendovb.az/api/v1/providedservices/${payload}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("sa");
      toast.error(error);
    }
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},

  extraReducers: {
    [serviceFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [serviceFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [serviceFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export const getAllServices = (state) => state.services.items;
export const getStatus = (state) => state.services.status;
export const getIsDeleting = (state) => state.services.isDeleting;

export default serviceSlice.reducer;
