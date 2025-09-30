import { useEffect, useState } from "react";

/**
 * Devone Charles — Portfolio (Single-Page)
 * Tech: React + Tailwind CSS
 * Sections: Home, Projects, About, Skills, Contact
 * Notes:
 *  - Uses your preferred hero gradient: linear-gradient(to right, #002f4b, #005c97)
 *  - Mobile-friendly nav with scroll-to-section links
 *  - Project cards include Breezy (weather app) + placeholders
 *  - Accessible (semantic landmarks, skip link, focus styles)
 */

export default function App() {
  useEffect(() => {
    document.body.style.background = "#f8fafc"; // slate-50
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-white/90 px-3 py-2 rounded-md shadow">Skip to main content</a>
      <SiteNav />
      <Hero />
      <main id="main" className="flex-1">
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onEsc(e) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const navLink = (
    label,
    href
  ) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-2 py-1.5 rounded-md hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600" />
          <span>Devone • Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navLink("Projects", "#projects")}
          {navLink("About", "#about")}
          {navLink("Skills", "#skills")}
          {navLink("Contact", "#contact")}
          <a href="#contact" className="ml-2 inline-flex items-center rounded-2xl px-4 h-10 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm">Hire Me</a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            {open ? (
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 0 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 1 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414L10.586 10.586 6.225 6.225a1 1 0 0 1 0-1.414Z" />
            ) : (
              <path fillRule="evenodd" d="M4 7h16a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2zm16 6H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm0 6H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 grid gap-2 text-sm">
            <a href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="py-2">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 inline-flex items-center justify-center rounded-2xl bg-indigo-600 text-white h-10">Hire Me</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate w-full" style={{ backgroundImage: "linear-gradient(to right, #002f4b, #005c97)" }}>
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517512006864-7edc3b933137?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="relative px-4 sm:px-6 py-24 md:py-32 lg:py-40 text-white">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm opacity-90">Senior QA Engineer • Frontend Dev</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">Hi, I’m Devone. I build reliable, user‑friendly apps.</h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl opacity-95">From test strategy and automation to polished UIs. Scroll to see selected work, including <span className="font-semibold">Breezy</span> — a simple weather app.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-2xl bg-white/95 text-slate-900 px-5 py-3 font-medium shadow hover:bg-white">View Projects</a>
            <a href="#contact" className="rounded-2xl bg-black/30 px-5 py-3 font-medium ring-1 ring-white/50 hover:bg-black/40">Contact</a>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="rounded-2xl bg-black/30 px-5 py-3 font-medium ring-1 ring-white/50 hover:bg-black/40">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const cards = [
    {
      title: "Breezy",
      desc: "Weather app with city search, geolocation, °F/°C toggle, and a 5‑day forecast using Open‑Meteo.",
      tags: ["React", "Tailwind", "API"],
      live: "https://devbreezyapp.netlify.app/", // TODO: replace
      repo: "https://github.com/devcharles16/weather-app", // TODO: replace
    },
    {
      title: "Hello App",
      desc: "Polished starter with gradient hero, responsive nav, modal case studies — your portfolio scaffold.",
      tags: ["React", "Tailwind"],
      live: "https://dchtodoapp.netlify.app/",
      repo: "https://github.com/devcharles16/todoapp"
    },
    {
      title: "QA Dashboard (WIP)",
      desc: "Test coverage snapshot and bug trends with mocked data; great for showcasing QA metrics.",
      tags: ["React", "Recharts"],
      live: "https://dchtodoapp.netlify.app/",
      repo: "https://github.com/devcharles16/todoapp",
    },
  ];

  return (
    <section id="projects" className="bg-slate-50 border-y border-slate-200 px-4 sm:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mt-3 text-slate-600">A selection of recent work. Case studies available on request.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((p, i) => (
            <article key={i} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg group-hover:text-indigo-600">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                {p.tags.map(t => (
                  <li key={t} className="rounded-full border border-slate-200 px-2 py-1 bg-slate-50">{t}</li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline">Live</a>
                <span className="text-slate-300">•</span>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline">Repo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-full px-4 sm:px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6 items-start">
        <p className="md:col-span-2 text-slate-700 leading-relaxed">
          I’m a Senior QA Engineer at Disney with a focus on building reliable software and clean user experiences.
          I lead test strategy, maintain automation suites, and enjoy shipping small apps that demonstrate practical frontend skills.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Test Strategy & Automation (Playwright, WebdriverIO, Selenium)</li>
            <li>API validation (Postman, REST)</li>
            <li>React + Tailwind UI development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { name: "Frontend", items: ["React", "Tailwind CSS", "Vite", "TypeScript (basic)"] },
    { name: "QA / Automation", items: ["Playwright", "WebdriverIO", "Selenium", "Postman"] },
    { name: "Tools", items: ["Git/GitHub", "Firebase (basics)", "Recharts", "Vercel/Netlify"] },
  ];
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(g => (
          <div key={g.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{g.name}</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              {g.items.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-3 text-slate-600">Open to opportunities and collaborations. Reach out and I’ll respond quickly.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href="mailto:you@example.com" className="flex items-center justify-center rounded-2xl border border-slate-200 h-12 hover:bg-slate-50">you@example.com</a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-2xl border border-slate-200 h-12 hover:bg-slate-50">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Devone Charles</p>
        <div className="flex items-center gap-3 text-sm">
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <span className="text-slate-300">•</span>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <span className="text-slate-300">•</span>
          <a href="#skills" className="hover:text-indigo-600">Skills</a>
          <span className="text-slate-300">•</span>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
