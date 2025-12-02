"use client";

import Link from "next/link";
import { useState } from "react";

import { HandCoins, MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import DonationModal from "./donation-modal";
import Logo from "./logo";
import { Button } from "./ui/button";

const NavLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#donate",
    label: "Donate",
  },
  {
    href: "#stories",
    label: "Stories",
  },
  {
    href: "#gallery",
    label: "Gallery",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

function PartnerWithUsButton() {
  return (
    <Button
      variant="secondary"
      className="font-semibold hover:bg-white/5 hover:text-white"
      asChild
    >
      <Link href="#contact">Partner With Us</Link>
    </Button>
  );
}

function DonationButton() {
  return (
    <DonationModal>
      <Button className="font-semibold">
        <HandCoins /> Donate Now
      </Button>
    </DonationModal>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-primary/80 sticky top-0 z-50 border-b border-white/10 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop view */}
          <nav className="hidden items-center gap-8 md:flex">
            {NavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <PartnerWithUsButton />
            <DonationButton />
          </div>

          {/* Mobile menu button */}
          <button
            id="menuBtn"
            className="inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 md:hidden"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <MenuIcon className="h-5 w-5 text-slate-200" />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn("border-t border-white/10 md:hidden", {
            hidden: !isMenuOpen,
          })}
        >
          <nav className="flex flex-col gap-1 py-3" onClick={toggleMenu}>
            {NavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 px-2 pt-2 pb-4">
              <PartnerWithUsButton />
              <DonationButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
