import createMiddleware from "next-intl/middleware";
import { DEFAULT_LOCALE, LOCALES, LOCALE_PREFIX } from "../constants";

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: LOCALE_PREFIX,
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(ar|en)/:path*",
  ],
};
