import React from "react";
import { Helmet } from "react-helmet";
import "../assets/css/about.scss";
import logoPng from "../assets/images/logoBlue.svg";
import HeaderDown from "../components/header/HeaderDown";
const About = () => {
  return (
    <>
      <HeaderDown>
        <h1>haqqimizda</h1>
      </HeaderDown>
      <div className="about">
        <Helmet>
          <title>haqqımızda</title>
        </Helmet>
        <div className="about__container custom-container">
          <div className="about__container__row row">
            <div className="about__container__row__left col-lg-8 col-7">
              <h1 className="about__container__row__left__title">Haqqımızda</h1>
              <p className="about__container__row__left__text">
                "De Fendo" Vakil Bürosunun ilk tasisçilari, 4 dost vakil - Azar
                Tanriverdi, ilqar Eyyubov, Arslan Mikayilov va Seymur
                Safarovdur. Büronun varadilmasinda maqsed müasir talablara caval
                veran saraitda vatandaslara daha keyfiyyatli va effektiv hüquqi
                xidmatin göstarilmasinin tamin edilmasi idi. Birge saylarimiz
                naticasinda "De Fendo" Vakil Bürosu 10.02.2022-ci ilda rasmi
                dövlat qeydiyyatindan keçdi va ilk olaraq Baki sahari, Ziya
                Bunyadov prospektinda yerlaçan ofisda faaliyyata basladi.
                Faaliyyata baslandiqdan bir müddat sonra vail bürosuna yeni
                vakillar üzv oldular va aksariyyati ganc, prespektivli
                vakillardan ibarat peçakar komanda formalasdi. Bela ki,
                komandamizda ölkanin sabiq hakimlari, hüquq üzra falsefe
                doktorlari va hüquq sahasinda bir ox nailiyyatlare imza atmis
                vakiller, hüquqsunaslarimiz çalismaqdadir. Büroda vakillerin say
                artdiqca konfidensialligin qorunmasi va vatandaslar üçún daha da
                rahat saraitin tamin edilmasi masalasi gundama galdi va bu
                maqsadla yekdillikla büronun fealiyyatinin daha genis va rahat
                ofisda davam etdirilmasi gerari verildi. Inkisaf strategiyasina
                uygun olaraq büro üçün daha böyük, isiqli va modern dizayna
                malik ümumi sahasi 500 kv.m-dan çox olan 14 vakil otagi,
                konfrans zall, konfidensial otaq, istirahat otagi va terasindan
                ibarat yeni tamirdan çixmis ofis segildi. Vatandaslarin ve
                vakillarin rahatçiligini tamin etmek üçün yeni ofisda bütün
                lazimi sarait tamin edilmisdir. Hazirda "De Fendo" Vakil Bürosu
                Baki sohari, Akademik Hasen Aliyev küçasinda yerlasir va nainki
                paytaxtimiz olan Baki saharinin, ham da ölkamizin an böyük va
                müasir vakil bürolarindan biridir.
              </p>
            </div>
            <div className="about__container__row__right col-lg-4 col-5 ">
              <img src={logoPng} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
