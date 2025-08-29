import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Home.css";

// Images
const team = require("./assets/1.jpeg");
const servicesImg = require("./assets/2.jpg");
const bgImage1 = require("./assets/3.jpg");
const bgImage2 = require("./assets/4.jpg");
const bgImage3 = require("./assets/5.jpg");
const apa_canal_raja = require("./assets/6.jpg");
const bloc_residential = require("./assets/7.jpg");
const hidranti_romstal = require("./assets/8.jpg");
const kaufland = require("./assets/9.jpg");
const lucrari_constructii = require("./assets/10.jpg");
const subtraversare = require("./assets/11.jpg");

const service1Image = require("./assets/12.jpg");
const service2Image = require("./assets/13.jpg");
const service3Image = require("./assets/14.jpg");
const service4Image = require("./assets/15.jpg");
const service5Image = require("./assets/16.jpg");
const service6Image = require("./assets/17.jpg");
const service7Image = require("./assets/18.jpg");
const service8Image = require("./assets/19.jpg");

export default function HomePage() {
  /* --- Hero slider state --- */
  const heroSlides = useMemo(
    () => [
      {
        title: "PowerON",
        cta: "Learn More",
        img: bgImage1,
        after:
          "We specialize in delivering high-quality construction and infrastructure solutions tailored to your needs.",
      },
      {
        title: "Instalare",
        cta: "Learn More",
        img: bgImage2,
        after: "Instalare panouri solare, pompă de căldură si climatizare",
      },
      { title: "Let’s Build Together", cta: "Learn More", img: bgImage3, after: "" },
    ],
    []
  );

  const portfolioSlides = useMemo(
    () => [
      { title: "Bloc rezidențial", cta: "Learn More", img: bloc_residential },
      { title: "Instalații apă canal RAJA", cta: "Learn More", img: apa_canal_raja },
      { title: "Hidranți Romstal", cta: "Learn More", img: hidranti_romstal },
      { title: "Lucrări construcții", cta: "Learn More", img: lucrari_constructii },
      { title: "Kaufland", cta: "Learn More", img: kaufland },
      { title: "Subtraversare", cta: "Learn More", img: subtraversare },
    ],
    []
  );

  const [heroRef, heroApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [portRef, portApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroSnaps, setHeroSnaps] = useState([]);

  const [portIndex, setPortIndex] = useState(0);
  const [portSnaps, setPortSnaps] = useState([]);

  const onHeroSelect = useCallback(() => {
    if (!heroApi) return;
    setHeroIndex(heroApi.selectedScrollSnap());
  }, [heroApi]);

  const onPortSelect = useCallback(() => {
    if (!portApi) return;
    setPortIndex(portApi.selectedScrollSnap());
  }, [portApi]);

  useEffect(() => {
    if (!heroApi) return;
    onHeroSelect();
    setHeroSnaps(heroApi.scrollSnapList());
    heroApi.on("select", onHeroSelect);
    heroApi.on("reInit", () => {
      setHeroSnaps(heroApi.scrollSnapList());
      onHeroSelect();
    });
  }, [heroApi, onHeroSelect]);

  useEffect(() => {
    if (!portApi) return;
    onPortSelect();
    setPortSnaps(portApi.scrollSnapList());
    portApi.on("select", onPortSelect);
    portApi.on("reInit", () => {
      setPortSnaps(portApi.scrollSnapList());
      onPortSelect();
    });
  }, [portApi, onPortSelect]);

  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section className="hero-section">
        <div className="embla" ref={heroRef}>
          <div className="embla__container">
            {heroSlides.map((s, idx) => (
              <article className="embla__slide" key={idx}>
                <img src={s.img} alt={s.title} className="embla__img" />
                <div className="overlay">
                  <h3>{s.title}</h3>
                  {s.after && <p>{s.after}</p>}
                  <a href="#" className="cta">{s.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="dots">
          {heroSnaps.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === heroIndex ? "active" : ""}`}
              onClick={() => heroApi && heroApi.scrollTo(i)}
            />
          ))}
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="section">
        <h2 className="heading">Services</h2>
        <div className="services-container">
          <ServiceItem
            title="Instalații sanitare și de incendiu"
            image={service1Image}
            listItems={[
              "Executăm și întreținem instalații de stingere incendiu – hidranți, sprinklere, drencere, stații de pompare",
              "Suntem autorizați IGSU",
            ]}
          />
          <ServiceItem
            title="Instalații ventilație și desfumare"
            image={service2Image}
            listItems={[
              "Executăm și întreținem instalații desfumare (tubulatură specifică)",
              "Suntem autorizați IGSU",
            ]}
          />
          <ServiceItem
            title="Foraj orizontal dirijat – subtraversare"
            image={service3Image}
            listItems={[
              "Executăm lucrări de înlocuire și/sau extindere conducte gaze, apă, cabluri electrice sau fibră optică cu echipament de foraj dirijabil cu diametre de până la 500 mm.",
            ]}
          />
          <ServiceItem
            title="Instalații și lucrări edilitare"
            image={service4Image}
            listItems={[
              "Executăm marcaje rutiere, parcări cu vopsea monocomponentă, bicomponentă sau preformate Swarco",
              "Suntem autorizați BRML și RAJA pentru lucrări de apă și canalizare.",
            ]}
          />
          <ServiceItem
            title="Instalații termice și de climatizare"
            image={service5Image}
            description="Executăm și întreținem"
            listItems={[
              "instalații HVAC",
              "instalații ACM",
              "instalații centrale termice industriale",
              "sisteme climatizare multisplit",
              "sisteme VRV",
            ]}
          />
          <ServiceItem
            title="Instalații electrice"
            image={service6Image}
            listItems={[
              "Executăm și întreținem instalații electrice de joasă tensiune",
              "Efectuăm măsurători PRAM",
              "Suntem autorizați ANRE",
            ]}
          />
          <ServiceItem
            title="Alte lucrări"
            image={service7Image}
            listItems={["Executăm săpături, taluzări, demolări, tăiat asfalt, asfaltări."]}
          />
          <ServiceItem
            title="Construcții unifamiliale și multifamialiale"
            image={service8Image}
            listItems={["Construcții unifamiliale și multifamialiale"]}
          />
        </div>
      </section>

      {/* ---------------- PORTFOLIO ---------------- */}
      <section className="portfolio-section">
        <h2 className="header">Portfolio</h2>
        <div className="embla" ref={portRef}>
          <div className="embla__container">
            {portfolioSlides.map((s, idx) => (
              <article className="embla__slide" key={idx}>
                <img src={s.img} alt={s.title} className="embla__img" />
                <div className="overlay">
                  <h3>{s.title}</h3>
                  <a href="#" className="cta">{s.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="dots">
          {portSnaps.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === portIndex ? "active" : ""}`}
              onClick={() => portApi && portApi.scrollTo(i)}
            />
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT US ---------------- */}
      <section className="aboutus-section">
        <div className="container">
          <h2>Calitate și profesionalism.</h2>
          <p>
            Ne adresăm unei game largi de clienți, fiecare lucrare fiind tratată în mod
            profesionist, răspunzând cerințelor acestora. Investim în calitatea
            serviciilor și pregătirea profesională a angajaților noștri, pentru a răspunde
            prompt standardelor piețelor.
          </p>
          <button className="aboutus-button">Learn More</button>
        </div>
        <div className="container">
          <div className="card">
            <p className="subtitle">Echipa noastră / Utilajele noastre</p>
            <img src={team} alt="Team" className="au_image" />
          </div>
          <div className="card">
            <p className="subtitle">Sediul nostru din Constanța</p>
            <img src={servicesImg} alt="Sediu" className="au_image" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- Service Item helper --- */
function ServiceItem({ title, description, image, listItems }) {
  return (
    <div className="service">
      <h3 className="title">{title}</h3>
      {image && <img src={image} alt={title} className="image" />}
      <section className="service-body" style={{ padding: "20px" }}>
        {description && <p className="description">{description}</p>}
        {listItems?.length > 0 && (
          <ul className="list">
            {listItems.map((item, i) => (
              <li key={i} className="list-item" style={{ borderWidth: i === 0 ? "0" : "1px" }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
