import { getEventImages } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import Content from "./components/Content";

export default async function EventImagePage({
  params: { locale, imageId, eventId },
}: {
  params: { locale: string; imageId: string; eventId: string };
}) {
  unstable_setRequestLocale(locale);
  const image = await getEventImages(eventId, imageId);
  return (
    <section className="section">
      <div className="container">
        <Content locale={locale} data={image} />
      </div>
    </section>
  );
}
