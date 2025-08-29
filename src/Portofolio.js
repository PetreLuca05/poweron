import { useCallback, useEffect, useMemo, useState } from "react";
import "./Portofolio.css";

const image1 = require("./assets/1.jpeg");
const image2 = require("./assets/2.jpg");
const image3 = require("./assets/3.jpg");
const image4 = require("./assets/4.jpg");
const image5 = require("./assets/5.jpg");
const image6 = require("./assets/6.jpg");
const image7 = require("./assets/7.jpg");
const image8 = require("./assets/8.jpg");
const image9 = require("./assets/9.jpg");
const image10 = require("./assets/10.jpg");
const image11 = require("./assets/11.jpg");
const image12 = require("./assets/12.jpg");
const image13 = require("./assets/13.jpg");
const image14 = require("./assets/14.jpg");
const image15 = require("./assets/15.jpg");
const image16 = require("./assets/16.jpg");
const image17 = require("./assets/17.jpg");
const image18 = require("./assets/18.jpg");
const image19 = require("./assets/19.jpg");
const image20 = require("./assets/20.jpg");

export default function AboutPage() {

  const projects = useMemo(
    () => [
      {
        title: "PowerON",
        img: image1
      },
      {
        title: "Instalare",
        img: image2
      },
      {
        title: "Design Interior",
        img: image3
      },
      {
        title: "Renovare Baie",
        img: image4
      },
      {
        title: "Amenajare Gradina",
        img: image5
      },
      {
        title: "Montaj Parchet",
        img: image6
      },
      {
        title: "Reparatii Acoperis",
        img: image7
      },
      {
        title: "Instalatii Electrice",
        img: image8
      },
      {
        title: "Decoratiuni",
        img: image9
      },
      {
        title: "Mobilier Personalizat",
        img: image10
      },
      {
        title: "Izolatie Termica",
        img: image11
      },
      {
        title: "Pictura Murală",
        img: image12
      },
      {
        title: "Amenajare Birou",
        img: image13
      },
      {
        title: "Renovare Bucatarie",
        img: image14
      },
      {
        title: "Montaj Usa",
        img: image15
      },
      {
        title: "Reparatii Instalatii",
        img: image16
      },
      {
        title: "Consultanta Design",
        img: image17
      },
      {
        title: "Proiectare 3D",
        img: image18
      },
      {
        title: "Reconditionare Mobilier",
        img: image19
      },
      {
        title: "Amenajare Terasa",
        img: image20
      }
    ],
    []
  );
  
  return (
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
        <h1>0728 871 868</h1>
        <p>Indiferent dacă vă interesează un proiect la care am lucrat noi sau aveți în plan unul propriu, nu ezitați să ne contactați!</p>
      </section>
    </div>
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
