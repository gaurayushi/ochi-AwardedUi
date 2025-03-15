import React, { useEffect, useState } from 'react';
import eyesBg from '../assets/fonts/View.jpg'; // ✅ Correct Image Path
import LocomotiveScroll from "locomotive-scroll";

const Eyes = () => {
    const [rotate, setRotate] = useState(0);


    

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="eyes w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image Wrapper */}
            <div  data-scroll data-scroll-speed="-0.5"  
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${eyesBg})` }} // ✅ Background dynamically applied
            >
                {/* Eyes Wrapper (Centered) */}
                <div className="absolute flex gap-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    
                    {/* Left Eye */}
                    <div className="relative flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
                        
                        {/* ✅ STATIC PLAY TEXT (Does Not Rotate) */}
                        <div className="absolute z-10 text-white text-[1vw] font-bold">
                            PLAY
                        </div>

                        {/* ✅ Rotating Pupil */}
                        <div 
                            className="w-[9vw] h-[9vw] flex items-center justify-center rounded-full bg-zinc-900 relative"
                            style={{ transform: `rotate(${rotate}deg)` }} // ✅ Rotate only the pupil
                        >
                            {/* ✅ Small White Dot Moves with Rotation */}
                            <div className="absolute w-[1.5vw] h-[1.5vw] bg-white rounded-full right-[10%] bottom-[10%]"></div>
                        </div>
                    </div>

                    {/* Right Eye */}
                    <div className="relative flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100">
                        
                        {/* ✅ STATIC PLAY TEXT (Does Not Rotate) */}
                        <div className="absolute z-10 text-white text-[1vw] font-bold">
                            PLAY
                        </div>

                        {/* ✅ Rotating Pupil */}
                        <div 
                            className="w-[9vw] h-[9vw] flex items-center justify-center rounded-full bg-zinc-900 relative"
                            style={{ transform: `rotate(${rotate}deg)` }} // ✅ Rotate only the pupil
                        >
                            {/* ✅ Small White Dot Moves with Rotation */}
                            <div className="absolute w-[1.5vw] h-[1.5vw] bg-white rounded-full right-[10%] bottom-[10%]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Eyes;
