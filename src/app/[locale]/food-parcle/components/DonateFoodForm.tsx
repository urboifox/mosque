"use client";
import { requestFood } from "@/actions";
import MainButton from "@/components/ui/MainButton";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";

export default function DonateFoodForm() {
  const t = useTranslations();
  const router = useRouter();

  const initialMeal = {
    description: "",
    count: 1,
    index: 0,
  };

  const [errors, setErrors] = useState({
    Name: "",
    Phone1: "",
    Phone2: "",
    Address: "",
    Notes: "",
  });

  const [meals, setMeals] = useState([initialMeal]);

  return (
    <section className="section">
      <div className="container">
        <form
          action={async (formData: FormData) => {
            // remove index from meals
            const filteredMeals = meals.map((m) => ({
              description: m.description,
              count: m.count,
            }));
            formData.append("meals", JSON.stringify(filteredMeals));
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
                {t("donateFood")}
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
              <input
                required
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder={t("donationDate")}
                name="donationDate"
              />
              <div className="border-light-200">
                {meals.map((meal) => {
                  return (
                    <div
                      key={meal.index}
                      className="flex py-2 border-y border-light-200 dir-dynamic flex-col gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          name="description"
                          placeholder={t("mealDescription")}
                        />
                        {meals.length > 1 && (
                          <button
                            onClick={() => {
                              const n = [...meals];
                              let newMeals = n.filter(
                                (m) => m.index !== meal.index
                              );
                              newMeals = newMeals.map((meal, i) => ({
                                ...meal,
                                index: i,
                              }));
                              setMeals(newMeals);
                            }}
                            type="button"
                            className="bg-light-100 transition-colors duration-200 hover:bg-red-600 hover:text-white p-3 rounded-lg"
                          >
                            <IoCloseOutline size={25} />
                          </button>
                        )}
                      </div>
                      <input
                        type="number"
                        name="count"
                        placeholder={t("count")}
                      />
                    </div>
                  );
                })}
                <button
                  type="button"
                  onClick={() => {
                    setMeals([
                      ...meals,
                      { ...initialMeal, index: meals.length },
                    ]);
                  }}
                  className="bg-foreground text-white transition-colors duration-200 border border-foreground hover:text-foreground hover:bg-transparent py-2 px-4 text-xs rounded-lg mt-3 mx-auto w-max"
                >
                  {t("addAnotherMeal")}
                </button>
              </div>
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
