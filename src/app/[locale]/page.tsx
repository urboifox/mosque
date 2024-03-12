import DownloadOurApp from "@/components/DownloadOurApp";
import Hero from "@/components/Hero";
import LatestFatwas from "@/components/LatestFatwas";
import MultipleCategoriesSection from "@/components/MultipleCategoriesSection/index";
import NewsSection from "@/components/NewsSection";
import PrayerTimes from "@/components/PrayerTimes";
import SupportYourMasjid from "@/components/SupportYourMasjid";
import { getArticles, getAudio, getBook, getSettings, getVideo } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const settingsPromise = getSettings();
  const articlesPromise = getArticles();
  const booksPromise = getBook();
  const audiosPromise = getAudio();
  const videosPromise = getVideo();
  // const visualsPromise = getVisuals();
  // const invitationCardsPromise = getInvitationCards();

  // fetch data in parallel instead of overflow methods
  const [settings, articles, books, audios, videos] = await Promise.all([
    settingsPromise,
    articlesPromise,
    booksPromise,
    audiosPromise,
    videosPromise,
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
          { data: audios, name: "audio" },
          { data: videos, name: "videos" },
        ]}
      />
      <LatestFatwas locale={locale} />
      <DownloadOurApp />
    </main>
  );
}
