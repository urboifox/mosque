import PageSwiper from "@/components/PageSwiper";
import selectTranslation from "@/hooks/selectTranslation";
import { unstable_setRequestLocale } from "next-intl/server";
import getEvents from "../getEvents";
import { useTranslations } from "next-intl";

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
      {!archived ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col gap-3 items-center">
            <h2 className="font-cinzel font-bold text-4xl">{title}</h2>
            <p>{description}</p>
            <div className="mt-5 text-3xl dir-dynamic text-hover font-bold uppercase">
              <span className="text-foreground">{t("upcomingIn")} </span>
              <span>{date.toDateString()}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
