import PageSwiper from "@/components/PageSwiper";
import MainButton from "@/components/ui/MainButton";
import selectTranslation from "@/hooks/selectTranslation";
import { Link } from "@/navigation";
import { getLiveStream } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { title } from "process";

export default async function LiveStreams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const liveStreams: LiveStreamResponse[] = await getLiveStream();

  return (
    <section>
      <PageSwiper heading="liveStreams" />
      <section className="section">
        <div className="container">
          {liveStreams.length >= 1 ? (
            <>
              {liveStreams.map((stream, i) => {
                return (
                  <LiveStreamCard locale={locale} key={i} stream={stream} />
                );
              })}
            </>
          ) : (
            <NotStreaming />
          )}
        </div>
      </section>
    </section>
  );
}

function LiveStreamCard({
  stream,
  locale,
}: {
  stream: LiveStreamResponse;
  locale: string;
}) {
  const t = useTranslations();
  const { title, description } = selectTranslation(locale, stream);
  return (
    <div className="flex items-center gap-5 justify-between">
      <div className="flex flex-1 flex-col gap-5">
        {stream.activeState && (
          <span className="text-red-600 font-medium">{t("liveNow")}</span>
        )}
        <h2 className="font-cinzel font-bold text-3xl">{title}</h2>
        <p>{description}</p>
        <div className="flex font-medium text-lg capitalize flex-col gap-1">
          <div>
            {t("time")}:{" "}
            <span className="text-base font-normal">{stream.time}</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="font-medium text-lg">{t("watchOn")}:</div>
            <div className="flex items-center gap-2">
              {stream.youtubeUrl && (
                <Link href={stream.youtubeUrl} target="_blank">
                  <Image
                    src={"/images/youtube.svg"}
                    alt="youtube"
                    width={40}
                    height={40}
                  />
                </Link>
              )}
              {stream.facebookUrl && (
                <Link href={stream.facebookUrl} target="_blank">
                  <Image
                    src={"/images/facebook.svg"}
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl flex-1 aspect-video">
        <iframe
          className="w-full h-full"
          src={youtubeUrlToEmbed(stream.youtubeUrl)}
        ></iframe>
      </div>
    </div>
  );
}

function NotStreaming() {
  const t = useTranslations();
  return (
    <h1 className="text-xl max-w-xl mx-auto font-cinzel font-bold text-center py-20">
      {t("notLiveStreaming")}
    </h1>
  );
}

function youtubeUrlToEmbed(url: string) {
  var pattern =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  var match = url.match(pattern);
  if (match) {
    var videoId = match[1];
    var embedUrl = "https://www.youtube.com/embed/" + videoId;
    return embedUrl;
  } else {
    return "Invalid YouTube URL";
  }
}
