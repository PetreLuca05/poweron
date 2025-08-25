
import React from 'react';
import './AboutUs.css';

const team = require("./assets/team.jpg");
const services = require("./assets/sediu.jpg");

function AboutUs() {
  return (
    <section className="aboutus-section">
      <div className="container">
        <h1>About Us</h1>
        <h2>Calitate și profesionalism.</h2>
        <p>Ne adresăm unei game largi de clienți, fiecare lucrare fiind tratată în mod prefesionist,răspunzând cerințelor acestora. Investim în calitatea serviciilor și pregătirea profesionalăa angajaților noștri, pentru a răspunde prompt standardelor piețelor.</p>
        <button className='aboutus-button'>About Us</button>
      </div>
      <div className="container">
        <card className='card'>
          <p className='subtitle'>Echipa noastra / Utilajele noastre</p>
          <img src={team} alt="About Us 1" className='au_image'/>
        </card>
        <card className='card'>
          <p className='subtitle'>Sediul nostru din Constanța</p>
          <img src={services} alt="About Us 2" className='au_image'/>
        </card>
      </div>
    </section>
  );
}

export default AboutUs;
