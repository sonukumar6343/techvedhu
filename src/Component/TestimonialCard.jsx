import React from 'react';
import Ravina from "../assets/Ravina.png"
import Vijay from "../assets/vijay.png"

const TestimonialCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto p-4">
      {/* First card - Ratings summary */}
      <div className="border border-blue-200 rounded-lg p-6 flex-1 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-4">Ratings & Reviews by learners</h2>
        <p className="text-gray-700 mb-6">
          Skill-lync has received honest feedback from our learners around the globe.
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center">
            <img 
              src={Ravina} 
              alt="Google Reviews" 
              className="h-10"
            />
          </div>
          <div className="flex items-center mt-2">
            <span className="text-3xl font-bold mr-4">4.8</span>
            <div className="flex text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Second card - Testimonial container */}
      <div className="border border-orange-200 rounded-lg p-4 flex-2 bg-white shadow-sm relative md:w-1/2">
        {/* Carousel navigation left */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-md p-2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Ravina testimonial */}
          <div className="bg-amber-200 rounded-lg p-4 flex-1 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden">
                <img src="/api/placeholder/48/48" alt="Ravina" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-center font-semibold text-lg mb-2">Ravina</h3>
              <p className="text-sm">
                Skill lync is a place where I discovered myself as a Mechanical Engineer. It has been a wonderful journey. Had I not acquired such skills, I wouldn't have come across opportunities like this.
              </p>
            </div>
          </div>

          {/* Vijay testimonial */}
          <div className="bg-amber-200 rounded-lg p-4 flex-1 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden">
                <img src={Vijay} alt="Vijay" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-center font-semibold text-lg mb-2">Vijay</h3>
              <p className="text-sm">
                All the projects that I did in skill-lync are extremely close to the industry standards and are very useful to crack the interview as a fresher.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel navigation right */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md p-2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCards;
