"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { cn, formatDate } from "@/utils";
import selectTranslation from "@/hooks/selectTranslation";
import { FaPause, FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";
import { FaBook } from "react-icons/fa6";

export default function PrimaryCard({
  data,
  locale = "en",
  href = "#",
  className,
}: {
  data: any;
  locale?: string;
  href?: string;
  className?: string;
}) {
  const t = useTranslations();
  const [isPlaying, playing] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const { title, description, series, mediaType } = selectTranslation(
    locale,
    data
  );

  return (
    <article className="max-w-[600px] flex flex-col h-full w-full gap-2 justify-between">
      <div className={cn("flex flex-col gap-4", className)}>
        <div className="overflow-hidden min-w-60 aspect-[4/3] rounded-[40px] group relative">
          <Image
            src={data.bannerUrl || "/images/card-image.jpg"}
            alt={title}
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            fill
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex [&>span]:pr-6 cursor-pointer text-gray">
            <span>{data?.createdDate ? formatDate(data.createdDate) : ""}</span>
            {data?.author ||
              (series && (
                <span className="relative before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2  before:rounded-full before:w-[5px] before:h-[5px] before:bg-gray">
                  {data.author || series}
                </span>
              ))}
          </p>
          <div className="flex justify-between">
            <div>
              <h2 className="font-cinzel font-bold text-lg md:text-xl capitalize text-foreground">
                {title}
              </h2>
              <p className="text-dimmed font-normal">
                {description?.length > 140
                  ? description?.slice(0, 140) + "..."
                  : description}
              </p>
            </div>
            {!mediaType && data?.path && (
              <Link href={data.path} target="_blank">
                <FaBook size={15} />
              </Link>
            )}
            {mediaType && (
              <>
                {data.path.endsWith(".mp3") && (
                  <>
                    <div>
                      <button
                        onClick={() =>
                          isPlaying
                            ? audio.current?.pause()
                            : audio.current?.play()
                        }
                      >
                        {isPlaying ? (
                          <FaPause size={15} />
                        ) : (
                          <FaPlay size={15} />
                        )}
                      </button>
                      <audio
                        ref={audio}
                        onPlay={() => playing(true)}
                        onPause={() => playing(false)}
                        src={data.path}
                        controls
                        className="hidden"
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <Link
            href={href}
            className="pl-12 hover:before:bg-secondary before:transition-colors before:duration-200 flex text-primary relative before:content-[''] before:absolute before:bg-primary before:h-[2px] before:rounded-full before:w-10 before:top-1/2 before:-translate-y-1/2 before:left-0 transition-colors duration-200 text-lg hover:text-secondary font-medium"
          >
            {t("more")}
          </Link>
        </div>
      </div>
    </article>
  );
}
