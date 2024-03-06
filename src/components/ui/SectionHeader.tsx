import { useTranslations } from "next-intl";

export default function SectionHeader({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  const t = useTranslations();
  return (
    <div className="text-center flex flex-col gap-3 my-10">
      <p className="text-primary capitalize text-xl font-medium">{t(name)}</p>
      <h2 className="font-cinzel text-xl md:text-2xl font-bold lg:text-4xl">
        {t(title)}
      </h2>
    </div>
  );
}
