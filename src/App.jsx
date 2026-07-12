import logo from "./assets/logo-header-cropped.png";
import excavator from "./assets/equipment/cat3018.jpg";

import eu from "./assets/sponsors/eu.png";
import lgd from "./assets/sponsors/lgd.png";
import wpr from "./assets/sponsors/wpr.png";

function App() {
  return (
    <main>
      <nav className="navbar">

        <div className="nav-logo">
          POL-ON
        </div>

        <div className="nav-links">
          <a href="#start">Start</a>
          <a href="#uslugi">Usługi</a>
          <a href="#dotacje">Dotacje</a>
          <a href="#kontakt">Kontakt</a>
        </div>

      </nav>

      <section className="hero" id="start">

        <div className="hero-left">

          <img
            src={logo}
            alt="POL-ON"
            className="hero-logo"
          />

          <h2>
            Budowa
            <br />
            Logistyka
            <br />
            Wynajem
            <br />
            Inwestycje
          </h2>

          <p className="description">
            Profesjonalne usługi minikoparką,
            instalacje wodno-kanalizacyjne,
            transport oraz wynajem sprzętu.
          </p>

          <div className="buttons">

            <a
              href="tel:+48501596465"
              className="button"
            >
              Zadzwoń
            </a>

            <a
              href="#kontakt"
              className="button secondary"
            >
              Kontakt
            </a>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={excavator}
            alt="CAT 301.8"
            className="excavator"
          />

        </div>

      </section>

      <section className="services" id="uslugi">

        <h2>Nasze usługi</h2>

        <div className="cards">

          <div className="card">
            Usługi minikoparką
          </div>

          <div className="card">
            Instalacje wodno-kanalizacyjne
          </div>

          <div className="card">
            Transport
          </div>

          <div className="card">
            Wynajem sprzętu
          </div>

        </div>

      </section>

      <section className="grants" id="dotacje">

        <h2>
          Projekt współfinansowany
          ze środków Unii Europejskiej
        </h2>

        <p>
          Operacja realizowana w ramach interwencji
          <strong>
            {" "}
            I.13.1 LEADER / Rozwój Lokalny Kierowany przez Społeczność –
            Wdrażanie LSR – z wyłączeniem projektów grantowych.
          </strong>
        </p>

        <div className="grant-logos">

          <div className="grant-card">
            <img
              src={wpr}
              alt="Plan Strategiczny WPR"
            />
          </div>

          <div className="grant-card">
            <img
              src={lgd}
              alt="LGD Równiny Wołomińskiej"
            />
          </div>

          <div className="grant-card">
            <img
              src={eu}
              alt="Dofinansowane przez Unię Europejską"
            />
          </div>

        </div>

      </section>

      <footer
        id="kontakt"
        className="footer"
      >

        <h2>Kontakt</h2>

        <p>
          <strong>Łukasz Powierża</strong>
        </p>

        <p>📞 501 596 465</p>

        <p>🌐 www.pol-on.pl</p>

      </footer>

    </main>
  );
}

export default App;