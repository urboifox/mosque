import PageSwiper from "@/components/PageSwiper";
import { getCards } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import getPrivateFiles from "../../getPrivateFiles";
import selectTranslation from "@/hooks/selectTranslation";
import NoContent from "@/components/ui/NoContent";
import PrimaryCard from "@/components/ui/PrimaryCard";

export default async function CardsPage({
  params: { locale, privateFileId },
}: {
  params: { locale: string; privateFileId: string };
}) {
  unstable_setRequestLocale(locale);
  const cards: CardResponse[] = await getCards(undefined, `${privateFileId}`);
  const pFile = await getPrivateFiles(privateFileId);

  const { title } = selectTranslation(locale, pFile);

  return (
    <div>
      <PageSwiper heading="cards" path={title} />
      <section className="section">
        <div className="container">
          {cards.length >= 1 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
              {cards.map((card, i: number) => {
                return (
                  <PrimaryCard
                    data={card}
                    href={`/private-files/${privateFileId}`}
                    locale={locale}
                    key={i}
                  />
                );
              })}
            </div>
          ) : (
            <>
              <NoContent />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
