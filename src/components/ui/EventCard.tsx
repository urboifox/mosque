import Image from "next/image";
import MainButton from "./MainButton";
import { useTranslations } from "next-intl";
import { FaShareSquare } from "react-icons/fa";

export default function EventCard({ data }: { data: any }) {
  const t = useTranslations();
  return (
    <article className="flex bg-nature-800 shadow-md flex-col rounded-[10px] rounded-tr-[170px] gap-4 justify-between">
      <div className="flex flex-1 flex-col gap-4 ">
        <div className="overflow-hidden h-44 rounded-2xl rounded-tr-[170px] group relative">
          <Image
            src={data?.bannerUrl || ""}
            alt={data?.title_En || ""}
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            fill
          />
        </div>
        {/* TODO: remove slicing and translate */}
        <div className="flex flex-col gap-5 justify-between flex-1 p-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-2 justify-between">
              <h2 className="font-medium capitalize text-nature-200">
                {data?.title_En?.slice(0, 30) || "name of salat"}
              </h2>
              <span className="min-w-max text-orange-200 text-sm">
                {data?.date || "2024 / 1 / 21"}
              </span>
            </div>
            <p className="text-nature-400 text-sm font-normal">
              {data?.description_En?.length > 140
                ? data?.description_En?.slice(0, 140) + "..."
                : data?.description_En ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <MainButton className="from-orange-200 to-orange-200 flex items-center gap-2">
              {t("seeMore")}
              <FaShareSquare size={15} color="white" />
            </MainButton>
          </div>
        </div>
      </div>
    </article>
  );
}
