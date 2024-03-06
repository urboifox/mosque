import PageSwiper from "@/components/PageSwiper";
import { getFatwa, getSettings } from "@/utils";
import FatwaPageCard from "./components/FatwaPageCard";
import FilterInputs from "@/components/ui/FilterInputs";

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
          <FilterInputs />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
            {fatwas.map((fatwa, i) => {
              return <FatwaPageCard fatwa={fatwa} locale={locale} key={i} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
