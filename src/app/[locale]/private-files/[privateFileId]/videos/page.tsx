import PageSwiper from "@/components/PageSwiper";
import { getContentWithCategories, getMediaTypes, getSettings } from "@/utils";
import ContentWithCategories from "@/components/ui/ContentWithCategories";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function AudiosPage({
  params: { locale, privateFileId },
}: {
  params: { locale: string; privateFileId: number };
}) {
  unstable_setRequestLocale(locale);
  const settingsPromise = getSettings();
  const mediaTypesPromise = getMediaTypes();

  const [settings, mediaTypes]: [SettingsResponse, MediaType[]] =
    await Promise.all([settingsPromise, mediaTypesPromise]);

  const content = await getContentWithCategories(
    mediaTypes,
    "Video",
    "MediaTypeId",
    locale
  );

  return (
    <div>
      <PageSwiper media={settings.audiosBanner} heading="videos" />
      <ContentWithCategories
        locale={locale}
        content={content.filter((e: any) => e.privateFileId === +privateFileId)}
      />
    </div>
  );
}
