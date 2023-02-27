import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import "../scss/dash.scss";
import { Link, useNavigate } from "react-router-dom";

const content = [
  {
    title: "Servislər səhifəsinin dinamik datalarının idarə edilməsi",
    description: "göstərilən xidmətlərə düzəliş et",
    button: "Xidmət əlavə et",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Jahangir Shirinov",
    link: "/admin/services",
    userProfile:
      "https://media.licdn.com/dms/image/C4E03AQFef5P1032HFA/profile-displayphoto-shrink_800_800/0/1663069599594?e=2147483647&v=beta&t=8Q6VqQBjlojHUc8xgmz0HCTVPPj29p2pVJJMV3vH6bI",
  },
  {
    title: "Vəkillər səhifəsinin dinamik datalarının idarə edilməsi",
    description: "göstərilən xidmətlərə düzəliş et",

    button: "Vəkil əlavə et",
    image:
      "https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    link: "/admin/advocates",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "Məqalələr səhifəsinin dinamik datalarının idarə edilməsi",

    description: "göstərilən xidmətlərə düzəliş et",

    link: "/admin/blogs",
    button: "Məqalə yaz",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    title: "Əlaqə məlumatlarının dinamik datalarının idarə edilməsi",

    description: "göstərilən xidmətlərə düzəliş et",

    link: "/admin/setting",
    button: "Düzəlişlər et",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Sliderin şəkillərinin idarə edilməsi",
    description: "göstərilən xidmətlərə düzəliş et",

    link: "/admin/slides",
    button: "Şəkil əlavə et",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <Slider className="slider-wrapper" autoplay={2000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button
                onClick={() => navigate(item.link)}
                className="dash__button"
              >
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Dashboard;
