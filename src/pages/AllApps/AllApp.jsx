import React from "react";
import { Download, Star } from "lucide-react";

const AllApp = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;

  return (
    <div className="w-full bg-white rounded shadow-sm p-4 hover:shadow-md">
      {" "}
      <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h2 className="my-4 text-xl font-medium text-[#001931]">{title}</h2>
      <div className="flex items-center justify-between mt-2 text-xs">
        <div className="flex items-center gap-1 text-[#00D390] font-medium bg-gray-100 px-2 py-1 rounded">
          <Download size={14} />
          <span>{downloads}M</span>
        </div>

        <div className="flex items-center gap-1 text-orange-500 font-medium bg-orange-100 px-2 py-1 rounded">
          <Star size={14} />
          <span>{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default AllApp;
