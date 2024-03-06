import { BASE_URL } from "../constants";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export async function getSettings() {
  const res = await fetch(`${BASE_URL}/AppSettings`);
  return res.json();
}

export async function getArticles() {
  const res = await fetch(`${BASE_URL}/Article`);
  return res.json();
}

export async function getPrayerTimes(
  country: string = "GBR",
  city: string = "GB-BDG"
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
