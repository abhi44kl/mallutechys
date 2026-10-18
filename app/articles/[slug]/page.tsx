
import { notFound } from "next/navigation";
import Link from "next/link";

const articles = {
  "what-is-artificial-intelligence": {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "What Is Artificial Intelligence? A Beginner's Guide",
    description:
      "Learn what artificial intelligence is, how it works, and how it is used in everyday life.",
    date: "October 18, 2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "What is artificial intelligence?",
        paragraphs: [
          "Artificial intelligence, commonly called AI, is a field of computer science focused on building systems that can perform tasks associated with human intelligence.",
          "These tasks include recognizing patterns, understanding language, making predictions, and generating text or images.",
        ],
      },
      {
        heading: "How does AI work?",
        paragraphs: [
          "Many modern AI systems learn patterns from examples in data. During training, a model adjusts its internal parameters to improve its performance on a task.",
          "When you ask an AI assistant a question, it uses what it learned during training and the information available in the current interaction to produce a response. The result can be useful, but it can also be incorrect.",
        ],
      },
      {
        heading: "Where do we use AI?",
        paragraphs: [
          "AI is used in search engines, translation tools, recommendation systems, fraud detection, accessibility features, and many other applications.",
          "For example, a streaming service can use recommendation algorithms to suggest content based on viewing patterns.",
        ],
      },
      {
        heading: "What should beginners learn first?",
        paragraphs: [
          "Start by understanding the difference between AI, machine learning, and generative AI. Then experiment with practical tools and check their outputs against reliable sources.",
          "If you want to build AI systems, learn programming fundamentals, basic statistics, and how data is collected and evaluated.",
        ],
      },
   
    ],
},
"digital-skills-for-beginners": {
  category: "DIGITAL SKILLS",
  title: "Digital Skills Beginners Can Learn Today",
  description:
    "Explore practical digital skills and build a foundation for your technology journey.",
  date: "October 18, 2026",
  readTime: "5 min read",
  sections: [
    {
      heading: "What are digital skills?",
      paragraphs: [
        "Digital skills are the abilities needed to use computers, online services, and digital tools effectively.",
        "Examples include using spreadsheets, creating websites, editing images, communicating online, and working with AI tools.",
      ],
    },
    {
      heading: "Which skills should beginners learn?",
      paragraphs: [
        "Start with computer basics, internet research, document editing, spreadsheets, and online safety. Then choose a skill that matches your interests.",
        "If you enjoy building things, try HTML and CSS. If you enjoy analyzing information, explore spreadsheets and basic data analysis.",
      ],
    },
    {
      heading: "How can you practise?",
      paragraphs: [
        "Choose one small project, such as creating a personal webpage or building a monthly budget spreadsheet. Practise regularly and save your work so you can see your progress.",
        "Use free learning resources where possible, and build a portfolio of projects to demonstrate what you can do.",
      ],
    },
  ],
},
"how-to-build-your-first-website": {
  category: "INNOVATION",
  title: "How to Build Your First Website",
  description:
    "Learn the basic steps involved in turning an idea into a simple website.",
  date: "October 18, 2026",
  readTime: "8 min read",
  sections: [
    {
      heading: "Start with a clear purpose",
      paragraphs: [
        "Decide what your website should do. It might introduce your work, explain a topic, display products, or publish articles.",
        "Write down the main information visitors need and organize it into a few simple sections.",
      ],
    },
    {
      heading: "Learn the basic technologies",
      paragraphs: [
        "HTML provides the structure of a webpage, CSS controls its appearance, and JavaScript adds interactive behaviour.",
        "Frameworks such as Next.js build on these foundations and provide tools for creating larger websites.",
      ],
    },
    {
      heading: "Build, test, and improve",
      paragraphs: [
        "Start with one page, make sure it works on desktop and mobile, and check that links and text display correctly.",
        "Ask someone to test the site, fix problems, and publish it when it is ready. Continue improving it based on real user needs.",
      ],
    },
  ],
},
};


type ArticleSlug = keyof typeof articles;

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(articles, slug)) {
    return { title: "Article not found | MalluTechys" };
  }

  const article = articles[slug as ArticleSlug];

  return {
    title: `${article.title} | MalluTechys`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(articles, slug)) {
    notFound();
  }

  const article = articles[slug as ArticleSlug];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#14233b]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            Mallu<span className="text-blue-600">Techys</span>
          </Link>
          <Link
            href="/#latest"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            ← All articles
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <Link
          href="/#categories"
          className="text-xs font-bold tracking-[0.15em] text-blue-600"
        >
          {article.category}
        </Link>

        <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
          {article.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {article.description}
        </p>

        <div className="mt-7 border-y border-slate-200 py-4 text-sm text-slate-500">
          {article.date} <span className="mx-2">•</span> {article.readTime}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <p className="font-semibold">In this guide</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-slate-700">
            {article.sections.map((section) => (
              <li key={section.heading}>{section.heading}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-8 text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-[#14233b] p-7 text-white">
          <h2 className="text-xl font-bold">Keep exploring technology.</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Discover more practical guides and ideas on MalluTechys.
          </p>
          <Link
            href="/"
            className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
          >
            Visit homepage →
          </Link>
        </div>
      </article>

      <footer className="border-t border-slate-200 bg-white px-6 py-7 text-center text-sm text-slate-500">
        © 2026 MalluTechys. Technology. Innovation.
        Opportunity.
      </footer>
    </main>
  );
}
