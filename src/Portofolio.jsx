import React, { useMemo } from "react";
import "./Portofolio.css";
import NavigationBar from './components/NavigationBar';

import image1 from "./assets/48.jpg";
import image2 from "./assets/48.jpg";
import image3 from "./assets/10.jpg";
import image4 from "./assets/3.jpg";
import image5 from "./assets/30.jpg";
import image6 from "./assets/51.jpg";
import image7 from "./assets/46.jpg";
import image8 from "./assets/12.jpg";
import image9 from "./assets/6.jpg";
import image10 from "./assets/34.jpg";
import image11 from "./assets/33.jpg";
import image12 from "./assets/8.jpg";
import image13 from "./assets/13.jpg";
import image14 from "./assets/7.jpg";
import image15 from "./assets/14.jpg";
import image16 from "./assets/15.jpg";
import image17 from "./assets/28.jpg";
import image18 from "./assets/28.jpg";
import image19 from "./assets/27.jpg";
import image20 from "./assets/26.jpg";

import Footer from "./components/Footer";

export default function AboutPage() {
  const projects = useMemo(
    () => [
      {
        title: "bloc rezidențial",
        img: image1
      },
      // {
      //   title: "bloc rezidențial 2",
      //   img: image2
      // },
      {
        title: "amenajare spații comerciale",
        img: image3
      },
      {
        title: "climatizare",
        img: image4
      },
      {
        title: "inlocuire conducta apa",
        img: image5
      },
      {
        title: "instalatii apa canal port constanta",
        img: image6
      },
      {
        title: "instalatii panouri solare si pompa caldura",
        img: image7
      },
      {
        title: "instalatii sprinklere",
        img: image8
      },
      {
        title: "lucrari constructii",
        img: image9
      },
      {
        title: "instaltii apa canal RAJA",
        img: image10
      },
      {
        title: "hidranti romstal",
        img: image11
      },
      {
        title: "marcaje rutiere",
        img: image12
      },
      // {
      //   title: "chimpex",
      //   img: image13
      // },
      // {
      //   title: "chimpex",
      //   img: image14
      // },
      {
        title: "floreasca",
        img: image15
      },
      {
        title: "kaufland",
        img: image16
      },
      // {
      //   title: "brutărie penny constanța",
      //   img: image17
      // },
      {
        title: "penny buzau",
        img: image18
      },
      // {
      //   title: "penny focsani",
      //   img: image19
      // },
      // {
      //   title: "penny galați",
      //   img: image20
      // }
    ],
    []
  );

  return (
    <>
      <NavigationBar />
      <div className="portofolio-container">
        <div className="portofolio-hero">
          <h1>Portofoliu</h1>
          <section className="project-list">
            {projects.map((project, index) => (
              <ProjectItem key={index} title={project.title} img={project.img} />
            ))}
          </section>
        </div>

        <section className="discutam">
          <h2>Hai să discutăm despre proiectul tău!</h2>
          <a href="tel:0728871868" className='footer-text'>0728 871 868</a>
          <p>Indiferent dacă vă interesează un proiect la care am lucrat noi sau aveți în plan unul propriu, nu ezitați să ne contactați!</p>
        </section>
      </div>
      <Footer />
    </>
  );
}

function ProjectItem({ title, img }) {
  return (
    <div className="project-item">
      <img src={img} alt={title} />
      <section className="project-info">
        <h3>{title}</h3>
      </section>
    </div>
  );
}
