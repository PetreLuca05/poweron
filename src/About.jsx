import "./About.css";
import NavigationBar from './components/NavigationBar';
import team from "./assets/1.jpeg";
import history from "./assets/23.jpg";
import Footer from "./components/Footer";

export default function About() {
  return (
    <>
      <NavigationBar />
      <div className="about-page">
        <section className="hero">
          <img src={team} alt="Alexandra" />
          <div>
            <h1>Despre noi</h1>
            <h2>
              Avem aceleași valori de la început: calitate și profesionalism
            </h2>
            <p>
              POWER-ON S.R.L. s-a impus pe piață prin calitate și profesionalism. 
              Ne adresăm unei game largi de clienți, fiecare lucrare fiind tratată în mod prefesionist, răspunzând cerințelor acestora. Investim în calitatea serviciilor și pregătirea profesională a angajaților noștri, pentru a răspunde prompt standardelor pieței.
              Indiferent de natura lucrării, răspundem prompt apelului dumneavoastră și ne implicăm cu aceeași seriozitate în a o duce la bun sfârșit.
              Firma noastră pune pe un loc principal calitatea produselor și serviciilor sale, la un loc cu satisfacția clientului. Garanția calității este la fel de importantă ca și respectarea angajamentelor față de client sau atenția la cerințele acestuia.
            </p>
          </div>
        </section>

        <section className="history">
          <div>
            <h1>Istorie</h1>
            <h2>
              Din ianuarie 2007
            </h2>
            <ul>
              <li>POWER-ON S.R.L. a luat ființă în ianuarie 2007 având ca domeniu de activitate lucrări de instalții electrice și lucrări de instalații pentru construcții.
                In același an sociatatea deschide punct de lucru în incinta S.C. COMAT S.A. Constanța, având ca activitate executarea de tubulaturi, structuri și confecții metalice.
                Am acumulat experiență în producția de confecții metalice
              </li>
              <li>
                și structuri metalice. Astfel putem produce o gamă foarte largă de produse metalice, majoritatea diferind de la un proiect la altul: platforme, balustrade, scări, garduri și porți (cu sau fără automatizare), vase de inox și recipienți industriali. Firma noastră asigură atât confecționarea cât și montajul structurilor produse, beneficiind de un personal cu îndelungată experiență în astfel de lucrări.
              </li>
            </ul>

            <div className="history-stats-container">
              <HistoryStats header="2007" subheader="Anul înființării" />
              <HistoryStats header="???" subheader="Număr angajați" />
              <HistoryStats header="???" subheader="Numarul proiectelor" />
            </div>
          </div>
          <img src={history} alt="Istoric" />
        </section>

        <section className="certificates">
          <h1>Certificări</h1>
          <div className="certificates-stats-container">
            <Certificate header="Certificarea 1" year="2015" />
            <Certificate header="Certificarea 2" year="2018" />
            <Certificate header="Certificarea 3" year="2020" />
            <Certificate header="Certificarea 4" year="2015" />
            <Certificate header="Premiu" year="2018" />
            <Certificate header="Diploma de partifipare la …" year="2020" />
            <Certificate header="Recunoasterea din partea unei istiturii sau a unui partener / client" year="2015" />
            <Certificate header="Orice altceva care va poate reprezenta …." year="2018" />
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
