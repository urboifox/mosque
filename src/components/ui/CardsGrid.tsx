import PrimaryCard from "./PrimaryCard";

export default function CardsGrid({ to, data }: { to: string; data: any[] }) {
  return (
    <div className="container px-3 pb-20 flex flex-col gap-32">
      <div className="md:grid flex flex-col gap-y-10 gap-10 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {data.length === 0 && (
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-cinzel text-3xl font-bold">No data</h2>
          </div>
        )}
        {data.map((d, i) => (
          <PrimaryCard href={`/${to}/${d.id}`} key={i} data={d} />
        ))}
      </div>
    </div>
  );
}
