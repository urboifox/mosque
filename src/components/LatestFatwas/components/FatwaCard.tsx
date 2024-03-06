import Image from "next/image";

export default function FatwaCard({
  fatwa,
  locale,
}: {
  fatwa: Fatwa;
  locale: string;
}) {
  const en = locale === "en";
  const question = en
    ? fatwa.question_En || fatwa.question_Ar
    : fatwa.question_Ar || fatwa.question_En;
  const answer = en
    ? fatwa.answer_En || fatwa.answer_Ar
    : fatwa.answer_Ar || fatwa.answer_En;

  return (
    <article className="font-cairo bg-white shadow-sm text-center relative p-[40px] rounded-[40px]">
      <Image
        src={"/images/quote.svg"}
        alt="quote icon"
        width={50}
        height={50}
        className="absolute right-5 top-5"
      />
      <div className="flex relative z-20 flex-col gap-1 items-center">
        <h3
          dangerouslySetInnerHTML={{
            __html: question,
          }}
          className="max-w-lg"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: answer.length > 100 ? answer.slice(0, 200) + "..." : answer,
          }}
          className="text-dimmed"
        />
      </div>
    </article>
  );
}
