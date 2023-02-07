import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const serviceFetch = createAsyncThunk(
  "service/serviceFetch",
  async () => {
    const resp = await axios.get("http://localhost:3000/services");

    return resp?.data;
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
export default serviceSlice.reducer;
