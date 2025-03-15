import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div  data-scroll  data-scroll-section data-scroll-speed="1.2" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden">
      {/* Marquee Wrapper with Borders */}
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap">
        
        {/* Scrolling Motion H1 */}
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }} // ⚡ Adjusted for smooth animation
          className="text-[17vw] leading-none font-['Founders_Grotesk_X_Condensed'] uppercase pt-10 -mb-[7vw]  font-semibold  text-white"
        >
          we are ochi
        </motion.h1>

        {/* Repeating Motion H1 for Smooth Looping */}
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none font-['Founders_Grotesk_X_Condensed'] uppercase pt-10 -mb-[7vw] font-semibold text-white"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;


//-[{