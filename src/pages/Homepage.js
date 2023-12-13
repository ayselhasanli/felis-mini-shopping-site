import React from "react";
import News from "./../components/News";
import Favorites from "./../components/Favorites";
import Products from "./../components/Products";
import About from "./../components/About";
import Contact from "./../components/Contact";
import { motion } from "framer-motion";

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

const Homepage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <News />
      <Favorites />
      <Products />
      <About />
      <Contact />
    </motion.div>
  );
};

export default Homepage;
