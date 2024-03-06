import Hero from "@/components/Hero";
import PrayerTimes from "@/components/PrayerTimes";
import SupportYourMasjid from "@/components/SupportYourMasjid";
import { getSettings } from "@/utils";

export default async function Home() {
  const settingsData = getSettings();
  const [settings]: [SettingsResponse] = await Promise.all([settingsData]);
  return (
    <main>
      <Hero />
      <PrayerTimes />
      <SupportYourMasjid />
    </main>
  );
}
