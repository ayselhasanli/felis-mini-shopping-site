import React from "react";
import "./../assets/css/user/loginOrRegister.css";
import { Checkbox } from "antd";
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

const Login = () => {
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      id="login"
      className="user font"
    >
      <div className="lr-box">
        <h1 className="bold text-center">Login Now</h1>
        <form>
          <label className=" w-100">
            Email* <br />
            <input
              placeholder="Enter your email"
              className="lr-input"
              type="email"
              name="email"
            />
          </label>
          <label className=" w-100 mt-5">
            Password* <br />
            <input
              placeholder="Enter your password"
              className="lr-input"
              type="password"
              name="password"
            />
          </label>
          <Checkbox className="mt-4">Remember me</Checkbox> <br />
          <button type="submit" className="lrBtn heading-medium">
            LOGIN
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Login;
