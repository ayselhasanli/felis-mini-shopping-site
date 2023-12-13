import React from "react";
import { Row, Col } from "reactstrap";
import data from "./../data/jewelry.json";
import { motion } from "framer-motion";
import "./../assets/css/product/products.css"

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

const Jewelry = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <section id="products" className="bg">
        <div className="product-cards center">
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
      </section>
    </motion.div>
  );
};

export default Jewelry;
