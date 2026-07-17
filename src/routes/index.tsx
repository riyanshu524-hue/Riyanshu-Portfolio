import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight, Mail, Github, Send, Code2, Brain, Workflow, Bot,
  ArrowDown, ArrowRight, Sparkles, Zap, Gauge, Check, Plus, Minus,
} from "lucide-react";
import PopIn from "@/components/PopIn";
import { usePerfMode } from "@/hooks/use-perf-mode";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WarriorOG — Software, AI & Automation Studio" },
      { name: "description", content: "Portfolio of WarriorOG — student & developer crafting software, AI agents, automation systems and Discord bots." },
      { property: "og:title", content: "WarriorOG — Software, AI & Automation Studio" },
      { property: "og:description", content: "Software, AI, automation & Discord bots. Built with craft." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { l: "Work", h: "#work" },
  { l: "Projects", h: "#projects" },
  { l: "Stack", h: "#stack" },
  { l: "About", h: "#about" },
  { l: "Contact", h: "#contact" },
];

const SERVICES = [
  { n: "01", icon: Code2, t: "Software", d: "Full-stack apps with TypeScript, React, Node & Python — built for speed and clarity.", tags: ["React", "Node", "Python"] },
  { n: "02", icon: Brain, t: "AI Systems", d: "Agents, copilots and pipelines that move the needle for real users.", tags: ["LLM", "Agents", "RAG"] },
  { n: "03", icon: Workflow, t: "Automation", d: "Quiet workflows that compound your output — APIs, scrapers, schedulers.", tags: ["n8n", "Cron", "APIs"] },
  { n: "04", icon: Bot, t: "Discord Bots", d: "Moderation, music, utility & security — bots that hold communities together.", tags: ["Discord.js", "Py-cord"] },
];

const STACK = [
  "TypeScript", "React", "Node.js", "Python", "Next.js", "TanStack",
  "Postgres", "Supabase", "Tailwind", "Motion", "OpenAI", "Vercel",
  "Cloudflare", "Docker", "Redis", "Git",
];

const PROCESS = [
  { n: "01", t: "Define", d: "Map the problem, the audience and the smallest version that proves the idea works." },
  { n: "02", t: "Design & Build", d: "Sharp architecture, clean UI, zero bloat — shaped around your real constraints." },
  { n: "03", t: "Ship & Refine", d: "Launch fast, measure, iterate. You stay in the loop the whole way through." },
];

const PROJECTS = [
  { y: "2026", t: "Sentinel", k: "Discord moderation suite", d: "AI-assisted moderation, raid defense and audit-grade logging for 50k+ member servers.", tags: ["Discord.js", "Postgres", "OpenAI"] },
  { y: "2025", t: "Loom", k: "Workflow automation", d: "Visual pipeline that stitches CRMs, webhooks and scrapers into self-healing flows.", tags: ["Node", "Redis", "n8n"] },
  { y: "2025", t: "Atlas", k: "AI research copilot", d: "RAG-powered assistant for indie founders — summarises markets, drafts briefs, cites sources.", tags: ["LLM", "RAG", "Next.js"] },
  { y: "2024", t: "Pulse", k: "Realtime analytics", d: "Sub-second dashboards for live ops teams. Edge-first, zero cold starts.", tags: ["TanStack", "Cloudflare", "TS"] },
];

const TESTIMONIALS = [
  { q: "Shipped in two weeks what our last vendor couldn't deliver in three months. Calm, sharp, surgical.", a: "Mira K.", r: "Founder, Loomstack" },
  { q: "The bot just… works. Our mod team finally sleeps at night. Worth every cent and then some.", a: "Devon R.", r: "Community lead, 38k server" },
  { q: "Best engineer I've worked with this year, and I work with a lot of engineers. Real craft.", a: "Aanya P.", r: "CTO, Northbeam" },
];

