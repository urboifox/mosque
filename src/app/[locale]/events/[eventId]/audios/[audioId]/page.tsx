import { getEventAudios, getEventVideos } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import Content from "./components/Content";

export default async function EventVideoPage({
  params: { locale, audioId, eventId },
}: {
  params: { locale: string; audioId: string; eventId: string };
}) {
  unstable_setRequestLocale(locale);
  const image = await getEventAudios(eventId, audioId);
  return (
    <section className="section">
      <div className="container">
        <Content locale={locale} data={image} />
      </div>
    </section>
  );
}
