import Image from "next/image";
import Link from "next/link";

import { SparklesIcon } from "lucide-react";

import Countdown from "./components/countdown";

export default function Home() {
  return (
    <section id="comingSoon" className="relative">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hopeful sunrise over mountains"
          className="h-full w-full object-cover opacity-50"
          sizes="100vw"
          fill
        />
        <div className="bg-primary/75 absolute inset-0" />
        <div className="to-primary absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent" />
      </div>

      <div className="relative flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-primary grid h-9 w-9 place-items-center rounded-md text-xs font-semibold tracking-tight text-white ring-1 ring-white/10">
              W
            </div>
            <div className="text-lg font-semibold tracking-tight text-slate-100">
              WBFM
            </div>
          </div>

          <div className="mt-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/15 backdrop-blur">
              <SparklesIcon className="h-3.5 w-3.5 text-amber-300" />
              Coming soon
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Something hopeful is on the way.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200/90 sm:text-lg">
              We’re preparing an experience to better share how Jesus is
              transforming lives through Walk By Faith Ministry.
            </p>

            {/* Countdown */}
            <Countdown />
          </div>

          <footer className="mt-10 border-t border-white/10 pt-5">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} Walk By Faith Ministry | Created
              by{" "}
              <Link
                href="https://charlesnjenga.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Charles Njenga
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
