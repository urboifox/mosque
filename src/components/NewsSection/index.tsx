import { getNews } from "@/utils";
import SectionHeader from "../ui/SectionHeader";
import PrimaryCard from "../ui/PrimaryCard";

export default async function NewsSection() {
  const res = await getNews();
  const news: NewsResponse[] = res.slice(1, 4);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader name="news.title" title="news.description" />
        <div className="flex justify-between flex-col lg:flex-row gap-5">
          <div className="max-lg:w-full w-1/2">
            {
              <PrimaryCard
                className="max-sm:flex-col"
                href={`news/${res[0].id}`}
                data={res[0]}
                key={`news`}
              />
            }
          </div>
          <div className="flex flex-col gap-5">
            {news.map((e, i) => {
              return (
                <PrimaryCard
                  className="sm:flex-row sm:items-center"
                  href={`news/${e.id}`}
                  key={i}
                  data={e}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
