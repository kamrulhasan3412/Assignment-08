import React from "react";

const Reviews = () => {
  return (
    <div className="bg-linear-to-l from-[#9F62F2] to-[#632EE3]">
      <div className="w-11/12 mx-auto py-20">
        <h1 className="text-5xl font-bold text-white text-center pb-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center">
          <div className="text-center">
            <p className="text-white opacity-80 mb-4">Total Downloads</p>
            <h1 className="text-6xl font-extrabold text-white">29.6M</h1>
            <p className="text-white opacity-80 mt-4 mb-8 lg:mb-0">
              21% more than last month
            </p>
          </div>
          <div className="text-center">
            <p className="text-white opacity-80 mb-4">Total Reviews</p>
            <h1 className="text-6xl font-extrabold text-white">906K</h1>
            <p className="text-white opacity-80 mt-4 mb-8 lg:mb-0">
              46% more than last month
            </p>
          </div>
          <div className="text-center">
            <p className="text-white opacity-80 mb-4">Active Apps</p>
            <h1 className="text-6xl font-extrabold text-white">132+</h1>
            <p className="text-white opacity-80 mt-4">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
