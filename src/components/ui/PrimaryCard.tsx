import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { cn, formatDate } from "@/utils";

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

  const en = locale === "en";

  const title = en
    ? data.title_En || data.title_Ar
    : data.title_Ar || data.title_En;
  const description = en
    ? data.description_En || data.description_Ar
    : data.description_Ar || data.description_En;

  return (
    <article className="max-w-screen flex flex-col h-full w-full gap-2 justify-between">
      <div className={cn("flex flex-col gap-4", className)}>
        <div className="overflow-hidden min-w-60 aspect-[4/3] rounded-[40px] group relative">
          <Image
            src={
              "/images/card-image.jpg" ||
              data.bannerUrl ||
              "/images/card-image.jpg"
            }
            alt={title}
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            fill
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm flex [&>span]:pr-6 cursor-pointer text-gray text-xl">
            <span>{data.createdDate ? formatDate(data.createdDate) : ""}</span>
            <span className="relative before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2  before:rounded-full before:w-[5px] before:h-[5px] before:bg-gray">
              {data.author || "Admin"}
            </span>
          </p>
          <div>
            <h2 className="font-cinzel font-bold text-lg md:text-xl capitalize text-foreground">
              {title}
            </h2>
            <p className="text-dimmed font-normal">
              {description?.length > 140
                ? description?.slice(0, 140) + "..."
                : description || "Some description for the card"}
            </p>
          </div>
          <Link
            href={href}
            className="pl-12 hover:before:bg-secondary before:transition-colors before:duration-200 flex text-primary relative before:content-[''] before:absolute before:absolute before:bg-primary before:h-[2px] before:rounded-full before:w-10 before:top-1/2 before:-translate-y-1/2 before:left-0 transition-colors duration-200 text-lg hover:text-secondary font-medium"
          >
            {t("readMore")}
          </Link>
        </div>
      </div>
    </article>
  );
}
