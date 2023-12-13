import React from "react";
import { Row, Col } from "reactstrap";
import { GiDandelionFlower } from "react-icons/gi";
import photo from "./../assets/img/1.jpg";
import "./../assets/css/news/news.css"

const News = () => {
  return (
    <section id="news" className="bg">
      <Row>
        <Col xl={6} lg={6} md={12} s={12} xs={12}>
          <img className="news-bg" src={photo} />
        </Col>
        <Col xl={6} lg={6} md={12} s={12} xs={12}>
          <div className="news-container d-flex align-items-center justify-center font">
            <div className="news text-center">
              <GiDandelionFlower className="icon" />
              <h1 className="heading-large ">
                NEW WEEK, NEW ARRIVALS
              </h1>
              <button onClick={() => window.location.replace("/all")} className="btn shopnow">SHOP NOW</button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default News;
