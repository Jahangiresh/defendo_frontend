import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.scss";
import coverHomePng from "../assets/images/coverHome.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import linePng from "../assets/images/LineBtn.png";
import logoMain from "../assets/images/logoBlue.svg";
import Team from "../components/Team";
const Home = () => {
  var settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
  };
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home__cover__content">
        <h1 className="home__cover__content__title">de fendo vəkil bürosu</h1>
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
      <Slider {...settings} className="home__cover">
        <div>
          <img src={coverHomePng} alt="" />
        </div>{" "}
        <div>
          <img src={coverHomePng} alt="" />
        </div>
      </Slider>

      <div className="home__container custom-container">
        <div className="home__container__about__row row">
          <div className="home__container__about__row__left  col-lg-9 col-8">
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
          <div className="home__container__about__row__logo col-lg-3 col-4">
            <img src={logoMain} alt="" />
          </div>
        </div>
        <Team />
      </div>
    </div>
  );
};

export default Home;
