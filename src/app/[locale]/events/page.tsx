import PageSwiper from "@/components/PageSwiper";
import { getSettings } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import getEvents from "./getEvents";
import { useTranslations } from "next-intl";
import PrimaryCard from "@/components/ui/PrimaryCard";

export default async function EventsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const settings: SettingsResponse = await getSettings();
  const events: EventResponse[] = await getEvents();
  console.log(events);

  const upcomingEvents = events.filter((e) => {
    return Date.parse(e.eventStartDate) > Date.now();
  });

  const activeEvents = events.filter((e) => {
    return (
      Date.parse(e.eventStartDate) < Date.now() &&
      Date.parse(e.eventEndDate) > Date.now()
    );
  });

  const archiveEvents = events.filter((e) => {
    return Date.parse(e.eventEndDate) < Date.now();
  });

  return (
    <div>
      <PageSwiper heading="events" media={settings.eventsBanner} />
      <section className="section">
        <div className="container">
          <div>
            <Header header="upcomingEvents" />
            <Events locale={locale} data={upcomingEvents} />
          </div>
          <div>
            <Header header="liveEvents" />
            <Events locale={locale} data={activeEvents} />
          </div>
          <div>
            <Header header="archiveEvents" />
            <Events locale={locale} data={archiveEvents} />
          </div>
        </div>
      </section>
    </div>
  );
}

function Header({ header }: { header: string }) {
  const t = useTranslations();
  return (
    <>
      <h1 className="my-20 font-cinzel font-bold text-4xl">{t(header)}</h1>
    </>
  );
}

function Events({ data, locale }: { data: any[]; locale: string }) {
  const t = useTranslations();
  return (
    <>
      {data.length >= 1 ? (
        data.map((e, i) => {
          return (
            <PrimaryCard
              key={i}
              data={e}
              href={`/events/${e?.id}`}
              locale={locale}
            />
          );
        })
      ) : (
        <>
          <p>{t("noEvents")}</p>
        </>
      )}
    </>
  );
}
