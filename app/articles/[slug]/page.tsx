
import { notFound } from "next/navigation";
import Link from "next/link";
export const instant = false;
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
  "what-is-technology": {
    category: "TECHNOLOGY FUNDAMENTALS",
    title: "What Is Technology? A Simple Guide to Understanding the World Around You",
    description:
      "Discover what technology really means, how it works, its history, everyday examples, and its importance for students and entrepreneurs.",
    date: "October 18, 2026",
    readTime: "10 min read",
    sections: [
      {
        heading: "Imagine a World Without Technology",
        paragraphs: [
          "Imagine waking up tomorrow without electricity, smartphones, vehicles, refrigerators, or the internet. Everyday tasks would become much harder.",
          "Technology is not limited to modern machines. Even a stone tool, a wheel, or a simple container can be technology when it helps people solve a problem.",
        ],
      },
      {
        heading: "What Is Technology?",
        paragraphs: [
          "Technology is the practical application of knowledge, skills, tools, and methods to solve problems or achieve useful goals.",
          "In simple words, technology is how humans turn knowledge into practical solutions. It can be a physical object, a digital system, a process, or a combination of these.",
        ],
      },
      {
        heading: "Where Did Technology Begin?",
        paragraphs: [
          "Technology began long before computers and electricity. Early humans developed stone tools, learned to control fire, and created ways to move objects more efficiently.",
          "Over time, people developed agriculture, machines, electrical systems, communication networks, and computers. The central idea remained the same: use knowledge and creativity to solve problems.",
        ],
      },
      {
        heading: "How Does Technology Work?",
        paragraphs: [
          "Many technologies begin with a problem. People apply knowledge, design a solution, test it, and improve it over time.",
          "Think of a water pump. It uses mechanical principles to move water from one place to another. Engineers can then improve its efficiency, reliability, and performance.",
          "A useful way to understand this process is: Problem → Knowledge → Design → Solution → Improvement.",
        ],
      },
      {
        heading: "Different Types of Technology",
        paragraphs: [
          "Mechanical technology includes bicycles, gears, engines, and machines. Electrical and energy technology includes batteries, solar panels, and electric motors.",
          "Information and communication technology includes computers, smartphones, and communication networks. Medical technology supports diagnosis and treatment, while biotechnology applies biological knowledge to practical problems.",
          "Digital technology includes software, websites, mobile applications, and digital payment systems. Artificial intelligence is another important area, involving systems designed to perform tasks such as recognizing patterns, making predictions, and generating content.",
        ],
      },
      {
        heading: "Is Technology the Same as Science?",
        paragraphs: [
          "Science investigates and explains the natural world. Technology applies knowledge to practical purposes. The two are closely connected and often help each other advance.",
          "For example, scientific knowledge about sunlight and materials helps engineers develop solar panels that convert sunlight into electrical energy.",
        ],
      },
      {
        heading: "Technology in Everyday Life",
        paragraphs: [
          "Technology helps us prepare food, travel, communicate, learn, store information, and make payments. Some technologies are visible, while others work quietly in the background.",
          "The important question is not simply whether something looks advanced. Ask what problem it solves and how effectively it solves it.",
        ],
      },
      {
        heading: "Why Technology Matters to Students",
        paragraphs: [
          "Understanding technology helps students explore computers, programming, digital research, science, and future careers.",
          "Students can start by asking questions about familiar tools, learning basic concepts, and building small projects. The goal is to understand how things work rather than merely learning how to operate them.",
        ],
      },
      {
        heading: "Why Technology Matters to Entrepreneurs",
        paragraphs: [
          "Businesses can use technology to manage inventory, communicate with customers, accept digital payments, display products online, and understand sales.",
          "Technology does not automatically make a business successful. The right tool should solve a real problem and fit the business's budget, customers, and needs.",
        ],
      },
      {
        heading: "Does Technology Always Make Life Better?",
        paragraphs: [
          "Technology can make tasks easier and create new opportunities, but it can also introduce privacy risks, security problems, distractions, environmental costs, and changes in employment.",
          "Before adopting a technology, ask what problem it solves, who benefits, what it costs, and what risks it might create.",
        ],
      },
      {
        heading: "How Is Technology Changing the Future?",
        paragraphs: [
          "Artificial intelligence, robotics, renewable energy, biotechnology, and advanced computing are important areas of technological development.",
          "These technologies may create new opportunities, but their outcomes depend on how they are developed and used. Understanding the basic principles helps us evaluate new ideas thoughtfully.",
        ],
      },
      {
        heading: "How Can You Start Understanding Technology?",
        paragraphs: [
          "Start by asking questions about everyday things. How does a phone connect to the internet? How does a QR code work? How does a digital payment reach its destination?",
          "Learn the fundamentals, experiment with practical tools, build small projects, and keep improving your knowledge. You do not need to understand everything before you begin.",
        ],
      },
      {
        heading: "The MalluTechys Way of Understanding Technology",
        paragraphs: [
          "At MalluTechys, we believe technology should be understandable to anyone willing to learn.",
          "We explore technology through four questions: What problem does it solve? How does it work? How can we use it? What can we create with it?",
          "Our approach is to understand, explore, apply, and create. You do not have to know everything before you start; you can build your understanding one concept at a time.",
        ],
      },
      {
        heading: "Conclusion: Technology Begins With a Human Problem",
        paragraphs: [
          "Technology is the practical application of knowledge, skills, tools, and methods to solve problems and achieve useful goals.",
          "From simple tools to artificial intelligence, its story is one of human curiosity, experimentation, creativity, and improvement.",
          "The next time you use a smartphone, switch on a light, or make a digital payment, ask yourself: What problem does this technology solve, and how does it work?",
          "MalluTechys — Technology. Innovation. Opportunity. Understand technology. Discover what's possible.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        paragraphs: [
          "What is technology in simple words? Technology is the use of knowledge, tools, and methods to solve problems or accomplish useful tasks.",
          "Is technology only about computers? No. It also includes tools, machines, energy systems, medical equipment, farming methods, and many other practical solutions.",
          "What is the difference between science and technology? Science investigates the natural world, while technology applies knowledge to practical purposes.",
          "Why is technology important for students and entrepreneurs? It can help students develop useful skills and help entrepreneurs improve operations, communicate with customers, and solve business problems.",
          "Can technology have disadvantages? Yes. Depending on how it is designed and used, it can create privacy risks, security problems, environmental costs, or unwanted dependence.",
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
    return { title: "Article not found" };
  }

  const article = articles[slug as ArticleSlug];

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/articles/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/articles/${slug}`,
      siteName: "MalluTechys",
    },
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
