


import React from 'react'
import Button from './Button'

import { FaClock } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import Group46 from "../assets/Group 46(1).png"; // Fixed path
import amazonLogo from "../assets/amazonLogo.png";
import Swiggy from "../assets/Swiggy.png"; 
import FlipkartLogo from "../assets/FlipkartLogo.png"; 

const CourseCard = () => {
  return (
    <div className="max-w-lg bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
{/* 
     

      {/* Top Section: Course Image + Badges */}
<div className="flex justify-between items-start p-5 bg-white border-b border-gray-200">

{/* Python Logo Container */}
<div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
  <img src={Group46} alt="Python" className="w-20 h-20" />
</div>

{/* Labels Section */}
<div className="flex flex-col gap-2">
  <div className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md">
    <span className="text-lg">📊</span> Limited seats
  </div>
  <div className="flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md">
    <span className="text-lg">⚙️</span> 20% off
  </div>
</div>
</div>


      {/* Designed by Experts */}
      <div className="mt-5 mx-3 bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-md inline-block border border-blue-400">
        <span className="font-semibold italic">Designed by experts from</span>

        {/* Logo Section */}
        <div className="flex items-center mt-2">
          <div className="relative flex">
            {/* Amazon Logo */}
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white z-30">
              <img src={amazonLogo} alt="Amazon" className="w-6 object-contain" />
            </div>

            {/* Swiggy Logo (Overlapping) */}
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white absolute left-8 z-20">
              <img src={Swiggy} alt="Swiggy" className="w-6 object-contain" />
            </div>

            {/* Flipkart Logo (Overlapping More) */}
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white absolute left-16 z-10">
              <img src={FlipkartLogo} alt="Flipkart" className="w-6 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="p-6">
        {/* Course Title */}
        <h2 className="text-xl font-bold mb-2">Python</h2>
        {/* Course Description */}
        <p className="text-gray-600 text-sm mb-4">
          A powerful, user-friendly programming language widely used for web
          development, data science, and automation. It’s known for its clear
          syntax and vast library support.
        </p>

        {/* Features */}
        <div className="flex items-center gap-5 text-sm text-gray-800 font-medium">
          <div className="flex items-center gap-1">
            <MdLiveTv className="text-blue-500" />
            Live Classes
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineDocumentText className="text-blue-500" />
            Projects
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-blue-500" />
            4 hr/week
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-between mt-6 gap-5">
          <Button active={false} text={"Download Brochure"} />
          <Button active={true} text={"Learn More"} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

