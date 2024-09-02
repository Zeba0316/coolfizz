"use client";
import React from "react";
import "../css/about.scss";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
      {/* upper section */}
      <div className="up">
        <div>
          <p>Live Your Life With Full</p>
          <p>Of Freshness</p>
        </div>
        <div className="bubbleContainer">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring", // Use spring for the animation
              stiffness: 200, // Higher stiffness gives a tighter spring
              damping: 5, // Lower damping makes it more bouncy
            }}
          >
            <p>Only 100</p>
            <p>Calories</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 5,
              delay: 0.3,
            }}
          >
            <p>Zero</p>
            <p>Percentage</p>
            <p>Sugar</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 5,
              delay: 0.6,
            }}
          >
            <p>Gluten Free</p>
            <p>Product</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 5,
              delay: 0.9,
            }}
          >
            <p>Lightly</p>
            <p>Carbonated</p>
          </motion.div>
        </div>
      </div>
      {/* lower section */}
      <div className="down">
        <div>
          <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}} transition={{opacity:{duration:1.5},scale:{duration:1}}}>
            <p>The benefits you will</p>
            <p>get from company</p>
            <p>
              we can our premium, organic beans for 16 hours in cold
              filteredwater to extract all things you love about coffee
            </p>
          </motion.div>
          <div>
            <div>
              <p>We always provide </p>
              <p>best offers </p>
            </div>
            <div>
              <p>Lucky Draw</p>
              <p>Contest</p>
            </div>
          </div>
        </div>
        <div>
          <p>BUY NOW</p>
          <p>WE'VE FEW STOCKS LEFT!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
