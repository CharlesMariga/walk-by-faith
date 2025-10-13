import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";

import indianapolisImg from "@/assets/images/indianapolis.webp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-3 text-slate-300">
              We&apos;d love to hear from you. Reach out anytime for prayer,
              partnership, or questions.
            </p>
            <div className="mt-6 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-amber-300" />
                <div className="text-slate-300">
                  220 East 16th Street
                  <br />
                  Mishawaka, Indiana
                  <br />
                  zip 46544
                  <br />
                  United States
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-6 w-6 text-amber-300" />
                <Link href="tel:+15743867229" className="text-slate-300">
                  +1 (574) 386-7229
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <MailIcon className="h-6 w-6 text-amber-300" />
                <Link
                  href="mailto:info@walkbyfaithministries.org"
                  className="text-slate-300"
                >
                  walkbyfaithministry22@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[21/9]">
                <Image
                  src={indianapolisImg}
                  alt="Contact"
                  className="h-full w-full object-cover object-center"
                  width={2275}
                  height={1704}
                  placeholder="blur"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-black/0" />
                <div className="absolute bottom-6 left-6 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-200 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <SendIcon className="h-4 w-4 text-amber-300" />
                    <span>Visit us or schedule a call</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 p-4 sm:flex-row">
                <p className="w-full text-xs text-slate-400 sm:w-auto">
                  Office Hours: Mon–Fri, 9:00–17:00 EAT
                </p>
                <div className="w-full sm:w-auto">
                  <Link
                    href="https://maps.app.goo.gl/bZx9y91BV7twoiuX8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-slate-100 transition hover:bg-white/5"
                  >
                    Open in maps
                    <ArrowRightIcon className="h-4 w-4 -rotate-45 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
