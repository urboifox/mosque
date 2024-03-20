import { unstable_setRequestLocale } from "next-intl/server";

export default function CardsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <div>page</div>;
}
