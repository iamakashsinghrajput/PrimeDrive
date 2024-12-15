"use client"
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import logo from "/public/mycompanylogo.png"
import { useState } from "react";
import {CustomFilter} from '@/components'
import {Location} from '@/constants';

const Navbar = () => {

  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [tripStart, setTripStart] = useState("");
  const [tripEnd, setTripEnd] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCurrentLocationChange = (e) => {
    setCurrentLocation(e.target.value);
  };

  const handleTripStartChange = (e) => {
    setTripStart(e.target.value);
  };

  const handleTripEndChange = (e) => {
    setTripEnd(e.target.value);
  };
  const handleScroll = () => {};

  return (
    <div className='flex flex-row flex-wrap relative w-full h-40 justify-around'>
      <nav className='flex flex-wrap flex-row ml-[55px] w-[10%] h-fit'>
        <Link href='/' className='min-w-fit h-fit'>
          <div className="flex flex-row">
            <div className="mt-6 relative">
              <Image src={logo} alt="Logo" width={250} height={100} />
            </div>
            <div className="absolute mt-9 ml-16">
              <h1 className='text-3xl font-bold text-blue-900'>PrimeDrive</h1>
            </div>
            
          </div>
        </Link>
      </nav>
      
      <div className="flex flex-row flex-wrap justify-evenly items-start relative w-fit h-fit ml-[500px] mt-[30px] mb-[80px]">

        <div className="flex flex-row flex-wrap justify-evenly items-start gap-36">
          <div className="flex flex-row flex-wrap">
            <CustomButton
              title="Get the App"
              containerStyles="bg-white text-black border-[1px] rounded-full"
              handleClick={handleScroll}
            />
          </div>

          <div className="flex flex-row flex-wrap">
            <CustomButton
              title="Become the Host"
              containerStyles="bg-white text-black border-[1px] rounded-full"
              handleClick={handleScroll}
            />
          </div>

          <div className="flex flex-row flex-wrap">
            <CustomButton
              title="Login"
              containerStyles="bg-white text-black border-[1px] rounded-full"
              handleClick={handleScroll}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex relative items-center">
        <div className='flex flex-row absolute items-end justify-end ml-[1px]'>
            <div className='mr-10'>
              <label className='text-green-800 font-medium'>Location:</label>
                <div className='home__filter-container1'>
                    <CustomFilter title ="location" options={Location}/>
                </div>
            </div>

            <div className='mr-4'>
              <label className='text-green-800 font-medium'>Current Location:</label>
              <input
                type="text"
                value={currentLocation}
                onChange={handleCurrentLocationChange}
                className='bg-white border border-gray-300 rounded-md py-2 pl-4 pr-4 current-location-input'
              />
            </div>

            <div className="mr-4">
              <label className="text-green-800 font-medium">Trip Start:</label>
              <input
                type="datetime-local"
                value={tripStart}
                onChange={handleTripStartChange}
                className="bg-white border border-gray-300 rounded-md py-2 pl-4 pr-4 trip-start-input"
              />
            </div>

            <div className="mr-4">
              <label className="text-green-800 font-medium">Trip End:</label>
              <input
                type="datetime-local"
                value={tripEnd}
                onChange={handleTripEndChange}
                className="bg-white border border-gray-300 rounded-md py-2 pl-4 pr-4 trip-end-input"
              />
            </div>
            <CustomButton
              title="Search"
              containerStyles="bg-green-800 text-white rounded-full gap-80 search-button"
            />
          </div>
        </div> */}
    </div>
  )
}


export default Navbar