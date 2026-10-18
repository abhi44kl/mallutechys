
const articles = [
  { 
    slug: "what-is-artificial-intelligence",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "How AI Is Changing the Way We Work",
    description:
      "Understand the tools, trends, and opportunities shaping the future of work.",
    readTime: "6 min read",
    number: "01",
  },
  { 
    slug: "digital-skills-for-beginners",
    category: "DIGITAL SKILLS",
    title: "Skills You Can Start Learning Today",
    description:
      "Explore practical technology skills to help you build your future.",
    readTime: "5 min read",
    number: "02",
  },
  { 
    slug: "how-to-build-your-first-website",
    category: "INNOVATION",
    title: "From an Idea to Your First Website",
    description:
      "Discover the essential steps to turn a simple idea into a digital product.",
    readTime: "8 min read",
    number: "03",
  },
];

const categories = [
  { number: "01", title: "Learn", detail: "AI, science & technology", icon: "↗" },
  { number: "02", title: "Earn", detail: "Skills, careers & opportunity", icon: "↗" },
  { number: "03", title: "Build", detail: "Startups & innovation", icon: "↗" },
  { number: "04", title: "Use", detail: "Tools, apps & tutorials", icon: "↗" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#14233b]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-2xl font-black tracking-tight">
            Mallu<span className="text-blue-600">Techys</span>
            <span className="ml-1 text-blue-600">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="hover:text-blue-600" href="#learn">Learn</a>
            <a className="hover:text-blue-600" href="#earn">Earn</a>
            <a className="hover:text-blue-600" href="#build">Build</a>
            <a className="hover:text-blue-600" href="#use">Use</a>
          </nav>

          <a
            href="#latest"
            className="rounded-full bg-[#14233b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Explore articles ↗
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28 lg:px-10">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Technology. Innovation. Opportunity.
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            Understand technology.
            <span className="mt-2 block text-blue-600">
              Discover what&apos;s possible.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Practical guides, emerging ideas, useful digital tools, and
            opportunities to help you navigate a technology-driven world.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#latest"
              className="rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Discover the latest <span className="ml-2">↗</span>
            </a>
            <a
              href="#categories"
              className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
            >
              Explore topics
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Clear explanations. Practical knowledge. New possibilities.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#14233b] p-8 text-white shadow-xl md:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-white/10" />

          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              The technology landscape
            </div>
            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight md:text-4xl">
              The future belongs to the curious.
            </h2>
            <p className="mt-4 max-w-sm leading-7 text-slate-300">
              Learn something new. Find a useful tool. Turn an idea into
              something real.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                ["AI", "Artificial intelligence"],
                ["01", "Digital skills"],
                ["IDEAS", "Innovation"],
                ["BUILD", "Create something"],
              ].map(([label, description]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <div className="text-lg font-extrabold text-blue-300">
                    {label}
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Explore MalluTechys
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Knowledge for what comes next.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.title}
                id={category.title.toLowerCase()}
                href="#latest"
                className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-slate-400">
                    {category.number}
                  </span>
                  <span className="text-xl text-blue-600 transition group-hover:translate-x-1">
                    {category.icon}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="latest" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              The latest from our desk
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Ideas worth exploring.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              A starting point for your technology journey. These are sample
              article previews that we&apos;ll develop into original content.
            </p>
          </div>
          <span className="text-sm font-semibold text-slate-500">
            Explore • Learn • Create
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <a
              href={`/articles/${article.slug}`}
              key={article.number}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-wide text-blue-600">
                  {article.category}
                </span>
                <span className="text-sm font-bold text-slate-300">
                  {article.number}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-snug">
                {article.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {article.description}
              </p>
              <div className="mt-7 border-t border-slate-100 pt-5 text-sm text-slate-500">
                {article.readTime} <span className="float-right">Preview ↗</span>
              </div>
              </a>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-blue-600 px-8 py-12 text-white md:px-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
            Start building your knowledge
          </p>
          <div className="mt-4 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Technology is changing.
              <br />
              Keep learning.
            </h2>
            <div>
              <p className="leading-7 text-blue-50">
                Explore new ideas, understand emerging technology, and find
                practical ways to put knowledge into action.
              </p>
              <a
                href="#categories"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Explore topics ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <a href="#" className="text-lg font-black tracking-tight text-[#14233b]">
            Mallu<span className="text-blue-600">Techys</span>.
          </a>
          <p>Technology. Innovation. Opportunity.</p>
          <p>© 2026 MalluTechys.</p>
        </div>
      </footer>
    </main>
  );
}
