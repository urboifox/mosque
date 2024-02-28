import PageSwiper from "@/components/PageSwiper";
import { getSettings } from "@/utils";

export default async function Home() {
  const settingsData = getSettings();
  const [settings]: [SettingsResponse] = await Promise.all([settingsData]);
  return (
    <main>
      <PageSwiper
        home
        heading="Home"
        media={[settings.homeBanner, settings.homeBanner]}
      />
    </main>
  );
}
