import React from 'react';
import adg  from '../assets/adgwhite.png';

const Hero = ({ image, title, subtitle }) => {
  return (
    <div className="relative h-screen">
      <img
        className="w-full h-full object-cover"
        src={adg}
        alt="Hero background"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        
      </div>
    </div>
  );
};

export default Hero;
