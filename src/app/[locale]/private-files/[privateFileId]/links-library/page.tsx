import PageSwiper from "@/components/PageSwiper";
import ContentWithCategories from "@/components/ui/ContentWithCategories";
import PrimaryCard from "@/components/ui/PrimaryCard";
import { BASE_URL } from "@/constants";
import selectTranslation from "@/hooks/selectTranslation";
import { getLinksLibrary } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function LinksLibrary({
  params: { locale, privateFileId },
  searchParams: { libraryId },
}: {
  params: { locale: string; privateFileId: string; libraryId: string };
  searchParams: { libraryId: string };
}) {
  unstable_setRequestLocale(locale);
  const library = await getLinksLibrary(privateFileId, libraryId);
  const { title, privateFile } = selectTranslation(locale, library);
  return (
    <div>
      <PageSwiper heading={title} path={privateFile} />
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-20">
            {library.librarySections.map((e: any, i: number) => {
              const { name } = selectTranslation(locale, e);
              return (
                <div key={i}>
                  <h3 className="mb-5 text-3xl font-bold lowercase font-cinzel">
                    {name}
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {e.libraryRecords.map((r: any, j: number) => {
                      return (
                        <div key={j}>
                          <PrimaryCard
                            data={r}
                            locale={locale}
                            href={r.linkToGo}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
