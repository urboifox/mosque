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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
