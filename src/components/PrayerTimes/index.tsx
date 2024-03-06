import { getPrayerTimes } from "@/utils";
import SectionHeader from "../ui/SectionHeader";
import { useTranslations } from "next-intl";

export default async function PrayerTimes() {
  const times = await getPrayerTimes();
  return (
    <div>
      <SectionHeader name="prayerTimes" title="theFivePrayerTimes" />
      <Displayer times={times} />
    </div>
  );
}

function Displayer({ times }: { times: PrayerTimesResponse }) {
  const t = useTranslations();
  const {
    data: { timings, date },
  } = times;

  const timesToShow = [
    {
      name: "fajr",
      time: timings.Fajr,
    },
    {
      name: "sunrise",
      time: timings.Sunrise,
    },
    {
      name: "dhuhr",
      time: timings.Dhuhr,
    },
    {
      name: "asr",
      time: timings.Asr,
    },
    {
      name: "maghrib",
      time: timings.Maghrib,
    },
    {
      name: "isha",
      time: timings.Isha,
    },
  ];

  return (
    <div className="px-20 mb-20">
      <div className="text-xl flex flex-col items-center gap-5 text-center container rounded-[3rem] text-background py-10 bg-foreground">
        <p className="font-bold text-primary font-cinzel">
          {t("today")}: {date.readable}
        </p>
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {timesToShow.map((e, i) => {
            return (
              <article
                className=" p-5 flex gap-3 items-center justify-center flex-col text-center"
                key={i}
              >
                <h2 className="text-3xl font-bold font-cinzel capitalize">
                  {t(e.name)}
                </h2>
                <p className="font-medium">{e.time}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
