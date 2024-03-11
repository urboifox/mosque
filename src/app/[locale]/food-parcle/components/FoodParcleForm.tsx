"use client";

import { useState } from "react";
import AskForFoodForm from "./AskForFoodForm";
import DonateFoodForm from "./DonateFoodForm";
import MainButton from "@/components/ui/MainButton";
import { useTranslations } from "next-intl";

export default function FoodParcleForm({ locale }: { locale: string }) {
  const [activeForm, active] = useState(0);
  const form = activeForm !== 0 ? <AskForFoodForm /> : <DonateFoodForm />;
  const t = useTranslations();
  return (
    <>
      <div className="flex items-center gap-2 mx-auto w-max">
        <MainButton
          onClick={() => active(0)}
          className={`${
            activeForm === 0 && "active"
          } !border-foreground bg-foreground/80 hover:text-foreground py-2 rounded-xl [&.active]:!text-foreground`}
        >
          {t("donateFood")}
        </MainButton>
        <MainButton
          onClick={() => active(1)}
          className={`${
            activeForm === 1 && "active"
          } !border-foreground bg-foreground/80 hover:text-foreground py-2 rounded-xl [&.active]:!text-foreground`}
        >
          {t("askForFood")}
        </MainButton>
      </div>
      {form}
    </>
  );
}
