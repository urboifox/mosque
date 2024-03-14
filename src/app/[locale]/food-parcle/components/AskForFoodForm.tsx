"use client";
import { requestEgaza, requestFood } from "@/actions";
import MainButton from "@/components/ui/MainButton";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function AskForFoodForm() {
  const t = useTranslations();
  const router = useRouter();

  const [errors, setErrors] = useState({
    Name: "",
    Phone1: "",
    Phone2: "",
    Address: "",
    Notes: "",
  });

  return (
    <section className="section">
      <div className="container">
        <form
          action={async (formData: FormData) => {
            const res = await requestFood(formData);

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
              <h2 className="text-center mb-10 text-3xl capitalize font-bold font-cinzel">
                {t("askForFood")}
              </h2>
              <input required type="text" name="name" placeholder={t("name")} />
              {errors.Name && (
                <small className="text-red-500">{errors.Name}</small>
              )}
              <input type="text" name="address" placeholder={t("address")} />
              {errors.Address && (
                <small className="text-red-500">{errors.Address}</small>
              )}
              <input
                type="text"
                name="phone1"
                required
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
