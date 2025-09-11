import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NavigationBar from './components/NavigationBar';
import "./Home.css";
import Footer from "./components/Footer";

// Images
import team from "./assets/1.jpeg";
import servicesImg from "./assets/2.jpg";
import bgImage1 from "./assets/1.jpeg";
import bgImage2 from "./assets/4.jpg";
import bgImage3 from "./assets/45.jpg";
import apa_canal_raja from "./assets/31.jpg";
import bloc_residential from "./assets/16.jpg";
import hidranti_romstal from "./assets/37.jpg";
import kaufland from "./assets/15.jpg";
import lucrari_constructii from "./assets/29.jpg";
import subtraversare from "./assets/42.jpg";

import service1Image from "./assets/5.jpg";
import service2Image from "./assets/9.jpg";
import service3Image from "./assets/24.jpg";
import service4Image from "./assets/3.jpg";
import service5Image from "./assets/11.jpg";
import service6Image from "./assets/25.jpg";
import service7Image from "./assets/17.jpg";
import service8Image from "./assets/44.jpg";

//calitate si profesionalism
import cp_1 from "./assets/19.jpg";
import cp_2 from "./assets/1.jpeg";

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
      { title: "Let’s Build Together", cta: "Contact Us", img: bgImage3, after: "" },
    ],
    []
  );

  const portfolioSlides = useMemo(
    () => [
      { title: "Bloc rezidențial", img: bloc_residential },
      { title: "Instalații apă canal RAJA", img: apa_canal_raja },
      { title: "Hidranți Romstal", img: hidranti_romstal },
      { title: "Lucrări construcții", img: lucrari_constructii },
      { title: "Kaufland", img: kaufland },
      { title: "Subtraversare", img: subtraversare },
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
    <>
    <NavigationBar />
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
            title="Constructii civile"
            image={service8Image}
            listItems={[
              '<b>Rezidentiale</b>: Ansamblu de locuinte (blocuri, vile, case), apartamentem duplexuri.',
              "<b>Social-culturale</b>: Scoli, gradinite, sali de sport, teatre, biblioteci, muzee.",
              "<b>Administrative</b>: Cladiri de birouri, sedii administratiuve, centre comerciale.",
              "<b>Hoteluri si pensiuni</b>: Structuri edstinate cazarii si turismului.",
              "<b>Restaurate si fast-food-uri</b>: Localuri publice pentru servirea mesei.",
            ]}
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
                  <a href="/portofolio" className="cta">{s.cta}</a>
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
          <a href="/about" className="aboutus-button">Learn More</a>
        </div>
        <div className="container">
          <div className="card">
            {/* <p className="subtitle">Echipa noastră / Utilajele noastre</p> */}
            <img src={cp_1} alt="Team" className="au_image" />
          </div>
          <div className="card">
            {/* <p className="subtitle">Sediul nostru din Constanța</p> */}
            <img src={cp_2} alt="Sediu" className="au_image" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

/* --- Service Item helper --- */
function ServiceItem({ title, description, image, listItems }) {
  return (
    <div className="service">
      <h3 className="title">{title}</h3>
      {image && <img src={image} alt={title} className="image" />}
      <section className="service-body">
        {description && <p className="description">{description}</p>}
        {listItems?.length > 0 && (
          <ul className="list">
            {listItems.map((item, i) => (
              <li key={i} className="list-item" style={{ borderWidth: i === 0 ? "0" : "1px" }}>
                {typeof item === "string" && item.includes("<b>")
                  ? <span dangerouslySetInnerHTML={{ __html: item }} />
                  : item}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
