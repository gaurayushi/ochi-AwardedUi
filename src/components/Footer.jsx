import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#F7F7F7] p-20 flex flex-col justify-between h-screen relative">
      
      {/* Top Section: "EYE-OPENING" (Left) and "PRESENTATIONS" (Centered) */}
      <div className="flex justify-between items-start w-full">
        
        {/* Left Side: "EYE-OPENING" */}
        <div className="flex flex-col">
          <div className="font-['Founders_Grotesk_X_Condensed'] text-[5vw] font-bold leading-[0.9] text-black">
            <h1 className="block">EYE-</h1>
            <h1 className="block">OPENING</h1>
          </div>
        </div>

        {/* Centered "PRESENTATIONS" */}
        <div className="flex flex-col items-center">
          <h1 className="text-[5vw] font-bold text-black mr-5">PRESENTATIONS</h1>

        {/* Stacking S, L, and E Sections */}
<div className="flex flex-col text-black text-[1vw] mt-6 space-y-6 text-left ml-[-40px] self-start">
  
  {/* Social Media Links (S:) */}
  <div className="flex flex-col gap-2">
    <p className="font-bold">S:</p>
    <a href="#" className="underline">Instagram</a>
    <a href="#" className="underline">Behance</a>
    <a href="#" className="underline">Facebook</a>
    <a href="#" className="underline">Linkedin</a>
  </div>

  {/* Location Information (L:) */}
  <div className="flex flex-col gap-2">
    <p className="font-bold">L:</p>
    <p className="underline">202-1965 W 4th Ave</p>
    <p>Vancouver, Canada</p>
    <p className="underline mt-2">30 Chukarina St</p>
    <p>Lviv, Ukraine</p>
  </div>

  {/* Email Section (E:) */}
  <div className="flex flex-col gap-2">
    <p className="font-bold">E:</p>
    <a href="mailto:hello@ochi.design" className="underline">hello@ochi.design</a>
  </div>
</div>
        </div>

        {/* Right Side: Menu Navigation (M:) inside Black Box */}
        <div className="  absolute right-20 mt-40  p-5 rounded-lg text-black w-[180px] p-6 rounded-l">
            <div className="flex flex-col gap-2">
              <p className="font-bold">S:</p>
              <a href="#" className="underline">Instagram</a>
              <a href="#" className="underline">Behance</a>
              <a href="#" className="underline">Facebook</a>
              <a href="#" className="underline">Linkedin</a>
            </div>
</div>
</div>
        

     {/* Footer Bottom Section */}
<div className="flex justify-between items-center text-gray-500 text-[0.9vw] mt-10 w-full ml-80">
  
  {/* Moves Text More to the Right */}
  <p className="ml-80 pr-30 text-right">
    © ochi design 2025. <a href="#" className="underline ">Legal Terms</a>
  </p>
</div>
{/* "ochi" Text Positioned at Bottom Left - Larger */}
<div className="absolute bottom-10 left-10 text-black text-4xl font-extrabold tracking-wide">
  ochi
</div>


    </div>
  );
};

export default Footer;
