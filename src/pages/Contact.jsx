import React from 'react'
import "../assets/css/Contact.scss";

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact__ custom-container">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12162.863064873402!2d49.969643136617435!3d40.34865086996765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403064d35ad50583%3A0x9b3f57d79832c3da!2zWsSxxJ8sIEJha8SxLCBBesmZcmJheWNhbg!5e0!3m2!1saz!2s!4v1674840029822!5m2!1saz!2s" width="588" height="493" style={{ border: "none" }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="right">
                    <div className="text">
                        <h4>Bizimlə əlaqə</h4>
                        <p>Tələb olunan məlumatları və xidmət növünü seçərək, müraciət edə bilərsiniz.</p>
                    </div>
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
                        <div className="area">
                            <label>İsmarıcınız</label>
                            <textarea placeholder='İsmarıcınızı daxil edin'></textarea>
                        </div>
                        <div className="area-btn">
                            <button>Göndər</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact