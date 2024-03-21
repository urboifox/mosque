import { useTranslations } from "next-intl";

export default function NoContent() {
  const t = useTranslations();
  return <h2 className="font-cinzel font-bold text-3xl">{t("noContent")}</h2>;
}
