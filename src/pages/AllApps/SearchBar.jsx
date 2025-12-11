import React, { Suspense } from "react";
import AllApp from "./AllApp";

const SearchBar = ({ data, search, setSearch }) => {
  const length = data.length;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-[#001931]">
          ({length}) Apps Found
        </h2>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-70 lg:w-100 text-[#627382] px-4 py-3 border border-[#d2d2d2] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>

      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.length === 0 ? (
            <p className="text-[#632EE3] font-semibold text-7xl flex justify-center items-center col-span-4 h-[30vh]">
              No Apps Found
            </p>
          ) : (
            data.map((item) => <AllApp key={item.id} app={item}></AllApp>)
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default SearchBar;
