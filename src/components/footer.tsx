import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary grid h-8 w-8 place-items-center rounded-md text-xs font-semibold tracking-tight text-white ring-1 ring-white/10 transition-all hover:ring-amber-400/40">
              W
            </div>
            <div>
              <div className="text-base font-semibold tracking-tight text-white">
                Walk By Faith Ministries
              </div>
              <p className="text-xs text-slate-400">
                Bringing Jesus and Hope to the Unreached
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="#about"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#donate"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Give
            </a>
            <a
              href="#stories"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Stories
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-500">
          &copy; <span id="year"></span> Walk By Faith Ministries. All rights
          reserved. | Created by{" "}
          <Link
            href="https://charlesnjenga.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors hover:text-white"
          >
            Charles Njenga
          </Link>
        </div>
      </div>
    </footer>
  );
}
