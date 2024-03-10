import PrimaryCard from "@/components/ui/PrimaryCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { getAudio, getMediaTypes } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function AudioTypePage({
  params: { audioType, locale },
}: {
  params: { audioType: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
  const mediaTypes = await getMediaTypes();
  const currentType = mediaTypes.filter(
    (n: any) =>
      n.name_En.toLowerCase() === audioType.split("%20").join(" ").toLowerCase()
  );
  const currentTypeId = currentType[0].id;
  const audios = await getAudio(undefined, currentTypeId);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title={currentType[0][locale === "en" ? "name_En" : "name_Ar"]}
        />
        {audios.length > 0 ? (
          <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {audios.map((d: any) => {
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
  const mediaTypes = await getMediaTypes();
  return mediaTypes.map((n: any) => ({ audioType: n.name_En }));
}
