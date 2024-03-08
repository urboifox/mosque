"use client";
import PrimaryCard from "@/components/ui/PrimaryCard";
import { useState } from "react";
import SelectionInputs from "./components/SelectionInputs";

export default function MultipleCategoriesSection({
  data,
}: {
  data: { data: any[]; name: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <SelectionInputs
          filters={data.map((e) => e.name)}
          setActiveIndex={setActiveIndex}
          active={activeIndex}
        />
        <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {data[activeIndex].data.slice(0, 4).map((e: any, i: number) => {
            return (
              <PrimaryCard
                data={e}
                key={i}
                href={`${data[activeIndex].name}/${e.id}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
