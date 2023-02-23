import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18next";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import teamSlice, { teamFetch } from "./features/teamSlice";
import serviceSlice, { serviceFetch } from "./features/serviceSlice";
import blogSlice, { blogFetch } from "./features/blogSlice";

const store = configureStore({
  reducer: {
    advocates: teamSlice,
    services: serviceSlice,
    blogs: blogSlice,
  },
});
store.dispatch(teamFetch());
store.dispatch(serviceFetch());
store.dispatch(blogFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
