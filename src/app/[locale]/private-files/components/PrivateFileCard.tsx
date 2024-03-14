import MainButton from "@/components/ui/MainButton";
import selectTranslation from "@/hooks/selectTranslation";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PrivateFileCard({
  data,
  locale,
}: {
  locale: string;
  data: PrivateFileResponse;
}) {
  const { title, description } = selectTranslation(locale, data);
  const t = useTranslations();
  return (
    data.activeState && (
      <article className="bg-foreground/20 text-white shadow-md p-5 relative rounded-xl overflow-hidden">
        <Image
          src={data.mainBanner}
          alt="banner"
          fill
          sizes="10%"
          className="object-cover -z-10"
        />
        <div className="relative z-10">
          <h2 className="font-cinzel font-bold text-2xl">{title}</h2>
          <p className="text-dimmed text-lg mt-2">{description}</p>
          <Link href={`/private-files/${data.id}`} className="w-max mt-5 flex">
            <MainButton className="bg-transparent text-white border-white rounded-md !text-sm hover:!text-foreground hover:bg-white">
              {t("readMore")}
            </MainButton>
          </Link>
        </div>
      </article>
    )
  );
}
