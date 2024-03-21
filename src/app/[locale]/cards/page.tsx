import PageSwiper from "@/components/PageSwiper";
import { getCards, getSettings } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function CardsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const cards = await getCards();
  console.log(cards);
  return (
    <div>
      <PageSwiper heading="cards" />
    </div>
  );
}
