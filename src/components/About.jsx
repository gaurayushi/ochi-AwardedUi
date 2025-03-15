import React from "react";
import { motion } from "framer-motion";
import image01 from "../assets/image01.avif"; 

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      viewport={{ once: true }} 
      className="w-full bg-[#CDEA68] text-black p-20 rounded-tl-3xl rounded-tr-3xl"
    >
      {/* Main Heading Section */}
      <motion.h1 
        className="font-neue text-[3.5vw] leading-[4vw] max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ochi is a strategic presentation agency for forward-thinking businesses that need to{" "}
        <motion.span className="underline" whileHover={{ color: "#333", scale: 1.05 }}>
          raise funds
        </motion.span>,{" "}
        <motion.span className="underline" whileHover={{ color: "#333", scale: 1.05 }}>
          sell products
        </motion.span>,{" "}
        <motion.span className="underline" whileHover={{ color: "#333", scale: 1.05 }}>
          explain complex ideas
        </motion.span>, and{" "}
        <motion.span className="underline" whileHover={{ color: "#333", scale: 1.05 }}>
          hire great people
        </motion.span>.
      </motion.h1>

      {/* Bottom Section */}
      <motion.div 
        className="border-t-[1px] border-black mt-14 pt-8 grid grid-cols-2 text-[1.2vw] leading-[1.8vw]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="font-medium">What you can expect:</p>
        <p className="max-w-[30vw] text-left">
          We partner with the companies and startups who make the world go round — they drive the net-zero economy, 
          revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
        </p>
      </motion.div>

      {/* Approach Section */}
      <motion.div 
        className="w-full flex gap-5 border-t-[1px] pt-16 mt-20 border-[#a1b562] flex justify-between items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-1/2">
          <motion.h1 
            className="text-[5vw] leading-tight font-neue"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Approach:
          </motion.h1>
          <motion.button 
            className="px-8 py-4 bg-zinc-900 text-white rounded-full flex items-center gap-3 mt-6"
            whileHover={{ scale: 1.05, backgroundColor: "#000" }}
            transition={{ duration: 0.3 }}
          >
            Read More <span className="w-3 h-3 bg-white rounded-full"></span>
          </motion.button>
        </div>
       
        {/* Right Image Section */}
        <motion.div 
          className="w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={image01} 
            alt="Our Approach"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
