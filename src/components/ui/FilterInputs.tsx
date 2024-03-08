"use client";
import { CiSearch } from "react-icons/ci";
import MainButton from "./MainButton";
import { Dispatch, SetStateAction } from "react";

export default function FilterInputs({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  const filters = ["newest", "views", "popular", "a-z"];
  function handleSearch(e: any) {
    // TODO: implement
  }

  return (
    <div className="mx-auto my-20 flex flex-col gap-8 items-center">
      <div className="relative">
        <input
          className="min-w-[500px] px-8 bg-light-100 placeholder:text-dimmed text-foreground py-4 rounded-full"
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
              className={`rounded-full p-1 px-10 capitalize font-medium ${
                filters[activeIndex] === e && "active"
              }`}
              onClick={() => {
                setActiveIndex(i);
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
