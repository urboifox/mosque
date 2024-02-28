import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES, LOCALE_PREFIX } from "../constants";

export const locales = LOCALES;
export const localePrefix = LOCALE_PREFIX; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
