import React from "react";
import hero from "../../assets/hero.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="pt-20 bg-gray-100">
      <div className="w-11/12 mx-auto">
        <h1 className="text-7xl font-semibold opacity-90 text-[#001931] text-center mb-4">
          We Build
          <br /> <span className="text-[#632EE3] opacity-95">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-xl text-center text-[#627382]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="text-center my-10">
          <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-4">
            <img className="h-8 w-8 mr-2" src={playStore} alt="" />
            Google Play
          </Link>

          <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            <img className="h-8 w-8 mr-2" src={appStore} alt="" />
            App Store
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
