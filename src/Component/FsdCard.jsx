import React from 'react';

const FSDProgramCard = () => {
  return (
    <div className="bg-blue-700 text-white p-6 rounded-lg max-w-5xl mx-auto my-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Vertical divider (visible on md screens and up) */}
        <div className="hidden md:block absolute h-full w-px bg-blue-500 left-1/2 transform -translate-x-1/2"></div>
        
        {/* Left column */}
        <div className="flex flex-col space-y-6">
          {/* Gear icon */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          
          {/* Program title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Master's in Full stack Development (FSD)</h2>
            <p className="mt-2 text-sm md:text-base">
              Gain hands-on experience through real-world projects and unlock guaranteed referrals to seamlessly transition into a Full-Stack Developer role at leading product-based companies
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 text-black rounded-2xl ">
            <div className="flex items-start space-x-2 ">
              <div className="bg-blue-600 rounded-full p-1 mt-1 flex-shrink-0 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm">Accelerate your career with a Project-led MERN or Backend Specialization</p>
            </div>
            
            <div className="flex items-start space-x-2 ">
              <div className="bg-blue-600 rounded-full p-1 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm">Data Structure, Algorithm, and System Design Curriculum</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="bg-blue-600 rounded-full p-1 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm">Internship with Tech Companies</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="bg-blue-600 rounded-full p-1 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm">Assured referrals</p>
            </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="space-y-6 ">
          {/* Program details */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 flex items-center">
              <div className="mr-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Free demo section</p>
                <p className="text-gray-800 font-medium">Free</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 flex items-center">
              <div className="mr-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Duration</p>
                <p className="text-gray-800 font-medium">4-8 Months</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 flex items-center">
              <div className="mr-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Scholarships</p>
                <p className="text-gray-800 font-medium">Assured Scholarships</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 flex items-center">
              <div className="mr-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Career Services</p>
                <p className="text-gray-800 font-medium">Assured Referrals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Specialization options */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        <div className="md:col-span-2 bg-white text-gray-800 rounded-lg p-4">
          <h3 className="text-blue-700 font-bold text-lg mb-2">Full Stack Specialisation</h3>
          <p className="text-sm mb-2">7 real-world projects designed to replicate real work environments</p>
          <p className="text-sm text-gray-600">(MongoDB, Express, React, Node.js)</p>
        </div>
        
        <div className="md:col-span-1 flex items-center justify-center">
          <div className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center font-bold">OR</div>
        </div>
        
        <div className="md:col-span-2 bg-white text-gray-800 rounded-lg p-4">
          <h3 className="text-blue-700 font-bold text-lg mb-2">Backend Specialisation</h3>
          <p className="text-sm mb-2">5 real-world projects designed to replicate real work environments</p>
          <p className="text-sm text-gray-600">(Core Java and Spring Boot)</p>
        </div>
      </div>
      
      {/* CTA buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center">
          Apply Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FSDProgramCard;