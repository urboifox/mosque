import OneItemContent from "@/components/ui/OneItemContent";
import { getVideo } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function VideoId({
  params: { videoId, locale },
}: {
  params: { videoId: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
  const video = await getVideo(videoId);

  return (
    <section>
      <OneItemContent
        data={video}
        locale={locale}
        addViewLink="Video/AddView"
        path="video"
      />
    </section>
  );
}

export async function generateStaticParams() {
  const res = await getVideo();
  return res.map((n: any) => ({ videoId: n.id.toString() }));
}
