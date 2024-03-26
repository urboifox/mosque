import { BASE_URL } from "./constants";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import selectTranslation from "./hooks/selectTranslation";

export async function getSettings() {
  const res = await fetch(`${BASE_URL}/AppSettings`);
  return res.json();
}
export async function getCards(cardId?: string, PrivateFileId?: string) {
  const res = await fetch(
    `${BASE_URL}/Card${cardId ? `/${cardId}` : ""}${
      PrivateFileId ? `?PrivateFileId=${PrivateFileId}` : ""
    }`
  );
  return res.json();
}

export async function getLinksLibrary(
  privateFileId: string,
  libraryId?: string
) {
  const res = await fetch(
    `${BASE_URL}/LinksLibrary${
      libraryId ? `/${libraryId}` : ""
    }?PrivateFileId=${privateFileId}`
  );

  return res.json();
}

export async function getArticles(articleId?: string, privateFileId?: string) {
  const res = await fetch(
    `${BASE_URL}/Article${articleId ? `/${articleId}` : ""}${
      privateFileId ? `?PrivateFileId=${privateFileId}` : ""
    }`
  );
  return res.json();
}
export async function getBook(bookId?: string) {
  const res = await fetch(`${BASE_URL}/Book${bookId ? `/${bookId}` : ""}`);
  return res.json();
}
export async function getAudio(
  audioId?: string,
  mediaTypeId?: string,
  PrivateFileId?: string
) {
  const res = await fetch(
    `${BASE_URL}/Audio${audioId ? `/${audioId}` : ""}?params=true${
      mediaTypeId ? `&MediaTypeId=${mediaTypeId}` : ""
    }${PrivateFileId ? `&PrivateFileId=${PrivateFileId}` : ""}`
  );
  return res.json();
}
// export async function getVisual(visualId?: string) {
//   const res = await fetch(
//     `${BASE_URL}/Visual${visualId ? `/${visualId}` : ""}`
//   );
//   return res.json();
// }
// export async function getInvitationCard(cardId?: string) {
//   const res = await fetch(
//     `${BASE_URL}/Invitation${cardId ? `/${cardId}` : ""}`
//   );
//   return res.json();
// }

export async function getFatwa(fatwaId?: string, privateFileId?: string) {
  const res = await fetch(
    `${BASE_URL}/Fatwa${fatwaId ? `/${fatwaId}` : ""}${
      privateFileId ? `?PrivateFileId=${privateFileId}` : ""
    }`
  );
  return res.json();
}

export async function getEgazaCategories() {
  const res = await fetch(`${BASE_URL}/EgazaRequest/GetEgazaCategories`);
  return res.json();
}
export async function getEgazaSubcategories() {
  const res = await fetch(`${BASE_URL}/EgazaRequest/GetEgazaSubcategories`);
  return res.json();
}
export async function getEgazaSheikh() {
  const res = await fetch(`${BASE_URL}/EgazaRequest/GetEgazaSheikh`);
  return res.json();
}

export async function getVideo(
  videoId?: string,
  mediaTypeId?: string,
  PrivateFileId?: string
) {
  const res = await fetch(
    `${BASE_URL}/Video${videoId ? `/${videoId}` : ""}?params=true${
      mediaTypeId ? `&MediaTypeId=${mediaTypeId}` : ""
    }${PrivateFileId ? `&PrivateFileId=${PrivateFileId}` : ""}`
  );
  return res.json();
}

export async function getNews(newsId?: string, newsTypeId?: string) {
  const res = await fetch(
    `${BASE_URL}/News${newsId ? `/${newsId}` : ""}${
      newsTypeId ? `?NewsTypeId=${newsTypeId}` : ""
    }`
  );
  return res.json();
}

export async function getLiveStream(liveStreamId?: string) {
  const res = await fetch(
    `${BASE_URL}/LiveStream${liveStreamId ? `/${liveStreamId}` : ""}`
  );
  return res.json();
}

export async function getEventAudios(eventId?: string, audioId?: string) {
  const res = await fetch(
    `${BASE_URL}/EventAudio${
      audioId ? `/${audioId}` : ""
    }${`?EventId=${eventId}`}`
  );
  return res.json();
}

export async function getEventImages(eventId?: string, imageId?: string) {
  const res = await fetch(
    `${BASE_URL}/EventPhoto${
      imageId ? `/${imageId}` : ""
    }${`?EventId=${eventId}`}`
  );
  return res.json();
}
export async function getEventVideos(eventId?: string, videoId?: string) {
  const res = await fetch(
    `${BASE_URL}/EventVideo${
      videoId ? `/${videoId}` : ""
    }${`?EventId=${eventId}`}`
  );
  return res.json();
}
export async function getNewsTypes() {
  const res = await fetch(`${BASE_URL}/NewsType`);
  return res.json();
}

export async function getMediaTypes() {
  const res = await fetch(`${BASE_URL}/MediaType`);
  return res.json();
}

export async function getContentWithCategories(
  types: any[],
  endpoint: string,
  param: string,
  locale: string,
  privateFileId?: number
) {
  let content: any[] = [];

  // Map each type to a promise of fetching its data
  const promises = types.map(async (type) => {
    // Fetch each type's data
    const res = await fetch(
      `${BASE_URL}/${endpoint}?${param}=${type.id}${
        privateFileId ? `&PrivateFileId=${privateFileId}` : ""
      }`
    );
    const typeData = await res.json();
    const { name } = selectTranslation(locale, type);
    return { type, typeData, endpoint, name };
  });

  // Wait for all promises to resolve
  content = await Promise.all(promises);
  return content;
}

export async function getPrayerTimes(
  country: string = "GBR",
  city: string = "London"
) {
  const res = await fetch(
    `http://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}`
  );

  if (!res.ok) {
    throw new Error("Failed to get prayer times");
  }

  return res.json();
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(inputDate: string) {
  const date = new Date(inputDate);
  const options: any = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

export function handleDownload(url: string, fileName: string, ext: string) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${fileName}.${ext}`);
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error fetching the file:", error);
    });
}
