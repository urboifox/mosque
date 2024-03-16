import PageSwiper from "@/components/PageSwiper";
import { getFatwa, getSettings } from "@/utils";
import Fatwas from "./components/Fatwas";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function page({
  params: { locale, privateFileId },
}: {
  params: { locale: string; privateFileId: string };
}) {
  unstable_setRequestLocale(locale);
  const fatwasData = getFatwa();
  const settingsData = getSettings();

  const [fatwas, settings]: [FatwasResponse, SettingsResponse] =
    await Promise.all([fatwasData, settingsData]);

  return (
    <div>
      <PageSwiper media={settings.fatwasBanner} heading="fatwa" />
      <section className="section">
        <div className="container">
          <Fatwas
            locale={locale}
            data={fatwas.filter((e) => e.privateFileId === +privateFileId)}
          />
        </div>
      </section>
    </div>
  );
}
