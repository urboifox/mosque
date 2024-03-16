"use client";
import CardsGrid from "@/components/ui/CardsGrid";
import FilterInputs from "@/components/ui/FilterInputs";
import useFilter from "@/hooks/useFilter";
import { useState } from "react";

export default function Articles({ data }: { data: ArticleResponse[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const articles = useFilter(activeIndex, data);

  return (
    <>
      <FilterInputs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <CardsGrid to="articles" data={articles} />
    </>
  );
}
