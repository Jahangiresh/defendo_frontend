import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18next";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import teamSlice, {
  teamFetch,
} from "./features/teamSlice";
import serviceSlice, { serviceFetch } from "./features/serviceSlice";
import newsSlice, { newsFetch } from "./features/newsSlice";

const store = configureStore({
  reducer: {
    advocates: teamSlice,
    services: serviceSlice,
    news: newsSlice,
  },
});
store.dispatch(teamFetch());
store.dispatch(serviceFetch());
store.dispatch(newsFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
