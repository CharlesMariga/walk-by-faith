export default function Impact() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div
          className="-mt-10 translate-y-6 rounded-2xl bg-white/5 shadow/10 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-700 ease-out will-change-transform sm:-mt-14"
          data-animate
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-amber-300">
                <span className="text-xl">📖</span>
                <span className="text-xs tracking-wide text-slate-400 uppercase">
                  Bibles
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white">
                1,000+
              </div>
              <p className="text-sm text-slate-400">Bibles distributed</p>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-amber-300">
                <span className="text-xl">🏠</span>
                <span className="text-xs tracking-wide text-slate-400 uppercase">
                  Homes
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white">
                20+
              </div>
              <p className="text-sm text-slate-400">Homes built</p>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-amber-300">
                <span className="text-xl">🍞</span>
                <span className="text-xs tracking-wide text-slate-400 uppercase">
                  Families
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white">
                500+
              </div>
              <p className="text-sm text-slate-400">Families fed</p>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-amber-300">
                <span className="text-xl">🌍</span>
                <span className="text-xs tracking-wide text-slate-400 uppercase">
                  Communities
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white">
                10+
              </div>
              <p className="text-sm text-slate-400">
                Rural communities reached
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 py-5 sm:px-8">
            <p className="text-sm text-slate-300 sm:text-base">
              Every number represents a life touched. With your support, we can
              do even more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
