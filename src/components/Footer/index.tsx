import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialLinks from "../ui/SocialLinks";
import { navLinks, subNavLinks } from "../Navbar/navLinks";
import { Link } from "@/navigation";

export default function Footer() {
  const t = useTranslations();

  const allLinks = navLinks.concat(subNavLinks);
  const chunksLinks = [];

  for (let i = 0; i < allLinks.length; i += 6) {
    chunksLinks.push(allLinks.slice(i, i + 6));
  }

  return (
    <div className="bg-foreground text-background">
      <div className="border-y border-gray/30">
        <div className="container">
          <div className="py-12 flex flex-col gap-10 lg:flex-row items-center">
            <div className="container flex-1 flex flex-col gap-5">
              <div className="flex items-center gap-6">
                <Image
                  src={"/images/logo-circle.png"}
                  width={100}
                  height={100}
                  alt={"mosque"}
                />
                <h3 className="text-white text-2xl font-medium">
                  {t("homeHeader.cityMosquePreston")}
                </h3>
              </div>
              <p className="text-[#d6dae1] leading-6 max-w-xl">
                {t("footer.description")}
              </p>
              <SocialLinks />
            </div>
            <div className="flex flex-1 gap-10 flex-wrap">
              {chunksLinks.map((e, i) => {
                return (
                  <ul key={i} className="flex flex-col gap-4">
                    <h3 className="!font-cinzel text-light-100">Quick Links</h3>
                    {e.map((link, j) => {
                      return (
                        <li key={j} className="w-max">
                          <Link
                            href={link.href}
                            className="text-nature-600 capitalize transition-colors duration-300 hover:text-hover"
                          >
                            {link.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-5 bg-nature-400 text-sm text-white flex items-center justify-center">
          &copy; 2023 City Mosque Preston
        </div>
      </div>
    </div>
  );
}
