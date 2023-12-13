import React from "react";
import "./../assets/css/user/loginOrRegister.css";
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

const Register = () => {
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      id="register"
      className="user font"
    >
      <div className="lr-box">
        <h1 className="bold text-center">Join Us</h1>
        <form>
          <label className=" w-100">
            Name* <br />
            <input
              placeholder="Enter your name"
              className="lr-input"
              type="text"
              name="text"
            />
          </label>
          <label className=" w-100 mt-4">
            Email* <br />
            <input
              placeholder="Enter your email"
              className="lr-input"
              type="email"
              name="email"
            />
          </label>
          <label className=" w-100 mt-4">
            Password* <br />
            <input
              placeholder="Enter your password"
              className="lr-input"
              type="password"
              name="password"
            />
          </label>
          <label className=" w-100 mt-4">
            Confirm Password* <br />
            <input
              placeholder="Confirm your password"
              className="lr-input"
              type="password"
              name="password"
            />
          </label>
          <button type="submit" className="lrBtn heading-medium">
            REGISTER
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Register;
