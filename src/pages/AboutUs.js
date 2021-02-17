import React from "react";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  };
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <Services />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
