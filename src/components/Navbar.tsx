"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, User, ShoppingBag, Search } from "lucide-react";
import NavigationMenu from "./NavigationMenu";

interface NavbarProps {
  dark?: boolean;
}

export default function Navbar({ dark = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const iconColor = dark ? "text-black" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          className={`${iconColor} hover:opacity-50 transition-opacity`}
        >
          <Menu size={22} strokeWidth={1.2} />
        </button>

        <Link
          href="/"
          className={`absolute left-1/2 -translate-x-1/2 text-center leading-none select-none ${iconColor}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          <div className="text-xl font-bold tracking-[0.28em]">OR&bull;MA</div>
          <div className="text-[9px] tracking-[0.5em] font-normal mt-0.5">STUDIO</div>
        </Link>

        <div className={`flex items-center gap-5 ${iconColor}`}>
          <button aria-label="Account" className="hover:opacity-50 transition-opacity">
            <User size={20} strokeWidth={1.2} />
          </button>
          <button aria-label="Cart" className="hover:opacity-50 transition-opacity">
            <ShoppingBag size={20} strokeWidth={1.2} />
          </button>
          <button aria-label="Search" className="hover:opacity-50 transition-opacity">
            <Search size={20} strokeWidth={1.2} />
          </button>
        </div>
      </nav>

      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
