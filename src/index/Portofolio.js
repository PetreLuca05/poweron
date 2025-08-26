import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import './Portofolio.css'

const apa_canal_raja = require("../assets/slideshow/apa_canal_raja.jpg");
const bloc_residential = require("../assets/slideshow/bloc_residential.jpg");
const hidranti_romstal = require("../assets/slideshow/hidranti_romstal.jpg");
const kaufland = require("../assets/slideshow/kaufland.jpg");
const lucrari_constructii = require("../assets/slideshow/lucrari_constructii.jpg");
const subtraversare = require("../assets/slideshow/subtraversare.jpg");

export default function Portofolio() {
  const slides = useMemo(
    () => [
      { title: "Bloc rezidențial", cta: "Learn More", img: bloc_residential },
      { title: "Instalații apă canal RAJA", cta: "Learn More", img: apa_canal_raja },
      { title: "Hidranți Romstal", cta: "Learn More", img: hidranti_romstal },
      { title: "Lucrări construcții", cta: "Learn More", img: lucrari_constructii },
      { title: "Kaufland", cta: "Learn More", img: kaufland },
      { title: "Subtraversare", cta: "Learn More", img: subtraversare }
    ],
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, slidesToScroll: 1, containScroll: "trimSnaps" },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  return (
    <section className="portfolio-section">
      <h2 className="header">Portfolio</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((s, idx) => (
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

      <div className="navigators">
        <button className="navig navig-left" onClick={scrollPrev} aria-label="Previous">
          <p>‹</p>
        </button>

        <button className="navig navig-right" onClick={scrollNext} aria-label="Next">
          <p>›</p>
        </button>
      </div>

      <div className="dots">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === selectedIndex ? "active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
