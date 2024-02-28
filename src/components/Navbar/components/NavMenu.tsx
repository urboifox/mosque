"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "../navLinks";
import { Link } from "@/navigation";
import { AnimatePresence, motion } from "framer-motion";
import NavCTA from "./NavCTA";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(!open)}>
        <RxHamburgerMenu size={25} color="black" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            transition={{
              type: "tween",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute right-10 flex flex-col bg-nature-200 p-4 z-50 rounded-md"
          >
            {navLinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.href}
                  className="p-2 px-4 transition-colors w-full flex items-center w-full justify-center text-center duration-300 text-nature-700 hover:text-nature-110 flex w-max"
                >
                  <li>{link.title}</li>
                </Link>
              );
            })}
            <div className="flex text-nature-900 flex-col-reverse mt-2 items-center gap-3">
              <NavCTA />
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
