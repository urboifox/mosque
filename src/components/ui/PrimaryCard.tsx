import Image from "next/image";
import MainButton from "./MainButton";
import { useTranslations } from "next-intl";
import { FaShareSquare } from "react-icons/fa";

export default function PrimaryCard({ data }: { data: any }) {
  const t = useTranslations();
  return (
    <article className="flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4 ">
        <div className="overflow-hidden h-44 rounded-2xl group rounded-tl-[60px] relative rounded-br-[60px]">
          <Image
            src={data.bannerUrl}
            alt={data.title_En}
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            fill
          />
        </div>
        {/* TODO: remove slicing and translate */}
        <h2 className="font-medium capitalize text-nature-200">
          {data.title_En?.slice(0, 30)}
        </h2>
        <p className="text-nature-400 font-normal">
          {data.description_En?.length > 140
            ? data.description_En?.slice(0, 140) + "..."
            : data.description_En}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <MainButton className="flex items-center gap-2">
          {t("seeMore")}
          <FaShareSquare size={15} color="white" />
        </MainButton>
        <p className="text-sm cursor-pointer">{data.author}</p>
      </div>
    </article>
  );
}
