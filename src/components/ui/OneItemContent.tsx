"use client";
import { BASE_URL } from "@/constants";
import { formatDate } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import {
  MdOutlineDateRange,
  MdOutlineRemoveRedEye,
  MdPerson,
} from "react-icons/md";
import PageSwiper from "../PageSwiper";
import selectTranslation from "@/hooks/selectTranslation";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "@/navigation";
import { FaBook } from "react-icons/fa6";

export default function OneItemContent({
  locale,
  data,
  addViewLink,
  path,
}: {
  locale: string;
  data: any;
  addViewLink?: string;
  path?: string;
}) {
  const { title, contents, answer, series, description, mediaType } =
    selectTranslation(locale, data);
  const t = useTranslations();

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_URL}${addViewLink}`, {
        method: "POST",
        body: JSON.stringify({
          id: data.id,
        }),
      });
    })();
    return () => {};
  }, [data.id, addViewLink]);

  return (
    <>
      <PageSwiper className={"text-3xl"} path={path} heading={title} />
      <section className="section">
        <div className="mx-auto px-3 flex justify-center [&_>_div]:w-full flex-col lg:w-1/2 items-center">
          {data.bannerUrl && (
            <div className="relative h-96">
              <Image
                src={data.bannerUrl}
                alt={title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          )}
          <div className="py-3 flex text-sm items-center gap-5 border-b text-dimmed uppercase border-light-200">
            {mediaType ? (
              <>
                {series && (
                  <div className="flex items-center gap-1">
                    <MdPerson size={20} />
                    <div>
                      <p>
                        {t("by")}
                        {": "}
                        {series}
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {data.author && (
                  <div className="flex items-center gap-1">
                    <CiEdit size={20} />
                    <div>
                      <p>
                        {t("by")}
                        {": "}
                        {data.author}
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="flex items-center gap-1">
              <MdOutlineRemoveRedEye size={17} />
              <div>
                <p>
                  {t("views")}
                  {": "}
                  {data.views || "8"}
                </p>
              </div>
            </div>
            {!data.path && (
              <div className="flex items-center gap-1">
                <MdOutlineDateRange size={17} />
                <div>
                  <p>
                    {t("date")}
                    {": "}
                    {formatDate(data.createdDate) || "9"}
                  </p>
                </div>
              </div>
            )}
            {!mediaType && data.path && (
              <div className="flex items-center gap-1">
                <FaBook size={17} />
                <div>
                  <Link
                    href={data.path}
                    className="text-foreground"
                    target="_blank"
                  >
                    {t("read")}
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-cinzel font-bold text-xl my-5 flex flex-col gap-5 text-dark-100">
              {title}
            </h2>
            {mediaType && (
              <div className="mb-5">
                {data.path.endsWith(".mp3") ? (
                  <AudioPlayer autoPlay src={data.path} className="w-full" />
                ) : (
                  <video src={data.path} controls></video>
                )}
              </div>
            )}
            <div
              className="text-dimmed font-cairo"
              dangerouslySetInnerHTML={{
                __html: contents || answer || description,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
