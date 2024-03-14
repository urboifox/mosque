import PageSwiper from "@/components/PageSwiper";
import { getSettings } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const settings: SettingsResponse = await getSettings();
  return (
    <div>
      <PageSwiper heading="donate" media={settings.donateBanner} />
      <section className="section pb-0">
        <div className="container">
          <iframe
            className="max-w-[500px] min-w-[250px]  w-full mx-auto min-h-[700px]"
            src="https://donorbox.org/embed/donate-1291v?language=en"
            name="donorbox"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
