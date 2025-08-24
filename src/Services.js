const service1Image = require("./assets/image_1.jpg");
const service2Image = require("./assets/image_2.jpg");
const service3Image = require("./assets/image_3.jpg");
const service4Image = require("./assets/image_4.jpg");
const service5Image = require("./assets/image_5.jpg");
const service6Image = require("./assets/image_6.jpg");
const service7Image = require("./assets/image_7.jpg");
const service8Image = require("./assets/image_8.jpg");

function Services() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Services</h2>
      <div style={styles.servicesContainer}>
        <ServiceItem
          title="Instalații sanitare și de incendiu"
          description=""
          image={service1Image}
          listItems={["Executăm și întreținem instalații de stingere incendiu – hidranți, sprinklere, drencere, stații de pompare", "Suntem autorizați IGSU"]}
        />
        <ServiceItem
          title="Instalații ventilație și desfumare"
          description=""
          image={service2Image}
          listItems={["Executăm și întreținem instalații desfumare (tubulatură specifică) ", "Suntem autorizați IGSU"]}
        />
        <ServiceItem
          title="Foraj orizontal dirijat – subtraversare"
          description=""
          image={service3Image}
          listItems={["Executăm lucrări de înlocuire și/sau extindere conducte gaze, apă, cabluri electrice sau fibră optică cu echipament de foraj dirijabil cu diametre de până la 500 mm."]}
        />
        <ServiceItem
          title="Instalații și lucrări edilitare"
          description=""
          image={service4Image}
          listItems={["Executăm marcaje rutiere, parcări cu vopsea monocomponentă, bicomponentă sau preformate Swarco",
            "Suntem autorizați BRML (exercitare activități de montare mijloace de măsurare – apometre) si autorizați RAJA în vederea executării lucrărilor de întreținere, reabilitare și/sau extindere rețele apă potabilă, canalizare și refulare, stații pompare."
          ]}
        />
        <ServiceItem
          title="Instalații termice și de climatizare"
          description="Executăm și întreținem"
          image={service5Image}
          listItems={["instalații HVAC",
            "instalații ACM ( apa calda menajera )",
            "instalații centrale termice industriale",
            "sisteme climatizare multisplit",
            "sisteme VRV"
          ]}
        />
        <ServiceItem
          title="Instalații electrice"
          image={service6Image}
          listItems={["Executăm și întreținem instalații  electrice de joasă tensiune",
            "Efectuăm măsurători PRAM",
            "Suntem autorizați ANRE",
          ]}
        />
        <ServiceItem
          title="Alte lucrări"
          image={service7Image}
          listItems={["Executăm săpături, taluzări, demolări, tăiat asfalt, asfaltări.",]}
        />
        <ServiceItem
          title="Construcții unifamiliale și multifamialiale"
          image={service8Image}
          listItems={["Construcții unifamiliale și multifamialiale",]}
        />
      </div>
    </section>
  );
}

function ServiceItem({ title, description, image, listItems }) {
  return (
    <div style={styles.service}>
      <h3 style={styles.title}>{title}</h3>
      <section style={{ padding: 20 }}>
        {image && <img src={image} alt={title} style={styles.image} />}
        {description && <p style={styles.description}>{description}</p>}
        {listItems && listItems.length > 0 && (
          <ul style={styles.list}>
            {listItems.map((item, index) => (
              <li key={index} style={styles.list_item}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

const styles = {
  section: {
    padding: "40px 100px",
    background: "#0f1115",
  },
  heading: {
    textAlign: "center",
    marginBottom: 40,
    color: "#fff",
    textTransform: "uppercase",
  },
  servicesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gap: "25px",
    justifyItems: "center",
    alignItems: "stretch",
  },
  service: {
    border: "1px solid rgba(238, 238, 238, 0.16)",
    borderRadius: 10,
    background: "rgba(255, 255, 255, 0.06)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  list: {
    listStyleType: "none",
    paddingLeft: 20,
    marginTop: 10,
  },
  list_item: {
    marginBottom: 10,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    textTransform: "capitalize",
    paddingBottom: 10,
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  title: {
    fontSize: "clamp(18px, 2.2vw, 24px)",
    fontWeight: 700,
    textAlign: "center",
    color: "#fff",
    textTransform: "capitalize",
    background: "rgba(202, 39, 39, 1)",
    padding: "10px 20px",
  },
  description: {
    fontSize: "clamp(14px, 2.2vw, 18px)",
    padding: "10px 0",
    textAlign: "center",
    color: "#fff",
    display: "block",
    textTransform: "uppercase",
  },
};
export default Services;
