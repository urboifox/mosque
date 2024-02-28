"use client";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
type PageSwiperProps = {
  home?: boolean;
  heading?: string;
  media?: string[] | string;
};

export default function PageSwiper({ home, heading, media }: PageSwiperProps) {
  const isArr = media instanceof Array;
  const t = useTranslations();

  return (
    <section className="h-[calc(100vh-70px)]">
      <Swiper
        navigation={isArr}
        modules={[Navigation, Autoplay]}
        loop
        autoplay
        slidesPerView={1}
        className="h-full relative"
      >
        {isArr ? (
          <>
            {media.map((image, i) => (
              <SwiperSlide
                key={i}
                className="relative flex items-center justify-center w-full h-full"
              >
                <Image
                  src={image}
                  className="object-cover absolute -z-10 top-0 left-0"
                  alt="banner"
                  fill
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            <SwiperSlide className="relative flex items-center justify-center w-full h-full">
              <Image
                src={media || ""}
                className="object-cover absolute top-0 left-0"
                alt="banner"
                fill
              />
            </SwiperSlide>
          </>
        )}
      </Swiper>
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/80 shadow-md font-semibold tracking-widest text-nature-900 rounded-lg uppercase shadow-blue-300 text-3xl py-4 px-10 border border-px border-blue-300">
        {home ? (
          <div className="flex items-center capitalize flex-col text-center">
            <p className="text-xl">
              {t("home.welcome")}{" "}
              <span className="text-blue-200">{t("home.to")}</span>
            </p>
            <h1>{t("home.cityMosquePreston")}</h1>
          </div>
        ) : (
          <>{t(`titles.${heading}`)}</>
        )}
      </div>
    </section>
  );
}
