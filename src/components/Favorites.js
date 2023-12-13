import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import data from "./../data/favorites.json";
import "./../assets/css/favorites/favorites.css";

const Favorites = () => {
  const [img, setImg] = useState(false);

  const change = () => {
    setImg(!img);
  };

  return (
    <section id="favorites" className="bg">
      <div className="favs-container font">
        <div className="favs-heading">
          <Row>
            <Col xl={6} lg={6} md={6} s={12} xs={12}>
              <h1 className="font">OUR FAVORITES</h1>
            </Col>
            <Col xl={6} lg={6} md={6} s={12} xs={12}>
              <div className="d-flex justify-end">
                <button
                  onClick={() => window.location.replace("/all")}
                  className="btn shopnow"
                >
                  SHOP NOW
                </button>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          {data.map((data, i) => (
            <Col xl={4} lg={4} md={6} s={12} xs={12} key={i}>
              <div
                onMouseEnter={change}
                onMouseLeave={change}
                className="card-container pointer"
              >
                <img
                  className="favs-img"
                  src={img ? `${data.photo}` : `${data.hoverPhoto}`}
                />
                <div className="desc">
                  <h3 className="bold">{data.name}</h3>
                  <h4 className="bold">{data.price}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Favorites;
