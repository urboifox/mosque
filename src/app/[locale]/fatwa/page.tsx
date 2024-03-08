import PageSwiper from "@/components/PageSwiper";
import { getFatwa, getSettings } from "@/utils";
import Fatwas from "./components/Fatwas";

export default async function page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const fatwasData = getFatwa();
  const settingsData = getSettings();

  const [fatwas, settings]: [FatwasResponse, SettingsResponse] =
    await Promise.all([fatwasData, settingsData]);

  return (
    <div>
      <PageSwiper media={settings.fatwasBanner} heading="fatwa" />
      <section className="section">
        <div className="container">
          <Fatwas locale={locale} data={fatwas} />
        </div>
      </section>
    </div>
  );
}
