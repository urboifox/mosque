"use client";
import { useTranslations } from "next-intl";
import selectTranslation from "@/hooks/selectTranslation";
import { FaPause, FaPlay } from "react-icons/fa6";
import { useRef, useState } from "react";
import { Link } from "@/navigation";
import MainButton from "./MainButton";
import Audio from "react-h5-audio-player";

export default function AudioCard({
  data,
  href,
  locale = "en",
}: {
  data: any;
  locale: string;
  href: string;
}) {
  const [playing, play] = useState(false);
  const ref = useRef<any>(null);
  const t = useTranslations();
  const { title, description } = selectTranslation(locale, data);
  return (
    <div className="flex overflow-hidden p-5 flex-col gap-2 rounded-md bg-light-100 shadow-md w-full">
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        <div className="gap-5 flex font-medium text-black items-center justify-between mb-2">
          <button
            onClick={() =>
              play((prev) => {
                prev ? ref.current?.pause() : ref.current?.play();
                return !prev;
              })
            }
          >
            {!playing ? <FaPlay size={20} /> : <FaPause size={20} />}
          </button>
          <audio
            onPlay={() => play(true)}
            onPause={() => play(false)}
            src={data.path}
            ref={ref}
            className="hidden"
          />
        </div>
      </div>
      <p className="text-nature-300 text-sm">{description.slice(0, 150)}</p>
      <Link className="flex w-max mt-4" href={href}>
        <MainButton className="!text-xs rounded-xl px-6 active">
          {t("more")}
        </MainButton>
      </Link>
    </div>
  );
}
