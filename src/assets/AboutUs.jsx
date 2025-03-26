  import React from "react";
  import "bootstrap/dist/css/bootstrap.min.css";

  const AboutUs = () => {
    return (
      <>
        <div className="container-fluid min-vh-100 d-flex bg-dark text-white">
          {/* Vänster sidebar */}
          <div className="col-2 p-4">
            <div className="border border-dark rounded p-4 shadow bg-dark text-white d-flex flex-column h-100">
              <div>
                <img src="/genomskinnlig.png" alt="Faux Finds Logo" className="img-fluid mb-4" />
              </div>

              <div className="mb-4">
                <a href="#" className="text-white text-decoration-none fw-bold fs-5">Om oss</a>
              </div>
              <div className="mb-4">
                <a href="#" className="text-white text-decoration-none fw-bold fs-5">Här finns vi</a>
              </div>
              <div className="mb-4">
                <a href="#" className="text-white text-decoration-none fw-bold fs-5">Kartan</a>
              </div>

              {/* Sociala Medier */}
              <div className="mt-3">
                <div className="mb-2">Sociala Medier</div>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-warning btn-sm">Facebook</a>
                  <a href="#" className="btn btn-warning btn-sm">Instagram</a>
                  <a href="#" className="btn btn-warning btn-sm">Twitter</a>
                </div>
              </div>
            </div>
          </div>

        {/* Huvudinnehåll */}
  <div className="col-9 d-flex flex-column align-items-center justify-content-center">
    {/* Hero-rubrik */}
    <h2 className="text-center text-warning fw-bold mb-5" style={{
      fontSize: '2.5rem', 
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)', 
      letterSpacing: '0.05em',
      fontFamily: "'Playfair Display', serif",
      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'drop-shadow(3px 3px 2px rgba(0,0,0,0.3))',
      transform: 'perspective(500px) rotateX(5deg)',
      transition: 'transform 0.3s ease'
    }}>
      FACHIIUE.COM – VI HJÄLPER DIG
    </h2>

            {/* Kontaktformulär och Om Oss */}
            <div className="row w-75 mb-4">
              {/* Kontaktformulär */}
              <div className="col-md-6 d-flex">
                <div className="card bg-dark text-light p-4 shadow-lg w-100 h-100">
                  <div className="card-header text-center">KONTAKT FORMULÄR</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">Har du frågor?</h5>
                    <p className="card-text text-center">Fyll i formuläret för svar inom 48 timmar.</p>
                    <form>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Namn" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="E-post" required />
                      </div>
                      <div className="mb-3">
                        <textarea className="form-control" placeholder="Meddelande" rows="4" required></textarea>
                      </div>
                      <button type="submit" className="btn btn-warning w-100">Skicka</button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Om Oss */}
              <div className="col-md-6 d-flex">
                <div className="card bg-dark text-light p-4 shadow-lg w-100 h-100">
                  <div className="card-header text-center">OM OSS</div>
                  <div className="card-body text-center d-flex flex-column justify-content-center">
                    <p>
                      Vi startade Faux Finds med en enkel idé: att göra det lätt för alla att hitta snygga,
                      trendiga och användbara produkter till schyssta priser. Mode, smycken, teknik,
                      accessoarer – vi älskar allt som gör vardagen lite roligare och enklare!
                      Vår webbshop är en plats för dig som vill ha både stil och funktion i ditt liv.
                      Oavsett om du letar efter en ny outfit, det senaste inom teknik eller bara något
                      som gör din dag lite bättre, så har vi samlat det bästa på ett och samma ställe.
                      <br /><br />
                      Vårt mål? Att ge dig en shoppingupplevelse som är enkel, inspirerande och fylld med
                      fantastiska fynd. Vi tror att alla ska kunna unna sig det de drömmer om – och hos
                      oss är det möjligt!
                      <br />
                      <strong>Dröm det. Köp det. Älska det.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Här finns vi + Karta */}
            <div className="row w-75 mb-4">
              {/* Här finns vi */}
              <div className="col-md-4 d-flex">
                <div className="card bg-dark text-light p-4 shadow-lg w-100 h-100">
                  <div className="card-header text-center">HÄR FINNS VI</div>
                  <div className="card-body d-flex flex-column justify-content-center">
                    <p><strong>Adress:</strong> Tomtebodavägen 3A</p>
                    <p><strong>Mejl:</strong> FauxFinds@live.com</p>
                    <p className="mb-0">
                      Vi tar ej emot returfrågor etc via mejl, endast kontaktformulär.
                    </p>
                  </div>
                </div>
              </div>

              {/* Karta */}
              <div className="col-md-8 d-flex">
                <div className="card bg-dark text-light p-4 shadow-lg w-100 h-100">
                  <div className="card-header text-center">KARTAN</div>
                  <div className="card-body text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21302.123456!2d18.016500!3d59.350440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6a16b2d1d1%3A0x54f2e7e5a7e13f45!2sTomtebodav%C3%A4gen%203A%2C%20171%2065%20Solna!5e0!3m2!1ssv!2sse!4v1614647456789"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{
    border: "none",
    borderTop: "1px solid #FFD700",
    width: "80%",
    margin: "0 auto 10px auto"
  }} />

        {/* FOOTER */}
        <footer className="text-center bg-dark w-100" style={{
    color: "#FFD700",
    fontSize: "1.1rem",
    textShadow: "1px 1px 2px black",
    fontWeight: "bold",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "8px 0",
    marginTop: "-24px"
  }}>
    © 2025 Faux Finds | <a href="#" style={{ color: "#FFD700", textDecoration: "none" }}>Integritetspolicy</a> | <a href="#" style={{ color: "#FFD700", textDecoration: "none" }}>Villkor</a>
  </footer>
      </>
    );
  };

  export default AboutUs;
