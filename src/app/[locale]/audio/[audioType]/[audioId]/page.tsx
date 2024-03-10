import OneItemContent from "@/components/ui/OneItemContent";
import { getAudio } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function AudioId({
  params: { audioId, locale },
}: {
  params: { audioId: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
  const audio = await getAudio(audioId);

  return (
    <section>
      <OneItemContent
        data={audio}
        locale={locale}
        addViewLink="Audio/AddView"
        path="audio"
      />
    </section>
  );
}

export async function generateStaticParams() {
  const res = await getAudio();
  return res.map((n: any) => ({ audioId: n.id.toString() }));
}
