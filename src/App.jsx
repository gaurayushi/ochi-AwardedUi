import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({ 
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,  // Enables smooth scrolling
      multiplier: 1.2, // Adjusts the scroll speed
    });

    return () => {
      scroll.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div data-scroll-container className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
