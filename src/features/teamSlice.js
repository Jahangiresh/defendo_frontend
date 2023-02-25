import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Swal } from "sweetalert2/dist/sweetalert2";
const initialState = {
  items: [],
  // singleAdvocate: {},
  status: null,
  isDeleting: false,
};

const { accessToken } = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

export const teamFetch = createAsyncThunk("team/teamFetch", async () => {
  const resp = await axios.get("https://defendovb.az/api/v1/lawyers");
  return resp?.data;
});

export const deleteAdvocate = createAsyncThunk(
  "advocates/deleteApi",
  async (payload) => {
    const response = await axios.delete(
      `https://defendovb.az/api/v1/lawyers${payload}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  }
);
const popUp = (title, icon, text) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
};
export const createAdvocate = createAsyncThunk(
  "advocates/postApi",
  async (payload) => {
    const response = await axios
      .post(`https://defendovb.az/api/v1/lawyers`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        window.location = "/admin/advocates";
      })
      .catch((err) => {
        popUp("Oops...", "error", err.response.data.title);
      });
    return response.data;
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
