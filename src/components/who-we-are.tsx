import Image from "next/image";

import { CrossIcon, HomeIcon, UsersIcon, UtensilsIcon } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative order-2 translate-y-6 transition-all duration-700 ease-out will-change-transform lg:order-1"
            data-animate
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-5 leading-relaxed text-slate-300">
              Walk By Faith Ministries, founded by Pastor Samuel Mariga Nganga
              and Pastor Teresia Nganga, is dedicated to reaching the unreached
              with the love of Christ. We travel to interior and rural areas
              worldwide to:
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CrossIcon className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-slate-300">
                  Share the Gospel of Jesus Christ
                </span>
              </li>
              <li className="flex items-start gap-3">
                <UtensilsIcon className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-slate-300">Feed the poor</span>
              </li>
              <li className="flex items-start gap-3">
                <HomeIcon className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-slate-300">Build homes and churches</span>
              </li>
              <li className="flex items-start gap-3">
                <UsersIcon className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-slate-300">
                  Empower families both spiritually and practically
                </span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-200">
                <span className="font-medium">👉 Our Vision:</span> To see Jesus
                known, experienced, and glorified among all nations.
              </p>
            </div>
          </div>
          <div
            className="order-1 translate-y-6 transition-all duration-700 ease-out will-change-transform lg:order-2"
            data-animate
            data-animate-delay="120"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Serving together in rural communities"
                className="h-full w-full scale-[1.02] object-cover transition-transform duration-700 hover:scale-[1.05]"
                width={587}
                height={440}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
