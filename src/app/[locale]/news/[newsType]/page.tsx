import PrimaryCard from "@/components/ui/PrimaryCard";
import { getNews, getNewsTypes } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function NewsWithTypes({
  params: { newsType, locale },
}: {
  params: { newsType: string; locale: string };
}) {
  // fetch news types and filter them by the param
  unstable_setRequestLocale(locale);
  const newsTypes = await getNewsTypes();
  const currentType = newsTypes.filter(
    (n: any) =>
      n.name_En.toLowerCase() === newsType.split("%20").join(" ").toLowerCase()
  );

  const currentTypeId = currentType[0].id;

  const news = await getNews(undefined, currentTypeId);

  return (
    <section className="section">
      <div className="container">
        {news.length > 0 ? (
          <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {news.map((d: any) => {
              return (
                <PrimaryCard
                  href={`${currentType[0].name_En?.toLowerCase()}/${d.id}`}
                  data={d}
                  key={d.id}
                  locale={locale}
                />
              );
            })}
          </div>
        ) : (
          <>
            <div className="text-center text-2xl md:text-4xl font-bold py-40 font-cinzel">
              There are no news in this category
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const newsTypes = await getNewsTypes();
  return newsTypes.map((n: any) => ({ newsType: n.name_En }));
}
