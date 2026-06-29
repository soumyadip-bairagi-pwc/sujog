import React from "react";
import { Link } from "react-router-dom";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";
import { connect, useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";

function Footer({ language }) {
  const translations = usePageLocalization(language, 'footer');
  const username = ["h", "e", "l", "p", "d", "e", "s", "k", ".", "s", "u", "j", "o", "g"];
  const domain = ["o", "d", "i", "s", "h", "a", ".", "g", "o", "v", ".", "i", "n"];
  const email = username.join("") + "@" + domain.join("");
  return (
    <>
      <footer id="footer" className="footer-border">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 footer-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="assets/img/Sujog.jpg" alt="" style={{ marginBottom: "18px" }} />
                {/* <p style={{color: "#013151", fontWeight: "bold", marginTop: "15px"}}>
                  {translations.huddDisclaimer}
                </p> */}
                <br />
                <i class="bx bx-map" style={{ margin: "10px 0px", color: "#013151", fontWeight: "bold" }}></i><span style={{ color: "#013151", fontWeight: "bold" }}> {translations.city}{" "}</span><br />
                <i class="bx bx-mobile" style={{ margin: "10px 0px", color: "#013151", fontWeight: "bold" }}></i><span style={{ color: "#013151", fontWeight: "bold" }}> {translations.helpdeskPhone}</span><br />
                <i class="bx bx-envelope" style={{ margin: "10px 0px", color: "#013151", fontWeight: "bold" }}></i> <span style={{ color: "#013151", fontWeight: "bold" }}>helpdesk[dot]sujog[at]odisha[dot]gov[dot]in{" "}</span>
                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <a
                    href="https://x.com/HUDDeptOdisha"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    style={{ marginRight: "12px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="#000000"
                      style={{ display: "block" }}
                    >
                      <path d="M18.244 2H21.6l-7.34 8.39L23 22h-6.9l-5.41-6.71L4.79 22H1.4l7.85-8.98L1 2h7.08l4.89 6.08L18.244 2zM16.9 19.8h1.88L7.12 4.1H5.1L16.9 19.8z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/urbanodisha.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{ marginRight: "12px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                      style={{ display: "block" }}
                    >
                      <path
                        fill="#039be5"
                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                      />
                      <path
                        fill="#fff"
                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/hudd_odisha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{
                      fontSize: "30px",
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>



              </div>

              <div class="col-lg-4 col-md-6 footer-links" style={window.innerWidth > 768 ? { marginLeft: "80px", marginRight: "-80px" } : {}}>
                <h4 style={{ color: "#F47216", fontWeight: "bold", marginTop: "5px" }}>{translations.quickLinks}</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="home" style={{ fontWeight: 'bold' }}>{translations.homeLink}</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="ulbs" style={{ fontWeight: 'bold' }}>{translations.ulbLink}</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="contactus" style={{ fontWeight: 'bold' }}>{translations.contact}</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="assets/img/Sujog_T&C.pdf" target="_blank" style={{ fontWeight: 'bold' }}>
                      {translations.termsOfService}
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a
                      href="assets/img/SUJOG Privacy Policy_2024.pdf"
                      target="_blank"
                      style={{ fontWeight: 'bold' }}
                    >
                      {translations.privacyPolicy}
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4 style={{ color: "#F47216", fontWeight: "bold", marginTop: "5px" }}>{translations.termsOfUse}</h4>
                <p style={{ color: "#013151", fontWeight: "bold", marginTop: "10px", textAlign: "justify" }}>{translations.huddText}</p>
                <p style={{ color: "#013151", fontWeight: "bold", marginTop: "28px" }}>{translations.version}2.0.0</p>
                <p style={{ color: "#013151", fontWeight: "bold", marginTop: "0px" }}>{translations.lastUpdate} {showFormattedCurrentDate()}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright" style={{ height: "20px" }}>
            <p>
              {translations.copyrightText}
            </p>
          </div>
        </div>
      </footer>
      
      <div
        className="social-backtotop-wrapper"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 999
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <a
            href="https://x.com/HUDDeptOdisha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            style={{marginBottom: "7px"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#000000"
              style={{ display: "block" }}
            >
              <path d="M18.244 2H21.6l-7.34 8.39L23 22h-6.9l-5.41-6.71L4.79 22H1.4l7.85-8.98L1 2h7.08l4.89 6.08L18.244 2zM16.9 19.8h1.88L7.12 4.1H5.1L16.9 19.8z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/urbanodisha.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 48 48"
              style={{ display: "block" }}
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              />
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/hudd_odisha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              fontSize: "30px",
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <a href="#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(Footer);
