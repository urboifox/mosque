"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import FatwaCard from "./FatwaCard";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function FatwasSlider({
  fatwas,
  locale,
}: {
  fatwas: FatwasResponse;
  locale: string;
}) {
  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      modules={[Autoplay]}
      breakpoints={{
        992: {
          slidesPerView: 2,
        },
      }}
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
    >
      {fatwas.slice(0, 10).map((fatwa, i) => {
        return (
          <SwiperSlide key={i}>
            <FatwaCard locale={locale} fatwa={fatwa} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
