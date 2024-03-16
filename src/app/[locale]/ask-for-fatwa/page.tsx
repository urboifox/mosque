import PageSwiper from "@/components/PageSwiper";
import { getSettings } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import AskForm from "./components/AskForm";

export default async function AskForFatwa({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const settings: SettingsResponse = await getSettings();
  return (
    <div>
      <PageSwiper media={settings.askFatwaBanner} heading="ask-for-fatwa" />
      <section className="section">
        <div className="container">
          <AskForm />
        </div>
      </section>
    </div>
  );
}
