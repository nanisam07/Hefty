import React from 'react';

export default function SoftwareOutsourcing() {
  return (
    <div className="bg-[#ec6b24] text-white flex items-center justify-center pt-15 pb-15 pl-10 pr-5">
      <div className="max-w-7xl w-full">
        <div >
          {/* Left side - Main content */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Wide Range of Crushing & Screening Solutions with Your Trusted Industry Partner 
            </h1>
            
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              Discover a complete line of crushing and screening equipment designed to meet every project requirement from jaw, cone, and impact crushers to track-mounted and integrated mobile systems. 
            </p>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              As your trusted partner in the mining and construction sectors, Hefty Industries streamlines your operations with innovative designs, expert engineering, and reliable performance. Whether you’re building, mining, or upgrading — we deliver the right solution to make it happen efficiently and cost-effectively.
            </p>
          </div>
          
          {/* Right side - Statistics */}
          <div>
            {/* Years of Excellence */}
            <div >
              <div className="text-5xl lg:text-6xl font-bold mb-2">20+</div>
              <div className="text-gray-400 text-lg">Models of crushers and screeners</div>
            </div>
            
            {/* Happy Clients */}
            <div >
              <div className="text-5xl lg:text-6xl font-bold mb-2">15+</div>
              <div className="text-gray-400 text-lg">Years of engineering expertise</div>
            </div>
            
            {/* Expert Team */}
            <div >
              <div className="text-5xl lg:text-6xl font-bold mb-2">50+</div>
              <div className="text-gray-400 text-lg">nationwide installations</div>
            </div>
            
            {/* Client Retention */}
            <div>
              <div className="text-6xl lg:text-7xl font-bold mb-2">100%</div>
              <div className="text-gray-400 text-lg">commitment to quality and safety</div>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-lg">service and technical support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
