"use client";
 
const ScrollingBar = () => {
  return (
    <div className="overflow-hidden sm:py-28 py-10 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <div className="relative">
         <div className="w-full sm:h-[6rem] h-10 bg-[#3f3e3e] overflow-hidden flex items-center sm:rotate-[1.5deg] rotate-2">
          <div className="flex whitespace-nowrap animate-scroll">
            <span className="text-white text-lg md:text-4xl font-bold px-6">
              Simplifying Tech To Empower Your Business Growth
            </span>
            <span className="text-white text-lg md:text-4xl font-bold px-6">
              Simplifying Tech To Empower Your Business Growth
            </span>
            <span className="text-white text-lg md:text-4xl font-bold px-6">
              Simplifying Tech To Empower Your Business Growth
            </span>
          </div>
        </div>
   
        <div className="w-full sm:h-[6rem] h-10 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 overflow-hidden absolute right-0 sm:top-16 top-5 flex items-center sm:-rotate-[2deg] -rotate-3">
          <div className="flex whitespace-nowrap animate-scroll">
            <span className="text-white text-lg md:text-4xl font-bold px-6">
              Simplifying Tech To Empower Your Business Growth
            </span>
            <span className="text-white text-lg md:text-4xl font-bold px-6">
              Simplifying Tech To Empower Your Business Growth
            </span>
            <span className="text-white text-lg md:text-4xl font-bold px-6">
              Simplifying Tech To Empower Your Business Growth
            </span>
          </div>
        </div>
   </div>
    </div>
  );
};

export default ScrollingBar;