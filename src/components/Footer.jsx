import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-primary">
          <div className="row ">
            <div className="col-md-9 py-3 text-white">
              Get connected with us on social networks!
            </div>
            <div className="col-md-3 py-3 text-center text-white">

              |
              <Link to="/" title="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-light ml-3 mr-3"
                />
              </Link>
              <Link to="/" title="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-light mr-3"
                />
              </Link>
              <Link to="/" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-light mr-3"
                />
              </Link>
              <Link to="/" title="Youtube">
                <FontAwesomeIcon icon={faYoutube} className="text-light mr-3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">GHRAB-SHOP</div>
              <hr />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Products</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Mobiles
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Car & bike
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Super Market
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Travel Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Policy</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Security
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Address</div>
              <hr />
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
              <div className="h6">Customer Care</div>
              <hr />
              <IconTelephone /> +1800 100 1000
              <br />
              <IconEnvelope /> info@email.com
            </div>
          </div>
        </div>

      </footer>
    </React.Fragment>
  );
};
export default Footer;
