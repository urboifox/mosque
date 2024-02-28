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
      <Link href={`/${otherLang}${pathname.slice(3)}`} className="capitalize">
        {t("lang")}
      </Link>
      <Link href={`${currentLang}/donate`}>
        <MainButton className="capitalize">Donate</MainButton>
      </Link>
    </>
  );
}
