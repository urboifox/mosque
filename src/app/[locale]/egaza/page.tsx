import PageSwiper from "@/components/PageSwiper";
import {
  getEgazaCategories,
  getEgazaSheikh,
  getEgazaSubcategories,
  getSettings,
} from "@/utils";
import { unstable_setRequestLocale } from "next-intl/server";
import EgazaForm from "./components/EgazaForm";

export default async function EgazaPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const settingsPromise = getSettings();
  const egazaCategoriesPromise = getEgazaCategories();
  const EgazaSubcategoriesPromise = getEgazaSubcategories();
  const EgazaSheikhPromise = getEgazaSheikh();

  const [settings, egazaCategories, egazaSubcategories, egazaSheikh]: [
    SettingsResponse,
    EgazaCategories,
    EgazaSubcategories,
    EgazaSheikh
  ] = await Promise.all([
    settingsPromise,
    egazaCategoriesPromise,
    EgazaSubcategoriesPromise,
    EgazaSheikhPromise,
  ]);

  return (
    <div>
      <PageSwiper heading="egaza" media={settings.egazaBanner} />
      <EgazaForm
        categories={egazaCategories}
        subcategories={egazaSubcategories}
        sheikh={egazaSheikh}
        locale={locale}
      />
    </div>
  );
}
