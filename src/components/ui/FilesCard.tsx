import Image from "next/image";

export default function FilesCard({ data }: { data: any }) {
  return (
    <article className="relative rounded-xl border-[2px] border border-blue-300 flex flex-col gap-4 p-4">
      <Image
        fill
        src={data?.backgroundImage || "/images/logo.png"}
        alt={data?.title}
        className="opacity-30 -z-10"
      />
      <h3 className="uppercase text-lg font-medium">
        {data?.title || "elhaj 1231"}
      </h3>
      <p className="text-sm">
        {data?.description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
      </p>
    </article>
  );
}
