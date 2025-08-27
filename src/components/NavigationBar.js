import { useEffect, useRef, useState } from "react";
import "./NavigationBar.css";
import logo from "../assets/logo_white.png";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

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
        <Link to="/" className="nav__brand">
          <img src={logo} alt="Logo" className="nav__logo" />
        </Link>

        {/* Desktop menu */}
        <nav className="nav__links" aria-label="Primary">
          <Link to="/about" className="nav__link">Despre Noi</Link>
          <Link to="/portofolio" className="nav__link">Portofoliu</Link>
          <Link to="/" className="nav__link">Contact</Link>
        </nav>

        <nav className="nav__links" aria-label="Primary">
          <i class="fa-solid fa-phone"></i>
          <a href="#home" className="nav__link"> 0728 871 868</a>
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
        <Link to="/about" className="nav__mobile-link">Despre Noi</Link>
        <Link to="/" className="nav__mobile-link">Portofoliu</Link>
        <Link to="/" className="nav__mobile-link">Contact</Link>
      </nav>
    </header>
  );
}

export default NavigationBar;
