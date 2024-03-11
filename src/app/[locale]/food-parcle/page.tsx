import PageSwiper from "@/components/PageSwiper";
import { unstable_setRequestLocale } from "next-intl/server";
import FoodParcleForm from "./components/FoodParcleForm";

export default function FoodParcle({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <PageSwiper heading="foodParcle" />
      <section className="section">
        <div className="container">
          <FoodParcleForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
