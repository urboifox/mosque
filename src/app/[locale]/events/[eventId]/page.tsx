import PageSwiper from "@/components/PageSwiper";
import selectTranslation from "@/hooks/selectTranslation";
import { unstable_setRequestLocale } from "next-intl/server";
import getEvents from "../getEvents";
import { useTranslations } from "next-intl";
import EventImagesSwiper from "./components/EventImagesSwiper";

export default async function EventPage({
  params: { locale, eventId },
}: {
  params: { locale: string; eventId: string };
}) {
  unstable_setRequestLocale(locale);
  const event: EventResponse = await getEvents(eventId);
  const { title } = selectTranslation(locale, event);
  const archived = Date.parse(event.eventEndDate) < Date.now();
  return (
    <div>
      <PageSwiper path="event" media={event.banner} heading={title} />
      <section className="section">
        <div className="container">
          <Content locale={locale} archived={archived} event={event} />
        </div>
      </section>
    </div>
  );
}

function Content({
  locale,
  archived,
  event,
}: {
  locale: string;
  archived: boolean;
  event: EventResponse;
}) {
  const t = useTranslations();
  const { title, description } = selectTranslation(locale, event);
  const date = new Date(Date.parse(event.eventStartDate));
  return (
    <>
      {archived ? (
        <>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center gap-5">
                <h2 className="font-cinzel text-3xl font-bold">{title}</h2>
                <p className="text-hover font-medium text-sm">
                  {date.toDateString()}
                </p>
              </div>
              <p>{description}</p>
            </div>
            <div className="flex flex-col gap-20">
              {event.eventPhotos.length >= 1 && (
                <div>
                  <EventImagesSwiper
                    eventId={event.id}
                    contentType="images"
                    locale={locale}
                    data={event.eventPhotos}
                  />
                </div>
              )}
              {event.eventVideos.length >= 1 && (
                <div>
                  <EventImagesSwiper
                    contentType="videos"
                    locale={locale}
                    eventId={event.id}
                    data={event.eventVideos}
                  />
                </div>
              )}
              {event.eventAudios.length >= 1 && (
                <div>
                  <EventImagesSwiper
                    eventId={event.id}
                    contentType="audios"
                    locale={locale}
                    data={event.eventAudios}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-3 items-center">
            <h2 className="font-cinzel font-bold text-4xl">{title}</h2>
            <p>{description}</p>
            <div className="mt-5 flex items-center gap-5 text-3xl dir-dynamic text-hover font-semibold uppercase">
              <span className="text-foreground">{t("upcomingIn")} </span>
              <span>{date.toDateString()}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
