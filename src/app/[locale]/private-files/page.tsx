import PageSwiper from "@/components/PageSwiper";
import { getSettings } from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import getPrivateFiles from "./getPrivateFiles";
import PrivateFilesGrid from "./components/PrivateFilesGrid";

export default async function PrivateFilesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const settingsPromise = getSettings();
  const privateFilesPromise = getPrivateFiles();

  const [settings, privateFiles]: [SettingsResponse, PrivateFileResponse[]] =
    await Promise.all([settingsPromise, privateFilesPromise]);

  return (
    <section>
      <PageSwiper heading="privateFiles" media={settings.privateFilesBanner} />
      <div className="container">
        <PrivateFilesGrid locale={locale} privateFiles={privateFiles} />
      </div>
    </section>
  );
}
