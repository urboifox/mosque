"use client";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
type PageSwiperProps = {
  heading?: string;
  media?: string[] | string;
  path?: string;
  className?: string;
};

export default function PageSwiper({
  heading,
  media,
  path,
  className,
}: PageSwiperProps) {
  const isArr = media instanceof Array;
  const t = useTranslations();

  return (
    <section className="h-96 relative">
      <Swiper
        navigation={isArr}
        modules={[Navigation, Autoplay]}
        loop={isArr}
        autoplay={isArr}
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
                  src={"/images/section-banner.jpg" || image}
                  className="object-cover absolute -z-10 top-0 left-0"
                  alt="banner"
                  fill
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            <SwiperSlide className="relative [flex items]-center justify-center w-full h-full">
              <Image
                src={"/images/section-banner.jpg" || media}
                className="object-cover absolute top-0 left-0"
                alt="banner"
                fill
              />
            </SwiperSlide>
          </>
        )}
      </Swiper>
      <div className="absolute top-0 left-0 w-full h-full bg-[#01003880] z-20"></div>
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-background font-bold font-cinzel capitalize text-2xl md:text-4xl lg:text-6xl">
        <h2 className={cn("text-center", className)}>{t(`${heading}`)}</h2>
        <ShowRoute path={path} />
      </div>
    </section>
  );
}

function ShowRoute({ path }: { path: string | undefined }) {
  const pathname = usePathname();
  const pathesArray = pathname?.split("/");
  const currentRoute = pathesArray[pathesArray.length - 1];
  return (
    <div className="capitalize text-lg font-cairo font-normal flex items-center gap-3 my-5 justify-center">
      <Link
        className="transition-colors duration-200 hover:text-primary"
        href={"/"}
      >
        Home
      </Link>
      <p className="text-primary font-medium">{"//"}</p>
      <div>{path || currentRoute.split("-").join(" ")}</div>
    </div>
  );
}
