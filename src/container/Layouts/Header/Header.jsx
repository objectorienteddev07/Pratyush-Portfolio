import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constant";
// Css
import "./Header.scss";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opcaity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 10 }} className="lg:w-[300px]">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text lg:ml-[-50px]">Pratyush Pandey</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex ">
            <p className="font-bold text-red-500 p-text">Flutter Developer</p>
            <p className="p-text">UI/UX || Graphic Designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opcaity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.pratyush} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.redux, images.flutter, images.figma].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
