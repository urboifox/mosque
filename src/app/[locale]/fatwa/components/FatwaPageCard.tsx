import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FatwaPageCard({
  locale,
  fatwa,
}: {
  locale: string;
  fatwa: Fatwa;
}) {
  const en = locale === "en";
  const question = en
    ? fatwa.question_En || fatwa.question_Ar
    : fatwa.question_Ar || fatwa.question_En;
  const answer = en
    ? fatwa.answer_En || fatwa.answer_Ar
    : fatwa.answer_Ar || fatwa.answer_En;

  const t = useTranslations();

  return (
    <article className="p-5 flex justify-between flex-col rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,12,55,0.1)]">
      <div>
        <h3
          className="text-base font-cairo font-medium "
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: answer.length > 100 ? answer.slice(0, 150) + "..." : answer,
          }}
          className="text-dimmed text-sm mt-2"
        />
        <Link
          className="text-sm flex text-primary mt-2 font-medium transition-colors duration-200 hover:text-secondary"
          href={`/fatwa/${fatwa.id}`}
        >
          Read More
        </Link>
      </div>
      <div className="mt-5 text-dimmed text-sm flex items-center justify-between">
        <div className="capitalize">{fatwa.answerAuthor || t("unkown")}</div>
        <div className="flex items-center gap-1">
          <span className="text-dimmed">{fatwa.views || 0}</span>
          <Image src={"/images/view.svg"} alt="view" width={20} height={20} />
        </div>
      </div>
    </article>
  );
}
