import { useTranslations } from "next-intl";
import MainButton from "../ui/MainButton";
import SectionHeader from "../ui/SectionHeader";
import { Link } from "@/navigation";
import selectTranslation from "@/hooks/selectTranslation";

export default function LiveStream({
  liveStreams,
  locale,
}: {
  liveStreams: LiveStreamResponse[];
  locale: string;
}) {
  const t = useTranslations();
  const { description } = selectTranslation(locale, liveStreams[0]);
  return (
    <section className="mb-24">
      <div className="container">
        <SectionHeader title="liveStream" name="ourLiveStream" />
        <div className="my-10 flex max-w-xl mx-auto text-lg items-center gap-5 justify-center text-center flex-col">
          {liveStreams.length >= 1 ? (
            <>
              <p className="max-w-2xl">{description}</p>
              <Link href={""}>
                <MainButton className="rounded-xl">{t("watchNow")}</MainButton>
              </Link>
            </>
          ) : (
            <p>{t("notLiveStreaming")}</p>
          )}
        </div>
      </div>
    </section>
  );
}
