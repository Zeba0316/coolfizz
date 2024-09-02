"use client";
import React, { useState } from "react";
import "../css/home.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div>
      {/* Responsive Hero Section max-width : 900px  */}
      <div className="responsiveHero">
        <div>
          <img className="bg" src="./homeCanBg.png" />
          <p className="name">Cool Can</p>
          <p className="offer">Don't Miss</p>
          <p className="cost">Rs 80 only!</p>
          <img className="canBg" src="./lemon.png" />
        </div>
      </div>
      {/* Hero Section */}
      <div className="hero">
        <p className="name">Cool Can</p>
        <div className="left">
          <div>
            <p>Our Summer Sale</p>
            <p>is Still Going!</p>
          </div>
          <div>
            <img src="./leftArrow.png" />
            <motion.img
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Optional: if you want to constrain dragging within a certain area
              dragElastic={3} // Optional: adjust elasticity of the drag
              onDrag={(event, info) => {
                // Update position while dragging
                setPosition({ x: info.point.x, y: info.point.y });
              }}
              onDragEnd={() => {
                // Animate back to the original position
                setPosition({ x: 0, y: 0 });
              }}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              whileDrag={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="smallCan"
              src="./blueberry.png"
              style={{
                cursor: "pointer",
                zIndex: 3,
                position: "absolute",
              }}
            />
          </div>
        </div>
        <div className="mid">
          <div>
            <p className="offer">Don't Miss</p>
            <p className="cost">Rs 80 only!</p>
            <img className="bg" src="./homeCanBg.png" />
          </div>
          <img className="canBg" src="./lemon.png" />
        </div>
        <div className="right">
          <div>
            <div
              style={{
                flex: 1,
              }}
            ></div>
            <div style={{ flex: 1 }}>
              <p>Few Left</p>
              <p>In Stock</p>
              <p>Grab Now</p>
            </div>
          </div>
          <div>
            <img src="./leftArrow.png" />
            <motion.img
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Optional: if you want to constrain dragging within a certain area
              dragElastic={3} // Optional: adjust elasticity of the drag
              onDrag={(event, info) => {
                // Update position while dragging
                setPosition({ x: info.point.x, y: info.point.y });
              }}
              onDragEnd={() => {
                // Animate back to the original position
                setPosition({ x: 0, y: 0 });
              }}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              whileDrag={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                cursor: "pointer",
                zIndex: 3,
                position: "absolute",
              }}
              className="smallCan"
              src="./orange.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div className="home">
      <Hero />
    </div>
  );
}

export default Home;
