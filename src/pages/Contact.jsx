import React from "react";
import "../assets/css/Contact.scss";
import Clock from "../assets/images/contact-clock.svg";
import Map from "../assets/images/contact-map.svg";
import Email from "../assets/images/contatct-email.svg";
import Headset from "../assets/images/contact-headset.svg";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import HeaderDown from "../components/header/HeaderDown";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";

const Contact = () => {
  const popUp = (title, icon, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };

  const { items, status } = useSelector((state) => state.services);

  const contactFormsPost = async (values) => {
    await axios
      .post("https://localhost:7148/api/v1/contactusforms", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        popUp(
          "Tamamlandı",
          "success",
          "Müraciətiniz uğurla göndərildi. 3 iş günü ərzində cavablandırılacaq!"
        );
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 429) {
            popUp(
              "Oops...",
              "error",
              "Həddindən artıq sorğu. Saatda maksimum 3 sorğu göndərə bilərsiniz"
            );
          } else if (error.response.status === 400) {
            popUp(
              "Oops...",
              "error",
              "Zəhmət olmasa dataları düzgün daxil edin"
            );
          } else {
            console.log("An error occurred while sending the request: ", error);
          }
        }
      });
  };

  return (
    <>
      <HeaderDown>
        <h1>Bizimlə əlaqə</h1>
        <p>Müraciətiniz 3 iş günü ərzində cavablandırılacaq</p>
      </HeaderDown>
      <section className="wrapper">
        <div className="container">
          <div className="row contact__row">
            <div className="info col-lg-6 col-md-12 col-sm-12">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d97221.49633886272!2d49.8072587!3d40.4050456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2sHeydar%20Aliyev%20Centre!5e0!3m2!1sen!2s!4v1675850932013!5m2!1sen!2s"></iframe>
              </div>
              <div className="contact-info">
                <div className="row contact__row">
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <img src={Clock} alt="" />
                    <div>
                      <h5>İş vaxtımız</h5>
                      <p>Həftə içi: 09:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={Map} alt="" />
                    <div>
                      <h5>Ünvanımız</h5>
                      <p>Ak. Həsən Əliyev 82F</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={Headset} alt="" />
                    <div>
                      <h5>Əlaqə</h5>
                      <p>
                        055 465-22-52 <br /> 012 465-22-52
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={Email} alt="" />
                    <div>
                      <h5>Email adresimiz</h5>
                      <p>officedefendo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form col-lg-6 col-md-12 col-sm-12">
              <h4>Bizimlə əlaqə</h4>
              <p>
                Tələb olunan məlumatları və xidmət növünü seçərək, müraciət edə
                bilərsiniz.
              </p>
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  phoneNumber: "",
                  providedServiceId: "",
                  messageText: "",
                }}
                onSubmit={(values) => {
                  contactFormsPost(values);
                }}
              >
                {({ handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row contact__row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                          <label>Ad və soyad</label>
                          <input
                            onChange={handleChange}
                            name="fullname"
                            type="text"
                            placeholder="Ad və soyadınızı daxil edin"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                          <label>Email</label>
                          <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Email adresinizi daxil edin"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                          <label>Telefon</label>
                          <input
                            onChange={handleChange}
                            name="phoneNumber"
                            type="tel"
                            placeholder="Telefon nömrənizi daxil edin"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                          <label>Xidmət növü</label>
                          <select
                            onChange={handleChange}
                            name="providedServiceId"
                          >
                            {items &&
                              items.map(({ id, title }) => (
                                <option key={id} value={id}>
                                  {title}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="textarea col-lg-12 col-md-12 col-sm-12">
                        <div>
                          <label>İsmarıcınız</label>
                          <textarea
                            onChange={handleChange}
                            name="messageText"
                            placeholder="İsmarıcınızı daxil edin"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12"></div>
                      <div className="col-lg-4 button col-md-12 col-sm-12">
                        <div>
                          <button type="submit">Göndər</button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
