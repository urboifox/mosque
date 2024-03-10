import OneItemContent from "@/components/ui/OneItemContent";
import { getFatwa } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function OneFatwa({
  params: { fatwaId, locale },
}: {
  params: { fatwaId: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
  const fatwa = await getFatwa(fatwaId);

  return (
    <section>
      <OneItemContent
        path="fatwa"
        addViewLink="/Fatwa/AddView"
        locale={locale}
        data={fatwa}
      />
    </section>
  );
}

export async function generateStaticParams() {
  const res = await getFatwa();
  return res.map((e: Fatwa) => e.id);
}
