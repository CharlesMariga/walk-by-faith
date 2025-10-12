import { Building2Icon, HeartIcon, ShieldCheckIcon } from "lucide-react";

const WhyGive = [
  {
    icon: ShieldCheckIcon,
    title: "Transparent use of funds",
    description: "Every dollar is accounted for.",
  },
  {
    icon: HeartIcon,
    title: "100% Gospel-centered",
    description: "We combine practical help with spiritual transformation.",
  },
  {
    icon: Building2Icon,
    title: "Lasting impact",
    description: "Homes, churches, and families built up in Christ.",
  },
];

export default function WyGive() {
  return (
    <section className="relative border-t border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why Give With WBFM?
          </h2>
          <p className="mt-4 text-center text-slate-300">
            Your support makes a difference in the lives of those we serve.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {WhyGive.map((item) => (
            <div
              key={item.title}
              className="translate-y-0 rounded-xl border border-white/10 bg-white/[0.04] p-6 opacity-100 transition-all duration-700 ease-out will-change-transform hover:-translate-y-1 hover:bg-white/[0.06]"
              data-animate=""
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-amber-300" />
                <div className="text-base font-semibold text-white">
                  {item.title}
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
