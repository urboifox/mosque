import { unstable_setRequestLocale } from "next-intl/server";
import getPrivateFiles from "../getPrivateFiles";
import PageSwiper from "@/components/PageSwiper";
import selectTranslation from "@/hooks/selectTranslation";
import { Fragment } from "react";
import Image from "next/image";
import { Link } from "@/navigation";

export default async function PrivateFile({
  params: { locale, privateFileId },
}: {
  params: { locale: string; privateFileId: string };
}) {
  unstable_setRequestLocale(locale);
  const file: any = await getPrivateFiles(privateFileId);
  const { title, description } = selectTranslation(locale, file);

  const arr = Object.keys(file).filter((e) => e.startsWith("bannerUrl"));
  const banners = arr.map((e) => {
    const number = e.split("l")[1];
    return { banner: `bannerUrl${number}`, link: `bannerGo_${number}` };
  });

  return (
    <div>
      <PageSwiper
        path="private files"
        heading={title}
        media={file.mainBanner}
      />
      <section className="section">
        <div className="container">
          <p className="my-20 max-w-lg text-center mx-auto">{description}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
            {banners.map((e, i) => {
              return (
                <Fragment key={i}>
                  <Link
                    href={`${file[e.link] || "/private-files"}`}
                    target="_blank"
                    className="shadow-md relative h-40 rounded-lg flex items-center justify-center overflow-x-hidden"
                  >
                    <Image
                      src={file[e.banner]}
                      fill
                      alt={title}
                      sizes="100%"
                      className="object-cover -z-10"
                    />
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
