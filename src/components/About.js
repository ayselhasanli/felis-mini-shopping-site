import React from "react";
import { Row, Col } from "reactstrap";
import photo from "../assets/img/about.jpg"
import "./../assets/css/about/about.css"

const About = () => {
  return (
    <section id="about" className="bg">
      <div className="about-container">
        <Row>
          <Col xl={6} lg={6} md={12} s={12} xs={12}>
            <div className="font heading">
              <h1>ABOUT US</h1>
            </div>
            <div className="about-desc font">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <button className="btn readmore font">READ MORE</button>
          </Col>
          <Col xl={6} lg={6} md={12} s={12} xs={12}>
            <img className="mt-3 about-img" src={photo} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
