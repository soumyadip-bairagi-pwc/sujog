import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import PreApprovedInfoPopUp from "../PreApprovedInfoPopUp";
import usePageLocalization from "../../utils/usePageLocalization";
import ServicesCarousel from "../Services";

// Conclave banner windows (IST, converted to UTC for zone-safe comparisons):
//   window 1 — UAT-only preview:    2026-08-17 18:00 IST (12:30 UTC) → 2026-08-17 21:00 IST (15:30 UTC)  → "full" (register + search)
//   window 2 — production go-live:  2026-08-18 15:00 IST (09:30 UTC) → 2026-08-20 18:00 IST (12:30 UTC)  → "full"
//   window 3 — post-event wind-down: 2026-08-20 18:00 IST (12:30 UTC) → 2026-08-24 00:00 IST (Aug 23 18:30 UTC, end of Sunday) → "search" only
// UAT is identified by the "-dev" segment in the hostname (matches sujog-dev.odisha.gov.in),
// the same convention used in MenuBar for baseUrl selection.
const CONCLAVE_WINDOW_1_START = Date.UTC(2026, 7, 17, 12, 30);
const CONCLAVE_WINDOW_1_END = Date.UTC(2026, 7, 17, 15, 30);
const CONCLAVE_WINDOW_2_START = Date.UTC(2026, 7, 18, 9, 30);
const CONCLAVE_WINDOW_2_END = Date.UTC(2026, 7, 20, 12, 30);
const CONCLAVE_WINDOW_3_END = Date.UTC(2026, 7, 23, 18, 30);
const getConclaveBannerMode = () => {
  const now = Date.now();
  const isUAT = window.location.hostname.includes("-dev");
  const inWindow1 = isUAT && now >= CONCLAVE_WINDOW_1_START && now <= CONCLAVE_WINDOW_1_END;
  const inWindow2 = now >= CONCLAVE_WINDOW_2_START && now <= CONCLAVE_WINDOW_2_END;
  const inWindow3 = now > CONCLAVE_WINDOW_2_END && now <= CONCLAVE_WINDOW_3_END;
  if (inWindow1 || inWindow2) return "full";
  if (inWindow3) return "search";
  return null;
};

