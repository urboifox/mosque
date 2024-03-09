import { getArticles } from "@/utils";
import OneItemContent from "@/components/ui/OneItemContent";

export default async function page({
  params: { locale, articleId },
}: {
  params: { locale: string; articleId: string };
}) {
  const article = await getArticles(articleId);

  return (
    <section>
      <OneItemContent path="articles" locale={locale} data={article} />
    </section>
  );
}

export async function generateStaticParams() {
  const res = await getArticles();
  return res.map((e: ArticleResponse) => e.id);
}
