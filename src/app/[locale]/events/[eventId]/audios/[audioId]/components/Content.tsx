"use client";

import { BASE_URL } from "@/constants";
import selectTranslation from "@/hooks/selectTranslation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Audio from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaEye } from "react-icons/fa6";

export default function Content({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  const { title, description, lecturer, event } = selectTranslation(
    locale,
    data
  );
  const t = useTranslations();
  useEffect(() => {
    (async () => {
      await fetch(`${BASE_URL}/EventAudio/AddView?id=${data.id}`, {
        method: "POST",
        body: JSON.stringify({ id: data.id }),
      });
    })();
  }, [data.id]);

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Audio src={data.path} className="w-full" autoPlay />
      </div>
      <div className="flex mt-3 items-center gap-2">
        <span className="text-gray">
          <FaEye size={15} />
        </span>
        <span>{data.views || 0}</span>
      </div>
      <div className="mt-3">
        <h2 className="text-2xl font-bold font-cinzel mb-3">{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
