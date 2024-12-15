"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import hero from "/public/bmwx5.png";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-row relative">
      <div className="flex absolute -z-10 flex-end ml-[90px] rotating">
        <Image src={hero} alt="hero" className="object-contain max-w-lg"/>
      </div>
      <div className="hero flex-start w-2/4 ml-[744px]">
        <div className="flex-1 padding-x">
          
          <h1 className="hero__title">
            Find & rent a car—quick and super easy!
          </h1>

          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
