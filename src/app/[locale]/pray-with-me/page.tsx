import DownloadOurApp from "@/components/DownloadOurApp";
import PageSwiper from "@/components/PageSwiper";
import { unstable_setRequestLocale } from "next-intl/server";

export default function PrayWithMe({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <section className="bg-foreground">
      <PageSwiper heading="prayWithMe" />
      <div className="!h-screen flex items-center w-full relative z-20">
        <DownloadOurApp />
      </div>
    </section>
  );
}
