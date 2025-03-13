import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4 md:px-8 relative">
      {/* Top curved border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-blue-900 before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:h-8 before:bg-white before:rounded-b-full"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {/* Column 1: Logo and description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white transform rotate-45 flex items-center justify-center">
                <div className="transform -rotate-45 text-blue-900 font-bold">Y</div>
              </div>
              <div className="ml-2 font-bold text-lg">TECH VEDHU</div>
            </div>
            <p className="text-sm">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>

          {/* Column 2: Address */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-lg">Address</h4>
            <div className="flex items-start space-x-2">
              <span className="mt-1">✉</span>
              <span className="text-sm">support@techvedhu.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="mt-1">📞</span>
              <span className="text-sm">9363603504</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="mt-1">📍</span>
              <span className="text-sm">
                Salem: 7/257c Lakshmi complex, Advatha Ashram road, Balaji Nagar, Fairlands, Salem, Tamil Nadu - 636016.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="mt-1">📍</span>
              <span className="text-sm">
                Bangalore :No 48/2, 33rd Main 2nd cross dollar scheme road btm 1st stage Bangalore - 560068.
              </span>
            </div>
          </div>

          {/* Column 3: Career Programs */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-lg">Career Programs</h4>
            <div className="text-sm space-y-2">
              <p>Internship / Certificate program</p>
              <p>Placement Guaranteed Program</p>
            </div>
            
            <h4 className="font-semibold text-lg mt-4">For Business</h4>
            <div className="text-sm space-y-2">
              <p>Hire from Tech Vedhu</p>
              <p>Tech Vedhu Onboard</p>
            </div>
          </div>

          {/* Column 4: Tech Vedhu */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-lg">Tech Vedhu</h4>
            <div className="text-sm space-y-2">
              <p>Placement Report</p>
              <p>Success Stories</p>
              <p>About</p>
              <p>Blog</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-700">
          <p className="text-sm">Copyright © 2024 Tech Vedhu. All rights reserved.</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-gray-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;