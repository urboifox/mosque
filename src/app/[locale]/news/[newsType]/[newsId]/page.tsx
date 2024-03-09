import OneItemContent from "@/components/ui/OneItemContent";
import { getNews } from "@/utils";

export default async function OneNewsPage({
  params: { newsId, locale },
}: {
  params: { newsId: string; locale: string };
}) {
  const news = await getNews(newsId);
  return (
    <div>
      <OneItemContent
        path="news"
        addViewLink="/News/AddView"
        locale={locale}
        data={news}
      />
    </div>
  );
}
