import PageSwiper from "@/components/PageSwiper";
import { getArticles, getSettings } from "@/utils";
import Articles from "./components/Articles";

export default async function ArticlesPage() {
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
