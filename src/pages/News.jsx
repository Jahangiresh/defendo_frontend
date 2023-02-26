import React from "react";
import { Helmet } from "react-helmet";
import HeaderDown from "../components/header/HeaderDown";
import NewsCard from "../components/NewsCard";

const News = () => {
  return (
    <div className="news">
      <Helmet>
        <title>məqalələr</title>
      </Helmet>
      <HeaderDown>
        <h1>Hüquqi məqalələr</h1>
        {/* <p>{items.title}</p> */}
      </HeaderDown>
      <div className="news__container custom-container">
        <NewsCard />
      </div>
    </div>
  );
};

export default News;
