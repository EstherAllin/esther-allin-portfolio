"use client";

import { useState, useEffect } from "react";
import NavLinks from "../molecules/NavLinks";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/60 bg-zinc-950/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-black tracking-tight text-white">
          Vala
          <span className="bg-gradient-to-r from-[#7B3FF2] via-[#FF2D95] to-[#FF8A3D] bg-clip-text text-transparent">
            Shibbs
          </span>
        </a>

        {/* Desktop links */}
        <NavLinks className="hidden items-center gap-8 md:flex" />

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex flex-col items-center justify-center gap-1.5 p-2 text-zinc-400 hover:text-white md:hidden"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-5 md:hidden">
          <NavLinks
            className="flex flex-col items-start gap-4"
            onClick={closeMenu}
          />
        </div>
      )}
    </header>
  );
}
