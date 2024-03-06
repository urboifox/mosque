import { useTranslations } from "next-intl";
import Image from "next/image";
import MainButton from "../ui/MainButton";
import { Link } from "@/navigation";

export default function SupportYourMasjid() {
  const t = useTranslations();
  return (
    <section
      className={`dir-dynamic bg-gradient-to-r from-foreground to-transparent section relative text-background`}
    >
      <Image
        src={"/images/support.jpg"}
        fill
        className="object-cover flip-dynamic h-auto w-auto -z-10"
        alt="support us"
        sizes="100%"
      />
      <div className="container ">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-6xl font-cinzel font-bold mb-5">
            {t("supportUs")}
          </h2>
          <p className="font-cairo text-light-200">
            إِنَّ ٱلْمُصَّدِّقِينَ وَٱلْمُصَّدِّقَـٰتِ وَأَقْرَضُوا۟ ٱللَّهَ
            قَرْضًا حَسَنًا يُضَـٰعَفُ لَهُمْ وَلَهُمْ أَجْرٌ كَرِيمٌ
          </p>
          <p>
            “Verily, those who give Sadaqaat (i.e. Zakaah and alms), men and
            women, and lend Allaah a goodly loan, it shall be increased manifold
            (to their credit), and theirs shall be an honourable good reward
            (i.e. Paradise)”
          </p>
          <p className="font-cairo text-primary">{t("alhadeed")}</p>
          <Link className="flex mt-5 w-fit" href={"/donate"}>
            <MainButton>{t("donateNow")}</MainButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
