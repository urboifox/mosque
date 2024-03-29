import PageSwiper from "@/components/PageSwiper";
import { getContentWithCategories, getNewsTypes, getSettings } from "@/utils";
import ContentWithCategories from "@/components/ui/ContentWithCategories";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function NewsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const settingsPromise = getSettings();
  const newsTypesPromise = getNewsTypes();

  const [settings, newsTypes]: [SettingsResponse, NewsTypesResponse[]] =
    await Promise.all([settingsPromise, newsTypesPromise]);

  const content = await getContentWithCategories(
    newsTypes,
    "News",
    "NewsTypeId",
    locale
  );

  return (
    <div>
      <PageSwiper media={settings.newsBanner} heading="news" />
      <ContentWithCategories locale={locale} content={content} />
    </div>
  );
}
