import PrimaryCard from "./PrimaryCard";
import { Link } from "@/navigation";
import MainButton from "./MainButton";
import selectTranslation from "@/hooks/selectTranslation";

export default async function ContentWithCategories({
  locale = "en",
  content,
}: {
  locale: string;
  content: { type: any; typeData: any; endpoint: string; name: string }[];
}) {
  return (
    <section className="section">
      <div className="container">
        {content.map((category) => {
          return (
            <div key={category.type.id} className="mb-40 flex flex-col gap-5">
              <div className="flex items-center justify-between dir-dynamic">
                <h2 className="font-cinzel font-bold text-3xl">
                  {category.name}
                </h2>
                <Link
                  href={`/${category.endpoint.toLowerCase()}/${category.type.name_En.toLowerCase()}`}
                >
                  <MainButton className="p-3 px-6 border-foreground rounded-lg !text-sm bg-foreground hover:bg-transparent hover:border-foreground hover:text-foreground">
                    {locale === "en" ? "View All" : "اظهار الكل"}
                  </MainButton>
                </Link>
              </div>
              <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                {category.typeData.map((d: any) => {
                  return (
                    <PrimaryCard
                      href={`/${category.endpoint.toLowerCase()}/${category.type.name_En?.toLowerCase()}/${
                        d.id
                      }`}
                      data={d}
                      key={d.id}
                      locale={locale}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
