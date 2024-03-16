"use client";
import FilterInputs from "@/components/ui/FilterInputs";
import FatwaPageCard from "./FatwaPageCard";
import { useState } from "react";
import useFilter from "@/hooks/useFilter";

export default function Fatwas({
  data,
  locale,
}: {
  data: FatwasResponse;
  locale: string;
}) {
  const [activeIndex, setActiveIndedx] = useState(0);

  const fatwas = useFilter(activeIndex, data);

  return (
    <>
      <FilterInputs
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndedx}
      />
      {fatwas.length === 0 && <p className="text-center">No data</p>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
        {fatwas.map((fatwa, i) => {
          return <FatwaPageCard fatwa={fatwa} locale={locale} key={i} />;
        })}
      </div>
    </>
  );
}
