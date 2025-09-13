import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import "./NavigationBar.css";
import logo from "../assets/logo_white.png";
import { useLanguage } from "./LanguageContext.jsx"; // ⬅️ NEW

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const { lang, toggleLang } = useLanguage(); // ⬅️ NEW

  // small i18n map for navbar
  const t = {
    ro: {
      home: "Home",
      about: "Despre Noi",
      portfolio: "Portofoliu",
      contact: "Contact",
      phoneAria: "Sună la 0728 871 868",
      open: "Deschide meniul",
      close: "Închide meniul",
      langBtn: "EN",
      langAria: "Schimbă limba în engleză",
    },
    en: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      phoneAria: "Call 0728 871 868",
      open: "Open menu",
      close: "Close menu",
      langBtn: "RO",
      langAria: "Switch language to Romanian",
    },
  }[lang];

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // ✅ move scroll listener into an effect to avoid re-adding each render
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".nav");
      if (!nav) return;
      if (window.scrollY > 20) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initialize
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    const nav = document.querySelector(".nav");
    if (nav) nav.classList.add("is-scrolled");
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
        <NavLink to="/" className="nav__brand" onClick={close}>
          <img src={logo} alt="Logo" className="nav__logo" />
        </NavLink>

        {/* Desktop menu */}
        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/" className="nav__link" onClick={close}>{t.home}</NavLink>
          <NavLink to="/about" className="nav__link" onClick={close}>{t.about}</NavLink>
          <NavLink to="/portofolio" className="nav__link" onClick={close}>{t.portfolio}</NavLink>
          <NavLink to="/contact" className="nav__link" onClick={close}>{t.contact}</NavLink>
        </nav>

        <nav className="nav__links" aria-label="Utility">
          {/* FIX: class -> className */}
          <i className="fa-solid fa-phone" aria-hidden="true"></i>
          <a href="tel:0728871868" className="nav__link" aria-label={t.phoneAria}> 0728 871 868</a>

          {/* 🔘 Language toggle button */}
          <button
            type="button"
            className="nav__lang"
            onClick={toggleLang}
            aria-label={t.langAria}
            title={t.langAria}
          >
            {t.langBtn === "EN" ? (<span lang="en">RO</span>) : (<span lang="ro">EN</span>)}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={btnRef}
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.close : t.open}
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
        <NavLink to="/" className="nav__mobile-link" onClick={close}>{t.home}</NavLink>
        <NavLink to="/about" className="nav__mobile-link" onClick={close}>{t.about}</NavLink>
        <NavLink to="/portofolio" className="nav__mobile-link" onClick={close}>{t.portfolio}</NavLink>
        <NavLink to="/contact" className="nav__mobile-link" onClick={close}>{t.contact}</NavLink>
        <button
          type="button"
          className="nav__lang-mobile"
          onClick={toggleLang}
          aria-label={t.langAria}
          title={t.langAria}
        >
          {t.langBtn}
        </button>
      </nav>
    </header>
  );
}

export default NavigationBar;
