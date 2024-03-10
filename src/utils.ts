import { BASE_URL } from "./constants";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import selectTranslation from "./hooks/selectTranslation";

export async function getSettings() {
  const res = await fetch(`${BASE_URL}/AppSettings`);
  return res.json();
}

export async function getArticles(articleId?: string) {
  const res = await fetch(
    `${BASE_URL}/Article${articleId ? `/${articleId}` : ""}`
  );
  return res.json();
}
export async function getBook(bookId?: string) {
  const res = await fetch(`${BASE_URL}/Book${bookId ? `/${bookId}` : ""}`);
  return res.json();
}
export async function getAudio(audioId?: string, mediaTypeId?: string) {
  const res = await fetch(
    `${BASE_URL}/Audio${audioId ? `/${audioId}` : ""}${
      mediaTypeId ? `?MediaTypeId=${mediaTypeId}` : ""
    }`
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

export async function getFatwa(fatwaId?: string) {
  const res = await fetch(`${BASE_URL}/Fatwa${fatwaId ? `/${fatwaId}` : ""}`);
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
  locale: string
) {
  let content: any = [];
  types.forEach(async (type) => {
    // loop over the types and fetch each type's data
    const res = await fetch(`${BASE_URL}/${endpoint}?${param}=${type.id}`);
    const typeData = await res.json();
    const { name } = selectTranslation(locale, type);
    content.push({ type, typeData, endpoint, name });
  });

  return content;
}

export async function getPrayerTimes(
  country: string = "GBR",
  city: string = "London"
) {
  const res = await fetch(
    `http://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}`,
    {
      next: {
        revalidate: 60,
      },
    }
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
