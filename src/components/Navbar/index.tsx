import { Link } from "@/navigation";
import Image from "next/image";
import { navLinks } from "./navLinks";
import NavCTA from "./components/NavCTA";
import NavMenu from "./components/NavMenu";

export default function Navbar() {
  return (
    <header className="relative container flex items-center justify-between h-[80px]">
      <Link href="/">
        <Image
          src={"/images/logo.svg"}
          width={135}
          height={40}
          alt="Masjid logo"
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-4">
        {navLinks.map((link, i) => {
          return (
            <Link
              className="relative uppercase font-semibold text-sm hover:text-primary transition-colors !font-cinzel hover:text-[#232f4b] duration-300"
              href={link.href}
              key={i}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3 hidden md:flex">
          <NavCTA />
        </div>
        <NavMenu />
      </div>
    </header>
  );
}
