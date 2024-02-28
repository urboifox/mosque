import Image from "next/image";
import MainButton from "./MainButton";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function AudioCard({ data }: { data: any }) {
  const t = useTranslations();
  return (
    <article className="flex bg-nature-800 p-4 flex-col gap-4 rounded-md">
      <div className="flex font-medium text-black items-center justify-between mb-2">
        <h3>{data?.title || "name of salat T"}</h3>
        <Image
          src={"/images/audio.png"}
          alt="audio icon"
          width={32}
          height={32}
        />
      </div>
      <p className="text-nature-300 text-sm">
        {data?.description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.`}
      </p>
      <Link href={`${data?.href || ""}`}>
        <MainButton>{t("listenNow")}</MainButton>
      </Link>
    </article>
  );
}
