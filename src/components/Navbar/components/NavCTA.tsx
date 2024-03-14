"use client";
import MainButton from "@/components/ui/MainButton";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavCTA() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLang = pathname.slice(1, 3);
  const otherLang = currentLang === "en" ? "ar" : "en";

  return (
    <>
      <Link
        href={`/${otherLang}${pathname.slice(3)}`}
        className="capitalize hover:text-primary transition-colors duration-200 font-cairo"
      >
        {t("lang")}
      </Link>
      <Link href={`/donate`}>
        <MainButton className="capitalize px-6 py-[.4rem]">
          {t("donateNow")}
        </MainButton>
      </Link>
    </>
  );
}
