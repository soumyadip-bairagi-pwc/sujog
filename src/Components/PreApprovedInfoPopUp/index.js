import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import "./index.css";

const PreApprovedInfoPopUp = () => {
  const [lgShow, setLgShow] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    // Set a timeout to close the popup after 60 seconds
    const timeout = setTimeout(() => {
      closeModal();
    }, 30000);
    setTimeoutId(timeout);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const closeModal = () => {
    setLgShow(false);
  };

  const openOptions = () => {
    setShowOptions(true);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  const handleEnglishVideo = () => {
    let url = "https://youtu.be/2V1ssVuTsKM?si=2dFR6DgVL-0PFVjj"; // Replace with the English YouTube URL
    window.open(url, "_blank");
  };

  const handleOdiaVideo = () => {
    let url = "https://youtu.be/kIcorQHwHQA?si=OFjrfG6kgjA9DMg8"; // Replace with the Odia YouTube URL
    window.open(url, "_blank");
  };

  const handleDownloadManual = () => {
    let url = "/Deshboard/images/SUJOG Pre Approved Plans User Manual.pdf";
    window.open(url, "_blank");
  };
  const handleDownloadQuickGuide = () => {
    let url = "/Deshboard/images/Quick Guide Pre Approved Plan.pdf";
    window.open(url, "_blank");
  };

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={closeModal}
        backdropClassName="custom-modal"
        aria-labelledby="example-modal-sizes-title-sm"
        className="custom-modal-size"
        centered
      >
        <Modal.Body>
          <div style={{ position: "relative" }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "-10px",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              className="close-btn"
            >
              <FontAwesomeIcon icon={faTimes} className="custom-icon" />
            </button>
            {/* <img
                            src="assets/img/Pre approved plan popup 9.jpg"
                            alt="Image"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div style={{ position: 'absolute', top: '45%', left: '75%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column' }}>
                            <Button variant="primary" onClick={openOptions} className="custom-button btn-clr">
                                Watch Pre-Approved plans Video
                            </Button>
                            <Button variant="secondary" onClick={handleDownloadQuickGuide} className="custom-button btn-clr">
                                <span class="tooltiptext">Download Quick Guide</span>
                            </Button>
                            <Button variant="secondary" onClick={handleDownloadManual} className="custom-button btn-clr">
                                <span class="tooltiptext">Download User Manual</span>
                            </Button>
                        </div> */}
            <div className="container">
              <div>
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                  crossorigin="anonymous"
                ></link>

                <script
                  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                  crossorigin="anonymous"
                ></script>
                <script
                  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                  crossorigin="anonymous"
                ></script>
                <script
                  src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                  crossorigin="anonymous"
                ></script>

                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                  data-pause="false"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src="assets/img/Pre approved plan popup 9.jpg"
                        alt="First slide"
                      ></img>
                      <div class="carousel-caption d-none d-md-block">
                        <div
                          style={{
                            position: "absolute",
                            top: "-250%",
                            left: "80%",
                            transform: "translate(-50%, -50%)",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Button
                            onClick={openOptions}
                            className="custom-button btn-clr"
                          >
                            Watch Pre-Approved plans Video
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={handleDownloadQuickGuide}
                            className="custom-quick-guide-button"
                          >
                            <span class="tooltiptext">
                              Download Quick Guide
                            </span>
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={handleDownloadManual}
                            className="custom-button btn-clr"
                          >
                            <span class="tooltiptext">
                              Download User Manual
                            </span>
                          </Button>
                          //
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src="assets/img/slide/Media.jpg"
                        alt="Second slide"
                      ></img>
                    </div>
                    <div class="carousel-item">
                      <a href="/citizen/withoutAuth/egov-usm/register">
                        <img
                          class="d-block w-100"
                          src="assets/img/Conclave_pop.png"
                          alt="Odisha Urban Conclave Registration"
                          style={{ cursor: "pointer" }}
                        ></img>
                      </a>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={showOptions}
        onHide={closeOptions}
        backdropClassName="custom-modal"
        centered
      >
        <Modal.Body>
          <div>
            <h2>
              Watch Pre Approved Plan Tutorial in English or Odia language.
            </h2>
            <Button
              variant="success"
              onClick={handleEnglishVideo}
              className="custom-button btn-clr mt-3"
            >
              English Video
            </Button>
            <Button
              variant="success"
              onClick={handleOdiaVideo}
              className="custom-button btn-clr mt-3 ml-3"
            >
              Odia Video
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PreApprovedInfoPopUp;
