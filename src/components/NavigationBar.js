import { useEffect, useRef, useState } from "react";
import "./navigationBar.css";
import logo from "../assets/logo_white.png";

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 20) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  });

  // Robust outside click (pointerdown prevents click-timing issues)
  useEffect(() => {
    const onPointerDown = (e) => {
      if (!open) return;
      const path = e.composedPath ? e.composedPath() : [];
      const clickedInsideBtn = btnRef.current && path.includes(btnRef.current);
      const clickedInsideMenu = menuRef.current && path.includes(menuRef.current);
      if (!clickedInsideBtn && !clickedInsideMenu) setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () => document.removeEventListener("pointerdown", onPointerDown, { capture: true });
  }, [open]);

  const toggle = (e) => {
    // prevent this click from being treated as "outside"
    const nav = document.querySelector(".nav");
    nav.classList.add("is-scrolled");
    e.stopPropagation();
    setOpen((o) => !o);
  };

  const close = (e) => {
    if (e) e.stopPropagation();
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__brand" aria-label="Home">
          <img src={logo} alt="Logo" className="nav__logo" />
        </a>

        {/* Desktop menu */}
        <nav className="nav__links" aria-label="Primary">
          <a href="#home" className="nav__link">Despre Noi</a>
          <a href="#about" className="nav__link">Portofoliu</a>
          <a href="#services" className="nav__link">Contact</a>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={btnRef}
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={toggle}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`nav__mobile ${open ? "is-open" : ""}`}
        aria-label="Meniu mobil"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <a href="#home" className="nav__mobile-link" onClick={close}>
          Despre Noi
        </a>
        <a href="#about" className="nav__mobile-link" onClick={close}>
          Portofoliu
        </a>
        <a href="#services" className="nav__mobile-link" onClick={close}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default NavigationBar;
