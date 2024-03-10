import PageSwiper from "@/components/PageSwiper";
import PrimaryCard from "@/components/ui/PrimaryCard";
import { getBook, getSettings } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function BooksPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const booksPromise = getBook();
  const settingsPromise = getSettings();
  const [books, settings]: [BooksResponse[], SettingsResponse] =
    await Promise.all([booksPromise, settingsPromise]);

  return (
    <div>
      <PageSwiper media={settings.booksBanner} heading="books" />
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {books.map((book) => {
              return (
                <PrimaryCard
                  key={book.id}
                  data={book}
                  locale={locale}
                  href={`/books/${book.id}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
