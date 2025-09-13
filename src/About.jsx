import "./About.css";
import NavigationBar from './components/NavigationBar';
import team from "./assets/1.jpeg";
import history from "./assets/23.jpg";
import Footer from "./components/Footer";
import { useMemo } from "react";
import { useLanguage } from "./components/LanguageContext.jsx";

export default function About() {
  const { lang } = useLanguage();

  // ---------- i18n ----------
  const t = useMemo(() => {
    if (lang === "en") {
      return {
        heroImgAlt: "Team",
        hero: {
          title: "About us",
          subtitle: "Our values haven't changed since day one: quality and professionalism",
          body:
            "POWER-ON S.R.L. has earned its place on the market through quality and professionalism. We serve a wide range of clients, handling each project professionally and meeting their requirements. We invest in service quality and in the professional development of our employees to promptly meet market standards. Regardless of the project, we respond quickly and commit to delivering it successfully. Our company puts product and service quality first, together with client satisfaction. Quality assurance is as important as honoring commitments and paying attention to client needs.",
        },
        historyImgAlt: "Company history",
        history: {
          title: "History",
          since: "Since January 2007",
          bullets: [
            "POWER-ON S.R.L. was founded in January 2007 with activity in electrical installations and building services installations. In the same year, the company opened a branch on the premises of S.C. COMAT S.A. Constanța, focusing on the manufacture of ducting, structures, and metal fabrications. We gained experience in metal fabrication.",
            "and steel structures. We can therefore produce a wide range of metal products, most of them custom per project: platforms, railings, stairs, fences and gates (with or without automation), stainless steel tanks and industrial vessels. Our company provides both manufacturing and on-site installation, backed by a team with extensive experience in such works.",
          ],
          stats: {
            foundedYear: { header: "2007", sub: "Year founded" },
            employees: { header: "???", sub: "Employees" },
            projects: { header: "???", sub: "Projects delivered" },
          },
        },
        certs: {
          title: "Certifications",
          items: [
            { header: "Certification 1", year: "2015" },
            { header: "Certification 2", year: "2018" },
            { header: "Certification 3", year: "2020" },
            { header: "Certification 4", year: "2015" },
            { header: "Award", year: "2018" },
            { header: "Participation diploma …", year: "2020" },
            { header: "Recognition from an institution or partner/client", year: "2015" },
            { header: "Anything else that represents you …", year: "2018" },
          ],
        },
      };
    }

    // Romanian
    return {
      heroImgAlt: "Echipa",
      hero: {
        title: "Despre noi",
        subtitle: "Avem aceleași valori de la început: calitate și profesionalism",
        body:
          "POWER-ON S.R.L. s-a impus pe piață prin calitate și profesionalism. Ne adresăm unei game largi de clienți, fiecare lucrare fiind tratată în mod profesionist, răspunzând cerințelor acestora. Investim în calitatea serviciilor și pregătirea profesională a angajaților noștri, pentru a răspunde prompt standardelor pieței. Indiferent de natura lucrării, răspundem prompt apelului dumneavoastră și ne implicăm cu aceeași seriozitate în a o duce la bun sfârșit. Firma noastră pune pe un loc principal calitatea produselor și serviciilor sale, alături de satisfacția clientului. Garanția calității este la fel de importantă ca respectarea angajamentelor față de client și atenția la cerințele acestuia.",
      },
      historyImgAlt: "Istoric companie",
      history: {
        title: "Istorie",
        since: "Din ianuarie 2007",
        bullets: [
          "POWER-ON S.R.L. a luat ființă în ianuarie 2007 având ca domeniu de activitate lucrări de instalații electrice și lucrări de instalații pentru construcții. În același an, societatea deschide punct de lucru în incinta S.C. COMAT S.A. Constanța, având ca activitate executarea de tubulaturi, structuri și confecții metalice. Am acumulat experiență în producția de confecții metalice",
          "și structuri metalice. Astfel putem produce o gamă foarte largă de produse metalice, majoritatea diferind de la un proiect la altul: platforme, balustrade, scări, garduri și porți (cu sau fără automatizare), vase de inox și recipienți industriali. Firma noastră asigură atât confecționarea cât și montajul structurilor produse, beneficiind de un personal cu îndelungată experiență în astfel de lucrări.",
        ],
        stats: {
          foundedYear: { header: "2007", sub: "Anul înființării" },
          employees: { header: "???", sub: "Număr angajați" },
          projects: { header: "???", sub: "Numărul proiectelor" },
        },
      },
      certs: {
        title: "Certificări",
        items: [
          { header: "Certificarea 1", year: "2015" },
          { header: "Certificarea 2", year: "2018" },
          { header: "Certificarea 3", year: "2020" },
          { header: "Certificarea 4", year: "2015" },
          { header: "Premiu", year: "2018" },
          { header: "Diplomă de participare la …", year: "2020" },
          { header: "Recunoaștere din partea unei instituții sau a unui partener / client", year: "2015" },
          { header: "Orice altceva care vă poate reprezenta …", year: "2018" },
        ],
      },
    };
  }, [lang]);

  return (
    <>
      <NavigationBar />
      <div className="about-page">
        <section className="hero">
          <img src={team} alt={t.heroImgAlt} />
          <div>
            <h1>{t.hero.title}</h1>
            <h2>{t.hero.subtitle}</h2>
            <p>{t.hero.body}</p>
          </div>
        </section>

        <section className="history">
          <div>
            <h1>{t.history.title}</h1>
            <h2>{t.history.since}</h2>
            <ul>
              {t.history.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="history-stats-container">
              <HistoryStats
                header={t.history.stats.foundedYear.header}
                subheader={t.history.stats.foundedYear.sub}
              />
              <HistoryStats
                header={t.history.stats.employees.header}
                subheader={t.history.stats.employees.sub}
              />
              <HistoryStats
                header={t.history.stats.projects.header}
                subheader={t.history.stats.projects.sub}
              />
            </div>
          </div>
          <img src={history} alt={t.historyImgAlt} />
        </section>

        <section className="certificates">
          <h1>{t.certs.title}</h1>
          <div className="certificates-stats-container">
            {t.certs.items.map((c, i) => (
              <Certificate key={i} header={c.header} year={c.year} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

function HistoryStats({ header, subheader }) {
  return (
    <article className="history-stats">
      <h3>{header}</h3>
      <p>{subheader}</p>
    </article>
  );
}

function Certificate({ header, year }) {
  return (
    <article className="certificates-item">
      <h5>{header}</h5>
      <p>{year}</p>
    </article>
  );
}
