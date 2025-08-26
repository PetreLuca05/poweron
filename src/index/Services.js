
import "./Services.css";

const service1Image = require("../assets/image_1.jpg");
const service2Image = require("../assets/image_2.jpg");
const service3Image = require("../assets/image_3.jpg");
const service4Image = require("../assets/image_4.jpg");
const service5Image = require("../assets/image_5.jpg");
const service6Image = require("../assets/image_6.jpg");
const service7Image = require("../assets/image_7.jpg");
const service8Image = require("../assets/image_8.jpg");

function Services() {
  return (
    <section className="section">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        <ServiceItem
          title="Instalații sanitare și de incendiu"
          image={service1Image}
          listItems={[
            "Executăm și întreținem instalații de stingere incendiu – hidranți, sprinklere, drencere, stații de pompare",
            "Suntem autorizați IGSU",
          ]}
        />
        <ServiceItem
          title="Instalații ventilație și desfumare"
          image={service2Image}
          listItems={[
            "Executăm și întreținem instalații desfumare (tubulatură specifică)",
            "Suntem autorizați IGSU",
          ]}
        />
        <ServiceItem
          title="Foraj orizontal dirijat – subtraversare"
          image={service3Image}
          listItems={[
            "Executăm lucrări de înlocuire și/sau extindere conducte gaze, apă, cabluri electrice sau fibră optică cu echipament de foraj dirijabil cu diametre de până la 500 mm.",
          ]}
        />
        <ServiceItem
          title="Instalații și lucrări edilitare"
          image={service4Image}
          listItems={[
            "Executăm marcaje rutiere, parcări cu vopsea monocomponentă, bicomponentă sau preformate Swarco",
            "Suntem autorizați BRML (exercitare activități de montare mijloace de măsurare – apometre) și autorizați RAJA pentru lucrări de întreținere, reabilitare și/sau extindere rețele apă potabilă, canalizare și refulare, stații pompare.",
          ]}
        />
        <ServiceItem
          title="Instalații termice și de climatizare"
          image={service5Image}
          listItems={[
            "instalații HVAC",
            "instalații ACM (apa caldă menajeră)",
            "instalații centrale termice industriale",
            "sisteme climatizare multisplit",
            "sisteme VRV",
          ]}
          description="Executăm și întreținem"
        />
        <ServiceItem
          title="Instalații electrice"
          image={service6Image}
          listItems={[
            "Executăm și întreținem instalații electrice de joasă tensiune",
            "Efectuăm măsurători PRAM",
            "Suntem autorizați ANRE",
          ]}
        />
        <ServiceItem
          title="Alte lucrări"
          image={service7Image}
          listItems={[
            "Executăm săpături, taluzări, demolări, tăiat asfalt, asfaltări.",
          ]}
        />
        <ServiceItem
          title="Construcții unifamiliale și multifamialiale"
          image={service8Image}
          listItems={["Construcții unifamiliale și multifamialiale"]}
        />
      </div>
    </section>
  );
}

function ServiceItem({ title, description, image, listItems }) {
  return (
    <div className="service">
      <h3 className="title">{title}</h3>
      {image && <img src={image} alt={title} className="image" />}
      <section className="service-body" style={{ padding: "20px" }}>
        {description && <p className="description">{description}</p>}
        {listItems?.length > 0 && (
          <ul className="list">
            {listItems.map((item, i) => (
              <li key={i} className="list-item" style={{borderWidth: i === 0 ? '0' : '1px'}}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Services;
