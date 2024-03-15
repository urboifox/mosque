"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import selectTranslation from "@/hooks/selectTranslation";
import { Link } from "@/navigation";
import AudioCard from "@/components/ui/AudioCard";
import { useTranslations } from "next-intl";

export default function EventImagesSwiper({
  locale,
  data,
  eventId,
  contentType,
}: {
  locale: string;
  data: any[];
  eventId: number;
  contentType: "images" | "videos" | "audios";
}) {
  const t = useTranslations();
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold flex items-center gap-1 text-xl capitalize">
          <span>{t("event")}</span> <span>{t(contentType)}</span>
        </h2>
        <Link
          href={`/events/${eventId}/${contentType}`}
          className="rounded-xl bg-foreground text-white px-4 py-2 flex items-center justify-center capitalize"
        >
          {t("all")}
        </Link>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          767: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
      >
        {data.map((e, i) => {
          const href =
            contentType === "images"
              ? `/events/${eventId}/images/${e.id}`
              : contentType === "videos"
              ? `/events/${eventId}/videos/${e.id}`
              : `/events/${eventId}/audios/${e.id}`;
          const { title, description } = selectTranslation(locale, e);
          return (
            <SwiperSlide key={i}>
              <div
                className={`w-full h-full relative rounded-md ${
                  contentType === "images" ? "aspect-video" : "cursor-default"
                } flex`}
              >
                {contentType === "images" ? (
                  <Image
                    src={e.path}
                    alt={title}
                    fill
                    className="object-cover -z-10"
                  />
                ) : contentType === "videos" ? (
                  <div className="flex h-full flex-col gap-2">
                    <video
                      src={e.path}
                      controls
                      className="aspect-video top-0 left-0 w-full h-full object-cover"
                    ></video>
                    <div className="w-full flex items-center justify-between">
                      <h3 className="text-lg font-medium">{title}</h3>
                      <Link href={href}>
                        <button className="px-4 py-2 rounded-xl flex items-center justify-center bg-foreground text-white">
                          {t("more")}
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <AudioCard href={href} locale={locale} data={e} />
                  </>
                )}
                {contentType === "images" && (
                  <Link
                    href={href}
                    className="absolute w-full opacity-0 hover:opacity-100 transition-opacity duration-300 text-white gap-3 flex items-center justify-center flex-col text-center px-3 bg-foreground/50 h-full top-0 left-0 z-10"
                  >
                    <h3 className="font-medium text-lg text-white">{title}</h3>
                    <p className="text-sm text-light-200">{description}</p>
                  </Link>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
