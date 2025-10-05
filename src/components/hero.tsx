import Image from "next/image";

import { HandCoins, SparklesIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1640119259111-acc19f7c38f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="WBFM team with families—smiling and embracing"
          className="h-full w-full object-cover"
          sizes="100vw"
          priority
          fill
        />
        <div className="bg-primary/70 absolute inset-0"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0B0F19]"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-3xl">
            <span
              className="inline-flex translate-y-4 items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/15 backdrop-blur transition-all duration-700 ease-out will-change-transform"
              data-animate
            >
              <SparklesIcon className="h-3.5 w-3.5 text-amber-300" />
              Sharing the love of Christ
            </span>
            <h1
              className="mt-5 translate-y-4 text-4xl font-semibold tracking-tight text-white transition-all duration-700 ease-out will-change-transform sm:text-5xl lg:text-6xl"
              data-animate
              data-animate-delay="60"
            >
              ✨ Bringing Jesus and Hope to the Unreached
            </h1>
            <p
              className="mt-5 max-w-2xl translate-y-4 text-base text-slate-200/90 transition-all duration-700 ease-out will-change-transform sm:text-lg"
              data-animate
              data-animate-delay="120"
            >
              Every gift you give helps us feed the hungry, build homes, preach
              the Gospel, and transform lives in rural communities.
            </p>
            <div
              className="mt-8 flex translate-y-4 flex-col gap-3 transition-all duration-700 ease-out will-change-transform sm:flex-row"
              data-animate
              data-animate-delay="180"
            >
              <a
                href="#donate"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300 active:scale-[0.98]"
              >
                <HandCoins />
                Donate Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
