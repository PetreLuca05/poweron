import React, { useMemo } from "react";
import "./Portofolio.css";
import NavigationBar from './components/NavigationBar';

import image1 from "./assets/48.jpg";
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
import image15 from "./assets/7.jpg";
import image16 from "./assets/15.jpg";
import image18 from "./assets/28.jpg";
import image21 from "./assets/52.jpg";

import Footer from "./components/Footer";
import { useLanguage } from "./components/LanguageContext.jsx";

export default function PortofolioPage() {
  const { lang } = useLanguage();

  const t = useMemo(() => {
    if (lang === "en") {
      return {
        heading: "Portfolio",
        discussTitle: "Let’s talk about your project!",
        discussText:
          "Whether you’re interested in a project we’ve worked on or have one of your own in mind, don’t hesitate to contact us!",
        projects: [
          { title: "Residential block", img: image1 },
          { title: "Commercial space fit-out", img: image3 },
          { title: "Air conditioning", img: image4 },
          { title: "Water pipe replacement", img: image5 },
          { title: "Water & sewer installations – Port of Constanța", img: image6 },
          { title: "Solar panels & heat pump installations", img: image7 },
          { title: "Sprinkler installations", img: image8 },
          { title: "Construction works", img: image9 },
          { title: "RAJA water & sewer installations", img: image10 },
          { title: "Romstal hydrants", img: image11 },
          { title: "Road markings", img: image12 },
          { title: "Floreasca", img: image15 },
          { title: "Kaufland", img: image16 },
          { title: "Penny Buzău", img: image18 },
          { title: "Sewer installation – DP World Constanța Terminal", img: image21 },
        ],
      };
    }
    // Romanian
    return {
      heading: "Portofoliu",
      discussTitle: "Hai să discutăm despre proiectul tău!",
      discussText:
        "Indiferent dacă vă interesează un proiect la care am lucrat noi sau aveți în plan unul propriu, nu ezitați să ne contactați!",
      projects: [
        { title: "Bloc rezidențial", img: image1 },
        { title: "Amenajare spații comerciale", img: image3 },
        { title: "Climatizare", img: image4 },
        { title: "Înlocuire conductă apă", img: image5 },
        { title: "Instalații apă canal – Port Constanța", img: image6 },
        { title: "Instalații panouri solare și pompă căldură", img: image7 },
        { title: "Instalații sprinklere", img: image8 },
        { title: "Lucrări construcții", img: image9 },
        { title: "Instalații apă canal RAJA", img: image10 },
        { title: "Hidranți Romstal", img: image11 },
        { title: "Marcaje rutiere", img: image12 },
        { title: "Floreasca", img: image15 },
        { title: "Kaufland", img: image16 },
        { title: "Penny Buzău", img: image18 },
        { title: "Instalare canalizare – Terminal DP World Constanța", img: image21 },
      ],
    };
  }, [lang]);

  return (
    <>
      <NavigationBar />
      <div className="portofolio-container">
        <div className="portofolio-hero">
          <h1>{t.heading}</h1>
          <section className="project-list">
            {t.projects.map((project, index) => (
              <ProjectItem key={index} title={project.title} img={project.img} />
            ))}
          </section>
        </div>

        <section className="discutam">
          <h2>{t.discussTitle}</h2>
          <a href="tel:0728871868" className="footer-text">0728 871 868</a>
          <p>{t.discussText}</p>
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
