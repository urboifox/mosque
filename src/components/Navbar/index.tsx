import { Link } from "@/navigation";
import Image from "next/image";
import { navLinks } from "./navLinks";
import NavCTA from "./components/NavCTA";
import NavMenu from "./components/NavMenu";
import { getLinksLibrary } from "@/utils";
import selectTranslation from "@/hooks/selectTranslation";

export default async function Navbar() {
  const navLibraries = await getLinksLibrary("1");
  const newNavLinks = navLinks.concat(
    navLibraries.map((e: any) => {
      const { title } = selectTranslation("en", e);
      return {
        title,
        href: `/private-files/${e.privateFileId}/links-library?libraryId=${e.id}`,
      };
    })
  );
  return (
    <header className="relative container flex items-center justify-between h-[80px] gap-5">
      <Link href="/">
        <Image
          src={"/images/logo.svg"}
          width={135}
          height={40}
          alt="Masjid logo"
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-3">
        {newNavLinks.map((link, i) => {
          return (
            <Link
              className="relative w-max uppercase font-semibold text-sm hover:text-primary transition-colors duration-300"
              href={link.href}
              key={i}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3 max-sm:gap-1 md:flex">
          <NavCTA />
        </div>
        <NavMenu navLinks={newNavLinks} />
      </div>
    </header>
  );
}
