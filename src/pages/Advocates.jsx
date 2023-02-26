import React from "react";
import { Helmet } from "react-helmet";
import AdvocateCard from "../components/AdvocateCard";
import HeaderDown from "../components/header/HeaderDown";

const Advocates = () => {
  return (
    <>
      <Helmet>
        <title>vəkillər</title>
      </Helmet>
      <HeaderDown>
        <h1>Komandamız</h1>
        <p>Peşəkar komandamız ilə tanış olun.</p>
      </HeaderDown>
      <div className="advocates custom-container">
        <AdvocateCard />
      </div>
    </>
  );
};

export default Advocates;
