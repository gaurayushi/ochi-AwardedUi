import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

const LandingPage = () => {
  
  // Initialize Locomotive Scroll (Ensure This Runs)
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, []);

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-0.6" 
      className="w-full h-screen bg-[#F7F7F7] flex flex-col justify-between px-20 py-10"
    >
      
      {/* Heading Section */}
      <div className="textstructure mt-20 space-y-[1vw]">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker flex items-center overflow-hidden">
            
            {/* Motion div for Eye-Opening underline */}
            {index === 1 && (
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "9vw" }} 
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
                className="w-[8vw] h-[5vw] relative -top-[0.5vw] bg-red-500 mr-4"
              />
            )}

            {/* Heading Text with Fixed Sizing */}
            <h1 className="uppercase text-[5.5vw] leading-[4.8vw] font-['Founders_Grotesk_X_Condensed'] text-black font-extrabold">
              {item}
            </h1>
          </div>
        ))}
      </div>

      {/* Bottom Info Section */}
      <div className="border-t-[1px] border-gray-300 mt-20 py-6 flex justify-between items-center w-full">
        
        {/* Left Side Text */}
        <p className="text-[1vw] font-light tracking-tight text-gray-700 w-1/3">
          For public and private companies
        </p>

        {/* Centered Text */}
        <p className="text-[1vw] font-light tracking-tight text-gray-700 w-1/3 text-center">
          From the first pitch to IPO
        </p>

        {/* Start Project Button */}
        <div className="w-1/3 flex justify-end">
          <div className="px-6 py-3 border-[2px] border-black rounded-full font-light text-[1vw] capitalize text-black cursor-pointer hover:bg-black hover:text-white transition">
            Start the Project
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default LandingPage;
