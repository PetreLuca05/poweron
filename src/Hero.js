// ⬆️ All imports at the very top — nothing before these.
import { useEffect, useRef, useState, useMemo } from "react";
const bgImage1 = require("./assets/bg.jpg");
const bgImage2 = require("./assets/bg2.jpg");
const bgImage3 = require("./assets/bg3.jpg");

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = useMemo(() => [Slide1, Slide2, Slide3], []);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  
  function Slide1() {
    const s = baseSlideStyles({ image: bgImage1 });
    return (
      <section style={s.inner}>
        <div style={{ width: "100%", height: "100%", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={s.h1}>Welcome</h1>
          <p style={s.p}>Explore our services and offerings.</p>
          <button style={s.button}>Our Work</button>
        </div>
      </section>
    );
  }

  function Slide2() {
    const s = baseSlideStyles({ image: bgImage2 });
    return (
      <section style={s.inner}>
      <div style={{ width: "100%", height: "100%", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={s.h1}>Instalari</h1>
        <div style={{ flexDirection: "row", display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginTop: 8, marginBottom: 8 }}>
        <p style={{ ...s.p, fontWeight: 400, opacity: 1, fontSize: "clamp(18px, 3vw, 32px)" }}>panouri solare</p>
        <p style={{ ...s.p, fontWeight: 400, opacity: .5, fontSize: "clamp(18px, 3vw, 32px)" }}>• </p>
        <p style={{ ...s.p, fontWeight: 400, opacity: 1, fontSize: "clamp(18px, 3vw, 32px)" }}>climatizare </p>
        <p style={{ ...s.p, fontWeight: 400, opacity: .5, fontSize: "clamp(18px, 3vw, 32px)" }}>• </p>
        <p style={{ ...s.p, fontWeight: 400, opacity: 1, fontSize: "clamp(18px, 3vw, 32px)" }}>pompa de caldura</p>
        </div>
        <button style={s.button}>Services</button>
      </div>
      </section>
    );
  }

  function Slide3() {
    const s = baseSlideStyles({ image: bgImage3 });
    return (
      <section style={s.inner}>
        <div style={{ width: "100%", height: "100%", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={s.h1}>Let’s Build Together</h1>
          <p style={s.p}>Get a free consultation today.</p>
          <button style={s.button}>Contact</button>
        </div>
      </section>
    );
  }

  // Accepts either { image } or { color }
  function baseSlideStyles({ image, color }) {
    const backgroundStyles = image
      ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
      : { background: color ?? "#000" };

    return {
      inner: {
        width: "100%",
        textAlign: "left",
        color: "#fff",
        ...backgroundStyles,
      },
      button: {
        padding: "10px 25px",
        borderRadius: 10,
        textTransform: "uppercase",
        border: "0px solid rgba(255, 255, 255, 0.25)",
        background: "rgba(177, 24, 24, 1)",
        color: "#fff",
        cursor: "pointer",
        marginTop: 16,
        marginBottom: 16,
      },
      h1: {
        fontSize: "clamp(28px, 6vw, 56px)",
        lineHeight: 1.1,
        margin: "0 0 10px 0",
        fontWeight: 800,
        textAlign: "center",
      },
      p: {
        fontSize: "clamp(14px, 2.2vw, 18px)",
        maxWidth: 640,
        opacity: 0.9,
        margin: 0,
        textAlign: "center",
        lineHeight: 1,
      },
    };
  }

  return (
    <section style={styles.section} onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      <div style={styles.viewport} aria-roledescription="carousel">
        <div
          style={{
            ...styles.track,
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(100 / slides.length) * index}%)`,
          }}
        >
          {slides.map((Slide, i) => (
            <Slide key={i} />
          ))}
        </div>

        <button onClick={prev} aria-label="Previous slide" style={{ ...styles.arrow, left: 12 }}><p style={{ transform: "translateY(-10%)" }}>‹</p></button>
        <button onClick={next} aria-label="Next slide" style={{ ...styles.arrow, right: 12 }}><p style={{transform: "translateY(-10%)"  }}>›</p></button>
      </div>

      <div style={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              ...styles.dot,
              opacity: i === index ? 1 : 0.4,
              transform: i === index ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}


const styles = {
  section: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    background: "#111",
    color: "#fff",
  },
  viewport: {
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: 400,
    overflow: "hidden",
  },
  track: {
    display: "flex",
    height: "100%",
    transition: "transform 600ms ease",
  },
  slideWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  dots: {
    position: "absolute",
    left: "50%",
    bottom: 20,
    transform: "translateX(-50%)",
    display: "flex",
    gap: 10,
  },
  dot: {
    width: 'clamp(8px, 2px, 12px)',
    height: 'clamp(8px, 2px, 12px)',
    borderRadius: "50%",
    border: 0,
    background: "#fff",
    cursor: "pointer",
    transition: "transform 200ms ease, opacity 200ms ease",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-25%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    border: 0,
    width: 40,
    height: 40,
    borderRadius: "50%",
    fontSize: 24,
    cursor: "pointer",
    userSelect: "none",
  },
};

export default HeroCarousel;
