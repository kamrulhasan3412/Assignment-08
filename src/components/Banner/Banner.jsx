import React from "react";
import hero from "../../assets/hero.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold opacity-90 text-[#001931] text-center mb-4">
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
          <Link
            to="https://play.google.com/store/apps?hl=en&pli=1"
            className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-4"
          >
            <img
              className="h-6 md:h-8 w-6 md:w-8 mr-1 md:mr-2"
              src={playStore}
              alt=""
            />
            Google Play
          </Link>

          <Link
            to="https://www.apple.com/app-store/"
            className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            <img
              className="h-6 md:h-8 w-6 md:w-8 mr-1 md:mr-2"
              src={appStore}
              alt=""
            />
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
