import { Link } from "@/navigation";
import { subNavLinks } from "../navLinks";

export default function SubNav() {
  return (
    <nav className="flex z-10 items-center flex-wrap justify-center gap-2 gap-x-3 absolute top-full left-0 w-full p-2 min-h-[50px] bg-nature-300 text-nature-900 rounded-b-[30px]">
      {subNavLinks.map((link, i) => {
        return (
          <Link
            className="relative capitalize text-xs lg:text-sm transition-colors hover:text-nature-700 duration-300"
            href={link.href}
            key={i}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
