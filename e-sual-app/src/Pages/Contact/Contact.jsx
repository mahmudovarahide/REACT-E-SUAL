import React, { useRef } from 'react';
import '../../style/style.css'
import InstaContactImage from './image/insta-contact.png'
import WpContactImage from './image/wp-contact.png'
import FacebookContactImage from './image/facebook-contact.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rvliuz7', 'template_p8ozfki', form.current, 'AVMVwNwl8IzSt3rY4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="contact">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 mb-2">
            <h3 className="pb-4">Əlaqə</h3>
            <div className="email-box-contact mt-2">
              <h6>E-poçt</h6>
              <p>contact@e-sual.az</p>
            </div>
            <div className="tel-box-contact mt-3">
              <h6 className="pb-1">Əlaqə nömrələri</h6>
              <p>+994 (XX) XXX XX XX</p>
              <p>+994 (XX) XXX XX XX</p>
            </div>
            <div className="social-box-contact d-flex justify-content-between">
              <a href="/"><img className="w-75" src={InstaContactImage} alt="" /></a>
              <a href="/"><img className="w-75" src={WpContactImage} alt="" /></a>
              <a href="/"><img className="w-75" src={FacebookContactImage} alt="" /></a>
            </div>
            <div className="location-box-contact mt-4">
              <h6>Ünvan</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula lacus. Integer lobortis torque.</p>
            </div>
            <div className="map-area-frame mt-4">
            <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201876.9935430553!2d-122.37539090724721!3d37.75890609140571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x80857d8b28aaed03%3A0x71b415d535759367!2sOakland%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1613897278642!5m2!1sen!2sbd" loading="lazy" ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="pb-4">Əlaqə formu</h3>
            <form action="" className="form-contact d-flex flex-column" ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="ad / soyad" required name="user_name" />
              <input type="email" placeholder="email" required name="user_email" />
              <input type="tel" placeholder="əlaqə nömrəsi" required name="user_number"/>
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" placeholder="Qeyd" required></textarea>
              <div className="d-flex justify-content-end mt-3">
                <button type="submit" value="Send" >Göndərin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact