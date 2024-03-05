import { useTranslations } from "next-intl";
import Image from "next/image";
import MainButton from "../ui/MainButton";
import { Link } from "@/navigation";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="py-20 overflow-hidden p-8 rounded-[100px] relative min-h-96">
          <Image
            fill
            src="/images/hero-bg.png"
            alt="hero bg"
            className="object-cover -z-20"
            decoding="async"
          />
          <div className="absolute w-full h-full -z-10 top-0 left-0 bg-light-100 opacity-70"></div>
          <Content />
        </div>
      </div>
    </section>
  );
}

function Content() {
  const t = useTranslations();
  return (
    <div className="flex-col dir-dynamic lg:flex-row flex gap-10 justify-between items-center">
      <div className="text-center items-center flex flex-col gap-10">
        <Image
          src={"/images/minaret.svg"}
          alt="minaret"
          width={91}
          height={91}
        />
        <h1 className="text-foreground capitalize font-cinzel font-bold text-xl md:text-4xl md:leading-[50px] lg:!leading-[80px] lg:text-6xl">
          {t("home.title")}
        </h1>
        <p className="text-sm md:text-xl max-w-xl">{t("home.description")}</p>
        <Link href="/donate">
          <MainButton>{t("donateNow")}</MainButton>
        </Link>
      </div>
      <div className="rounded-[60px] aspect-square overflow-hidden relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] min-h-96 h-full">
        <Image
          src={"/images/hero-image.jpg"}
          alt="hero image"
          fill
          sizes="100%"
          className="max-w-full object-cover"
        />
      </div>
    </div>
  );
}
