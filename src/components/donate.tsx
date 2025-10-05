import Image from "next/image";

import { HandCoins } from "lucide-react";

import { Button } from "./ui/button";

export default function Donate() {
  return (
    <section id="donate" className="relative">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg"
          alt="Donate"
          className="h-full w-full object-cover object-center"
          fill
        />
        <div className="absolute inset-0 bg-[#0B1B3D]/70" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0B0F19]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Be the reason a family smiles today
            </h2>
            <p className="mt-4 text-slate-100">
              Together, we can reach the unreached, feed the hungry, and empower
              the body of Christ.
            </p>
            <div className="mt-8">
              <Button className="font-semibold">
                <HandCoins /> Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
