"use client";
import { CiSearch } from "react-icons/ci";
import MainButton from "./MainButton";
import { useEffect, useState } from "react";

export default function FilterInputs() {
  const filters = ["newest", "views", "popular", "a-z"];
  const [activeFilter, setActiveFilter] = useState("newest");
  function handleSearch(e: any) {
    // TODO: implement
  }

  useEffect(() => {
    // TODO: implement
  }, [activeFilter]);

  return (
    <div className="mx-auto flex flex-col gap-8 items-center">
      <div className="relative">
        <input
          className="min-w-[500px] px-8 bg-nature-800 placeholder:text-nature-500 text-nature-200 py-4 rounded-full"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
        <CiSearch
          color="rgb(88 100 124)"
          size={24}
          className="absolute top-1/2 right-8 -translate-y-1/2"
        />
      </div>
      <div className={`flex items-center gap-5`}>
        {filters.map((e, i) => {
          return (
            <MainButton
              key={i}
              className={`rounded-full capitalize ${
                activeFilter !== e && "to-nature-600 from-nature-600"
              }`}
              onClick={() => {
                setActiveFilter(e);
              }}
            >
              {e}
            </MainButton>
          );
        })}
      </div>
    </div>
  );
}
