import PageSwiper from "@/components/PageSwiper";
import NoContent from "@/components/ui/NoContent";
import PrimaryCard from "@/components/ui/PrimaryCard";
import selectTranslation from "@/hooks/selectTranslation";
import { getCards } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function CardsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const cards: CardResponse[] = await getCards();
  return (
    <div>
      <PageSwiper heading="cards" />
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {cards?.length >= 1 ? (
              <>
                {cards.map((card, i: number) => {
                  const { privateFile } = selectTranslation(locale, card);
                  return (
                    <PrimaryCard
                      key={i}
                      data={card}
                      locale={locale}
                      href={`/private-files/${card.privateFileId}`}
                    />
                  );
                })}
              </>
            ) : (
              <>
                <NoContent />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
