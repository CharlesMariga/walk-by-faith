export default function Logo() {
  return (
    <div className="group flex items-center gap-2">
      <div className="bg-primary grid h-8 w-8 place-items-center rounded-md text-xs font-semibold tracking-tight text-white ring-1 ring-white/10 transition-all group-hover:ring-amber-400/40">
        W
      </div>
      <div className="text-lg font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-white">
        WBFM
      </div>
    </div>
  );
}
