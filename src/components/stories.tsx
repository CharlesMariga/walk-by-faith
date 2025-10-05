const stories = [
  {
    title: "Family in Rural Kenya",
    testimony:
      "When we received our first Bible, it changed our entire family. Now we gather every night to read together.",
  },
  {
    title: "Window & Children",
    testimony:
      "This home gave us dignity. We no longer sleep in the cold. Thank you for your love.",
  },
];

export default function Stories() {
  return (
    <section
      id="stories"
      className="relative border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Lives transformed because of you
          </h2>
          <p className="mt-4 text-center text-slate-300">
            Stories of lives transformed because of you.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06]"
            >
              <div>
                <div className="text-sm font-medium text-white">
                  {story.title}
                </div>
                <div className="text-xs text-slate-400">Testimony</div>
              </div>
              <blockquote className="mt-4 text-slate-200">
                <span className="align-top text-slate-500">“</span>
                {story.testimony}
                <span className="align-top text-slate-500">”</span>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
