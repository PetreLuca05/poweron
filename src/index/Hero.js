import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import './Hero.css'

const bgImage1 = require("../assets/image_8.jpg");
const bgImage2 = require("../assets/image_6.jpg");
const bgImage3 = require("../assets/bg.jpg");


export default function Hero() {
  const slides = useMemo(
    () => [
      { title: "PowerON", cta: "Learn More", img: bgImage1, after: 'We specialize in delivering high-quality construction and infrastructure solutions tailored toyour needs.'},
      { title: "Instalare", cta: "Learn More", img: bgImage2, after: 'Instalare panouri solare, pompă de căldură si climatizare'},
      { title: "Let’s Build Together", cta: "Learn More", img: bgImage3, after: '' },
    ],
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, slidesToScroll: 1 },
    [Autoplay({ delay: 100000000, stopOnInteraction: false })]
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
    <section className="hero-section">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((s, idx) => (
            <article className="embla__slide" key={idx}>
              <img src={s.img} alt={s.title} className="embla__img" />
              <div className="overlay">
                <h3>{s.title}</h3>
                <p style={{ display: s.after === '' ? 'none' : 'block' }} >{s.after}</p>
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
