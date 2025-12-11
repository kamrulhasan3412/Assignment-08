import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SearchBar from "./SearchBar";

const AllApps = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");

  const filtered =
    search.length > 0
      ? data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      : data;

  return (
    <div className="py-20 bg-gray-50">
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-5xl font-bold mb-4">
          Our All Applications
        </h1>
        <p className="text-center text-xl text-[#627382] mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="pb-4">
          <SearchBar
            search={search}
            setSearch={setSearch}
            data={filtered}
          ></SearchBar>
        </div>
      </div>
    </div>
  );
};

export default AllApps;
