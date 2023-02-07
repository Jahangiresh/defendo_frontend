import React from 'react'
import "../assets/css/Contact.scss";
import Clock from "../assets/images/contact-clock.svg";
import Map from "../assets/images/contact-map.svg";
import Email from "../assets/images/contatct-email.svg";
import Headset from "../assets/images/contact-headset.svg";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const Contact = () => {

    const PopUp = () => {
        
        Swal.fire(
            'Tamamlandı',
            'Müraciətiniz uğurla göndərildi. 3 iş günü ərzində cavablandırılacaq!',
            'success'
          )
    }
    return (
        <div className='contact'>
            <div className="contact__container custom-container">
                <div className="contact__container__row row">
                    <div className="map col-lg-6 col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12162.863064873402!2d49.969643136617435!3d40.34865086996765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403064d35ad50583%3A0x9b3f57d79832c3da!2zWsSxxJ8sIEJha8SxLCBBesmZcmJheWNhbg!5e0!3m2!1saz!2s!4v1674840029822!5m2!1saz!2s" width="588" height="493" style={{ border: "none" }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="right col-lg-6 col-12">
                        <div className="row">
                            <div className="text col-lg-12">
                                <h4>Bizimlə əlaqə</h4>
                                <p>Tələb olunan məlumatları və xidmət növünü seçərək, müraciət edə bilərsiniz.</p>
                            </div>
                            <div className="col-lg-12">
                                <div className="form row">
                                    <div className="contact__ name col-lg-6">
                                        <label>Ad və soyad</label>
                                        <input type="text" placeholder='Ad və soyadınızı daxil edin.' />
                                    </div>
                                    <div className="contact__ tel col-lg-6">
                                        <label>Telefon</label>
                                        <input type="text" placeholder='Telefon nömrənizi daxil edin.' />
                                    </div>
                                    <div className="contact__ email col-lg-6">
                                        <label>Email</label>
                                        <input type="text" placeholder='Email adresinizi daxil edin.' />
                                    </div>
                                    <div className="contact__ select col-lg-6">
                                        <label>Xidmət növü</label>
                                        <select name="categoria" onchange="loadData(this.value);">
                                            <option value="none" selected>Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="area">
                                            <label>İsmarıcınız</label>
                                            <textarea placeholder='İsmarıcınızı daxil edin'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-section custom-container">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="time d-flex align-items-center">
                                    <div className='icon'>
                                        <img src={Clock} alt="" />
                                    </div>
                                    <div className="time-text">
                                        <h5>İş vaxtımız</h5>
                                        <h6>Həftə içi: 09:00 - 18:00</h6>
                                    </div>
                                </div>
                                <div className="contact-me d-flex align-items-start">
                                <div className="icon">
                                <img src={Headset} alt="" />
                                </div>
                                    <div className="contact-text">
                                    <h5>Əlaqə</h5>
                                    <h6>055 465-22-52</h6>
                                    <h6>055 465-22-52</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="unvan d-flex align-items-center col-12">
                                    <div className="icon">
                                    <img src={Map} alt="" />
                                    </div>
                                    <div className="unvan-text">
                                    <h5>Ünvanımız</h5>
                                    <h6>Ak. Həsən Əliyev 82F</h6>
                                    </div>
                                </div>
                                <div className="email-adress d-flex align-items-center">
                                    <div className="icon">
                                    <img src={Email} alt="" />
                                    </div>
                                    <div className="email text">
                                    <h5>Email adresimiz</h5>
                                    <h6>Həftə içi: 09:00 - 18:00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <button onClick={(PopUp)}>Göndər</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact