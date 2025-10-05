import Link from "next/link";

import { HandCoins } from "lucide-react";

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
    href: "#contact",
    label: "Contact",
  },
];

export default function Nav() {
  return (
    <header className="bg-primary/80 sticky top-0 z-50 backdrop-blur-lg">
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
            <Button
              variant="secondary"
              className="font-semibold hover:bg-white/5 hover:text-white"
              asChild
            >
              <a href="#partner">Partner With Us</a>
            </Button>
            <Button asChild className="font-semibold">
              <a href="#donate">
                <HandCoins /> Donate Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
