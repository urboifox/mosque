import OneItemContent from "@/components/ui/OneItemContent";
import { getNews } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function OneNewsPage({
  params: { newsId, locale },
}: {
  params: { newsId: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
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

export async function generateStaticParams() {
  const res = await getNews();
  return res.map((n: any) => ({ newsId: n.id.toString() }));
}
