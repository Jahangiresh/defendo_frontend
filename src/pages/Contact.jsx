import React from "react";
import "../assets/css/Contact.scss";
import Clock from "../assets/images/contact-clock.svg";
import Map from "../assets/images/contact-map.svg";
import Email from "../assets/images/contatct-email.svg";
import Headset from "../assets/images/contact-headset.svg";
import { Swal } from "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import HeaderDown from "../components/header/HeaderDown";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { getAllSetting } from "../features/settingSlice";
import { Helmet } from "react-helmet";
import LoadingBox from "../components/LoadingBox";
import { toast, Toaster } from "react-hot-toast";
const Contact = () => {
  const settings = useSelector(getAllSetting);
  const popUp = (title, icon, text) => {
    console.log("sa");
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  };

  const { items, status } = useSelector((state) => state.services);

  const contactFormsPost = async (values) => {
    await axios
      .post("https://defendovb.az/api/v1/contactusforms", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toast.success("Mesaj göndərildi");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 429) {
            toast.error(
              "Həddindən artıq sorğu. Saatda maksimum 3 sorğu göndərə bilərsiniz"
            );
          } else if (error.response.status === 400) {
            toast.error("Zəhmət olmasa dataları düzgün daxil edin");
          } else {
            alert("An error occurred while sending the request: ", error);
          }
        }
      });
  };

  return status === "pending" ? (
    <LoadingBox />
  ) : (
    <>
      <Helmet>
        <title>əlaqə</title>
      </Helmet>
      <HeaderDown>
        <h1>Bizimlə əlaqə</h1>
        <p>Müraciətiniz 3 iş günü ərzində cavablandırılacaq</p>
      </HeaderDown>
      <section className="wrapper">
        <div>
          <Toaster />
        </div>
        <div className="container">
          <div className="row contact__row">
            <div className="info col-lg-6 col-md-12 col-sm-12">
              <div className="map">
                <iframe
                  title="address"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d97221.49633886272!2d49.8072587!3d40.4050456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2sHeydar%20Aliyev%20Centre!5e0!3m2!1sen!2s!4v1675850932013!5m2!1sen!2s"
                ></iframe>
              </div>
              <div className="contact-info">
                <div className="row contact__row">
                  <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <img src={Clock} alt="" />
                    {settings &&
                      settings
                        .filter((setting) => setting.key === "iş vaxtı")
                        .map((s) => (
                          <div>
                            <h5>{s.key}</h5>
                            <p>{s.value}</p>
                          </div>
                        ))}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={Map} alt="" />
                    {settings &&
                      settings
                        .filter((setting) => setting.key === "Unvan")
                        .map((s) => (
                          <div>
                            <h5>Ünvanımız</h5>
                            <p>{s.value}</p>
                          </div>
                        ))}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={Headset} alt="" />
                    {settings &&
                      settings
                        .filter((setting) => setting.key === "Mobile")
                        .map((s) => (
                          <div>
                            <h5>Əlaqə</h5>
                            <p>{s.value}</p>
                          </div>
                        ))}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={Email} alt="" />
                    {settings &&
                      settings
                        .filter((setting) => setting.key === "Email")
                        .map((s) => (
                          <div>
                            <h5>Email</h5>
                            <p>{s.value}</p>
                          </div>
                        ))}
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
