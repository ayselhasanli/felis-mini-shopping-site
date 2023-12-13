import React from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "reactstrap";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./../assets/css/footer/footer.css";

const socials = [
  { id: 1, link: "https://www.instagram.com/", icon: <BsInstagram /> },
  { id: 2, link: "https://www.twitter.com/", icon: <BsTwitter /> },
  { id: 3, link: "https://www.facebook.com/", icon: <BsFacebook /> },
];

const lists = [
  { id: 1, path: "/#about", title: "ABOUT US" },
  { id: 2, path: "/#contact", title: "CONTACT US" },
  { id: 3, path: "/faqs", title: "FAQs" },
];

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 769px)" });
  return (
    <section id="footer" className="bg">
      <div className="footer-container font">
        <Row>
          <Col xl={6} lg={6} md={6} s={12} xs={12}>
            <div className="logo">
              <h1 className="bold">
                <Link
                  className="link pointer"
                  to="/"
                  onClick={() => window.location.replace("/#news")}
                >
                  FELIS
                </Link>
              </h1>
              <div className="socials ">
                {socials.map((social) => (
                  <a className="black" target="blank" href={social.link}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} s={12} xs={12}>
            <div className={isTabletOrMobile ? "foo-list d-none" : "foo-list"}>
              <ul className="list-unstyled text-end mt-3">
                {lists.map((list) => (
                  <li
                    className="pointer"
                    onClick={() => window.location.replace(list.path)}
                  >
                    {list.title}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
