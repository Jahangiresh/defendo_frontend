import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.scss";
import coverHomePng from "../assets/images/coverHome.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import linePng from "../assets/images/LineBtn.png";
import logoMain from "../assets/images/logoBlue.svg";
const Home = () => {
  var settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: false,
    dots: false,
  };
  const navigate = useNavigate();
  return (
    <div className="home">
      <Slider {...settings} className="home__cover">
        <div className="salam">
          <img src={coverHomePng} alt="" />
          <div className="home__cover__content">
            <h1 className="home__cover__content__title">
              de fendo vəkil bürosu
            </h1>
            <p className="home__cover__content__intro">
              Bütün növ hüquqi xidmətlər göstərən konsaltinq şirkətidir
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="home__cover__content__button"
            >
              bizimlə əlaqə
            </button>
          </div>
        </div>
        <div>
          {" "}
          <img src={coverHomePng} alt="" />
          <div className="home__cover__content">
            <h1 className="home__cover__content__title">
              de fendo vəkil bürosu
            </h1>
            <p className="home__cover__content__intro">
              Bütün növ hüquqi xidmətlər göstərən konsaltinq şirkətidir
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="home__cover__content__button"
            >
              bizimlə əlaqə
            </button>
          </div>
        </div>
      </Slider>
      <div className="home__container custom-container">
        <div className="home__container__about__row row">
          <div className="home__container__about__row__left col-9">
            <h3 className="home__container__about__row__title ">Haqqımızda</h3>
            <p className="home__container__about__row__info">
              Azərbaycan Respublikasının Vəkillər Kollegiyasının əsas vəzifəsi
              hər bir şəxsin hüquq və azadlıqlarının, qanunla qorunan
              mənafelərinin müdafiə edilməsindən, onlara peşəkar, yüksək
              keyfiyyətli, vicdanlı hüquqi yardım göstərilməsini təmin etməkdən,
              vəkillik peşəsinin nüfuzunu yüksəltməkdən ibarətdir. Azərbaycan
              Respublikası Vəkillər Kollegiyasının təşkili və fəaliyyəti
              "Vəkillər və vəkillik fəaliyyəti haqqında" Azərbaycan
              Respublikasının Qanunu və ona müvafiq olaraq qəbul edilmiş
              Vəkillər Kollegiyasının Nizamnaməsi ilə müəyyən edilir
            </p>
            <button className="home__container__about__row__button">
              <span className="home__container__about__row__button__span">
                <img
                  className="home__container__about__row__button__span__img"
                  src={linePng}
                  alt=""
                />
              </span>
              daha etrafli
            </button>
          </div>
          <div className="home__container__about__row__logo col-3">
            <img src={logoMain} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
