import { useEffect } from "react";
import "./assets/css/app.scss";
import AdminLayout from "./layout/AdminLayout";
import Layout from "./layout/Layout";

function App() {
  const { pathname } = window.location;

  return (
    <div className="App">
      {pathname.includes("/admin") ? <AdminLayout /> : <Layout />}
    </div>
  );
}

export default App;
