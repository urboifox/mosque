import PrimaryCard from "./PrimaryCard";

export default function CardsGrid({ data }: { data: any[] }) {
  return (
    <div className="container px-3 pb-20 flex flex-col gap-32">
      <div className="md:grid flex flex-col gap-y-10 gap-10 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {data.map((d, i) => (
          <PrimaryCard href={`/articles/${d.id}`} key={i} data={d} />
        ))}
      </div>
    </div>
  );
}
