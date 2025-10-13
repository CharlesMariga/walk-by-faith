import Link from "next/link";

import {
  CreditCardIcon,
  HandCoins,
  LockIcon,
  LucideIcon,
  MailIcon,
} from "lucide-react";

import DonationModal from "./donation-modal";
import { Button } from "./ui/button";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

function FeatureCard({ title, description, ...props }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-inner transition hover:border-white/20 hover:bg-white/10">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
        <props.icon className="size-4 text-amber-300" />
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </div>
  );
}

export default function Donate() {
  return (
    <section
      id="donate"
      className="relative border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow/10">
          <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex w-full flex-col items-center justify-baseline gap-4 md:flex-row">
              <div className="w-full flex-1 space-y-2">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Support our work
                </h2>
                <p className="text-base text-slate-300 sm:text-lg">
                  Your donation helps us build and maintain community projects.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <DonationModal>
                  <Button className="font-semibold">
                    <HandCoins />
                    Donate Now
                  </Button>
                </DonationModal>
              </div>
            </div>

            {/* Why support  */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <FeatureCard
                icon={LockIcon}
                title="Fast & secure"
                description="Payments are processed by Stripe."
              />
              <FeatureCard
                icon={CreditCardIcon}
                title="No card data stored"
                description="Sensitive details never touch our servers."
              />
              <FeatureCard
                icon={MailIcon}
                title="Instant receipt"
                description="You'll receive a confirmation by email."
              />
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-slate-400">
          Looking for other ways to contribute?{" "}
          <Link
            href="#contact"
            className="font-medium text-slate-100 underline-offset-4 transition hover:text-white hover:underline"
          >
            Get in touch.
          </Link>
        </p>
      </div>
    </section>
  );
}
