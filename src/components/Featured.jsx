import React, { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import view01 from "../assets/fonts/view01.png";
import view02 from "../assets/fonts/view02.jpg";

const textVariant = {
  hidden: { y: "100%" },
  visible: (i) => ({
    y: "0%",
    transition: { delay: i * 0.07, duration: 0.6, ease: "easeOut" },
  }),
};

const Featured = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="w-full py-20 bg-[#F7F7F7] pb-40">
      {/* Header Section */}
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-[4vw] font-['Neue Montreal'] font-normal tracking-tight text-black leading-[1.2]">
          Featured projects
        </h1>
      </div>

      {/* Cards Container */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          
          {/* FYDE Card (LEFT SIDE) */}
          <motion.div
            className="cardcontainer relative w-1/2 h-[75vh]"
            onHoverStart={() => setActiveCard("VISE")}
            onHoverEnd={() => setActiveCard(null)}
          >
            {/* FYDE Text (Appears when hovered) */}
            {activeCard === "FYDE" && (
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[5vw] font-['Founders_Grotesk_X_Condensed'] tracking-tighter font-bold z-[9]"
              >
                {"FYDE".split("").map((item, index) => (
                  <motion.span key={index} variants={textVariant} className="inline-block">
                    {item}
                  </motion.span>
                ))}
              </motion.h1>
            )}

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full rounded-xl object-cover" src={view01} alt="FYDE Project" />
            </div>
          </motion.div>

          {/* VISE Card (RIGHT SIDE) */}
          <motion.div
            className="cardcontainer relative w-1/2 h-[75vh]"
            onHoverStart={() => setActiveCard("FYDE")}
            onHoverEnd={() => setActiveCard(null)}
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full rounded-xl object-cover" src={view02} alt="VISE Project" />
            </div>

            {/* VISE Text (Appears when hovered) */}
            {activeCard === "VISE" && (
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={textVariant}
                className="absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[5vw] font-['Founders_Grotesk_X_Condensed'] tracking-tighter font-bold z-[9]"
              >
                {"VISE".split("").map((item, index) => (
                  <motion.span key={index} variants={textVariant} className="inline-block">
                    {item}
                  </motion.span>
                ))}
              </motion.h1>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
