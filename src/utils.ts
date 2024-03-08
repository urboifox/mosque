import { BASE_URL } from "../constants";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
export async function getAudio(audioId?: string) {
  const res = await fetch(`${BASE_URL}/Audio${audioId ? `/${audioId}` : ""}`);
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

export async function getNews(newsId?: string) {
  const res = await fetch(`${BASE_URL}/News${newsId ? `/${newsId}` : ""}`);
  return res.json();
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
