import { getEventVideos } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import Content from "./components/Content";

export default async function EventVideoPage({
  params: { locale, videoId, eventId },
}: {
  params: { locale: string; videoId: string; eventId: string };
}) {
  unstable_setRequestLocale(locale);
  const image = await getEventVideos(eventId, videoId);
  return (
    <section className="section">
      <div className="container">
        <Content locale={locale} data={image} />
      </div>
    </section>
  );
}
