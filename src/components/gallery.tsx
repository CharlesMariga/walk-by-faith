import Image from "next/image";
import Link from "next/link";

import conference20224 from "@/assets/images/2022-conference-4.jpeg";
import nairobiHomeFellowship1 from "@/assets/images/nairobi-home-fellowship-1.jpeg";
import nairobiHomeFellowship4 from "@/assets/images/nairobi-home-fellowship-4.jpeg";
import visitingOldPeopleInAfrica2 from "@/assets/images/visiting-old-people-in-africa-2.jpeg";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  return (
    <div className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Witnessing Grace
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Moments of connection, service, and faith with Sam and Teresiah.
          </p>
        </div>

        <div className="grid h-[500px] grid-cols-1 gap-4 md:h-[400px] md:grid-cols-4">
          <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-200 md:col-span-2 md:row-span-2">
            <Image
              width={500}
              height={500}
              src={visitingOldPeopleInAfrica2}
              alt="Visiting old people in Africa"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium tracking-wide text-white">
                Visiting old people in Africa
              </span>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-200 md:col-span-1 md:row-span-1">
            <Image
              width={500}
              height={500}
              src={nairobiHomeFellowship1}
              alt="Nairobi Home Fellowship"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
          <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-200 md:col-span-1 md:row-span-1">
            <Image
              width={500}
              height={500}
              src={conference20224}
              alt="Maasai Women"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
          <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-200 md:col-span-2 md:row-span-1">
            <Image
              width={500}
              height={500}
              src={nairobiHomeFellowship4}
              alt="Nairobi Home Fellowship"
              className="h-full w-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent"></div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/gallery">View full gallery</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
