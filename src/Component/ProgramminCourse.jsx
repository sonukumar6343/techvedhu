import React from 'react';
import amazonLogo from "../assets/amazonLogo.png";
import Swiggy from "../assets/Swiggy.png"; 
import FlipkartLogo from "../assets/FlipkartLogo.png";

const ProgrammingCardsSection = () => {
  return (
    <div className=" py-16 px-4 relative">
      {/* Carousel container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Navigation arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        
        {/* Cards container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Python Course Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1">
            <div className="p-6">
              {/* Top section with logo and badges */}
              <div className="flex justify-between items-start mb-4">
                {/* Python Logo */}
                <div className="border border-gray-200 rounded-lg p-4 w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill="#3776AB"/>
                  </svg>
                </div>
                
                {/* Badges */}
                <div className="flex flex-col gap-2">
                  <div className="bg-yellow-400 rounded-md px-3 py-1 text-white text-xs font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Limited seats
                  </div>
                  <div className="bg-green-500 rounded-md px-3 py-1 text-white text-xs font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>
                    20% off
                  </div>
                </div>
              </div>
              
             

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
              
              {/* Course info */}
              <h2 className="font-bold text-xl mb-2">Python</h2>
              <p className="text-sm text-gray-600 mb-6">
                A powerful, user-friendly programming language widely used for web development, data science, and automation. It's known for its clear syntax and vast library support.
              </p>
              
              {/* Features */}
              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Live Classes</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">Projects</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">4 off hr/week</span>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
                  Download Brochure
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Data Science Course Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1">
            <div className="p-6">
              {/* Top section with logo and badges */}
              <div className="flex justify-between items-start mb-4">
                {/* Data Science Logo */}
                <div className="border border-gray-200 rounded-lg p-4 w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#1976D2"/>
                  </svg>
                </div>
                
                {/* Badges */}
                <div className="flex flex-col gap-2">
                  <div className="bg-yellow-400 rounded-md px-3 py-1 text-white text-xs font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Limited seats
                  </div>
                  <div className="bg-green-500 rounded-md px-3 py-1 text-white text-xs font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>
                    20% off
                  </div>
                </div>
              </div>
              
              {/* Designer info */}
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
              
              {/* Course info */}
              <h2 className="font-bold text-xl mb-2">Data Science</h2>
              <p className="text-sm text-gray-600 mb-6">
                A powerful, user-friendly programming language widely used for web development, data science, and automation. It's known for its clear syntax and vast library support.
              </p>
              
              {/* Features */}
              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Live Classes</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm">Projects</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">4 off hr/week</span>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
                  Download Brochure
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingCardsSection;