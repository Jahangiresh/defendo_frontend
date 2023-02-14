import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { useParams } from "react-router-dom";

const initialState = {
  items: [],
  itemById: {},
  status: null,
  statusById: null,
};

export const newsFetch = createAsyncThunk("news/newsFetch", async () => {
  const resp = await axios.get("http://localhost:3000/news");

  return resp?.data;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: {
    [newsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [newsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [newsFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export default newsSlice.reducer;
