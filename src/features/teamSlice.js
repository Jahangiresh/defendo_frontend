import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
};

export const teamFetch = createAsyncThunk("team/teamFetch", async () => {
  const resp = await axios.get("api/v1/lawyers");
  return resp?.data;
});

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
export default teamSlice.reducer;
