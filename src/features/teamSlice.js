import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  // singleAdvocate: {},
  status: null,
  isDeleting: false,
};

export const teamFetch = createAsyncThunk("team/teamFetch", async () => {
  const resp = await axios.get(
    "http://defendo-001-site1.atempurl.com/api/v1/lawyers"
  );
  return resp?.data;
});

export const deleteAdvocate = createAsyncThunk(
  "advocates/deleteApi",
  async (payload) => {
    const response = await axios.delete(
      `http://defendo-001-site1.atempurl.com/api/v1/lawyers/${payload}`
    );
    console.log(payload);
    return response.data;
  }
);

const localData = localStorage.getItem("user");
export const createAdvocate = createAsyncThunk(
  "advocates/postApi",
  async (payload) => {
    try {
      const response = await axios.post(
        `http://defendo-001-site1.atempurl.com/api/v1/lawyers`,
        payload,
        {
          headers: {
            Authorization: localData ? `Bearer ${localData.accessToken}` : "",
          },
        }
      );
      window.location = "/admin/advocates";
      return response.data;
    } catch (error) {
      alert(error);
    }
  }
);

// export const editAdvocate = createAsyncThunk(
//   "advocates/putAdvocate",
//   async (payload) => {
//     await axios.put(`http://localhost:3000/advocates${payload.id}`, payload);
//   }
// );

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
