"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import MainButton from "@/components/ui/MainButton";
import { useFormStatus } from "react-dom";
import { askFatwa } from "@/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AskForm() {
  const t = useTranslations();
  const [errors, setErrors] = useState({
    Name: "",
    Email: "",
  });
  const router = useRouter();

  return (
    <div>
      <form
        action={async (formData: FormData) => {
          const res = await askFatwa(formData);

          if (res.status === 400) {
            setErrors(res.errors);
          } else {
            toast.success(t("applicationSent"));
            router.push("/");
          }
        }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex dir-dynamic flex-col gap-3">
            <h2 className="text-center mb-10 text-3xl capitalize font-bold font-cinzel">
              {t("ask-for-fatwa")}
            </h2>
            <input required type="text" name="name" placeholder={t("name")} />
            {errors.Name && (
              <small className="text-red-500">{errors.Name}</small>
            )}
            <input required type="text" name="email" placeholder={t("email")} />
            {errors.Email && (
              <small className="text-red-500">{errors.Email}</small>
            )}
            <input
              required
              type="text"
              name="title_Ar"
              placeholder={t("titleAr")}
            />
            <input
              required
              type="text"
              name="title_En"
              placeholder={t("titleEn")}
            />
            <input required type="text" name="age" placeholder={t("age")} />
            <input required type="text" name="city" placeholder={t("city")} />
            <select
              className="bg-light-100 rounded-xl w-full px-4 py-4"
              name="gender"
            >
              <option value="other" disabled className="text-gray">
                {t("gender")}
              </option>
              <option value="male">{t("male")}</option>
              <option value="female">{t("female")}</option>
            </select>
            <textarea
              name="question_Ar"
              placeholder={t("questionAr")}
            ></textarea>
            <textarea
              name="question_En"
              placeholder={t("questionEn")}
            ></textarea>
          </div>
          <SubmitButton />
        </div>
      </form>
    </div>
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
