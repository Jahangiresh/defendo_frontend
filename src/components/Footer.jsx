import React from "react";
import Logo from "../assets/images/logo.svg";
import "../assets/css/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
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
                <li>Ak. Həsən Əliyev 82F</li>
                <li className="number">
                  Telefon:
                  <a href="tel:+994 55 465 22 52">+994 55 465-22-52</a>
                </li>
                <li>
                  Email:
                  <a href="mailto:officedefendo@gmail.com">
                    officedefendo@gmail.com
                  </a>
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
                <Link to="">Haqqımızda</Link>
              </li>
              <li>
                <Link to="">Komandamız</Link>
              </li>
              <li>
                <Link to="/services">Xidmətlər</Link>
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
