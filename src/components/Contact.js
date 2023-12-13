import React from "react";
import { GiDandelionFlower } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./../assets/css/contact/contact.css"


const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container font text-center">
        <GiDandelionFlower className="icon" />
        <h1>SIGN UP FOR OUR NEWSLETTER</h1>
        <div className="input-container font">
          <input placeholder="YOUR EMAIL ADRESS" />
          <button type="submit" className="btn d-flex contact-btn">
            SUBSCRIBE
            <HiArrowNarrowRight className="mt-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
