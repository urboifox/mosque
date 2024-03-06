import FilterInputs from "./FilterInputs";
import PrimaryCard from "./PrimaryCard";

export default function CardsGrid({ data }: { data: any[] }) {
  return (
    <div className="container pb-20 flex flex-col gap-32">
      <div className="grid gap-y-10 gap-10 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {data.map((d, i) => (
          <PrimaryCard key={i} data={d} />
        ))}
      </div>
    </div>
  );
}
