import { Link } from "@/navigation";
import Image from "next/image";
import { navLinks } from "./navLinks";
import NavCTA from "./components/NavCTA";
import SubNav from "./components/SubNav";
import NavMenu from "./components/NavMenu";

export default function Navbar() {
  return (
    <header className="relative container flex items-center justify-between h-[70px]">
      <Link href="/">
        <Image
          src={"/images/logo.png"}
          width={135}
          height={40}
          alt="Masjid logo"
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-4">
        {navLinks.map((link, i) => {
          return (
            <Link
              className="relative capitalize font-medium transition-colors hover:text-nature-300 duration-300"
              href={link.href}
              key={i}
            >
              {link.title}
              {link.withDot && (
                <span className="absolute w-2 h-2 bg-red-200 rounded-full -top-px -right-2"></span>
              )}
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
      <SubNav />
    </header>
  );
}
