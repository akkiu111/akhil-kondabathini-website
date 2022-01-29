import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "16px" }}
          >
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col">
                  <a href="tel: +1-512-900-5733">+1(512)900-5733</a>
                  <br />
                  <a href="mailto: akhil.u111@gmail.com">
                    akhil.u111@gmail.com
                  </a>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "16px" }}
          >
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col">
                  <Link
                    smooth={true}
                    to="homeId"
                    offset={-80}
                    duration={1000}
                    href="footer-nav"
                  >
                    Home
                  </Link>{" "}
                  <br />
                  <Link
                    smooth={true}
                    to="aboutId"
                    offset={-80}
                    duration={1000}
                    href="footer-nav"
                  >
                    About me
                  </Link>{" "}
                  <br />
                </div>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="projectsId"
                  offset={-80}
                  duration={1000}
                  href="footer-nav"
                >
                  Projects
                </Link>{" "}
                <br />
                <Link
                  smooth={true}
                  to="timelineId"
                  offset={-80}
                  duration={1000}
                  href="footer-nav"
                >
                  Timeline
                </Link>{" "}
                <br />
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-4"
            style={{ marginBottom: "16px" }}
          >
            <div className="row">
              <div className="d-flex justify-content-center">
                <div class="social-container">
                  <a
                    href="https://github.com/akkiu111/"
                    target="_blank"
                    rel="noreferrer"
                    className="github social"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/akhil-kondabathini-42316716a/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin social"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>

                  <a
                    href="https://www.facebook.com/GrandMaster2493/"
                    target="_blank"
                    rel="noreferrer"
                    className="facebook social"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>

                  <a
                    href="https://twitter.com/iamakhilk2/"
                    target="_blank"
                    rel="noreferrer"
                    className="twitter social"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>

                  <a
                    href="https://www.youtube.com/sunnyakhil/"
                    target="_blank"
                    rel="noreferrer"
                    className="youtube social"
                  >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>

                  <a
                    href="https://www.instagram.com/iamakhil02/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram social"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-3 text-center" style={{ color: "#ffffa1" }}>
          Copyright&copy;
          {new Date().getFullYear()}&nbsp; | Akhil Kondabathini | All Rights
          Reserved |
        </p>
      </div>
    </div>
  );
};

export default Footer;
