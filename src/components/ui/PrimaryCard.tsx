import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { formatDate } from "@/utils";

export default function PrimaryCard({ data }: { data: any }) {
  const t = useTranslations();
  return (
    <article className="flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden aspect-[4/3] rounded-[40px] group relative">
          <Image
            src={"/images/card-image.jpg" || data.bannerUrl}
            alt={data.title_En}
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            fill
          />
        </div>
        {/* TODO: remove slicing and translate */}
        <p className="text-sm flex [&>span]:pr-6 cursor-pointer text-gray text-xl">
          <span>{formatDate(data.createdDate)}</span>
          <span className="relative before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2  before:rounded-full before:w-[5px] before:h-[5px] before:bg-gray">
            {"Admin" || data.author}
          </span>
        </p>
        <div>
          <h2 className="font-cinzel font-bold text-lg md:text-xl capitalize text-foreground">
            {data.title_En?.slice(0, 30)}
          </h2>
          {/* <p className="text-nature-400 font-normal">
          {data.description_En?.length > 140
            ? data.description_En?.slice(0, 140) + "..."
            : data.description_En}
        </p> */}
        </div>
      </div>
      <Link
        href={"#"}
        className="pl-12 hover:before:bg-secondary before:transition-colors before:duration-200 flex text-primary relative before:content-[''] before:absolute before:absolute before:bg-primary before:h-[2px] before:rounded-full before:w-10 before:top-1/2 before:-translate-y-1/2 before:left-0 transition-colors duration-200 text-lg hover:text-secondary font-medium"
      >
        {t("readMore")}
      </Link>
    </article>
  );
}
