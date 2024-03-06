import { getFatwa } from "@/utils";
import SectionHeader from "../ui/SectionHeader";
import FatwasSlider from "./components/FatwasSlider";
import Image from "next/image";

export default async function LatestFatwas({ locale }: { locale: string }) {
  const fatwas = await getFatwa();

  return (
    <section className="section relative">
      <Image
        src={"/images/hero-bg.png"}
        alt="background"
        fill
        sizes="100%"
        className="-z-20 object-cover"
      />
      <div className="absolute w-full h-full -z-10 top-0 left-0 bg-light-100 opacity-80 -z-10"></div>
      <div className="container">
        <SectionHeader name="fatwa.title" title="fatwa.description" />
        <FatwasSlider fatwas={fatwas} locale={locale} />
      </div>
    </section>
  );
}
