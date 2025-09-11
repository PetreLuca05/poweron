import { useState, useEffect } from "react";
import "./Contact.css";
import NavigationBar from './components/NavigationBar';
import test1 from "./assets/sediu/1.jpg";
import test2 from "./assets/sediu/2.jpg";
import test3 from "./assets/sediu/3.jpg";
import test4 from "./assets/sediu/4.jpg";
import test5 from "./assets/sediu/5.jpg";
import test6 from "./assets/sediu/6.jpg";
import test7 from "./assets/sediu/7.jpg";
import test8 from "./assets/sediu/8.jpg";
import test9 from "./assets/sediu/9.jpg";
import test10 from "./assets/sediu/10.jpg";
import test11 from "./assets/sediu/11.jpg";
import test12 from "./assets/sediu/12.jpg";
import test13 from "./assets/sediu/13.jpg";
import Footer from "./components/Footer";

const images = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13];

export default function Contact() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Power+on/@44.1577106,28.605107,18z/data=!4m6!3m5!1s0x40bae5b33d17db5d:0x55fb30164f3cb81a!8m2!3d44.1576378!4d28.6043675!16s%2Fg%2F11r8q6ybr1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <>
      <NavigationBar />
      <div className="contact-page">
        <h1>Sediul nostru</h1>
        <h2>Sediu administrativ, depozit, parc utilaje</h2>

        <section className="contact-page-hero">
          <div className="contact-hero-image">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Sediu ${i + 1}`}
                className={`fade-image ${i === index ? "active" : ""}`}
              />
            ))}
            <section className="contact-hero-image-overlay" onClick={openGoogleMaps}>
              <p>Open in maps</p>
            </section>
          </div>

          <div className="contact-hero-content">
            <p>
              Str. Industriala nr.1B <br /> Constanta 900178 <br /> România
            </p>
            <a href="tel:0728871868">0728 871 868</a>
            <a href="mailto:info@pwron.ro">info@pwron.ro</a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
