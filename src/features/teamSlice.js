import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
const initialState = {
  items: [],
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
    try {
      const response = await axios.delete(
        `https://defendovb.az/api/v1/lawyers/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success("Vəkil silindi");

      return response.data;
    } catch (error) {
      toast.error(error.response.data.Detail);
    }
  }
);

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
        toast.success("Vəkil yaradıldı");
        window.location = "/admin/advocates";
      })
      .catch((err) => {
        err.map((e) => {
          toast.error(e.response.data.errors);
        });
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
