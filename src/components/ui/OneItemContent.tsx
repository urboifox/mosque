"use client";
import { BASE_URL } from "@/constants";
import { formatDate } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDateRange, MdOutlineRemoveRedEye } from "react-icons/md";
import PageSwiper from "../PageSwiper";
import selectTranslation from "@/hooks/selectTranslation";

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
  const { title, contents, answer } = selectTranslation(locale, data);
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
  }, [data.id, addViewLink]);

  return (
    <>
      <PageSwiper className={"text-3xl"} path={path} heading={title} />
      <section className="section">
        <div className="mx-auto flex justify-center [&_>_div]:w-full flex-col lg:w-1/2 items-center">
          <div className="bg-red-500 relative h-96">
            <Image
              src={
                "/images/card-image.jpg" ||
                data.bannerUrl ||
                "/images/card-image.jpg"
              }
              alt={title}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="py-3 flex text-sm items-center gap-5 border-b text-dimmed uppercase border-light-200">
            <div className="flex items-center gap-1">
              <CiEdit size={20} />
              <div>
                <p>
                  {t("by")}
                  {": "}
                  {data.author || "Admin"}
                </p>
              </div>
            </div>
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
          </div>
          <div>
            <h2 className="font-cinzel font-bold text-xl my-5 flex flex-col gap-5 text-dark-100">
              {title}
            </h2>
            <div
              className="text-dimmed font-cairo"
              dangerouslySetInnerHTML={{ __html: contents || answer }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
