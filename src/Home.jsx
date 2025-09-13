import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NavigationBar from './components/NavigationBar';
import "./Home.css";
import Footer from "./components/Footer";
import { useLanguage } from "./components/LanguageContext.jsx";

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

// calitate si profesionalism
import cp_1 from "./assets/19.jpg";
import cp_2 from "./assets/1.jpeg";

export default function HomePage() {
  const { lang } = useLanguage();

  // --------- i18n dictionary ----------
  const t = useMemo(() => {
    if (lang === "en") {
      return {
        hero: [
          {
            title: "PowerON",
            cta: "Learn More",
            after:
              "We specialize in delivering high-quality construction and infrastructure solutions tailored to your needs.",
          },
          {
            title: "Installations",
            cta: "Learn More",
            after: "Installation of solar panels, heat pumps, and air conditioning.",
          },
          { title: "Let’s Build Together", cta: "Contact Us", after: "" },
        ],
        portfolioSlides: [
          { title: "Residential block" },
          { title: "RAJA water & sewer installations" },
          { title: "Romstal hydrants" },
          { title: "Construction works" },
          { title: "Kaufland" },
          { title: "Horizontal drilling (underpass)" },
        ],
        headings: {
          services: "Services",
          portfolio: "Portfolio",
          aboutTitle: "Quality and professionalism.",
          aboutCta: "Learn More",
        },
        aboutText:
          "We serve a wide range of clients, handling every project professionally and meeting their requirements. We invest in service quality and in the professional development of our employees to promptly meet market standards.",
        portfolioCta: "View portfolio",
        services: [
          {
            title: "Sanitary and fire-fighting installations",
            description: null,
            items: [
              "We build and maintain fire-fighting systems – hydrants, sprinklers, deluge systems, pumping stations",
              "IGSU certified",
            ],
            image: service1Image,
          },
          {
            title: "Ventilation and smoke extraction",
            description: null,
            items: [
              "We build and maintain smoke extraction systems (specific ducting)",
              "IGSU certified",
            ],
            image: service2Image,
          },
          {
            title: "Horizontal directional drilling – underpass",
            description: null,
            items: [
              "We replace and/or extend gas, water pipes, power cables or fiber optics with steerable drilling equipment up to 500 mm diameter.",
            ],
            image: service3Image,
          },
          {
            title: "Utility installations and civil works",
            description: null,
            items: [
              "We execute road markings, parking lots with mono-component, bi-component paint, or Swarco preformed",
              "BRML and RAJA authorized for water and sewer works.",
            ],
            image: service4Image,
          },
          {
            title: "Thermal and air-conditioning installations",
            description: "We build and maintain",
            items: [
              "HVAC systems",
              "DHW (domestic hot water) systems",
              "industrial boiler room installations",
              "multi-split air-conditioning systems",
              "VRV systems",
            ],
            image: service5Image,
          },
          {
            title: "Electrical installations",
            description: null,
            items: [
              "We build and maintain low-voltage electrical installations",
              "We perform PRAM measurements",
              "ANRE certified",
            ],
            image: service6Image,
          },
          {
            title: "Other works",
            description: null,
            items: ["Excavations, slope grading, demolitions, asphalt cutting, paving."],
            image: service7Image,
          },
          {
            title: "Civil constructions",
            description: null,
            items: [
              "<b>Residential</b>: Housing complexes (blocks, villas, houses), apartments, duplexes.",
              "<b>Social-cultural</b>: Schools, kindergartens, sports halls, theatres, libraries, museums.",
              "<b>Administrative</b>: Office buildings, administrative headquarters, shopping centers.",
              "<b>Hotels and guesthouses</b>: Buildings intended for accommodation and tourism.",
              "<b>Restaurants and fast-food</b>: Public venues for dining.",
            ],
            image: service8Image,
          },
        ],
      };
    }

    // Romanian
    return {
      hero: [
        {
          title: "PowerON",
          cta: "Află mai mult",
          after:
            "Suntem specializați în soluții de construcții și infrastructură de înaltă calitate, adaptate nevoilor tale.",
        },
        {
          title: "Instalare",
          cta: "Află mai mult",
          after: "Instalare panouri solare, pompă de căldură și climatizare.",
        },
        { title: "Construim împreună", cta: "Contactează-ne", after: "" },
      ],
      portfolioSlides: [
        { title: "Bloc rezidențial" },
        { title: "Instalații apă-canal RAJA" },
        { title: "Hidranți Romstal" },
        { title: "Lucrări construcții" },
        { title: "Kaufland" },
        { title: "Subtraversare" },
      ],
      headings: {
        services: "Servicii",
        portfolio: "Portofoliu",
        aboutTitle: "Calitate și profesionalism.",
        aboutCta: "Află mai mult",
      },
      aboutText:
        "Ne adresăm unei game largi de clienți, fiecare lucrare fiind tratată profesionist, răspunzând cerințelor acestora. Investim în calitatea serviciilor și în pregătirea profesională a angajaților noștri, pentru a răspunde prompt standardelor pieței.",
      portfolioCta: "Vezi portofoliul",
      services: [
        {
          title: "Instalații sanitare și de incendiu",
          description: null,
          items: [
            "Executăm și întreținem instalații de stingere incendiu – hidranți, sprinklere, drencere, stații de pompare",
            "Suntem autorizați IGSU",
          ],
          image: service1Image,
        },
        {
          title: "Instalații ventilație și desfumare",
          description: null,
          items: [
            "Executăm și întreținem instalații desfumare (tubulatură specifică)",
            "Suntem autorizați IGSU",
          ],
          image: service2Image,
        },
        {
          title: "Foraj orizontal dirijat – subtraversare",
          description: null,
          items: [
            "Executăm lucrări de înlocuire și/sau extindere conducte gaze, apă, cabluri electrice sau fibră optică cu echipament de foraj dirijabil cu diametre de până la 500 mm.",
          ],
          image: service3Image,
        },
        {
          title: "Instalații și lucrări edilitare",
          description: null,
          items: [
            "Executăm marcaje rutiere, parcări cu vopsea monocomponentă, bicomponentă sau preformate Swarco",
            "Suntem autorizați BRML și RAJA pentru lucrări de apă și canalizare.",
          ],
          image: service4Image,
        },
        {
          title: "Instalații termice și de climatizare",
          description: "Executăm și întreținem",
          items: [
            "instalații HVAC",
            "instalații ACM",
            "instalații centrale termice industriale",
            "sisteme climatizare multisplit",
            "sisteme VRV",
          ],
          image: service5Image,
        },
        {
          title: "Instalații electrice",
          description: null,
          items: [
            "Executăm și întreținem instalații electrice de joasă tensiune",
            "Efectuăm măsurători PRAM",
            "Suntem autorizați ANRE",
          ],
          image: service6Image,
        },
        {
          title: "Alte lucrări",
          description: null,
          items: ["Executăm săpături, taluzări, demolări, tăiat asfalt, asfaltări."],
          image: service7Image,
        },
        {
          title: "Construcții civile",
          description: null,
          items: [
            "<b>Rezidențiale</b>: Ansambluri de locuințe (blocuri, vile, case), apartamente, duplexuri.",
            "<b>Social-culturale</b>: Școli, grădinițe, săli de sport, teatre, biblioteci, muzee.",
            "<b>Administrative</b>: Clădiri de birouri, sedii administrative, centre comerciale.",
            "<b>Hoteluri și pensiuni</b>: Structuri destinate cazării și turismului.",
            "<b>Restaurante și fast-food</b>: Localuri publice pentru servirea mesei.",
          ],
          image: service8Image,
        },
      ],
    };
  }, [lang]);

  /* --- Hero slider state --- */
  const heroSlides = useMemo(
    () =>
      t.hero.map((h, i) => ({
        title: h.title,
        cta: h.cta,
        img: [bgImage1, bgImage2, bgImage3][i],
        after: h.after,
      })),
    [t]
  );

  const portfolioSlides = useMemo(
    () => [
      { title: t.portfolioSlides[0].title, img: bloc_residential, cta: t.portfolioCta },
      { title: t.portfolioSlides[1].title, img: apa_canal_raja, cta: t.portfolioCta },
      { title: t.portfolioSlides[2].title, img: hidranti_romstal, cta: t.portfolioCta },
      { title: t.portfolioSlides[3].title, img: lucrari_constructii, cta: t.portfolioCta },
      { title: t.portfolioSlides[4].title, img: kaufland, cta: t.portfolioCta },
      { title: t.portfolioSlides[5].title, img: subtraversare, cta: t.portfolioCta },
    ],
    [t]
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
                    <a href="/about" className="cta">{s.cta}</a>
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
          <h2 className="heading">{t.headings.services}</h2>
          <div className="services-container">
            {t.services.map((svc, idx) => (
              <ServiceItem
                key={idx}
                title={svc.title}
                image={svc.image}
                description={svc.description}
                listItems={svc.items}
              />
            ))}
          </div>
        </section>

        {/* ---------------- PORTFOLIO ---------------- */}
        <section className="portfolio-section">
          <h2 className="header">{t.headings.portfolio}</h2>
          <div className="embla" ref={portRef}>
            <div className="embla__container">
              {portfolioSlides.map((s, idx) => (
                <article className="embla__slide" key={idx}>
                  <img src={s.img} alt={s.title} className="embla__img" />
                  <div className="overlay">
                    <h3>{s.title}</h3>
                    <a href="/portofolio" className="cta">{t.portfolioCta}</a>
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
            <h2>{t.headings.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <a href="/about" className="aboutus-button">{t.headings.aboutCta}</a>
          </div>
          <div className="container">
            <div className="card">
              <img src={cp_1} alt="Team" className="au_image" />
            </div>
            <div className="card">
              <img src={cp_2} alt="Headquarters" className="au_image" />
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
