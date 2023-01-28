import React from "react";
import "../assets/css/about.scss";
import logoPng from "../assets/images/logoBlue.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about__container custom-container">
        <div className="about__container__row row">
          <div className="about__container__row__left col-lg-8 col-7">
            <h1 className="about__container__row__left__title">salam</h1>
            <p className="about__container__row__left__text">
              "Əgər bu günə qədər hər hansı bir vəkil Vəkillər Kollegiyasının
              üzvlüyündən kənarlaşdırılıbsa, bu, həmin vəkilin peşəkar
              fəaliyyətində yol verdiyi səhvlər, daha dəqiqi həmin vəkillərə öz
              hüquqlarını etibar etmiş şəxslərin qanuni və əsaslı şikayətləri
              əsasında baş verib". Bu sözləri e-huquq.az-a açıqlamasında Milli
              Məclisin deputatı Bəhruz Məhərrəmov deyib. O, son zamanlar bəzi
              xarici dairələrin Azərbaycan vəkilliyini qərəzli şəkildə hədəfə
              aldığını bildirib. “Fakt Yoxla” Bəhruz Məhərrəmovun Azərbaycanda
              peşəkar fəaliyyətinə görə vəkillərin təzyiq və təqiblə üzləşməməsi
              ilə bağlı iddiasının doğru olub-olmadığını yoxlayıb. Hazırda
              Vəkillər Kollegiyası üzvlərinin sayı 1791 nəfərdir. Kollegiyanın
              vəkillər barədə başladılan intizam icraatına dair yaydığı
              statistikaya əsasən, 2018-ci ildə 6 vəkil kollegiyadan xaric
              edilib. Vəkillər Kollegiyası bildirir ki, onların 5-i üzvlük
              haqqını 6 aydan artıq müddətə ödəmədiyinə görə, 1 isə vətəndaşın
              şikayəti əsasında kollegiyadan uzaqlaşdırılıb. Bundan başqa, 12
              vəkilin fəaliyyəti müəyyən müddətə dayandırılıb, 29 vəkilə
              xəbərdarlıq edilib, 9 vəkilə irad tutulub, 15 vəkilə töhmət
              verilib. Kollegiya 2019 və 2020-ci illərdə barəsində intizam
              icraatı başladılan vəkillər barədə statistik məlumat dərc etməyib.
              Vəkillər Kollegiyası vəkil Xalid Bağırovun peşə fəaliyyətini ilk
              dəfə 2011-ci ildə Bakı Şəhər Baş Polis İdarəsinin şikayəti
              əsasında bir illiyə dayandırıb. Vəkil 2014-cü ildə yenidən intizam
              icraatına məruz qalıb. Bu dəfə icraat Xalid Bağırovun müştərisinin
              hüquqlarını müdafiə edərkən məhkəmədə etdiyi çıxışla bağlı olub.
              Kollegiyanın müraciəti əsasında məhkəmə onun vəkilliyinə xitam
              verib. Avropa İnsan Hüquqları Məhkəməsi 2020-ci il iyunun 25-də
              onun Konvensiyanın 8-ci (şəxsi həyata müdaxilə) və 10-cu (ifadə
              azadlığı) maddələri ilə qorunan hüquqlarının pozulması haqda qərar
              qəbul edib. Vəkil Yalçın İmanov 2017-ci ilin avqust ayında
              Qobustan həbsxanasında “Nardaran işi” üzrə məhkum Abbas Hüseynovu
              ziyarət etdikdən sonra mediaya müsahibələrində müştərisinin
              içəridə dəfələrlə döyüldüyünü, işgəncəyə məruz qaldığını bildirib.
              Vəkil işgəncə izlərinin Hüseynovun bədənində qaldığını, onun
              çətinliklə otura və gəzə bildiyini vurğulayıb. Bir ay sonra
              Qobustan həbsxanasına baş çəkmiş Avropa Şurası rəsmisi buradakı
              durumu qəbuledilməz adlandırıb və hakimiyyəti Abbas Hüseynova
              işgəncə verilməsiylə bağlı məlumatları araşdırmağa çağırıb. Vəkil
              İmanov Baş prokorurluğa, Ombudsman Aparatına, məhkəməyə şikayət
              göndərsə də, iddiaları əsassız sayılaraq araşdırmaqdan imtina
              edilib. Penitensiar Xidmətin rəis əvəzi Oqtay Məmmədov Vəkillər
              Kollegiyasına şikayət göndərərək, vəkilin hüquqlarını müdafiə
              etdiyi şəxsin işgəncəyə məruz qalması haqda məlumat yaymaqla
              ölkədə sabitliyi pozmağa çalışdığını iddia edib. Kollegiyanın
              Rəyasət Heyəti 2017-ci il noyabrın 20-də Yalçın İmanovun bu
              qurumdan xaric olunması ilə bağlı məhkəməyə müraciət haqda qərar
              qəbul edib. 2019-cu il fevralın 22-də məhkəmə Kollegiyanın Yalçın
              İmanovun fəaliyyətinə xitam verilməsi barədə iddiasını təmin edib.
            </p>
          </div>
          <div className="about__container__row__right col-lg-4 col-5 ">
            <img src={logoPng} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
