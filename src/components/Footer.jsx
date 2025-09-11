import React from 'react';
import './Footer.css';
import logo from "../assets/logo_white.png";

export default function Footer() {

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Power+on/@44.1577106,28.605107,18z/data=!4m6!3m5!1s0x40bae5b33d17db5d:0x55fb30164f3cb81a!8m2!3d44.1576378!4d28.6043675!16s%2Fg%2F11r8q6ybr1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };
  
  return (
    <section className="footer-section">
      <div className="footer-container">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className='footer-text' style={{textDecoration: "none"}}>© PowerOn. Toate drepturile rezervate.</p>
      </div>

      <div className="footer-container">
        <i className="fa-solid fa-house" id="footer-icon"></i>
        <p className='footer-text' onClick={openGoogleMaps}>Str. Industriala nr.1B, Constanța, România</p>
      </div>

      <div className="footer-container">
        <i className="fa-solid fa-phone" id="footer-icon"></i>
        <a href="tel:0728871868" className='footer-text'>0728 871 868</a>
      </div>

      <div className="footer-container">
        <i className="fa-solid fa-envelope" id="footer-icon"></i>
        <a href="mailto:info@pwron.ro" className='footer-text'>info@pwron.ro</a>
      </div>
    </section>
  );
}
