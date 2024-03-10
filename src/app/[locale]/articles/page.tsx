import PageSwiper from "@/components/PageSwiper";
import { getArticles, getSettings } from "@/utils";
import Articles from "./components/Articles";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function ArticlesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const articlesData = getArticles();
  const settingsData = getSettings();
  const [articles, settings]: [ArticleResponse[], SettingsResponse] =
    await Promise.all([articlesData, settingsData]);

  return (
    <div>
      <PageSwiper media={settings.articlesBanner} heading="articles" />
      <Articles data={articles} />
    </div>
  );
}