const HomePage = ({ language }) => {
  const translations = usePageLocalization(language, 'home');
  const isLoading = useSelector((state) => state.localization.isLoading);
  const [isExpanded, setIsExpanded] = useState(false);
  const [conclaveBannerMode, setConclaveBannerMode] = useState(getConclaveBannerMode);

  useEffect(() => {
    const id = setInterval(() => {
      setConclaveBannerMode(getConclaveBannerMode());
    }, 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    const modal = document.getElementById("myModal");
    const img = document.getElementById("myImg");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    if (img) {
      img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      };
    }

    const span = document.getElementsByClassName("close")[0];
    if (span) {
      span.onclick = () => {
        modal.style.display = "none";
      };
    }

    console.log(captionText, "Nero");

    // Cleanup function to remove the script and event listeners
    return () => {
      document.body.removeChild(script);
      if (img) img.onclick = null;
      if (span) span.onclick = null;
    };
  }, []);

  return (
    <>
      <section id="hero" style={{ width: window.innerWidth }}>
        <div style={{ height: window.innerWidth > 768 ? "35px" : "0px", backgroundColor: "#F47216", width: "100%" }}></div>
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol
              className="carousel-indicators"
              id="hero-carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              <div class="cm2" style={window.innerWidth > 768 ? { left: "70px", top: "40px" } : { left: "10px", top: "0px" }}>
                <img class="cm1" src="assets/img/Odisha-cm.png" />
                <div class="company-badge" style={{ background: "rgba(255, 255, 255, 0.7", marginLeft: "15px", color: "#000000", fontWeight: 500 }}>
                  <span>Shri Mohan Charan Majhi </span> <br />
                  <span> Hon'ble Chief Minister</span>
                </div>
              </div>
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: "url('assets/img/slide/banner_v1.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container"></div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url('assets/img/slide/utkarsh_odisha.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container"></div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url('assets/img/cover_image_3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container"></div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url('assets/img/slide/utkarsh_odisha_2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container"></div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url('assets/img/cover_image_2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container"></div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url('assets/img/cover_image_4.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container"></div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url('assets/img/cover_image_6.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "scaleX(-1)"
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content container"></div>
                </div>
              </div>
            </div>
            {/* <div style={{ position: "absolute", zIndex: "99", left: "890px", right: "50px", top: "60px" }}>
                <img style={{ width: "200px" }} src="assets/img/Odisha-cm.png" />
                <div class="company-badge" style={{ paddingLeft: "16px", backgroundColor: "rgba(255, 255, 255, 0.85)", left: "-10px" }}>
                  <span style={{ color: "#F47216", fontSize: "16px" }}>Shri Mohan Charan Majhi </span><br />
                  <span style={{ fontSize: "12px" }}> Hon'ble Chief Minister</span>
                </div>
              </div> */}
          </div>
        </div>
      </section>
      <div className="container">
        <Helmet>
          <title>{translations.application}</title>
        </Helmet>
        {/* <div className="chif aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" style={{ backgroundColor: "#F47216" }}>
          <img alt="homepage" src="assets/img/Odisha-cm.png" style={{ transform: "scale(1.1) translateY(7%)" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "15%" }}>
            <span style={{ color: "#FFFFFF", fontSize: "1.1vw", fontWeight: "bold" }}>{translations.cmName}</span>
            <span style={{ color: "#FFFFFF", fontSize: "0.9vw" }}>{translations.cmDesc}</span>
          </div>
        </div> */}

      </div>
      {conclaveBannerMode && (
        <div className="conclave-banner">
          🔔{" "}
          {conclaveBannerMode === "full"
            ? translations.conclaveBannerText
            : translations.conclavePostEventText}
          &nbsp;
          {conclaveBannerMode === "full" && (
            <>
              <a
                href="/citizen/withoutAuth/egov-usm/register"
                className="conclave-banner-link"
              >
                {translations.conclaveBannerLinkText}
              </a>
              &nbsp;|&nbsp;
            </>
          )}
          <a
            href="/citizen/withoutAuth/egov-usm/search"
            className="conclave-banner-link"
          >
            {translations.conclaveBannerSearchLinkText}
          </a>
        </div>
      )}
      <div className="rolling-banner">
        <div className="rolling-content">
          <span>
            🔔 {translations.rollingMessage1} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            🔔 {translations.rollingMessage2} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            🔔 {translations.rollingMessage3} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span>
            🔔 {translations.rollingMessage1} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            🔔 {translations.rollingMessage2} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            🔔 {translations.rollingMessage3} &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
      <main id="main">

        <section className="counts section-bg" style={{ position: "relative", zIndex: 100 }}>
          <div className="container">
            {/* <div className="section-title">
              <h3>{translations.importantLinksTitle}</h3>
            </div> */}

            <div className="row" style={{ marginTop: "40px" }}>
              {/* Government of Odisha Link */}
              <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" style={{ paddingLeft: "6px", paddingRight: "6px" }}>
                <a
                  href={translations.link1Url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      marginBottom: "12px",
                      padding: "10px",
                      gap: "5px"
                    }}
                  >
                    <img
                      src="./assets/img/odishaemblem.png"
                      alt={translations.link1Title}
                      style={{ width: "50px", height: "55px", marginLeft: "20px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link1Title}</h4>
                  </div>
                </a>
              </div>

              {/* HUDD Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <a
                  href={translations.link4Url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      marginBottom: "12px",
                      padding: "15px"
                    }}
                  >
                    <img
                      src="./assets/img/odishaemblem.png"
                      alt={translations.link1Title}
                      style={{ width: "55px", height: "55px", marginLeft: "8px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link4Title}</h4>
                  </div>
                </a>
              </div>

              {/* Bhubaneswar Smart City */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <a
                  href={translations.link5Url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      marginBottom: "12px",
                      padding: "15px",
                      gap: "10px"
                    }}
                  >
                    <img
                      src="./assets/img/bhubaneswarsmartcity_logo.png"
                      alt={translations.link1Title}
                      style={{ width: "50px", height: "50px", marginLeft: "12px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link5Title}</h4>
                  </div>
                </a>
              </div>

              {/* Odisha One */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <a
                  href={translations.link3Url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      gap: "12px",
                      marginBottom: "12px",
                      padding: "15px"
                    }}
                  >
                    <img
                      src="./assets/img/odishaone_logo.svg"
                      alt={translations.link1Title}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link3Title}</h4>
                  </div>
                </a>
              </div>

              {/* Janasunani */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <a
                  href={translations.link2Url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      gap: "18px",
                      marginBottom: "12px",
                      padding: "10px"
                    }}
                  >
                    <img
                      src="./assets/img/od-Jana-sunani.png"
                      alt={translations.link1Title}
                      style={{ width: "55px", height: "55px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link2Title}</h4>
                  </div>
                </a>
              </div>

              {/* Go-Swift Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <a
                  href={translations.link7Url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      gap: "18px",
                      marginBottom: "12px",
                      padding: "10px"
                    }}
                  >
                    <img
                      src="./assets/img/gologo.png"
                      alt={translations.link1Title}
                      style={{ width: "100px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link7Title}</h4>
                  </div>
                </a>
              </div>

              {/* ORERA Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <a
                  href={translations.link8Url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      gap: "20px",
                      marginBottom: "12px",
                      padding: "10px"
                    }}
                  >
                    <img
                      src="./assets/img/orera.png"
                      alt={translations.link1Title}
                      style={{ width: "55px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link8Title}</h4>
                  </div>
                </a>
              </div>

              {/* Odisha Tourism Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <a
                  href={translations.link6Url}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="count-box2"
                    style={{
                      gap: "12px",
                      marginBottom: "12px",
                      padding: "10px"
                    }}
                  >
                    <img
                      src="./assets/img/odishatourism_logo.png"
                      alt={translations.link1Title}
                      style={{ width: "55px", height: "55px" }}
                    />
                    <h4 style={{ color: "#012970", marginBottom: "0px" }}>{translations.link6Title}</h4>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>

        <section id="about" class="about section" style={{ position: "relative", zIndex: 10 }}>

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4 justify-content-between">

              <div class="col-xl-6" data-aos="fade-up" data-aos-delay="200">
                <span class="about-meta"> {translations.aboutUs}</span>
                <h2 class="about-title">  {translations.aboutSujog} </h2>
                <div style={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#fe7a51",
                  borderRadius: "2px",
                  marginBottom: "25px"
                }}></div>
                <p class="about-description" style={{ textAlign: "justify", color: "#04285c" }}>{translations.aboutSUJOGDesc}</p>

                <div class="row feature-list-wrapper">
                  <div class="col-md-12">
                    <a
                      class="btn btn-primary width1 custom-btn"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      style={{ backgroundColor: "#fe7a51", borderRadius: "20px" }}
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? translations.readLess : translations.readMore}
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-xl-5" data-aos="fade-up" data-aos-delay="300">
                <div class="image-wrapper">
                  <div class="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                    <img src="assets/img/about-1b.jpg" alt="Business Meeting" class="img-fluid main-image rounded-4" style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <img src="assets/img/about-3.jpg" alt="Team Discussion" class="img-fluid small-image rounded-4" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-12 col-md-12 text1" style={{ marginTop: "20px", borderRadius: "20px" }}>
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="collapse" id="collapseExample">
                <div className="about-read-more" style={{ marginTop: "10px", marginBottom: "10px", padding: "20px" }}>
                  {/* Vision Section */}
                  <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon" style={{ margin: "20px", marginRight: "30px" }}>
                      <img src="assets/img/vision_orange.png" className="img-fluid" alt="" />
                    </div>
                    <div style={{ flexGrow: 1, marginLeft: "54px" }}>
                      <h4 className="title">
                        <a href="about.html">{translations.visionTitle}</a>
                      </h4>
                      <p className="description" style={(window.innerWidth < 787) ? { marginLeft: "96px" } : {}}>{translations.visionDescription}</p>
                    </div>
                  </div>
                </div>
                <div className="about-read-more" style={{ marginTop: "20px", marginBottom: "10px", padding: "20px" }}>
                  {/* Objective Section */}
                  <div className="icon-box d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon" style={{ marginLeft: "20px", marginTop: "0px", flexShrink: 0, height: "100%" }}>
                      <img src="assets/img/objective_orange.png" className="img-fluid" alt="" />
                    </div>
                    <div style={{ flexGrow: 1, marginLeft: "30px" }}>
                      <h4 className="title" style={{ marginLeft: "30px" }}>
                        <a href="">{translations.objectiveTitle}</a>
                      </h4>
                      <p className="description" style={{ textAlign: "left", marginLeft: "30px" }}>
                        {translations.objectiveDescription}
                        <br />
                        <strong>a.</strong> {translations.objectivePointA}
                        <br />
                        <strong>b.</strong> {translations.objectivePointB}
                        <br />
                        <strong>c.</strong> {translations.objectivePointC}
                        <br />
                        <strong>d.</strong> {translations.objectivePointD}
                        <br />
                        <strong>e.</strong> {translations.objectivePointE}
                        <br />
                        <strong>f.</strong> {translations.objectivePointF}
                        <br />
                        <strong>g.</strong> {translations.objectivePointG}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="counts section-bg2" style={{ marginTop: "25px" }}>
          <div className="container">
            <div className="section-title">
              <h2 style={{ textAlign: "center" }}>{translations.servicesTitle}</h2>
              <p>{translations.servicesDescription}</p>
            </div>
            <ServicesCarousel translations={translations} />

          </div>
        </section>

        <section class="wn-9 wn section light-background" id="wn">
          <div class="container">
            <div class="row gy-4" style={{ marginBottom: "50px" }}>
              <div class="col-lg-5 aos-init aos-animate" data-aos="fade-up">
                <h2 class="wn-title">{translations.wnTitle} </h2>
                <div style={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#fe7a51",
                  borderRadius: "2px",
                  marginBottom: "25px"
                }}></div>
                <div class="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                  <img src="assets/img/map-2.jpg" alt="Business Meeting" class="img-fluid main-image rounded-4" />

                </div>
              </div>{/*<!-- End Feature Borx-->*/}
              <div class="col-xl-7 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                <div class="wn-9 wn section pad1" id="wn">
                  <div class="wn-container">
                    <h2 style={{ color: "#fe7a51" }}> {translations.whatsNewTitle} <i class="icofont-arrow-right" style={{ fontSize: "30px" }}></i> </h2>

                    <div class="wn-item">
                      <h3>
                        <a
                          href={translations.award1Link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {translations.award1Title}
                        </a>
                      </h3>
                      <i class="wn-toggle bi bi-chevron-right"></i>
                    </div>{/*<!-- End Faq item-->*/}

                    <div class="wn-item">
                      <h3>
                        <a
                          href={translations.award2Link}
                          rel="noreferrer"
                          target="_blank"
                        >{translations.award2Title}
                        </a>
                      </h3>
                      <i class="wn-toggle bi bi-chevron-right"></i>
                    </div>{/*<!-- End Faq item-->*/}

                    <div class="wn-item">
                      <h3>
                        <a
                          href={translations.award3Link}
                          rel="noreferrer"
                          target="_blank"
                        >{translations.award3Title}
                        </a>
                      </h3>
                      <i class="wn-toggle bi bi-chevron-right"></i>
                    </div>{/*<!-- End Faq item-->*/}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PreApprovedInfoPopUp /></>
  );
};

const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(HomePage);
