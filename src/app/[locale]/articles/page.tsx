import PageSwiper from "@/components/PageSwiper";
import CardsGrid from "@/components/ui/CardsGrid";
import FilterInputs from "@/components/ui/FilterInputs";
import SectionHeader from "@/components/ui/SectionHeader";
import { getArticles, getSettings } from "@/utils";

export default async function ArticlesPage() {
  const articlesData = getArticles();
  const settingsData = getSettings();
  const [articles, settings]: [ArticleResponse[], SettingsResponse] =
    await Promise.all([articlesData, settingsData]);

  return (
    <div>
      <PageSwiper media={settings.articlesBanner} heading="articles" />
      <FilterInputs />
      <CardsGrid data={articles} />
    </div>
  );
}
