import React from 'react';
import view07 from "../assets/fonts/view07.png"; // ✅ First Card Image
import view08 from "../assets/fonts/view08.png"; // ✅ Second Card Image
import view09 from "../assets/fonts/view09.jpg"; // ✅ Third Card Image

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-start justify-center gap-3 px-5 mt-[-50px]"> 
      
      {/* First Card */}
      <div className="cardcontainer h-[45vh] w-1/3 relative">
        <div className="card rounded-xl w-full h-full bg-[#004D43] flex flex-col items-center justify-center relative">
          <img className="w-32" src={view07} alt="ochi" />
          {/* ✅ Moved text to bottom-left corner */}
          <p className="absolute bottom-4 left-4 text-[#CDEA68] text-sm border border-[#CDEA68] px-3 py-1 rounded-full">
            @2019–2022
          </p>
        </div> 
      </div>

      {/* Second Card */}
      <div className="cardcontainer h-[45vh] w-1/3 relative">
        <div className="card rounded-xl w-full h-full bg-[#192826] flex flex-col items-center justify-center relative">
          <img className="w-24" src={view08} alt="Clutch" />
          <div className="flex mt-2">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-[#CDEA68] text-lg">★</span>
            ))}
          </div>
          {/* ✅ Moved text to bottom-left corner */}
          <p className="absolute bottom-4 left-4 text-white text-sm border border-white px-3 py-1 rounded-full">
            RATING 5.0 ON CLUTCH
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="cardcontainer h-[45vh] w-1/3 relative">
        <div className="card rounded-xl w-full h-full bg-[#192826] flex flex-col items-center justify-center relative">
          <img className="w-24" src={view09} alt="Business Bootcamp" />
          {/* ✅ Moved text to bottom-left corner */}
          <p className="absolute bottom-4 left-4 text-white text-sm border border-white px-3 py-1 rounded-full">
            BUSINESS BOOTCAMP ALUMNI
          </p>
        </div>
      </div>

    </div>
  );
};

export default Cards;