const FAQ = [
  { q: "How do you price projects?", a: "Fixed price for scoped work, weekly retainer for ongoing builds. You get a clear quote within 24h of our first call — no hidden hours." },
  { q: "Do you work solo or with a team?", a: "Solo by default. For larger builds I bring in a tight, trusted circle of designers and engineers I've shipped with before." },
  { q: "What's your typical timeline?", a: "MVPs land in 2–4 weeks. Production-grade systems take 6–12. I share a milestone plan on day one and stick to it." },
  { q: "Will I own the code?", a: "Always. You get a clean repo, full docs, and a handoff call. No lock-in, no proprietary glue." },
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <Work />
        <Projects />
        <Stack />
        <Process />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- NAV + PERF TOGGLE ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-ink/90 border-b border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <span className="h-2 w-2 rounded-full bg-coral perf-blink shrink-0" />
          <span className="font-display text-lg sm:text-xl font-medium truncate">WarriorOG</span>
          <span className="hidden md:inline serif text-muted-foreground text-sm">— studio of one</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a key={n.l} href={n.h} className="px-3 py-1.5 text-sm text-muted-foreground hover:text-cream transition">
              {n.l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <PerfToggle />
          <span className="hidden lg:inline mono text-[11px] text-muted-foreground">
            IST · {time || "—"}
          </span>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-coral text-ink px-3.5 py-1.5 text-xs sm:text-sm font-medium hover:brightness-110 transition"
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="md:hidden grid h-8 w-8 place-items-center rounded-full border border-line"
          >
            <div className="space-y-1">
              <div className="h-px w-4 bg-cream" />
              <div className="h-px w-4 bg-cream" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-ink">
          {NAV.map((n) => (
            <a
              key={n.l}
              href={n.h}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm border-b border-line"
            >
              {n.l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-5 py-3 text-sm text-coral"
          >
            Let's talk →
          </a>
        </div>
      )}
    </header>
  );
}

function PerfToggle() {
  const { mode, toggle, isLow } = usePerfMode();
  return (
    <button
      onClick={toggle}
      title={`Performance mode: ${mode.toUpperCase()} — click to switch`}
      aria-label={`Switch to ${isLow ? "high" : "low"}-motion mode`}
      className="group inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1.5 text-[10px] sm:text-[11px] mono uppercase tracking-wider hover:border-coral/60 transition"
    >
      {isLow ? <Gauge className="h-3 w-3 text-coral" /> : <Zap className="h-3 w-3 text-coral" />}
      <span className="hidden sm:inline">{isLow ? "Lite" : "Full"}</span>
      <span className="sm:hidden">{isLow ? "L" : "F"}</span>
    </button>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionLabel({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex items-center gap-3 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-coral">{n}</span>
      <span className="h-px flex-1 bg-line max-w-16" />
      <span>{l}</span>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-20 pb-20 sm:pb-28">
      <PopIn className="flex flex-wrap items-center gap-2 mb-10">
        <span className="tag">
          <span className="h-1.5 w-1.5 rounded-full bg-coral perf-blink" />
          Available · Q1 2026
        </span>
        <span className="tag">Remote · Worldwide</span>
        <span className="hidden sm:inline mono text-[11px] text-muted-foreground ml-auto">
          v8 · editorial
        </span>
      </PopIn>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-medium leading-[0.92] tracking-tight text-[clamp(2.8rem,11vw,8.5rem)]"
      >
        Building <span className="serif text-coral">quiet</span><br />
        software that<br />
        <span className="serif">just works.</span>
      </motion.h1>

      <div className="mt-10 sm:mt-14 grid sm:grid-cols-12 gap-8 items-end">
        <PopIn delay={0.08} className="sm:col-span-7">
          <p className="text-base sm:text-xl leading-relaxed text-cream/85 max-w-xl">
            I'm <span className="text-coral font-medium">WarriorOG</span> — a student &
            developer obsessed with AI, automation and elegant systems that disappear
            into the background.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-coral text-ink px-5 py-3 text-sm font-medium hover:brightness-110 transition"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium hover:bg-ink-2 transition"
            >
              See my work <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </PopIn>

        <PopIn delay={0.15} className="sm:col-span-5">
          <div className="grid grid-cols-3 gap-3">
            <MiniStat k="3+" v="years shipping" />
            <MiniStat k="40+" v="projects" />
            <MiniStat k="24h" v="reply window" />
          </div>
        </PopIn>
      </div>
    </section>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="card-raised p-4">
      <div className="font-display text-2xl sm:text-3xl text-coral leading-none">{k}</div>
      <div className="text-[11px] text-muted-foreground mt-2">{v}</div>
    </div>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Software", "AI Agents", "Automation", "Discord Bots", "Backend", "Cloud", "APIs", "Open Source", "UI / UX"];
  return (
    <section className="relative py-6 sm:py-8 overflow-hidden border-y border-line bg-ink-2">
      <div className="flex w-max gap-12 perf-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-12 shrink-0">
            {items.map((w) => (
              <span key={w} className="font-display text-2xl sm:text-4xl text-cream/90 flex items-center">
                {w}
                <Sparkles className="mx-6 h-4 w-4 text-coral" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- WORK / SERVICES ---------- */
function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="01" l="Services" /></PopIn>
      <div className="grid sm:grid-cols-12 gap-6 items-end mt-6 mb-10 sm:mb-14">
        <PopIn className="sm:col-span-8">
          <h2 className="font-display text-4xl sm:text-6xl leading-[0.95]">
            Four crafts. <span className="serif text-coral">One</span> obsession.
          </h2>
        </PopIn>
        <PopIn delay={0.08} className="sm:col-span-4">
          <p className="text-sm sm:text-base text-muted-foreground">
            Tight toolkit, on purpose. Depth over a long résumé of shallow services.
          </p>
        </PopIn>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {SERVICES.map((s, i) => (
          <PopIn key={s.t} delay={i * 0.05}>
            <article className="group card-raised p-6 sm:p-8 relative h-full transition hover:border-coral/50">
              <div className="flex items-start justify-between">
                <span className="mono text-xs text-muted-foreground">{s.n} / 04</span>
                <div className="grid place-items-center h-10 w-10 rounded-full bg-coral/12 text-coral border border-coral/25">
                  <s.icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="mt-10 font-display text-3xl sm:text-4xl leading-tight">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm">{s.d}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-line text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </PopIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="02" l="Selected Work" /></PopIn>
      <PopIn>
        <h2 className="mt-6 mb-10 sm:mb-14 font-display text-4xl sm:text-6xl leading-[0.95]">
          Things I've <span className="serif text-coral">shipped</span>.
        </h2>
      </PopIn>

      <div className="border-t border-line">
        {PROJECTS.map((p, i) => (
          <PopIn key={p.t} delay={i * 0.04}>
            <a href="#contact" className="group block border-b border-line py-6 sm:py-8 hover:bg-ink-2 transition px-2 -mx-2 rounded-md">
              <div className="grid sm:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                <div className="sm:col-span-1 mono text-xs text-muted-foreground">{p.y}</div>
                <div className="sm:col-span-3 font-display text-2xl sm:text-3xl">{p.t}</div>
                <div className="sm:col-span-3 text-sm text-coral">{p.k}</div>
                <div className="sm:col-span-4 text-sm text-muted-foreground">{p.d}</div>
                <div className="sm:col-span-1 flex justify-end">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-coral group-hover:rotate-45 transition" />
                </div>
              </div>
              <div className="mt-4 sm:mt-3 sm:ml-[8.5%] flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-line text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </PopIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- STACK ---------- */
function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="03" l="Tooling" /></PopIn>
      <div className="mt-6 grid sm:grid-cols-12 gap-10">
        <PopIn className="sm:col-span-5">
          <h2 className="font-display text-4xl sm:text-5xl leading-[0.95]">
            A small, <span className="serif text-coral">sharp</span> toolbox.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            I pick tools I trust and master them. No framework-of-the-week chasing —
            just things that ship reliably.
          </p>
        </PopIn>
        <PopIn delay={0.08} className="sm:col-span-7">
          <div className="card-raised p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full border border-line bg-ink text-sm hover:bg-coral hover:text-ink hover:border-coral transition cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="04" l="Process" /></PopIn>
      <PopIn>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl leading-[0.95] max-w-2xl">
          Three steps. <span className="serif text-coral">Zero</span> drama.
        </h2>
      </PopIn>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        {PROCESS.map((s, i) => (
          <PopIn key={s.n} delay={i * 0.06}>
            <div className="card-raised p-6 sm:p-8 h-full">
              <div className="mono text-xs text-coral">{s.n}</div>
              <h3 className="mt-6 font-display text-3xl">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </PopIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="05" l="Trust" /></PopIn>
      <PopIn>
        <h2 className="mt-6 mb-10 sm:mb-14 font-display text-4xl sm:text-6xl leading-[0.95]">
          Kind words from <span className="serif text-coral">real</span> humans.
        </h2>
      </PopIn>
      <div className="grid sm:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <PopIn key={t.a} delay={i * 0.06}>
            <figure className="card-raised p-6 sm:p-7 h-full flex flex-col justify-between">
              <blockquote className="font-display text-lg sm:text-xl leading-snug">
                <span className="serif text-coral">"</span>{t.q}<span className="serif text-coral">"</span>
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-line">
                <div className="text-sm">{t.a}</div>
                <div className="mono text-[11px] text-muted-foreground mt-0.5">{t.r}</div>
              </figcaption>
            </figure>
          </PopIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="06" l="About" /></PopIn>
      <div className="mt-6 grid sm:grid-cols-12 gap-10">
        <PopIn className="sm:col-span-7">
          <h2 className="font-display text-4xl sm:text-6xl leading-[0.95]">
            A student, <span className="serif text-coral">obsessed</span><br />
            with building.
          </h2>
          <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
            <p>
              I transform ideas into clean, reliable systems — from full-stack apps to
              intelligent Discord bots and AI agents that quietly do real work.
            </p>
            <p className="text-cream">
              <span className="serif text-coral">"</span>Consistency and curiosity are the only real shortcuts.<span className="serif text-coral">"</span>
            </p>
          </div>
        </PopIn>

        <PopIn delay={0.08} className="sm:col-span-5">
          <div className="card-raised p-6 sm:p-8">
            {[
              "Continuous improvement",
              "Innovation through tech",
              "Reliability & quality",
              "Curiosity & learning",
              "Simplicity & efficiency",
            ].map((v, i, arr) => (
              <div
                key={v}
                className={`flex items-baseline gap-4 py-3 ${i < arr.length - 1 ? "border-b border-line" : ""}`}
              >
                <Check className="h-4 w-4 text-coral shrink-0" />
                <span className="text-base sm:text-lg">{v}</span>
              </div>
            ))}
          </div>
        </PopIn>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="07" l="FAQ" /></PopIn>
      <div className="mt-6 grid sm:grid-cols-12 gap-10">
        <PopIn className="sm:col-span-5">
          <h2 className="font-display text-4xl sm:text-5xl leading-[0.95]">
            Common <span className="serif text-coral">questions</span>.
          </h2>
        </PopIn>
        <PopIn delay={0.08} className="sm:col-span-7">
          <div className="border-t border-line">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg sm:text-xl">{f.q}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-coral shrink-0" />
                    ) : (
                      <Plus className="h-4 w-4 text-coral shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="pb-5 pr-10 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </PopIn>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  // Set VITE_DISCORD_WEBHOOK in Vercel > Settings > Environment Variables
  const WEBHOOK = import.meta.env.VITE_DISCORD_WEBHOOK as string | undefined;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!WEBHOOK) { setStatus("err"); return; }
    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const subject = String(fd.get("subject") || "(no subject)");
    const message = String(fd.get("message") || "");
    const payload = {
      username: "Portfolio · Contact",
      embeds: [{
        title: `📩 ${subject}`,
        description: message,
        color: 0xff6a3d,
        fields: [
          { name: "Name", value: name || "—", inline: true },
          { name: "Email", value: email || "—", inline: true },
        ],
        timestamp: new Date().toISOString(),
      }],
    };
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) { setStatus("ok"); form.reset(); } else setStatus("err");
    } catch { setStatus("err"); }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <PopIn><SectionLabel n="08" l="Contact" /></PopIn>
      <div className="mt-6 grid sm:grid-cols-12 gap-10">
        <PopIn className="sm:col-span-6">
          <h2 className="font-display text-4xl sm:text-6xl leading-[0.95]">
            Got an idea?<br />
            <span className="serif text-coral">Let's make</span><br /> it real.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md text-base">
            Open for software, AI, automation and Discord bot work. Tell me what
            you're building — I reply within 24 hours.
          </p>

          <div className="mt-8">
            <a
              href="mailto:hello@warriorog.dev"
              className="flex items-center justify-between border-t border-line py-4 group"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-coral" />
                <span className="font-display text-lg sm:text-xl">hello@warriorog.dev</span>
              </span>
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between border-t border-b border-line py-4 group"
            >
              <span className="flex items-center gap-3">
                <Github className="h-4 w-4 text-coral" />
                <span className="font-display text-lg sm:text-xl">github.com/warriorog</span>
              </span>
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
            </a>
          </div>
        </PopIn>

        <PopIn delay={0.08} className="sm:col-span-6">
          <form onSubmit={onSubmit} className="card-raised p-6 sm:p-8 space-y-4">
            <Field name="name" label="Name" placeholder="Jane Doe" required />
            <Field name="email" type="email" label="Email" placeholder="jane@email.com" required />
            <Field name="subject" label="Subject" placeholder="A wild idea…" />
            <div>
              <label className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="mt-2 w-full bg-transparent border-b border-line py-2 text-base outline-none focus:border-coral resize-none transition text-cream placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-coral text-ink py-3.5 text-sm font-medium hover:brightness-110 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : status === "ok" ? "Sent ✓ thanks!" : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
            {status === "err" && (
              <p className="text-xs text-destructive text-center">
                Something went wrong. Email me directly.
              </p>
            )}
          </form>
        </PopIn>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-line py-2 text-base outline-none focus:border-coral transition text-cream placeholder:text-muted-foreground"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="font-display text-[18vw] sm:text-[13vw] leading-[0.85] tracking-tight">
          WarriorOG<span className="text-coral">.</span>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-between items-start sm:items-end mono text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-coral" />
            © {new Date().getFullYear()} — Software · AI · Automation
          </div>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-coral transition">
            Back to top <ArrowRight className="h-3 w-3 -rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
}
