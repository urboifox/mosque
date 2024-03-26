import { unstable_setRequestLocale } from "next-intl/server";
import getPrivateFiles from "../getPrivateFiles";
import PageSwiper from "@/components/PageSwiper";
import selectTranslation from "@/hooks/selectTranslation";
import Image from "next/image";
import { Link } from "@/navigation";
import {
  getArticles,
  getAudio,
  getCards,
  getFatwa,
  getLinksLibrary,
  getVideo,
} from "@/utils";

const links = [
  {
    name: "cards",
    link: "cards",
  },
  {
    name: "articles",
    link: "articles",
  },
  {
    name: "audio",
    link: "audios",
  },
  {
    name: "fatwas",
    link: "fatwas",
  },
  {
    name: "videos",
    link: "videos",
  },
];

export default async function PrivateFile({
  params: { locale, privateFileId },
}: {
  params: { locale: string; privateFileId: string };
}) {
  unstable_setRequestLocale(locale);
  const file: any = await getPrivateFiles(privateFileId);
  const linksLibraries = await getLinksLibrary(privateFileId);

  const articlesRes = getArticles(undefined, privateFileId);
  const cardsRes = getCards(undefined, privateFileId);
  const audioRes = getAudio(undefined, undefined, privateFileId);
  const videosRes = getVideo(undefined, undefined, privateFileId);
  const fatwaRes = getFatwa(undefined, privateFileId);

  const [articles, cards, audios, videos, fatwas] = await Promise.all([
    articlesRes,
    cardsRes,
    audioRes,
    videosRes,
    fatwaRes,
  ]);

  const filteredLinks = links.filter((e) => {
    if (e.name === "cards") {
      return cards.length > 0;
    }
    if (e.name === "articles") {
      return articles.length > 0;
    }
    if (e.name === "audio") {
      return audios.length > 0;
    }
    if (e.name === "videos") {
      return videos.length > 0;
    }
    if (e.name === "fatwas") {
      return fatwas.length > 0;
    }
  });

  const { title, description } = selectTranslation(locale, file);

  const arr = Object.keys(file).filter((e) => e.startsWith("bannerUrl"));
  const banners = arr.map((e) => {
    const number = e.split("l")[1];
    return { banner: `bannerUrl${number}`, link: `bannerGo_${number}` };
  });

  const linksWithLibraries = filteredLinks.concat(
    linksLibraries.map((e: any) => {
      const { title } = selectTranslation(locale, e);
      return { name: title, link: `links-library?libraryId=${e.id}` };
    })
  );

  return (
    <div>
      <PageSwiper
        path="private files"
        heading={title}
        media={file.mainBanner}
      />
      <section className="section">
        <div className="container">
          <p className="max-w-lg text-center mx-auto">{description}</p>
          <div className="flex max-md:h-80 mb-20 gap-5 flex-col md:flex-row">
            <Link
              href={file[banners[0].link] || "/private-files"}
              className="flex-1 max-md:flex max-md:w-full h-40 rounded-lg overflow-hidden relative"
            >
              <Image
                src={file[banners[0].banner]}
                className="object-cover"
                alt={title}
                fill
                sizes="100%"
              />
            </Link>
            <Link
              href={file[banners[1].link] || "/private-files"}
              className="flex-1 max-md:flex h-40 max-md:w-full rounded-lg overflow-hidden  relative"
            >
              <Image
                src={file[banners[1].banner]}
                className="object-cover"
                alt={title}
                fill
                sizes="100%"
              />
            </Link>
          </div>
          <div className="flex flex-wrap flex-col-reverse md:flex-row items-center gap-5 justify-between">
            <div className="flex-1 flex flex-col gap-3 mt-10 max-md:w-full md:max-w-xs">
              {Array(5)
                .fill(0)
                .map((_, i) => {
                  return (
                    <Link
                      key={i}
                      href={`/private-files/${i + 1 + 2}`}
                      className="w-full flex h-32 rounded-lg overflow-hidden relative"
                    >
                      <Image
                        src={file[`bannerUrl${i + 1 + 2}`]}
                        className="object-cover"
                        alt={title}
                        fill
                        sizes="100%"
                      />
                    </Link>
                  );
                })}
            </div>
            <div className="flex flex-1 my-20 flex-col gap-4 mx-auto max-md:w-full max-w-xl">
              {linksWithLibraries.map((link, i) => {
                return (
                  <Link
                    href={`/private-files/${privateFileId}/${link.link}`}
                    key={i}
                    className="p-4 hover:text-white hover:bg-foreground transition-colors duration-200 flex items-center justify-center capitalize bg-light-100 rounded-xl flex-1"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex-1 flex flex-col gap-3 mt-10 max-md:w-full md:max-w-xs">
              {Array(2)
                .fill(0)
                .map((_, i) => {
                  return (
                    <Link
                      key={i}
                      href={`/private-files/${i + 1 + 7}`}
                      className="w-full flex md:aspect-square h-40 rounded-lg overflow-hidden relative"
                    >
                      <Image
                        src={file[`bannerUrl${i + 1 + 7}`]}
                        className="object-cover"
                        alt={title}
                        fill
                        sizes="100%"
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
