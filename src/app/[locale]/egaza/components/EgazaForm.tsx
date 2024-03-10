"use client";
import { requestEgaza } from "@/actions";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Select from "react-select";

function makeOptions(data: any) {
  return data.map((d: any) => ({ value: d.id, label: d.name_En }));
}

export default function EgazaForm({
  locale,
  categories,
  subcategories,
  sheikh,
}: {
  locale: string;
  categories: EgazaCategories[];
  subcategories: EgazaSubcategories[];
  sheikh: EgazaSheikh[];
}) {
  const categoriesOptions = makeOptions(categories);
  const subcategoriesOptions = makeOptions(subcategories);
  const sheikhOptions = makeOptions(sheikh);
  const t = useTranslations();

  return (
    <section className="section">
      <div className="container">
        <SectionHeader name="egaza" title="chooseYourEgaza" />
        <form
          action={(formData: FormData) => {
            requestEgaza(formData);
          }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col gap-3">
            <Select
              placeholder={t("category")}
              isSearchable
              name="Id"
              options={categoriesOptions}
            />
            <Select
              placeholder={t("subcategory")}
              isSearchable
              name="EgazaSubcategoryId"
              options={subcategoriesOptions}
            />
            <Select
              placeholder={t("sheikh")}
              isSearchable
              name="EgazaSheikhId"
              options={sheikhOptions}
            />
          </div>
          <button>send</button>
        </form>
      </div>
    </section>
  );
}
