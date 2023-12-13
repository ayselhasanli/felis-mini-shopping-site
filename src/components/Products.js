import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import firstProduct from "../assets/img/products-1.jpg";
import secondProduct from "../assets/img/products-2.jpg";
import "./../assets/css/product/products-home.css"

const links = [
  { id: 1, path: "/jewelry", title: "JEWELRY" },
  { id: 2, path: "/shoes", title: "SHOES" },
  { id: 3, path: "/bags", title: "HANDBAGS" },
  { id: 4, path: "/sweaters", title: "SWEATERS" },
  { id: 5, path: "/eyewears", title: "EYEWEARS" },
  { id: 6, path: "/shirts", title: "SHIRTS" },
];

const ProductsHome = () => {
  return (
    <section id="products-home">
      <div className="products-container font">
        <Row>
          <Col xl={4} lg={4} md={12} s={12} xs={12}>
            <div className="card-container">
              <img className="product-image" src={firstProduct} />
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} s={12} xs={12}>
            <div className="card-container font text-card">
              <ul className="text-center list-unstyled ul-nav">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link className="link" to={link.path}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} s={12} xs={12}>
            <div className="card-container ">
              <img className="product-image" src={secondProduct} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProductsHome;
