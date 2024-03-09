"use client";
import CardsGrid from "@/components/ui/CardsGrid";
import FilterInputs from "@/components/ui/FilterInputs";
import useFilter from "@/hooks/useFilter";
import { useState } from "react";

export default function NewsContent({ data }: { data: NewsResponse[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const news = useFilter(activeIndex, data);

  return (
    <section className="section">
      <div className="container">
        <FilterInputs
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <CardsGrid to="news" data={news} />
      </div>
    </section>
  );
}
