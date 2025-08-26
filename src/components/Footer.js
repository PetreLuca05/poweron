import './Footer.css'
const logo = require("../assets/logo_white.png");

export default function Footer() {
  
  return (
    <section className="footer-section">
      <div className="footer-container">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className='footer-text'>© PowerOn. Toate drepturile rezervate.</p>
      </div>

      <div className="footer-container">
        <i className="fa-solid fa-house" id="footer-icon"></i>
        <p className='footer-text'>Str. Industriala nr.1B, Constanța, România</p>
      </div>

      <div className="footer-container">
        <i className="fa-solid fa-phone" id="footer-icon"></i>
        <p className='footer-text'>0728 871 868</p>
      </div>

      <div className="footer-container">
        <i className="fa-solid fa-envelope" id="footer-icon"></i>
        <p className='footer-text'>info @ pwron.ro</p>
      </div>
    </section>
  );
}
