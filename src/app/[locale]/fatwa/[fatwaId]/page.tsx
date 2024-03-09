import OneItemContent from "@/components/ui/OneItemContent";
import { getFatwa } from "@/utils";

export default async function OneFatwa({
  params: { fatwaId, locale },
}: {
  params: { fatwaId: string; locale: string };
}) {
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
