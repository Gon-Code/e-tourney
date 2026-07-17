"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Torneos", href: "/tournaments" },
    { name: "Crear Torneo", href: "/tournaments/new" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-yellow-600/30 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-xl font-bold tracking-widest text-transparent transition-all group-hover:brightness-110">
                ⚔️ E-TOURNEY
              </span>
              <span className="rounded border border-yellow-600/50 bg-yellow-950/30 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-500">
                LoL MVP
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-yellow-500"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-5 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500 to-amber-400 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link
              href="/tournaments/new"
              className="inline-flex items-center justify-center rounded border border-yellow-600 bg-gradient-to-b from-yellow-500/10 to-yellow-600/20 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-yellow-500 shadow-md transition-all duration-200 hover:from-yellow-500/20 hover:to-yellow-600/30 hover:shadow-yellow-500/10 active:scale-95"
            >
              Organizar Torneo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-yellow-600/10 bg-zinc-950/95" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-yellow-950/30 text-yellow-500 border-l-2 border-yellow-500"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-yellow-600/10 px-3">
              <Link
                href="/tournaments/new"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded border border-yellow-600 bg-gradient-to-b from-yellow-500/10 to-yellow-600/20 py-2.5 text-sm font-semibold tracking-wider uppercase text-yellow-500"
              >
                Organizar Torneo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
