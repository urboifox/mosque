import PageSwiper from "@/components/PageSwiper";
import OneItemContent from "@/components/ui/OneItemContent";
import { getBook } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function BookPage({
  params: { locale, bookId },
}: {
  params: { locale: string; bookId: string };
}) {
  unstable_setRequestLocale(locale);
  const book = await getBook(bookId);
  return (
    <div>
      <OneItemContent
        data={book}
        locale={locale}
        addViewLink={`/Book/AddView`}
        path="book"
      />
    </div>
  );
}
