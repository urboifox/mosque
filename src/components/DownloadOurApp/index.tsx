import { Link } from "@/navigation";
import Image from "next/image";

export default function DownloadOurApp() {
  return (
    <section className="section w-full bg-foreground text-background">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="flex-grow max-md:w-1/2">
            <div className="relative h-full py-28 sm:py-40 ">
              <Image
                src="/images/phone.svg"
                alt="our app"
                draggable="false"
                className="absolute drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2"
                width={400}
                height={800}
              />
            </div>
          </div>
          <div className="flex-1 py-10 text-center flex flex-col items-center gap-8">
            <h2 className="font-bold font-cinzel text-2xl md:text-5xl">
              Download Our App
            </h2>
            <p className="text-sm md:text-base text-light-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-5 items-center">
              <Link href={""} target="_blank">
                <Image
                  src={"/images/huawei-store.svg"}
                  alt="Huawei store"
                  width={150}
                  height={45}
                />
              </Link>
              <Link href={""} target="_blank">
                <Image
                  src={"/images/apple-store.svg"}
                  alt="Apple store"
                  width={150}
                  height={45}
                />
              </Link>
              <Link href={""} target="_blank">
                <Image
                  src={"/images/play-store.svg"}
                  alt="play store"
                  width={150}
                  height={45}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
