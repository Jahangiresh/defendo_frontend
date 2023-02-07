import React from "react";
import { useTranslation } from "react-i18next";
import "../../assets/css/header.scss";
const HeaderLangs = () => {
  const { i18n } = useTranslation();

  function clickLang(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="headerlangs">
      <ul className="headerlangs__ul">
        <li className="headerlangs__ul__li " onClick={() => clickLang("en")}>
          english
        </li>
        <li className="headerlangs__ul__li " onClick={() => clickLang("az")}>
          azerbaijani
        </li>
        <li className="headerlangs__ul__li" onClick={() => clickLang("tr")}>
          turkish
        </li>
      </ul>
    </div>
  );
};

export default HeaderLangs;
