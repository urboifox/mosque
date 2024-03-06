import Hero from "@/components/Hero";
import LatestFatwas from "@/components/LatestFatwas";
import PrayerTimes from "@/components/PrayerTimes";
import SupportYourMasjid from "@/components/SupportYourMasjid";
// import { getSettings } from "@/utils";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // const settingsData = getSettings();
  // const [settings]: [SettingsResponse] = await Promise.all([settingsData]);
  return (
    <main>
      <Hero />
      <PrayerTimes />
      <LatestFatwas locale={locale} />
      <SupportYourMasjid />
    </main>
  );
}
