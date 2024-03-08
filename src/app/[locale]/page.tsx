import DownloadOurApp from "@/components/DownloadOurApp";
import Hero from "@/components/Hero";
import LatestFatwas from "@/components/LatestFatwas";
import MultipleCategoriesSection from "@/components/MultipleCategoriesSection/index";
import NewsSection from "@/components/NewsSection";
import PrayerTimes from "@/components/PrayerTimes";
import SupportYourMasjid from "@/components/SupportYourMasjid";
import { getArticles, getAudio, getBook, getSettings } from "@/utils";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const settingsPromise = getSettings();
  const articlesPromise = getArticles();
  const booksPromise = getBook();
  const audiosPromise = getAudio();
  // const visualsPromise = getVisuals();
  // const invitationCardsPromise = getInvitationCards();

  // fetch data in parallel instead of overflow methods
  const [settings, articles, books, audios] = await Promise.all([
    settingsPromise,
    articlesPromise,
    booksPromise,
    audiosPromise,
  ]);

  return (
    <main>
      <Hero settings={settings} />
      <PrayerTimes />
      <SupportYourMasjid />
      <NewsSection />
      <MultipleCategoriesSection
        data={[
          { data: articles, name: "articles" },
          { data: books, name: "books" },
          { data: audios, name: "audios" },
        ]}
      />
      <LatestFatwas locale={locale} />
      <DownloadOurApp />
    </main>
  );
}
