import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/css/newscard.scss";
import timePng from "../assets/images/time.png";
import { getAllBlogs, getStatus } from "../features/blogSlice";
import LoadingBox from "./LoadingBox";
import parse from "html-react-parser";

const NewsCard = () => {
  const blogs = useSelector(getAllBlogs);
  const status = useSelector(getStatus);
  const navigate = useNavigate();
  return status === "pending" ? (
    <LoadingBox />
  ) : (
    <div className="newscard">
      {blogs &&
        blogs.map((blog) => (
          <div className="newscard__col col-4">
            <div className="newscard__col__img">
              <img
                src={`https://defendovb.az/api/v1/files?filepath=${blog.image.filePath}`}
                alt=""
              />
            </div>
            <div className="newscard__col__content">
              <span className="newscard__col__content__span">
                <img src={timePng} alt="" /> {blog.createdAt}
              </span>
              <h3 className="newscard__col__content__h">{blog.title}</h3>
              <p className="newscard__col__content__p">
                {parse(blog.body) > 10
                  ? parse(blog.body).slice(0, 10) + "..."
                  : parse(blog.body)}
              </p>
              <button
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="newscard__col__content__button"
              >
                ətraflı oxu
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsCard;
