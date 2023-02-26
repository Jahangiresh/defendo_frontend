import React from "react";
import Logo from "../assets/images/logo.svg";
import "../assets/css/footer.scss";
import { Link } from "react-router-dom";
import { getAllSetting } from "../features/settingSlice.js";
import { useSelector } from "react-redux";
const Footer = () => {
  const settings = useSelector(getAllSetting);

  return (
    <footer>
      <section id="first">
        <div className="custom-container">
          <div>
            <div id="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div>
            <div id="footer-item">
              <h5>Ünvanlarımız</h5>
              <ul>
                <li>
                  {settings &&
                    settings
                      .filter((setting) => setting.key === "Unvan")
                      .map((s) => (
                        <>
                          {s.key} : {s.value}
                        </>
                      ))}
                </li>
                <li className="number">
                  {settings &&
                    settings
                      .filter((setting) => setting.key === "Telefon")
                      .map((s) => (
                        <>
                          {s.key} :{" "}
                          <a href="tel:+994 55 465 22 52">{s.value}</a>
                        </>
                      ))}
                </li>
                <li>
                  <li className="number">
                    {settings &&
                      settings
                        .filter((setting) => setting.key === "Email")
                        .map((s) => (
                          <>
                            {s.key} :{" "}
                            <a href={`mailto:${s.value}`}>{s.value}</a>
                          </>
                        ))}
                  </li>
                </li>
              </ul>
            </div>
          </div>
          <div id="footer-item">
            <h5>De Fendo</h5>
            <ul>
              <li>
                <Link to="/">Ana səhifə</Link>
              </li>
              <li>
                <Link to="about">Haqqımızda</Link>
              </li>
              <li>
                <Link to="team">Komandamız</Link>
              </li>
              <li>
                <Link to="/services">Xidmətlər</Link>
              </li>{" "}
              <li>
                <Link to="/blogs">Məqalələr</Link>
              </li>
            </ul>
          </div>
          <div id="footer-item">
            <h5>Faydalı keçidlər</h5>
            <ul>
              <li>
                <a href="https://www.e-qanun.az/">E-qanun</a>
              </li>
              <li>
                <a href="https://barassociation.az/">Vəkillər kollegiyası</a>
              </li>
              <li>
                <a href="https://supremecourt.gov.az/">AR Ali Məhkəməsi</a>
              </li>
              <li>
                <a href="https://justice.gov.az/">Ədliyyə nazirliyi</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="second">
        <hr />
        <div className="custom-container">
          <p>
            Copyright © - {new Date().getFullYear()}. De Fendo saytı, Weblash
            komandası tərəfindən hazırlanıb.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
