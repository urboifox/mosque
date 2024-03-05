"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks, subNavLinks } from "../navLinks";
import { Link } from "@/navigation";
import { AnimatePresence, motion } from "framer-motion";
import NavCTA from "./NavCTA";
import { IoClose } from "react-icons/io5";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const allLinks = navLinks.concat(subNavLinks);
  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(!open)}>
        <RxHamburgerMenu size={25} color="black" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
            initial={{ opacity: 0, right: "-100%" }}
            animate={{ opacity: 1, right: 0 }}
            exit={{ opacity: 0, right: "-100%" }}
            className="fixed right-0 h-screen top-0 origin-right w-full md:w-1/2 flex flex-col bg-foreground text-background p-5 z-50 "
          >
            <button className="w-max ml-auto" onClick={() => setOpen(!open)}>
              <IoClose size={25} color="white" />
            </button>
            {navLinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.href}
                  className="p-2 px-4 transition-colors w-full flex items-center w-full justify-center text-center duration-300 text-background hover:text-primary flex w-max"
                >
                  <li>{link.title}</li>
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-5 justify-center flex-wrap">
              <NavCTA />
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
