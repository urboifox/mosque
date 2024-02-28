import FilterInputs from "./FilterInputs";
import PrimaryCard from "./PrimaryCard";

export default function CardsGrid({ data }: { data: any[] }) {
  return (
    <div className="container py-20 flex flex-col gap-32">
      <FilterInputs />
      <div className="grid gap-y-10 gap-5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {data.map((d, i) => (
          <PrimaryCard key={i} data={d} />
        ))}
      </div>
    </div>
  );
}
