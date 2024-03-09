import { useTranslations } from "next-intl";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="left"></div>
        <Content />
      </div>
    </section>
  );
}

function Content() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-5">
      <p>{t("aboutUs")}</p>
      <h2>{t("aboutUsHeading")}</h2>
      <p>{t("aboutUsDescription")}</p>
      <div className="flex items-center gap-3">
        icon
        <div className="flex flex-col gap-2">
          <p>call us</p>
          <p>0128193281</p>
        </div>
      </div>
    </div>
  );
}
