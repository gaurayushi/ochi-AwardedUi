import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full px-16 py-6 flex justify-between items-center bg-[#F7F7F7] text-black font-neue fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="flex items-center text-[24px] font-black leading-none tracking-tighter">
        <span className="uppercase">ochi</span>
        <span className="text-[10px] font-black align-super ml-[2px]">’</span>
      </div>

     {/* Navigation Links */}
<div className="links flex gap-12">
  {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
    <a 
      key={index} 
      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
      className={`text-md capitalize font-light ${index === 4 ? "ml-32" : ""} hover:text-gray-500 transition`}
    >
      {item}
    </a>
  ))}
</div>

     
     
    </div>
  );
}

export default Navbar;
