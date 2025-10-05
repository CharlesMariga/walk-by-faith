import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";

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
                  Walk By Faith Ministries
                  <br />
                  123 Hope Avenue, Suite 4
                  <br />
                  South Bend, Indiana 46615
                  <br />
                  United States
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-6 w-6 text-amber-300" />
                <Link href="tel:+15742881234" className="text-slate-300">
                  +1 (574) 288-1234
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <MailIcon className="h-6 w-6 text-amber-300" />
                <Link
                  href="mailto:info@walkbyfaithministries.org"
                  className="text-slate-300"
                >
                  info@walkbyfaithministries.org
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[21/9]">
                <Image
                  src="https://images.unsplash.com/photo-1584385971010-71c147ba5dbd?q=80&w=2275&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Contact"
                  className="h-full w-full object-cover object-center"
                  fill
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-black/0" />
                <div className="absolute bottom-6 left-6 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-200 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <SendIcon className="h-4 w-4 text-amber-300" />
                    <span>Visit us or schedule a call</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 p-4">
                <p className="text-xs text-slate-400">
                  Office Hours: Mon–Fri, 9:00–17:00 EAT
                </p>
                <Link
                  href="https://maps.app.goo.gl/q7pL86tDFJqZCJ7Q9"
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
    </section>
  );
}
