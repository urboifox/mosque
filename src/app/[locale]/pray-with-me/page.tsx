import DownloadOurApp from "@/components/DownloadOurApp";
import PageSwiper from "@/components/PageSwiper";

export default function PrayWithMe() {
  return (
    <section className="bg-foreground">
      <PageSwiper heading="prayWithMe" />
      <div className="!h-screen flex items-center w-full relative z-20">
        <DownloadOurApp />
      </div>
    </section>
  );
}
