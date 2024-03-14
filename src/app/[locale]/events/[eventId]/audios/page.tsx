import PageSwiper from "@/components/PageSwiper";
import PrimaryCard from "@/components/ui/PrimaryCard";
import { getEventAudios } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function EventAudiosPage({
  params: { locale, eventId },
}: {
  params: { locale: string; eventId: string };
}) {
  unstable_setRequestLocale(locale);
  const eventAudios: any[] = await getEventAudios(eventId);
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
                  href={`/events/${eventId}/audios/${e.id}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
