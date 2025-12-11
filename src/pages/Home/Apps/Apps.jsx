import React, { Suspense } from "react";
import App from "../App/App";
import { Link } from "react-router";

const Apps = ({ data }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-5xl font-bold mb-4">Trending Apps</h1>
        <p className="text-center text-xl text-[#627382] mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <Suspense fallback={<span>Loading....</span>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((app) => (
              <App key={app.id} app={app}></App>
            ))}
          </div>
        </Suspense>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="/apps"
          className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white max-w-36"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Apps;
