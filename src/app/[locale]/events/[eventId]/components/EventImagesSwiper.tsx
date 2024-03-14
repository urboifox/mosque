"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import selectTranslation from "@/hooks/selectTranslation";
import PrimaryCard from "@/components/ui/PrimaryCard";
import { Link } from "@/navigation";

export default function EventImagesSwiper({
  locale,
  data,
  contentType,
}: {
  locale: string;
  data: any[];
  contentType: "images" | "videos" | "audios";
}) {
  const { title } = selectTranslation(locale, data);
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          767: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
      >
        {data.map((e, i) => {
          const href =
            contentType === "images"
              ? `images/${e.id}`
              : contentType === "videos"
              ? `videos/${e.id}`
              : `audios/${e.id}`;
          return (
            <SwiperSlide key={i}>
              <Link
                href={href}
                className="w-full h-full relative overflow-hidden rounded-md aspect-video"
              >
                {contentType === "images" ? (
                  <>
                    <Image
                      src={e.path}
                      alt={title}
                      fill
                      className="object-cover -z-10"
                    />
                  </>
                ) : contentType === "videos" ? (
                  <>
                    <video
                      src={e.path}
                      controls
                      className="absolute w-full h-full"
                    ></video>
                  </>
                ) : (
                  <>
                    <PrimaryCard data={e} locale={locale} href={href} />
                  </>
                )}
                {/* <dViv className="absolute w-full opacity-0 hover:opacity-100 transition-opacity duration-300 text-white gap-3 flex items-center justify-center flex-col text-center px-3 bg-foreground/50 h-full top-0 left-0 z-10">
                  <h3 className="font-medium text-lg text-white">{title}</h3>
                  <p className="text-sm text-light-200">{description}</p>
                </dViv> */}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
