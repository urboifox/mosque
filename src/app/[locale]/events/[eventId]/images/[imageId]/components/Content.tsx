"use client";

import { BASE_URL } from "@/constants";
import selectTranslation from "@/hooks/selectTranslation";
import Image from "next/image";
import { useEffect } from "react";

export default function Content({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  const { title, description } = selectTranslation(locale, data);

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_URL}/EventPhoto/AddView?id=${data.id}`, {
        method: "POST",
        body: JSON.stringify({ id: data.id }),
      });
    })();
  }, [data.id]);

  return (
    <>
      <div className="relative w-full h-screen rounded-xl overflow-hidden">
        <Image src={data.path} alt={title} fill className="object-cover" />
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold font-cinzel mb-3">{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
