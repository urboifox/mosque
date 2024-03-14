"use client";
import { requestEgaza } from "@/actions";
import MainButton from "@/components/ui/MainButton";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import Select from "react-select";

function makeOptions(data: any) {
  return data.map((d: any) => ({ value: d.id, label: d.name_En }));
}

export default function EgazaForm({
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
  const router = useRouter();

  const [errors, setErrors] = useState({
    Id: "",
    EgazaSubcategoryId: "",
    EgazaSheikhId: "",
    Age: "",
    Name: "",
    Email: "",
    City: "",
    Phone1: "",
    Phone2: "",
    Notes: "",
  });

  return (
    <section className="section">
      <div className="container">
        <form
          action={async (formData: FormData) => {
            const res = await requestEgaza(formData);

            if (res.status === 200) {
              toast(t("applicationSent"));
              router.push("/");
            } else {
              setErrors(res.errors);
            }
          }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col gap-10 mt-10">
            <div className="flex dir-dynamic flex-col gap-3">
              <h2 className="text-center text-3xl capitalize font-bold font-cinzel">
                {t("egazaType")}
              </h2>
              <Select
                placeholder={t("category")}
                isSearchable
                name="Id"
                options={categoriesOptions}
              />
              {errors.Id && <small className="text-red-500">{errors.Id}</small>}
              <Select
                placeholder={t("subcategory")}
                isSearchable
                name="EgazaSubcategoryId"
                options={subcategoriesOptions}
              />
              {errors.EgazaSubcategoryId && (
                <small className="text-red-500">
                  {errors.EgazaSubcategoryId}
                </small>
              )}
              <Select
                placeholder={t("sheikh")}
                isSearchable
                name="EgazaSheikhId"
                options={sheikhOptions}
              />
              {errors.EgazaSheikhId && (
                <small className="text-red-500">{errors.EgazaSheikhId}</small>
              )}
            </div>
            <div className="flex dir-dynamic flex-col gap-3">
              <h2 className="text-center text-3xl capitalize font-bold font-cinzel">
                {t("yourInformation")}
              </h2>
              <input type="text" name="name" placeholder={t("name")} />
              {errors.Name && (
                <small className="text-red-500">{errors.Name}</small>
              )}
              <input type="email" name="email" placeholder={t("email")} />
              {errors.Email && (
                <small className="text-red-500">{errors.Email}</small>
              )}
              <input type="text" name="age" placeholder={t("age")} />
              {errors.Age && (
                <small className="text-red-500">{errors.Age}</small>
              )}
              <input type="text" name="city" placeholder={t("city")} />
              {errors.City && (
                <small className="text-red-500">{errors.City}</small>
              )}
              <input
                type="text"
                name="phone1"
                placeholder={t("phone") + " 1"}
              />
              {errors.Phone1 && (
                <small className="text-red-500">{errors.Phone1}</small>
              )}
              <div className="optional">
                <input
                  type="number"
                  name="phone2"
                  placeholder={t("phone") + " 2"}
                />
              </div>
              {errors.Phone2 && (
                <small className="text-red-500">{errors.Phone2}</small>
              )}
              <textarea name="notes" placeholder={t("notes")}></textarea>
              {errors.Notes && (
                <small className="text-red-500">{errors.Notes}</small>
              )}
            </div>
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}

function SubmitButton() {
  const t = useTranslations();
  const { pending } = useFormStatus();

  return (
    <MainButton
      disabled={pending}
      className="bg-foreground border-foreground hover:text-foreground rounded-md"
    >
      {t(pending ? "submitting" : "submit")}
    </MainButton>
  );
}
