import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  settings: [],
  status: null,
  isDeleting: false,
};

const { accessToken } = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

export const createSetting = createAsyncThunk(
  "settings/postApi",
  async (payload) => {
    const response = await axios
      .post(`https://defendovb.az/api/v1/settings`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        window.location = "/admin/setting";
      })
      .catch((err) => {
        alert(err);
      });
    return response.data;
  }
);

export const settingFetch = createAsyncThunk(
  "setting/settingFetch",
  async () => {
    const resp = await axios.get("https://defendovb.az/api/v1/settings");
    return resp?.data;
  }
);

export const deleteSetting = createAsyncThunk(
  "settings/deleteApi",
  async (payload) => {
    const response = await axios.delete(
      `https://defendovb.az/api/v1/settings/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},

  extraReducers: {
    [settingFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [settingFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.settings = action.payload;
    },
    [settingFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export const getAllSetting = (state) => state.settings.settings;
export const getStatus = (state) => state.settings.status;
export const isDeleting = (state) => state.settings.isDeleting;

export default settingSlice.reducer;
