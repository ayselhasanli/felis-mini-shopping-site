import React from "react";
import { Row, Col } from "reactstrap";
import data from "./../data/all.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./../assets/css/product/products.css";

const buttons = [
  { id: 1, category: "JEWELRY", path: "/jewelry" },
  { id: 2, category: "SHOES", path: "/shoes" },
  { id: 3, category: "BAGS", path: "/bags" },
  { id: 4, category: "SWEATERS", path: "/sweaters" },
  { id: 5, category: "EYEWEARS", path: "/eyewears" },
  { id: 6, category: "SHIRTS", path: "/shirts" },
];

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const AllProducts = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <section id="products" className="bg center">
        <div className="center">
          <div className="filter-btns mt-5">
            <Row>
              {buttons.map((button) => (
                <Col xl={2} lg={2} md={4} s={4} xs={4}>
                  <div
                    className="d-flex justify-content-center"
                    key={button.id}
                  >
                    <button className="btn font filter-btn heading-medium">
                      <Link className="black" to={button.path}>{button.category}</Link>
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="product-cards">
            <Row>
              {data.map((data) => (
                <Col xl={4} lg={4} md={6} s={12} xs={12}>
                  <div className="product-card card h-100 font">
                    <img className="product-photo" src={data.photo} />
                    <div className="card-body">
                      <h2 className="bold">{data.name}</h2>
                      <h3 className="regular">{data.price}$</h3>
                      <div className="add-product">
                        <button className="btn">Add to card</button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AllProducts;
