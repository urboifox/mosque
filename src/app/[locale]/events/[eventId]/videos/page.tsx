import PageSwiper from "@/components/PageSwiper";
import selectTranslation from "@/hooks/selectTranslation";
import { Link } from "@/navigation";
import { getEventVideos } from "@/utils";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function EventVideosPage({
  params: { locale, eventId },
}: {
  params: { locale: string; eventId: string };
}) {
  unstable_setRequestLocale(locale);
  const eventAudios: any[] = await getEventVideos(eventId);
  return (
    <div>
      <PageSwiper heading="videos" />
      <section className="section container">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
          {eventAudios.map((e, i) => {
            const { title, description } = selectTranslation(locale, e);
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden flex flex-col gap-1 relative group"
              >
                <video src={e.path} controls className="object-cover"></video>
                <div className="flex gap-1 mt-2 items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lg">{title}</h3>
                    <p>{description?.slice(0, 140)}</p>
                  </div>
                  <Link href={`/events/${eventId}/videos/${e.id}`}>
                    <More />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function More() {
  const t = useTranslations();
  return (
    <button className="px-4 py-2 rounded-xl bg-foreground text-white">
      {t("more")}
    </button>
  );
}
