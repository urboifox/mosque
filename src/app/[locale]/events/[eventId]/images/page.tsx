import PageSwiper from "@/components/PageSwiper";
import PrimaryCard from "@/components/ui/PrimaryCard";
import { getEventImages } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function EventImagesPage({
  params: { locale, eventId },
}: {
  params: { locale: string; eventId: string };
}) {
  unstable_setRequestLocale(locale);
  const eventAudios: any[] = await getEventImages(eventId);
  return (
    <div>
      <PageSwiper heading="audios" />
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
            {eventAudios.map((e, i) => {
              return (
                <PrimaryCard
                  key={i}
                  data={e}
                  locale={locale}
                  href={`/events/${eventId}/images/${e.id}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
